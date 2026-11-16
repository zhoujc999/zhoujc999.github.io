# Astro Portfolio Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rebuild the existing Next.js personal website as a professional, fast, statically generated Astro portfolio with an editorial visual system, measurable-impact-led content, restrained motion, and an extension path for a future blog.

**Architecture:** Astro renders one shared, semantic homepage DOM to static HTML. Typed TypeScript modules own profile, experience, research, and education content; small Astro components own presentation. Plain CSS provides the design system, while one progressively enhanced vanilla TypeScript module handles the mobile disclosure menu, active navigation, reveals, smooth anchor navigation, and timeline progress. There is no React runtime, CMS, backend, or empty blog UI.

**Tech Stack:** Astro, TypeScript, plain CSS, Astro Image, `@astrojs/sitemap`, self-hosted Geist/Geist Mono via Fontsource, Lenis (fine-pointer/non-reduced-motion only), Playwright, `@axe-core/playwright`, GitHub Pages.

**Approved design:** Light “engineering editorial”; warm off-white background, near-black text, cobalt accent, Geist typography, hairline borders, subtle shadows, one restrained motion language, and a scroll-filled experience timeline as the only signature scroll effect.

**Execution context:** Work in a dedicated branch/worktree. Do not push or merge as part of these tasks. Preserve `/documents/resume.pdf`, the root production URL, and all existing external profile/publication links. Use `@silk-design` for motion principles and `@gstack:design-review` for the final visual audit where available.

---

## Final information architecture

1. Sticky header: name, Experience, Research, About, Résumé.
2. Hero: current-role label, name, concise introduction, portrait, résumé/GitHub/LinkedIn actions.
3. Impact strip: `300+ modules`, `1M+ records processed daily`, `70K+ failure modes tested`, each with accurate context.
4. Experience: seven chronological entries; Ramp and Nuro visually emphasized, older entries progressively compact without deleting content.
5. Research: two entries with prominent publication/research links.
6. About + education + technical/personal interests.
7. Minimal footer with professional links, location, and amateur-radio callsign.
8. No Writing navigation or section until the first real post exists.

## Final visual and motion rules

- Content width: `73.75rem` (1180px); section spacing: `clamp(4.5rem, 9vw, 8rem)`.
- Palette: background `#f7f7f4`, surface `#ffffff`, ink `#171717`, muted `#5d6672`, accent `#2457d6`, border `#dfe3e8`.
- Fluid type: hero `clamp(3rem, 7vw, 5.25rem)`, section titles `clamp(2rem, 4vw, 3rem)`, body `1.0625rem` with generous line height.
- One base radius (`0.875rem`), one border treatment, one easing curve. No gradients used as decoration.
- Reveal only opacity and transform; 12–16px travel, 450–600ms, ease-out, once per section. Never sequentially delay individual bullets.
- Hover transitions: 180–220ms; arrows move at most 3px; no custom cursor, magnetic buttons, marquees, 3D tilt, loaders, or page-transition spectacle.
- Reduced motion and no-JavaScript presentations must expose every item immediately.

---

### Task 1: Replace the framework scaffold without losing source assets

**Files:**
- Create: `astro.config.mjs`, `src/pages/index.astro`, `playwright.config.ts`
- Replace: `package.json`, `tsconfig.json`
- Move: `public/photos/profile.jpg` → `src/assets/profile.jpg`
- Move: `src/app/favicon.ico` → `public/favicon.ico`
- Move used company/institution images from `public/icons/` → `src/assets/logos/`
- Preserve: `public/documents/resume.pdf`, `public/.nojekyll`
- Retain temporarily for content migration: `src/app/` and the legacy config files

**Step 1: Verify the starting state**

Run:
```bash
git status --short
```
Expected: no output. If output exists, stop and get the owner’s decision before replacing files.

**Step 2: Create the dedicated worktree/branch**

Run from the clean repository using the environment’s worktree workflow. Expected branch name: `feat/astro-portfolio-redesign`. All subsequent commands run in that worktree.

**Step 3: Preserve and classify image assets**

