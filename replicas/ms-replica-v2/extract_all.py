#!/usr/bin/env python3
"""Extract full HTML structure + design tokens from Microsoft pages."""
import sys, json, asyncio, os
sys.stdout.reconfigure(encoding='utf-8')
try:
    from playwright.async_api import async_playwright
except ImportError:
    print('pip install playwright && playwright install chromium')
    sys.exit(1)

PAGES = {
    'home': 'https://www.microsoft.com/en-us/',
    'store': 'https://www.microsoft.com/en-us/store/browse',
    'surface': 'https://www.microsoft.com/en-us/surface',
    'windows': 'https://www.microsoft.com/en-us/windows',
    'support': 'https://support.microsoft.com/en-us',
    'b2b': 'https://www.microsoft.com/en-us/microsoft-365/business',
}

async def extract_page(pname, url, page):
    print(f'  Extracting {pname}...')
    try:
        await page.goto(url, wait_until='domcontentloaded', timeout=30000)
        await page.wait_for_timeout(3000)
    except:
        print(f'  [WARN] {pname}: timeout')
        return {'error': 'timeout', 'name': pname}

    data = await page.evaluate('''() => {
        const r = {};
        // Element counts
        r.counts = {};
        for (const tag of ['section','div','h1','h2','h3','h4','h5','h6','p','a','img','nav','footer','ul','li','button','input','span','header','main']) {
            r.counts[tag] = document.querySelectorAll(tag).length || 0;
        }

        // Design tokens for key elements
        r.tokens = {};
        const tags = ['body','h1','h2','h3','h4','h5','h6','p','nav','footer','main','header'];
        for (const tag of tags) {
            const el = tag === 'body' ? document.body : document.querySelector(tag);
            if (el) {
                const s = getComputedStyle(el);
                r.tokens[tag] = {
                    display: s.display, fontSize: s.fontSize, fontWeight: s.fontWeight,
                    lineHeight: s.lineHeight, color: s.color, backgroundColor: s.backgroundColor,
                    fontFamily: s.fontFamily
                };
                if (['nav','footer','header','main'].includes(tag)) {
                    r.tokens[tag].padding = s.padding;
                    r.tokens[tag].margin = s.margin;
                    r.tokens[tag].height = s.height;
                    r.tokens[tag].width = s.width;
                }
            }
        }

        // Link tokens (first 5 visible links)
        r.links = [];
        const links = document.querySelectorAll('a:not([href*=\"#\"]):not([href=\"\"])');
        for (let i = 0; i < links.length && r.links.length < 5; i++) {
            const a = links[i];
            if (a.offsetWidth > 0 && a.offsetHeight > 0) {
                const s = getComputedStyle(a);
                r.links.push({
                    text: (a.textContent||'').trim().slice(0,50),
                    href: (a.getAttribute('href')||'').slice(0,100),
                    fontSize: s.fontSize, fontWeight: s.fontWeight,
                    color: s.color, bg: s.backgroundColor,
                    padding: s.padding
                });
            }
        }

        // Content extraction
        r.content = {};
        // Hero/section headings
        const h1s = document.querySelectorAll('h1');
        r.content.headings = Array.from(h1s).slice(0,5).map(h => ({
            text: (h.textContent||'').trim().slice(0,100),
            level: 'h1'
        }));
        // First 10 h2s
        const h2s = document.querySelectorAll('h2');
        r.content.h2s = Array.from(h2s).slice(0,10).map(h => ({
            text: (h.textContent||'').trim().slice(0,100)
        }));
        // Nav structure
        const nav = document.querySelector('nav');
        if (nav) {
            r.content.navLinks = Array.from(nav.querySelectorAll('a')).slice(0,15).map(a => ({
                text: (a.textContent||'').trim().slice(0,50),
                href: (a.getAttribute('href')||'').slice(0,100)
            }));
        }
        // Footer structure  
        const footer = document.querySelector('footer');
        if (footer) {
            r.content.footerLinks = Array.from(footer.querySelectorAll('a')).slice(0,20).map(a => ({
                text: (a.textContent||'').trim().slice(0,80),
                href: (a.getAttribute('href')||'').slice(0,100)
            }));
        }
        return r;
    }''')
    data['name'] = pname
    data['url'] = url
    return data

async def main():
    out = r'C:\Users\31961\Documents\microsoft web\ms-replica\ms-full-extract.json'
    async with async_playwright() as pw:
        browser = await pw.chromium.launch(headless=True)
        page = await browser.new_page(viewport={'width':1440,'height':900})
        results = {}
        for pname, url in PAGES.items():
            results[pname] = await extract_page(pname, url, page)
        cnt = results[pname].get("counts",{})
        print(str(pname) + ": " + str(cnt.get("section","?")) + " sections, " + str(cnt.get("h1","?")) + " h1s")
    with open(out, 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    print(f'\nSaved to {out}')

asyncio.run(main())