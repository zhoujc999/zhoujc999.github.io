import { readFile } from "node:fs/promises";
import { expect, test } from "@playwright/test";

const SITE = "https://zhoujc999.github.io";
const TITLE = "Jingchao Zhou | Senior Software Engineer";
const DESCRIPTION =
  "Jingchao Zhou is a Senior Software Engineer at Ramp in New York, building developer infrastructure and payment systems. Previously at Nuro. M.Eng., UC Berkeley.";

test("homepage has a title, description, canonical URL, and favicon", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(TITLE);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", DESCRIPTION);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `${SITE}/`);
  await expect(page.locator('link[rel="icon"]')).toHaveAttribute("href", "/favicon.ico");
});

test("homepage has absolute Open Graph and Twitter fields", async ({ page }) => {
  await page.goto("/");

  const expected: Record<string, string> = {
    'meta[property="og:type"]': "website",
    'meta[property="og:title"]': TITLE,
    'meta[property="og:description"]': DESCRIPTION,
    'meta[property="og:url"]': `${SITE}/`,
    'meta[property="og:image"]': `${SITE}/og-image.png`,
    'meta[name="twitter:card"]': "summary_large_image",
    'meta[name="twitter:title"]': TITLE,
    'meta[name="twitter:description"]': DESCRIPTION,
    'meta[name="twitter:image"]': `${SITE}/og-image.png`,
  };
  for (const [selector, content] of Object.entries(expected)) {
    await expect(page.locator(selector)).toHaveAttribute("content", content);
  }
});

test("homepage has one Person JSON-LD block", async ({ page }) => {
  await page.goto("/");

  const blocks = page.locator('script[type="application/ld+json"]');
  await expect(blocks).toHaveCount(1);

  const data = JSON.parse((await blocks.textContent()) ?? "");
  expect(data).toMatchObject({
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jingchao Zhou",
    url: `${SITE}/`,
    jobTitle: "Senior Software Engineer",
  });
  expect(data.sameAs).toEqual(
    expect.arrayContaining([
      "https://github.com/zhoujc999",
      "https://www.linkedin.com/in/jingchaozhou/",
    ]),
  );
});

test("social card is a 1200×630 PNG and is served", async ({ request }) => {
  const png = await readFile("public/og-image.png");

  // PNG layout: 8-byte signature, then the IHDR chunk with width and height
  // as big-endian 32-bit integers at byte offsets 16 and 20.
  expect(png.subarray(1, 4).toString("ascii")).toBe("PNG");
  expect(png.readUInt32BE(16)).toBe(1200);
  expect(png.readUInt32BE(20)).toBe(630);

  const response = await request.get("/og-image.png");
  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("image/png");
});

test("robots.txt points at the generated sitemap", async ({ request }) => {
  const robots = await request.get("/robots.txt");
  expect(robots.status()).toBe(200);
  expect(await robots.text()).toContain(`Sitemap: ${SITE}/sitemap-index.xml`);

  const sitemap = await request.get("/sitemap-index.xml");
  expect(sitemap.status()).toBe(200);
});

test("404 page has its own heading, a way home, and is not indexed", async ({ page }) => {
  await page.goto("/404.html");

  await expect(page.getByRole("heading", { level: 1, name: "Page not found" })).toBeVisible();
  await expect(page.getByRole("link", { name: /home/i })).toHaveAttribute("href", "/");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
  await expect(page.locator('link[rel="canonical"]')).toHaveCount(0);
});
