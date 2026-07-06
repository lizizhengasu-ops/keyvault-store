const { chromium } = require("playwright");
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("http://127.0.0.1:10005/b2b-wholesale3/", { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForSelector("#ms-b2b-v3-root", { timeout: 10000 });
  await page.waitForTimeout(3000);
  // Take full page screenshot
  await page.screenshot({ path: "C:\\Users\\31961\\Documents\\microsoft web\\b2b-v3-final-ok.png", fullPage: true });
  
  // Also check the footer elements via DOM
  const hasFooter = await page.evaluate(() => {
    const el = document.querySelector("#colophon");
    if (!el) return "NO colophon element";
    const style = window.getComputedStyle(el);
    return `display=${style.display}, height=${style.height}, overflow=${style.overflow}`;
  });
  console.log("Footer state:", hasFooter);
  
  await browser.close();
})();
