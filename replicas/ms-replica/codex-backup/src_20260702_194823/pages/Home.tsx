export default function HomePage() {
  return (
    <div style={{background:'linear-gradient(180deg,#0078D4 0%,#106EBE 100%)',color:'#fff',padding:'80px 48px 64px'}}>
      <h1 style={{fontSize:48,fontWeight:500,lineHeight:'56px',letterSpacing:'-1.2px',marginBottom:8}}>Microsoft 365</h1>
      <p style={{fontSize:16,fontWeight:400,lineHeight:'24px',color:'#f4fafd',marginBottom:24}}>Premium Microsoft apps, extra cloud storage, advanced security, and more &mdash; all in one subscription.</p>
      <div style={{display:'flex',gap:12}}>
        <a href='/store' style={{background:'#fff',color:'#0078D4',padding:'6px 20px',fontWeight:600,fontSize:14,borderRadius:2,display:'inline-block'}}>Buy now</a>
        <a href='/product/surface' style={{background:'transparent',color:'#fff',padding:'6px 20px',fontWeight:600,fontSize:14,border:'1px solid #fff',borderRadius:2,display:'inline-block'}}>Learn more</a>
      </div>
    </div>
  );
}
