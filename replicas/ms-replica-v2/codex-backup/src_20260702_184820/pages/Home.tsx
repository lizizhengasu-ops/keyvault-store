export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section style={{background:"linear-gradient(135deg,#0078D4,#106EBE)",color:"#fff",padding:"80px 20px",textAlign:"center"}}>
        <h1 style={{fontSize:46,fontWeight:600,lineHeight:1.2,marginBottom:16}}>Microsoft 365</h1>
        <p style={{fontSize:20,marginBottom:24,maxWidth:600,margin:"0 auto 24px",opacity:0.9}}>Premium Microsoft apps, extra cloud storage, advanced security, and more — all in one subscription.</p>
        <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
          <a style={{background:"#fff",color:"#0078D4",padding:"8px 24px",borderRadius:2,fontWeight:600,cursor:"pointer",fontSize:15,textDecoration:"none",display:"inline-block"}}>Buy now</a>
          <a style={{background:"transparent",color:"#fff",padding:"8px 24px",borderRadius:2,fontWeight:400,cursor:"pointer",fontSize:15,border:"1px solid #fff",textDecoration:"none",display:"inline-block"}}>Learn more</a>
        </div>
      </section>

      {/* PRODUCT CARDS */}
      <section style={{padding:"48px 20px",background:"#fff"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <h2 style={{fontSize:34,fontWeight:600,marginBottom:32}}>Products</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
            {[
              {t:"Surface Pro",d:"Versatile laptop with tablet portability.",icon:"#0078D4"},
              {t:"Windows 11",d:"The most secure Windows ever.",icon:"#0078D4"},
              {t:"Microsoft 365",d:"Office apps + cloud storage.",icon:"#0078D4"},
              {t:"Xbox Series X",d:"Fastest, most powerful Xbox.",icon:"#0078D4"},
              {t:"Teams",d:"Chat, meet, and collaborate.",icon:"#0078D4"},
              {t:"Copilot",d:"Your AI-powered assistant.",icon:"#0078D4"},
            ].map((p,i) => (
              <div key={i} style={{background:"#f2f2f2",padding:"24px",borderRadius:2,cursor:"pointer"}}>
                <div style={{width:40,height:40,borderRadius:2,background:p.icon,marginBottom:12}}></div>
                <h3 style={{fontSize:20,fontWeight:600,marginBottom:8}}>{p.t}</h3>
                <p style={{fontSize:14,color:"#616161",lineHeight:1.6,marginBottom:12}}>{p.d}</p>
                <a style={{color:"#0078D4",fontWeight:600,fontSize:14,cursor:"pointer"}}>Learn more &gt;</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{padding:"48px 20px",background:"#f2f2f2"}}>
        <h2 style={{fontSize:34,fontWeight:600,textAlign:"center",marginBottom:32}}>Designed for life today</h2>
        <div style={{maxWidth:1200,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:16}}>
          <div style={{background:"#fff",padding:"32px",borderRadius:2,boxShadow:"0 2px 8px rgba(0,0,0,0.05)"}}>
            <h3 style={{fontSize:24,fontWeight:600,marginBottom:8}}>Microsoft Teams</h3>
            <p style={{fontSize:14,color:"#616161",marginBottom:12}}>Chat, meet, and collaborate with anyone from anywhere with Microsoft Teams.</p>
            <a style={{color:"#0078D4",fontWeight:600,fontSize:14}}>Learn more &gt;</a>
          </div>
          <div style={{background:"#fff",padding:"32px",borderRadius:2,boxShadow:"0 2px 8px rgba(0,0,0,0.05)"}}>
            <h3 style={{fontSize:24,fontWeight:600,marginBottom:8}}>Microsoft Edge</h3>
            <p style={{fontSize:14,color:"#616161",marginBottom:12}}>World-class performance with built-in privacy, productivity, and AI.</p>
            <a style={{color:"#0078D4",fontWeight:600,fontSize:14}}>Learn more &gt;</a>
          </div>
        </div>
      </section>
    </>
  );
}
