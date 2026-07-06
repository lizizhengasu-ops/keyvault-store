import { Link } from "react-router-dom"
export default function SupportPage() {
  const topics = ["Surface","Windows 11","Xbox","Microsoft 365","Office","Outlook","OneDrive","Teams","Edge","Copilot","Defender","Account & Billing","Install & Update","Security & Privacy","Network & Connectivity","Backup & Recovery"]
  const articles = [
    {title:"Reshaping cancer treatment",cat:"AI & Research",img:"art_1"},
    {title:"A guide to using AI at work",cat:"Copilot",img:"art_2"},
    {title:"Small efficiencies, big impact",cat:"Productivity",img:"art_3"},
    {title:"Windows 11 tips and tricks",cat:"Windows",img:"art_4"},
    {title:"Getting started with Copilot",cat:"AI",img:"art_5"},
    {title:"Secure your digital life",cat:"Security",img:"art_6"},
    {title:"Microsoft 365 productivity hacks",cat:"Office",img:"art_7"},
    {title:"Team collaboration with Teams",cat:"Teams",img:"art_8"},
    {title:"Backup your files with OneDrive",cat:"Storage",img:"art_9"},
    {title:"Xbox Game Pass ultimate guide",cat:"Gaming",img:"art_10"},
    {title:"Set up your new Surface device",cat:"Surface",img:"art_11"},
  ]
  const resources = ["Community","Forums","Guides","Videos","Downloads","Tools","Status Dashboard","Accessibility","Contact Us","Privacy"]
  const flinks = []
  for(let i=0;i<80;i++) flinks.push("L"+(i+1))
  return (
    <div style={{fontFamily:'"Segoe UI Variable Text","Segoe UI",system-ui,sans-serif',background:"#fff",color:"#363636",lineHeight:"normal"}}>
      <section style={{background:"#000",color:"#fff",padding:"60px 48px",textAlign:"center"}}>
        <h1 style={{fontSize:48,fontWeight:400,lineHeight:"88.7px",color:"#0a0a0a",margin:"0 0 8px 0"}}>Microsoft Support</h1>
        <div style={{maxWidth:600,margin:"24px auto 0",display:"flex",background:"#fff",borderRadius:2,overflow:"hidden"}}>
          <input type="text" placeholder="Search for help..." style={{flex:1,padding:"12px 16px",border:"none",outline:"none",fontSize:14,color:"#000"}} />
          <div style={{background:"#0078D4",color:"#fff",padding:"0 20px",display:"flex",alignItems:"center",fontSize:14,cursor:"pointer"}}>Search</div>
        </div>
      </section>
      <section style={{padding:"48px 48px",maxWidth:1200,margin:"0 auto"}}>
        <h2 style={{fontSize:36.4,fontWeight:400,lineHeight:"normal",color:"#000000",margin:"0 0 24px 0"}}>What do you need help with today?</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>
          {topics.map((t,i)=>(
            <div key={i} style={{background:"rgb(242,242,242)",padding:20,borderRadius:2}}>
              <img src={"https://picsum.photos/seed/stopic_"+i+"/400/200"} alt={t} style={{width:"100%",height:80,objectFit:"cover",marginBottom:8,borderRadius:2}} />
              <div style={{fontSize:15,fontWeight:600,color:"#363636"}}>{t}</div>
              <Link to="/support" style={{fontSize:12,color:"#363636",textDecoration:"none",display:"block",marginTop:4}}>Get help</Link>
            </div>
          ))}
        </div>
      </section>
      <section style={{background:"rgb(242,242,242)",padding:"48px 48px"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <h2 style={{fontSize:36.4,fontWeight:400,lineHeight:"normal",color:"#000000",margin:"0 0 24px 0"}}>Start your Copilot journey here</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>
            {articles.slice(0,4).map((a,i)=>(
              <div key={i} style={{background:"#fff",padding:16,borderRadius:2}}>
                <img src={"https://picsum.photos/seed/"+a.img+"/400/200"} alt={a.title} style={{width:"100%",height:80,objectFit:"cover",marginBottom:8,borderRadius:2}} />
                <div style={{fontSize:12,color:"rgb(97,97,97)",marginBottom:4}}>{a.cat}</div>
                <h3 style={{fontSize:15,fontWeight:600,color:"#242424",margin:"0 0 4px 0",lineHeight:"20px"}}>{a.title}</h3>
                <Link to="/support" style={{fontSize:12,color:"#363636",textDecoration:"none"}}>Learn more</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{padding:"48px 48px",maxWidth:1200,margin:"0 auto"}}>
        <h2 style={{fontSize:36.4,fontWeight:400,lineHeight:"normal",color:"#000000",margin:"0 0 24px 0"}}>Find solutions</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>
          {articles.slice(4,8).map((a,i)=>(
            <div key={i} style={{background:"rgb(242,242,242)",padding:16,borderRadius:2}}>
              <img src={"https://picsum.photos/seed/"+a.img+"/400/200"} alt={a.title} style={{width:"100%",height:80,objectFit:"cover",marginBottom:8,borderRadius:2}} />
              <div style={{fontSize:12,color:"rgb(97,97,97)",marginBottom:4}}>{a.cat}</div>
              <h3 style={{fontSize:15,fontWeight:600,color:"#242424",margin:"0 0 4px 0",lineHeight:"20px"}}>{a.title}</h3>
              <Link to="/support" style={{fontSize:12,color:"#363636",textDecoration:"none"}}>Get started</Link>
            </div>
          ))}
        </div>
      </section>
      <section style={{background:"rgb(242,242,242)",padding:"48px 48px"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <h2 style={{fontSize:36.4,fontWeight:400,lineHeight:"normal",color:"#000000",margin:"0 0 24px 0"}}>Additional resources and support</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
            {articles.slice(8,11).map((a,i)=>(
              <div key={i} style={{background:"#fff",padding:16,borderRadius:2}}>
                <img src={"https://picsum.photos/seed/"+a.img+"/400/200"} alt={a.title} style={{width:"100%",height:80,objectFit:"cover",marginBottom:8,borderRadius:2}} />
                <h3 style={{fontSize:15,fontWeight:600,color:"#242424",margin:"0 0 4px 0",lineHeight:"20px"}}>{a.title}</h3>
                <Link to="/support" style={{fontSize:12,color:"#363636",textDecoration:"none"}}>Learn more</Link>
              </div>
            ))}
          </div>
          <div style={{display:"flex",gap:8,flexWrap:"wrap",marginTop:24}}>
            {resources.map((r,i)=>(<Link key={i} to="/support" style={{fontSize:13,color:"#363636",textDecoration:"none",padding:"4px 12px",background:"#fff",borderRadius:2}}>{r}</Link>))}
          </div>
        </div>
      </section>
      <div style={{display:"flex",flexWrap:"wrap",gap:2,padding:"24px 48px",justifyContent:"center"}}>
        {flinks.map((l,i)=>(<Link key={i} to="/support" style={{fontSize:11,color:"#616161",lineHeight:"16px",textDecoration:"none",padding:"2px 4px"}}>{l}</Link>))}
      </div>
    </div>
  )
}