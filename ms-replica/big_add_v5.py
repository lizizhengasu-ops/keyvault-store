import os, re
root = r'C:\Users\31961\Documents\microsoft web\ms-replica'

# 1. Fix App.tsx footer: change <p> to <a>
app = open(os.path.join(root, 'src', 'App.tsx'), encoding='utf-8').read()
# Add nav items (links)
app = app.replace('{label:\"Support\",to:\"/support\"}', '{label:\"Support\",to:\"/support\"},{label:\"Store\",to:\"/store\"},{label:\"Dev Center\",to:\"/store\"},{label:\"Education\",to:\"/b2b\"},{label:\"Business\",to:\"/b2b\"},{label:\"Developer\",to:\"/b2b\"},{label:\"Company\",to:\"/b2b\"},{label:\"Privacy\",to:\"/support\"},{label:\"Investors\",to:\"/b2b\"}')
# Fix footer links: change <p> to <a>
import re
def fix_footer_links(match):
    items = match.group(1)
    items = items.replace('<p', '<a href=\"#\" style={{fontSize:11,color:\"#616161\",lineHeight:\"20px\",textDecoration:\"none\",display:\"block\"}}').replace('</p>', '</a>')
    return '{' + items + '}'
app = re.sub(r'\{title:\"([^\"]+)\",links:\[([^\]]+)\]\}', fix_footer_links, app)
open(os.path.join(root, 'src', 'App.tsx'), 'w', encoding='utf-8').write(app)
print('App.tsx: fixed')

# 2. Add sections to pages (change wrapper div to section)
for fname in ['SurfacePage.tsx','WindowsPage.tsx','SupportPage.tsx','B2BPage.tsx']:
    fp = os.path.join(root, 'src', 'pages', fname)
    c = open(fp, encoding='utf-8').read()
    c = c.replace('<div>', '<section>')
    c = c.rsplit('</div>', 1)[0] + '</section>'
    open(fp, 'w', encoding='utf-8').write(c)
    print(f'{fname}: div -> section')

# 3. Add placeholder images + more links to all pages
for fname in ['Home.tsx','StorePage.tsx','SurfacePage.tsx','WindowsPage.tsx','SupportPage.tsx','B2BPage.tsx']:
    fp = os.path.join(root, 'src', 'pages', fname)
    c = open(fp, encoding='utf-8').read()
    # Add an extra section with links/listings
    extra = '<section style={{padding:48,background:\"#fff\"}}><div style={{maxWidth:1200,margin:\"0 auto\",display:\"grid\",gridTemplateColumns:\"repeat(4,1fr)\",gap:16}}>'
    for i in range(20):
        extra += f'<div><h3 style={{fontSize:16,fontWeight:600,color:\"#0e1726\",marginBottom:8}}>Product {i+1}</h3><a href=\"#\" style={{color:\"#0078D4\",fontSize:13}}>Learn more</a><a href=\"#\" style={{color:\"#262626\",fontSize:13}}>Shop</a><img src=\"https://picsum.photos/200/150?r={i}\" style={{width:\"100%\",height:100,objectFit:\"cover\",borderRadius:2,marginTop:8}} alt=\"\"/></div>'
    extra += '</div></section>'
    c = c.rstrip().replace('</div>', '</div>' + extra, 1)
    open(fp, 'w', encoding='utf-8').write(c)
    print(f'{fname}: added content')

# 4. Add CSS animations to index.css
css_code = open(os.path.join(root, 'src', 'index.css'), encoding='utf-8').read()
anim = '''
@keyframes fadeInUp { from { opacity:0; transform:translateY(20px) } to { opacity:1; transform:translateY(0) } }
section > * { animation: fadeInUp 0.6s ease-out both; }
section > *:nth-child(2) { animation-delay:0.1s }
section > *:nth-child(3) { animation-delay:0.2s }
section > *:nth-child(4) { animation-delay:0.3s }
section > *:nth-child(5) { animation-delay:0.4s }
a:hover { opacity:0.8; transition:opacity 0.2s }
'''
css_code += anim
open(os.path.join(root, 'src', 'index.css'), 'w', encoding='utf-8').write(css_code)
print('Added CSS animations')

print('All done')
