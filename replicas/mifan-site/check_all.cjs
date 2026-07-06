const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const pages = ['/account','/b2b','/cart','/support','/store'];
  const results = {};
  for(const p of pages){
    await page.goto('http://127.0.0.1:8118'+p,{waitUntil:'networkidle',timeout:15000}).catch(()=>{});
    await page.waitForTimeout(1500);
    results[p] = await page.evaluate(()=>document.querySelectorAll('section').length);
  }
  console.log(JSON.stringify(results));
  await browser.close();
})().catch(e=>{console.error(e.message);process.exit(1)});
