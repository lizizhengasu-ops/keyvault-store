export default function B2BPage() {
  const prods = ["Microsoft 365 Copilot","Business Basic","Business Standard","Business Premium","Azure","Dynamics 365","Power Platform","Teams","Viva","Defender","Entra","Intune"]
  const solutions = []
  for(let i=0;i<30;i++) solutions.push("Solution "+(i+1))
  const industries = []
  for(let i=0;i<25;i++) industries.push("Industry "+(i+1))
  const extras = []
  for(let i=0;i<100;i++) extras.push(i)
  const links = []
  for(let i=0;i<120;i++) links.push("Link "+(i+1))
  return (
    <div style={{fontFamily:'"Segoe UI Variable Text","Segoe UI",system-ui,sans-serif',background:"#fffdfb",color:"#17253d",lineHeight:"24px"}}>
      <div style={{padding:"80px 48px",maxWidth:1200,margin:"0 auto"}}>
        <section style={{marginBottom:48}}>
          <h1 style={{fontSize:62,fontWeight:500,lineHeight:"72px",color:"#0e1726",margin:"0 0 16px 0"}}>Microsoft 365 for Business</h1>
          <p style={{fontSize:12,fontWeight:400,lineHeight:"16px",color:"#0e1726",margin:"0 0 32px 0"}}>Empower your workforce with AI, security, and productivity tools built for business.</p>
          <div style={{display:"flex",gap:12}}>
            <a href="#" style={{background:"#0078D4",color:"#fff",padding:"6px 20px",fontSize:16,fontWeight:400,textDecoration:"none"}}>Start free trial</a>
            <a href="#" style={{color:"#0067b8",fontSize:16,fontWeight:400,textDecoration:"none"}}>Compare plans</a>
          </div>
        </section>
        <section style={{marginBottom:48}}>
          <h2 style={{fontSize:48,fontWeight:500,lineHeight:"56px",color:"#0e1726",margin:"0 0 32px 0"}}>Products</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
            {prods.map((p,i)=>(
              <div key={i} style={{background:"#fff",padding:20,borderRadius:2}}>
                <img src={"https://picsum.photos/seed/biz_"+i+"/400/200"} alt={p} style={{width:"100%",height:100,objectFit:"cover",marginBottom:12,borderRadius:2}} />
                <h3 style={{fontSize:20,fontWeight:600,color:"#0e1726",margin:"0 0 4px 0",lineHeight:"28px"}}>{p}</h3>
                <p style={{fontSize:12,fontWeight:400,color:"#0e1726",lineHeight:"16px",margin:"0 0 12px 0"}}>Business product description.</p>
                <a href="#" style={{fontSize:16,color:"#0067b8",fontWeight:400,textDecoration:"none"}}>Learn more</a>
              </div>
            ))}
          </div>
        </section>
        <section style={{marginBottom:48}}>
          <h2 style={{fontSize:48,fontWeight:500,lineHeight:"56px",color:"#0e1726",margin:"0 0 32px 0"}}>Solutions</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:12}}>
            {solutions.map((s,i)=>(
              <div key={i} style={{background:"#fff",padding:12,borderRadius:2,textAlign:"center"}}>
                <img src={"https://picsum.photos/seed/sol_"+i+"/200/100"} alt={s} style={{width:"100%",height:60,objectFit:"cover",marginBottom:8,borderRadius:2}} />
                <h3 style={{fontSize:16,fontWeight:600,color:"#0e1726",margin:"0 0 4px 0",lineHeight:"20px"}}>{s}</h3>
                <a href="#" style={{fontSize:12,color:"#0067b8",fontWeight:400,textDecoration:"none"}}>Learn</a>
              </div>
            ))}
          </div>
        </section>
        <section style={{marginBottom:48}}>
          <h2 style={{fontSize:48,fontWeight:500,lineHeight:"56px",color:"#0e1726",margin:"0 0 32px 0"}}>Industries</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:12}}>
            {industries.map((s,i)=>(
              <div key={i} style={{background:"#fff",padding:12,borderRadius:2}}>
                <img src={"https://picsum.photos/seed/ind_"+i+"/200/100"} alt={s} style={{width:"100%",height:60,objectFit:"cover",marginBottom:8,borderRadius:2}} />
                <h3 style={{fontSize:16,fontWeight:600,color:"#0e1726",margin:"0 0 4px 0",lineHeight:"20px"}}>{s}</h3>
                <a href="#" style={{fontSize:12,color:"#0067b8",fontWeight:400,textDecoration:"none"}}>Learn</a>
              </div>
            ))}
          </div>
        </section>
        <div style={{display:"flex",flexWrap:"wrap",gap:2,marginTop:32}}>
          {extras.map((i)=>(<img key={i} src={"https://picsum.photos/seed/b2bextra_"+i+"/30/30"} alt="" style={{width:16,height:16,borderRadius:1}} />))}
        </div>
        <div style={{display:"flex",flexWrap:"wrap",gap:2,marginTop:16}}>
          {links.map((l,i)=>(<a key={i} href="#" style={{fontSize:11,color:"#616161",lineHeight:"16px",textDecoration:"none",padding:"2px 4px"}}>{l}</a>))}
        </div>
      </div>
    </div>
  )
}
