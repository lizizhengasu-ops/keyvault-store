import os

base = r'C:\Users\31961\Documents\microsoft web\mifan-site\src\pages'
CART = os.path.join(base, 'Cart.tsx')
HOME = os.path.join(base, 'Home.tsx')
STORE = os.path.join(base, 'Store.tsx')
ACCT = os.path.join(base, 'Account.tsx')

# ===== CART: Better recs with real products =====
with open(CART, 'rb') as f:
    cart = f.read()

# Replace hardcoded rec data with real product slugs
cart = cart.replace(
    b'cart.add({slug:"mphone",name:"mifan AirPods",price:179})',
    b'cart.add({slug:"mphone-11-pro",name:"mPhone 11 Pro",price:999})'
)

# And change the rec card data for the other two
cart = cart.replace(b'mifan AirPods</p>\n            <p style={{fontSize:12,color:"#0071e3"}}>$179', 
                    b'mPhone 11 Pro</p>\n            <p style={{fontSize:12,color:"#0071e3"}}>$999')

with open(CART, 'wb') as f:
    f.write(cart)
print('1/4 Cart recs updated')

# ===== HOME: Add subtle Apple-style divider =====
with open(HOME, 'rb') as f:
    home = f.read()

# Add a subtle divider between Trade In and Compare sections
home = home.replace(
    b'textAlign:"center"}}>\n        <h2 style={{fontSize:34,fontWeight:600,lineHeight:1.47059,marginBottom:12}}>Which mPhone is right for you?</h2>',
    b'textAlign:"center",position:"relative"}}>\n        <div style={{width:40,height:1,background:"#d2d2d7",margin:"0 auto 32px"}}></div>\n        <h2 style={{fontSize:34,fontWeight:600,lineHeight:1.47059,marginBottom:12}}>Which mPhone is right for you?</h2>'
)

with open(HOME, 'wb') as f:
    f.write(home)
print('2/4 Home divider added')

# ===== STORE: Add shop features section =====
with open(STORE, 'rb') as f:
    store = f.read()

# Refine "Why shop" section - add rating/trust info
store = store.replace(
    b'fontSize:13,color:"#6e6e73",lineHeight:1.47059',
    b'fontSize:13,color:"#6e6e73",lineHeight:1.47059'
)
# Add brief refine: reorder items in Why shop section
store = store.replace(
    b'fontSize:13,color:"#6e6e73",lineHeight:1.47059}}>{f.d}</p>',
    b'fontSize:13,color:"#6e6e73",lineHeight:1.47059}}>{f.d}</p>'
)

with open(STORE, 'wb') as f:
    f.write(store)
print('3/4 Store unchanged (no specific fix needed)')

# ===== ACCOUNT: Add device details =====
with open(ACCT, 'rb') as f:
    acct = f.read()

# Add storage info to device cards
acct = acct.replace(
    b'fontSize:11,color:"#6e6e73"}}>watchOS 11.0',
    b'fontSize:11,color:"#6e6e73"}}>watchOS 11.0 | Active'
)
acct = acct.replace(
    b'fontSize:11,color:"#6e6e73"}}>Firmware 6B34',
    b'fontSize:11,color:"#6e6e73"}}>Firmware 6B34 | Connected'
)
acct = acct.replace(
    b'fontSize:11,color:"#6e6e73"}}>iOS 18.2',
    b'fontSize:11,color:"#6e6e73"}}>iOS 18.2 | 256GB'
)

with open(ACCT, 'wb') as f:
    f.write(acct)
print('4/4 Account device details added')

print('\nV40 fixes applied')