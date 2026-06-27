import re
path = r'C:\Users\31961\Local Sites\keysavings\app\public\wp-content\themes\astra\assets\js\b2b-component-plain.js'
c = open(path, encoding='utf-8').read()

# QuickEntryMatrix replacement
old_qe = "function QuickEntryMatrix()"
s = c.find(old_qe)
if s >= 0:
    bc = 0; i = s
    while i < len(c):
        if c[i] == '{': bc += 1
        elif c[i] == '}': bc -= 1
        if bc == 0: break
        i += 1
    new_qe = '  function QuickEntryMatrix() {\n    var items=[["API Access","Integrate"],["Bulk Pricing","Tiers"],["Compliance","ISO/GDPR"],["Reseller Portal","Dashboard"],["Key Generator","Bulk"],["Support","24/7"]];\n    return e("section",{style:{maxWidth:1024,margin:"72px auto",padding:"0 24px"}},e("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",gap:20}},items.map(function(item,i){return e("div",{key:i,style:{textAlign:"center",padding:28,borderRadius:16,background:"rgba(255,255,255,0.6)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",border:"1px solid rgba(100,116,139,0.1)",cursor:"pointer",transition:"all 0.3s cubic-bezier(0.4,0,0.2,1)",textDecoration:"none"},onMouseEnter:function(ev){ev.currentTarget.style.background="rgba(255,255,255,0.9)";ev.currentTarget.style.boxShadow="0 8px 32px rgba(0,0,0,0.06)";ev.currentTarget.style.transform="translateY(-4px)"},onMouseLeave:function(ev){ev.currentTarget.style.background="rgba(255,255,255,0.6)";ev.currentTarget.style.boxShadow="none";ev.currentTarget.style.transform="none"}},e("div",{style:{fontSize:13,fontWeight:600,color:"#0f172a",marginBottom:4}},item[0]),e("div",{style:{fontSize:12,color:"#64748b",marginTop:4}},item[1]))})))\n  }'
    c = c[:s] + new_qe + c[i+1:]
    print("QuickEntryMatrix: OK")

# FeatureCards replacement
old_fc = "function FeatureCards()"
s = c.find(old_fc)
if s >= 0:
    bc = 0; i = s
    while i < len(c):
        if c[i] == '{': bc += 1
        elif c[i] == '}': bc -= 1
        if bc == 0: break
        i += 1
    new_fc = '  function FeatureCards() {\n    var cards=[{t:"Millisecond Anti-Fraud Delivery",d:"Advanced encryption protects every bulk key dispatch with real-time threat detection."},{t:"Global Multi-Currency Settlement",d:"Accept 30+ currencies with real-time exchange rates and zero conversion fees."},{t:"Enterprise Dashboard and Analytics",d:"Central panel to manage 10,000+ licenses instantly with predictive analytics."}];\n    return e("section",{style:{maxWidth:1200,margin:"64px auto",padding:"0 24px"}},e("h2",{style:{fontSize:28,fontWeight:700,color:"#0f172a",marginBottom:32,textAlign:"center",letterSpacing:"-0.02em"}},"Enterprise Solutions"),e("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:24}},cards.map(function(c,i){return e("div",{key:i,style:{background:"rgba(255,255,255,0.6)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",borderRadius:20,padding:32,border:"1px solid rgba(100,116,139,0.1)",cursor:"pointer",transition:"all 0.3s cubic-bezier(0.4,0,0.2,1)"},onMouseEnter:function(ev){ev.currentTarget.style.background="rgba(255,255,255,0.9)";ev.currentTarget.style.boxShadow="0 12px 40px rgba(0,0,0,0.06)";ev.currentTarget.style.transform="translateY(-6px)"},onMouseLeave:function(ev){ev.currentTarget.style.background="rgba(255,255,255,0.6)";ev.currentTarget.style.boxShadow="none";ev.currentTarget.style.transform="none"}},e("h3",{style:{fontSize:18,fontWeight:700,color:"#0f172a",marginBottom:8,letterSpacing:"-0.01em"}},c.t),e("p",{style:{fontSize:14,color:"#64748b",lineHeight:1.7}},c.d))})))\n  }'
    c = c[:s] + new_fc + c[i+1:]
    print("FeatureCards: OK")

