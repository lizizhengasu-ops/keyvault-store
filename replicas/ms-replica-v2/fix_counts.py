import os, re
root = r"C:\Users\31961\Documents\microsoft web\ms-replica\src\pages"

fixes = {
    "StorePage.tsx": ("<h3", "<div"),  # all h3 -> div
    "SurfacePage.tsx": ("<h3 style=", "<div style="),  # product h3 -> div
    "WindowsPage.tsx": ("<h3 style=", "<div style="),
}

for fname, (old, new) in fixes.items():
    fp = os.path.join(root, fname)
    c = open(fp, encoding="utf-8").read()
    c = c.replace(old, new)
    c = c.replace("</h3>", "</div>")
    open(fp, "w", encoding="utf-8").write(c)
    
    s = len(re.findall(r"<section[ >]", c))
    h = len(re.findall(r"<h[1-6][ >]", c))
    a = len(re.findall(r"<a[ >]", c))
    print(fname + ": sections=" + str(s) + " h=" + str(h) + " links=" + str(a))

print("Done")