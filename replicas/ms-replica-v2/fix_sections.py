import os
root = r'C:\Users\31961\Documents\microsoft web\ms-replica\src\pages'

# Check current heading/link/section counts via Python grep
import re

for fname in ['SurfacePage.tsx','WindowsPage.tsx','SupportPage.tsx','B2BPage.tsx','Home.tsx','StorePage.tsx']:
    fp = os.path.join(root, fname)
    c = open(fp, encoding='utf-8').read()
    h_cnt = len(re.findall(r'<h[1-6][ >]', c))
    a_cnt = len(re.findall(r'<a[ >]', c))
    s_cnt = len(re.findall(r'<section[ >]', c))
    img_cnt = len(re.findall(r'<img[ >]', c))
    print(f'{fname}: sections={s_cnt} h={h_cnt} links={a_cnt} imgs={img_cnt}')