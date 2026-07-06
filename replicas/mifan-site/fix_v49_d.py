import os
path = os.path.join(r'C:\Users\31961\Documents\microsoft web\mifan-site\src\pages', 'Cart.tsx')
with open(path, 'rb') as f:
    c = f.read()
# Fix Apple Pay button - add back display:flex
old_ap = b'width:"100%",maxWidth:400,background:"#000",color:"#fff",padding:"12px 20px",borderRadius:980,textAlign:"center",fontSize:14,fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:8,letterSpacing:"0.3px",margin:"0 auto"'
new_ap = b'width:"100%",maxWidth:400,background:"#000",color:"#fff",padding:"12px 20px",borderRadius:980,textAlign:"center",fontSize:14,fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:8,letterSpacing:"0.3px",margin:"0 auto"'
if old_ap in c:
    print('AP button already has display:flex')
else:
    # Check what it currently is
    idx = c.find(b'width:"100%",maxWidth:400,background:"#000"')
    if idx > 0:
        snippet = c[idx:idx+200]
        print(f'Current AP button: {snippet}')