# Hero Expertise Strip Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the impact metrics below the hero with three concise core-expertise items while preserving the site's responsive visual rhythm.

**Architecture:** Keep the page static and component-based. Replace the `ImpactStrip` component and `profile.metrics` data with an equivalent `ExpertiseStrip` and typed `profile.expertise` data, then update the page composition and browser coverage. No JavaScript behavior changes are needed.

**Tech Stack:** Astro, TypeScript, scoped CSS, Playwright, Node 24.

---

### Task 1: Specify the expertise strip with a failing browser test

**Files:**
- Modify: `tests/homepage.spec.ts:51-65`

**Step 1: Replace the impact-metrics test with the desired expertise behavior**

Use this test:

```ts
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
```

**Step 2: Run the focused test and verify RED**

Run: `npx playwright test tests/homepage.spec.ts --grep "core expertise"`

Expected: FAIL because `[data-expertise]` does not exist. The failure must be the missing strip, not a syntax or server error.

**Step 3: Commit the failing specification**

```bash
git add tests/homepage.spec.ts
git commit -m "test: specify hero expertise strip"
```

### Task 2: Implement the typed expertise content and strip

**Files:**
- Modify: `src/data/profile.ts:1-7,9-31,53-69`
- Create: `src/components/ExpertiseStrip.astro`
- Delete: `src/components/ImpactStrip.astro`
- Modify: `src/pages/index.astro:1-39`
- Test: `tests/homepage.spec.ts`

**Step 1: Replace metric types and data with expertise types and data**

Replace `ImpactMetric` with:

```ts
export interface ExpertiseArea {
  label: string;
  description: string;
}
```

Change `Profile.metrics: ImpactMetric[]` to `expertise: ExpertiseArea[]`, and replace the `metrics` value with:

```ts
expertise: [
  {
    label: "Developer Infrastructure",
    description:
      "Monolith decomposition, dependency boundaries, and CI tooling that help teams ship independently.",
  },
  {
    label: "Distributed Systems",
    description: "Data pipelines and payment systems built for reliability and scale.",
  },
  {
    label: "Autonomous-Vehicle Software",
    description: "Simulation testing, fault injection, and vehicle data infrastructure.",
  },
],
```

**Step 2: Add `ExpertiseStrip.astro` and remove `ImpactStrip.astro`**

Create the replacement component:

```astro
---
import { profile } from "../data/profile";
---

<section class="expertise container" aria-label="Core expertise" data-expertise data-reveal>
  <ul class="expertise__list" role="list">
    {
      profile.expertise.map((area) => (
        <li class="expertise__item">
          <p class="expertise__label mono">{area.label}</p>
          <p class="expertise__description">{area.description}</p>
        </li>
      ))
    }
  </ul>
</section>

<style>
  .expertise {
    margin-bottom: var(--section-space);
  }

  .expertise__list {
    display: grid;
    margin: 0;
    padding: 0;
    border-block: 1px solid var(--color-border);
    list-style: none;
  }

  .expertise__item {
    display: grid;
    align-content: start;
    gap: 0.625rem;
    padding-block: 1.5rem;
  }

  .expertise__item + .expertise__item {
    border-top: 1px solid var(--color-border);
  }

  .expertise__label {
    color: var(--color-ink);
    font-size: 0.8125rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    line-height: 1.5;
  }

  .expertise__description {
    max-width: 26rem;
    color: var(--color-muted);
    font-size: 0.9375rem;
    line-height: 1.55;
  }

  @media (min-width: 48rem) {
    .expertise__list {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .expertise__item {
      padding: 2rem 2rem 2rem 0;
    }

    .expertise__item + .expertise__item {
      padding-left: 2rem;
      border-top: 0;
      border-left: 1px solid var(--color-border);
    }
  }
</style>
```

Delete `src/components/ImpactStrip.astro`; no other component imports it.

**Step 3: Swap the homepage component**

In `src/pages/index.astro`, replace the `ImpactStrip` import with:

```ts
import ExpertiseStrip from "../components/ExpertiseStrip.astro";
```

Replace `<ImpactStrip />` with `<ExpertiseStrip />`.

**Step 4: Run the focused test and verify GREEN**

Run: `npx playwright test tests/homepage.spec.ts --grep "core expertise"`

Expected: PASS with three items, all expected copy visible, and no `[data-impact]` element.

**Step 5: Run the homepage tests**

Run: `npx playwright test tests/homepage.spec.ts`

Expected: PASS with no failures.

**Step 6: Commit the implementation**

```bash
git add src/data/profile.ts src/components/ExpertiseStrip.astro src/components/ImpactStrip.astro src/pages/index.astro
git commit -m "feat: replace impact metrics with core expertise"
```

### Task 3: Update documentation and run full verification

**Files:**
- Modify: `README.md:31-55`
- Verify: all source and test files

**Step 1: Update content-maintenance documentation**

In the content table, change `Name, role, hero text, impact metrics, links, About, interests` to `Name, role, hero text, core expertise, links, About, interests`.

Change the copy-test note from `impact metrics` to `core expertise`.

**Step 2: Type-check the project**

Run: `npm run check`

Expected: PASS with zero Astro or TypeScript errors.

**Step 3: Build and run the complete browser suite**

Run: `npm test`

Expected: production build succeeds and all Playwright tests pass with no errors.

**Step 4: Inspect the final diff and repository status**

Run: `git diff master -- README.md src tests && git status --short`

Expected: only the planned expertise-strip files and README differ; no generated build artifacts are tracked.

**Step 5: Commit the documentation update**

```bash
git add README.md
git commit -m "docs: document core expertise content"
```
