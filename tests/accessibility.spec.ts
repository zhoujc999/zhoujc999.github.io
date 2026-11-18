import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

// Every test here is tagged @a11y so `npm run test:a11y` runs just this file's checks.

const viewports = [
  { name: "desktop", width: 1440, height: 1000 },
  { name: "mobile", width: 390, height: 844 },
];

for (const path of ["/", "/404.html", "/blog/", "/blog/the-ghost-jam/"]) {
  for (const viewport of viewports) {
    test(`@a11y ${path} has no serious or critical axe violations on ${viewport.name}`, async ({
      page,
    }) => {
      // Reduced motion keeps reveal styles from hiding content from the audit.
      await page.emulateMedia({ reducedMotion: "reduce" });
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto(path);

      const { violations } = await new AxeBuilder({ page }).analyze();
      const blocking = violations
        .filter((violation) => violation.impact === "serious" || violation.impact === "critical")
        .map((violation) => ({
          rule: violation.id,
          impact: violation.impact,
          targets: violation.nodes.map((node) => node.target.join(" ")),
        }));

      expect(blocking).toEqual([]);
    });
  }
}

test("@a11y the skip link is the first tab stop and jumps to the main content", async ({ page }) => {
  await page.goto("/");

  await page.keyboard.press("Tab");
  const skipLink = page.getByRole("link", { name: "Skip to main content" });
  await expect(skipLink).toBeFocused();
  await expect(skipLink).toBeInViewport();

  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#main-content$/);

  // Focus continues inside <main>, past the whole header.
  await page.keyboard.press("Tab");
  await expect(page.locator("main").getByRole("link", { name: /view résumé/i })).toBeFocused();
});

test("@a11y the header is reachable by keyboard in reading order", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  const nav = page.getByRole("navigation", { name: "Primary" });

  await page.keyboard.press("Tab"); // skip link
  for (const name of ["Jingchao Zhou", "Experience", "Research", "About", "Writing", "Résumé"]) {
    await page.keyboard.press("Tab");
    const link = nav.getByRole("link", { name });
    await expect(link).toBeFocused();
    await expect(link).toHaveCSS("outline-style", "solid");
  }
});

test("@a11y a section anchor works from the keyboard", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: "About" }).focus();
  await page.keyboard.press("Enter");

  await expect(page).toHaveURL(/#about$/);
  await expect(page.getByRole("heading", { level: 2, name: "About" })).toBeInViewport();
});

test("@a11y links that open a new tab say so and are safe", async ({ page }) => {
  await page.goto("/");

  const links = page.locator('a[target="_blank"]');
  expect(await links.count()).toBeGreaterThan(0);
  for (const link of await links.all()) {
    await expect(link).toHaveAttribute("rel", /noopener/);
    await expect(link).toHaveAttribute("rel", /noreferrer/);
    await expect(link).toHaveAccessibleName(/opens in a new tab/);
  }

  // Nothing leaves the site in the same tab.
  const sameTabExternal = page.locator('a[href^="http"]:not([target="_blank"])');
  await expect(sameTabExternal).toHaveCount(0);
});
