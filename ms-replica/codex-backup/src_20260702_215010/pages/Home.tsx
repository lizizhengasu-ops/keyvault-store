export default function HomePage() {
  return (
    <div>
      <div style={{background:"linear-gradient(135deg,#0078D4,#106EBE)",padding:"80px 48px",color:"#fff",textAlign:"center"}}>
        <h1 style={{fontSize:48,fontWeight:500,lineHeight:"56px",marginBottom:16}}>Microsoft 365</h1>
        <p style={{fontSize:20,fontWeight:400,lineHeight:"24px",marginBottom:24}}>Premium apps, extra cloud storage, advanced security.</p>
        <div style={{display:"flex",gap:12,justifyContent:"center"}}>
          <a href="#" style={{background:"#fff",color:"#0078D4",padding:"6px 20px",fontSize:14}}>Buy now</a>
          <a href="#" style={{color:"#fff",fontSize:14}}>Learn more</a>
        </div>
      </div>
      <div style={{padding:48,maxWidth:1200,margin:"0 auto"}}>
        <h2 style={{fontSize:62,fontWeight:500,color:"#0e1726",marginBottom:24}}>Featured products</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>
          {["Surface Pro","Windows 11","Xbox Series X","Microsoft 365","Copilot","Teams","Azure","OneDrive","Outlook","LinkedIn","Edge","Defender","SharePoint","Viva","Visual Studio","GitHub","Power Platform","Dynamics 365"].map((n,i)=>(
            <div key={i}><h2 style={{fontSize:20,fontWeight:600,color:"#0e1726",marginBottom:4}}>{n}</h2><a href="#" style={{fontSize:13,color:"#0078D4"}}>Learn</a><a href="#" style={{fontSize:13,color:"#262626",marginLeft:8}}>Shop</a></div>
          ))}
        </div>
      </div>
      <div style={{padding:24,background:"#f2f2f2",textAlign:"center"}}>
        {["Facebook","Twitter","LinkedIn","YouTube","Instagram","TikTok","Reddit","GitHub"].map((n,i)=>(
          <a key={i} href="#" style={{fontSize:13,color:"#262626",margin:"0 8px"}}>{n}</a>
        ))}
      </div>
    </div>
  )
}