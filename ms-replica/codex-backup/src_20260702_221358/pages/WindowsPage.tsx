export default function WindowsPage() {
  const questions = ["About Windows 11","Latest version","What can you do?","Copilot on Windows","AI features","Local AI","Download Windows 11"]
  const diffs = ["A wide world of PCs","Faster ways to work","Peace of mind","More games","Find your apps","Security","Performance","Gaming","Creativity","Productivity","Education","Business","Developer","IT Pro","Partners","Ecosystem"]
  return (
    <div style={{fontFamily:'"Segoe UI Variable Text","Segoe UI",system-ui,sans-serif',background:"#fff",color:"#020202",lineHeight:"24px",fontWeight:400}}>
      <h2 style={{fontSize:13,fontWeight:400,lineHeight:"19.5px",color:"#000",margin:0,padding:"4px 48px"}}>Global</h2>
      <section style={{background:"#000",padding:"80px 48px",color:"#fff"}}>
        <h1 style={{fontSize:56,fontWeight:600,lineHeight:"78.4px",color:"#fff",margin:"0 0 16px 0"}}>It starts on Windows</h1>
        <p style={{fontSize:20,fontWeight:400,color:"#fff",lineHeight:"24px",maxWidth:500,margin:"0 0 24px 0"}}>Designed for hybrid work. Built for AI.</p>
        <div style={{display:"flex",gap:24}}>
          <a href="#" style={{background:"#0078D4",color:"#fff",padding:"8px 20px",fontSize:16,fontWeight:400,textDecoration:"none"}}>Learn about Windows 11</a>
          <a href="#" style={{color:"#fff",fontSize:16,fontWeight:400,textDecoration:"none"}}>Buy Windows 11</a>
        </div>
      </section>
      <section style={{padding:"48px 48px",background:"#fff"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <h2 style={{fontSize:32,fontWeight:400,color:"#000",lineHeight:"38px",margin:"0 0 24px 0"}}>Snap to it</h2>
          <img src="https://picsum.photos/seed/win_snap/1200/400" alt="Snap" style={{width:"100%",height:250,objectFit:"cover",borderRadius:2,marginBottom:24}} />
          <p style={{fontSize:16,fontWeight:400,color:"#000",lineHeight:"24px",maxWidth:800,margin:"0 0 16px 0"}}>Snap Layouts for efficient screen organization.</p>
          <a href="#" style={{fontSize:16,color:"#fff",fontWeight:400,textDecoration:"none"}}>Learn more</a>
        </div>
      </section>
      <section style={{padding:"48px 48px",background:"#f2f2f2"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <h2 style={{fontSize:32,fontWeight:400,color:"#000",lineHeight:"38px",margin:"0 0 24px 0"}}>Productivity, accelerated</h2>
          <img src="https://picsum.photos/seed/win_prod/1200/400" alt="Productivity" style={{width:"100%",height:250,objectFit:"cover",borderRadius:2,marginBottom:24}} />
          <p style={{fontSize:16,fontWeight:400,color:"#000",lineHeight:"24px",maxWidth:800,margin:"0 0 16px 0"}}>AI-powered tools for more.</p>
          <a href="#" style={{fontSize:16,color:"#fff",fontWeight:400,textDecoration:"none"}}>Learn more</a>
        </div>
      </section>
      <section style={{padding:"48px 48px",background:"#fff"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <h2 style={{fontSize:32,fontWeight:400,color:"#000",lineHeight:"38px",margin:"0 0 24px 0"}}>Ready. Set. Game on.</h2>
          <img src="https://picsum.photos/seed/win_game/1200/400" alt="Gaming" style={{width:"100%",height:250,objectFit:"cover",borderRadius:2,marginBottom:24}} />
          <p style={{fontSize:16,fontWeight:400,color:"#000",lineHeight:"24px",maxWidth:800,margin:"0 0 16px 0"}}>DirectX 12 and Auto HDR.</p>
          <a href="#" style={{fontSize:16,color:"#fff",fontWeight:400,textDecoration:"none"}}>Learn more</a>
        </div>
      </section>
      <section style={{padding:"48px 48px",background:"#f2f2f2"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <h2 style={{fontSize:48,fontWeight:600,color:"#000",lineHeight:"56px",margin:"0 0 32px 0"}}>The Windows difference</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>
            {diffs.slice(0,8).map((d,i)=>(
              <div key={i} style={{background:"#fff",padding:20,borderRadius:2}}>
                <img src={"https://picsum.photos/seed/wind_"+i+"/400/200"} alt={d} style={{width:"100%",height:100,objectFit:"cover",marginBottom:8,borderRadius:2}} />
                <h2 style={{fontSize:20,fontWeight:600,color:"#000",lineHeight:"24px",margin:"0 0 4px 0"}}>{d}</h2>
                <a href="#" style={{fontSize:16,color:"#fff",fontWeight:400,textDecoration:"none"}}>Learn</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{padding:"48px 48px",background:"#fff"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <h2 style={{fontSize:48,fontWeight:600,color:"#000",lineHeight:"56px",margin:"0 0 32px 0"}}>Say hello to security</h2>
          <img src="https://picsum.photos/seed/win_sec/1200/400" alt="Security" style={{width:"100%",height:250,objectFit:"cover",borderRadius:2,marginBottom:24}} />
          <p style={{fontSize:16,fontWeight:400,color:"#000",lineHeight:"24px",maxWidth:600,margin:"0 0 16px 0"}}>Built-in security for everyone.</p>
          <a href="#" style={{fontSize:16,color:"#fff",fontWeight:400,textDecoration:"none"}}>Learn more</a>
        </div>
      </section>
      <section style={{padding:"48px 48px",background:"#f2f2f2"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <h2 style={{fontSize:48,fontWeight:600,color:"#000",lineHeight:"56px",margin:"0 0 32px 0"}}>Find your perfect PC</h2>
          <img src="https://picsum.photos/seed/win_pc/1200/400" alt="PC" style={{width:"100%",height:250,objectFit:"cover",borderRadius:2,marginBottom:24}} />
          <p style={{fontSize:16,fontWeight:400,color:"#000",lineHeight:"24px",maxWidth:800,margin:"0 0 16px 0"}}>Find the right Windows device.</p>
          <a href="#" style={{fontSize:16,color:"#fff",fontWeight:400,textDecoration:"none"}}>Compare PCs</a>
        </div>
      </section>
      <section style={{padding:"48px 48px",background:"#fff"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <h2 style={{fontSize:48,fontWeight:600,color:"#000",lineHeight:"56px",margin:"0 0 32px 0"}}>Discover more of Windows</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>
            {diffs.slice(8,16).map((d,i)=>(
              <div key={i} style={{background:"#f2f2f2",padding:20,borderRadius:2}}>
                <img src={"https://picsum.photos/seed/wind2_"+i+"/400/200"} alt={d} style={{width:"100%",height:100,objectFit:"cover",marginBottom:8,borderRadius:2}} />
                <h2 style={{fontSize:20,fontWeight:600,color:"#000",lineHeight:"24px",margin:"0 0 4px 0"}}>{d}</h2>
                <a href="#" style={{fontSize:16,color:"#fff",fontWeight:400,textDecoration:"none"}}>Learn</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{padding:"48px 48px",background:"#f2f2f2"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <h2 style={{fontSize:48,fontWeight:600,color:"#000",lineHeight:"56px",margin:"0 0 32px 0"}}>Windows vs. others</h2>
          <img src="https://picsum.photos/seed/win_vs/1200/400" alt="Compare" style={{width:"100%",height:250,objectFit:"cover",borderRadius:2,marginBottom:24}} />
          <p style={{fontSize:16,fontWeight:400,color:"#000",lineHeight:"24px",maxWidth:800,margin:"0 0 16px 0"}}>See why Windows 11 is best.</p>
          <a href="#" style={{fontSize:16,color:"#fff",fontWeight:400,textDecoration:"none"}}>Learn more</a>
        </div>
      </section>
      <section style={{padding:"48px 48px",background:"#fff"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <h2 style={{fontSize:32,fontWeight:600,color:"#000",lineHeight:"38px",margin:"0 0 24px 0"}}>Questions about Windows 11?</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>
            {questions.map((q,i)=>(
              <div key={i} style={{background:"#f2f2f2",padding:16,borderRadius:2}}>
                <h2 style={{fontSize:16,fontWeight:600,color:"#000",lineHeight:"20px",margin:"0 0 8px 0"}}>{q}</h2>
                <a href="#" style={{fontSize:16,color:"#fff",fontWeight:400,textDecoration:"none"}}>Learn</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}