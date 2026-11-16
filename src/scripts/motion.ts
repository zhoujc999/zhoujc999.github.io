// Progressive enhancement only. The page is complete without this script: no CSS
// hides anything unless a class from here has been added to that specific element.

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const canReveal = !reduceMotion.matches && "IntersectionObserver" in window;

/** Fades in blocks that start below the fold, once each. */
function initReveals(): void {
  if (!canReveal) return;

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.replace("reveal-pending", "is-visible");
      observer.unobserve(entry.target);
    }
  });

  for (const element of document.querySelectorAll<HTMLElement>("[data-reveal]")) {
    // Already on screen, or already scrolled past: hiding it now would make it flash.
    if (element.getBoundingClientRect().top < window.innerHeight) continue;
    element.classList.add("reveal-pending");
    observer.observe(element);
  }
}

/**
 * Sets aria-current on the header link of the section in view.
 * Returns a function to call on scroll, which handles the bottom of the page.
 */
function initActiveNavigation(): (() => void) | undefined {
  if (!("IntersectionObserver" in window)) return undefined;

  const linkBySection = new Map<Element, HTMLAnchorElement>();
  for (const link of document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]")) {
    const section = document.getElementById(decodeURIComponent(link.hash.slice(1)));
    if (section) linkBySection.set(section, link);
  }
  const sections = [...linkBySection.keys()];
  const lastSection = sections.at(-1);
  if (!lastSection) return undefined;

  const inBand = new Set<Element>();
  let atBottom = false;

  const render = (): void => {
    const current = atBottom ? lastSection : sections.find((section) => inBand.has(section));
    for (const [section, link] of linkBySection) {
      if (section === current) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    }
  };

  // A zero-height band 45% down the viewport, so at most one section crosses it.
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          inBand.add(entry.target);
        } else {
          inBand.delete(entry.target);
        }
      }
      render();
    },
    { rootMargin: "-45% 0px -55% 0px" },
  );
  for (const section of sections) observer.observe(section);

  // A short last section never reaches the band, so the page bottom counts as "in view".
  return () => {
    const scrolledToBottom =
      window.scrollY > 0 &&
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    if (scrolledToBottom !== atBottom) {
      atBottom = scrolledToBottom;
      render();
    }
  };
}

/**
 * Fills the experience rail as the viewport midline travels down the timeline.
 * Returns a function to call on scroll.
 */
function initTimelineProgress(): (() => void) | undefined {
  if (reduceMotion.matches) return undefined;

  const timeline = document.querySelector<HTMLElement>("[data-timeline]");
  const fill = timeline?.querySelector<HTMLElement>("[data-timeline-progress]");
  if (!timeline || !fill) return undefined;

  let previous = -1;
  return () => {
    const rect = timeline.getBoundingClientRect();
    const raw = (window.innerHeight / 2 - rect.top) / rect.height;
    const progress = Math.round(Math.min(1, Math.max(0, raw)) * 1000) / 1000;
    if (progress === previous) return;
    previous = progress;
    fill.style.setProperty("--timeline-progress", String(progress));
  };
}

initReveals();

const onScroll = [initActiveNavigation(), initTimelineProgress()].filter(
  (update) => update !== undefined,
);

if (onScroll.length > 0) {
  let frame = 0;
  const run = (): void => {
    frame = 0;
    for (const update of onScroll) update();
  };
  const schedule = (): void => {
    if (frame === 0) frame = requestAnimationFrame(run);
  };

  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule, { passive: true });
  run();
}
