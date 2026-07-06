export default function StorePage() {
  const products = [
    {t:'Surface Pro',d:'Ultimate laptop versatility',img:'#0078D4'},
    {t:'Xbox Series X',d:'Fastest Xbox ever',img:'#107C10'},
    {t:'Windows 11 Pro',d:'For hybrid work',img:'#0078D4'},
    {t:'Microsoft 365',d:'Office + cloud',img:'#D83B01'},
    {t:'Xbox Game Pass',d:'Hundreds of games',img:'#107C10'},
    {t:'Surface Laptop',d:'Beautiful performance',img:'#0078D4'},
  ];
  return (
    <div style={{maxWidth:1200,margin:'0 auto',padding:'80px 24px'}}>
      <div style={{fontSize:46,fontWeight:600,lineHeight:1.1,marginBottom:8}}>Store</div>
      <p style={{fontSize:20,fontWeight:200,color:'#000',marginBottom:48}}>Browse our full product lineup</p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16}}>
        {products.map((p,i)=>(
          <div key={i} style={{background:'#f2f2f2',padding:'32px',borderRadius:2,cursor:'pointer'}}>
            <div style={{width:'100%',height:160,background:p.img,backgroundImage:'url(https://picsum.photos/400/300)',backgroundSize:'cover',borderRadius:2,marginBottom:16,display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontSize:24,fontWeight:600}}>{p.t[0]}</div>
            <h3 style={{fontSize:20,fontWeight:600,marginBottom:8}}>{p.t}</h3>
            <p style={{fontSize:14,lineHeight:1.6,color:'#616161',marginBottom:12}}>{p.d}</p>
            <a style={{fontWeight:600,color:'#0078D4',cursor:'pointer'}}>Shop now &gt;</a>
          </div>
        ))}
      </div>
    </div>
  );
}