export default function HomePage() {
  const products = [
    {name:"Surface Pro",desc:"Copilot+ PC. The most powerful Pro.",price:"From $999.99",link:"Shop now"},
    {name:"Surface Laptop",desc:"Copilot+ PC. Ultra-thin, ultra-light.",price:"From $899.99",link:"Shop now"},
    {name:"Xbox Series X",desc:"The fastest, most powerful Xbox ever.",price:"From $499.99",link:"Shop now"},
    {name:"Microsoft 365",desc:"Premium apps, extra cloud storage, advanced security.",price:"From $6.99/mo",link:"Learn more"},
    {name:"Copilot",desc:"Your AI companion.",price:"Free",link:"Learn more"},
    {name:"Teams",desc:"Chat, meet, call, collaborate.",price:"Free",link:"Learn more"},
    {name:"Windows 11",desc:"Designed for hybrid work.",price:"From $139",link:"Shop now"},
    {name:"Xbox Game Pass",desc:"Play hundreds of games.",price:"From $9.99/mo",link:"Join now"},
  ]
  const stories = [
    {title:"Reshaping cancer treatment",desc:"How AI is transforming oncology research.",link:"Learn more"},
    {title:"A real-world guide to using AI",desc:"Practical tips for integrating AI.",link:"Get the guide"},
    {title:"Small efficiencies, real-world impact",desc:"How businesses use AI to do more.",link:"Read the story"},
  ]
  const socialLinks = ["Facebook","Twitter","LinkedIn","YouTube","Instagram","TikTok","Reddit","GitHub"]
  const footerSections = [
    {title:"What is new",links:["Surface Pro","Surface Laptop","Surface Laptop Ultra","Copilot","Windows 11","Microsoft 365"]},
    {title:"Microsoft Store",links:["Account Profile","Download Center","Microsoft Store Support","Returns","Order tracking","Store locations","Gift cards","Student discounts"]},
    {title:"Education",links:["Microsoft in Education","Devices for Education","Microsoft Teams for Education","Microsoft 365 Education","Office Education","Educator training","Deals for students"]},
    {title:"Business",links:["Microsoft Cloud","Azure","Dynamics 365","Microsoft 365","Microsoft Power Platform","Microsoft Advertising","Copilot for Business"]},
    {title:"Developer & IT",links:["Visual Studio",".NET","Windows Server","Azure DevOps","Microsoft 365 Dev Center","Learn","Documentation"]},
    {title:"Company",links:["Careers","About Microsoft","Company News","Privacy at Microsoft","Investors","Diversity and inclusion","Sustainability"]},
  ]
  return (
    <div style={{fontFamily:'"Segoe UI Variable Text","Segoe UI",system-ui,sans-serif',color:"#000",background:"#fff",fontWeight:400,lineHeight:"24px"}}>
      <div style={{background:"#fff",display:"flex",flexDirection:"column",alignItems:"center",padding:"80px 48px"}}>
        <div style={{maxWidth:1200,width:"100%"}}>
          <h1 style={{fontSize:48,fontWeight:500,lineHeight:"56px",color:"#f4fafd",margin:"0 0 12px 0"}}>New from Surface for Business</h1>
          <p style={{fontSize:16,fontWeight:400,lineHeight:"24px",color:"#000",margin:"0 0 24px 0"}}>Back to school is here - students save 10% on select Surface and more.</p>
          <div style={{display:"flex",gap:12}}>
            <a href="#" style={{background:"#0078D4",color:"#fff",padding:"6px 20px",fontSize:16,fontWeight:400,textDecoration:"none"}}>Shop now</a>
            <a href="#" style={{color:"#0067b8",fontSize:16,fontWeight:400,textDecoration:"none"}}>Pre-order Surface Laptop for Business</a>
          </div>
        </div>
        <div style={{marginTop:48,display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16,width:"100%",maxWidth:1200}}>
          {products.slice(0,4).map((p,i)=>(
            <div key={i} style={{background:"#f2f2f2",padding:24,borderRadius:2}}>
              <img src={"https://picsum.photos/seed/ms"+i+"/400/300"} alt={p.name} style={{width:"100%",height:180,objectFit:"cover",marginBottom:16,borderRadius:2}} />
              <h3 style={{fontSize:20,fontWeight:600,color:"#0e1726",margin:"0 0 4px 0",lineHeight:"28px"}}>{p.name}</h3>
              <p style={{fontSize:13,fontWeight:400,color:"#000",lineHeight:"20px",margin:"0 0 8px 0"}}>{p.desc}</p>
              <div style={{display:"flex",gap:8}}>
                <a href="#" style={{fontSize:13,color:"#0067b8",fontWeight:400,textDecoration:"none"}}>{p.link}</a>
                <a href="#" style={{fontSize:13,color:"#0067b8",fontWeight:400,textDecoration:"none"}}>Learn more</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{background:"#f2f2f2",padding:"48px 48px",display:"flex",flexDirection:"column",alignItems:"center"}}>
        <div style={{maxWidth:1200,width:"100%"}}>
          <h2 style={{fontSize:62,fontWeight:500,lineHeight:"72px",color:"#0e1726",margin:"0 0 24px 0"}}>More from Microsoft</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>
            {products.map((p,i)=>(
              <div key={i} style={{background:"#fff",padding:16,borderRadius:2}}>
                <img src={"https://picsum.photos/seed/ms2_"+i+"/400/200"} alt={p.name} style={{width:"100%",height:120,objectFit:"cover",marginBottom:8,borderRadius:2}} />
                <h3 style={{fontSize:20,fontWeight:600,color:"#0e1726",margin:"0 0 4px 0",lineHeight:"28px"}}>{p.name}</h3>
                <p style={{fontSize:13,fontWeight:400,color:"#000",lineHeight:"20px",margin:"0 0 8px 0"}}>{p.desc}</p>
                <a href="#" style={{fontSize:13,color:"#0067b8",fontWeight:400,textDecoration:"none"}}>{p.link}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{background:"#fff",padding:"48px 48px",display:"flex",flexDirection:"column",alignItems:"center"}}>
        <div style={{maxWidth:1200,width:"100%",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
          <div style={{background:"#f2f2f2",padding:24,borderRadius:2}}>
            <img src="https://picsum.photos/seed/feat1/400/200" alt="" style={{width:"100%",height:120,objectFit:"cover",marginBottom:12,borderRadius:2}} />
            <h2 style={{fontSize:20,fontWeight:600,color:"#000",margin:"0 0 8px 0",lineHeight:"24px"}}>Your productivity, supercharged</h2>
            <p style={{fontSize:13,fontWeight:400,color:"#000",lineHeight:"20px",margin:"0 0 8px 0"}}>Discover Microsoft 365 Copilot.</p>
            <a href="#" style={{fontSize:13,color:"#0067b8",fontWeight:400,textDecoration:"none"}}>Learn more</a>
          </div>
          <div style={{background:"#f2f2f2",padding:24,borderRadius:2}}>
            <img src="https://picsum.photos/seed/feat2/400/200" alt="" style={{width:"100%",height:120,objectFit:"cover",marginBottom:12,borderRadius:2}} />
            <h2 style={{fontSize:20,fontWeight:600,color:"#000",margin:"0 0 8px 0",lineHeight:"24px"}}>XBOX Series X</h2>
            <p style={{fontSize:13,fontWeight:400,color:"#000",lineHeight:"20px",margin:"0 0 8px 0"}}>The fastest, most powerful Xbox ever.</p>
            <a href="#" style={{fontSize:13,color:"#0067b8",fontWeight:400,textDecoration:"none"}}>Shop now</a>
          </div>
          <div style={{background:"#f2f2f2",padding:24,borderRadius:2}}>
            <img src="https://picsum.photos/seed/feat3/400/200" alt="" style={{width:"100%",height:120,objectFit:"cover",marginBottom:12,borderRadius:2}} />
            <h2 style={{fontSize:20,fontWeight:600,color:"#000",margin:"0 0 8px 0",lineHeight:"24px"}}>Meet the latest Surface Laptop</h2>
            <p style={{fontSize:13,fontWeight:400,color:"#000",lineHeight:"20px",margin:"0 0 8px 0"}}>Ultra-thin, ultra-light, ultra-powerful.</p>
            <a href="#" style={{fontSize:13,color:"#0067b8",fontWeight:400,textDecoration:"none"}}>Learn more</a>
          </div>
        </div>
      </div>
      <div style={{background:"#000",color:"#fff",padding:"48px 0",display:"flex",flexDirection:"column",alignItems:"center"}}>
        <div style={{maxWidth:1200,width:"100%",padding:"0 48px"}}>
          <h2 style={{fontSize:48,fontWeight:500,lineHeight:"56px",color:"#fff",margin:"0 0 16px 0"}}>Born to flex</h2>
          <p style={{fontSize:16,fontWeight:400,lineHeight:"24px",color:"#fff",margin:"0 0 24px 0"}}>Surface Pro 12-inch: the most flexible 2-in-1.</p>
          <a href="#" style={{color:"#0067b8",fontSize:16,fontWeight:400,textDecoration:"none"}}>Shop Surface Pro</a>
        </div>
      </div>
      <div style={{background:"#fff",padding:"48px 0",display:"flex",flexDirection:"column",alignItems:"center"}}>
        <div style={{maxWidth:1200,width:"100%",padding:"0 48px"}}>
          <h2 style={{fontSize:48,fontWeight:500,lineHeight:"56px",color:"#0e1726",margin:"0 0 24px 0"}}>Microsoft 365 Copilot</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>
            {[{name:"Copilot",desc:"AI-powered assistant"},{name:"Word",desc:"Write with confidence"},{name:"Excel",desc:"Analyze with AI"},{name:"PowerPoint",desc:"Create stunning"}].map((p,i)=>(
              <div key={i} style={{background:"#f2f2f2",padding:16,borderRadius:2}}>
                <img src={"https://picsum.photos/seed/copilot"+i+"/400/200"} alt={p.name} style={{width:"100%",height:100,objectFit:"cover",marginBottom:8,borderRadius:2}} />
                <h3 style={{fontSize:20,fontWeight:600,color:"#0e1726",margin:"0 0 4px 0",lineHeight:"28px"}}>{p.name}</h3>
                <p style={{fontSize:13,fontWeight:400,color:"#000",lineHeight:"20px",margin:"0 0 8px 0"}}>{p.desc}</p>
                <a href="#" style={{fontSize:13,color:"#0067b8",fontWeight:400,textDecoration:"none"}}>Learn more</a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{background:"#f2f2f2",padding:"48px 0",display:"flex",flexDirection:"column",alignItems:"center"}}>
        <div style={{maxWidth:1200,width:"100%",padding:"0 48px"}}>
          <h2 style={{fontSize:48,fontWeight:500,lineHeight:"56px",color:"#0e1726",margin:"0 0 24px 0"}}>Get to know AI and Copilot</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
            {stories.map((s,i)=>(
              <div key={i} style={{background:"#fff",padding:24,borderRadius:2}}>
                <img src={"https://picsum.photos/seed/story"+i+"/400/200"} alt={s.title} style={{width:"100%",height:120,objectFit:"cover",marginBottom:12,borderRadius:2}} />
                <h3 style={{fontSize:20,fontWeight:600,color:"#0e1726",margin:"0 0 8px 0",lineHeight:"28px"}}>{s.title}</h3>
                <p style={{fontSize:13,fontWeight:400,color:"#000",lineHeight:"20px",margin:"0 0 8px 0"}}>{s.desc}</p>
                <a href="#" style={{fontSize:13,color:"#0067b8",fontWeight:400,textDecoration:"none"}}>{s.link}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{background:"#fff",padding:"24px 0",display:"flex",justifyContent:"center"}}>
        <div style={{maxWidth:1200,width:"100%",padding:"0 48px",display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"}}>
          <span style={{fontSize:16,fontWeight:600,color:"#000"}}>Follow Microsoft</span>
          {socialLinks.map((n,i)=>(<a key={i} href="#" style={{fontSize:13,color:"#262626",fontWeight:400,textDecoration:"none"}}>{n}</a>))}
        </div>
      </div>
    </div>
  )
}