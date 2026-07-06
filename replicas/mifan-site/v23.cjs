const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://127.0.0.1:8118/', { waitUntil: 'networkidle', timeout: 20000 });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'screenshot_v23.png', fullPage: true });
  
  // Also screenshot Store page
  await page.goto('http://127.0.0.1:8118/store', { waitUntil: 'networkidle', timeout: 20000 });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'screenshot_v23_store.png', fullPage: true });
  
  console.log('V23 screenshots done');
  await browser.close();
})().catch(e => { console.error(e.message); process.exit(1); });
