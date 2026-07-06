import os
path = os.path.join(r'C:\Users\31961\Documents\microsoft web\mifan-site\src\pages', 'Store.tsx')
with open(path, 'rb') as f:
    raw = f.read()

# Find "Featured products" carousel marker
marker = b'Featured products'
if marker in raw:
    print('Carousel already added, skipping')
else:
    # Add carousel after "The latest" section close
    # Find a good insertion point
    insert_marker = b'>See all models'
    if insert_marker in raw:
        idx = raw.find(insert_marker)
        # Find the closing </section> after this
        close_section = raw.find(b'</section>', idx)
        if close_section > 0:
            # Insert carousel after this section
            next_section = raw.find(b'<section', close_section)
            if next_section > 0:
                carousel = b'''

      <section className="section-in" style={{padding:"0 20px 40px",maxWidth:1068,margin:"0 auto"}}>
        <h2 style={{fontSize:24,fontWeight:600,color:"#1d1d1f",marginBottom:16,lineHeight:1.16667}}>Featured products</h2>
        <div style={{display:"flex",gap:16,overflowX:"auto",paddingBottom:12,scrollSnapType:"x mandatory"}}>
          {items.slice(0,3).map((x,i) => (
            <a key={i} href={"/product/"+x.s} className="card-hover" style={{flex:"0 0 260",background:"#f5f5f7",borderRadius:18,overflow:"hidden",textDecoration:"none",color:"inherit",border:"1px solid #e6e6ea",flexShrink:0,scrollSnapAlign:"start"}}>
              <div style={{padding:24,textAlign:"center",minHeight:160,display:"flex",alignItems:"center",justifyContent:"center",background:"#f5f5f7"}}>
                <img src={"/products/"+x.s+".jpg"} alt={x.n} style={{width:100,height:120,objectFit:"contain"}} />
              </div>
              <div style={{padding:"16px 16px",background:"#fff"}}>
                <p style={{fontSize:12,color:"#0071e3",fontWeight:600,textTransform:"uppercase",letterSpacing:".05em",marginBottom:2}}>{x.badge||"Available"}</p>
                <h3 style={{fontSize:17,fontWeight:600,color:"#1d1d1f",marginBottom:2}}>{x.n}</h3>
                <p style={{fontSize:14,color:"#1d1d1f"}}>From ${x.p}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

'''
                raw = raw[:next_section] + carousel + raw[next_section:]
                with open(path, 'wb') as f:
                    f.write(raw)
                print('Store: carousel added')
'