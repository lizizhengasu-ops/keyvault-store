export default function SupportPage() {
  const topics = ['Surface','Windows','Microsoft 365','Xbox','Teams','Billing','Account','Outlook']
  return (
    <div style={{padding:'48px 48px',maxWidth:1200,margin:'0 auto'}}>
      <h1 style={{fontSize:46,fontWeight:400,lineHeight:'56px',color:'#0a0a0a',marginBottom:8}}>Support</h1>
      <p style={{fontSize:22,fontWeight:400,color:'#363636',marginBottom:48}}>Get help with Microsoft products and services.</p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:16}}>
        {topics.map((n,i)=>(
          <div key={i} style={{padding:24,background:'#f2f2f2',borderRadius:2}}>
            <h3 style={{fontSize:14,fontWeight:600,color:'#242424',marginBottom:4}}>{n}</h3>
            <a href='#' style={{color:'#363636',fontSize:14}}>Get help &gt;</a>
          </div>
        ))}
      </div>
    <div style={{padding:24,textAlign:"center"}}><img src="https://picsum.photos/800/400" alt="" style={{maxWidth:"100%",borderRadius:8}}/></div><div style={{textAlign:"center",padding:16}}><a href="#" style={{color:"#262626",fontSize:13,margin:"0 8px"}}>Link 1</a><a href="#" style={{color:"#262626",fontSize:13,margin:"0 8px"}}>Link 2</a><a href="#" style={{color:"#262626",fontSize:13,margin:"0 8px"}}>Link 3</a><a href="#" style={{color:"#262626",fontSize:13,margin:"0 8px"}}>Link 4</a><a href="#" style={{color:"#262626",fontSize:13,margin:"0 8px"}}>Link 5</a><a href="#" style={{color:"#262626",fontSize:13,margin:"0 8px"}}>Link 6</a><a href="#" style={{color:"#262626",fontSize:13,margin:"0 8px"}}>Link 7</a><a href="#" style={{color:"#262626",fontSize:13,margin:"0 8px"}}>Link 8</a><a href="#" style={{color:"#262626",fontSize:13,margin:"0 8px"}}>Link 9</a><a href="#" style={{color:"#262626",fontSize:13,margin:"0 8px"}}>Link 10</a></div>
</div>
  )
}
