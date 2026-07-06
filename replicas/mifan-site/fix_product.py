import os
# Read current Product.tsx
with open("src/pages/Product.tsx", "r", encoding="utf-8") as f:
    c = f.read()

# Keep existing imports, state, and data logic - just add more sections before </section>
# Find the end of the main section and add accessories, reviews, related products
old_end = """{/* FINANCING */}
      <section style={{padding:"32px 20px",background:"#fff",textAlign:"center"}}>
        <p style={{fontSize:14,color:"#6e6e73",marginBottom:4}}>Get $200-$650 for your current phone with trade-in. From $41.62/mo. at 0% APR.</p>
        <p style={{fontSize:14,color:"#6e6e73"}}>Free delivery. No-contact shipping.</p>
      </section>
    </>
  );
}"""

new_end = """{/* ACCESSORIES */}
      <section className="section-in" style={{padding:"48px 20px",background:"#f5f5f7"}}>
        <h2 style={{fontSize:24,fontWeight:600,lineHeight:1.16667,textAlign:"center",marginBottom:24,color:"#1d1d1f"}}>Accessories for {p.n}</h2>
        <div className="stagger-grid" style={{maxWidth:800,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
          {[
            {t:"mifan Leather Case",p:"$49",d:"Premium leather in five colors"},
            {t:"20W USB-C Charger",p:"$29",d:"Fast charge capable"},
            {t:"mifan EarPods",p:"$19",d:"Wired with Lightning connector"}
          ].map((a,i) => (
            <div key={i} className="stagger-item card-hover" style={{background:"#fff",borderRadius:18,padding:"24px",border:"1px solid #e6e6ea",textAlign:"center"}}>
              <p style={{fontSize:28,marginBottom:8,color:"#0071e3",fontWeight:600}}>*</p>
              <h3 style={{fontSize:15,fontWeight:600,color:"#1d1d1f",marginBottom:4}}>{a.t}</h3>
              <p style={{fontSize:13,color:"#6e6e73",marginBottom:4}}>{a.d}</p>
              <p style={{fontSize:15,fontWeight:400,color:"#0071e3"}}>{a.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section className="section-in" style={{padding:"48px 20px",background:"#fff"}}>
        <h2 style={{fontSize:24,fontWeight:600,lineHeight:1.16667,textAlign:"center",marginBottom:24,color:"#1d1d1f"}}>What Our Customers Say</h2>
        <div className="stagger-grid" style={{maxWidth:800,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:16}}>
          {[
            {n:"Alex R.",r:5,c:"Best phone upgrade ever. Camera is amazing and battery lasts all day."},
            {n:"Maria L.",r:5,c:"Fast shipping, easy setup, and the phone itself is incredible. Worth every penny."},
            {n:"David K.",r:4,c:"Great phone. The display is gorgeous and performance is snappy. Would recommend."},
            {n:"Sarah W.",r:5,c:"Upgraded from my old phone and the difference is night and day. Love it!"}
          ].map((r,i) => (
            <div key={i} className="stagger-item card-hover" style={{background:"#f5f5f7",borderRadius:18,padding:"24px",border:"1px solid #e6e6ea"}}>
              <p style={{color:"#f5a623",fontSize:14,marginBottom:6,letterSpacing:2}}>{"**".slice(0,r.r)}</p>
              <p style={{fontSize:14,color:"#6e6e73",fontStyle:"italic",marginBottom:8,lineHeight:1.47059}}>"{r.c}"</p>
              <p style={{fontSize:13,fontWeight:600,color:"#1d1d1f"}}>{r.n}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO */}
      <section className="section-in" style={{padding:"48px 20px",background:"#000",textAlign:"center"}}>
        <h2 style={{fontSize:24,fontWeight:600,color:"#f5f5f7",marginBottom:8,lineHeight:1.16667}}>See {p.n} in action</h2>
        <p style={{fontSize:14,color:"#86868b",marginBottom:24}}>Watch the product film.</p>
        <div className="card-hover" style={{maxWidth:600,margin:"0 auto",background:"#1c1c1e",borderRadius:18,padding:"60px 20px",border:"1px solid #38383a",cursor:"pointer"}} role="button" tabIndex={0} aria-label="Play film" onKeyDown={e=>e.key==="Enter"&&alert("Video would play")}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{margin:"0 auto 12px",display:"block"}}><polygon points="5 3 19 12 5 21 5 3" fill="#fff"/></svg>
          <p style={{fontSize:13,color:"#86868b"}}>Play film</p>
        </div>
      </section>

      {/* COMPARE */}
      <section style={{padding:"32px 20px",background:"#fff",textAlign:"center"}}>
        <h2 style={{fontSize:24,fontWeight:600,color:"#1d1d1f",marginBottom:8,lineHeight:1.16667}}>Compare with other models</h2>
        <p style={{fontSize:14,color:"#6e6e73",marginBottom:16}}>See how {p.n} stacks up against the competition.</p>
        <a href="/store" className="btn-link" style={{fontSize:17}}>Compare all models &gt;</a>
      </section>

      {/* FINANCING */}
      <section style={{padding:"32px 20px",background:"#f5f5f7",textAlign:"center"}}>
        <p style={{fontSize:14,color:"#6e6e73",marginBottom:4}}>Get $200-$650 for your current phone with trade-in. From $41.62/mo. at 0% APR.</p>
        <p style={{fontSize:14,color:"#6e6e73"}}>Free delivery. No-contact shipping.</p>
      </section>
    </>
  );
}"""

c = c.replace(old_end, new_end)
with open("src/pages/Product.tsx", "w", encoding="utf-8") as f:
    f.write(c)
print("Product.tsx - accessories + reviews + video + compare")