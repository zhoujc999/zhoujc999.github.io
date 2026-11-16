# Astro Portfolio Redesign Implementation Plan

> **Execution:** Work through the tasks in order. Each task ends with a verification step and a commit; finish both before starting the next task.

**Goal:** Rebuild the existing Next.js personal website as a professional, fast, statically generated Astro portfolio with an editorial visual system, measurable-impact-led content, restrained motion, and an extension path for a future blog.

**Architecture:** Astro renders one shared, semantic homepage DOM to static HTML. Typed TypeScript modules own profile, experience, research, and education content; small Astro components own presentation. Plain CSS provides the design system, including smooth anchor scrolling. One progressively enhanced vanilla TypeScript module handles active navigation, below-the-fold reveals, and timeline progress. There is no React runtime, CMS, backend, scroll library, or empty blog UI.

**Tech Stack:** Node 24 LTS, Astro 7, TypeScript 6, plain CSS, Astro Image, `@astrojs/sitemap`, self-hosted Geist/Geist Mono via Fontsource, Playwright, `@axe-core/playwright`, GitHub Pages.

**Approved design:** Light “engineering editorial”; warm off-white background, near-black text, cobalt accent, Geist typography, hairline borders, subtle shadows, one restrained motion language, and a scroll-filled experience timeline as the only signature scroll effect.

**Execution context:** Work in a dedicated branch/worktree. Do not push or merge as part of these tasks. Preserve `/documents/resume.pdf`, the root production URL, and all existing external profile/publication links.

---

## Final information architecture

1. Header: name, Experience, Research, About, Résumé. One inline navigation at every width; sticky from `48rem` up.
2. Hero: current-role label, name, concise introduction, portrait, résumé/GitHub/LinkedIn actions.
3. Impact strip: `300+ modules`, `1M+ vehicle events processed daily`, `70K+ failure modes tested`, each with its caption from “Homepage copy” below.
4. Experience: seven reverse-chronological entries; Ramp and Nuro visually emphasized, older entries progressively compact without deleting content.
5. Research: two entries. The Berkeley entry carries a prominent publication link; the Duke entry has no publication and gets no link.
6. About + education + technical/personal interests.
7. Minimal footer with professional links, location, and amateur-radio callsign.
8. No Writing navigation or section until the first real post exists.

## Homepage copy (use verbatim)

This is new wording written for the redesign. The rules elsewhere in this plan against invented or rewritten content apply to the migrated experience, research, and education entries, not to this section.

- **Role label:** `Senior Software Engineer at Ramp · New York, NY`
- **Heading (`h1`):** `Jingchao Zhou`
- **Introduction:** `I build the infrastructure that lets engineering teams ship independently. At Ramp, I led the decomposition of a Python monolith into 300+ modules with enforced dependency boundaries. Before that, I built data pipelines and simulation testing for autonomous vehicles at Nuro.`
- **Impact strip** (label, then caption):
  - `300+ modules`: `Carved out of Ramp’s Python monolith, with dependency boundaries enforced in CI.`
  - `1M+ vehicle events processed daily`: `By the ETL pipeline behind Nuro’s fleet reliability and performance metrics.`
  - `70K+ failure modes tested`: `Across Nuro’s autonomy stack in simulation, using a fault-injection framework.`
- **Portrait alt text:** `Portrait of Jingchao Zhou`
- **Meta description:** `Jingchao Zhou is a Senior Software Engineer at Ramp in New York, building developer infrastructure and payment systems. Previously at Nuro. M.Eng., UC Berkeley.`
- **Social card role line:** `Senior Software Engineer at Ramp`

## Final visual and motion rules

- Content width: `73.75rem` (1180px); section spacing: `clamp(4.5rem, 9vw, 8rem)`.
- Palette: background `#f7f7f4`, surface `#ffffff`, ink `#171717`, muted `#5d6672`, accent `#2457d6`, border `#dfe3e8`.
- Fluid type: hero `clamp(3rem, 7vw, 5.25rem)`, section titles `clamp(2rem, 4vw, 3rem)`, body `1.0625rem` with generous line height.
- One base radius (`0.875rem`), one border treatment, one easing curve. No gradients used as decoration.
- Reveal only opacity and transform; 12–16px travel, 450–600ms, ease-out, once per block. Never sequentially delay individual bullets.
- Anything already in the viewport when the script starts is never hidden or animated. Only blocks below the fold reveal.
- Smooth anchor scrolling is CSS-only (`scroll-behavior: smooth` under `prefers-reduced-motion: no-preference`). Wheel, trackpad, and touch scrolling stay native.
- Hover transitions: 180–220ms; arrows move at most 3px; no custom cursor, magnetic buttons, marquees, 3D tilt, loaders, or page-transition spectacle.
- Reduced motion and no-JavaScript presentations must expose every item immediately.

