import os

base = r'C:\Users\31961\Documents\microsoft web\mifan-site\src\pages'
B2B = os.path.join(base, 'B2b.tsx')
CART = os.path.join(base, 'Cart.tsx')

# B2B client logos
with open(B2B, 'rb') as f:
    b = f.read()

logo_section = b'\n      <section style={{padding:"48px 20px",background:"#fff",textAlign:"center"}}>\n        <p style={{fontSize:13,fontWeight:600,color:"#6e6e73",marginBottom:20,textTransform:"uppercase",letterSpacing:".05em"}}>Trusted by</p>\n        <div style={{display:"flex",justifyContent:"center",gap:32,flexWrap:"wrap",opacity:0.5}}>\n          <span style={{fontSize:18,fontWeight:600,color:"#1d1d1f"}}>TechCorp</span>\n          <span style={{fontSize:18,fontWeight:600,color:"#1d1d1f"}}>FinServe</span>\n          <span style={{fontSize:18,fontWeight:600,color:"#1d1d1f"}}>DataFlow</span>\n          <span style={{fontSize:18,fontWeight:600,color:"#1d1d1f"}}>CloudNine</span>\n          <span style={{fontSize:18,fontWeight:600,color:"#1d1d1f"}}>Aegis</span>\n        </div>\n      </section>\n\n'

marker = b'Enterprise Ecosystem'
if marker in b:
    idx = b.find(marker)
    prev_sec = b.rfind(b'<section', 0, idx)
    if prev_sec > 0:
        b = b[:prev_sec] + logo_section + b[prev_sec:]
        with open(B2B, 'wb') as f:
            f.write(b)
        print('B2B logos added')
    else:
        print('section not found')
else:
    print('marker not found')

# Cart improvements
with open(CART, 'rb') as f:
    c = f.read()
c = c.replace(b'<svg width="32" height="20" viewBox="0 0 80 24" fill="#fff"><text x="0" y="18" font',
             b'<span style={{fontSize:14,fontWeight:600}}>Apple&nbsp;Pay</span>')
with open(CART, 'wb') as f:
    f.write(c)
print('Cart Apple Pay improved')

print('Done')