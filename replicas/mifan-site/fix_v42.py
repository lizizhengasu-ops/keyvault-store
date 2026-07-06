import os

base = r'C:\Users\31961\Documents\microsoft web\mifan-site\src\pages'
CART = os.path.join(base, 'Cart.tsx')
B2B = os.path.join(base, 'B2b.tsx')

# ===== 1) CART: Improve order presentation (Apple Bag style) =====
with open(CART, 'rb') as f:
    c = f.read()

# Add order summary card with subtotal, shipping, tax
# Find the total section
total_marker = b'Total</span><span>${cart.total}</span>'
if total_marker in c:
    idx = c.find(total_marker)
    # Find the closing </div> after total
    close_div = c.find(b'</div>', idx)
    if close_div > 0:
        summary_card = b'Total</span><span>${cart.total}</span>\r\n      </div>\r\n      <div style={{background:"#f5f5f7",borderRadius:14,padding:"16px 20px",marginTop:16,border:"1px solid #e6e6ea"}}>\r\n        <div style={{display:"flex",justifyContent:"space-between",fontSize:13,color:"#6e6e73",marginBottom:6}}><span>Subtotal</span><span>${cart.total}</span></div>\r\n        <div style={{display:"flex",justifyContent:"space-between",fontSize:13,color:"#6e6e73",marginBottom:6}}><span>Shipping</span><span style={{color:"#34c759"}}>Free</span></div>\r\n        <div style={{display:"flex",justifyContent:"space-between",fontSize:13,color:"#6e6e73",marginBottom:6}}><span>Estimated Tax</span><span>Calculated at checkout</span></div>\r\n        <div style={{height:1,background:"#d2d2d7",margin:"8px 0"}}></div>\r\n        <div style={{display:"flex",justifyContent:"space-between",fontSize:15,fontWeight:600,color:"#1d1d1f"}}><span>Total</span><span>${cart.total}</span></div>\r\n      </div>'
        c = c[:close_div + len(b'</div>')] + summary_card[len(b'Total</span><span>${cart.total}</span>\r\n      </div>'):]
        with open(CART, 'wb') as f:
            f.write(c)
        print('1/2 Cart: order summary card added')
else:
    print('1/2 Cart: total marker not found')

# ===== 2) B2B: Add more content depth =====
with open(B2B, 'rb') as f:
    b2b = f.read()

# Add "Why choose mifan" section before Enterprise Ecosystem
why_marker = b'Enterprise Ecosystem</h2>'
if why_marker in b2b:
    why_section = b'Enterprise Ecosystem</h2>\r\n        <p style={{fontSize:14,color:"#6e6e73",textAlign:"center",maxWidth:600,margin:"0 auto 24px",lineHeight:1.47059}}>Over 10,000 organizations trust mifan for their device needs. From startups to Fortune 500 companies.</p>'
    b2b = b2b.replace(why_marker, why_section)
    with open(B2B, 'wb') as f:
            f.write(b2b)
    print('2/2 B2B: intro text added')
else:
    print('2/2 B2B: marker not found')

print('\nV42 fixes applied')