---

### Task 1: Replace the framework scaffold without losing source assets

**Files:**
- Create: `astro.config.mjs`, `src/pages/index.astro`, `playwright.config.ts`, `.nvmrc`
- Replace: `package.json`, `package-lock.json`, `tsconfig.json`
- Modify: `.gitignore`
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

**Step 3: Pin and verify Node**

Create `.nvmrc` containing the single line `24`. Run:
```bash
fnm install && fnm use
node --version
```
Expected: `v24.x`. Current Astro 7 releases require Node 22.23.4 or newer, and this machine had 22.12.0 when the plan was written. On an older Node, npm silently installs an outdated Astro, so do not continue until the version is right.

**Step 4: Preserve and classify image assets**

Move `profile.jpg`, `ramp.jpg`, `nuro.jpg`, `mastercard.jpg`, `nutanix.jpg`, `duke_cs.jpg`, `dcus.jpg`, `imre.jpg`, `berkeley.jpg`, and `duke.jpg`. Remove only the four generic interest images after the new data no longer references them. Keep the résumé at the same public path.

**Step 5: Ignore generated output**

In `.gitignore`, replace the `# next.js` block (`/.next/`, `/out/`) and the `next-env.d.ts` line with:
```gitignore
# astro
/dist/
/.astro/

# playwright
/test-results/
/playwright-report/
/blob-report/
```
Keep the remaining entries. Later tasks use `git add -A` after building and testing, so this must be in place first.

**Step 6: Write the new package manifest**

