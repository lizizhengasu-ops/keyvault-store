import os
path = os.path.join(r'C:\Users\31961\Documents\microsoft web\mifan-site\src\pages', 'Cart.tsx')
with open(path, 'rb') as f:
    raw = f.read()

# Replace Qty display with +/- buttons using binary mode
old = b'Qty: {x.qty}</p>'
new = b'</p><div style={{display:"flex",alignItems:"center",gap:8,marginTop:4}}><div onClick={() => cart.updateQty(x.slug,-1)} style={{width:28,height:28,borderRadius:"50%",border:"1px solid #d2d2d7",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:15,userSelect:"none",lineHeight:1,color:"#6e6e73"}}>-</div><span style={{fontSize:14,fontWeight:600,minWidth:20,textAlign:"center",color:"#1d1d1f"}}>{x.qty}</span><div onClick={() => cart.updateQty(x.slug,1)} style={{width:28,height:28,borderRadius:"50%",border:"1px solid #0071e3",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:15,color:"#0071e3",userSelect:"none",lineHeight:1}}>+</div></div>'

if old in raw:
    raw = raw.replace(old, new)
    with open(path, 'wb') as f:
        f.write(raw)
    print('Cart: +/- buttons added')
else:
    print('WARNING: Old pattern not found!')
    # Find what's on that line
    lines = raw.split(b'\n')
    for i, line in enumerate(lines):
        if b'Qty' in line:
            print(f'  Line {i}: {line.decode("utf-8", errors="replace")[:80]}')