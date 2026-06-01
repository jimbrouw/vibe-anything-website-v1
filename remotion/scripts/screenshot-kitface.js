/**
 * Automated screenshot capture for KitFace.app
 *
 * Usage:
 *   npm install playwright   (if not already installed)
 *   node scripts/screenshot-kitface.js
 *
 * The script opens a visible browser so you can log in manually if needed,
 * then navigates through the app and saves three screenshots to remotion/public/.
 *
 * Adjust the STEPS array below to match the actual URLs/states of your app.
 */

const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const OUT_DIR = path.join(__dirname, "../public");

const STEPS = [
  {
    url: "https://app.kitface.app/",
    file: "screenshot-upload.jpg",
    label: "Upload screen",
    waitFor: "networkidle",
    // Optionally click something before screenshotting, e.g.:
    // action: async (page) => { await page.click('#upload-button'); },
  },
  {
    url: "https://app.kitface.app/",
    file: "screenshot-processing.jpg",
    label: "Processing screen",
    waitFor: "networkidle",
    // If the processing state requires an action (e.g. submitting a form),
    // add an action here. The script will pause so you can interact manually.
    pauseMs: 0, // set to e.g. 5000 if you need time to trigger the state
  },
  {
    url: "https://app.kitface.app/",
    file: "screenshot-result.jpg",
    label: "Result / avatar screen",
    waitFor: "networkidle",
    pauseMs: 0,
  },
];

async function run() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const browser = await chromium.launch({
    headless: false,    // visible — so you can log in / interact
    slowMo: 200,
  });

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });

  const page = await context.newPage();

  for (const step of STEPS) {
    console.log(`\n→ ${step.label}`);
    console.log(`  Opening ${step.url}`);

    await page.goto(step.url, { waitUntil: step.waitFor ?? "networkidle", timeout: 30_000 });

    if (step.action) {
      await step.action(page);
    }

    if (step.pauseMs) {
      console.log(`  Pausing ${step.pauseMs}ms — interact with the browser now...`);
      await page.waitForTimeout(step.pauseMs);
    } else if (!step.action) {
      // Give a moment for any animations to settle
      await page.waitForTimeout(800);
    }

    const outPath = path.join(OUT_DIR, step.file);
    await page.screenshot({ path: outPath, type: "jpeg", quality: 92, fullPage: false });
    console.log(`  ✓ Saved → ${path.relative(process.cwd(), outPath)}`);
  }

  await browser.close();
  console.log("\nDone. All screenshots saved to remotion/public/");
}

run().catch((err) => {
  console.error("Screenshot failed:", err.message);
  process.exit(1);
});
