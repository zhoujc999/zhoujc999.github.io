// Generates public/og-image.png, the 1200×630 social preview card.
//
// Run with `npm run generate:og` after changing the name, role line, or palette,
// then commit the PNG. The card is rendered in Chromium with the site's own
// Geist font file embedded, so it needs no network access or system font.
// Output is not byte-identical across machines; nothing compares it byte for byte.

import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { chromium } from "@playwright/test";
import { profile } from "../src/data/profile.ts";

const WIDTH = 1200;
const HEIGHT = 630;

const root = new URL("../", import.meta.url);
const fontFile = new URL(
  "node_modules/@fontsource-variable/geist/files/geist-latin-wght-normal.woff2",
  root,
);
const outputPath = fileURLToPath(new URL("public/og-image.png", root));

const escapeHtml = (text) =>
  text.replace(/[&<>"']/g, (char) => `&#${char.charCodeAt(0)};`);

const font = (await readFile(fontFile)).toString("base64");

// Colors mirror the tokens in src/styles/global.css.
const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <style>
      @font-face {
        font-family: "Geist";
        font-weight: 100 900;
        src: url("data:font/woff2;base64,${font}") format("woff2");
      }
      * { box-sizing: border-box; margin: 0; }
      body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: ${WIDTH}px;
        height: ${HEIGHT}px;
        padding: 0 96px;
        background: #f7f7f4;
        color: #171717;
        font-family: "Geist";
        -webkit-font-smoothing: antialiased;
      }
      .rule { width: 96px; height: 8px; background: #2457d6; }
      h1 {
        margin-top: 48px;
        font-size: 128px;
        font-weight: 600;
        line-height: 1;
        letter-spacing: -0.045em;
      }
      p { margin-top: 32px; color: #5d6672; font-size: 44px; line-height: 1.2; letter-spacing: -0.01em; }
    </style>
  </head>
  <body>
    <div class="rule"></div>
    <h1>${escapeHtml(profile.name)}</h1>
    <p>${escapeHtml(profile.socialRoleLine)}</p>
  </body>
</html>`;

const browser = await chromium.launch();
try {
  const page = await browser.newPage({
    viewport: { width: WIDTH, height: HEIGHT },
    deviceScaleFactor: 1,
  });
  await page.setContent(html);

  const fontLoaded = await page.evaluate(async () => {
    await document.fonts.load('600 128px "Geist"');
    await document.fonts.ready;
    return document.fonts.check('600 128px "Geist"');
  });
  if (!fontLoaded) {
    throw new Error("Geist did not load; refusing to write a card in a fallback font.");
  }

  await page.screenshot({ path: outputPath });
} finally {
  await browser.close();
}

console.log(`Wrote ${outputPath} (${WIDTH}×${HEIGHT})`);
