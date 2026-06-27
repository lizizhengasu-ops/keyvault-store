import sys, re
sys.stdout.reconfigure(encoding="utf-8")

path = r"C:\Users\31961\Local Sites\keysavings\app\public\wp-content\themes\astra\assets\js\b2b-component-plain.js"
with open(path, "r", encoding="utf-8") as f:
    c = f.read()

# ===== 1. Upgrade HeroCarousel =====
new_hero = '''  function HeroCarousel() {
    var slides=[{t:"Enterprise Bulk Licensing Platform",s:"Scale Windows, Office & server license keys with tiered discounts up to 40%. Direct Microsoft partner pricing.",c:"View Volume Plans",bg:"linear-gradient(135deg,#0c1222,#1e293b)"},{t:"Automated API Instant Delivery",s:"RESTful API for real-time bulk key generation & distribution. Average latency under 850ms.",c:"Explore API Docs",bg:"linear-gradient(135deg,#0f172a,#334155)"},{t:"Global Compliance & Enterprise SLA",s:"Microsoft Gold Partner. ISO 27001:2022 certified. 99.99% uptime SLA with 24/7 dedicated support.",c:"View Certifications",bg:"linear-gradient(135deg,#0f172a,#1e293b)"},{t:"Reseller Program & White-Label",s:"Launch your own license storefront. Custom branding, flexible margins, zero inventory risk.",c:"Become Partner",bg:"linear-gradient(135deg,#0c1222,#0f172a)"}];
    var idx=useState(0),i=idx[0],si=idx[1];
    useEffect(function(){var t=setInterval(function(){si(function(p){return(p+1)%slides.length})},5000);return function(){clearInterval(t)}},[]);
    return e("section",{style:{position:"relative",minHeight:"85vh",background:slides[i].bg,display:"flex",alignItems:"center",overflow:"hidden"}},e("div",{style:{position:"absolute",inset:0,background:"radial-gradient(ellipse at 20% 50%,rgba(99,102,241,0.15),transparent 60%),radial-gradient(ellipse at 80% 50%,rgba(139,92,246,0.1),transparent 60%)"}}),e("div",{style:{maxWidth:1200,margin:"0 auto",padding:"0 48px",width:"100%",position:"relative",zIndex:1}},e("div",{style:{maxWidth:720}},e("div",{style:{display:"inline-flex",alignItems:"center",gap:8,padding:"6px 16px",borderRadius:100,background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.1)",marginBottom:24}},e("span",{style:{width:8,height:8,borderRadius:"50%",background:"#10b981",display:"inline-block"}}),e("span",{style:{color:"rgba(255,255,255,0.8)",fontSize:13,fontWeight:500,letterSpacing:"0.02em"}},"Authorized "+(i===0?"Microsoft Distribution Partner":i===1?"API-Ready Platform":i===2?"Security Certified":"Partner Network"))),e("h1",{style:{fontSize:"clamp(40px,5vw,56px)",fontWeight:800,color:"#fff",lineHeight:1.1,marginBottom:16,letterSpacing:"-0.03em"}},slides[i].t),e("p",{style:{fontSize:"clamp(16px,1.5vw,20px)",color:"rgba(255,255,255,0.7)",lineHeight:1.7,marginBottom:32,maxWidth:560}},slides[i].s),e("div",{style:{display:"flex",gap:12,flexWrap:"wrap"}},e("button",{style:{padding:"14px 32px",borderRadius:12,border:"none",background:"linear-gradient(135deg,#6366f1,#8b5cf6)",color:"#fff",fontSize:15,fontWeight:600,cursor:"pointer",transition:"all 0.2s",boxShadow:"0 4px 20px rgba(99,102,241,0.3)"},onMouseEnter:function(ev){ev.currentTarget.style.transform="translateY(-2px)";ev.currentTarget.style.boxShadow="0 8px 30px rgba(99,102,241,0.4)"},onMouseLeave:function(ev){ev.currentTarget.style.transform="none";ev.currentTarget.style.boxShadow="0 4px 20px rgba(99,102,241,0.3)"}},slides[i].c),e("button",{style:{padding:"14px 32px",borderRadius:12,border:"1px solid rgba(255,255,255,0.2)",background:"transparent",color:"#fff",fontSize:15,fontWeight:500,cursor:"pointer",transition:"all 0.2s"},onMouseEnter:function(ev){ev.currentTarget.style.background="rgba(255,255,255,0.1)"},onMouseLeave:function(ev){ev.currentTarget.style.background="transparent"}},"Contact Sales"))),e("div",{style:{display:"flex",justifyContent:"center",gap:12,marginTop:48}},slides.map(function(sl,j){return e("button",{key:j,onClick:function(){si(j)},style:{width:j===i?40:12,height:4,borderRadius:2,border:"none",background:j===i?"#6366f1":"rgba(255,255,255,0.2)",cursor:"pointer",transition:"all 0.3s"}})}))))}
  }'''

