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
  vite: {
    tsconfig: "./tsconfig.json",
  },
});
