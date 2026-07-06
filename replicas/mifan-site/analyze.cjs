const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  // Analyze our site
  await page.goto('http://127.0.0.1:8118/', { waitUntil: 'networkidle', timeout: 20000 });
  await page.waitForTimeout(3000);
  
  const data = await page.evaluate(() => {
    const body = getComputedStyle(document.body);
    const navEl = document.querySelector('nav');
    const navStyle = navEl ? getComputedStyle(navEl) : null;
    const h2s = document.querySelectorAll('h2');
    const h2Data = [];
    for (let i = 0; i < Math.min(h2s.length, 5); i++) {
      const s = getComputedStyle(h2s[i]);
      h2Data.push({fontSize:s.fontSize, fontWeight:s.fontWeight, color:s.color, lineHeight:s.lineHeight});
    }
    const btns = document.querySelectorAll('.btn-link, .hero-link-large, .btn-primary');
    const btnData = [];
    btns.forEach(b => {
      const s = getComputedStyle(b);
      btnData.push({fontSize:s.fontSize, fontWeight:s.fontWeight, color:s.color, letterSpacing:s.letterSpacing});
    });
    const sections = document.querySelectorAll('section');
    const imgs = document.querySelectorAll('img');
    const links = document.querySelectorAll('nav a');
    const hasGsap = !!document.querySelector('[class*=hero-title]');
    
    return {
      body: {bg:body.backgroundColor, font:body.fontFamily, color:body.color, fs:body.fontSize},
      nav: navStyle ? {h:navStyle.height, bg:navStyle.backgroundColor} : null,
      h2: h2Data,
      buttons: btnData.slice(0, 5),
      sectionCount: sections.length,
      imageCount: imgs.length,
      navLinkCount: links.length,
      hasScrollAnim: hasGsap
    };
  });
  
  console.log(JSON.stringify(data, null, 2));
  await browser.close();
})().catch(e => { console.error(e.message); process.exit(1); });
