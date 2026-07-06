(function() {
  var e=React.createElement,useState=React.useState,useEffect=React.useEffect;

function HeaderSearch() {
    var _q=useState(""),q=_q[0],sq=_q[1];
    return e("header",{style:{background:"rgba(255,255,255,0.75)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",borderBottom:"1px solid rgba(100,116,139,0.08)",position:"sticky",top:0,zIndex:100}},e("div",{style:{maxWidth:1280,margin:"0 auto",padding:"12px 24px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:16}},e("div",{style:{display:"flex",alignItems:"center",gap:24}},e("a",{href:"/",style:{fontSize:20,fontWeight:700,color:"#0f172a",textDecoration:"none"}},"Keys-Starter"),e("nav",{style:{display:"flex",gap:20}},["B2B Wholesale","API Access","Pricing","Support"].map(function(t){return e("a",{key:t,href:"#",style:{fontSize:13,color:"#334155",textDecoration:"none"}},t)}))),e("div",{style:{display:"flex",alignItems:"center",gap:8}},e("input",{type:"text",placeholder:"Search SKU or batch ID...",value:q,onChange:function(ev){sq(ev.target.value)},style:{padding:"8px 14px",borderRadius:16,border:"1px solid rgba(100,116,139,0.2)",fontSize:13,width:260,outline:"none"}}),e("button",{style:{padding:"8px 16px",background:"#6366f1",color:"#fff",border:"none",borderRadius:16,fontWeight:600,fontSize:12,cursor:"pointer"}},"Search"))))
  }

  function HeroCarousel() {
    var _i=useState(0),i=_i[0],si=_i[1],slides=[{t:"Enterprise Bulk Licensing Platform",s:"Scale Windows, Office & server license keys with tiered discounts up to 40%",c:"View Volume Plans",bg:"linear-gradient(135deg,#0c1222,#1e293b)"},{t:"Automated API Instant Delivery",s:"RESTful API for real-time bulk key generation. Average latency under 850ms",c:"Explore API Docs",bg:"linear-gradient(135deg,#0f172a,#334155)"},{t:"Global Compliance & Enterprise SLA",s:"Microsoft Gold Partner. ISO 27001:2022 certified. 99.99% uptime SLA",c:"View Certifications",bg:"linear-gradient(135deg,#0f172a,#1e293b)"},{t:"Reseller Program & White-Label",s:"Launch your own license storefront. Custom branding, flexible margins",c:"Become Partner",bg:"linear-gradient(135deg,#0c1222,#0f172a)"}],s=slides[i];
    useEffect(function(){var t=setInterval(function(){si((i+1)%slides.length)},5000);return function(){clearInterval(t)}},[]);
    return e("section",{style:{position:"relative",minHeight:"80vh",background:s.bg,display:"flex",alignItems:"center",overflow:"hidden"}},
      e("div",{style:{position:"absolute",inset:0,background:"radial-gradient(ellipse at 20% 50%,rgba(99,102,241,0.15),transparent 60%)"}}),
      e("div",{style:{maxWidth:1200,margin:"0 auto",padding:"0 48px",width:"100%",position:"relative",zIndex:1}},
        e("div",{style:{maxWidth:720}},
          e("div",{style:{display:"inline-flex",alignItems:"center",gap:8,padding:"6px 16px",borderRadius:100,background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.1)",marginBottom:24}},
            e("span",{style:{width:8,height:8,borderRadius:"50%",background:"#10b981",display:"inline-block"}}),
            e("span",{style:{color:"rgba(255,255,255,0.8)",fontSize:13,fontWeight:500}},"Authorized Partner")
          ),
          e("h1",{style:{fontSize:"clamp(36px,5vw,52px)",fontWeight:800,color:"#fff",lineHeight:1.1,marginBottom:16,letterSpacing:"-0.03em"}},s.t),
          e("p",{style:{fontSize:"clamp(15px,1.5vw,18px)",color:"rgba(255,255,255,0.7)",lineHeight:1.7,marginBottom:32,maxWidth:560}},s.s),
          e("div",{style:{display:"flex",gap:12,flexWrap:"wrap"}},
            e("button",{style:{padding:"14px 32px",borderRadius:12,border:"none",background:"#6366f1",color:"#fff",fontSize:15,fontWeight:600,cursor:"pointer"}},s.c),
            e("button",{style:{padding:"14px 32px",borderRadius:12,border:"1px solid rgba(255,255,255,0.2)",background:"transparent",color:"#fff",fontSize:15,fontWeight:500,cursor:"pointer"}},"Contact Sales")
          )
        )
      )
    );
  }
  

  console.log("ok");
})();
