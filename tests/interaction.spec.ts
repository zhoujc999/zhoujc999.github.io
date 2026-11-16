import { expect, test, type Page } from "@playwright/test";

const PAPER_URL = "https://doi.org/10.1145/3477244.3477621";
const desktop = { width: 1440, height: 1000 };
// Sticky header (4.5rem) plus the 1rem anchor gap, in CSS px.
const ANCHOR_OFFSET = 88;

// Smooth scrolling means positions settle over time, so every position check polls.

function revealStates(page: Page) {
  return page.locator("[data-reveal]").evaluateAll((elements) =>
    elements.map((element) => {
      const style = getComputedStyle(element);
      return {
        opacity: style.opacity,
        transform: style.transform,
        pending: element.classList.contains("reveal-pending"),
        inViewport: element.getBoundingClientRect().top < window.innerHeight,
      };
    }),
  );
}

function timelineProgress(page: Page) {
  return page
    .locator("[data-timeline-progress]")
    .evaluate((element: HTMLElement) => element.style.getPropertyValue("--timeline-progress"));
}

test.describe("with reduced motion", () => {
  test.beforeEach(async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.setViewportSize(desktop);
    await page.goto("/");
  });

  test("shows every block immediately", async ({ page }) => {
    const states = await revealStates(page);
    expect(states.length).toBeGreaterThan(10);
    for (const state of states) {
      expect(state).toMatchObject({ opacity: "1", transform: "none", pending: false });
    }
  });

  test("turns smooth scrolling off", async ({ page }) => {
    const behavior = await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    );
    expect(behavior).toBe("auto");
  });

  test("leaves the static timeline rail visible and unfilled", async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
    expect(await timelineProgress(page)).toBe("");

    const rail = await page.locator("[data-timeline]").evaluate((element) => {
      const style = getComputedStyle(element, "::before");
      return { background: style.backgroundColor, height: parseFloat(style.height) };
    });
    expect(rail.background).toBe("rgb(223, 227, 232)");
    expect(rail.height).toBeGreaterThan(100);
  });
});

test.describe("without JavaScript", () => {
  test.use({ javaScriptEnabled: false });

  test("keeps all content and links visible and usable", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("[data-experience-entry]")).toHaveCount(4);
    await expect(page.locator("[data-research-entry]")).toHaveCount(2);
    for (const block of await page.locator("[data-reveal]").all()) {
      await expect(block).toHaveCSS("opacity", "1");
    }
    await expect(page.locator(`a[href="${PAPER_URL}"]`)).toBeVisible();

    await page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: "About" }).click();
    await expect(page).toHaveURL(/#about$/);
    await expect(page.getByRole("heading", { level: 2, name: "About" })).toBeInViewport();
  });
});

test.describe("with normal motion", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize(desktop);
  });

  test("never hides what is on screen at load and reveals the rest on scroll", async ({ page }) => {
    // Record any block that is given the pending class while it is on screen.
    await page.addInitScript(() => {
      const flashed: string[] = [];
      Object.assign(window, { __flashed: flashed });
      new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          const element = mutation.target as HTMLElement;
          if (
            element.classList.contains("reveal-pending") &&
            element.getBoundingClientRect().top < window.innerHeight
          ) {
            flashed.push(element.className);
          }
        }
      }).observe(document, { subtree: true, attributes: true, attributeFilter: ["class"] });
    });
    await page.goto("/");

    const states = await revealStates(page);
    const onScreen = states.filter((state) => state.inViewport);
    const below = states.filter((state) => !state.inViewport);
    expect(onScreen.length).toBeGreaterThan(0);
    for (const state of onScreen) {
      expect(state).toMatchObject({ opacity: "1", pending: false });
    }
    // The script ran: blocks below the fold are waiting.
    expect(below.length).toBeGreaterThan(0);
    expect(below.every((state) => state.pending)).toBe(true);
    expect(await page.evaluate(() => (window as unknown as { __flashed: string[] }).__flashed)).toEqual([]);

    const lastBlock = page.locator("[data-reveal]").last();
    await lastBlock.scrollIntoViewIfNeeded();
    await expect(lastBlock).toHaveClass(/is-visible/);
    await expect(lastBlock).toHaveCSS("opacity", "1");
    await expect(lastBlock).not.toHaveClass(/reveal-pending/);
  });

  test("an anchor link updates the URL and lands below the sticky header", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: "Experience" }).click();

    await expect(page).toHaveURL(/#experience$/);
    await expect
      .poll(() =>
        page.locator("#experience").evaluate((element) => Math.round(element.getBoundingClientRect().top)),
      )
      .toBe(ANCHOR_OFFSET);

    const header = await page.locator("[data-header]").boundingBox();
    const heading = await page.getByRole("heading", { level: 2, name: "Experience" }).boundingBox();
    expect(heading!.y).toBeGreaterThanOrEqual(header!.y + header!.height);
    await expect(page.getByRole("heading", { level: 2, name: "Experience" })).toBeInViewport();
  });

  test("keyboard focus continues from the section after an anchor jump", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: "Research" }).focus();
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(/#research$/);

    // Native behavior: the next Tab starts from the target, not from the header.
    await page.keyboard.press("Tab");
    await expect(page.locator(`a[href="${PAPER_URL}"]`)).toBeFocused();
  });

  test("marks the section in view as the current location", async ({ page }) => {
    await page.goto("/");
    const nav = page.getByRole("navigation", { name: "Primary" });
    const current = page.locator("[data-nav-link][aria-current]");

    // Nothing is current while the hero fills the viewport.
    await expect(current).toHaveCount(0);

    await page.evaluate(() => document.querySelector("#research")!.scrollIntoView());
    await expect(nav.getByRole("link", { name: "Research" })).toHaveAttribute("aria-current", "location");
    await expect(current).toHaveCount(1);

    // The last section still becomes current at the very bottom of the page.
    await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
    await expect(nav.getByRole("link", { name: "About" })).toHaveAttribute("aria-current", "location");
    await expect(current).toHaveCount(1);

    await page.evaluate(() => window.scrollTo(0, 0));
    await expect(current).toHaveCount(0);
  });

  test("fills the timeline rail from 0 to 1 as the section passes", async ({ page }) => {
    await page.goto("/");
    await expect.poll(() => timelineProgress(page)).toBe("0");

    await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
    await expect.poll(() => timelineProgress(page)).toBe("1");
  });
});