```json
{
  "name": "jingchao-zhou-portfolio",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "engines": {
    "node": ">=24"
  },
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

Delete the old lockfile so it is regenerated from scratch, then install production dependencies:
```bash
rm -f package-lock.json
npm install astro@^7 @astrojs/sitemap @fontsource-variable/geist @fontsource-variable/geist-mono
```

Install development dependencies:
```bash
npm install --save-dev typescript@^6 @types/node@^24 @astrojs/check @playwright/test @axe-core/playwright
npx playwright install chromium
```
Expected: installation succeeds with no `EBADENGINE` warning for `astro`, and the lockfile is regenerated. TypeScript is pinned to 6 because `@astrojs/check` does not accept TypeScript 7. `@types/node` types the Node APIs used by the Playwright config and tests. Do not retain Next.js, React, Tailwind, Flowbite, Cal.com, Headless UI, React Icons, or React Markdown.

**Step 7: Add Astro and TypeScript configuration**

`astro.config.mjs`:
```ts
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://zhoujc999.github.io",
  output: "static",
  integrations: [sitemap()],
  image: {
    layout: "constrained",
    responsiveStyles: true,
  },
});
```
`responsiveStyles` only takes effect when a layout is set, so both options are required.

`tsconfig.json`:
```json
{
  "extends": "astro/tsconfigs/strict",
  "include": [".astro/types.d.ts", "**/*"],
  "exclude": ["dist", "node_modules", "playwright-report", "test-results", "src/app"]
}
```

**Step 8: Create a temporary semantic homepage and browser-test harness**

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

const port = 4322;
const baseURL = `http://127.0.0.1:${port}`;

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  reporter: process.env.CI ? [["github"], ["html", { open: "never" }]] : "list",
  use: {
    baseURL,
    browserName: "chromium",
    trace: "retain-on-failure",
  },
  webServer: {
    command: `npm run build && npm run preview -- --host 127.0.0.1 --port ${port}`,
    url: baseURL,
    reuseExistingServer: false,
  },
});
```
The preview has its own port and never reuses a running server, so tests always exercise the built site and never a running `astro dev`.

**Step 9: Verify the scaffold builds**

Run:
```bash
npm run check && npm run build
```
Expected: successful type-check and static build, with `dist/index.html` produced. The old `src/app/` tree is temporarily excluded from Astro checking so its content remains available for the next task.

**Step 10: Commit the scaffold**

```bash
git add .gitignore .nvmrc package.json package-lock.json astro.config.mjs tsconfig.json playwright.config.ts src public
git status --short
git commit -m "build: replace Next.js scaffold with Astro"
```
Expected before committing: `git status --short` lists no `dist/` or `.astro/` paths.

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
- The rendered text contains no raw Markdown syntax (no `*CS 250` and no `](`).
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

export interface Publication {
  title: string;
  venue: string;
  href: string;
}

export interface Research {
  slug: string;
  role: string;
  institution: string;
  period: string;
  location: string;
  logo: ImageMetadata;
  details: string[];
  publication?: Publication;
}
```

Use exported arrays with `satisfies Experience[]` / `satisfies Research[]`. Give each entry a stable slug, never an array-index key. Set `featured: true` on Ramp and Nuro only.

**Step 3: Migrate the content**

Copy all current role/company/period/detail strings from `src/app/content/experience.tsx` and `research.tsx` before deleting those files. Split the existing `description` field into `period` and `location`. Keep the wording unchanged apart from three mechanical cleanups: collapse the runs of spaces left by the old line continuations, trim each string, and drop the lone trailing period on the Ramp payments bullet so every bullet ends the same way.

`details` stays plain text. Exactly two old strings contain Markdown; handle them like this:
- `experience.tsx:84` (teaching assistant): remove the asterisks. The course names render as plain text.
- `research.tsx:9` (Berkeley paper): do not copy it into `details`. It becomes the `publication` field, with title `WIP: The Cyber-Physical Immune System`, venue `Proceedings of the 2021 International Conference on Embedded Software (EMSOFT ’21)`, and href `https://doi.org/10.1145/3477244.3477621`. `ResearchEntry.astro` rebuilds the original sentence from those fields. There is one paper; the Duke entry has no publication.

Do not shorten the seven existing experience entries or invent achievements. Preserve the exact quantitative context behind the hero metrics.

Create `profile.ts` with the real name, current role, location, GitHub, LinkedIn, résumé, callsign, short introduction, and three impact metrics. Take the role label, introduction, metric labels, and metric captions verbatim from “Homepage copy”; the location is New York, NY. Create `education.ts` with Berkeley and Duke details.

**Step 4: Render all sections with semantic HTML**

`ExperienceEntry.astro` uses an `article`, a heading containing company + role, the period and location as plain text (a date range is not a valid `<time>` value), an optimized `Image`, and a normal unordered list. Logos pass `layout="fixed"` with explicit `width` and `height`.

`ResearchEntry.astro` uses the same visual primitives but a distinct component. When `publication` is present, it renders this sentence above the list: `Co-authored and published <a><cite>{title}</cite></a> in <cite>{venue}</cite>`. The anchor is a regular link that opens in a new tab with `rel="noopener noreferrer"`. No Markdown parser is needed.

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
  --anchor-offset: 1rem;
  --section-space: clamp(4.5rem, 9vw, 8rem);
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --duration-fast: 200ms;
  --duration-reveal: 550ms;
  --font-sans: "Geist Variable", system-ui, sans-serif;
  --font-mono: "Geist Mono Variable", ui-monospace, monospace;
}

/* The header is sticky only from 48rem up, so anchors clear it only there. */
@media (min-width: 48rem) {
  :root { --anchor-offset: calc(var(--header-height) + 1rem); }
}

@media (prefers-reduced-motion: no-preference) {
  html { scroll-behavior: smooth; }
}

