const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://127.0.0.1:8118/', { waitUntil: 'networkidle', timeout: 20000 });
  await page.waitForTimeout(3500);
  await page.screenshot({ path: 'screenshot_v26.png', fullPage: true });
  
  const data = await page.evaluate(() => {
    const h2s = document.querySelectorAll('h2');
    const h2data = [...h2s].slice(0,3).map(h => {const s=getComputedStyle(h); return {fs:s.fontSize,fw:s.fontWeight}});
    const btns = document.querySelectorAll('.btn-primary, .hero-link-large');
    const bdata = [...btns].slice(0,3).map(b => {const s=getComputedStyle(b); return {fs:s.fontSize,fw:s.fontWeight}});
    const navLinks = document.querySelectorAll('nav a').length;
    const footerLinks = document.querySelectorAll('.footer-link').length;
    const sections = document.querySelectorAll('section').length;
    const details = document.querySelectorAll('details').length;
    const productImgs = document.querySelectorAll('img[src*=products]').length;
    return {h2s:h2data, btns:bdata, nav:navLinks, footer:footerLinks, sections, faq:details, imgs:productImgs};
  });
  console.log('V26:', JSON.stringify(data));
  await browser.close();
})().catch(e => { console.error(e.message); process.exit(1); });
