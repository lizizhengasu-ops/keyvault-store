import os
path = os.path.join(r'C:\Users\31961\Documents\microsoft web\mifan-site\src\pages', 'Cart.tsx')
with open(path, 'rb') as f:
    c = f.read()
# Make Check Out button full width and Apple-like
c = c.replace(b'display:"inline-block",fontSize:17,background:"#0071e3",color:"#fff",padding:"12px 30px",borderRadius:980,cursor:"pointer",marginTop:20,letterSpacing:"0.216px",fontWeight:600',
             b'display:"block",width:"100%",maxWidth:400,fontSize:17,background:"#0071e3",color:"#fff",padding:"12px 30px",borderRadius:980,cursor:"pointer",marginTop:20,letterSpacing:"0.216px",fontWeight:600,margin:"20px auto 0"')
# Also make Apple Pay full width
c = c.replace(b'flex:1,background:"#000",color:"#fff",padding:"12px 20px",borderRadius:980,textAlign:"center",fontSize:14,fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:8,letterSpacing:"0.3px"',
             b'width:"100%",maxWidth:400,background:"#000",color:"#fff",padding:"12px 20px",borderRadius:980,textAlign:"center",fontSize:14,fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:8,letterSpacing:"0.3px",margin:"0 auto"')
with open(path, 'wb') as f:
    f.write(c)
print('Cart: checkout buttons improved')