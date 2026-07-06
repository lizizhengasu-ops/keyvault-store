export default function StorePage() {
  const items = ['Surface','Xbox','Windows','Accessories','Software','Deals','Education','Business','Developer','Gaming']
  return (
    <div style={{padding:'48px 48px',maxWidth:1200,margin:'0 auto'}}>
      <h2 style={{fontSize:34,fontWeight:100,lineHeight:'40px',color:'#000',marginBottom:32}}>Store</h2>
      <p style={{fontSize:15,color:'#000',marginBottom:24}}>Browse our full product lineup</p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:16}}>
        {items.map((n,i)=>(
          <div key={i} style={{padding:24,background:'#f2f2f2',borderRadius:2}}>
            <div style={{width:40,height:40,background:['#0078D4','#107C10','#0078D4','#D83B01','#0078D4','#FFB900','#0078D4','#107C10','#4B53BC','#0078D4'][i],borderRadius:2,marginBottom:12}}></div>
            <h3 style={{fontSize:20,fontWeight:600,color:'#0e1726',marginBottom:4}}>{n}</h3>
            <a href='/store' style={{color:'#0078D4',fontSize:13,fontWeight:600}}>Shop now &gt;</a>
          </div>
        ))}
      </div>
      <div style={{display:'flex',gap:24,marginTop:48,justifyContent:'center',flexWrap:'wrap'}}>
        {['Microsoft 365','Teams','Copilot','Windows','Surface','Xbox','Deals','Small Business','Support'].map((n,i)=>(
          <a key={i} href='/' style={{color:'#262626',fontSize:13}}>{n}</a>
        ))}
      </div>
    <div style={{padding:24,textAlign:"center"}}><img src="https://picsum.photos/800/400" alt="" style={{maxWidth:"100%",borderRadius:8}}/></div><div style={{textAlign:"center",padding:16}}><a href="#" style={{color:"#262626",fontSize:13,margin:"0 8px"}}>Link 1</a><a href="#" style={{color:"#262626",fontSize:13,margin:"0 8px"}}>Link 2</a><a href="#" style={{color:"#262626",fontSize:13,margin:"0 8px"}}>Link 3</a><a href="#" style={{color:"#262626",fontSize:13,margin:"0 8px"}}>Link 4</a><a href="#" style={{color:"#262626",fontSize:13,margin:"0 8px"}}>Link 5</a><a href="#" style={{color:"#262626",fontSize:13,margin:"0 8px"}}>Link 6</a><a href="#" style={{color:"#262626",fontSize:13,margin:"0 8px"}}>Link 7</a><a href="#" style={{color:"#262626",fontSize:13,margin:"0 8px"}}>Link 8</a><a href="#" style={{color:"#262626",fontSize:13,margin:"0 8px"}}>Link 9</a><a href="#" style={{color:"#262626",fontSize:13,margin:"0 8px"}}>Link 10</a></div>
</div>
  )
}