* { box-sizing: border-box; }
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
.section { padding-block: var(--section-space); scroll-margin-top: var(--anchor-offset); }
.section-title { font-size: clamp(2rem, 4vw, 3rem); line-height: 1.08; letter-spacing: -0.035em; }
.mono { font-family: var(--font-mono); }
```

Do not set `overscroll-behavior` or `scrollbar-width`; scrolling and scrollbars stay native.

`global.css` holds only cross-cutting rules: the tokens above, base typography for headings, lists, and prose, the skip link, `.container`, `.section`, focus, reduced motion, and print. Everything specific to one component (header, hero, impact strip, timeline, research entry, footer) is written as scoped styles in that component’s `.astro` file in Task 4. Do not create a utility framework.

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
- The same four header links are visible at 390px and 1440px wide; there is no menu button, disclosure, modal navigation, or carousel.
- All experience/research content remains in the DOM at mobile width.
- The portrait renders no wider than 320 CSS px at any tested width.
- The footer repeats GitHub, LinkedIn, résumé, location, and KO4FUI.

Run:
```bash
npm test -- tests/homepage.spec.ts
```
Expected: FAIL on missing components/navigation.

**Step 2: Build the header**

Use semantic `<header>` and one `<nav aria-label="Primary">` shared by every viewport, with no disclosure, menu button, or duplicated links. From `48rem` up the header is a single sticky row. Below `48rem` it is not sticky and wraps to two rows: name and Résumé, then the three section links. Keep Résumé visible as the primary header action at every width. Add `[data-header]` and `[data-nav-link]` hooks for progressive enhancement. Do not insert an empty Writing link.

**Step 3: Build the hero and impact strip**

Use a responsive two-column hero and one optimized portrait with fixed intrinsic dimensions, `loading="eager"`, and `fetchpriority="high"`. The source photo is 640×640, so cap the portrait at `20rem` (320 CSS px) square to stay sharp on 2× screens, and never upscale it. Primary action text is `View résumé`; GitHub and LinkedIn are secondary text links. The `h1` is the name; use the role label, introduction, and portrait alt text from “Homepage copy” verbatim.

The impact strip is a semantic list of three facts. It spans a thin top/bottom rule, not three floating shadow cards. Use `300+ modules`, `1M+ vehicle events processed daily`, and `70K+ failure modes tested`, each with its caption from “Homepage copy”.

**Step 4: Build timeline, research, and secondary sections**

The timeline uses a nonessential rail pseudo-element and `[data-timeline-progress]` child. Ramp and Nuro have white surfaces and more breathing room; later entries use compact rows. Never collapse or hide content solely because it is old.

The logo files are JPEGs with white backgrounds. Put every logo in a fixed white tile with the standard border and radius, so no bare white square sits on the off-white page.

Research uses two distinct entries; the Berkeley entry shows its publication sentence with a strong DOI anchor. About pairs the existing personal text with Berkeley/Duke education. Interests become text tags; do not reuse generic interest stock images. Footer links use standard anchors, `rel="noopener noreferrer"` when opening a new tab, and accessible names.

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

### Task 5: Add restrained motion and navigation state

**Files:**
- Create: `src/scripts/motion.ts`
- Create: `tests/interaction.spec.ts`
- Modify: `src/layouts/BaseLayout.astro`, `src/components/SiteHeader.astro`, relevant section components, `src/styles/global.css`

**Step 1: Write failing accessibility-first interaction tests**

Cover:
- With reduced motion, every `[data-reveal]` has computed opacity `1` and transform `none` immediately.
- With JavaScript disabled, all content and links remain visible and usable.
- With normal motion, every `[data-reveal]` in the viewport at load has opacity `1` on the first check and never receives `reveal-pending`; a block below the fold reaches opacity `1` after it is scrolled into view.
- Activating the Experience link sets the URL hash to `#experience` and leaves the section heading visible below the sticky header at 1440px.
- After activating the Research link from the keyboard, the next Tab press focuses the publication link. This is native browser behavior; no script is involved.
- Active navigation exposes `aria-current="location"` for the visible section, including the last section when the page is scrolled to the bottom. No link is current while the hero fills the viewport.
- Timeline progress is `0` before the section enters and `1` after it has passed; reduced motion leaves the static rail fully visible.

Smooth scrolling means positions settle over time. Use Playwright’s polling assertions (`expect.poll`, `toPass`), never fixed sleeps.

Run:
```bash
npm test -- tests/interaction.spec.ts
```
Expected: FAIL on absent enhancement.

**Step 2: Load the script without hiding anything by default**

In `BaseLayout.astro`, load the processed script:
```astro
<script>
  import "../scripts/motion";
</script>
```

No CSS rule hides content unless the script has added a class to that specific element. There is no global `motion-ready` class and no inline head script. The script is deferred, so a global hiding class would make the hero paint, vanish, and fade back in.

In `motion.ts`, decide once whether reveals run:
```ts
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const canReveal = !reduceMotion.matches && "IntersectionObserver" in window;
```

**Step 3: Reveal only below-the-fold blocks**

At startup, leave any `[data-reveal]` whose top edge is above the bottom of the viewport untouched: it is already on screen or already scrolled past. Mark the rest as pending and observe them; reveal each one once.
```ts
if (canReveal) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.replace("reveal-pending", "is-visible");
      observer.unobserve(entry.target);
    }
  });

  for (const el of document.querySelectorAll<HTMLElement>("[data-reveal]")) {
    if (el.getBoundingClientRect().top < window.innerHeight) continue;
    el.classList.add("reveal-pending");
    observer.observe(el);
  }
}
```

