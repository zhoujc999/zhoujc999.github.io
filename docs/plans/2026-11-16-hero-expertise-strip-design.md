# Hero expertise strip design

## Goal

Replace the three numerical impact metrics below the hero with a compact overview of Jingchao's core expertise. Preserve the existing visual rhythm while avoiding large résumé-style figures.

## Content

Use three factual areas grounded in the existing experience content:

- **Developer Infrastructure:** monolith decomposition, dependency boundaries, and CI tooling.
- **Distributed Systems:** data pipelines and payment systems.
- **Autonomous-Vehicle Software:** simulation testing, fault injection, and vehicle data infrastructure.

## Component and data design

Replace `ImpactStrip.astro` with an `ExpertiseStrip.astro` component. Keep its position between `Hero` and `ExperienceTimeline`, its hairline-border grid, responsive three-column desktop layout, and stacked mobile layout. Replace the large metric values with small monospace expertise labels and concise descriptions.

Replace the unused `metrics` data and `ImpactMetric` interface in `src/data/profile.ts` with typed `expertise` data. Keep the hero itself unchanged. Add no client-side JavaScript or interactive behavior.

## Testing and documentation

Update the homepage browser test to verify the three expertise areas and their descriptions, and to ensure the old impact metrics are absent. Update the README content map and copy-test note to refer to expertise rather than impact metrics. Run type-checking, the production build, and the browser test suite after implementation.
