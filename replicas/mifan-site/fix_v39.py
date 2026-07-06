import os, base64

base = r'C:\Users\31961\Documents\microsoft web\mifan-site\src\pages'
cart_path = os.path.join(base, 'Cart.tsx')
home_path = os.path.join(base, 'Home.tsx')
product_path = os.path.join(base, 'Product.tsx')
anim_path = r'C:\Users\31961\Documents\microsoft web\mifan-site\src\animations.tsx'

# ===== 1) CART - interactive recommendations with add to cart =====
with open(cart_path, 'rb') as f:
    cart = f.read()

# Replace rec section <a> tags with <div> that call cart.add()
# The recs section has href="/store" links - replace with add-to-cart divs
cart = cart.replace(
    b'href="/store" style={{flex:"0 0 150",cursor:"pointer",flexShrink:0,textDecoration:"none",color:"inherit"}}>',
    b'style={{flex:"0 0 150",cursor:"pointer",flexShrink:0}} onClick={() => cart.add({slug:"mphone",name:"mifan AirPods",price:179})} role="button" tabIndex={0}>'
)

with open(cart_path, 'wb') as f:
    f.write(cart)
print('1/3 Cart interactive recs')

# ===== 2) HOME - refinements toward 95% =====
with open(home_path, 'rb') as f:
    home = f.read()

# Add a subtle "Apple Card" style financing note at the end of FAQ
home = home.replace(
    b'borderBottom:"1px solid #d2d2d7"',
    b'borderBottom:"1px solid #d2d2d7"'
)

# Actually let me add trade-in/financing message after FAQ
faq_closing = b'<div style={{borderBottom:"1px solid #d2d2d7"}} />'
financing_note = b'<div style={{borderBottom:"1px solid #d2d2d7"}} />\n      <section style={{padding:"32px 20px",background:"#fff",textAlign:"center"}}>\n        <p style={{fontSize:14,color:"#6e6e73",marginBottom:4}}>Get $200-$650 for your current phone with trade-in. From $41.62/mo. at 0% APR.</p>\n        <p style={{fontSize:14,color:"#6e6e73"}}>Free delivery. No-contact shipping.</p>\n      </section>'
home = home.replace(faq_closing, financing_note)

with open(home_path, 'wb') as f:
    f.write(home)
print('2/3 Home refinements')

# ===== 3) PRODUCT page - page transition =====
# Already handled by main{animation:pageFadeIn} in CSS
# Add a "Buy now" callout at the bottom
with open(product_path, 'rb') as f:
    prod = f.read()

# Add buy callout at the very end (before closing of the component)
buy_callout = b'\n      <section style={{padding:"32px 20px",background:"#f5f5f7",textAlign:"center",borderTop:"1px solid #e6e6ea"}}>\n        <p style={{fontSize:15,fontWeight:600,color:"#1d1d1f",marginBottom:4}}>Buy now with 0% APR financing.</p>\n        <p style={{fontSize:14,color:"#6e6e73",marginBottom:12}}>Free delivery and no-contact setup available.</p>\n        <a className="btn-link" style={{fontSize:15}} href="/store">Shop all models</a>\n      </section>'

# Insert before the last </> - find component closing
closing = prod.rfind(b'</>\n')
if closing > 0:
    prod = prod[:closing] + buy_callout + prod[closing:]
    with open(product_path, 'wb') as f:
        f.write(prod)
    print('3/3 Product buy callout added')
else:
    print('3/3 closing not found')

print('\nV39 fixes applied')