export default function B2bPage() {
  return (
    <section style={{padding:"80px 20px",maxWidth:800,margin:"0 auto"}}>
      <h1 className="hero-title" style={{fontSize:40,fontWeight:600,marginBottom:8,textAlign:"center"}}>B2B & Enterprise</h1>
      <p style={{textAlign:"center",color:"#6e6e73",marginBottom:40,fontSize:18}}>Empower your business with mifan technology.</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:16,marginBottom:40}}>
        {[{t:"Volume Purchasing",d:"Discounts on 50+ units. Custom configurations."},{t:"Device Management",d:"MDM, DEP, and zero-touch deployment."},{t:"Security & Compliance",d:"Enterprise-grade security. SOC 2 certified."},{t:"Dedicated Support",d:"24/7 priority support. Dedicated account manager."}].map((s,i) => (
          <div key={i} style={{background:"#f5f5f7",borderRadius:18,padding:"28px 24px",border:"1px solid #e6e6ea"}}>
            <h3 style={{fontSize:18,fontWeight:600,marginBottom:6}}>{s.t}</h3>
            <p style={{fontSize:13,color:"#6e6e73"}}>{s.d}</p>
          </div>
        ))}
      </div>
      <div style={{background:"#0071e3",color:"#fff",borderRadius:18,padding:"40px 32px",textAlign:"center"}}>
        <h2 style={{fontSize:24,fontWeight:600,marginBottom:8}}>Get Started with Enterprise</h2>
        <p style={{fontSize:14,marginBottom:16,opacity:0.9}}>Talk to our B2B team for custom pricing and deployment support.</p>
        <a style={{display:"inline-block",background:"#fff",color:"#0071e3",fontSize:14,fontWeight:600,padding:"10px 24px",borderRadius:980,textDecoration:"none"}}>Contact Sales</a>
      </div>
    </section>
  );
}