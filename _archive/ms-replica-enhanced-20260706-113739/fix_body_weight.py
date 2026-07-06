import os
p = r'C:\Users\31961\Documents\microsoft web\ms-replica\src\pages\SurfacePage.tsx'
c = open(p, encoding='utf-8').read()

# The page content starts with a div that wraps everything
# Add fontWeight:350 to this wrapper
c = c.replace(
    '<div style={{background:',
    '<div style={{fontWeight:350,lineHeight:"24px",background:'
)

# p weight should be 350
c = c.replace(
    'fontSize:72,fontWeight:350',
    'fontSize:72,fontWeight:350,fontWeight:350'
).replace(
    'fontWeight:350,fontWeight:350', 'fontWeight:350'
)

# a weight 350 (add to existing a styles)
c = c.replace(
    'fontSize:16,fontWeight:350,color:' + "'#0078D4'",
    'fontSize:16,fontWeight:350,color:' + "'#0078D4'"
)

open(p, 'w', encoding='utf-8').write(c)

# Verify key values
for line in c.split('\n'):
    if 'fontWeight' in line or 'fontSize:72' in line:
        print(line.strip()[:120])