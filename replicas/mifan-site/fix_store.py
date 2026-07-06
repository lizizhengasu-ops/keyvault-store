with open('src/pages/Store.tsx', 'r', encoding='utf-8') as f:
    c = f.read()

# Make Store page more Apple-like with proper Store layout and product image cards
old = """        <p style={{fontSize:17,color:"#6e6e73",lineHeight:1.47059,marginBottom:40}}>The best way to buy the products you love.</p>"""
new = """        <p className="feature-lg" style={{color:"#6e6e73"}}>The best way to buy the products you love.</p>"""
c = c.replace(old, new)

# Replace the store product list items to show phone images
old = """          <Link key={i} to={"/product/"+x.s} className="card-hover" style={{display:"grid",gridTemplateColumns:"1fr 2fr",gap:24,marginBottom:16,background:"#f5f5f7",borderRadius:18,overflow:"hidden",textDecoration:"none",color:"inherit",boxShadow:"0 2px 12px rgba(0,0,0,0.06)"}}>"""
new = """          <Link key={i} to={"/product/"+x.s} className="card-hover" style={{display:"grid",gridTemplateColumns:"120px 1fr",gap:0,marginBottom:16,background:"#f5f5f7",borderRadius:18,overflow:"hidden",textDecoration:"none",color:"inherit",boxShadow:"0 2px 12px rgba(0,0,0,0.06)"}}>
            <div style={{background:"#f5f5f7",display:"flex",alignItems:"center",justifyContent:"center",padding:12}}>
              <img src={"/products/"+x.s+".jpg"} alt={x.n} style={{width:80,height:80,objectFit:"contain",borderRadius:8}} />
            </div>"""
c = c.replace(old, new)

with open('src/pages/Store.tsx', 'w', encoding='utf-8') as f:
    f.write(c)
print('Store.tsx updated OK')