import { Link } from "react-router-dom"

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section style={{background:'linear-gradient(135deg,#0078D4,#106EBE)',color:'#fff',padding:'80px 20px',textAlign:'center'}}>
        <h1 style={{fontSize:46,fontWeight:600,lineHeight:1.2,marginBottom:16}}>Microsoft 365</h1>
        <p style={{fontSize:20,marginBottom:24,maxWidth:600,margin:'0 auto 24px',opacity:0.9}}>Premium Microsoft apps, extra cloud storage, advanced security, and more.</p>
        <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
          <div style={{background:'#fff',color:'#0078D4',padding:'8px 24px',borderRadius:2,fontWeight:600,cursor:'pointer',fontSize:15}}>Buy now</div>
          <div style={{background:'transparent',color:'#fff',padding:'8px 24px',borderRadius:2,fontWeight:400,cursor:'pointer',fontSize:15,border:'1px solid #fff'}}>Learn more</div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section style={{padding:'48px 20px',background:'#f2f2f2'}}>
        <div style={{maxWidth:1200,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16}}>
          {[
            {t:'Surface Pro',d:'Exceptional versatility with laptop power, tablet portability.',c:'#0078D4'},
            {t:'Windows 11',d:'The most secure Windows ever with new productivity features.',c:'#0078D4'},
            {t:'Xbox Series X',d:'Fastest, most powerful Xbox ever with 12 teraflops.',c:'#0078D4'},
          ].map((p,i) => (
            <div key={i} style={{background:'#fff',padding:'24px',borderRadius:2,boxShadow:'0 2px 8px rgba(0,0,0,0.08)'}}>
              <div style={{width:40,height:40,borderRadius:2,background:p.c,marginBottom:12}}></div>
              <h3 style={{fontSize:20,fontWeight:600,marginBottom:8}}>{p.t}</h3>
              <p style={{fontSize:14,color:'#616161',lineHeight:1.6,marginBottom:12}}>{p.d}</p>
              <Link to="/products" style={{color:'#0078D4',fontWeight:600,fontSize:14,cursor:'pointer',textDecoration:'none'}}>Learn more &gt;</Link>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section style={{padding:'48px 20px',background:'#fff'}}>
        <h2 style={{fontSize:34,fontWeight:600,textAlign:'center',marginBottom:32}}>Designed for life today</h2>
        <div style={{maxWidth:1200,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:16}}>
          <div style={{background:'#f2f2f2',padding:'32px',borderRadius:2}}>
            <h3 style={{fontSize:24,fontWeight:600,marginBottom:8}}>Microsoft Teams</h3>
            <p style={{fontSize:14,color:'#616161',marginBottom:12}}>Chat, meet, and collaborate with anyone from anywhere.</p>
            <Link to="/store" style={{color:'#0078D4',fontWeight:600,fontSize:14,textDecoration:'none'}}>Learn more &gt;</Link>
          </div>
          <div style={{background:'#f2f2f2',padding:'32px',borderRadius:2}}>
            <h3 style={{fontSize:24,fontWeight:600,marginBottom:8}}>Microsoft Edge</h3>
            <p style={{fontSize:14,color:'#616161',marginBottom:12}}>World-class performance with built-in privacy and productivity.</p>
            <Link to="/store" style={{color:'#0078D4',fontWeight:600,fontSize:14,textDecoration:'none'}}>Learn more &gt;</Link>
          </div>
        </div>
      </section>
    </>
  );
}