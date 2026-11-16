import { expect, test } from "@playwright/test";

test("declares the page language and a responsive viewport", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.locator('meta[name="viewport"]')).toHaveAttribute(
    "content",
    /width=device-width/,
  );
});

test("self-hosts Geist and never requests Google Fonts", async ({ page }) => {
  const requests: string[] = [];
  page.on("request", (request) => requests.push(request.url()));

  await page.goto("/", { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);

  expect(requests.filter((url) => /fonts\.(googleapis|gstatic)\.com/.test(url))).toEqual([]);

  const fontRequests = requests.filter((url) => /geist[^/]*\.woff2/i.test(url));
  expect(fontRequests.length).toBeGreaterThan(0);
  const origin = new URL(page.url()).origin;
  for (const url of fontRequests) {
    expect(new URL(url).origin).toBe(origin);
  }

  const family = await page.evaluate(() => getComputedStyle(document.body).fontFamily);
  expect(family).toContain("Geist Variable");
});

test("constrains content to 1180px on a wide screen", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");

  const widths = await page
    .locator(".container")
    .evaluateAll((elements) => elements.map((element) => element.getBoundingClientRect().width));

  expect(widths.length).toBeGreaterThan(0);
  for (const width of widths) {
    expect(width).toBeLessThanOrEqual(1180);
  }
  expect(Math.max(...widths)).toBe(1180);
});

for (const width of [320, 390, 768, 1440]) {
  test(`has no horizontal overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - window.innerWidth,
    );
    expect(overflow).toBeLessThanOrEqual(0);
  });
}

test("sets ink text on the warm background", async ({ page }) => {
  await page.goto("/");

  const body = await page.evaluate(() => {
    const style = getComputedStyle(document.body);
    return { color: style.color, background: style.backgroundColor };
  });

  expect(body.color).toBe("rgb(23, 23, 23)");
  expect(body.background).toBe("rgb(247, 247, 244)");
});
