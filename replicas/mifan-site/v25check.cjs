const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://127.0.0.1:8118/', { waitUntil: 'networkidle', timeout: 20000 });
  await page.waitForTimeout(3000);
  
  const data = await page.evaluate(() => {
    const h2s = document.querySelectorAll('h2');
    const h2data = []; h2s.forEach(h => {const s=getComputedStyle(h); h2data.push({fs:s.fontSize,fw:s.fontWeight,lh:s.lineHeight})});
    const btns = document.querySelectorAll('.btn-primary, .hero-link-large');
    const bdata = []; btns.forEach(b => {const s=getComputedStyle(b); bdata.push({fs:s.fontSize,fw:s.fontWeight})});
    const navStyle = getComputedStyle(document.querySelector('nav'));
    const imgs = document.querySelectorAll('img[src*=products]').length;
    const sections = document.querySelectorAll('section').length;
    const cards = document.querySelectorAll('.card-hover, .card-item').length;
    return {h2s:h2data.slice(0,3), btns:bdata.slice(0,3), nav:{h:navStyle.height}, imgs,sections,cards};
  });
  console.log('V25 ANALYSIS:', JSON.stringify(data));
  await browser.close();
})().catch(e => { console.error(e.message); process.exit(1); });
