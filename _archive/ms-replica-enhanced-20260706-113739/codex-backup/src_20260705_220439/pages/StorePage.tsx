export default function StorePage() {
  const deals = ["Save up to $250 on Surface","Student discount: 10% off","Bundle & save up to 15%","Free 2-3 day shipping","60-day returns","Microsoft Complete warranty"]
  const categories = [
    {name:"Surface Pro",color:"#0078D4",items:["13-inch 12th Ed $1,299","12-inch $799","11th Ed $999","For Business $1,499"]},
    {name:"Surface Laptop",color:"#106EBE",items:["13.8-inch 8th Ed $999","15-inch 8th Ed $1,299","13-inch $899","15-inch 7th Ed $1,199"]},
    {name:"Xbox Series",color:"#107C10",items:["Series X $499","Series S $299","Game Pass Ultimate $16.99","Controller $59"]},
    {name:"Accessories",color:"#5C2E91",items:["Surface Pen $129","Surface Dock $259","Keyboard $99","Mouse $79"]}
  ]
  return (
    <div style={{fontFamily:'"Segoe UI Variable Text","Segoe UI",system-ui,sans-serif',color:"#000",background:"#fff"}}>
      <div style={{background:"linear-gradient(135deg,#000 0%,#1a1a1a 100%)",color:"#fff",padding:"60px 48px"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <h2 style={{fontSize:34,fontWeight:100,lineHeight:"40px",color:"#000",margin:"0 0 12px 0"}}>Microsoft Store</h2>
          <p style={{fontSize:20,fontWeight:200,lineHeight:"24px",color:"#000",margin:"0 0 32px 0"}}>Save big on Surface, Xbox, and more.</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
            {deals.slice(0,3).map((d,i)=>(
              <div key={i} style={{background:"rgba(255,255,255,0.08)",padding:20,borderRadius:2,border:"1px solid rgba(255,255,255,0.12)"}}>
                <div style={{fontSize:16,fontWeight:600,color:"#fff",marginBottom:4}}>{d}</div>
                <a href="#" style={{fontSize:13,color:"#0078D4",textDecoration:"none"}}>Shop now</a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{padding:"48px 48px",maxWidth:1200,margin:"0 auto"}}>
        <div style={{fontSize:24,fontWeight:600,color:"#000",margin:"0 0 24px 0"}}>Shop by category</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>
          {categories.map((c,i)=>(
            <div key={i} style={{background:"rgb(242,242,242)",padding:20,borderRadius:2}}>
              <div style={{width:48,height:48,background:c.color,borderRadius:8,marginBottom:12,display:"flex",alignItems:"center",justifyContent:"center"}}>
                <span style={{color:"#fff",fontSize:20,fontWeight:700}}>{c.name[0]}</span></div>
              <div style={{fontSize:20,fontWeight:600,color:"#000",margin:"0 0 12px 0"}}>{c.name}</div>
              {c.items.map((it,j)=>(
                <div key={j} style={{display:"flex",justifyContent:"space-between",padding:"4px 0",fontSize:13,color:"#000",borderBottom:j<3?"1px solid rgb(220,220,220)":"none"}}>
                  <span>{it.split("$")[0].trim()}</span>
                  <span style={{fontWeight:600}}>${it.split("$")[1]}</span>
                </div>
              ))}
              <a href="#" style={{fontSize:13,color:"#0067b8",display:"block",marginTop:8,textDecoration:"none"}}>Shop all {c.name} &gt;</a>
            </div>
          ))}
        </div>
      </div>
      <div style={{background:"rgb(242,242,242)",padding:"48px 48px"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div style={{fontSize:24,fontWeight:600,color:"#000",margin:"0 0 24px 0"}}>Why customers love Microsoft Store</div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
            {[{t:"Free shipping",d:"On thousands of products"},{t:"60-day returns",d:"No questions asked"},{t:"Microsoft Complete",d:"Extended warranty"}].map((f,i)=>(
              <div key={i} style={{background:"#fff",padding:24,borderRadius:2,textAlign:"center"}}>
                <div style={{width:48,height:48,background:["#0078D4","#107C10","#5C2E91"][i],borderRadius:24,margin:"0 auto 12px"}}></div>
                <div style={{fontSize:16,fontWeight:600,color:"#000",marginBottom:4}}>{f.t}</div>
                <div style={{fontSize:13,color:"rgb(97,97,97)"}}>{f.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