Move `profile.jpg`, `ramp.jpg`, `nuro.jpg`, `mastercard.jpg`, `nutanix.jpg`, `duke_cs.jpg`, `dcus.jpg`, `imre.jpg`, `berkeley.jpg`, and `duke.jpg`. Remove only the four generic interest images after the new data no longer references them. Keep the résumé at the same public path.

**Step 4: Write the new package manifest**

```json
{
  "name": "jingchao-zhou-portfolio",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "check": "astro check",
    "test": "playwright test",
    "test:a11y": "playwright test --grep @a11y",
    "generate:og": "node scripts/generate-og.mjs"
  }
}
```

Install production dependencies:
```bash
npm install astro @astrojs/sitemap lenis @fontsource-variable/geist @fontsource-variable/geist-mono
```

Install development dependencies:
```bash
npm install --save-dev typescript @astrojs/check @playwright/test @axe-core/playwright sharp
npx playwright install chromium
```
Expected: dependency installation succeeds and the lockfile is regenerated. Do not retain Next.js, React, Tailwind, Flowbite, Cal.com, Headless UI, React Icons, or React Markdown.

**Step 5: Add Astro and TypeScript configuration**

`astro.config.mjs`:
```ts
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://zhoujc999.github.io",
  output: "static",
  integrations: [sitemap()],
  image: {
    responsiveStyles: true,
  },
});
```

`tsconfig.json`:
```json
{
  "extends": "astro/tsconfigs/strict",
  "include": [".astro/types.d.ts", "**/*"],
  "exclude": ["dist", "node_modules", "playwright-report", "test-results", "src/app"]
}
```

**Step 6: Create a temporary semantic homepage and browser-test harness**

`src/pages/index.astro`:
```astro
---
const pageTitle = "Jingchao Zhou | Senior Software Engineer";
---
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>{pageTitle}</title>
  </head>
  <body>
    <main id="main-content">
      <h1>Jingchao Zhou</h1>
    </main>
  </body>
</html>
```

`playwright.config.ts`:
```ts
import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  use: {
    baseURL: "http://127.0.0.1:4321",
    browserName: "chromium",
    trace: "retain-on-failure",
  },
  webServer: {
    command: "npm run build && npm run preview -- --host 127.0.0.1",
    url: "http://127.0.0.1:4321",
    reuseExistingServer: !process.env.CI,
  },
});
```

**Step 7: Verify the scaffold builds**

Run:
```bash
npm run check && npm run build
```
Expected: successful type-check and static build, with `dist/index.html` produced. The old `src/app/` tree is temporarily excluded from Astro checking so its content remains available for the next task.

**Step 8: Commit the scaffold**

```bash
git add package.json package-lock.json astro.config.mjs tsconfig.json playwright.config.ts src public
git commit -m "build: replace Next.js scaffold with Astro"
```

---

### Task 2: Model content separately and render the complete unstyled page

**Files:**
- Create: `src/data/profile.ts`, `src/data/experience.ts`, `src/data/research.ts`, `src/data/education.ts`
- Create: `src/components/SectionHeading.astro`, `src/components/ExperienceEntry.astro`, `src/components/ResearchEntry.astro`
- Create: `tests/content.spec.ts`
- Modify: `src/pages/index.astro`, `tsconfig.json`
- Delete after content migration: `src/app/`, `next.config.js`, `tailwind.config.js`, `postcss.config.js`, `.eslintrc.json`

**Step 1: Write failing content and single-DOM tests**

`tests/content.spec.ts` must assert:
- Exactly one `main` and one level-one heading exist.
- Seven `[data-experience-entry]` and two `[data-research-entry]` nodes exist at desktop and mobile widths.
- Ramp, Nuro, Mastercard, Nutanix, Duke CS, Duke China-US Summit, and IMRE appear in that order.
- The résumé link resolves to `/documents/resume.pdf`.
- The paper link resolves to `https://doi.org/10.1145/3477244.3477621` with safe external-link attributes.
- No Previous/Next carousel controls exist.

Run:
```bash
npm test -- tests/content.spec.ts
```
Expected: FAIL because only the temporary hero exists.

**Step 2: Define stable content types**

