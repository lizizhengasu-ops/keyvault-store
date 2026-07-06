export default function SurfacePage() {
  return (
    <div style={{background:'linear-gradient(180deg,#000 0%,#1a1a1a 100%)',padding:'80px 48px',color:'#fff'}}>
      <h1 style={{fontSize:28,fontWeight:350,lineHeight:'39.2px',color:'#fff',marginBottom:16}}>Surface</h1>
      <p style={{fontSize:16,color:'#fff',maxWidth:500,lineHeight:1.6}}>The most versatile laptop with tablet portability, touchscreen, and Surface Pen support.</p>
      <div style={{display:'flex',gap:24,marginTop:32}}>
        <a href='/store' style={{background:'#0078D4',color:'#fff',padding:'8px 20px',fontSize:14,borderRadius:2}}>Shop Surface</a>
        <a href='/store' style={{color:'#0078D4',fontSize:14,border:'1px solid #0078D4',padding:'8px 20px',borderRadius:2}}>Learn more</a>
      </div>
    </div>
  )
}
