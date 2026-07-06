path = r'C:\Users\31961\Documents\microsoft web\mifan-site\src\pages\B2b.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix: Replace the problematic <p> lines with JSX expressions
old1 = '<p style={{fontSize:14,color:"#6e6e73",fontStyle:"italic",marginBottom:12,lineHeight:1.6}}\u201cSwitching to mifan saved us 40% on IT management costs. The MDM integration was seamless.\u201d</p>'
new1 = '<p style={{fontSize:14,color:"#6e6e73",fontStyle:"italic",marginBottom:12,lineHeight:1.6}}>{"Switching to mifan saved us 40% on IT management costs. The MDM integration was seamless."}</p>'
content = content.replace(old1, new1)

old2 = '<p style={{fontSize:14,color:"#6e6e73",fontStyle:"italic",marginBottom:12,lineHeight:1.6}}\u201cThe volume pricing and dedicated support made mifan the obvious choice for our 5000+ employee rollout.\u201d</p>'
new2 = '<p style={{fontSize:14,color:"#6e6e73",fontStyle:"italic",marginBottom:12,lineHeight:1.6}}>{"The volume pricing and dedicated support made mifan the obvious choice for our 5000+ employee rollout."}</p>'
content = content.replace(old2, new2)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print('Fixed B2b.tsx')