Use these contracts; import local images as `ImageMetadata` so Astro can optimize them:
```ts
import type { ImageMetadata } from "astro";

export interface Experience {
  slug: string;
  role: string;
  company: string;
  period: string;
  location: string;
  logo: ImageMetadata;
  details: string[];
  featured?: boolean;
}

export interface Research {
  slug: string;
  role: string;
  institution: string;
  period: string;
  location: string;
  logo: ImageMetadata;
  details: string[];
  publication?: { label: string; href: string };
}
```

Use exported arrays with `satisfies Experience[]` / `satisfies Research[]`. Give each entry a stable slug, never an array-index key.

**Step 3: Migrate the content verbatim**

Copy all current role/company/period/detail strings from `src/app/content/experience.tsx` and `research.tsx` before deleting those files. Split the existing `description` field into `period` and `location`. Express emphasis with page markup rather than embedding Markdown strings.

Put both Berkeley papers/publication metadata in structured fields. Do not shorten the seven existing experience entries or invent achievements. Preserve the exact quantitative context behind the hero metrics.

Create `profile.ts` with the real name, current role, location, GitHub, LinkedIn, résumé, callsign, short introduction, and three impact metrics. Create `education.ts` with Berkeley and Duke details.

**Step 4: Render all sections with semantic HTML**

`ExperienceEntry.astro` uses an `article`, a heading containing company + role, `<time>`-appropriate visible period text, optimized `Image`, and a normal unordered list. `ResearchEntry.astro` uses the same visual primitives but a distinct component and a regular anchor for its publication. No Markdown parser is needed.

`index.astro` composes Header/Hero/Impact/Experience/Research/About/Footer sections in that order, even if their markup is initially minimal. Add `id="experience"`, `id="research"`, and `id="about"` to sections and `data-reveal` to blocks that may later animate.

After every old content string has been migrated, delete `src/app/`, `next.config.js`, `tailwind.config.js`, `postcss.config.js`, and `.eslintrc.json`. Remove the temporary `"src/app"` entry from the TypeScript `exclude` array. Remove the four generic interest images now that nothing references them.

**Step 5: Verify content tests and exported HTML**

Run:
```bash
npm run check && npm test -- tests/content.spec.ts
test -f dist/documents/resume.pdf
grep -F 'doi.org/10.1145/3477244.3477621' dist/index.html
```
Expected: all content tests PASS; résumé and DOI link exist in static output.

**Step 6: Commit the content migration**

```bash
git add -A
git commit -m "feat: model and render portfolio content with Astro"
```

---

### Task 3: Establish the layout, typography, and design tokens

**Files:**
- Create: `src/layouts/BaseLayout.astro`, `src/styles/global.css`
- Create: `tests/layout.spec.ts`
- Modify: `src/pages/index.astro`

**Step 1: Write failing layout tests**

Assert:
- `html` has `lang="en"` and the viewport meta tag exists.
- Geist font assets are referenced by built CSS/HTML and no request uses Google Fonts.
- Main content is constrained to at most 1180px at a 1440px viewport.
- At widths 320, 390, 768, and 1440, `document.documentElement.scrollWidth <= window.innerWidth`.
- Body text is black/ink on the warm background; the old white-text gradient is gone.

Run:
```bash
npm test -- tests/layout.spec.ts
```
Expected: FAIL on font, layout, and width assertions.

**Step 2: Implement `BaseLayout.astro`**

Accept required `title` and `description` props plus optional `image`, `canonicalPath`, and `noindex`. Import `@fontsource-variable/geist`, `@fontsource-variable/geist-mono`, and global CSS. Include charset, viewport, favicon, color-scheme (`light`), theme-color, generator, title, and description. Render a skip link followed by `<slot />`.

Build canonical and social URLs from `Astro.site`; never allow a relative `og:image`. Add `og:type`, `og:title`, `og:description`, `og:url`, `og:image`, and the matching Twitter card fields. Blog pages can reuse this layout later without changing the homepage.

**Step 3: Implement the token foundation**

