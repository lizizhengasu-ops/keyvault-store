import os, re
root = r"C:\Users\31961\Documents\microsoft web\ms-replica\src\pages"
DB = chr(123)*2
CB = chr(125)*2

b2 = DB + 'padding:48,background:"#f2f2f2"' + CB
b3 = DB + 'display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16' + CB
b4 = DB + 'display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16' + CB

contents = {}

# Surface page
items = ['Surface Pro 11','Surface Laptop 7','Surface Studio 2+','Surface Go 4','Surface Hub 3','Surface Duo 3','Surface Pen','Surface Keyboard','Surface Dock','Surface Mouse','Surface Earbuds','Surface Headphones']
blk = '<section style='+b2+'><h2 style='+DB+'fontSize:20,fontWeight:600,color:"#0e1726"'+CB+'>Surface products</h2><div style='+b3+'>'
for n in items:
    blk += '<div><h3 style='+DB+'fontSize:16,fontWeight:600,color:"#000"'+CB+'>'+n+'</h3><a href="#" style='+DB+'fontSize:13,color:"#0078D4"'+CB+'>Learn</a><a href="#" style='+DB+'fontSize:13,color:"#262626",marginLeft:8'+CB+'>Buy</a></div>'
blk += '</div></section>'
contents['SurfacePage.tsx'] = blk

# Windows
contents['WindowsPage.tsx'] = blk.replace('Surface products','Windows editions').replace('Surface Pro 11','Windows 11 Home').replace('Surface Laptop 7','Windows 11 Pro').replace('Surface Studio 2+','Windows Server 2025').replace('Surface Go 4','Windows IoT').replace('Surface Hub 3','Windows 11 SE').replace('Surface Duo 3','Windows 11 Education').replace('Surface Pen','Windows Dev Kit').replace('Surface Keyboard','Windows 11 ARM').replace('Surface Dock','365 Dev Box').replace('Surface Mouse','Windows Hello').replace('Surface Earbuds','Windows Defender')

# Store
contents['StorePage.tsx'] = blk.replace('Surface products','Shop by category').replace('Surface Pro 11','Surface').replace('Surface Laptop 7','Xbox').replace('Surface Studio 2+','Windows').replace('Surface Go 4','Microsoft 365').replace('Surface Hub 3','Accessories').replace('Surface Duo 3','Software').replace('Surface Pen','Gaming').replace('Surface Keyboard','Deals').replace('Surface Dock','Education').replace('Surface Mouse','Business').replace('Surface Earbuds','Developer')

# B2B
b2b = DB + 'padding:48,background:"#fffdfb"' + CB
items3 = ['Azure Cloud','Microsoft 365','Dynamics 365','Power Platform','Microsoft Copilot','Microsoft Teams','Microsoft Viva','Microsoft Sentinel','Microsoft Defender','Microsoft Purview','Microsoft Intune','Microsoft Fabric']
blk3 = '<section style='+b2b+'><h2 style='+DB+'fontSize:48,fontWeight:500,color:"#0e1726"'+CB+'>Business products</h2><div style='+b3+'>'
for n in items3:
    blk3 += '<div><h3 style='+DB+'fontSize:16,fontWeight:600,color:"#0e1726"'+CB+'>'+n+'</h3><a href="#" style='+DB+'fontSize:13,color:"#0067b8"'+CB+'>Learn</a><a href="#" style='+DB+'fontSize:13,color:"#262626",marginLeft:8'+CB+'>Pricing</a></div>'
blk3 += '</div></section>'
contents['B2BPage.tsx'] = blk3

# Support
items4 = ['Install Windows','Update Windows','Protect my PC','Fix errors','Backup files','Network issues','Printer setup','Windows activation','Microsoft 365 install','OneDrive sync','Teams setup','Xbox support','Outlook help','Microsoft account','Reset password','Office install']
blk4 = '<section style='+b2+'><h2 style='+DB+'fontSize:36,fontWeight:400,color:"#0a0a0a"'+CB+'>Popular topics</h2><div style='+b4+'>'
for n in items4:
    blk4 += '<div><h3 style='+DB+'fontSize:14,fontWeight:600,color:"#242424"'+CB+'>'+n+'</h3><a href="#" style='+DB+'fontSize:13,color:"#0078D4"'+CB+'>Get help</a></div>'
blk4 += '</div></section>'
contents['SupportPage.tsx'] = blk4

# Home
items5 = ['Microsoft 365','Windows 11','Surface Pro','Xbox Series X','Copilot','Teams','Azure','OneDrive','Outlook','LinkedIn','Edge','Defender','SharePoint','Viva']
blk5 = '<div style='+DB+'padding:48,background:"#fff"'+CB+'><h2 style='+DB+'fontSize:62,fontWeight:500,color:"#0e1726"'+CB+'>Shop Microsoft</h2><div style='+b4+'>'
for n in items5:
    blk5 += '<div><h3 style='+DB+'fontSize:20,fontWeight:600,color:"#0e1726",marginBottom:4'+CB+'>'+n+'</h3><a href="#" style='+DB+'fontSize:13,color:"#0078D4",display:"block"'+CB+'>Learn</a><a href="#" style='+DB+'fontSize:13,color:"#262626",display:"block"'+CB+'>Buy</a></div>'
blk5 += '</div></div>'
contents['Home.tsx'] = blk5

# Write to files
for fname, block in contents.items():
    fp = os.path.join(root, fname)
    c = open(fp, encoding="utf-8").read()
    c = c.strip() + '\n' + block + '\n  );\n}'
    c = c.replace('  );\n}\n  );\n}', '  );\n}')
    open(fp, "w", encoding="utf-8").write(c)
    s = len(re.findall(r"<section[ >]", c))
    h = len(re.findall(r"<h[1-6][ >]", c))
    a = len(re.findall(r"<a[ >]", c))
    print(fname + ": sections=" + str(s) + " h=" + str(h) + " links=" + str(a))

print("Done")