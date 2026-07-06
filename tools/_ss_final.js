const { chromium } = require("playwright");
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("http://127.0.0.1:10005/b2b-wholesale3/", { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForSelector("#ms-b2b-v3-root", { timeout: 10000 });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: "C:\\Users\\31961\\Documents\\microsoft web\\b2b-v3-final-fix.png", fullPage: true });
  console.log("Screenshot saved");
  await browser.close();
})();
