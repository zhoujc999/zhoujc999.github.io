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
    // --ignore-lock keeps the preview in the foreground and untracked. Without it,
    // Astro backgrounds the server when an AI agent runs the tests, and refuses to
    // start when another preview is already running.
    command: `npm run build && npm run preview -- --host 127.0.0.1 --port ${port} --ignore-lock`,
    url: baseURL,
    reuseExistingServer: false,
  },
});