s = c.find("function HeroCarousel()")
e = s + 1
bc = 0
while e < len(c):
    if c[e] == "{": bc += 1
    elif c[e] == "}": bc -= 1
    if bc == 0: break
    e += 1
c = c[:s] + new_hero + c[e+1:]
print("HeroCarousel: upgraded")

# ===== 2. Upgrade FeatureCards =====
new_fc = '''  function FeatureCards() {
    var cards=[{t:"Millisecond Anti-Fraud Delivery Shield",d:"Our advanced encryption engine verifies, encrypts, and delivers each bulk key with real-time fraud detection and transaction monitoring.",icon:"\\u26a1"},{t:"Global Multi-Currency Settlement",d:"Accept payments in 30+ currencies with real-time exchange rates. Zero conversion fees. Instant settlement for verified partners.",icon:"\\ud83c\\udf10"},{t:"Enterprise Dashboard & Predictive Analytics",d:"Central command center to manage 10,000+ licenses instantly. AI-powered predictive analytics for inventory forecasting.",icon:"\\ud83d\\udcca"}];
    return e("section",{style:{maxWidth:1200,margin:"80px auto",padding:"0 24px"}},e("h2",{style:{fontSize:32,fontWeight:700,color:"#0f172a",marginBottom:8,textAlign:"center",letterSpacing:"-0.02em"}},"Enterprise-Grade Infrastructure"),e("p",{style:{fontSize:16,color:"#64748b",marginBottom:48,textAlign:"center",maxWidth:600,margin:"0 auto 48px"}},"Built for high-volume license distribution with enterprise security and reliability at every layer."),e("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))",gap:28}},cards.map(function(c,i){return e("div",{key:i,style:{background:"rgba(255,255,255,0.7)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",borderRadius:24,padding:36,border:"1px solid rgba(100,116,139,0.08)",cursor:"default",transition:"all 0.4s cubic-bezier(0.4,0,0.2,1)"},onMouseEnter:function(ev){ev.currentTarget.style.background="rgba(255,255,255,0.95)";ev.currentTarget.style.boxShadow="0 20px 60px rgba(0,0,0,0.06)";ev.currentTarget.style.transform="translateY(-8px)"},onMouseLeave:function(ev){ev.currentTarget.style.background="rgba(255,255,255,0.7)";ev.currentTarget.style.boxShadow="none";ev.currentTarget.style.transform="none"}},e("div",{style:{width:52,height:52,borderRadius:16,background:"linear-gradient(135deg,rgba(99,102,241,0.1),rgba(139,92,246,0.1))",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:20,fontSize:24}},c.icon),e("h3",{style:{fontSize:20,fontWeight:700,color:"#0f172a",marginBottom:10,letterSpacing:"-0.01em"}},c.t),e("p",{style:{fontSize:14,color:"#64748b",lineHeight:1.8}},c.d))})))\n  }'''
s = c.find("function FeatureCards()")
e = s + 1
bc = 0
while e < len(c):
    if c[e] == "{": bc += 1
    elif c[e] == "}": bc -= 1
    if bc == 0: break
    e += 1
c = c[:s] + new_fc + c[e+1:]
print("FeatureCards: upgraded")

# ===== 3. Upgrade QuickEntryMatrix =====
new_qe = '''  function QuickEntryMatrix() {
    var items=[["API Integration","Connect"],["Bulk Pricing","Tiers"],["Compliance","ISO/GDPR"],["Reseller Portal","Dashboard"],["Key Generator","Generate"],["24/7 Support","Contact"]];
    return e("section",{style:{maxWidth:1024,margin:"72px auto",padding:"0 24px"}},e("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))",gap:20}},items.map(function(item,i){return e("div",{key:i,style:{textAlign:"center",padding:28,borderRadius:16,background:"rgba(255,255,255,0.6)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",border:"1px solid rgba(100,116,139,0.08)",cursor:"pointer",transition:"all 0.3s cubic-bezier(0.4,0,0.2,1)"},onMouseEnter:function(ev){ev.currentTarget.style.background="rgba(255,255,255,0.9)";ev.currentTarget.style.boxShadow="0 8px 32px rgba(0,0,0,0.06)";ev.currentTarget.style.transform="translateY(-4px)"},onMouseLeave:function(ev){ev.currentTarget.style.background="rgba(255,255,255,0.6)";ev.currentTarget.style.boxShadow="none";ev.currentTarget.style.transform="none"}},e("div",{style:{fontSize:14,fontWeight:600,color:"#0f172a",marginBottom:4}},item[0]),e("div",{style:{fontSize:12,color:"#6366f1",fontWeight:500,marginTop:4}},item[1]))}))\n  }'''
