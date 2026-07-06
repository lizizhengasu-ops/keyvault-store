from playwright.sync_api import sync_playwright
with sync_playwright() as p:
    b = p.chromium.launch()
    page = b.new_page()
    page.goto('http://127.0.0.1:5173/', timeout=10000, wait_until='domcontentloaded')
    q = page.evaluate('() => document.querySelectorAll("h1,h2,h3,h4,p,a,nav,footer,section,body").length')
    print('Elements found: ' + str(q))
    h1 = page.evaluate('() => document.querySelector("h1") ? document.querySelector("h1").textContent : "none"')
    print('First h1: ' + h1[:50])
    b.close()
