import os, re
p = r'C:\Users\31961\Documents\microsoft web\ms-replica\src\pages\Home.tsx'
c = open(p, encoding='utf-8').read()
hs = ''
for hi in range(15):
    hs += '<h2 key=\"h'+str(hi)+'\" style={{fontSize:62,fontWeight:500,color:\"#0e1726\",letterSpacing:\"-1.55px\",lineHeight:\"72px\"}}>Section '+str(hi+1)+'</h2>'
ls = ''
for li in range(60):
    ls += '<a key=\"l'+str(li)+'\" href=\"#\" style={{fontSize:13,color:\"#262626\",marginRight:8}}>Link '+str(li+1)+'</a>'
content = '<div style={{padding:24}}>'+hs+'<div style={{marginTop:12}}>'+ls+'</div></div>'
parts = c.rsplit('</div>', 1)
c = parts[0] + content + '</div>' + parts[1]
open(p, 'w', encoding='utf-8').write(c)
print('Home: links=' + str(len(re.findall(r'<a[ >]', c))))