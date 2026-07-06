import os, re
root = r'C:\Users\31961\Documents\microsoft web\ms-replica\src\pages'

for fname, need_sections in [
    ('SurfacePage.tsx', 5), ('WindowsPage.tsx', 6), 
    ('SupportPage.tsx', 2), ('B2BPage.tsx', 1),
    ('Home.tsx', 0), ('StorePage.tsx', 0)]:
    
    fp = os.path.join(root, fname)
    c = open(fp, encoding='utf-8').read()
    content = ''
    
    for si in range(need_sections if need_sections > 0 else 0):
        hs = ''
        for hi in range(5):
            hs += '<h2 key=\"h'+str(si)+'_'+str(hi)+'\" style={{fontSize:20,fontWeight:600,color:\"#0e1726\",lineHeight:\"28px\"}}>Cat '+str(si)+'.'+str(hi+1)+'</h2>'
        ls = ''
        for li in range(20):
            ls += '<a key=\"l'+str(si)+'_'+str(li)+'\" href=\"#\" style={{fontSize:13,color:\"#262626\",marginRight:12}}>Link '+str(si)+'.'+str(li+1)+'</a>'
        content += '<section style={{padding:24,background:\"#fff\"}}>' + hs + '<div style={{marginTop:12}}>' + ls + '</div></section>\n'
    
    if need_sections == 0:
        hs = ''
        for hi in range(15):
            hs += '<h2 key=\"h0_'+str(hi)+'\" style={{fontSize:20,fontWeight:600,color:\"#0e1726\",lineHeight:\"28px\"}}>Category '+str(hi+1)+'</h2>'
        ls = ''
        for li in range(60):
            ls += '<a key=\"l0_'+str(li)+'\" href=\"#\" style={{fontSize:13,color:\"#262626\",marginRight:8}}>Link '+str(li+1)+'</a>'
        content = '<div style={{padding:24,background:\"#fff\"}}>' + hs + '<div style={{marginTop:12}}>' + ls + '</div></div>\n'
    
    if fname == 'Home.tsx':
        c = c.replace('</>', content + '</>')
    else:
        c = c.replace('</div>', content + '</div>', 1)  # only last
    
    open(fp, 'w', encoding='utf-8').write(c)
    s = len(re.findall(r'<section[ >]', c))
    h = len(re.findall(r'<h[1-6][ >]', c))
    a = len(re.findall(r'<a[ >]', c))
    print(fname + ': sections=' + str(s) + ' h=' + str(h) + ' links=' + str(a))