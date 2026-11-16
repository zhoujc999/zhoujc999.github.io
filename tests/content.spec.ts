import { expect, test } from "@playwright/test";

const PAPER_URL = "https://doi.org/10.1145/3477244.3477621";

const viewports = [
  { name: "desktop", width: 1440, height: 1000 },
  { name: "mobile", width: 390, height: 844 },
];

for (const viewport of viewports) {
  test.describe(`content at ${viewport.name} width`, () => {
    test.use({ viewport: { width: viewport.width, height: viewport.height } });

    test("has one main landmark and one level-one heading", async ({ page }) => {
      await page.goto("/");
      await expect(page.locator("main")).toHaveCount(1);
      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page.locator("h1")).toHaveText("Jingchao Zhou");
    });

    test("renders every experience and research entry in one DOM", async ({ page }) => {
      await page.goto("/");
      await expect(page.locator("[data-experience-entry]")).toHaveCount(7);
      await expect(page.locator("[data-research-entry]")).toHaveCount(2);
    });
  });
}

test("lists experience newest first", async ({ page }) => {
  await page.goto("/");
  const headings = await page.locator("[data-experience-entry] h3").allTextContents();
  const expected = [
    "Ramp",
    "Nuro",
    "Mastercard",
    "Nutanix",
    "Duke University Dept. of CS",
    "Duke China-US Summit",
    "IMRE",
  ];
  expect(headings).toHaveLength(expected.length);
  expected.forEach((company, index) => {
    expect(headings[index]).toContain(company);
  });
});

test("every résumé link points at the PDF", async ({ page }) => {
  await page.goto("/");
  const links = page.getByRole("link", { name: /résumé/i });
  expect(await links.count()).toBeGreaterThan(0);
  for (const link of await links.all()) {
    await expect(link).toHaveAttribute("href", "/jingchao-zhou-resume.pdf");
  }
});

test("the paper link goes to the DOI with safe external-link attributes", async ({ page }) => {
  await page.goto("/");
  const paper = page.locator(`a[href="${PAPER_URL}"]`);
  await expect(paper).toHaveCount(1);
  await expect(paper).toHaveAttribute("target", "_blank");
  await expect(paper).toHaveAttribute("rel", /noopener/);
  await expect(paper).toHaveAttribute("rel", /noreferrer/);
});

test("renders no raw Markdown syntax", async ({ page }) => {
  await page.goto("/");
  const text = await page.locator("main").innerText();
  expect(text).not.toContain("*");
  expect(text).not.toContain("](");
});

test("has no previous/next carousel controls", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("button", { name: /previous|next/i })).toHaveCount(0);
});
