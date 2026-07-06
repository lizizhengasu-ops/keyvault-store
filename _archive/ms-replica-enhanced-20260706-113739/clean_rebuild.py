import os
root = r'C:\Users\31961\Documents\microsoft web\ms-replica\src\pages'

# Home page - add real MS product sections
home_add = '''
<section style={{padding:48,background:"#fff"}}>
<h2 style={{fontSize:62,fontWeight:500,color:"#0e1726",letterSpacing:"-1.55px",lineHeight:"72px",marginBottom:24}}>Featured products</h2>
<div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>
<div><h3 style={{fontSize:20,fontWeight:600,color:"#0e1726"}}>Surface Pro</h3><p style={{fontSize:14,color:"#616161"}}>Ultimate laptop versatility</p><a href="#" style={{fontSize:13,color:"#0078D4"}}>Learn more</a><a href="#" style={{fontSize:13,color:"#262626",marginLeft:12}}>Buy</a></div>
<div><h3 style={{fontSize:20,fontWeight:600,color:"#0e1726"}}>Windows 11</h3><p style={{fontSize:14,color:"#616161"}}>The most secure Windows</p><a href="#" style={{fontSize:13,color:"#0078D4"}}>Learn more</a><a href="#" style={{fontSize:13,color:"#262626",marginLeft:12}}>Buy</a></div>
<div><h3 style={{fontSize:20,fontWeight:600,color:"#0e1726"}}>Xbox Series X</h3><p style={{fontSize:14,color:"#616161"}}>Fastest Xbox ever</p><a href="#" style={{fontSize:13,color:"#0078D4"}}>Learn more</a><a href="#" style={{fontSize:13,color:"#262626",marginLeft:12}}>Buy</a></div>
<div><h3 style={{fontSize:20,fontWeight:600,color:"#0e1726"}}>Microsoft 365</h3><p style={{fontSize:14,color:"#616161"}}>Office + cloud storage</p><a href="#" style={{fontSize:13,color:"#0078D4"}}>Learn more</a><a href="#" style={{fontSize:13,color:"#262626",marginLeft:12}}>Buy</a></div>
</div>
</section>
'''

# Store page - add real product categories
store_add = '''
<section style={{padding:48,background:"#f2f2f2"}}>
<h2 style={{fontSize:34,fontWeight:100,color:"#000",marginBottom:24}}>Shop categories</h2>
<div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
<div><h3 style={{fontSize:20,fontWeight:600,color:"#0e1726"}}>Computers</h3><a href="#" style={{fontSize:13,color:"#0078D4",display:"block"}}>Surface laptops</a><a href="#" style={{fontSize:13,color:"#0078D4",display:"block"}}>Surface Pro</a><a href="#" style={{fontSize:13,color:"#0078D4",display:"block"}}>Surface Studio</a><a href="#" style={{fontSize:13,color:"#0078D4",display:"block"}}>Accessories</a></div>
<div><h3 style={{fontSize:20,fontWeight:600,color:"#0e1726"}}>Software</h3><a href="#" style={{fontSize:13,color:"#0078D4",display:"block"}}>Windows 11</a><a href="#" style={{fontSize:13,color:"#0078D4",display:"block"}}>Microsoft 365</a><a href="#" style={{fontSize:13,color:"#0078D4",display:"block"}}>Visual Studio</a><a href="#" style={{fontSize:13,color:"#0078D4",display:"block"}}>Office apps</a></div>
<div><h3 style={{fontSize:20,fontWeight:600,color:"#0e1726"}}>Gaming</h3><a href="#" style={{fontSize:13,color:"#0078D4",display:"block"}}>Xbox consoles</a><a href="#" style={{fontSize:13,color:"#0078D4",display:"block"}}>Xbox Game Pass</a><a href="#" style={{fontSize:13,color:"#0078D4",display:"block"}}>Xbox controllers</a><a href="#" style={{fontSize:13,color:"#0078D4",display:"block"}}>Xbox games</a></div>
</div>
</section>
'''

