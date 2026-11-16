[![Verify and deploy](https://github.com/zhoujc999/zhoujc999.github.io/actions/workflows/astro.yml/badge.svg?branch=master)](https://github.com/zhoujc999/zhoujc999.github.io/actions/workflows/astro.yml)

# zhoujc999.github.io

Personal site of Jingchao Zhou: one static page built with [Astro](https://astro.build/) and
deployed to GitHub Pages. There is no client framework. The page is plain HTML and CSS, plus one
small script that only adds polish.

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

All content lives in typed data files. Edit the data; the components pick it up.

| To change                                                      | Edit                      |
| -------------------------------------------------------------- | ------------------------- |
| Name, role, hero text, impact metrics, links, About, interests | `src/data/profile.ts`     |
| Jobs (newest first; `featured: true` gives a role a card)      | `src/data/experience.ts`  |
| Research entries and the publication link                      | `src/data/research.ts`    |
| Schools and degrees                                            | `src/data/education.ts`   |

Other assets:

- **Résumé:** replace `public/documents/resume.pdf`. Keep the filename, since the URL is linked
  from outside the site.
- **Portrait:** replace `src/assets/profile.jpg` with a square image at least 640px wide. It is
  displayed at 320 CSS px at most.
- **Logos:** add the image to `src/assets/logos/` and import it in the data file. Logos sit in a
  white tile, so images with a white background work best.
- **Social preview image:** run `npm run generate:og` after changing the name or
  `socialRoleLine`, then commit `public/og-image.png`.

Some tests assert specific copy (page title, description, impact metrics, the order of
companies). When you change that copy, update the matching expectation in `tests/`.

## How it is put together

- `src/pages/index.astro` composes the page from the components in `src/components/`.
  `src/pages/404.astro` is the error page.
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

## Adding a blog later

Not implemented yet. The intended path:

1. Add a typed Markdown content collection for posts, with a `draft` flag.
2. Add a `/blog/` index and a `/blog/<slug>/` page, both using `BaseLayout`.
3. Add an RSS feed.
4. Add a "Writing" link to the header only once the first real post exists.