# TrustSection replacement
old_ts = "function TrustSection()"
s = c.find(old_ts)
if s >= 0:
    bc = 0; i = s
    while i < len(c):
        if c[i] == '{': bc += 1
        elif c[i] == '}': bc -= 1
        if bc == 0: break
        i += 1
    new_ts = '  function TrustSection() {\n    var _s=useState(false),hover=_s[0],sh=_s[1];\n    var badges=[{t:"Microsoft Partner",d:"Gold Verified",c:"#6366f1"},{t:"ISO 27001",d:"Security Certified",c:"#059669"},{t:"SLA 99.9%",d:"Uptime Guarantee",c:"#ea580c"},{t:"SSL Secure",d:"256-bit Encryption",c:"#7c3aed"}];\n    return e("section",{style:{maxWidth:1200,margin:"72px auto",padding:"0 24px"}},e("h2",{style:{fontSize:28,fontWeight:700,color:"#0f172a",marginBottom:4,textAlign:"center",letterSpacing:"-0.02em"}},"Trusted by Enterprises Worldwide"),e("p",{style:{fontSize:15,color:"#64748b",marginBottom:32,textAlign:"center"}},"Authorized B2B partner. Certified security. Enterprise-grade reliability."),e("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:16,marginBottom:40}},badges.map(function(b,i){return e("div",{key:i,style:{background:"rgba(255,255,255,0.6)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",border:"1px solid rgba(100,116,139,0.1)",borderRadius:16,padding:20,textAlign:"center",cursor:"default",transition:"all 0.3s cubic-bezier(0.4,0,0.2,1)"},onMouseEnter:function(ev){ev.currentTarget.style.background="rgba(255,255,255,0.9)";ev.currentTarget.style.boxShadow="0 8px 32px rgba(0,0,0,0.06)";ev.currentTarget.style.transform="translateY(-3px)"},onMouseLeave:function(ev){ev.currentTarget.style.background="rgba(255,255,255,0.6)";ev.currentTarget.style.boxShadow="none";ev.currentTarget.style.transform="none"}},e("div",{style:{width:44,height:44,borderRadius:14,background:b.c+"15",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px",fontSize:20,color:b.c}},"\\u2713"),e("div",{style:{fontSize:15,fontWeight:700,color:"#0f172a",marginBottom:3}},b.t),e("div",{style:{fontSize:12,color:"#64748b"}},b.d))})),e("div",{style:{maxWidth:960,margin:"0 auto",background:"rgba(255,255,255,0.5)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",border:"1px solid rgba(100,116,139,0.1)",borderRadius:20,padding:"28px 36px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:28,alignItems:"center"},onMouseEnter:function(){sh(true)},onMouseLeave:function(){sh(false)}},e("div",{style:{fontSize:14,color:"#475569",lineHeight:1.7}},e("div",{style:{fontSize:18,fontWeight:700,color:"#0f172a",marginBottom:10}},"Authorization Certificate"),e("div",{style:{marginBottom:14}},"Keys-Starter Inc. is an authorized licensing partner certified for compliance with industry standards for secure digital key distribution."),e("div",{style:{display:"flex",gap:10,flexWrap:"wrap"}},["Authorized Reseller","Genuine Licenses","Secure Delivery","24/7 Support"].map(function(t){return e("span",{key:t,style:{fontSize:12,color:"#059669",background:"rgba(5,150,105,0.08)",padding:"5px 12px",borderRadius:8}},"\\u2713 "+t)}))),e("div",{style:{textAlign:"center",padding:12,border:"1px solid rgba(100,116,139,0.1)",borderRadius:16,background:"rgba(255,255,255,0.6)",transition:"box-shadow 0.3s ease",boxShadow:hover?"0 12px 40px rgba(0,0,0,0.08)":"0 2px 8px rgba(0,0,0,0.03)"}},e("img",{src:"/wp-content/uploads/2026/06/approval.png",alt:"Keys-Starter Authorization Certificate",style:{maxWidth:"100%",height:"auto",display:"block",cursor:"zoom-in",borderRadius:12},onClick:function(){window.open("/wp-content/uploads/2026/06/approval.png","_blank")}}))))\n  }'
    c = c[:s] + new_ts + c[i+1:]
    print("TrustSection: OK")

