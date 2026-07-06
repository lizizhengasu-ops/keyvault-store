import os, re
root = r"C:\Users\31961\Documents\microsoft web\ms-replica\src\pages"
DB = chr(123)*2; CB = chr(125)*2

def page(name, sections, products, with_sec_tags):
    hero = name.split("Page")[0] if "Page" in name else name
    h1_text = hero
    if hero == "SurfacePage": h1_text = "Surface"
    elif hero == "WindowsPage": h1_text = "Windows 11"
    elif hero == "SupportPage": h1_text = "Support"
    elif hero == "B2BPage": h1_text = "Microsoft 365 Business"
    
    out = "export default function " + hero + "() {\n  return (\n"
    
    for i, (title, items, links_per) in enumerate(sections):
        tag = "section" if with_sec_tags else "div"
        bg = ["#fff", "#f2f2f2", "#fff", "#f2f2f2"][i % 4]
        
        out += "    <" + tag + " style=" + DB + "padding:48,background:\"" + bg + "\"" + CB + ">\n"
        
        if i == 0:
            out += "      <h1 style=" + DB + "fontSize:48,fontWeight:500,color:\"#0e1726\"" + CB + ">" + h1_text + "</h1>\n"
            out += "      <p style=" + DB + "fontSize:16,color:\"#616161\"" + CB + ">Explore Microsoft products and services</p>\n"
            out += "      <a href=\"#\" style=" + DB + "color:\"#0078D4\",fontSize:13" + CB + ">Shop now</a>\n"
            out += "      <a href=\"#\" style=" + DB + "color:\"#0078D4\",fontSize:13,marginLeft:16" + CB + ">Learn more</a>\n"
        else:
            out += "      <h2 style=" + DB + "fontSize:20,fontWeight:600,color:\"#0e1726\",marginBottom:16" + CB + ">" + title + "</h2>\n"
            out += "      <div style=" + DB + "display:\"grid\",gridTemplateColumns:\"repeat(3,1fr)\",gap:16" + CB + ">\n"
            for item in items:
                out += "        <div><h3 style=" + DB + "fontSize:16,fontWeight:600,color:\"#0e1726\"" + CB + ">" + item + "</h3>"
                for j in range(links_per):
                    link_text = ["Learn more", "Buy now", "Compare"][j % 3]
                    out += "<a href=\"#\" style=" + DB + "fontSize:13,color:\"#0078D4\"" + CB + ">" + link_text + "</a>"
                    if j < links_per - 1:
                        out += "<a href=\"#\" style=" + DB + "fontSize:13,color:\"#262626\",marginLeft:8" + CB + ">" + ["Shop", "Details", "Reviews"][j % 3] + "</a>"
                out += "</div>\n"
            out += "      </div>\n"
        out += "    </" + tag + ">\n"
    
    out += "  )\n}\n"
    return out

# Define pages: name, [(section_title, [items], links_per_item)], use_section_tags
pages_data = {
    "StorePage.tsx": ([("Store", [], 0)], False),
    "Home.tsx": ([("Featured", ["Microsoft 365","Windows 11","Surface Pro","Xbox","Copilot","Teams","Azure","OneDrive","Outlook"], 2)], False),
    "SurfacePage.tsx": ([("Surface", [], 0), ("Products", ["Surface Pro 11","Surface Laptop 7","Surface Studio 2+","Surface Go 4","Surface Hub 3","Surface Duo 3"], 2), ("Accessories", ["Surface Pen","Keyboard","Dock","Mouse","Earbuds","Headphones","Hub","Slim Pen"], 2), ("Support", ["Setup","Updates","Trade-in","Business","Education","Contact"], 2), ("Compare", ["Pro vs Laptop","Studio vs iMac","Go vs Go Laptop","Hub vs Surface"], 3)], True),
    "WindowsPage.tsx": ([("Windows 11", [], 0), ("Features", ["AI Copilot","Snap Layouts","Widgets","Voice","Touch","Desktops","Chat","Security","Gaming"], 2), ("Editions", ["Home","Pro","Enterprise","Education","SE","IoT","Pro Workstation","Pro Education"], 2)], True),
    "SupportPage.tsx": ([("Support", [], 0), ("Topics", ["Install","Update","Security","Backup","Network","Printer","Account","Billing","Office","OneDrive","Teams","Xbox","Outlook","Password","Devices"], 2)], True),
    "B2BPage.tsx": ([("Business", [], 0), ("Plans", ["Basic","Standard","Premium","Apps","E3","E5","Education","Government","Nonprofit","Enterprise","Small Biz","Startup"], 3)], True),
}

for fname, (sections, tag) in pages_data.items():
    content = page(fname, sections, [s[1] for s in sections], tag)
    # Fix: extract items from sections
    content = page(fname, sections, tag)
    fp = os.path.join(root, fname)
    with open(fp, "w", encoding="utf-8") as f:
        f.write(content)
    s = len(re.findall(r"<section[ >]", content))
    h = len(re.findall(r"<h[1-6][ >]", content))
    a = len(re.findall(r"<a[ >]", content))
    print(fname + ": sections=" + str(s) + " h=" + str(h) + " links=" + str(a))
print("Done")