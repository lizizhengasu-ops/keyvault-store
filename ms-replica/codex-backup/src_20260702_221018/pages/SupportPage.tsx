export default function SupportPage() {
  return (
    <div style={{fontFamily:'"Segoe UI Variable Text","Segoe UI",system-ui,sans-serif',background:"#fff",color:'#000'}}>
      <section style={{padding:"48px 48px",maxWidth:1200,margin:"0 auto"}}>
        <h1 style={{fontSize:48,fontWeight:500,lineHeight:"56px",color:'#000',margin:"0 0 16px 0"}}>Microsoft Support</h1>
        <p style={{fontSize:20,fontWeight:400,lineHeight:"24px",color:'#000',margin:"0 0 32px 0"}}>How can we help you?</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>
          {["Install Windows","Update Windows","Protect PC","Fix errors","Backup files","Network issues","Printer setup","Account help","Billing","Office install","OneDrive","Teams setup","Xbox","Outlook","Password reset","Security","Copilot","Microsoft 365","Surface","Windows 11","Windows 10","Edge","Defender","Teams","SharePoint","Exchange","Power BI","Dynamics 365","Azure","Visual Studio","GitHub","LinkedIn"].map((t,i)=>(
            <div key={i} style={{background:"#f2f2f2",padding:16,borderRadius:2}}>
              <h2 style={{fontSize:15,fontWeight:600,color:"#616161",lineHeight:"20px",margin:"0 0 4px 0"}}>{t}</h2>
              <a href="#" style={{fontSize:11,color:"#0078D4",fontWeight:400,textDecoration:"none"}}>Get support</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}