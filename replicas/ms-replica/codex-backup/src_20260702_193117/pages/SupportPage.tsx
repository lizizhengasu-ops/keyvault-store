export default function SupportPage() {
  return (
    <div style={{maxWidth:1200,margin:'0 auto',padding:'80px 24px'}}>
      <h1 style={{fontSize:46,fontWeight:600,lineHeight:1.1,marginBottom:16}}>Support</h1>
      <p style={{fontSize:20,fontWeight:200,lineHeight:1.6,marginBottom:48}}>Get help with Microsoft products and services.</p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16}}>
        {[
          {t:'Surface',d:'Setup, updates, and repairs for Surface devices.'},
          {t:'Windows',d:'Installation, activation, and troubleshooting.'},
          {t:'Microsoft 365',d:'Install, manage, and renew your subscription.'},
          {t:'Xbox',d:'Console, Game Pass, and account support.'},
          {t:'Teams',d:'Account, meetings, and collaboration.'},
          {t:'Billing',d:'Orders, refunds, and payment options.'},
        ].map((p,i)=>(
          <div key={i} style={{background:'#f2f2f2',padding:'32px',borderRadius:2,cursor:'pointer'}}>
            <h3 style={{fontSize:20,fontWeight:600,marginBottom:8}}>{p.t}</h3>
            <p style={{fontSize:14,lineHeight:1.6,color:'#616161',marginBottom:12}}>{p.d}</p>
            <a style={{fontWeight:600,color:'#0078D4',cursor:'pointer'}}>Get help &gt;</a>
          </div>
        ))}
      </div>
    </div>
  );
}