import { expect, test } from "@playwright/test";

const SITE = "https://zhoujc999.github.io";

// The only post. When it is renamed or replaced, update this and the post
// path in accessibility.spec.ts and production.spec.ts.
const POST = {
  path: "/blog/the-ghost-jam/",
  title: "The Ghost Jam: Why Traffic Stops When Nothing Is Wrong",
  description:
    "You didn't drive through a traffic jam. You drove through the ghost of one — a wave that can appear out of nothing on an empty road.",
  day: "2026-11-22",
  dayLabel: "November 22, 2026",
};

test("the blog index lists the post with its date, title, and description", async ({ page }) => {
  await page.goto("/blog/");

  await expect(page).toHaveTitle("Writing | Jingchao Zhou");
  await expect(page.locator("h1")).toHaveCount(1);
  await expect(page.locator("h1")).toHaveText("Writing");

  const post = page.locator("[data-post]").filter({ hasText: POST.title });
  await expect(post).toHaveCount(1);
  await expect(post.getByRole("heading", { level: 2 })).toHaveText(POST.title);
  await expect(post.getByRole("link", { name: POST.title })).toHaveAttribute("href", POST.path);
  await expect(post.locator("time")).toHaveText(POST.dayLabel);
  await expect(post.locator("time")).toHaveAttribute("datetime", POST.day);
  await expect(post).toContainText(POST.description);

  // Newest first. ISO days sort the same way as the dates they stand for.
  const days = await page
    .locator("[data-post] time")
    .evaluateAll((times) => times.map((time) => time.getAttribute("datetime")));
  expect(days).toEqual([...days].sort().reverse());

  await expect(page.getByRole("main").getByRole("link", { name: "RSS feed" })).toHaveAttribute(
    "href",
    "/rss.xml",
  );
});

test("the index leads to the post and the post leads back", async ({ page }) => {
  await page.goto("/blog/");

  await page.getByRole("link", { name: POST.title }).click();
  await expect(page).toHaveURL(POST.path);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(POST.title);

  await page.getByRole("main").getByRole("link", { name: "Writing" }).click();
  await expect(page).toHaveURL("/blog/");
});

test("the post shows its title and date and renders its Markdown as HTML", async ({ page }) => {
  await page.goto(POST.path);

  await expect(page.locator("main")).toHaveCount(1);
  await expect(page.locator("h1")).toHaveCount(1);
  await expect(page.locator("h1")).toHaveText(POST.title);
  await expect(page.locator("article time")).toHaveText(POST.dayLabel);
  await expect(page.locator("article time")).toHaveAttribute("datetime", POST.day);

  const prose = page.locator("article .prose");
  await expect(prose.locator("p").first()).toBeVisible();
  expect(await prose.locator("p").count()).toBeGreaterThanOrEqual(6);

  // The body is prose, not raw Markdown, and the frontmatter never reaches the page.
  const text = await prose.innerText();
  expect(text).not.toContain("**");
  expect(text).not.toContain("](");
  expect(text).not.toContain("##");
  expect(text).not.toContain("```");
  expect(text).not.toContain("tags:");
  expect(text).not.toContain("description:");
});

test("the post has its own title, description, canonical URL, and article metadata", async ({
  page,
}) => {
  await page.goto(POST.path);

  await expect(page).toHaveTitle(`${POST.title} | Jingchao Zhou`);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", POST.description);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `${SITE}${POST.path}`);

  const expected: Record<string, string> = {
    'meta[property="og:type"]': "article",
    'meta[property="og:title"]': `${POST.title} | Jingchao Zhou`,
    'meta[property="og:url"]': `${SITE}${POST.path}`,
    'meta[property="article:published_time"]': `${POST.day}T00:00:00.000Z`,
  };
  for (const [selector, content] of Object.entries(expected)) {
    await expect(page.locator(selector)).toHaveAttribute("content", content);
  }
});

