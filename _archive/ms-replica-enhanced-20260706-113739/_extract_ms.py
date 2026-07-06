from playwright.sync_api import sync_playwright
import json

with sync_playwright() as p:
    b = p.chromium.launch()
    page = b.new_page(viewport={"width": 1920, "height": 1080})
    
    pages = {
        "home": "https://www.microsoft.com/en-us",
        "store": "https://www.microsoft.com/en-us/store",
        "surface": "https://www.microsoft.com/en-us/surface",
        "windows": "https://www.microsoft.com/en-us/windows",
        "b2b": "https://www.microsoft.com/en-us/business",
    }
    
    all_data = {}
    for name, url in pages.items():
        print("--- " + name + " ---")
        try:
            page.goto(url, timeout=30000, wait_until="domcontentloaded")
            page.wait_for_timeout(3000)
            
            data = {}
            for tag in ["h1","h2","h3","h4"]:
                els = page.evaluate("() => Array.from(document.querySelectorAll('" + tag + "')).map(e => ({text: e.textContent.trim().substring(0,80), size: window.getComputedStyle(e).fontSize, weight: window.getComputedStyle(e).fontWeight}))")
                data[tag] = els
                print("  " + tag + ": " + str(len(els)))
            
            data["sections"] = page.evaluate("() => document.querySelectorAll('section').length")
            data["links"] = page.evaluate("() => document.querySelectorAll('a').length")
            data["imgs"] = page.evaluate("() => document.querySelectorAll('img').length")
            print("  sections: " + str(data["sections"]) + " links: " + str(data["links"]) + " imgs: " + str(data["imgs"]))
            
            all_data[name] = data
        except Exception as e:
            print("  ERROR: " + str(e))
            all_data[name] = {"error": str(e)}
    
    b.close()
    with open("ms_all_pages.json", "w", encoding="utf-8") as f:
        json.dump(all_data, f, ensure_ascii=False, indent=2)
    print("Done. Saved ms_all_pages.json")