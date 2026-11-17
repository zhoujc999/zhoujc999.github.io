[![Verify and deploy](https://github.com/zhoujc999/zhoujc999.github.io/actions/workflows/astro.yml/badge.svg?branch=master)](https://github.com/zhoujc999/zhoujc999.github.io/actions/workflows/astro.yml)

# zhoujc999.github.io

Personal site of Jingchao Zhou: a static homepage and a small blog, built with
[Astro](https://astro.build/) and deployed to GitHub Pages. There is no client framework. Every
page is plain HTML and CSS, plus one small script that only adds polish.

## Requirements

Node 24. The version is pinned in `.nvmrc`, so with fnm:

```bash
fnm install && fnm use
npm install
npx playwright install chromium   # once, for the browser tests
```

## Commands

| Command               | What it does                                                    |
| --------------------- | --------------------------------------------------------------- |
| `npm run dev`         | Start the dev server with live reload                           |
| `npm run check`       | Type-check the Astro components and TypeScript                  |
| `npm run build`       | Build the static site into `dist/`                              |
| `npm run preview`     | Serve the built `dist/` locally                                 |
| `npm test`            | Build, then run the browser tests against the built site        |
| `npm run test:a11y`   | Run only the accessibility tests                                |
| `npm run generate:og` | Regenerate the social preview image (`public/og-image.png`)     |

## Updating content

The homepage content lives in typed data files. Edit the data; the components pick it up. Blog
posts are Markdown files; see [Blog](#blog).

| To change                                                      | Edit                      |
| -------------------------------------------------------------- | ------------------------- |
| Name, role, hero text, core expertise, links, About, interests | `src/data/profile.ts`     |
| Jobs (newest first; keep the wording in step with the résumé)  | `src/data/experience.ts`  |
| Research entries and the publication link                      | `src/data/research.ts`    |
| Schools and degrees                                            | `src/data/education.ts`   |

Other assets:

- **Résumé:** replace `public/jingchao-zhou-resume.pdf`. The filename is what people get when
  they save the PDF, so it carries the name. If you rename it, update `links.resume` in
  `src/data/profile.ts` and the two tests that check the path.
- **Portrait:** replace `src/assets/profile.jpg` with a square image at least 640px wide. It is
  displayed at 320 CSS px at most.
- **Logos:** add the image to `src/assets/logos/` and import it in the data file. Logos sit in a
  white tile, so images with a white background work best.
- **Social preview image:** run `npm run generate:og` after changing the name or
  `socialRoleLine`, then commit `public/og-image.png`.

Some tests assert specific copy (page title, description, core expertise, the order of
companies, the blog post). When you change that copy, update the matching expectation in `tests/`.

## How it is put together

- `src/pages/index.astro` composes the homepage from the components in `src/components/`.
  `src/pages/404.astro` is the error page.
- `src/pages/blog/index.astro` lists the posts, `src/pages/blog/[slug].astro` renders one, and
  `src/pages/rss.xml.ts` builds the feed. `src/content.config.ts` defines what a post's
  frontmatter must contain, and `src/components/Prose.astro` styles the rendered Markdown.
- `src/layouts/BaseLayout.astro` owns the document head: metadata, social tags, fonts.
- `src/styles/global.css` holds the design tokens and the few shared primitives. Styles for a
  single component are scoped inside that component's `.astro` file.
- `src/scripts/motion.ts` is progressive enhancement: it fades in blocks that start below the
  fold, marks the section in view in the header, and fills the experience timeline on scroll.

Rules the motion code follows:

- The page is complete without JavaScript. Nothing is hidden unless the script itself hid it.
- With "reduce motion" enabled, everything is visible immediately and nothing animates.
- Smooth scrolling for anchor links is CSS-only. Wheel, trackpad, and touch scrolling are native.

## Deployment

`.github/workflows/astro.yml` runs on every pull request and every push to `master`: type-check,
build, and the full browser test suite. A push to `master` that passes is then deployed to GitHub
Pages from `dist/`. Pull requests are verified but never deployed.

## Blog

Posts are Markdown files in `src/content/posts/`. The file name is the URL: `lorem-ipsum.md` is
served at `/blog/lorem-ipsum/`. `/blog/` lists every post, newest first, and the "Writing" link in
the header leads there.

Each post starts with frontmatter, which is checked at build time:

```yaml
---
title: Lorem ipsum dolor sit amet
description: One sentence, shown on the blog index and used as the page description.
date: 2026-11-17
draft: true # optional
---
```

A post with `draft: true` appears in `npm run dev`, labelled "Draft", and is left out of the
production build, the sitemap, and the feed.

`/rss.xml` is an RSS feed with each post's title, description, date, and link. Every page
advertises it to feed readers, and the blog index links to it.

The only post so far, `lorem-ipsum.md`, is placeholder text, published like any other post. To
replace it, add the real post, delete `lorem-ipsum.md`, and update the post path and copy in
`tests/blog.spec.ts`, `tests/accessibility.spec.ts`, and `tests/production.spec.ts`.
