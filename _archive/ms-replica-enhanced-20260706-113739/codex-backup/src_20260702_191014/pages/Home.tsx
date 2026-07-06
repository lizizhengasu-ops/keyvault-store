export default function HomePage() {
  const products = [
    {t:'Surface Pro',d:'Versatile laptop with tablet portability.',c:'#0078D4',l:'/product/surface'},
    {t:'Windows 11',d:'The most secure Windows ever built.',c:'#0078D4',l:'/product/windows'},
    {t:'Microsoft 365',d:'Office apps + cloud storage + security.',c:'#D83B01',l:'/store'},
    {t:'Xbox Series X',d:'Fastest, most powerful Xbox ever.',c:'#107C10',l:'/store'},
    {t:'Teams',d:'Chat, meet, and collaborate.',c:'#4B53BC',l:'/store'},
    {t:'Copilot',d:'Your AI-powered assistant.',c:'#0078D4',l:'/store'},
    {t:'Edge',d:'Browser with built-in AI.',c:'#0078D4',l:'/store'},
    {t:'OneDrive',d:'Cloud storage for everything.',c:'#0078D4',l:'/store'},
    {t:'Outlook',d:'Email and calendar.',c:'#0078D4',l:'/store'},
    {t:'LinkedIn',d:'Professional networking.',c:'#0A66C2',l:'/store'},
    {t:'SharePoint',d:'Content management.',c:'#0078D4',l:'/store'},
    {t:'Viva',d:'Employee experience.',c:'#0078D4',l:'/store'},
  ];
  const links = [
    {t:'Surface Pro 11',l:'/product/surface'},{t:'Surface Laptop 7',l:'/product/surface'},
    {t:'Xbox Game Pass',l:'/store'},{t:'Windows 11 Pro',l:'/product/windows'},
    {t:'Microsoft 365 Basic',l:'/store'},{t:'Copilot Pro',l:'/store'},
    {t:'Azure',l:'/b2b'},{t:'Dynamics 365',l:'/b2b'},
    {t:'Visual Studio',l:'/store'},{t:'Power Platform',l:'/b2b'},
    {t:'Microsoft Learn',l:'/support'},{t:'Tech Community',l:'/support'},
  ];
  return (
    <section style={{background:'linear-gradient(135deg,#0078D4,#106EBE)',color:'#fff',padding:'80px 20px',textAlign:'center'}}>
      <h1 style={{fontSize:46,fontWeight:600,lineHeight:1.1,marginBottom:16}}>Microsoft 365</h1>
      <p style={{fontSize:20,fontWeight:200,lineHeight:1.6,marginBottom:24}}>Premium Microsoft apps, extra cloud storage, advanced security, and more.</p>
      <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
        <a href='/store' style={{background:'#fff',color:'#0078D4',padding:'8px 24px',borderRadius:2,fontWeight:600,fontSize:15}}>Buy now</a>
        <a href='/product/surface' style={{background:'transparent',color:'#fff',padding:'8px 24px',borderRadius:2,border:'1px solid #fff',fontSize:15}}>Learn more</a>
      </div>
      {links.slice(0,6).map((l,i)=>(
        <a key={i} href={l.l} style={{color:'#fff',fontSize:14,margin:'0 8px',display:'inline-block'}}>{l.t}</a>
      ))}
    </section>
    <section style={{padding:'48px 20px',background:'#fff'}}>
      <h2 style={{fontSize:34,fontWeight:100,lineHeight:'40px',marginBottom:32,color:'#000'}}>Products</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:16,maxWidth:1200,margin:'0 auto'}}>
        {products.map((p,i)=>(
          <div key={i} style={{background:'#f2f2f2',padding:'24px',borderRadius:2,cursor:'pointer'}}>
            <div style={{width:40,height:40,borderRadius:2,background:p.c,marginBottom:12}}></div>
            <h3 style={{fontSize:20,fontWeight:600,marginBottom:8,color:'#000'}}>{p.t}</h3>
            <p style={{fontSize:14,color:'#616161',lineHeight:1.6,marginBottom:12}}>{p.d}</p>
            <a href={p.l} style={{color:'#0078D4',fontWeight:600,fontSize:14}}>Learn more &gt;</a>
          </div>
        ))}
      </div>
    </section>
    <section style={{padding:'48px 20px',background:'#f2f2f2'}}>
      <h2 style={{fontSize:34,fontWeight:100,lineHeight:'40px',textAlign:'center',marginBottom:32,color:'#000'}}>Designed for life today</h2>
      <div style={{maxWidth:1200,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16}}>
        {[
          {t:'Teams',d:'Chat, meet, and collaborate with anyone from anywhere.',img:'#4B53BC'},
          {t:'Edge',d:'World-class performance with built-in privacy and AI.',img:'#0078D4'},
          {t:'OneDrive',d:'Access your files anywhere, on any device.',img:'#0078D4'},
          {t:'Outlook',d:'Manage email and calendar in one place.',img:'#0078D4'},
          {t:'Copilot',d:'Your AI-powered assistant for work and life.',img:'#0078D4'},
          {t:'Defender',d:'Protect your data and devices from threats.',img:'#D83B01'},
        ].map((f,i)=>(
          <div key={i} style={{background:'#fff',padding:'32px',borderRadius:2}}>
            <div style={{width:48,height:48,background:f.img,borderRadius:2,marginBottom:12}}></div>
            <h3 style={{fontSize:20,fontWeight:600,marginBottom:8,color:'#000'}}>{f.t}</h3>
            <p style={{fontSize:14,color:'#616161',marginBottom:12}}>{f.d}</p>
            <a style={{color:'#0078D4',fontWeight:600,fontSize:14}}>Learn more &gt;</a>
          </div>
        ))}
      </div>
      <div style={{textAlign:'center',marginTop:32,gap:16,display:'flex',justifyContent:'center'}}>
        {['Surface','Windows','Xbox','Teams','Copilot','Azure','OneDrive','Outlook','LinkedIn'].map((n,i)=>(
          <a key={i} href='/store' style={{color:'#0078D4',fontSize:13}}>{n}</a>
        ))}
      </div>
    </section>
    <section style={{padding:'48px 20px',background:'#fff',textAlign:'center'}}>
      <h2 style={{fontSize:34,fontWeight:100,lineHeight:'40px',marginBottom:16,color:'#000'}}>Follow Microsoft</h2>
      <div style={{display:'flex',gap:16,justifyContent:'center'}}>
        {['Facebook','Twitter','LinkedIn','YouTube','Instagram','TikTok'].map((n,i)=>(
          <a key={i} href='#' style={{color:'#616161',fontSize:14}}>{n}</a>
        ))}
      </div>
    </section>
  );
}