CSS: `.reveal-pending` sets `opacity: 0` and the 12–16px translate with no transition. `.is-visible` declares the transition, using only opacity/transform, `var(--duration-reveal)`, and `var(--ease-out)`. Never set per-bullet delays.

**Step 4: Keep anchor navigation native**

Anchor navigation uses the `scroll-behavior` and `scroll-margin-top` rules from Task 3. Do not intercept anchor clicks, call `scrollIntoView()`, change `tabindex`, or call `focus()`. Native fragment navigation already updates the URL and history and moves the keyboard focus starting point to the target. Do not add a scroll library.

**Step 5: Implement active navigation and timeline progress efficiently**

Use `IntersectionObserver` for active section state and `aria-current`. Make sure the last section becomes current when the page is scrolled to the bottom, and that no link is current above the first section. Update timeline progress from a single passive, `requestAnimationFrame`-throttled scroll handler using `getBoundingClientRect()` and `element.style.setProperty("--timeline-progress", String(progress))`. Animate the rail child with `transform: scaleY(...)` and `transform-origin: top`; never animate layout height.

**Step 6: Add motion fallbacks**

Under reduced motion, disable all nonessential transitions, never add `reveal-pending`, and show the static rail; smooth scrolling is already gated in Task 3. When JavaScript is unavailable or the script fails to load, no element has `reveal-pending`, so all content stays visible. In print, force every `[data-reveal]` visible.

**Step 7: Verify interaction quality**

Run:
```bash
npm run check && npm test -- tests/interaction.spec.ts
```
Expected: PASS with no browser-console errors. Manually test fast scrolling, repeated anchor activation, loading the page directly at `#research`, reloading while scrolled halfway down, changing viewport width, and reduced motion.

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

Assert that the homepage title/description, canonical URL, OG/Twitter fields, favicon, and one `application/ld+json` block exist. `Person` JSON-LD must contain the real name, URL, job title, and GitHub/LinkedIn `sameAs` URLs. Read `public/og-image.png` and assert the PNG header reports 1200×630: width and height are the big-endian 32-bit integers at byte offsets 16 and 20, so no image library is needed. Assert `robots.txt` references `https://zhoujc999.github.io/sitemap-index.xml` and a dedicated 404 heading exists.

Run:
```bash
npm test -- tests/metadata.spec.ts
```
Expected: FAIL on missing assets and page metadata.

**Step 2: Generate the social card in the site typeface**

`scripts/generate-og.mjs` imports `chromium` from `@playwright/test`, opens a 1200×630 page at device scale factor 1, and calls `page.setContent()` with a self-contained HTML string: the approved warm background, ink name, muted role line (from “Homepage copy”), and cobalt rule. Embed Geist as a base64 `@font-face` read from `node_modules/@fontsource-variable/geist/files/geist-latin-wght-normal.woff2`, so the card uses the site typeface and needs no network access or system font. Wait for `document.fonts.ready`, then:
```ts
await page.screenshot({ path: "public/og-image.png" });
```
Commit the generated PNG. Do not add a public social-card HTML route. Regenerate only when the name, role line, or palette changes; the output is not byte-identical across machines, so nothing compares it byte for byte.

Run:
```bash
npm run generate:og
```
Expected: `public/og-image.png` exists and measures 1200×630. Open it and confirm the text is set in Geist.

**Step 3: Complete metadata and JSON-LD**

Use `/og-image.png` through `new URL(path, Astro.site)`. Use the homepage meta description from “Homepage copy”; give the 404 page its own factual description. Add `Person` JSON-LD via `set:html={JSON.stringify(structuredData)}` with no comments or invented contact data.

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

Use `AxeBuilder` on `/` and `/404.html` with reduced motion enabled so reveal styles do not conceal audit targets. Fail on `serious` or `critical` violations. Add keyboard tests for skip link, résumé, section anchors, and external links. Use semantic roles rather than CSS selectors where possible.

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

Capture desktop and mobile screenshots of every section and inspect header behavior, timeline, logo tiles, focus rings, reduced motion, and link hover. Correct visual inconsistencies in source and rerun affected tests. Avoid gratuitous new effects not in the approved design.

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
- Delete: `.github/workflows/nextjs.yml`
- Create: `.github/workflows/astro.yml`
- Replace: `README.md`
- Preserve: `public/.nojekyll`

