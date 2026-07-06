const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  // Screenshot
  await page.goto('http://127.0.0.1:8118/', { waitUntil: 'networkidle', timeout: 20000 });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'screenshot_v25.png', fullPage: true });
  
  // Analysis
  const data = await page.evaluate(() => {
    const h2s = document.querySelectorAll('h2');
    const h2data = [];
    for (let i = 0; i < Math.min(h2s.length, 5); i++) {
      const s = getComputedStyle(h2s[i]);
      h2data.push({fs:s.fontSize, fw:s.fontWeight, lh:s.lineHeight, col:s.color});
    }
    const btns = document.querySelectorAll('.btn-primary, .hero-link-large, .btn-link');
    const bdata = [];
    btns.forEach(b => {
      const s = getComputedStyle(b);
      bdata.push({fs:s.fontSize, fw:s.fontWeight, col:s.color, ls:s.letterSpacing});
    });
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');
    const imgs = document.querySelectorAll('img');
    const hasPhones = document.querySelectorAll('img[src*=products]').length;
    const cards = document.querySelectorAll('.card-hover, .card-item');
    return {
      h2s: h2data, buttons: bdata.slice(0,5), navCount: navLinks.length,
      sectionCount: sections.length, imgCount: imgs.length,
      productImgs: hasPhones, cardCount: cards.length
    };
  });
  
  console.log('ANALYSIS:', JSON.stringify(data));
  await browser.close();
})().catch(e => { console.error(e.message); process.exit(1); });
