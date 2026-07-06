export default function B2BPage() {
  const products = [
    {name:"Microsoft 365 Copilot",desc:"AI-powered productivity for your business."},
    {name:"Microsoft 365 Business Basic",desc:"Email, file storage, and collaboration."},
    {name:"Microsoft 365 Business Standard",desc:"Desktop apps plus business services."},
    {name:"Microsoft 365 Business Premium",desc:"Security + productivity for businesses."},
    {name:"Azure",desc:"Cloud computing and analytics."},
    {name:"Dynamics 365",desc:"CRM and ERP applications."},
    {name:"Power Platform",desc:"Low-code app development."},
    {name:"Microsoft Teams",desc:"Chat, meetings, and collaboration."},
    {name:"Microsoft Viva",desc:"Employee experience platform."},
    {name:"Microsoft Defender",desc:"Security for your business."},
    {name:"Microsoft Entra",desc:"Identity and access management."},
    {name:"Microsoft Intune",desc:"Endpoint management."},
  ]
  const solutions = [
    "Remote Work","Cloud Migration","Data Security","Compliance","AI Transformation","Customer Service",
    "Supply Chain","HR","Finance","Marketing","Sales","IT Management","Sustainability","Healthcare",
    "Education","Manufacturing","Retail","Financial Services","Government","Nonprofit",
  ]
  const industries = [
    "Healthcare","Education","Finance","Manufacturing","Retail","Government","Nonprofit","Energy",
    "Media","Telecommunications","Transportation","Real Estate","Hospitality","Agriculture",
  ]
  return (
    <div style={{fontFamily:'"Segoe UI Variable Text","Segoe UI",system-ui,sans-serif',background:"#fffdfb",color:"#17253d",lineHeight:"24px"}}>
      <div style={{padding:"80px 48px",maxWidth:1200,margin:"0 auto"}}>
        <section style={{marginBottom:48}}>
          <h1 style={{fontSize:48,fontWeight:500,lineHeight:"56px",color:"#17253d",margin:"0 0 16px 0"}}>Microsoft 365 for Business</h1>
          <p style={{fontSize:12,fontWeight:400,lineHeight:"16px",color:"#0e1726",margin:"0 0 32px 0"}}>Solutions for every business, from startup to enterprise. Empower your workforce with AI, security, and productivity tools.</p>
          <div style={{display:"flex",gap:12}}>
            <a href="#" style={{background:"#0078D4",color:"#fff",padding:"6px 20px",fontSize:16,fontWeight:400,textDecoration:"none"}}>Start free trial</a>
            <a href="#" style={{color:"#0067b8",fontSize:16,fontWeight:400,textDecoration:"none"}}>Compare plans</a>
          </div>
        </section>
        <section style={{marginBottom:48}}>
          <h2 style={{fontSize:48,fontWeight:500,lineHeight:"56px",color:"#17253d",margin:"0 0 32px 0"}}>Products for business</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
            {products.map((p,i)=>(
              <div key={i} style={{background:"#fff",padding:20,borderRadius:2}}>
                <img src={"https://picsum.photos/seed/biz_"+i+"/400/200"} alt={p.name} style={{width:"100%",height:100,objectFit:"cover",marginBottom:12,borderRadius:2}} />
                <h3 style={{fontSize:20,fontWeight:600,color:"#17253d",margin:"0 0 4px 0",lineHeight:"24px"}}>{p.name}</h3>
                <p style={{fontSize:12,fontWeight:400,color:"#0e1726",lineHeight:"16px",margin:"0 0 12px 0"}}>{p.desc}</p>
                <a href="#" style={{fontSize:16,color:"#0067b8",fontWeight:400,textDecoration:"none"}}>Learn more</a>
              </div>
            ))}
          </div>
        </section>
        <section style={{marginBottom:48}}>
          <h2 style={{fontSize:48,fontWeight:500,lineHeight:"56px",color:"#17253d",margin:"0 0 32px 0"}}>Business solutions</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:12}}>
            {solutions.map((s,i)=>(
              <div key={i} style={{background:"#fff",padding:12,borderRadius:2,textAlign:"center"}}>
                <img src={"https://picsum.photos/seed/sol_"+i+"/200/100"} alt={s} style={{width:"100%",height:60,objectFit:"cover",marginBottom:8,borderRadius:2}} />
                <a href="#" style={{fontSize:12,color:"#0067b8",fontWeight:400,textDecoration:"none",display:"block"}}>{s}</a>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 style={{fontSize:48,fontWeight:500,lineHeight:"56px",color:"#17253d",margin:"0 0 32px 0"}}>Industries</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12}}>
            {industries.map((s,i)=>(
              <div key={i} style={{background:"#fff",padding:12,borderRadius:2}}>
                <img src={"https://picsum.photos/seed/ind_"+i+"/200/100"} alt={s} style={{width:"100%",height:60,objectFit:"cover",marginBottom:8,borderRadius:2}} />
                <a href="#" style={{fontSize:12,color:"#0067b8",fontWeight:400,textDecoration:"none"}}>{s}</a>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div style={{maxWidth:1200,margin:"0 auto",padding:"0 48px 48px",display:"flex",flexWrap:"wrap",gap:8}}>
        {["Microsoft 365","Azure","Dynamics 365","Power Platform","Visual Studio","Windows","Surface","Xbox","Teams","Copilot","OneDrive","Outlook","LinkedIn","Microsoft Learn","Developer Center","Education","Support","Security","Compliance","AI","Advertising","Careers","About","Investors","Sustainability","Diversity","Privacy","Terms","Trademarks","Contact Us"].map((r,i)=>(
          <a key={i} href="#" style={{fontSize:11,color:"#616161",lineHeight:"16px",textDecoration:"none",padding:"4px 8px"}}>{r}</a>
        ))}
      </div>
    </div>
  )
}