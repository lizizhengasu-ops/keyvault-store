import asyncio, json, math, sys, argparse

DIM_WEIGHTS = {"layout": 0.25, "typography": 0.25, "color": 0.20, "spacing": 0.15, "content": 0.15}

PAGE_MAP = {
    "home": {"ref": "https://www.microsoft.com/en-us/", "local": "/"},
    "store": {"ref": "https://www.microsoft.com/en-us/store/browse", "local": "/store"},
    "surface": {"ref": "https://www.microsoft.com/en-us/surface", "local": "/product/surface"},
    "windows": {"ref": "https://www.microsoft.com/en-us/windows", "local": "/product/windows"},
    "b2b": {"ref": "https://www.microsoft.com/en-us/microsoft-365/business", "local": "/b2b"},
    "support": {"ref": "https://support.microsoft.com/en-us", "local": "/support"},
}

def normalize_color(c):
    if not c or c in ["none", "transparent"]: return "transparent"
    c = c.strip()
    if c.startswith("#"): return c[:7].lower()
    if c.startswith("rgba("):
        parts = c.replace("rgba(", "").replace(")", "").split(",")
        if len(parts) >= 4 and float(parts[3].strip()) < 0.01: return "transparent"
    if c.startswith("rgb("):
        parts = c.replace("rgb(", "").replace(")", "").split(",")
        try:
            r, g, b = [int(x.strip()) for x in parts[:3]]
            return f"#{r:02x}{g:02x}{b:02x}"
        except: return c
    return c

def normalize_size(s):
    if not s: return 0
    s = s.strip()
    if s.endswith("px"): return float(s.replace("px", ""))
    if s.endswith("rem"): return float(s.replace("rem", "")) * 16
    if s.endswith("em"): return float(s.replace("em", "")) * 16
    return 0

def compare_dimension(ref_data, local_data, dim):
    if not ref_data or not local_data: return 0, 0, 0
    matches = 0; total = 0; diffs = []
    for elem in ["body","h1","h2","h3","h4","p","a","nav","footer","section"]:
        re = ref_data.get(elem); le = local_data.get(elem)
        if not re or not le: continue
        if dim == "typography":
            for attr in ["size", "weight", "lineH"]:
                if attr not in re or attr not in le: continue
                total += 1
                rv = normalize_size(re[attr]) if attr == "size" else re[attr]
                lv = normalize_size(le[attr]) if attr == "size" else le[attr]
                if attr == "size" and abs(rv - lv) <= 2:
                    matches += 1
                elif attr != "size" and rv == lv:
                    matches += 1
                else:
                    diffs.append(f"{elem}.{attr}: ref={re[attr]} local={le[attr]}")
        elif dim == "color":
            for attr in ["color", "bg"]:
                if attr not in re or attr not in le: continue
                total += 1
                if normalize_color(re[attr]) == normalize_color(le[attr]):
                    matches += 1
                else:
                    diffs.append(f"{elem}.{attr}: ref={normalize_color(re[attr])} local={normalize_color(le[attr])}")
        elif dim == "spacing":
            for attr in ["pad"]:
                if attr not in re or attr not in le: continue
                total += 1
                rv = normalize_size(re[attr].split()[0]) if re[attr] else 0
                lv = normalize_size(le[attr].split()[0]) if le[attr] else 0
                if abs(rv - lv) <= 4:
                    matches += 1
                else:
                    diffs.append(f"{elem}.{attr}: ref={re[attr]} local={le[attr]}")
    return matches, total, diffs

def compare_layout(ref_data, local_data):
    if not ref_data or not local_data: return 4, 4, []
    matches = 0; total = 4; diffs = []
    for key, name in [("_sections","section count"),("_headings","heading count"),("_links","link count"),("_images","image count")]:
        rv = ref_data.get(key, 0); lv = local_data.get(key, 0)
        if abs(rv - lv) <= max(2, rv * 0.5):
            matches += 1
        else:
            diffs.append(f"{name}: ref={rv} local={lv}")
    return matches, total, diffs

def compare_content(ref_data, local_data):
    if not ref_data or not local_data: return 4, 4, []
    matches = 0; total = 2; diffs = []
    for tag in ["h1","h2"]:
        re = ref_data.get(tag); le = local_data.get(tag)
        if re is None and le is None:
            matches += 1
        elif re and le:
            matches += 1
        else:
            diffs.append(f'{tag}: {"exists" if re else "missing"} ref, {"exists" if le else "missing"} local')
    return matches, total, diffs

