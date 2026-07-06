import os
path = os.path.join(r'C:\Users\31961\Documents\microsoft web\mifan-site\src\pages', 'Cart.tsx')
with open(path, 'rb') as f:
    c = f.read()

# Change "Remove" text to SVG X icon (Apple Bag style)
old_remove = b'<div onClick={() => cart.remove(x.slug)} style={{fontSize:12,color:"#6e6e73",cursor:"pointer",textDecoration:"underline"}}>Remove</div>'
new_remove = b'<div onClick={() => cart.remove(x.slug)} style={{cursor:"pointer",color:"#6e6e73",display:"flex",alignItems:"center",justifyContent:"center",width:28,height:28,borderRadius:"50%",transition:"all 0.2s"}} role="button" aria-label="Remove" tabIndex={0} onKeyDown={e=>e.key==="Enter"&&cart.remove(x.slug)}>\n              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#6e6e73" strokeWidth="1.2"><line x1="3" y1="3" x2="11" y2="11"/><line x1="11" y1="3" x2="3" y2="11"/></svg>\n            </div>'

c = c.replace(old_remove, new_remove)
with open(path, 'wb') as f:
    f.write(c)
print('Cart: X icon remove button added')