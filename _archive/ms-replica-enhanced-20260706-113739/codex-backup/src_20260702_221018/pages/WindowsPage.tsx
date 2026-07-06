export default function WindowsPage() {
  const features = [
    {title:"Snap to it",desc:"Snap Layouts let you organize your screen efficiently."},
    {title:"Productivity, accelerated",desc:"AI-powered tools help you get more done."},
    {title:"Ready. Set. Game on.",desc:"DirectX 12 and Auto HDR for the best gaming."},
  ]
  const windowsDiff = [
    {title:"A wide world of PCs",desc:"Choose from hundreds of Windows 11 devices."},
    {title:"Faster ways to work",desc:"Built-in apps and AI Copilot boost productivity."},
    {title:"Peace of mind, built in",desc:"Advanced security with built-in antivirus and firewall."},
    {title:"More games. More fun.",desc:"Play thousands of games with Xbox Game Pass."},
    {title:"Find your app-y place",desc:"Microsoft Store has all the apps you need."},
  ]
  const questions = [
    "What is Microsoft Windows?","What is the latest Windows version?","What can you do with Windows 11?",
    "What is Copilot on Windows 11?","Does Windows 11 include AI features?","What is local AI on Windows?",
    "How do I download Windows 11?"
  ]
  const stories = [
    {title:"Real Windows stories",desc:"Hear from real users about their Windows experience."},
    {title:"Windows vs. others",desc:"See why Windows 11 is the best choice."},
    {title:"Looking for the perfect Windows PC?",desc:"Find the right device for your needs."},
    {title:"Discover more of Windows",desc:"Explore all the features Windows 11 has to offer."},
    {title:"Questions about Windows 11?",desc:"Start here for answers to common questions."},
  ]
  return (
    <div style={{fontFamily:'"Segoe UI Variable Text","Segoe UI",system-ui,sans-serif',background:"#fff",color:'#000'}}>
      <section style={{background:"#000",padding:"80px 48px",color:"#fff"}}>
        <h1 style={{fontSize:56,fontWeight:600,lineHeight:"67px",color:"#fff",margin:"0 0 16px 0"}}>It starts on Windows</h1>
        <p style={{fontSize:20,fontWeight:400,color:"#fff",lineHeight:"24px",maxWidth:500,margin:"0 0 24px 0"}}>Designed for hybrid work. Built for AI.</p>
        <div style={{display:"flex",gap:24}}>
          <a href="#" style={{background:"#0078D4",color:"#fff",padding:"8px 20px",fontSize:14,fontWeight:400,textDecoration:"none"}}>Learn about Windows 11</a>
          <a href="#" style={{color:"#0078D4",fontSize:14,fontWeight:400,textDecoration:"none"}}>Buy Windows 11</a>
        </div>
      </section>
      <section style={{padding:"48px 48px",background:"#f2f2f2"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <h2 style={{fontSize:32,fontWeight:400,color:"#0e1726",lineHeight:"38px",margin:"0 0 24px 0"}}>Snap to it</h2>
          <img src="https://picsum.photos/seed/win_snap/1200/400" alt="Snap Layouts" style={{width:"100%",height:250,objectFit:"cover",borderRadius:2,marginBottom:24}} />
          <p style={{fontSize:16,fontWeight:400,color:'#000',lineHeight:"24px",maxWidth:800,margin:"0 0 16px 0"}}>Snap Layouts let you organize your screen efficiently with AI-powered suggestions.</p>
          <a href="#" style={{fontSize:13,color:"#0078D4",fontWeight:400,textDecoration:"none"}}>Learn more</a>
        </div>
      </section>
      <section style={{padding:"48px 48px"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <h2 style={{fontSize:32,fontWeight:400,color:"#0e1726",lineHeight:"38px",margin:"0 0 24px 0"}}>Productivity, accelerated</h2>
          <img src="https://picsum.photos/seed/win_prod/1200/400" alt="Productivity" style={{width:"100%",height:250,objectFit:"cover",borderRadius:2,marginBottom:24}} />
          <p style={{fontSize:16,fontWeight:400,color:'#000',lineHeight:"24px",maxWidth:800,margin:"0 0 16px 0"}}>AI-powered tools help you get more done across all your apps.</p>
          <a href="#" style={{fontSize:13,color:"#0078D4",fontWeight:400,textDecoration:"none"}}>Learn more</a>
        </div>
      </section>
      <section style={{padding:"48px 48px",background:"#f2f2f2"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <h2 style={{fontSize:32,fontWeight:400,color:"#0e1726",lineHeight:"38px",margin:"0 0 24px 0"}}>Ready. Set. Game on.</h2>
          <img src="https://picsum.photos/seed/win_game/1200/400" alt="Gaming" style={{width:"100%",height:250,objectFit:"cover",borderRadius:2,marginBottom:24}} />
          <p style={{fontSize:16,fontWeight:400,color:'#000',lineHeight:"24px",maxWidth:800,margin:"0 0 16px 0"}}>DirectX 12 and Auto HDR deliver the best gaming experience on Windows.</p>
          <a href="#" style={{fontSize:13,color:"#0078D4",fontWeight:400,textDecoration:"none"}}>Learn more</a>
        </div>
      </section>
      <section style={{padding:"48px 48px"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <h2 style={{fontSize:48,fontWeight:600,color:"#0e1726",lineHeight:"56px",margin:"0 0 32px 0"}}>The Windows difference</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
            {windowsDiff.map((d,i)=>(
              <div key={i} style={{background:"#f2f2f2",padding:24,borderRadius:2}}>
                <h2 style={{fontSize:16,fontWeight:600,color:"#0e1726",lineHeight:"20px",margin:"0 0 8px 0"}}>{d.title}</h2>
                <p style={{fontSize:13,fontWeight:400,color:'#000',lineHeight:"20px",margin:"0 0 8px 0"}}>{d.desc}</p>
                <a href="#" style={{fontSize:13,color:"#0078D4",fontWeight:400,textDecoration:"none"}}>Learn more</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{padding:"48px 48px",background:"#f2f2f2"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <h2 style={{fontSize:48,fontWeight:600,color:"#0e1726",lineHeight:"56px",margin:"0 0 32px 0"}}>Say hello to security</h2>
          <p style={{fontSize:20,fontWeight:400,color:'#000',lineHeight:"24px",maxWidth:600,margin:"0 0 16px 0"}}>Built-in security that protects you from day one.</p>
          <a href="#" style={{fontSize:13,color:"#0078D4",fontWeight:400,textDecoration:"none"}}>Learn about Windows security</a>
        </div>
      </section>
      <section style={{padding:"48px 48px"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <h2 style={{fontSize:48,fontWeight:600,color:"#0e1726",lineHeight:"56px",margin:"0 0 32px 0"}}>Find your perfect PC</h2>
          <p style={{fontSize:16,fontWeight:400,color:'#000',lineHeight:"24px",maxWidth:800,margin:"0 0 16px 0"}}>Compare models and find the right Windows device for your needs.</p>
          <a href="#" style={{fontSize:13,color:"#0078D4",fontWeight:400,textDecoration:"none"}}>Compare PCs</a>
        </div>
      </section>
      <section style={{padding:"48px 48px",background:"#f2f2f2"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <h2 style={{fontSize:48,fontWeight:600,color:"#0e1726",lineHeight:"56px",margin:"0 0 32px 0"}}>Real Windows stories</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
            {stories.map((s,i)=>(
              <div key={i} style={{background:"#fff",padding:24,borderRadius:2}}>
                <img src={"https://picsum.photos/seed/win_story_"+i+"/400/200"} alt={s.title} style={{width:"100%",height:120,objectFit:"cover",marginBottom:12,borderRadius:2}} />
                <h2 style={{fontSize:20,fontWeight:600,color:"#0e1726",lineHeight:"24px",margin:"0 0 8px 0"}}>{s.title}</h2>
                <p style={{fontSize:13,fontWeight:400,color:'#000',lineHeight:"20px",margin:"0 0 8px 0"}}>{s.desc}</p>
                <a href="#" style={{fontSize:13,color:"#0078D4",fontWeight:400,textDecoration:"none"}}>Explore</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{padding:"48px 48px"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <h2 style={{fontSize:48,fontWeight:600,color:"#0e1726",lineHeight:"56px",margin:"0 0 32px 0"}}>Windows vs. others</h2>
          <p style={{fontSize:16,fontWeight:400,color:'#000',lineHeight:"24px",maxWidth:800,margin:"0 0 16px 0"}}>See why Windows 11 is the most secure, productive, and creative operating system.</p>
          <a href="#" style={{fontSize:13,color:"#0078D4",fontWeight:400,textDecoration:"none"}}>Learn more</a>
        </div>
      </section>
      <section style={{padding:"48px 48px",background:"#f2f2f2"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <h2 style={{fontSize:48,fontWeight:600,color:"#0e1726",lineHeight:"56px",margin:"0 0 32px 0"}}>Discover more of Windows</h2>
          <p style={{fontSize:16,fontWeight:400,color:'#000',lineHeight:"24px",maxWidth:800,margin:"0 0 16px 0"}}>Explore all the features, tools, and capabilities of Windows 11.</p>
          <a href="#" style={{fontSize:13,color:"#0078D4",fontWeight:400,textDecoration:"none"}}>Explore Windows</a>
        </div>
      </section>
      <section style={{padding:"48px 48px"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <h2 style={{fontSize:32,fontWeight:600,color:"#0e1726",lineHeight:"38px",margin:"0 0 24px 0"}}>Questions about Windows 11?</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
            {questions.map((q,i)=>(
              <div key={i} style={{background:"#f2f2f2",padding:16,borderRadius:2}}>
                <h2 style={{fontSize:16,fontWeight:600,color:"#0e1726",lineHeight:"20px",margin:"0"}}>{q}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}