**Step 1: Write the verify-and-deploy workflow**

Delete `nextjs.yml` and create `.github/workflows/astro.yml`:
```yaml
name: Verify and deploy

on:
  push:
    branches: ["master"]
  pull_request:
  workflow_dispatch:

permissions:
  contents: read

jobs:
  verify:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v7
      - uses: actions/setup-node@v7
        with:
          node-version-file: .nvmrc
          cache: npm
      - run: npm ci
      - run: npx playwright install --with-deps chromium
      - run: npm run check
      - run: npm run build
      - run: npm test
      - uses: actions/upload-artifact@v7
        if: failure()
        with:
          name: playwright-report
          path: |
            playwright-report/
            test-results/
      - uses: actions/upload-pages-artifact@v5
        if: github.ref == 'refs/heads/master'
        with:
          path: dist/

  deploy:
    if: github.ref == 'refs/heads/master'
    needs: verify
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
    concurrency:
      group: pages
      cancel-in-progress: false
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v5
```

Keep these properties if the file is edited later:
- Pull requests run `verify` only. Nothing deploys unless the ref is `master`.
- The Pages permissions and the `pages` concurrency group live on the `deploy` job, not the workflow. At workflow level, a pull-request run could cancel a queued deploy.
- Node comes from `.nvmrc`, the same version used locally.
- No Next.js cache or configuration remains.

Expected local equivalent:
```bash
npm ci
npm run check
npm run build
npm test
test -f dist/index.html
```
All commands PASS.

**Step 2: Rewrite the README**

Document:
- Astro/static architecture, the Node 24 requirement (`fnm use`), and actual development commands (`npm install`, `npm run dev`, `npm run check`, `npm run build`, `npm test`, `npm run preview`).
- Where to update profile, experience, research, and education data.
- How to replace the résumé/profile and regenerate the OG image.
- GitHub Pages deployment behavior, with the status badge pointing at `astro.yml`.
- Reduced-motion/no-JavaScript principles.
- Future blog extension: typed Markdown Content Collection, `/blog/` index, `/blog/<slug>/`, RSS, drafts, and Writing UI only when the first post exists.
- No claims about blog features that are not implemented.

**Step 3: Audit repository leftovers**

Run:
```bash
rg -n -i "next\.js|next build|nextjs\.yml|tailwind|flowbite|react-|\bout/" README.md package.json astro.config.mjs .github src || true
git status --short
```
Expected: no matches, no stale framework/deployment instructions, and no generated `dist`, reports, or test artifacts listed. Working tree contains only intentional migration changes.

**Step 4: Commit deployment/docs**

```bash
git add .github/workflows README.md
git status --short
git commit -m "build: deploy static Astro site with GitHub Pages"
```
Expected before committing: the deletion of `nextjs.yml` is staged. If the old workflow survives, it keeps running on `master` and fails.

---

### Task 9: Final verification and handoff

**Files:** No intentional source changes unless verification identifies a defect.

**Step 1: Run the complete release gate from a clean install**

```bash
npm ci
npm run check
npm run build
npm test
git status --short
```

Expected: all commands PASS and the working tree is clean.

**Step 2: Inspect final built output**

Verify `dist/index.html`, `dist/404.html`, sitemap, robots, résumé, social image, responsive images, and font assets. Confirm there are no source-map secrets, stale Next artifacts, empty blog pages, or external font requests.

**Step 3: Review the final diff**

Check content accuracy against the original role/company/date arrays and all résumé/profile/DOI URLs. Ensure no existing achievement was exaggerated and no personal detail was invented. Confirm the hero, impact strip, and meta description match “Homepage copy” exactly. Confirm every approved design behavior has corresponding test or screenshot evidence.

**Step 4: Present handoff**

Report build/test results, screenshots, major content/design changes, and any remaining limitations. Do not merge, push, or deploy until the owner explicitly requests that action. After eventual deployment, verify the production homepage, résumé, sitemap, 404, and mobile navigation.

---

## Explicit non-goals for this rebuild

- No React runtime, Tailwind migration, CMS, backend, comments, analytics, newsletter, contact form, or search.
- No empty Writing page/navigation, tags, pagination, RSS, or MDX before real posts exist.
- No dark mode, custom cursor, magnetic controls, marquees, 3D effects, page loaders, or decorative stock imagery.
- No scroll library, mobile menu, or disclosure navigation.
- No content rewrite that changes factual claims merely to fit the design.