```css
:root {
  color-scheme: light;
  --color-bg: #f7f7f4;
  --color-surface: #ffffff;
  --color-ink: #171717;
  --color-muted: #5d6672;
  --color-accent: #2457d6;
  --color-border: #dfe3e8;
  --radius: 0.875rem;
  --content-width: 73.75rem;
  --header-height: 4.5rem;
  --section-space: clamp(4.5rem, 9vw, 8rem);
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --duration-fast: 200ms;
  --duration-reveal: 550ms;
  --font-sans: "Geist Variable", system-ui, sans-serif;
  --font-mono: "Geist Mono Variable", ui-monospace, monospace;
}

html, body { overscroll-behavior: none; }
* { box-sizing: border-box; scrollbar-width: thin; }
body {
  margin: 0;
  background: var(--color-bg);
  color: var(--color-ink);
  font-family: var(--font-sans);
  font-size: 1.0625rem;
  line-height: 1.7;
}
img { display: block; max-width: 100%; height: auto; }
a { color: inherit; text-underline-offset: 0.2em; }
:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 4px; }
.container { width: min(calc(100% - 2.5rem), var(--content-width)); margin-inline: auto; }
.section { padding-block: var(--section-space); scroll-margin-top: calc(var(--header-height) + 1rem); }
.section-title { font-size: clamp(2rem, 4vw, 3rem); line-height: 1.08; letter-spacing: -0.035em; }
.mono { font-family: var(--font-mono); }
```

Complete global rules for semantic headings, lists, buttons, cards, timeline, responsive header/menu, portrait, prose, print, and reduced motion. Scope component-specific rules in their `.astro` files; do not create a utility framework.

**Step 4: Verify typography and widths**

Run:
```bash
npm run check && npm test -- tests/layout.spec.ts
```
Expected: all layout tests PASS. Manually inspect screenshots at 390×844 and 1440×1000 before moving on.

**Step 5: Commit the design foundation**

```bash
git add src/layouts src/styles src/pages/index.astro tests/layout.spec.ts
git commit -m "feat: add editorial layout and design system"
```

---

### Task 4: Finish the professional homepage composition

**Files:**
- Create: `src/components/SiteHeader.astro`, `Hero.astro`, `ImpactStrip.astro`, `ExperienceTimeline.astro`, `ResearchSection.astro`, `AboutSection.astro`, `SiteFooter.astro`
- Create: `tests/homepage.spec.ts`
- Modify: `src/pages/index.astro`, `src/styles/global.css`

**Step 1: Write failing hierarchy and responsive-navigation tests**

Assert:
- Header contains Experience, Research, About, and Résumé; Writing is absent.
- Desktop hero has the real profile image with meaningful alt text and the statement naming Senior Software Engineer at Ramp.
- Impact metrics include their context, not just naked numbers.
- Experience and Research use level-two headings; entries use level-three headings.
- Mobile uses a `<details>`/`<summary>` disclosure navigation, not modal navigation or a carousel.
- All experience/research content remains in the DOM at mobile width.
- The footer repeats GitHub, LinkedIn, résumé, location, and KO4FUI.

Run:
```bash
npm test -- tests/homepage.spec.ts
```
Expected: FAIL on missing components/navigation.

**Step 2: Build the sticky header**

Use semantic `<header>` and `<nav aria-label="Primary">`. Desktop displays inline anchors; mobile uses native `<details>` with a clearly named summary. Keep Résumé visible as the primary header action. Add `[data-header]`, `[data-nav-link]`, and `[data-menu]` hooks for progressive enhancement. Do not insert an empty Writing link.

**Step 3: Build the hero and impact strip**

Use a responsive two-column hero and one optimized portrait with fixed intrinsic dimensions, `loading="eager"`, and `fetchpriority="high"`. Primary action text is `View résumé`; GitHub and LinkedIn are secondary text links. Keep the headline concise and specific to the existing Ramp work.

The impact strip is a semantic list of three facts. It spans a thin top/bottom rule, not three floating shadow cards. Use `300+ modules`, `1M+ records processed daily`, and `70K+ failure modes tested` only with the corresponding employer/project context from migrated data.

**Step 4: Build timeline, research, and secondary sections**

The timeline uses a nonessential rail pseudo-element and `[data-timeline-progress]` child. Ramp and Nuro have white surfaces and more breathing room; later entries use compact rows. Never collapse or hide content solely because it is old.

Research uses two distinct entries and a strong DOI anchor. About pairs the existing personal text with Berkeley/Duke education. Interests become text tags; do not reuse generic interest stock images. Footer links use standard anchors, `rel="noopener noreferrer"` when opening a new tab, and accessible names.

