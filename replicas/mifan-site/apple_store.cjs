const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  // Fetch apple.com/store structure
  await page.goto('https://www.apple.com/store', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(2000);
  
  const storeData = await page.evaluate(() => {
    const headings = document.querySelectorAll('h1,h2,h3');
    const h = [...headings].slice(0,10).map(el => ({
      tag: el.tagName,
      text: el.textContent?.trim().slice(0,50),
      classes: el.className?.slice(0,80)
    }));
    
    const links = [...document.querySelectorAll('a')].slice(0,30).map(a => ({
      text: a.textContent?.trim().slice(0,50),
      href: a.getAttribute('href')
    }));
    
    const sections = [...document.querySelectorAll('section, [class*=section]')].slice(0,5).map(s => ({
      classes: (s.className||'').slice(0,120),
      childCount: s.children.length
    }));
    
    return { headings: h, topLinks: links.slice(0,15), sections };
  });
  
  console.log('APPLE STORE:', JSON.stringify(storeData, null, 2));
  await browser.close();
})().catch(e => { console.error(e.message); process.exit(1); });
