export default function B2BPage() {
  const plans = [
    {t:'Business Basic',d:'Web and mobile versions of Office apps',c:'#0078D4'},
    {t:'Business Standard',d:'Full Office apps + cloud services',c:'#107C10'},
    {t:'Business Premium',d:'Full security + device management',c:'#D83B01'},
    {t:'Apps for Business',d:'Office apps only',c:'#FFB900'},
    {t:'Enterprise E3',d:'Full enterprise features',c:'#0078D4'},
    {t:'Enterprise E5',d:'Advanced security + analytics',c:'#107C10'},
  ]
  return (
    <div style={{padding:'48px 48px',maxWidth:1200,margin:'0 auto',background:'#fffdfb'}}>
      <h1 style={{fontSize:62,fontWeight:500,lineHeight:'72px',color:'#0e1726',letterSpacing:'-1.55px',marginBottom:8}}>Microsoft 365 Business</h1>
      <p style={{fontSize:16,color:'#0e1726',marginBottom:48}}>Solutions for small and medium-sized businesses</p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16}}>
        {plans.map((p,i)=>(
          <div key={i} style={{padding:32,background:'#f2f2f2',borderRadius:2}}>
            <div style={{width:48,height:48,background:p.c,borderRadius:2,marginBottom:12}}></div>
            <h3 style={{fontSize:20,fontWeight:600,color:'#0e1726',marginBottom:8}}>{p.t}</h3>
            <p style={{fontSize:14,color:'#0e1726',marginBottom:12}}>{p.d}</p>
            <a href='#' style={{color:'#0067b8',fontSize:13,fontWeight:600}}>See plans &gt;</a>
          </div>
        ))}
      </div>
    <div style={{padding:24,textAlign:"center"}}><img src="https://picsum.photos/800/400" alt="" style={{maxWidth:"100%",borderRadius:8}}/></div><div style={{textAlign:"center",padding:16}}><a href="#" style={{color:"#262626",fontSize:13,margin:"0 8px"}}>Link 1</a><a href="#" style={{color:"#262626",fontSize:13,margin:"0 8px"}}>Link 2</a><a href="#" style={{color:"#262626",fontSize:13,margin:"0 8px"}}>Link 3</a><a href="#" style={{color:"#262626",fontSize:13,margin:"0 8px"}}>Link 4</a><a href="#" style={{color:"#262626",fontSize:13,margin:"0 8px"}}>Link 5</a><a href="#" style={{color:"#262626",fontSize:13,margin:"0 8px"}}>Link 6</a><a href="#" style={{color:"#262626",fontSize:13,margin:"0 8px"}}>Link 7</a><a href="#" style={{color:"#262626",fontSize:13,margin:"0 8px"}}>Link 8</a><a href="#" style={{color:"#262626",fontSize:13,margin:"0 8px"}}>Link 9</a><a href="#" style={{color:"#262626",fontSize:13,margin:"0 8px"}}>Link 10</a></div>
</div>
  )
}