**Step 5: Verify and inspect the composition**

Run:
```bash
npm test -- tests/content.spec.ts tests/layout.spec.ts tests/homepage.spec.ts
```
Expected: PASS. Save desktop/mobile screenshots and inspect alignment, line lengths, image crop, heading wrapping, and spacing at the section boundaries.

**Step 6: Commit the homepage**

```bash
git add src tests/homepage.spec.ts
git commit -m "feat: compose impact-led responsive portfolio homepage"
```

---

### Task 5: Add restrained motion and functional navigation enhancement

**Files:**
- Create: `src/scripts/motion.ts`
- Create: `tests/interaction.spec.ts`
- Modify: `src/layouts/BaseLayout.astro`, `src/components/SiteHeader.astro`, relevant section components, `src/styles/global.css`

**Step 1: Write failing accessibility-first interaction tests**

Cover:
- With reduced motion, every `[data-reveal]` has computed opacity `1` and transform `none` immediately.
- With JavaScript disabled, all content and links remain visible and usable.
- Activating an Experience anchor updates the URL hash, lands below the sticky header, and moves focus to the section without a temporary focus ring trap.
- Mobile summary toggles native `details`; selecting an anchor closes it.
- Active navigation exposes `aria-current="location"` for the visible section.
- A normal-motion desktop navigation uses Lenis; reduced-motion and coarse-pointer contexts do not instantiate it.
- Timeline progress reaches `0` before entry and `1` after the section passes; reduced motion leaves the static rail fully visible.

Run:
```bash
npm test -- tests/interaction.spec.ts
```
Expected: FAIL on absent enhancement.

**Step 2: Initialize enhancement without hiding content by default**

In `BaseLayout.astro`, load the processed script:
```astro
<script>
  import "../scripts/motion";
</script>
```

In `motion.ts`, query `prefers-reduced-motion` and `pointer: fine`; import Lenis only through the normal bundled module path. Do not add `scroll-behavior: smooth` as a fallback. Apply the hiding class only after JavaScript has confirmed that non-reduced reveal behavior is supported:
```ts
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const finePointer = window.matchMedia("(pointer: fine)");
const shouldAnimate = !reduceMotion.matches && "IntersectionObserver" in window;

if (shouldAnimate) {
  document.documentElement.classList.add("motion-ready");
}
```

**Step 3: Implement one consistent reveal observer**

Observe `[data-reveal]`; add `is-visible` once, then unobserve. CSS uses only opacity/transform, `var(--duration-reveal)`, and `var(--ease-out)`. Never set per-bullet delays. Above-the-fold hero elements use the same mechanism on initial load and complete within one second.

**Step 4: Implement smooth anchors and robust focus**

Construct `new Lenis({ autoRaf: true })` only for non-reduced fine-pointer users. Intercept same-page hash anchors, resolve their target safely, and close the disclosure. Call `lenis.scrollTo(target, { offset: -headerOffset })` when available; otherwise use native `scrollIntoView()`. Update history, assign temporary `tabindex="-1"` when necessary, and call `focus({ preventScroll: true })`. Do not steal focus on pointer hover or ordinary scrolling.

**Step 5: Implement active navigation and timeline progress efficiently**

Use `IntersectionObserver` for active section state and `aria-current`. Update timeline progress from a single passive, `requestAnimationFrame`-throttled scroll handler using `getBoundingClientRect()` and `element.style.setProperty("--timeline-progress", String(progress))`. Animate the rail child with `transform: scaleY(...)` and `transform-origin: top`; never animate layout height.

**Step 6: Add motion fallbacks**

Under reduced motion, disable all nonessential transitions, remove reveal transforms, and show the static rail. When JavaScript is unavailable, no `.motion-ready` class exists, so content remains visible. Preserve native browser scrolling on touch devices.

**Step 7: Verify interaction quality**

Run:
```bash
npm run check && npm test -- tests/interaction.spec.ts
```
Expected: PASS with no browser-console errors. Manually test fast scrolling, repeated anchor activation, Escape/Tab behavior on the mobile disclosure, changing viewport width, and reduced motion before first paint.

**Step 8: Commit motion**

