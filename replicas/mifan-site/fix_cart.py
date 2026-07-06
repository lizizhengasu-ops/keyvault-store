with open("src/pages/Cart.tsx","r",encoding="utf-8") as f:
    c = f.read()
# Fix H1 typography
c = c.replace('fontSize:34,fontWeight:600,lineHeight:1.47059,marginBottom:8,color:"#1d1d1f"','fontSize:34,fontWeight:600,lineHeight:1.47059,marginBottom:8,color:"#1d1d1f"')
c = c.replace('fontSize:17,background:"#0071e3",color:"#fff",padding:"12px 22px",borderRadius:980,cursor:"pointer",marginTop:20,letterSpacing:"0.216px",fontWeight:600',
    'fontSize:17,background:"#0071e3",color:"#fff",padding:"12px 30px",borderRadius:980,cursor:"pointer",marginTop:20,letterSpacing:"0.216px",fontWeight:600,boxShadow:"0 4px 20px rgba(0,113,227,0.3)"')
with open("src/pages/Cart.tsx","w",encoding="utf-8") as f:
    f.write(c)
print("Cart.tsx - updated")