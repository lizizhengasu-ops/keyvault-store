import os

BASE = r'C:\Users\31961\Documents\microsoft web\mifan-site\src'
CTX = os.path.join(BASE, 'CartContext.tsx')
CART = os.path.join(BASE, 'pages', 'Cart.tsx')
STORE = os.path.join(BASE, 'pages', 'Store.tsx')
HOME = os.path.join(BASE, 'pages', 'Home.tsx')

def write(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

# ===== 1) CART CONTEXT - add updateQty =====
ctx = open(CTX, 'r', encoding='utf-8').read()

# Add updateQty to type
ctx = ctx.replace(
    'type Ctx = { items: Item[]; add: (i:Omit<Item,\\'qty\\'>)=>void; remove: (s:string)=>void; total: number; count: number; toast: string }',
    'type Ctx = { items: Item[]; add: (i:Omit<Item,\\'qty\\'>)=>void; remove: (s:string)=>void; updateQty: (slug:string, delta:number)=>void; total: number; count: number; toast: string }'
)

# Add updateQty function body
ctx = ctx.replace(
    'const remove = (slug:string) => set(p => p.filter(x=>x.slug!==slug));',
    'const remove = (slug:string) => set(p => p.filter(x=>x.slug!==slug));\n  const updateQty = (slug:string, delta:number) => set(p => p.map(x=>x.slug===slug?{...x,qty:Math.max(0,x.qty+delta)}:x).filter(x=>x.qty>0));'
)

# Add updateQty to provider
ctx = ctx.replace(
    'items,add,remove,total,count,toast',
    'items,add,remove,updateQty,total,count,toast'
)

write(CTX, ctx)
print(f'1/4 CartContext: {len(ctx)} chars')

# ===== 2) CART PAGE - +/- buttons =====
cart = open(CART, 'r', encoding='utf-8').read()

# Replace static Qty display with +/- controls
old_qty = '<p style={{fontSize:12,color:"#6e6e73",marginTop:2}}>Qty: {x.qty}</p>'
new_qty = '<div style={{display:"flex",alignItems:"center",gap:8,marginTop:4}}>\n              <div onClick={() => cart.updateQty(x.slug,-1)} style={{width:28,height:28,borderRadius:"50%",border:"1px solid #d2d2d7",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:15,userSelect:"none",lineHeight:1,color:"#6e6e73"}}>-</div>\n              <span style={{fontSize:14,fontWeight:600,minWidth:20,textAlign:"center",color:"#1d1d1f"}}>{x.qty}</span>\n              <div onClick={() => cart.updateQty(x.slug,1)} style={{width:28,height:28,borderRadius:"50%",border:"1px solid #0071e3",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:15,color:"#0071e3",userSelect:"none",lineHeight:1}}>+</div>\n            </div>'
cart = cart.replace(old_qty, new_qty)

write(CART, cart)
print(f'2/4 Cart: {len(cart)} chars')

# ===== 3) STORE - add product carousel =====
store = open(STORE, 'r', encoding='utf-8').read()

carousel = '''
      <section className="section-in" style={{padding:"0 20px 40px",maxWidth:1068,margin:"0 auto"}}>
        <h2 style={{fontSize:24,fontWeight:600,color:"#1d1d1f",marginBottom:16,lineHeight:1.16667}}>Featured products</h2>
        <div style={{display:"flex",gap:16,overflowX:"auto",paddingBottom:12,scrollSnapType:"x mandatory"}}>
          {items.slice(0,3).map((x,i) => (
            <Link key={i} to={"/product/"+x.s} className="card-hover" style={{flex:"0 0 260",background:"#f5f5f7",borderRadius:18,overflow:"hidden",textDecoration:"none",color:"inherit",border:"1px solid #e6e6ea",flexShrink:0,scrollSnapAlign:"start"}}>
              <div style={{padding:24,textAlign:"center",minHeight:160,display:"flex",alignItems:"center",justifyContent:"center",background:"#f5f5f7"}}>
                <img src={"/products/"+x.s+".jpg"} alt={x.n} style={{width:100,height:120,objectFit:"contain"}} />
              </div>
              <div style={{padding:"16px 16px",background:"#fff"}}>
                <p style={{fontSize:12,color:"#0071e3",fontWeight:600,textTransform:"uppercase",letterSpacing:".05em",marginBottom:2}}>{x.badge||"Available"}</p>
                <h3 style={{fontSize:17,fontWeight:600,color:"#1d1d1f",marginBottom:2}}>{x.n}</h3>
                <p style={{fontSize:14,color:"#1d1d1f"}}>From ${x.p}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
'''

# Insert carousel after "The latest" section
latest_end = store.find('</section>', store.find('The latest'))
if latest_end > 0:
    store = store[:latest_end+len('</section>')] + carousel + store[latest_end+len('</section>'):]

write(STORE, store)
print(f'3/4 Store: {len(store)} chars')

# ===== 4) HOME - small refinements toward 95% =====
home = open(HOME, 'r', encoding='utf-8').read()

# Add "Say hello to" tagline above hero
home = home.replace(
    '<h2 className="hero-title" style={{fontSize:48,fontWeight:700,color:"#1d1d1f",lineHeight:1.08365,letterSpacing:"-0.003em",marginBottom:8}}>mPhone 11 Pro</h2>',
    '<h2 className="hero-title" style={{fontSize:48,fontWeight:700,color:"#1d1d1f",lineHeight:1.08365,letterSpacing:"-0.003em",marginBottom:8}}>mPhone 11 Pro</h2>'
)

# Add "New" badge above hero
home = home.replace(
    'style={{fontSize:48,fontWeight:700,color:"#1d1d1f"',
    'style={{fontSize:48,fontWeight:700,color:"#1d1d1f"'
)
# Actually let me add a "New" preamble line
home = home.replace(
    '<h2 className="hero-title"',
    '<p style={{fontSize:12,color:"#0071e3",fontWeight:600,textTransform:"uppercase",letterSpacing:".05em",marginBottom:4}}>New</p>\n              <h2 className="hero-title"'
)

write(HOME, home)
print(f'4/4 Home: {len(home)} chars')

print('\nV37 all fixes applied')