import { expect, test } from "@playwright/test";

const desktop = { width: 1440, height: 1000 };
const mobile = { width: 390, height: 844 };
const headerLinks = ["Experience", "Research", "About", "Résumé"];

test("header offers the four destinations and no Writing link", async ({ page }) => {
  await page.goto("/");
  const nav = page.getByRole("navigation", { name: "Primary" });

  for (const name of headerLinks) {
    await expect(nav.getByRole("link", { name })).toBeVisible();
  }
  await expect(page.getByRole("link", { name: /writing|blog/i })).toHaveCount(0);
});

for (const viewport of [mobile, desktop]) {
  test(`shows the same header links at ${viewport.width}px without a menu`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto("/");
    const nav = page.getByRole("navigation", { name: "Primary" });

    for (const name of headerLinks) {
      await expect(nav.getByRole("link", { name })).toBeVisible();
    }
    await expect(page.locator("details, summary, dialog, [role=dialog]")).toHaveCount(0);
    await expect(page.getByRole("button")).toHaveCount(0);
  });
}

test("hero shows the portrait, role statement, and introduction", async ({ page }) => {
  await page.setViewportSize(desktop);
  await page.goto("/");
  const hero = page.locator("[data-hero]");

  const portrait = hero.getByRole("img", { name: "Portrait of Jingchao Zhou" });
  await expect(portrait).toBeVisible();
  await expect
    .poll(() => portrait.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0))
    .toBe(true);

  await expect(hero).toContainText("Senior Software Engineer at Ramp");
  await expect(hero).toContainText(
    "I build the infrastructure that lets engineering teams ship independently.",
  );
  await expect(hero.getByRole("link", { name: /view résumé/i })).toBeVisible();
  await expect(hero.getByRole("link", { name: /github/i })).toBeVisible();
  await expect(hero.getByRole("link", { name: /linkedin/i })).toBeVisible();
});

test("core expertise comes with concise descriptions", async ({ page }) => {
  await page.goto("/");
  const strip = page.locator("[data-expertise]");
  const items = strip.locator("li");
  await expect(items).toHaveCount(3);

  const expected = [
    ["Developer Infrastructure", "Monolith decomposition, dependency boundaries, and CI tooling"],
    ["Distributed Systems", "Data pipelines and payment systems"],
    ["Autonomous-Vehicle Software", "Simulation testing, fault injection, and vehicle data infrastructure"],
  ];
  for (const [index, [label, description]] of expected.entries()) {
    await expect(items.nth(index)).toContainText(label);
    await expect(items.nth(index)).toContainText(description);
  }
  await expect(page.locator("[data-impact]")).toHaveCount(0);
});

test("sections use level-two headings and entries level-three", async ({ page }) => {
  await page.goto("/");

  for (const name of ["Experience", "Research", "About"]) {
    await expect(page.getByRole("heading", { level: 2, name, exact: true })).toBeVisible();
  }
  await expect(page.locator("[data-experience-entry] h3")).toHaveCount(4);
  await expect(page.locator("[data-research-entry] h3")).toHaveCount(2);
  await expect(
    page.locator(":is([data-experience-entry], [data-research-entry]) :is(h1, h2, h4, h5, h6)"),
  ).toHaveCount(0);
});

test("keeps every entry on the page at mobile width", async ({ page }) => {
  await page.setViewportSize(mobile);
  await page.goto("/");

  const entries = page.locator("[data-experience-entry], [data-research-entry]");
  await expect(entries).toHaveCount(6);
  for (const entry of await entries.all()) {
    await expect(entry).toBeVisible();
    await expect(entry.locator("li").first()).toBeVisible();
  }
});

for (const width of [320, 390, 768, 1440]) {
  test(`portrait is at most 320px wide at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");

    const box = await page.getByRole("img", { name: "Portrait of Jingchao Zhou" }).boundingBox();
    expect(box).not.toBeNull();
    expect(box!.width).toBeLessThanOrEqual(320);
    expect(box!.width).toBeGreaterThan(0);
  });
}

test("footer repeats the links, location, and callsign", async ({ page }) => {
  await page.goto("/");
  const footer = page.getByRole("contentinfo");

  for (const name of [/github/i, /linkedin/i, /résumé/i]) {
    await expect(footer.getByRole("link", { name })).toBeVisible();
  }
  await expect(footer).toContainText("New York, NY");
  await expect(footer).toContainText("KO4FUI");
});