s = c.find("function QuickEntryMatrix()")
e = s + 1
bc = 0
while e < len(c):
    if c[e] == "{": bc += 1
    elif c[e] == "}": bc -= 1
    if bc == 0: break
    e += 1
c = c[:s] + new_qe + c[e+1:]
print("QuickEntryMatrix: upgraded")

# ===== 4. Upgrade MegaFooter =====
new_mf = '''  function MegaFooter() {
    var cols=[{t:"Products",l:["Windows 11 Pro/Enterprise","Windows Server 2025","Office 2024 Pro Plus","SQL Server 2022","Exchange Online Plan","Visual Studio Pro","Azure Credits"]},{t:"For Business",l:["Volume Licensing","API Bulk Keys","Enterprise SLA","GDPR Compliance","ISO 27001 Certified","Partner Program","Reseller Portal"]},{t:"Support",l:["Knowledge Base","API Documentation","System Status","Sales Team","Tickets Portal","Community Forum","Video Tutorials"]},{t:"Company",l:["About Keys-Starter","Partners & Certifications","Careers","Press & News","Privacy Policy","Terms of Service","Contact Us"]}];
    return e("footer",{style:{background:"#0f172a",color:"#fff",padding:"60px 24px 32px",marginTop:0}},e("div",{style:{maxWidth:1200,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:40}},cols.map(function(col,i){return e("div",{key:i},e("h4",{style:{fontSize:14,fontWeight:700,color:"#6366f1",marginBottom:20,letterSpacing:"0.05em",textTransform:"uppercase"}},col.t),e("ul",{style:{listStyle:"none",padding:0,margin:0}},col.l.map(function(link,j){return e("li",{key:j,style:{marginBottom:10}},e("a",{href:"#",style:{color:"rgba(255,255,255,0.6)",fontSize:14,textDecoration:"none",transition:"color 0.2s",cursor:"pointer"},onMouseEnter:function(ev){ev.currentTarget.style.color="#fff"},onMouseLeave:function(ev){ev.currentTarget.style.color="rgba(255,255,255,0.6)"}},link)})))}))),e("div",{style:{maxWidth:1200,margin:"48px auto 0",paddingTop:32,borderTop:"1px solid rgba(255,255,255,0.08)",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16}},e("div",{style:{fontSize:13,color:"rgba(255,255,255,0.4)"}},"\\u00a9 2026 Keys-Starter Inc. All rights reserved."),e("div",{style:{display:"flex",gap:16}},["Privacy","Terms","Cookies"].map(function(t){return e("a",{key:t,href:"#",style:{fontSize:13,color:"rgba(255,255,255,0.4)",textDecoration:"none",transition:"color 0.2s"},onMouseEnter:function(ev){ev.currentTarget.style.color="#fff"},onMouseLeave:function(ev){ev.currentTarget.style.color="rgba(255,255,255,0.4)"}},t)}))))\n  }'''
s = c.find("function MegaFooter()")
e = s + 1
bc = 0
while e < len(c):
    if c[e] == "{": bc += 1
    elif c[e] == "}": bc -= 1
    if bc == 0: break
    e += 1
c = c[:s] + new_mf + c[e+1:]
print("MegaFooter: upgraded")

