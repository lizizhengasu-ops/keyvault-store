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
            <div style={{width:48,height:48,background:p.c,borderRadius:2,marginBottom:12}}><section style={{padding:24,background:"#fff"}}><h2 key="h0_0" style={{fontSize:20,fontWeight:600,color:"#0e1726",lineHeight:"28px"}}>Cat 0.1</h2><h2 key="h0_1" style={{fontSize:20,fontWeight:600,color:"#0e1726",lineHeight:"28px"}}>Cat 0.2</h2><h2 key="h0_2" style={{fontSize:20,fontWeight:600,color:"#0e1726",lineHeight:"28px"}}>Cat 0.3</h2><h2 key="h0_3" style={{fontSize:20,fontWeight:600,color:"#0e1726",lineHeight:"28px"}}>Cat 0.4</h2><h2 key="h0_4" style={{fontSize:20,fontWeight:600,color:"#0e1726",lineHeight:"28px"}}>Cat 0.5</h2><div style={{marginTop:12}}><a key="l0_0" href="#" style={{fontSize:13,color:"#262626",marginRight:12}}>Link 0.1</a><a key="l0_1" href="#" style={{fontSize:13,color:"#262626",marginRight:12}}>Link 0.2</a><a key="l0_2" href="#" style={{fontSize:13,color:"#262626",marginRight:12}}>Link 0.3</a><a key="l0_3" href="#" style={{fontSize:13,color:"#262626",marginRight:12}}>Link 0.4</a><a key="l0_4" href="#" style={{fontSize:13,color:"#262626",marginRight:12}}>Link 0.5</a><a key="l0_5" href="#" style={{fontSize:13,color:"#262626",marginRight:12}}>Link 0.6</a><a key="l0_6" href="#" style={{fontSize:13,color:"#262626",marginRight:12}}>Link 0.7</a><a key="l0_7" href="#" style={{fontSize:13,color:"#262626",marginRight:12}}>Link 0.8</a><a key="l0_8" href="#" style={{fontSize:13,color:"#262626",marginRight:12}}>Link 0.9</a><a key="l0_9" href="#" style={{fontSize:13,color:"#262626",marginRight:12}}>Link 0.10</a><a key="l0_10" href="#" style={{fontSize:13,color:"#262626",marginRight:12}}>Link 0.11</a><a key="l0_11" href="#" style={{fontSize:13,color:"#262626",marginRight:12}}>Link 0.12</a><a key="l0_12" href="#" style={{fontSize:13,color:"#262626",marginRight:12}}>Link 0.13</a><a key="l0_13" href="#" style={{fontSize:13,color:"#262626",marginRight:12}}>Link 0.14</a><a key="l0_14" href="#" style={{fontSize:13,color:"#262626",marginRight:12}}>Link 0.15</a><a key="l0_15" href="#" style={{fontSize:13,color:"#262626",marginRight:12}}>Link 0.16</a><a key="l0_16" href="#" style={{fontSize:13,color:"#262626",marginRight:12}}>Link 0.17</a><a key="l0_17" href="#" style={{fontSize:13,color:"#262626",marginRight:12}}>Link 0.18</a><a key="l0_18" href="#" style={{fontSize:13,color:"#262626",marginRight:12}}>Link 0.19</a><a key="l0_19" href="#" style={{fontSize:13,color:"#262626",marginRight:12}}>Link 0.20</a></div></section>
</div>
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
