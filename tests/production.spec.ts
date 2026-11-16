import { readFile } from "node:fs/promises";
import { expect, test, type Page } from "@playwright/test";

/** Brings every lazily loaded image on screen once so it starts loading. */
async function scrollThroughImages(page: Page) {
  for (const image of await page.locator("img").all()) {
    await image.scrollIntoViewIfNeeded();
  }
}

test("loads without console errors or failed requests", async ({ page, baseURL }) => {
  const problems: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") problems.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => problems.push(`exception: ${error.message}`));
  page.on("requestfailed", (request) => problems.push(`failed: ${request.url()}`));
  page.on("response", (response) => {
    if (response.status() >= 400 && response.url().startsWith(baseURL!)) {
      problems.push(`${response.status()}: ${response.url()}`);
    }
  });

  await page.goto("/", { waitUntil: "networkidle" });
  await scrollThroughImages(page);
  await page.waitForLoadState("networkidle");

  expect(problems).toEqual([]);
});

test("every in-page link has exactly one target and ids are unique", async ({ page }) => {
  await page.goto("/");

  const report = await page.evaluate(() => {
    const ids = [...document.querySelectorAll("[id]")].map((element) => element.id);
    const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
    const hashes = [...document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')].map((link) =>
      decodeURIComponent(link.hash.slice(1)),
    );
    const targetCounts = hashes.map((id) => ({ id, count: ids.filter((other) => other === id).length }));
    return { duplicateIds, targetCounts };
  });

  expect(report.duplicateIds).toEqual([]);
  expect(report.targetCounts.length).toBeGreaterThanOrEqual(4);
  for (const target of report.targetCounts) {
    expect(target).toEqual({ id: target.id, count: 1 });
  }
});

test("the résumé is served as a PDF", async ({ request }) => {
  const response = await request.get("/jingchao-zhou-resume.pdf");

  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("application/pdf");
  expect((await response.body()).subarray(0, 4).toString("ascii")).toBe("%PDF");
});

test("every image loads and stays inside its container", async ({ page }) => {
  await page.goto("/");
  await scrollThroughImages(page);

  const images = page.locator("img");
  expect(await images.count()).toBe(10); // portrait + nine logos

  for (const image of await images.all()) {
    await expect
      .poll(() => image.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0))
      .toBe(true);

    const overflow = await image.evaluate((img) => {
      const own = img.getBoundingClientRect();
      const parent = img.parentElement!.getBoundingClientRect();
      return Math.max(own.right - parent.right, parent.left - own.left, 0);
    });
    expect(overflow).toBeLessThanOrEqual(0.5);
  }
});

for (const path of ["/", "/404.html"]) {
  for (const width of [320, 390, 768, 1024, 1440]) {
    test(`${path} has no horizontal overflow at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(path);

      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - window.innerWidth,
      );
      expect(overflow).toBeLessThanOrEqual(0);
    });
  }
}

test("the static HTML carries the full content without JavaScript", async () => {
  const html = await readFile("dist/index.html", "utf8");

  // One distinctive phrase per experience and research entry, plus the hero and the paper.
  const phrases = [
    "I build the infrastructure that lets engineering teams ship independently.",
    "Led decomposition of Ramp",
    "fault-injection framework to scalably test 70K+ failure modes",
    "persistent unit test failures in Jenkins logs",
    "gRPC-based microservice",
    "CS 250: Computer Architecture",
    "guest panelists for the annual summit",
    "trace explosive detection",
    "WIP: The Cyber-Physical Immune System",
    "vehicular cruise control system",
    "fields-of-view of multiple cameras",
    "https://doi.org/10.1145/3477244.3477621",
  ];
  for (const phrase of phrases) {
    expect(html).toContain(phrase);
  }
  expect(html.match(/data-experience-entry/g)).toHaveLength(7);
  expect(html.match(/data-research-entry/g)).toHaveLength(2);
});

test("there is no blog or writing route yet", async ({ request }) => {
  for (const path of ["/blog", "/blog/", "/writing", "/writing/"]) {
    expect((await request.get(path)).status()).toBe(404);
  }
});

test("an unknown path gets the 404 page", async ({ page }) => {
  const response = await page.goto("/this-page-does-not-exist");

  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1, name: "Page not found" })).toBeVisible();
});
