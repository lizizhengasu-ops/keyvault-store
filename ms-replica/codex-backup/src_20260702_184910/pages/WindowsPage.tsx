export default function WindowsPage() {
  return (
    <div style={{maxWidth:1200,margin:'0 auto',padding:'80px 24px'}}>
      <h1 style={{fontSize:46,fontWeight:600,lineHeight:1.1,marginBottom:16}}>Windows</h1>
      <p style={{fontSize:20,fontWeight:200,lineHeight:1.6,marginBottom:48,maxWidth:600}}>Designed for hybrid work, gaming, and creativity. The most secure Windows ever.</p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:16}}>
        <div style={{background:'#f2f2f2',padding:'48px',borderRadius:2}}>
          <div style={{width:64,height:64,background:'#0078D4',borderRadius:2,marginBottom:16}}></div>
          <h3 style={{fontSize:24,fontWeight:600,marginBottom:8}}>Windows 11 Home</h3>
          <p style={{fontSize:14,lineHeight:1.6,color:'#616161',marginBottom:16}}>For everyday use. Best for home, students, and gaming.</p>
          <a style={{fontWeight:600,color:'#0078D4',cursor:'pointer'}}>Learn more &gt;</a>
        </div>
        <div style={{background:'#f2f2f2',padding:'48px',borderRadius:2}}>
          <div style={{width:64,height:64,background:'#D83B01',borderRadius:2,marginBottom:16}}></div>
          <h3 style={{fontSize:24,fontWeight:600,marginBottom:8}}>Windows 11 Pro</h3>
          <p style={{fontSize:14,lineHeight:1.6,color:'#616161',marginBottom:16}}>For hybrid work. Best for professionals and enterprises.</p>
          <a style={{fontWeight:600,color:'#0078D4',cursor:'pointer'}}>Learn more &gt;</a>
        </div>
      </div>
    </div>
  );
}