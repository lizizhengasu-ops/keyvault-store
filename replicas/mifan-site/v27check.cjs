const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://127.0.0.1:8118/', { waitUntil: 'networkidle', timeout: 20000 });
  await page.waitForTimeout(3500);
  await page.screenshot({ path: 'screenshot_v27.png', fullPage: true });
  
  const data = await page.evaluate(() => {
    const btns = document.querySelectorAll('.btn-primary');
    const bdata = [...btns].slice(0,2).map(b => {const s=getComputedStyle(b); return {fs:s.fontSize,fw:s.fontWeight}});
    const navLinks = document.querySelectorAll('nav a').length;
    const dropdowns = document.querySelectorAll('.nav-dropdown, .nav-item').length;
    const sections = document.querySelectorAll('section').length;
    const details = document.querySelectorAll('details').length;
    const cards = document.querySelectorAll('.card-hover').length;
    const anims = typeof ScrollTrigger !== 'undefined';
    return {btns:bdata, nav:navLinks, dd:dropdowns, sections, faq:details, cards};
  });
  console.log('V27:', JSON.stringify(data));
  await browser.close();
})().catch(e => { console.error(e.message); process.exit(1); });