# Surface page - add real Surface product family
surface_add = '''
<section style={{padding:48,background:"#fff"}}>
<h2 style={{fontSize:20,fontWeight:600,color:"#0e1726",marginBottom:24}}>Surface family</h2>
<div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
<div><h3 style={{fontSize:16,fontWeight:600,color:"#000"}}>Surface Pro 11</h3><p style={{fontSize:13,color:"#616161"}}>Snapdragon X Elite processor</p><a href="#" style={{fontSize:13,color:"#0078D4"}}>Learn more</a><a href="#" style={{fontSize:13,color:"#262626",marginLeft:12}}>Buy</a></div>
<div><h3 style={{fontSize:16,fontWeight:600,color:"#000"}}>Surface Laptop 7</h3><p style={{fontSize:13,color:"#616161"}}>Copilot+ PC with Snapdragon</p><a href="#" style={{fontSize:13,color:"#0078D4"}}>Learn more</a><a href="#" style={{fontSize:13,color:"#262626",marginLeft:12}}>Buy</a></div>
<div><h3 style={{fontSize:16,fontWeight:600,color:"#000"}}>Surface Studio 2+</h3><p style={{fontSize:13,color:"#616161"}}>Professional-grade display</p><a href="#" style={{fontSize:13,color:"#0078D4"}}>Learn more</a><a href="#" style={{fontSize:13,color:"#262626",marginLeft:12}}>Buy</a></div>
</div>
</section>
<section style={{padding:48,background:"#f2f2f2"}}>
<h2 style={{fontSize:20,fontWeight:600,color:"#0e1726",marginBottom:24}}>Surface accessories</h2>
<div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>
<div><h3 style={{fontSize:14,fontWeight:600,color:"#000"}}>Surface Pen</h3><a href="#" style={{fontSize:13,color:"#0078D4"}}>Shop</a></div>
<div><h3 style={{fontSize:14,fontWeight:600,color:"#000"}}>Surface Keyboard</h3><a href="#" style={{fontSize:13,color:"#0078D4"}}>Shop</a></div>
<div><h3 style={{fontSize:14,fontWeight:600,color:"#000"}}>Surface Dock</h3><a href="#" style={{fontSize:13,color:"#0078D4"}}>Shop</a></div>
<div><h3 style={{fontSize:14,fontWeight:600,color:"#000"}}>Surface Mouse</h3><a href="#" style={{fontSize:13,color:"#0078D4"}}>Shop</a></div>
</div>
</section>
'''

# Add content to each page
additions = {
    'Home.tsx': home_add,
    'StorePage.tsx': store_add,
    'SurfacePage.tsx': surface_add,
    'WindowsPage.tsx': surface_add.replace('Surface family', 'Windows editions').replace('Surface Pro 11','Windows 11 Home').replace('Snapdragon X Elite processor','Best for home use').replace('Surface Laptop 7','Windows 11 Pro').replace('Copilot+ PC with Snapdragon','Best for business').replace('Surface Studio 2+','Windows 11 Enterprise').replace('Professional-grade display','Best for organizations'),
    'SupportPage.tsx': '<section style={{padding:48,background:"#f2f2f2"}}><h2 style={{fontSize:36,fontWeight:400,color:"#0a0a0a",marginBottom:24}}>Support topics</h2><div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12}}>'+''.join([f'<div><h3 style={{fontSize:14,fontWeight:600,color:"#242424"}}>{t}</h3><a href="#" style={{fontSize:13,color:"#0078D4"}}>Get help</a></div>' for t in ['Windows 11','Microsoft 365','Xbox','Surface','Teams','Outlook','OneDrive','Security']])+'</div></section>',
    'B2BPage.tsx': '<section style={{padding:48,background:"#fffdfb"}}><h2 style={{fontSize:48,fontWeight:500,color:"#0e1726",marginBottom:24}}>Business solutions</h2><div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>'+''.join([f'<div><h3 style={{fontSize:16,fontWeight:600,color:"#0e1726"}}>{s}</h3><p style={{fontSize:13,color:"#616161"}}>{d}</p><a href="#" style={{fontSize:13,color:"#0067b8"}}>Learn more</a></div>' for s,d in [('Azure Cloud','Cloud computing platform'),('Microsoft 365','Productivity cloud'),('Dynamics 365','Business applications'),('Power Platform','Low-code platform'),('Microsoft Copilot','AI assistant'),('Microsoft Teams','Hybrid collaboration')]])+'</div></section>',
}

for fname, content in additions.items():
    fp = os.path.join(root, fname)
    c = open(fp, encoding='utf-8').read()
    # Add content at the end of the component
    if fname == 'Home.tsx':
        c = c.replace('</>', content + '</>')
    else:
        parts = c.rsplit('</div>', 1)
        c = parts[0] + content + '</div>' + parts[1]
    open(fp, 'w', encoding='utf-8').write(c)
    
    import re
    s = len(re.findall(r'<section[ >]', c))
    h = len(re.findall(r'<h[1-6][ >]', c))
    a = len(re.findall(r'<a[ >]', c))
    print(f'{fname}: sections={s} h={h} links={a}')

print('Clean rebuild done')