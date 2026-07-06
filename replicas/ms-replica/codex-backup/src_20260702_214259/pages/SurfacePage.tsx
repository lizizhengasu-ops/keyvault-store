export default function SurfacePage() {
  return (
    <div style={{fontWeight:350,lineHeight:"24px"}}>
      <section style={{background:"linear-gradient(180deg,#000 0%,#1a1a1a 100%)",padding:"80px 48px",color:"#fff"}}>
        <h1 style={{fontSize:28,fontWeight:350,lineHeight:"39.2px",color:"#fff",marginBottom:16}}>Surface</h1>
        <p style={{fontSize:72,fontWeight:350,lineHeight:"72px",color:"#fff",maxWidth:500}}>The most versatile laptop with tablet portability, touchscreen, and Surface Pen support.</p>
        <div style={{display:"flex",gap:24}}>
          <a href="#" style={{background:"#0078D4",color:"#fff",padding:"8px 20px",fontSize:16,fontWeight:350}}>Shop Surface</a>
          <a href="#" style={{color:"#0078D4",fontSize:16,fontWeight:350}}>Learn more</a>
        </div>
      </section>
      <section style={{padding:48,background:"#fff",color:"#000"}}>
        <h2 style={{fontSize:13,fontWeight:350,color:"#0e1726",marginBottom:24}}>Products</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
          {["Surface Pro 11","Surface Laptop 7","Surface Studio 2+","Surface Go 4","Surface Hub 3","Surface Duo 3","Surface Book 4","Surface Laptop Go 3","Surface Laptop Studio 2"].map((n,i)=>(
            <div key={i}><h3 style={{fontSize:16,fontWeight:600,color:"#000"}}>{n}</h3><a href="#" style={{fontSize:16,fontWeight:350,color:"#0078D4"}}>Learn</a><a href="#" style={{fontSize:16,fontWeight:350,color:"#262626",marginLeft:8}}>Buy</a><a href="#" style={{fontSize:16,fontWeight:350,color:"#262626",marginLeft:8}}>Compare</a></div>
          ))}
        </div>
      </section>
      <section style={{padding:48,background:"#f2f2f2",color:"#000"}}>
        <h2 style={{fontSize:13,fontWeight:350,color:"#0e1726",marginBottom:24}}>Accessories</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
          {["Surface Pen","Surface Keyboard","Surface Dock","Surface Mouse","Surface Earbuds","Surface Headphones","Thunderbolt 4 Dock","Slim Pen 2","Surface USB-C Hub"].map((n,i)=>(
            <div key={i}><h3 style={{fontSize:16,fontWeight:600,color:"#000"}}>{n}</h3><a href="#" style={{fontSize:16,fontWeight:350,color:"#0078D4"}}>Shop now</a><a href="#" style={{fontSize:16,fontWeight:350,color:"#262626",marginLeft:8}}>Details</a></div>
          ))}
        </div>
      </section>
      <section style={{padding:48,background:"#fff",color:"#000"}}>
        <h2 style={{fontSize:13,fontWeight:350,color:"#0e1726",marginBottom:24}}>Support & Services</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
          {["Setup Help","Windows Updates","Trade-in Program","Business Plans","For Education","Contact Support","Surface Care","Drivers & Firmware","Community Forum"].map((n,i)=>(
            <div key={i}><h3 style={{fontSize:16,fontWeight:600,color:"#000"}}>{n}</h3><a href="#" style={{fontSize:16,fontWeight:350,color:"#0078D4"}}>Get help</a><a href="#" style={{fontSize:16,fontWeight:350,color:"#262626",marginLeft:8}}>Learn</a></div>
          ))}
        </div>
      </section>
      <section style={{padding:48,background:"#f2f2f2",color:"#000"}}>
        <h2 style={{fontSize:13,fontWeight:350,color:"#0e1726",marginBottom:24}}>Compare Surface</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
          {["Pro vs Laptop","Studio vs iMac","Go vs Laptop Go","Hub vs Surface","Duo vs Fold","Book vs Pro"].map((n,i)=>(
            <div key={i}><h3 style={{fontSize:16,fontWeight:600,color:"#000"}}>{n}</h3><a href="#" style={{fontSize:16,fontWeight:350,color:"#0078D4"}}>Compare</a><a href="#" style={{fontSize:16,fontWeight:350,color:"#262626",marginLeft:8}}>Reviews</a></div>
          ))}
        </div>
      </section>
    </div>
  )
}