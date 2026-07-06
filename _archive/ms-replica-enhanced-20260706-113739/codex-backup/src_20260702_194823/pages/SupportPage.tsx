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
    </div>
  )
}