test("the header marks Writing as current on the index and on a post", async ({ page }) => {
  const writing = page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: "Writing" });

  await page.goto("/blog/");
  await expect(writing).toHaveAttribute("aria-current", "page");

  // On a post the link points at a different page, so it is the current section, not the current page.
  await page.goto(POST.path);
  await expect(writing).toHaveAttribute("href", "/blog/");
  await expect(writing).toHaveAttribute("aria-current", "true");
  await expect(page.locator("[aria-current]")).toHaveCount(1);
});

test("the header links on a blog page lead back to the homepage sections", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(POST.path);
  const nav = page.getByRole("navigation", { name: "Primary" });

  await expect(nav.getByRole("link", { name: "Jingchao Zhou" })).toHaveAttribute("href", "/");
  for (const [name, href] of [
    ["Experience", "/#experience"],
    ["Research", "/#research"],
    ["About", "/#about"],
  ]) {
    await expect(nav.getByRole("link", { name })).toHaveAttribute("href", href);
  }

  await nav.getByRole("link", { name: "Research" }).click();
  await expect(page).toHaveURL("/#research");
  await expect(page.getByRole("heading", { level: 2, name: "Research" })).toBeInViewport();
});

test("the footer never ends above the bottom of the window", async ({ page }) => {
  // The index is shorter than a tall window until it has many posts.
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/blog/");

  const footer = await page.getByRole("contentinfo").boundingBox();
  expect(Math.round(footer!.y + footer!.height)).toBeGreaterThanOrEqual(1000);
});

test("the sitemap lists the blog index and the post", async ({ request }) => {
  const sitemap = await (await request.get("/sitemap-0.xml")).text();

  expect(sitemap).toContain(`<loc>${SITE}/blog/</loc>`);
  expect(sitemap).toContain(`<loc>${SITE}${POST.path}</loc>`);
});

test("the RSS feed is well-formed and carries the post", async ({ page, request }) => {
  const response = await request.get("/rss.xml");
  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("xml");

  // Parse it with a real XML parser: a feed that is not well-formed is unreadable.
  await page.goto("/blog/");
  const feed = await page.evaluate(async () => {
    const xml = await (await fetch("/rss.xml")).text();
    const doc = new DOMParser().parseFromString(xml, "application/xml");
    const text = (parent: ParentNode, name: string) =>
      parent.querySelector(`:scope > ${name}`)?.textContent ?? null;
    const channel = doc.querySelector("rss[version='2.0'] > channel");
    return {
      parseError: doc.querySelector("parsererror")?.textContent ?? null,
      channel: channel && {
        title: text(channel, "title"),
        description: text(channel, "description"),
        link: text(channel, "link"),
      },
      items: [...(channel?.querySelectorAll(":scope > item") ?? [])].map((item) => ({
        title: text(item, "title"),
        description: text(item, "description"),
        link: text(item, "link"),
        guid: text(item, "guid"),
        pubDate: text(item, "pubDate"),
      })),
    };
  });

  expect(feed.parseError).toBeNull();
  expect(feed.channel).toEqual({
    title: "Jingchao Zhou",
    description: "Posts by Jingchao Zhou.",
    link: `${SITE}/`,
  });
  expect(feed.items).toContainEqual({
    title: POST.title,
    description: POST.description,
    link: `${SITE}${POST.path}`,
    guid: `${SITE}${POST.path}`,
    pubDate: new Date(`${POST.day}T00:00:00Z`).toUTCString(),
  });

  // One item per post on the index, in the same order.
  const indexLinks = await page
    .locator("[data-post] h2 a")
    .evaluateAll((links) => links.map((link) => (link as HTMLAnchorElement).pathname));
  expect(feed.items.map((item) => new URL(item.link!).pathname)).toEqual(indexLinks);
});

for (const path of ["/", "/blog/", POST.path]) {
  test(`${path} advertises the feed to feed readers`, async ({ page }) => {
    await page.goto(path);

    const link = page.locator('link[rel="alternate"][type="application/rss+xml"]');
    await expect(link).toHaveCount(1);
    await expect(link).toHaveAttribute("href", `${SITE}/rss.xml`);
    await expect(link).toHaveAttribute("title", "Jingchao Zhou");
  });
}