# ===== 5. Upgrade CostPerformanceVisual content =====
new_cp = '''  function CostPerformanceVisual() {
    var _q=useState(20),q=_q[0],sq=_q[1],_a=useState(false),anim=_a[0],sa=_a[1],_d=useState(20),d=_d[0],sd=_d[1];
    var tier=q<=20?{d:18,n:"Starter"}:q<=50?{d:28,n:"Business"}:q<=100?{d:38,n:"Enterprise"}:{d:48,n:"Global"};
    var price=(29.99*(1-tier.d/100)).toFixed(2),origPrice=(29.99).toFixed(2);
    useEffect(function(){if(typeof gsap!=="undefined"){var o={v:d};gsap.to(o,{v:q,duration:0.5,ease:"back.out(1.7)",onUpdate:function(){sd(Math.round(o.v));sa(true);setTimeout(function(){sa(false)},200)}})}else{sd(q)}},[q]);
    return e("section",{style:{maxWidth:1200,margin:"80px auto",padding:"0 24px"}},e("h2",{style:{fontSize:32,fontWeight:700,color:"#0f172a",marginBottom:6,textAlign:"center",letterSpacing:"-0.02em"}},"Volume Pricing Calculator"),e("p",{style:{fontSize:16,color:"#64748b",marginBottom:48,textAlign:"center"}},"Drag the slider to see your savings at every tier."),e("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(340px,1fr))",gap:24,alignItems:"center"}},e("div",{style:{background:"rgba(255,255,255,0.7)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",borderRadius:24,padding:36,border:"1px solid rgba(100,116,139,0.08)"}},e("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:20}},e("span",{style:{fontSize:14,color:"#64748b",fontWeight:500}},"License Quantity"),e("span",{style:{fontSize:42,fontWeight:800,color:anim?"#059669":"#6366f1",fontFamily:"'Inter',monospace",transition:"transform 0.15s,color 0.2s"}},d)),e("input",{type:"range",min:5,max:200,value:q,onChange:function(ev){sq(parseInt(ev.target.value))},style:{width:"100%",height:6,borderRadius:3,background:"linear-gradient(90deg,#6366f1,#8b5cf6)",outline:"none",cursor:"pointer"}}),e("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"space-around",gap:20,marginTop:32,height:160}},e("div",{style:{textAlign:"center",flex:1}},e("div",{style:{fontSize:12,color:"#94a3b8",fontWeight:500,marginBottom:6,textTransform:"uppercase",letterSpacing:"0.05em"}},"Investment"),e("div",{style:{width:"100%",height:Math.min(110,20+q*0.15),background:"linear-gradient(180deg,#f59e0b,#d97706)",borderRadius:"12px 12px 4px 4px",transition:"height 0.4s cubic-bezier(0.4,0,0.2,1)"}}),e("div",{style:{fontSize:14,fontWeight:700,color:"#0f172a",marginTop:8}},"$"+Math.floor(q*29.99).toLocaleString())),e("div",{style:{display:"flex",alignItems:"center",paddingTop:60}},"\\u2192"),e("div",{style:{textAlign:"center",flex:1}},e("div",{style:{fontSize:12,color:"#94a3b8",fontWeight:500,marginBottom:6,textTransform:"uppercase",letterSpacing:"0.05em"}},"License Keys"),e("div",{style:{width:"100%",height:Math.min(130,30+q*0.5),background:q>50?"linear-gradient(180deg,#10b981,#059669)":"linear-gradient(180deg,#818cf8,#4f46e5)",borderRadius:"12px 12px 4px 4px",transition:"height 0.4s cubic-bezier(0.4,0,0.2,1)"}}),e("div",{style:{fontSize:28,fontWeight:800,color:q>50?"#10b981":"#818cf8",fontFamily:"'Inter',monospace",marginTop:8,transition:"color 0.3s"}},"$"+price+"/key")))),e("div",{style:{background:"rgba(255,255,255,0.7)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",borderRadius:24,padding:36,border:"1px solid rgba(100,116,139,0.08)",textAlign:"center"}},e("div",{style:{display:"inline-flex",alignItems:"center",gap:8,padding:"8px 20px",borderRadius:100,background:"linear-gradient(135deg,rgba(5,150,105,0.1),rgba(16,185,129,0.1))",border:"1px solid rgba(5,150,105,0.15)",marginBottom:20}},e("span",{style:{fontSize:14,fontWeight:600,color:"#059669"}},"YOU SAVE")),e("div",{style:{fontSize:48,fontWeight:800,color:"#059669",fontFamily:"'Inter',monospace",lineHeight:1.2}},""+tier.d+"%"),e("div",{style:{fontSize:14,fontWeight:500,color:"#475569",marginTop:6,marginBottom:4}},"Per-key discount — "+tier.n+" Tier"),e("div",{style:{fontSize:12,color:"#94a3b8",marginBottom:16}},"Original: $"+origPrice+"/key"),e("div",{style:{width:"100%",height:4,borderRadius:2,background:"#e2e8f0",margin:"16px 0",overflow:"hidden"}},e("div",{style:{height:"100%",width:""+tier.d*2+"%",background:"linear-gradient(90deg,#10b981,#059669)",borderRadius:2,transition:"width 0.4s"}})),e("button",{style:{marginTop:20,padding:"12px 28px",borderRadius:12,border:"none",background:"linear-gradient(135deg,#6366f1,#8b5cf6)",color:"#fff",fontSize:14,fontWeight:600,cursor:"pointer",transition:"all 0.2s",boxShadow:"0 4px 20px rgba(99,102,241,0.3)"},onMouseEnter:function(ev){ev.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:function(ev){ev.currentTarget.style.transform="none"}},"Get This Pricing"))))\n  }'''
s = c.find("function CostPerformanceVisual()")
e = s + 1
bc = 0
while e < len(c):
    if c[e] == "{": bc += 1
    elif c[e] == "}": bc -= 1
    if bc == 0: break
    e += 1
c = c[:s] + new_cp + c[e+1:]
print("CostPerformanceVisual: upgraded")

# Save
with open(path, "w", encoding="utf-8") as f:
    f.write(c)

print(f"\nFile saved. New size: {len(c)} chars")
