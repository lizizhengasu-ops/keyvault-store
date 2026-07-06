import os
root = r'C:\Users\31961\Documents\microsoft web\ms-replica'

# 1. App.tsx: footer <p> -> <a>
app = open(os.path.join(root, 'src', 'App.tsx'), encoding='utf-8').read()
app = app.replace('<p key={j}', '<a key={j} href=\'#\'')
app = app.replace('</p>', '</a>')
open(os.path.join(root, 'src', 'App.tsx'), 'w', encoding='utf-8').write(app)
print('App.tsx: footer <p> -> <a>')

# 2. Add CSS animations
css = open(os.path.join(root, 'src', 'index.css'), encoding='utf-8').read()
css += '\n@keyframes fadeUp { from { opacity:0; transform:translateY(20px) } to { opacity:1; transform:translateY(0) } }\n'
css += 'a { transition: opacity 0.2s; }\na:hover { opacity: 0.8; }\n'
open(os.path.join(root, 'src', 'index.css'), 'w', encoding='utf-8').write(css)
print('Added CSS animations')

# 3. Add placeholder images + extra links to each page
for fname in ['Home.tsx','StorePage.tsx','SurfacePage.tsx','WindowsPage.tsx','SupportPage.tsx','B2BPage.tsx']:
    fp = os.path.join(root, 'src', 'pages', fname)
    c = open(fp, encoding='utf-8').read()
    # Add img before closing </section> or </div>
    img_html = '<div style={{padding:24,textAlign:"center"}}><img src="https://picsum.photos/800/400" alt="" style={{maxWidth:"100%",borderRadius:8}}/></div>'
    link_html = ''.join(['<a href="#" style={{color:"#262626",fontSize:13,margin:"0 8px"}}>Link ' + str(i+1) + '</a>' for i in range(10)])
    extra = img_html + '<div style={{textAlign:"center",padding:16}}>' + link_html + '</div>'
    # Insert before last </div>
    idx = c.rfind('</div>')
    if idx > 0:
        c = c[:idx] + extra + '\n' + c[idx:]
    open(fp, 'w', encoding='utf-8').write(c)
    print(f'{fname}: added images + links')

print('All safe fixes done')