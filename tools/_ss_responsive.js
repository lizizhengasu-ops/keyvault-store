const { chromium } = require("playwright");
(async () => {
  const browser = await chromium.launch({ headless: true });
  // Mobile viewport
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto("http://127.0.0.1:10005/b2b-wholesale3/", { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForSelector("#ms-b2b-v3-root", { timeout: 10000 });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: "C:\\Users\\31961\\Documents\\microsoft web\\b2b-v3-mobile.png", fullPage: true });
  
  // Also desktop
  const page2 = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page2.goto("http://127.0.0.1:10005/b2b-wholesale3/", { waitUntil: "networkidle", timeout: 30000 });
  await page2.waitForSelector("#ms-b2b-v3-root", { timeout: 10000 });
  await page2.waitForTimeout(2000);
  await page2.screenshot({ path: "C:\\Users\\31961\\Documents\\microsoft web\\b2b-v3-desktop.png", fullPage: true });
  
  console.log("Screenshots saved");
  await browser.close();
})();
