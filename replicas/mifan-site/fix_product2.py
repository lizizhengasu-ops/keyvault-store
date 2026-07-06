with open("src/pages/Product.tsx","r",encoding="utf-8") as f:
    c = f.read()
# Find the last </> and append sections before it
tail_sig = '    </>'
idx = c.rfind(tail_sig)
if idx > 0:
    add = '''
      {/* ACCESSORIES */}
      <section className="section-in" style={{padding:"48px 20px",background:"#f5f5f7"}}>
        <h2 style={{fontSize:24,fontWeight:600,lineHeight:1.16667,textAlign:"center",marginBottom:24,color:"#1d1d1f"}}>Accessories for {p.n}</h2>
        <div className="stagger-grid" style={{maxWidth:700,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
          {["mifan Leather Case - $49","20W USB-C Charger - $29","mifan EarPods - $19"].map((a,i) => (
            <div key={i} className="stagger-item card-hover" style={{background:"#fff",borderRadius:18,padding:"24px",border:"1px solid #e6e6ea",textAlign:"center"}}>
              <p style={{fontSize:28,marginBottom:4,color:"#0071e3",fontWeight:600}}>**</p>
              <p style={{fontSize:14,fontWeight:600,color:"#1d1d1f",marginBottom:2}}>{a.split(" - ")[0]}</p>
              <p style={{fontSize:13,color:"#0071e3"}}>{a.split(" - ")[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section-in" style={{padding:"48px 20px",background:"#fff"}}>
        <h2 style={{fontSize:24,fontWeight:600,lineHeight:1.16667,textAlign:"center",marginBottom:24,color:"#1d1d1f"}}>Customer Reviews</h2>
        <div className="stagger-grid" style={{maxWidth:700,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:16}}>
          {[{n:"Alex R.",c:"Best phone upgrade ever, the camera is amazing and battery lasts all day."},{n:"Maria L.",c:"Fast shipping, incredible device. Worth every penny and more."}].map((r,i) => (
            <div key={i} className="stagger-item card-hover" style={{background:"#f5f5f7",borderRadius:18,padding:"24px",border:"1px solid #e6e6ea"}}>
              <p style={{fontSize:14,color:"#6e6e73",fontStyle:"italic",marginBottom:8,lineHeight:1.47059}}>"{r.c}"</p>
              <p style={{fontSize:13,fontWeight:600,color:"#1d1d1f"}}>{r.n}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARE */}
      <section style={{padding:"32px 20px",background:"#f5f5f7",textAlign:"center"}}>
        <h2 style={{fontSize:24,fontWeight:600,color:"#1d1d1f",marginBottom:8,lineHeight:1.16667}}>Compare with other models</h2>
        <p style={{fontSize:14,color:"#6e6e73",marginBottom:16}}>See how {p.n} stacks up against the competition.</p>
        <a href="/store" className="btn-link" style={{fontSize:17}}>Compare all models &gt;</a>
      </section>
'''
    c = c[:idx] + add + tail_sig
    with open("src/pages/Product.tsx","w",encoding="utf-8") as f:
        f.write(c)
    print("Product.tsx - sections appended")