```bash
git add src tests/interaction.spec.ts
git commit -m "feat: add accessible portfolio motion and navigation"
```

---

### Task 6: Add production metadata, social image, and static 404

**Files:**
- Create: `scripts/generate-og.mjs`, `public/og-image.png`, `public/robots.txt`, `src/pages/404.astro`
- Create: `tests/metadata.spec.ts`
- Modify: `src/layouts/BaseLayout.astro`, `src/pages/index.astro`

**Step 1: Write failing production-metadata tests**

Assert that the homepage title/description, canonical URL, OG/Twitter fields, favicon, and one `application/ld+json` block exist. `Person` JSON-LD must contain the real name, URL, job title, and GitHub/LinkedIn `sameAs` URLs. Read `public/og-image.png` with Sharp and assert 1200×630. Assert `robots.txt` references `https://zhoujc999.github.io/sitemap-index.xml` and a dedicated 404 heading exists.

Run:
```bash
npm test -- tests/metadata.spec.ts
```
Expected: FAIL on missing assets and page metadata.

**Step 2: Generate the social card deterministically**

`scripts/generate-og.mjs` constructs a 1200×630 SVG using the approved warm background, ink name, muted role line, and cobalt rule, then runs:
```ts
await sharp(Buffer.from(svg)).png().toFile("public/og-image.png");
```
Use only generic local SVG font families so the script has no remote dependency. Commit the generated PNG. Do not add a public social-card HTML route.

Run:
```bash
npm run generate:og
```
Expected: `public/og-image.png` exists and measures 1200×630.

**Step 3: Complete metadata and JSON-LD**

Use `/og-image.png` through `new URL(path, Astro.site)`. Keep meta descriptions page-specific and factual. Add `Person` JSON-LD via `set:html={JSON.stringify(structuredData)}` with no comments or invented contact data.

**Step 4: Add robots and 404**

`public/robots.txt`:
```txt
User-agent: *
Allow: /

Sitemap: https://zhoujc999.github.io/sitemap-index.xml
```

`404.astro` reuses `BaseLayout`, has a useful `Page not found` heading, and links back home. Set `noindex` on this page.

**Step 5: Verify static artifacts**

Run:
```bash
npm run build && npm test -- tests/metadata.spec.ts
ls dist/sitemap-index.xml dist/robots.txt dist/404.html dist/og-image.png
```
Expected: tests PASS and all four artifacts exist.

**Step 6: Commit production metadata**

```bash
git add scripts/generate-og.mjs public/og-image.png public/robots.txt src tests/metadata.spec.ts package.json package-lock.json
git commit -m "feat: add portfolio SEO and static error page"
```

---

### Task 7: Run accessibility, performance, and full regression QA

**Files:**
- Create: `tests/accessibility.spec.ts`, `tests/production.spec.ts`
- Modify only files needed to fix verified failures

**Step 1: Add automated accessibility tests**

Use `AxeBuilder` on `/` and `/404.html` with reduced motion enabled so reveal styles do not conceal audit targets. Fail on `serious` or `critical` violations. Add keyboard tests for skip link, disclosure summary, résumé, section anchors, and external links. Use semantic roles rather than CSS selectors where possible.

Run:
```bash
npm run test:a11y
```
Expected: either clean PASS or a concrete violation list. Fix source semantics/contrast, not test expectations.

**Step 2: Add production smoke tests**

Assert:
- No browser console errors or failed same-origin requests.
- Every internal hash resolves to exactly one target.
- The résumé request returns 200 and `application/pdf` when served by the preview server.
- Every image loads (`naturalWidth > 0`) and stays within its container.
- No horizontal overflow at 320, 390, 768, 1024, and 1440px.
- The homepage has obvious non-JavaScript content and no empty blog route.
- `dist/index.html` contains the full experience/research content (static rendering check).

Run:
```bash
npm run check && npm run build && npm test
```
Expected: all checks PASS.

**Step 3: Perform visual/motion audit**

Use `@gstack:design-review` if available. Capture desktop/mobile before-and-after states and inspect header behavior, timeline, cards, focus, reduced motion, and link hover. Correct visual inconsistencies in source and rerun affected tests. Avoid gratuitous new effects not in the approved design.

