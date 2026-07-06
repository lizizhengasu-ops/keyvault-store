import { Link } from "react-router-dom"
import { useLayoutEffect } from "react"
export default function SurfacePage() {
  const products = ["Surface Pro","Surface Laptop","Surface Laptop Ultra","Surface Studio","Surface Hub","Surface Go","Surface Book","Surface Duo","Surface Laptop Go"]
  const accessories = ["Surface Pen","Surface Keyboard","Surface Dock","Surface Mouse","Surface Earbuds","Surface Headphones","Thunderbolt 4 Dock","Slim Pen 2","Surface USB-C Hub"]
  return (
    <div style={{fontWeight:350,lineHeight:"24px",fontFamily:'"Segoe UI Variable Text","Segoe UI",system-ui,sans-serif',background:"#fff",color:"#000"}}>
      <h2 style={{fontSize:13,fontWeight:350,lineHeight:"19.5px",color:"#000",margin:0,padding:"4px 48px"}}>Global</h2>
      <section style={{background:"#000",padding:"80px 48px",color:"#fff"}}>
        <h1 style={{fontSize:28,fontWeight:350,lineHeight:"39.2px",color:"#fff",margin:"0 0 16px 0"}}>Meet Surface</h1>
        <p style={{fontSize:72,fontWeight:350,color:"#fff",lineHeight:"72px",maxWidth:600,margin:"0 0 24px 0"}}>The most versatile laptop with tablet portability, touchscreen, and Surface Pen support.</p>
        <div style={{display:"flex",gap:24}}>
          <Link to="/store" style={{background:"#0078D4",color:"#fff",padding:"8px 20px",fontSize:16,fontWeight:350,textDecoration:"none"}}>Shop Surface</Link>
          <Link to="/store" style={{color:"#0067b8",fontSize:16,fontWeight:350,textDecoration:"none"}}>Learn more</Link>
        </div>
      </section>
      <section style={{padding:"48px 48px",color:"#000"}}>
        <h2 style={{fontSize:32,fontWeight:350,color:"#000",lineHeight:"38px",margin:"0 0 24px 0"}}>Effortlessly exceptional</h2>
        <img src="https://picsum.photos/seed/surface_hero/1200/400" alt="Surface" style={{width:"100%",height:300,objectFit:"cover",borderRadius:2,marginBottom:32}} />
        <p style={{fontSize:16,fontWeight:350,color:"#000",lineHeight:"24px",margin:"0 0 24px 0",maxWidth:800}}>Surface combines laptop, tablet, and canvas.</p>
        <Link to="/store" style={{fontSize:16,color:"#000",fontWeight:350,textDecoration:"none"}}>Learn more</Link>
      </section>
      <section style={{padding:"48px 48px",background:"#f2f2f2",color:"#000"}}>
        <h2 style={{fontSize:32,fontWeight:350,color:"#000",lineHeight:"38px",margin:"0 0 24px 0"}}>A screen you will savor</h2>
        <p style={{fontSize:16,fontWeight:350,color:"#000",lineHeight:"24px",margin:"0 0 24px 0",maxWidth:800}}>PixelSense displays.</p>
        <Link to="/store" style={{fontSize:16,color:"#000",fontWeight:350,textDecoration:"none"}}>Explore</Link>
      </section>
      <section style={{padding:"48px 48px",color:"#000"}}>
        <h2 style={{fontSize:32,fontWeight:350,color:"#000",lineHeight:"38px",margin:"0 0 24px 0"}}>Easy to carry</h2>
        <p style={{fontSize:16,fontWeight:350,color:"#000",lineHeight:"24px",margin:"0 0 24px 0",maxWidth:800}}>Ultra-light designs.</p>
        <Link to="/store" style={{fontSize:16,color:"#000",fontWeight:350,textDecoration:"none"}}>See portability</Link>
      </section>
      <section style={{padding:"48px 48px",background:"#f2f2f2",color:"#000"}}>
        <h2 style={{fontSize:32,fontWeight:350,color:"#000",lineHeight:"38px",margin:"0 0 24px 0"}}>Colors you crave</h2>
        <p style={{fontSize:16,fontWeight:350,color:"#000",lineHeight:"24px",margin:"0 0 24px 0",maxWidth:800}}>Available in Platinum, Graphite, Sand, Sapphire.</p>
        <Link to="/store" style={{fontSize:16,color:"#000",fontWeight:350,textDecoration:"none"}}>See colors</Link>
      </section>
      <section style={{padding:"48px 48px",color:"#000"}}>
        <h2 style={{fontSize:48,fontWeight:350,color:"#000",lineHeight:"56px",margin:"0 0 32px 0"}}>Find your Surface</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
          {["Surface Pro","Surface Laptop","Surface Laptop Ultra","Accessories","Surface Studio","Surface Hub"].map((n,i)=>(
            <div key={i} style={{background:"#f2f2f2",padding:24,borderRadius:2,textAlign:"center"}}>
              <img src={"https://picsum.photos/seed/surf_"+i+"/400/250"} alt={n} style={{width:"100%",height:160,objectFit:"cover",marginBottom:12,borderRadius:2}} />
              <h2 style={{fontSize:32,fontWeight:350,color:"#000",lineHeight:"38px",margin:"0 0 12px 0"}}>{n}</h2>
              <Link to="/store" style={{fontSize:16,color:"#000",fontWeight:350,textDecoration:"none"}}>Shop now</Link>
            </div>
          ))}
        </div>
      </section>
      <section style={{padding:"48px 48px",background:"#f2f2f2",color:"#000",fontWeight:350}}>
        <h2 style={{fontSize:48,fontWeight:350,color:"#000",lineHeight:"56px",margin:"0 0 32px 0"}}>Learn more</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
          {["Find files faster","All the apps you need","Create pics in a flash"].map((t,i)=>(
            <div key={i} style={{background:"#fff",padding:24,borderRadius:2}}>
              <h2 style={{fontSize:20,fontWeight:350,color:"#000",lineHeight:"24px",margin:"0 0 8px 0"}}>{t}</h2>
              <p style={{fontSize:13,fontWeight:350,color:"#000",lineHeight:"20px",margin:"0 0 8px 0"}}>Surface feature content.</p>
              <Link to="/store" style={{fontSize:16,color:"#000",fontWeight:350,textDecoration:"none"}}>Learn</Link>
            </div>
          ))}
        </div>
      </section>
      <section style={{padding:"48px 48px",color:"#000"}}>
        <h2 style={{fontSize:32,fontWeight:350,color:"#000",lineHeight:"38px",margin:"0 0 24px 0"}}>Questions about Surface</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
          {["What is Surface?","Is Surface good for gaming?","Which Surface should I buy?"].map((q,i)=>(
            <div key={i} style={{background:"#f2f2f2",padding:24,borderRadius:2}}>
              <h2 style={{fontSize:20,fontWeight:350,color:"#000",lineHeight:"24px",margin:"0 0 8px 0"}}>{q}</h2>
              <p style={{fontSize:13,fontWeight:350,color:"#000",lineHeight:"20px",margin:0}}>Learn about Surface features.</p>
              <Link to="/store" style={{fontSize:16,color:"#000",fontWeight:350,textDecoration:"none",display:"block",marginTop:8}}>Learn</Link>
            </div>
          ))}
        </div>
      </section>
      <section style={{padding:"48px 48px",background:"#f2f2f2",color:"#000"}}>
        <h2 style={{fontSize:32,fontWeight:350,color:"#000",lineHeight:"38px",margin:"0 0 24px 0"}}>Accessories</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
          {accessories.map((a,i)=>(
            <div key={i} style={{background:"#fff",padding:16,borderRadius:2}}>
              <img src={"https://picsum.photos/seed/acc_"+i+"/400/200"} alt={a} style={{width:"100%",height:100,objectFit:"cover",marginBottom:8,borderRadius:2}} />
              <h2 style={{fontSize:20,fontWeight:350,color:"#000",lineHeight:"24px",margin:"0 0 4px 0"}}>{a}</h2>
              <Link to="/store" style={{fontSize:16,color:"#000",fontWeight:350,textDecoration:"none"}}>Shop now</Link>
              <Link to="/store" style={{fontSize:16,color:"#000",fontWeight:350,textDecoration:"none",marginLeft:8}}>Details</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}