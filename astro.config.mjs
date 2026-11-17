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
  markdown: {
    // A light theme to match the page. Every token color in it has at least 4.5:1 contrast on white.
    shikiConfig: { theme: "github-light-default" },
  },
  vite: {
    tsconfig: "./tsconfig.json",
  },
});
