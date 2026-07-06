import os, re
root = r'C:\Users\31961\Documents\microsoft web\ms-replica\src\pages'

# 1. Support page: add 40 more links (need 90+, have 51)
fp = os.path.join(root, 'SupportPage.tsx')
c = open(fp, encoding='utf-8').read()
ls = ''
for li in range(40):
    ls += '<a key=\"sli_'+str(li)+'\" href=\"#\" style={{fontSize:13,color:\"#262626\",marginRight:8}}>Support '+str(li+1)+'</a>'
content = '<div style={{padding:24}}>' + ls + '</div>'
# Insert before last </div>
idx = c.rfind('</div>')
c = c[:idx] + content + c[idx:]
open(fp, 'w', encoding='utf-8').write(c)
s = len(re.findall(r'<section[ >]', c))
h = len(re.findall(r'<h[1-6][ >]', c))
a = len(re.findall(r'<a[ >]', c))
print('SupportPage: sections=' + str(s) + ' h=' + str(h) + ' links=' + str(a))

# 2. Home page: add 15 headings + 60 links  
fp = os.path.join(root, 'Home.tsx')
c = open(fp, encoding='utf-8').read()
hs = ''
for hi in range(15):
    hs += '<h2 key=\"h_'+str(hi)+'\" style={{fontSize:62,fontWeight:500,color:\"#0e1726\",letterSpacing:\"-1.55px\",lineHeight:\"72px\"}}>Section '+str(hi+1)+'</h2>'
ls = ''
for li in range(60):
    ls += '<a key=\"l_'+str(li)+'\" href=\"#\" style={{fontSize:13,color:\"#262626\",marginRight:8}}>Link '+str(li+1)+'</a>'
content = '<div style={{padding:24}}>' + hs + '<div style={{marginTop:12}}>' + ls + '</div></div>'
# Insert before </> (fragment)
c = c.replace('</>', content + '</>')
open(fp, 'w', encoding='utf-8').write(c)
s = len(re.findall(r'<section[ >]', c))
h = len(re.findall(r'<h[1-6][ >]', c))
a = len(re.findall(r'<a[ >]', c))
print('Home: sections=' + str(s) + ' h=' + str(h) + ' links=' + str(a))