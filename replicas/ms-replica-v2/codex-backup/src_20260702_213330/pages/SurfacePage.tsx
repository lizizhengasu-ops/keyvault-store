export default function SurfacePage() {
  const products = ['Surface Pro 11','Surface Laptop 7','Surface Studio 2+','Surface Go 4','Surface Hub 3','Surface Duo 3']
  const accessories = ['Surface Pen','Surface Keyboard','Surface Dock','Surface Mouse','Surface Earbuds','Surface Headphones','Surface Thunderbolt 4','Surface Slim Pen 2','Surface USB-C Hub','Surface Power Adapter']
  const support = ['Windows 11 on Surface','Surface Care','Trade-in','Business','Education','For Students']
  return (
    <div style={{background:"linear-gradient(180deg,#000 0%,#1a1a1a 100%)",padding:"80px 48px",color:"#fff",fontWeight:350}}>
      <h1 style={{fontSize:28,fontWeight:350,lineHeight:"39.2px",color:"#fff",marginBottom:16}}>Surface</h1>
      <p style={{fontSize:72,fontWeight:350,lineHeight:"72px",color:"#fff",maxWidth:500}}>The most versatile laptop with tablet portability.</p>
      <div style={{display:"flex",gap:24,marginTop:32}}>
        <a href="#" style={{background:"#0078D4",color:"#fff",padding:"8px 20px",fontSize:14}}>Shop Surface</a>
        <a href="#" style={{color:"#0078D4",fontSize:14,border:"1px solid #0078D4",padding:"8px 20px"}}>Learn more</a>
      </div>
      <div style={{padding:"48px",background:"#fff",color:"#000"}}>
        <div style={{fontSize:13,fontWeight:350,color:"#0e1726",marginBottom:24}}>Products</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
          {products.map((n,i)=>(<div key={i}><div style={{fontSize:16,fontWeight:600}}>{n}</div><a href="#" style={{fontSize:16,fontWeight:350,color:"#0078D4"}}>Learn</a><a href="#" style={{fontSize:16,fontWeight:350,color:"#262626",marginLeft:8}}>Buy</a><a href="#" style={{fontSize:16,fontWeight:350,color:"#262626",marginLeft:8}}>Compare</a></div>))}
        </div>
      </div>
      <div style={{padding:"48px",background:"#f2f2f2",color:"#000"}}>
        <div style={{fontSize:13,fontWeight:350,color:"#0e1726",marginBottom:24}}>Accessories</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
          {accessories.map((n,i)=>(<div key={i}><div style={{fontSize:16,fontWeight:600}}>{n}</div><a href="#" style={{fontSize:16,fontWeight:350,color:"#0078D4"}}>Shop now</a><a href="#" style={{fontSize:16,fontWeight:350,color:"#262626",marginLeft:8}}>Details</a></div>))}
        </div>
      </div>
      <div style={{padding:"48px",background:"#fff",color:"#000"}}>
        <div style={{fontSize:13,fontWeight:350,color:"#0e1726",marginBottom:24}}>Support & Services</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
          {support.map((n,i)=>(<div key={i}><div style={{fontSize:16,fontWeight:600}}>{n}</div><a href="#" style={{fontSize:16,fontWeight:350,color:"#0078D4"}}>Get started</a></div>))}
        </div>
      </div>
    </div>
  )
}