**Step 4: Check real-browser performance**

Run Lighthouse against the production preview at mobile emulation. Target 95+ for Performance, Accessibility, Best Practices, and SEO where practical. Investigate layout shift, oversized portraits/logos, blocking font requests, and unnecessary JavaScript rather than weakening assertions.

**Step 5: Commit QA fixes and tests**

```bash
git add src public tests playwright.config.ts package.json package-lock.json
git commit -m "test: verify portfolio accessibility and production behavior"
```

---

### Task 8: Replace deployment and write owner-focused documentation

**Files:**
- Replace: `.github/workflows/nextjs.yml` → `.github/workflows/astro.yml`
- Replace: `README.md`
- Preserve: `public/.nojekyll`

**Step 1: Add CI verification**

On pull requests and pushes to `master`, run checkout, Node setup with npm cache, `npm ci`, Playwright Chromium installation, `npm run check`, `npm run build`, and `npm test`. Use the repository’s supported Node LTS version consistently. Upload Playwright reports only on failure.

**Step 2: Deploy the Astro artifact to GitHub Pages**

Keep one `deploy` job gated on `master`, needing verification. Give only that job `pages: write` and `id-token: write`; use Pages environment URL and existing concurrency. Configure Pages, upload `dist/` with `actions/upload-pages-artifact@v3`, then deploy with `actions/deploy-pages@v4`. No Next.js cache/configuration remains.

Expected local equivalent:
```bash
npm ci
npm run check
npm run build
npm test
test -f dist/index.html
```
All commands PASS.

**Step 3: Rewrite the README**

Document:
- Astro/static architecture and actual development commands (`npm install`, `npm run dev`, `npm run check`, `npm run build`, `npm test`, `npm run preview`).
- Where to update profile, experience, research, and education data.
- How to replace the résumé/profile and regenerate the OG image.
- GitHub Pages deployment behavior.
- Reduced-motion/no-JavaScript principles.
- Future blog extension: typed Markdown Content Collection, `/blog/` index, `/blog/<slug>/`, RSS, drafts, and Writing UI only when the first post exists.
- No claims about blog features that are not implemented.

**Step 4: Audit repository leftovers**

Run:
```bash
rg -n "Next\.js|next build|Tailwind|React|Flowbite|out/" README.md package.json astro.config.mjs .github src || true
git status --short
```
Expected: no stale framework/deployment instructions, no generated `dist`, reports, or test artifacts staged. Working tree contains only intentional migration changes.

**Step 5: Commit deployment/docs**

```bash
git add .github/workflows/astro.yml README.md public/.nojekyll
git commit -m "build: deploy static Astro site with GitHub Pages"
```

---

### Task 9: Final verification and handoff

**Files:** No intentional source changes unless verification identifies a defect.

**Step 1: Run the complete release gate from a clean install**

```bash
npm ci
npm run check
npm run build
npm test
npm run generate:og
git diff --exit-code -- public/og-image.png
```

Expected: all commands PASS; regenerated social image is deterministic or has an inspected intentional diff.

**Step 2: Inspect final built output**

Verify `dist/index.html`, `dist/404.html`, sitemap, robots, résumé, social image, responsive images, and font assets. Confirm there are no source-map secrets, stale Next artifacts, empty blog pages, or external font requests.

**Step 3: Review the final diff**

Check content accuracy against the original role/company/date arrays and all résumé/profile/DOI URLs. Ensure no existing achievement was exaggerated and no personal detail was invented. Confirm every approved design behavior has corresponding test or screenshot evidence.

**Step 4: Present handoff**

Report build/test results, screenshots, major content/design changes, and any remaining limitations. Do not merge, push, or deploy until the owner explicitly requests that action. After eventual deployment, verify the production homepage, résumé, sitemap, 404, and mobile navigation.

---

## Explicit non-goals for this rebuild

- No React runtime, Tailwind migration, CMS, backend, comments, analytics, newsletter, contact form, or search.
- No empty Writing page/navigation, tags, pagination, RSS, or MDX before real posts exist.
- No dark mode, custom cursor, magnetic controls, marquees, 3D effects, page loaders, or decorative stock imagery.
- No content rewrite that changes factual claims merely to fit the design.
