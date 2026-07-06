export default function StorePage() {
  const items = ['Surface','Xbox','Windows','Accessories','Software','Deals','Education','Business','Developer','Gaming']
  return (
    <div style={{padding:"48px 48px",maxWidth:1200,margin:"0 auto"}}>
      <h2 style={{fontSize:34,fontWeight:100,color:"#000",marginBottom:32}}>Store</h2>
      <p style={{fontSize:20,fontWeight:200,lineHeight:"24px",color:"#000",marginBottom:24}}>Browse Microsoft products</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>
        {items.map((n,i)=>(
          <div key={i} style={{padding:24,background:"#f2f2f2",borderRadius:2}}>
            <div style={{width:40,height:40,background:"#0078D4",borderRadius:2,marginBottom:12}}></div>
            <div style={{fontSize:20,fontWeight:600,color:"#0e1726",marginBottom:4}}>{n}</div>
            <a href="#" style={{color:"#000000",fontSize:15,fontWeight:400,lineHeight:"normal"}}>Shop now</a>
          </div>
        ))}
      </div>
    </div>
  )
}