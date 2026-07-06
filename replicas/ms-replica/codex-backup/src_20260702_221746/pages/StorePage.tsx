export default function StorePage() {
  const items = []
  for(let i=0;i<50;i++) items.push("Product "+(i+1))
  return (
    <div style={{fontFamily:'"Segoe UI Variable Text","Segoe UI",system-ui,sans-serif',color:"#000",background:"#fff",padding:"48px 48px",maxWidth:1200,margin:"0 auto"}}>
      <h2 style={{fontSize:34,fontWeight:100,lineHeight:"40px",color:"#000",margin:"0 0 16px 0"}}>Microsoft Store Deals</h2>
      <p style={{fontSize:20,fontWeight:200,lineHeight:"24px",color:"#000",margin:"0 0 32px 0"}}>Save big on Surface, Xbox, and more.</p>
      <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
        {items.map((n,i)=>(<a key={i} href="#" style={{fontSize:11,color:"#000",fontWeight:400,textDecoration:"none",padding:"4px 8px"}}>{n}</a>))}
      </div>
    </div>
  )
}