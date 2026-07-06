import { useCart } from "../CartContext"
const CATS = ["Surface","Xbox","Windows 11","Microsoft 365","Office","Accessories","Dev Tools","Education","Gaming","Business Apps"]
const PRODS = []
for(let i=0;i<40;i++) {
  // Stable data - generated once, not on every render
  const prices = [49,79,99,129,149,199,249,299,399,499,599,699,799,899,999,1199,1299,1399,1499]
  PRODS.push({
    id:i+1, name:"Product "+(i+1), cat:CATS[i%10],
    price: prices[i % prices.length] + (i % 5) * 10,
    img:"p_"+i,
    rating: (3.5 + (i % 5) * 0.3).toFixed(1)
  })
}


export default function ProductsPage() {
  const { addToCart } = useCart()
  return (
    <div style={{fontFamily:'"Segoe UI Variable Text","Segoe UI",system-ui,sans-serif',color:"#000",background:"#fff"}}>
      <div style={{background:"linear-gradient(135deg,#0078D4,#106EBE)",color:"#fff",padding:"60px 48px"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}} className="anim-fade-up">
          <h1 style={{fontSize:48,fontWeight:500,lineHeight:"56px",color:"#fff",margin:"0 0 12px 0"}}>All Products</h1>
          <p style={{fontSize:20,fontWeight:200,lineHeight:"24px",color:"#fff",margin:0}}>Discover the full Microsoft catalog.</p>
        </div>
      </div>
      <div style={{padding:"48px 48px",maxWidth:1200,margin:"0 auto"}}>
        <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:32}} className="anim-fade-up">
          <a href="/products" style={{background:"#0078D4",color:"#fff",padding:"6px 16px",borderRadius:16,fontSize:13,textDecoration:"none"}}>All</a>
          {cats.map((c,i)=>(<a key={i} href={"/products?cat="+c.toLowerCase().replace(/ /g,"_")} style={{background:"rgb(242,242,242)",color:"#000",padding:"6px 16px",borderRadius:16,fontSize:13,textDecoration:"none"}}>{c}</a>))}
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}} className="anim-stagger">
          {prods.map((p,i)=>(
            <div key={i} style={{background:"rgb(242,242,242)",padding:16,borderRadius:2}} className="hover-lift">
              <a href={"/product/"+p.id}><img src={"https://picsum.photos/seed/"+p.img+"/400/250"} alt={p.name} style={{width:"100%",height:140,objectFit:"cover",marginBottom:8,borderRadius:2}} /></a>
              <div style={{fontSize:12,color:"rgb(97,97,97)",marginBottom:4}}>{p.cat}</div>
              <a href={"/product/"+p.id} style={{fontSize:15,fontWeight:600,color:"#000",marginBottom:4,display:"block",textDecoration:"none"}}>{p.name}</a>
              <div style={{fontSize:13,color:"rgb(97,97,97)",marginBottom:4}}>{"\u2605".repeat(Math.floor(parseFloat(p.rating)))} {p.rating}</div>
              <div style={{fontSize:16,fontWeight:700,color:"#000",marginBottom:8}}>${p.price.toFixed(2)}</div>
              <button onClick={() => addToCart(p)} style={{background:"#0078D4",color:"#fff",border:"none",padding:"6px 16px",fontSize:13,borderRadius:2,cursor:"pointer"}}>Add to cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
