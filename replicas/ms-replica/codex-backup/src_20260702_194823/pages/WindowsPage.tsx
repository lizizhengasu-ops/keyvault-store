export default function WindowsPage() {
  return (
    <div style={{background:'#000',padding:'80px 48px',color:'#fff'}}>
      <h1 style={{fontSize:56,fontWeight:600,lineHeight:'78.4px',color:'#fff',marginBottom:16}}>Windows</h1>
      <p style={{fontSize:20,color:'#fff',maxWidth:500}}>Designed for hybrid work, gaming, and creativity. The most secure Windows ever.</p>
      <div style={{display:'flex',gap:24,marginTop:32}}>
        <a href='/store' style={{background:'#0078D4',color:'#fff',padding:'8px 20px',fontSize:14,borderRadius:2}}>Learn more</a>
        <a href='/store' style={{color:'#0078D4',fontSize:14,border:'1px solid #0078D4',padding:'8px 20px',borderRadius:2}}>Buy now</a>
      </div>
    </div>
  )
}
