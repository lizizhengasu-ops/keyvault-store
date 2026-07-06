import os

base = r'C:\Users\31961\Documents\microsoft web\mifan-site\src\pages'
B2B = os.path.join(base, 'B2b.tsx')
CART = os.path.join(base, 'Cart.tsx')

# ===== B2B: Add client logo bar =====
with open(B2B, 'rb') as f:
    b = f.read()

logo_section = b'''
      <section style={{padding:"48px 20px",background:"#fff",textAlign:"center"}}>
        <p style={{fontSize:13,fontWeight:600,color:"#6e6e73",marginBottom:20,textTransform:"uppercase",letterSpacing:".05em"}}>Trusted by</p>
        <div style={{display:"flex",justifyContent:"center",gap:32,flexWrap:"wrap",opacity:0.5}}>
          <span style={{fontSize:18,fontWeight:600,color:"#1d1d1f"}}>TechCorp</span>
          <span style={{fontSize:18,fontWeight:600,color:"#1d1d1f"}}>FinServe</span>
          <span style={{fontSize:18,fontWeight:600,color:"#1d1d1f"}}>DataFlow</span>
          <span style={{fontSize:18,fontWeight:600,color:"#1d1d1f"}}>CloudNine</span>
          <span style={{fontSize:18,fontWeight:600,color:"#1d1d1f"}}>Aegis</span>
        </div>
      </section>

'''

# Insert before the stats section
stats_marker = b'Enterprise Ecosystem'
if stats_marker in b2b:
    idx = b.find(stats_marker)
    prev_sec = b.rfind(b'<section', 0, idx)
    if prev_sec > 0:
        b = b[:prev_sec] + logo_section + b[prev_sec:]
        with open(B2B, 'wb') as f:
            f.write(b)
        print('B2B: client logos added')
    else:
        print('B2B: couldn''t find insertion point')
else:
    print('B2B: marker not found')

# ===== CART: Improve checkout layout =====
with open(CART, 'rb') as f:
    c = f.read()

# Add "Your Bag" heading styling improvement 
# Already has it. Add a subtle header.

# Increase the Apple Pay button prominence
# Find the Apple Pay button and increase its visual weight
old_ap = b'<svg width="32" height="20" viewBox="0 0 80 24" fill="#fff"><text x="0" y="18" font'
new_ap = b'<span style={{fontSize:14,fontWeight:600}}>Apple Pay</span>'
c = c.replace(old_ap, new_ap)

with open(CART, 'wb') as f:
    f.write(c)
print('Cart: Apple Pay text improved')

print('\nV48 enhancements done')