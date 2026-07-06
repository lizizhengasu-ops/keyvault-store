export default function SupportPage() {
  return (
    <section style={{padding:"80px 20px",maxWidth:800,margin:"0 auto"}}>
      <h1 className="hero-title" style={{fontSize:40,fontWeight:600,marginBottom:8,textAlign:"center"}}>Support</h1>
      <p style={{textAlign:"center",color:"#6e6e73",marginBottom:40}}>We are here to help. Every step of the way.</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:16}}>
        {[{t:"Contact Us",d:"Chat, call, or email our support team."},{t:"Product Help",d:"Manuals, guides, and troubleshooting."},{t:"Repairs & Service",d:"Schedule a repair or check warranty status."},{t:"Community",d:"Join discussions with other mPhone users."}].map((s,i) => (
          <div key={i} style={{background:"#f5f5f7",borderRadius:18,padding:"28px 24px",border:"1px solid #e6e6ea"}}>
            <h3 style={{fontSize:18,fontWeight:600,marginBottom:6}}>{s.t}</h3>
            <p style={{fontSize:13,color:"#6e6e73",lineHeight:1.5}}>{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}