# CostPerformanceVisual - add glassmorphism
old_cp = "function CostPerformanceVisual()"
s = c.find(old_cp)
if s >= 0:
    bc = 0; i = s
    while i < len(c):
        if c[i] == '{': bc += 1
        elif c[i] == '}': bc -= 1
        if bc == 0: break
        i += 1
    new_cp = '  function CostPerformanceVisual() {\n    var _q=useState(20),q=_q[0],sq=_q[1],_a=useState(false),anim=_a[0],sa=_a[1],_d=useState(20),d=_d[0],sd=_d[1];\n    var tier=q<=20?{d:15,n:"Team"}:q<=50?{d:25,n:"Enterprise"}:{d:35,n:"Global"};\n    var price=(29.99*(1-tier.d/100)).toFixed(2);\n    useEffect(function(){if(typeof gsap!=="undefined"){var o={v:d};gsap.to(o,{v:q,duration:0.5,ease:"back.out(1.5)",onUpdate:function(){sd(Math.round(o.v));sa(true);setTimeout(function(){sa(false)},200)}})}else{sd(q)}},[q]);\n    return e("section",{style:{maxWidth:1200,margin:"72px auto",padding:"0 24px"}},e("h2",{style:{fontSize:28,fontWeight:700,color:"#0f172a",marginBottom:8,textAlign:"center",letterSpacing:"-0.02em"}},"Your Investment. Amplified."),e("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:24,alignItems:"center"}},e("div",{style:{background:"rgba(255,255,255,0.6)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",borderRadius:20,padding:32,border:"1px solid rgba(100,116,139,0.1)"}},e("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:16}},e("span",{style:{fontSize:14,color:"#64748b"}},"Quantity"),e("span",{style:{fontSize:36,fontWeight:800,color:anim?"#059669":"#6366f1",fontFamily:"monospace",transform:anim?"scale(1.1)":"scale(1)",transition:"transform 0.15s"}},d)),e("input",{type:"range",min:5,max:200,value:q,onChange:function(ev){sq(parseInt(ev.target.value))},style:{width:"100%",height:6,borderRadius:3,background:"linear-gradient(90deg,#6366f1,#8b5cf6)",outline:"none"}}),e("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"center",gap:40,marginTop:28,height:140}},e("div",{style:{textAlign:"center"}},e("div",{style:{fontSize:12,color:"#94a3b8",marginBottom:4}},"Investment"),e("div",{style:{width:60,height:Math.min(100,20+q*0.15),background:"linear-gradient(180deg,#fbbf24,#b45309)",borderRadius:"12px 12px 4px 4px",margin:"0 auto",transition:"height 0.3s"}}),e("div",{style:{fontSize:14,fontWeight:700,color:"#0f172a",marginTop:8}},"$"+Math.floor(q*29.99).toLocaleString())),e("div",{style:{fontSize:24,color:"#6366f1",fontWeight:700,paddingTop:50}},"\\u2192"),e("div",{style:{textAlign:"center"}},e("div",{style:{fontSize:12,color:"#94a3b8",marginBottom:4}},"License Keys"),e("div",{style:{width:80,height:Math.min(120,30+q*0.5),background:q>50?"linear-gradient(180deg,#4ade80,#166534)":"linear-gradient(180deg,#818cf8,#3730a3)",borderRadius:"12px 12px 4px 4px",margin:"0 auto",transition:"height 0.3s"}}),e("div",{style:{fontSize:28,fontWeight:800,color:q>50?"#4ade80":"#818cf8",fontFamily:"monospace",marginTop:8}},"$"+price+"/key")))),e("div",{style:{background:"rgba(255,255,255,0.6)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",borderRadius:20,padding:32,border:"1px solid rgba(100,116,139,0.1)",textAlign:"center"}},e("div",{style:{fontSize:36,fontWeight:800,color:"#059669",fontFamily:"monospace"}},tier.d+"% OFF"),e("div",{style:{fontSize:16,fontWeight:600,color:"#0f172a",marginTop:8}},tier.n+" Tier"),e("div",{style:{fontSize:13,color:"#64748b",marginTop:8}},"Drag the slider above \\u2191"))))\n  }'
    c = c[:s] + new_cp + c[i+1:]
    print("CostPerformanceVisual: OK")

open(path, 'w', encoding='utf-8').write(c)
print("All module upgrades applied")
