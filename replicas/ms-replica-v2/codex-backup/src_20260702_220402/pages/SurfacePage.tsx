export default function SurfacePage() {
  const products = ["Surface Pro","Surface Laptop","Surface Laptop Ultra","Surface Studio","Surface Hub","Surface Go","Surface Book","Surface Duo","Surface Laptop Go"]
  const accessories = ["Surface Pen","Surface Keyboard","Surface Dock","Surface Mouse","Surface Earbuds","Surface Headphones","Thunderbolt 4 Dock","Slim Pen 2","Surface USB-C Hub"]
  const questions = [
    {q:"What is Microsoft Surface?",a:"Surface is a family of premium devices designed for productivity and creativity."},
    {q:"Is Surface good for gaming?",a:"With powerful processors and graphics, Surface delivers great gaming performance."},
    {q:"Which Microsoft Surface should I buy?",a:"Consider your needs: Pro for versatility, Laptop for performance, Studio for creativity."},
    {q:"Does Surface come with Microsoft 365?",a:"Many Surface devices include a trial of Microsoft 365."},
    {q:"What is Surface RTX Spark Dev Box?",a:"A developer-focused device with RTX graphics for AI and compute workloads."},
    {q:"What is Surface Laptop Ultra?",a:"The premium ultra-thin laptop with advanced AI capabilities."},
  ]
  return (
    <div style={{fontWeight:350,lineHeight:"24px",fontFamily:'"Segoe UI Variable Text","Segoe UI",system-ui,sans-serif',background:"#fff",color:'#000'}}>
      <section style={{background:"#000",padding:"80px 48px",color:"#fff"}}>
        <h1 style={{fontSize:28,fontWeight:350,lineHeight:"39.2px",color:"#fff",margin:"0 0 16px 0"}}>Meet Surface</h1>
        <p style={{fontSize:20,fontWeight:350,color:"#fff",lineHeight:"24px",maxWidth:600}}>The most versatile laptop with tablet portability, touchscreen, and Surface Pen support.</p>
        <div style={{display:"flex",gap:24,marginTop:24}}>
          <a href="#" style={{background:"#0078D4",color:"#fff",padding:"8px 20px",fontSize:16,fontWeight:350,textDecoration:"none"}}>Shop Surface</a>
          <a href="#" style={{color:"#0078D4",fontSize:16,fontWeight:350,textDecoration:"none"}}>Learn more</a>
        </div>
      </section>
      <section style={{padding:"48px 48px",color:"#000"}}>
        <h2 style={{fontSize:32,fontWeight:350,color:"#0e1726",lineHeight:"38px",margin:"0 0 24px 0"}}>Effortlessly exceptional</h2>
        <img src="https://picsum.photos/seed/surface_hero/1200/400" alt="Surface" style={{width:"100%",height:300,objectFit:"cover",borderRadius:2,marginBottom:32}} />
        <p style={{fontSize:16,fontWeight:350,color:'#000',lineHeight:"24px",margin:"0 0 24px 0",maxWidth:800}}>Surface devices combine the best of laptop, tablet, and digital canvas in one premium device.</p>
        <a href="#" style={{fontSize:13,color:"#0078D4",fontWeight:350,textDecoration:"none"}}>Learn more about Surface</a>
      </section>
      <section style={{padding:"48px 48px",background:"#f2f2f2",color:"#000"}}>
        <h2 style={{fontSize:32,fontWeight:350,color:"#0e1726",lineHeight:"38px",margin:"0 0 24px 0"}}>A screen you'll savor</h2>
        <p style={{fontSize:16,fontWeight:350,color:'#000',lineHeight:"24px",margin:"0 0 24px 0",maxWidth:800}}>PixelSense displays with high refresh rates and vibrant colors.</p>
        <a href="#" style={{fontSize:13,color:"#0078D4",fontWeight:350,textDecoration:"none"}}>Explore displays</a>
      </section>
      <section style={{padding:"48px 48px",color:"#000"}}>
        <h2 style={{fontSize:32,fontWeight:350,color:"#0e1726",lineHeight:"38px",margin:"0 0 24px 0"}}>Easy to carry. Ready for anything.</h2>
        <p style={{fontSize:16,fontWeight:350,color:'#000',lineHeight:"24px",margin:"0 0 24px 0",maxWidth:800}}>Ultra-light designs starting at just 1.7 pounds.</p>
        <a href="#" style={{fontSize:13,color:"#0078D4",fontWeight:350,textDecoration:"none"}}>See portability</a>
      </section>
      <section style={{padding:"48px 48px",background:"#f2f2f2",color:"#000"}}>
        <h2 style={{fontSize:32,fontWeight:350,color:"#0e1726",lineHeight:"38px",margin:"0 0 24px 0"}}>Colors you crave</h2>
        <p style={{fontSize:16,fontWeight:350,color:'#000',lineHeight:"24px",margin:"0 0 24px 0",maxWidth:800}}>Available in Platinum, Graphite, Sand, and Sapphire.</p>
        <a href="#" style={{fontSize:13,color:"#0078D4",fontWeight:350,textDecoration:"none"}}>See colors</a>
      </section>
      <section style={{padding:"48px 48px",color:"#000"}}>
        <h2 style={{fontSize:48,fontWeight:350,color:"#0e1726",lineHeight:"56px",margin:"0 0 32px 0"}}>Find your Surface</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
          {["Surface Pro","Surface Laptop","Surface Laptop Ultra","Accessories","Surface Studio","Surface Hub"].map((n,i)=>(
            <div key={i} style={{background:"#f2f2f2",padding:24,borderRadius:2,textAlign:"center"}}>
              <img src={"https://picsum.photos/seed/surf_"+i+"/400/250"} alt={n} style={{width:"100%",height:160,objectFit:"cover",marginBottom:12,borderRadius:2}} />
              <h2 style={{fontSize:32,fontWeight:350,color:"#0e1726",lineHeight:"38px",margin:"0 0 12px 0"}}>{n}</h2>
              <a href="#" style={{fontSize:13,color:"#0078D4",fontWeight:350,textDecoration:"none"}}>Shop now</a>
            </div>
          ))}
        </div>
      </section>
      <section style={{padding:"48px 48px",background:"#f2f2f2",color:"#000"}}>
        <h2 style={{fontSize:48,fontWeight:350,color:"#0e1726",lineHeight:"56px",margin:"0 0 32px 0"}}>Learn more about Surface</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
          <div style={{background:"#fff",padding:24,borderRadius:2}}>
            <h2 style={{fontSize:20,fontWeight:350,color:"#0e1726",lineHeight:"24px",margin:"0 0 8px 0"}}>Find files faster</h2>
            <p style={{fontSize:13,fontWeight:350,color:'#000',lineHeight:"20px",margin:"0 0 8px 0"}}>Surface works with Windows 11 search to find what you need instantly.</p>
            <a href="#" style={{fontSize:13,color:"#0078D4",fontWeight:350,textDecoration:"none"}}>Learn</a>
          </div>
          <div style={{background:"#fff",padding:24,borderRadius:2}}>
            <h2 style={{fontSize:20,fontWeight:350,color:"#0e1726",lineHeight:"24px",margin:"0 0 8px 0"}}>All the apps you need</h2>
            <p style={{fontSize:13,fontWeight:350,color:'#000',lineHeight:"20px",margin:"0 0 8px 0"}}>Run your favorite apps including Adobe, Office, and more.</p>
            <a href="#" style={{fontSize:13,color:"#0078D4",fontWeight:350,textDecoration:"none"}}>Learn</a>
          </div>
          <div style={{background:"#fff",padding:24,borderRadius:2}}>
            <h2 style={{fontSize:20,fontWeight:350,color:"#0e1726",lineHeight:"24px",margin:"0 0 8px 0"}}>Create pics in a flash</h2>
            <p style={{fontSize:13,fontWeight:350,color:'#000',lineHeight:"20px",margin:"0 0 8px 0"}}>Surface Pen and touchscreen make photo editing intuitive.</p>
            <a href="#" style={{fontSize:13,color:"#0078D4",fontWeight:350,textDecoration:"none"}}>Learn</a>
          </div>
        </div>
      </section>
      <section style={{padding:"48px 48px",color:"#000"}}>
        <h2 style={{fontSize:32,fontWeight:350,color:"#0e1726",lineHeight:"38px",margin:"0 0 24px 0"}}>Questions</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
          {questions.map((q,i)=>(
            <div key={i} style={{background:"#f2f2f2",padding:24,borderRadius:2}}>
              <h2 style={{fontSize:20,fontWeight:350,color:"#0e1726",lineHeight:"24px",margin:"0 0 8px 0"}}>{q.q}</h2>
              <p style={{fontSize:13,fontWeight:350,color:'#000',lineHeight:"20px",margin:"0"}}>{q.a}</p>
            </div>
          ))}
        </div>
      </section>
      <section style={{padding:"48px 48px",background:"#f2f2f2",color:"#000"}}>
        <h2 style={{fontSize:32,fontWeight:350,color:"#0e1726",lineHeight:"38px",margin:"0 0 24px 0"}}>Accessories</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
          {accessories.map((a,i)=>(
            <div key={i} style={{background:"#fff",padding:16,borderRadius:2}}>
              <img src={"https://picsum.photos/seed/acc_"+i+"/400/200"} alt={a} style={{width:"100%",height:100,objectFit:"cover",marginBottom:8,borderRadius:2}} />
              <h2 style={{fontSize:20,fontWeight:350,color:"#0e1726",lineHeight:"24px",margin:"0 0 4px 0"}}>{a}</h2>
              <a href="#" style={{fontSize:13,color:"#0078D4",fontWeight:350,textDecoration:"none"}}>Shop now</a>
              <a href="#" style={{fontSize:13,color:"#262626",fontWeight:350,textDecoration:"none",marginLeft:8}}>Details</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}