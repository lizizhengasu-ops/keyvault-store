(function() {
  var e=React.createElement,useState=React.useState,useEffect=React.useEffect;
function HeaderSearch() {
    var _q=useState(""),q=_q[0],sq=_q[1];
    return e("header",{style:{background:"rgba(255,255,255,0.75)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",borderBottom:"1px solid rgba(100,116,139,0.08)",position:"sticky",top:0,zIndex:100}},e("div",{style:{maxWidth:1280,margin:"0 auto",padding:"12px 24px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:16}},e("div",{style:{display:"flex",alignItems:"center",gap:24}},e("a",{href:"/",style:{fontSize:20,fontWeight:700,color:"#0f172a",textDecoration:"none"}},"Keys-Starter"),e("nav",{style:{display:"flex",gap:20}},["B2B Wholesale","API Access","Pricing","Support"].map(function(t){return e("a",{key:t,href:"#",style:{fontSize:13,color:"#334155",textDecoration:"none"}},t)}))),e("div",{style:{display:"flex",alignItems:"center",gap:8}},e("input",{type:"text",placeholder:"Search SKU or batch ID...",value:q,onChange:function(ev){sq(ev.target.value)},style:{padding:"8px 14px",borderRadius:16,border:"1px solid rgba(100,116,139,0.2)",fontSize:13,width:260,outline:"none"}}),e("button",{style:{padding:"8px 16px",background:"#6366f1",color:"#fff",border:"none",borderRadius:16,fontWeight:600,fontSize:12,cursor:"pointer"}},"Search"))))
  }

    
  console.log("ok");
})();
