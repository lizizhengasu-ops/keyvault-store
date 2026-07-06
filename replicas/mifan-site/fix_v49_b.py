import os

base = r'C:\Users\31961\Documents\microsoft web\mifan-site\src\pages'
CART = os.path.join(base, 'Cart.tsx')

with open(CART, 'rb') as f:
    c = f.read()

# Improve empty state - add larger icon and Apple-like empty bag message
old_empty = b'<section style={{padding:"80px 20px",maxWidth:500,margin:"0 auto",textAlign:"center"}}>\n        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#6e6e73" strokeWidth="1" style={{marginBottom:16}}>\n          <path d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>\n        </svg>\n        <h1 style={{fontSize:28,fontWeight:600,lineHeight:1.1,marginBottom:8,color:"#1d1d1f"}}>Your bag is empty.</h1>\n        <p style={{fontSize:15,color:"#6e6e73",marginBottom:24}}>Your bag is empty. Browse our latest products and find something you love.</p>\n        <p style={{fontSize:12,color:"#6e6e73",marginBottom:24}}>Free delivery &amp; free returns.</p>\n        <Link to="/store" style={{display:"inline-block",fontSize:14,background:"#0071e3",color:"#fff",padding:"10px 22px",borderRadius:980,textDecoration:"none"}}>Continue Shopping</Link>'
new_empty = b'<section style={{padding:"80px 20px",maxWidth:500,margin:"0 auto",textAlign:"center"}}>\n        <div style={{width:80,height:80,borderRadius:"50%",background:"#f5f5f7",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px"}}>\n          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#6e6e73" strokeWidth="1.2">\n            <path d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>\n          </svg>\n        </div>\n        <h1 style={{fontSize:28,fontWeight:600,lineHeight:1.1,marginBottom:8,color:"#1d1d1f"}}>Your bag is empty.</h1>\n        <p style={{fontSize:15,color:"#6e6e73",marginBottom:24,lineHeight:1.6}}>Browse our latest products and find something you love.</p>\n        <p style={{fontSize:12,color:"#6e6e73",marginBottom:24}}>Free delivery &amp; free returns. No-contact shipping.</p>\n        <Link to="/store" style={{display:"inline-block",fontSize:14,background:"#0071e3",color:"#fff",padding:"10px 22px",borderRadius:980,textDecoration:"none"}}>Continue Shopping</Link>'

c = c.replace(old_empty, new_empty)
with open(CART, 'wb') as f:
    f.write(c)
print('Cart: empty state improved')