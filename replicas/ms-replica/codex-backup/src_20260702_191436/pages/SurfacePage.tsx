export default function SurfacePage() {
  return (
    <div style={{maxWidth:1200,margin:'0 auto',padding:'80px 24px'}}>
      <h1 style={{fontSize:46,fontWeight:600,lineHeight:1.1,marginBottom:16}}>Surface</h1>
      <p style={{fontSize:20,fontWeight:200,lineHeight:1.6,marginBottom:48,maxWidth:600,color:'#000'}}>The most versatile laptop with tablet portability, touchscreen, and Surface Pen support.</p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16}}>
        {['Surface Pro','Surface Laptop','Surface Studio','Surface Go','Surface Duo','Surface Hub'].map((n,i)=>(
          <div key={i} style={{background:'#f2f2f2',padding:'32px',borderRadius:2}}>
            <div style={{width:'100%',height:120,background:'#0078D4',borderRadius:2,marginBottom:16,display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontSize:32,fontWeight:100}}>{n.split(' ')[1]||n}</div>
            <h3 style={{fontSize:20,fontWeight:600,marginBottom:8}}>{n}</h3>
            <a style={{fontWeight:600,color:'#0078D4',cursor:'pointer'}}>Learn more &gt;</a>
          </div>
        ))}
      </div>
    </div>
  );
}