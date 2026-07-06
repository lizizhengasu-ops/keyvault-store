const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const pages = ['/', '/store', '/product/mphone-11-pro', '/support', '/account', '/b2b', '/cart'];
  const results = [];
  for (const path of pages) {
    await page.goto('http://127.0.0.1:8118'+path, { waitUntil: 'networkidle', timeout: 15000 }).catch(()=>{});
    await page.waitForTimeout(2000);
    const d = await page.evaluate(() => ({
      sections: document.querySelectorAll('section').length,
      h2: document.querySelectorAll('h2').length,
      cards: document.querySelectorAll('.card-hover').length,
      links: document.querySelectorAll('a').length,
      imgs: document.querySelectorAll('img[src*=products]').length,
      h1: document.querySelector('h1')?.textContent?.slice(0,30)||'',
      hasAnim: !!document.querySelector('[class*=gsap]') || !!document.querySelector('[class*=hero]'),
    }));
    results.push({path, ...d});
  }
  console.log(JSON.stringify(results,null,2));
  await browser.close();
})().catch(e=>{console.error(e.message);process.exit(1)});
