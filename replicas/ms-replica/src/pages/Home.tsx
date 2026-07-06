import { Link } from "react-router-dom";

export default function HomePage() {
  const heroCards = [
    { title:"Meet Surface Pro", desc:"Tablet versatility. Laptop performance. Ultra-portability.", img:"surface", bg:"#000", color:"#fff", link:"/product/surface", btn:"Shop now" },
    { title:"Windows 11 Pro", desc:"For hybrid work. For advanced security. For you.", img:"windows", bg:"#0078D4", color:"#fff", link:"/product/windows", btn:"Learn more" },
    { title:"Microsoft 365", desc:"Premium apps, cloud storage, and security all in one.", img:"m365", bg:"#f2f2f2", color:"#000", link:"/store", btn:"For home" },
  ];

  return (
    <div style={{fontFamily:'"Segoe UI Variable Text","Segoe UI",system-ui,sans-serif',color:"#000",background:"#fff"}}>
      {/* Hero Banner */}
      <div style={{background:"linear-gradient(135deg,#0078D4,#106EBE,#005A9E)",padding:"80px 48px 60px",textAlign:"center"}}>
        <h1 style={{fontSize:52,fontWeight:500,color:"#fff",lineHeight:"60px",margin:"0 0 12px 0",letterSpacing:"-0.5px"}}>
          Microsoft 365
        </h1>
        <p style={{fontSize:20,fontWeight:200,color:"#fff",lineHeight:"28px",margin:"0 0 32px 0",maxWidth:720,marginLeft:"auto",marginRight:"auto"}}>
          Premium Microsoft apps, extra cloud storage, advanced security ? all in one convenient subscription.
        </p>
        <Link to="/store" style={{
          background:"#fff",color:"#0078D4",padding:"10px 24px",fontSize:14,fontWeight:600,
          textDecoration:"none",borderRadius:2,display:"inline-block"
        }}>Shop now</Link>
      </div>

      {/* Hero Cards Grid */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16,padding:"32px 48px",maxWidth:1200,margin:"0 auto"}}>
        {heroCards.map((c,i)=>(
          <Link key={i} to={c.link} style={{textDecoration:"none"}}>
            <div style={{background:c.bg,color:c.color,padding:32,borderRadius:2,position:"relative",overflow:"hidden",minHeight:240,transition:"transform 0.2s,box-shadow 0.2s",cursor:"pointer"}}
              onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.02)";e.currentTarget.style.boxShadow="0 8px 24px rgba(0,0,0,0.15)"}}
              onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.boxShadow="none"}}>
              <div style={{fontSize:24,fontWeight:600,marginBottom:8}}>{c.title}</div>
              <div style={{fontSize:15,fontWeight:300,lineHeight:"22px",marginBottom:20,opacity:0.9}}>{c.desc}</div>
              <div style={{display:"flex",alignItems:"center",gap:6,fontSize:14,fontWeight:600}}>
                {c.btn}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Deals Section */}
      <div style={{padding:"48px 48px",maxWidth:1200,margin:"0 auto"}}>
        <h2 style={{fontSize:28,fontWeight:500,color:"#000",margin:"0 0 24px 0"}}>Shop deals</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>
          {[
            {title:"Surface Pro",desc:"Save up to $250",img:"sp",link:"/product/surface"},
            {title:"Xbox Series S",desc:"Starting at $299",img:"xbox",link:"/products"},
            {title:"Microsoft 365",desc:"From $6.99/month",img:"m365",link:"/store"},
            {title:"PC Game Pass",desc:"First month $1",img:"gamepass",link:"/products"},
          ].map((d,i)=>(
            <Link key={i} to={d.link} style={{textDecoration:"none"}}>
              <div style={{background:"rgb(242,242,242)",padding:20,borderRadius:2,transition:"box-shadow 0.2s",cursor:"pointer"}}
                onMouseEnter={e=>e.currentTarget.style.boxShadow="0 4px 12px rgba(0,0,0,0.1)"}
                onMouseLeave={e=>e.currentTarget.style.boxShadow="none"}>
                <img src={"https://picsum.photos/seed/"+d.img+"/400/200"} alt={d.title} style={{width:"100%",height:120,objectFit:"cover",borderRadius:2,marginBottom:12}} />
                <div style={{fontSize:16,fontWeight:600,color:"#000",marginBottom:4}}>{d.title}</div>
                <div style={{fontSize:14,color:"rgb(97,97,97)",marginBottom:8}}>{d.desc}</div>
                <div style={{fontSize:13,color:"#0067b8",fontWeight:600,display:"flex",alignItems:"center",gap:4}}>
                  Shop now <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M1 6h10M7 2l4 4-4 4" stroke="#0067b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Surface Hero */}
      <div style={{background:"#000",padding:"48px 48px"}}>
        <div style={{maxWidth:1200,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:48,alignItems:"center"}}>
          <div>
            <h2 style={{fontSize:34,fontWeight:500,color:"#fff",lineHeight:"40px",margin:"0 0 16px 0"}}>Surface Pro</h2>
            <p style={{fontSize:16,fontWeight:300,color:"#ccc",lineHeight:"24px",margin:"0 0 24px 0"}}>Ultra-portable, laptop-replacing versatility. Powered by Intel Core Ultra processors and Copilot AI features.</p>
            <Link to="/product/surface" style={{color:"#fff",fontSize:14,fontWeight:600,textDecoration:"none",display:"flex",alignItems:"center",gap:6}}>
              Learn more <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 6h10M7 2l4 4-4 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
          <img src="https://picsum.photos/seed/surface_hero/600/400" alt="Surface Pro" style={{width:"100%",borderRadius:2}} />
        </div>
      </div>

      {/* Xbox & AI Section */}
      <div style={{padding:"48px 48px",maxWidth:1200,margin:"0 auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:16}}>
          <Link to="/products" style={{textDecoration:"none"}}>
            <div style={{background:"rgb(242,242,242)",padding:32,borderRadius:2,minHeight:200,cursor:"pointer",transition:"box-shadow 0.2s"}}
              onMouseEnter={e=>e.currentTarget.style.boxShadow="0 4px 12px rgba(0,0,0,0.1)"}
              onMouseLeave={e=>e.currentTarget.style.boxShadow="none"}>
              <div style={{fontSize:24,fontWeight:600,color:"#000",marginBottom:8}}>Xbox Series X</div>
              <div style={{fontSize:15,color:"rgb(97,97,97)",lineHeight:"22px",marginBottom:16}}>The fastest, most powerful Xbox ever. 12 teraflops of processing power.</div>
              <div style={{fontSize:13,color:"#0067b8",fontWeight:600,display:"flex",alignItems:"center",gap:4}}>
                Shop now <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M1 6h10M7 2l4 4-4 4" stroke="#0067b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
          </Link>
          <Link to="/products" style={{textDecoration:"none"}}>
            <div style={{background:"rgb(242,242,242)",padding:32,borderRadius:2,minHeight:200,cursor:"pointer",transition:"box-shadow 0.2s"}}
              onMouseEnter={e=>e.currentTarget.style.boxShadow="0 4px 12px rgba(0,0,0,0.1)"}
              onMouseLeave={e=>e.currentTarget.style.boxShadow="none"}>
              <div style={{fontSize:24,fontWeight:600,color:"#000",marginBottom:8}}>Copilot + AI</div>
              <div style={{fontSize:15,color:"rgb(97,97,97)",lineHeight:"22px",marginBottom:16}}>Your AI companion. Integrated into Windows 11, Microsoft 365, and Edge.</div>
              <div style={{fontSize:13,color:"#0067b8",fontWeight:600,display:"flex",alignItems:"center",gap:4}}>
                Learn more <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M1 6h10M7 2l4 4-4 4" stroke="#0067b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