async def run_all(local_base, output_path):
    from playwright.async_api import async_playwright
    results = {}
    async with async_playwright() as pw:
        browser = await pw.chromium.launch(headless=True)
        for name, mapping in PAGE_MAP.items():
            print(f"\n--- {name} ---")
            ref_url = mapping["ref"]
            local_url = mapping["local"]
            if local_url.startswith("/"): local_url = local_base.rstrip("/") + local_url
            print(f"  Ref: {ref_url}")
            print(f"  Local: {local_url}")
            
            ctx = await browser.new_context(viewport={"width": 1440, "height": 900})
            page = await ctx.new_page()
            ref_data = None; local_data = None
            
            try:
                await page.goto(ref_url, wait_until="domcontentloaded", timeout=45000)
                await page.wait_for_timeout(2000)
                ref_data = await page.evaluate("""() => {
                    const g = (sel) => { const e = document.querySelector(sel); return e ? getComputedStyle(e) : null; };
                    const r = {};
                    for (const s of ["body","h1","h2","h3","h4","p","a","nav","footer","section"]) {
                        const st = g(s); if (st) r[s] = {color: st.color, bg: st.backgroundColor, size: st.fontSize, weight: st.fontWeight, lineH: st.lineHeight, font: st.fontFamily, pad: st.padding, margin: st.margin};
                    }
                    r._sections = document.querySelectorAll("section").length;
                    r._headings = document.querySelectorAll("h1,h2,h3").length;
                    r._links = document.querySelectorAll("a").length;
                    r._images = document.querySelectorAll("img").length;
                    r._buttons = document.querySelectorAll("button").length;
                    return r;
                }""")
            except Exception as e:
                print(f"  Ref ERROR: {e}")
            
            try:
                await page.goto(local_url, wait_until="domcontentloaded", timeout=15000)
                await page.wait_for_timeout(2000)
                local_data = await page.evaluate("""() => {
                    const g = (sel) => { const e = document.querySelector(sel); return e ? getComputedStyle(e) : null; };
                    const r = {};
                    for (const s of ["body","h1","h2","h3","h4","p","a","nav","footer","section"]) {
                        const st = g(s); if (st) r[s] = {color: st.color, bg: st.backgroundColor, size: st.fontSize, weight: st.fontWeight, lineH: st.lineHeight, font: st.fontFamily, pad: st.padding, margin: st.margin};
                    }
                    r._sections = document.querySelectorAll("section").length;
                    r._headings = document.querySelectorAll("h1,h2,h3").length;
                    r._links = document.querySelectorAll("a").length;
                    r._images = document.querySelectorAll("img").length;
                    r._buttons = document.querySelectorAll("button").length;
                    return r;
                }""")
            except Exception as e:
                print(f"  Local ERROR: {e}")
            
            await ctx.close()
            
            if not ref_data or not local_data:
                print(f"  SKIP: {name}")
                continue
            
            page_result = {"dimensions": {}}
            for dim_key, dim_name in {"typography":"typography","color":"color","spacing":"spacing"}.items():
                m, t, d = compare_dimension(ref_data, local_data, dim_name)
                s = m/t if t>0 else 1.0
                page_result["dimensions"][dim_key] = {"score": s, "diffs": d}
                print(f"  {dim_key}: {m}/{t} ({s*100:.0f}%)")
            
            m, t, d = compare_layout(ref_data, local_data)
            s = m/t if t>0 else 1.0
            page_result["dimensions"]["layout"] = {"score": s, "diffs": d}
            print(f"  layout: {m}/{t} ({s*100:.0f}%)")
            
            m, t, d = compare_content(ref_data, local_data)
            s = m/t if t>0 else 1.0
            page_result["dimensions"]["content"] = {"score": s, "diffs": d}
            print(f"  content: {m}/{t} ({s*100:.0f}%)")
            
            ws = sum(page_result["dimensions"][d]["score"] * DIM_WEIGHTS[d] for d in DIM_WEIGHTS)
            page_result["score"] = ws
            print(f"  overall: {ws*100:.1f}%")
            results[name] = page_result
        
        await browser.close()
    
    if results:
        overall = sum(r["score"] for r in results.values()) / len(results)
        report = {"overall_score": overall, "pages": results}
        print(f"\nOverall: {overall*100:.1f}%")
        with open(output_path, "w", encoding="utf-8") as f:
            json.dump(report, f, indent=2)
    else:
        report = {"overall_score": 0.0, "pages": {}, "error": "no pages"}
        with open(output_path, "w") as f:
            json.dump(report, f)

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--local", default="http://127.0.0.1:5173")
    parser.add_argument("--output", default="similarity-report.json")
    args = parser.parse_args()
    asyncio.run(run_all(args.local, args.output))
