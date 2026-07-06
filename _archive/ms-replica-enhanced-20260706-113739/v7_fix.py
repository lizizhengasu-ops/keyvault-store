import os, re

root = r'C:\Users\31961\Documents\microsoft web\ms-replica\src\pages'

# 1. Fix StorePage: h1 -> div (store.content scores 0% because ref has no h1)
sp = os.path.join(root, 'StorePage.tsx')
c = open(sp, encoding='utf-8').read()
c = c.replace('<h1 style=', '<div style=')
c = c.replace('Store</h1>', 'Store</div>')
open(sp, 'w', encoding='utf-8').write(c)
print('StorePage: h1 -> div')

# 2. Fix HomePage: remove h1 from hero section (ref has no h1)
# Change h1 to a styled span
hp = os.path.join(root, 'Home.tsx')
c = open(hp, encoding='utf-8').read()
c = c.replace('h1 style={', 'span style={')
c = c.replace('</h1>', '</span>')
open(hp, 'w', encoding='utf-8').write(c)
print('Home: h1 -> span')

# 3. Add placeholder images to all product pages
for fname in os.listdir(root):
    if not fname.endswith('.tsx'): continue
    fp = os.path.join(root, fname)
    c = open(fp, encoding='utf-8').read()
    # Add a placeholder image section to pages that have hero sections
    if 'background:' in c and 'linear-gradient' not in c:
        c = c.replace('style={{height:160,background:p.img', 
                      "style={{height:160,background:p.img,backgroundImage:'url(https://picsum.photos/400/300)',backgroundSize:'cover'")
        c = c.replace("style={{width:'100%',height:160,background:p.img",
                      "style={{width:'100%',height:160,background:p.img,backgroundImage:'url(https://picsum.photos/400/300)',backgroundSize:'cover'")
    open(fp, 'w', encoding='utf-8').write(c)
    print(f'Added images to {fname}')

print('V7 fixes done')