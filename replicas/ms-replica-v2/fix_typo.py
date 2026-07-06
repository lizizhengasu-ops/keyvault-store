import os
p = r'C:\Users\31961\Documents\microsoft web\ms-replica\src\pages\SurfacePage.tsx'
c = open(p, encoding='utf-8').read()

# Fix hero p: 16px -> 72px, weight 350
c = c.replace('fontSize:16,color:'+"'#fff'"+',maxWidth:500,lineHeight:1.6', 'fontSize:72,fontWeight:350,lineHeight:'+"'72px'"+',color:'+"'#fff'"+',maxWidth:500')

# Fix h2 generated: 20px -> 13px, weight 600 -> 350
c = c.replace('fontSize:20,fontWeight:600,color:'+"'#0e1726'"+',lineHeight:'+"'28px'", 'fontSize:13,fontWeight:350,color:'+"'#0e1726'"+',lineHeight:'+"'19.5px'")

# Fix a generated: 13px -> 16px
c = c.replace('fontSize:13,color:'+"'#262626'", 'fontSize:16,fontWeight:350,color:'+"'#262626'")

# Fix link: 13px -> 16px
c = c.replace('fontSize:13,color:'+"'#0078D4'", 'fontSize:16,fontWeight:350,color:'+"'#0078D4'")

open(p, 'w', encoding='utf-8').write(c)
print('Fixed typography')