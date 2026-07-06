path = r'C:\Users\31961\Documents\microsoft web\mifan-site\src\pages\Support.tsx'
with open(path, 'r', encoding='utf-8') as f:
    c = f.read()

# Step 1: Add search bar - SAFE pattern (no stray quotes)
search = '''
      <section style={{padding:"0 20px",maxWidth:700,margin:"0 auto"}}>
        <div style={{position:"relative",marginBottom:32,marginTop:32}}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6e6e73" strokeWidth="1.5" style={{position:"absolute",left:16,top:"50%",transform:"translateY(-50%)",pointerEvents:"none"}}>
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input type="text" placeholder="Search support topics" style={{width:"100%",padding:"14px 14px 14px 48px",borderRadius:14,border:"1px solid #d2d2d7",background:"#f5f5f7",fontSize:15,color:"#1d1d1f",outline:"none",fontFamily:"inherit",boxSizing:"border-box"}} />
        </div>
      </section>

'''
first = c.find('<section')
c = c[:first] + search + c[first:]

# Step 2: Add knowledge base - SAFE pattern (no stray quotes)
articles = '''
      <section className="section-in" style={{padding:"48px 20px",background:"#f5f5f7"}}>
        <h2 style={{fontSize:24,fontWeight:600,color:"#1d1d1f",marginBottom:24,lineHeight:1.16667,textAlign:"center"}}>Knowledge Base</h2>
        <div style={{maxWidth:800,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:16}}>
          <div className="card-hover" style={{background:"#fff",borderRadius:18,padding:"24px",border:"1px solid #e6e6ea"}}>
            <p style={{fontSize:12,color:"#0071e3",fontWeight:600,textTransform:"uppercase",letterSpacing:".05em",marginBottom:4}}>Setup</p>
            <h3 style={{fontSize:17,fontWeight:600,color:"#1d1d1f",marginBottom:4}}>Set up your new mPhone</h3>
            <p style={{fontSize:13,color:"#6e6e73",lineHeight:1.47059,marginBottom:8}}>Step-by-step guide to activate and configure your device.</p>
            <a className="btn-link" style={{fontSize:13}}>Read more &gt;</a>
          </div>
          <div className="card-hover" style={{background:"#fff",borderRadius:18,padding:"24px",border:"1px solid #e6e6ea"}}>
            <p style={{fontSize:12,color:"#0071e3",fontWeight:600,textTransform:"uppercase",letterSpacing:".05em",marginBottom:4}}>Troubleshooting</p>
            <h3 style={{fontSize:17,fontWeight:600,color:"#1d1d1f",marginBottom:4}}>Battery and charging issues</h3>
            <p style={{fontSize:13,color:"#6e6e73",lineHeight:1.47059,marginBottom:8}}>Diagnose and resolve common battery problems.</p>
            <a className="btn-link" style={{fontSize:13}}>Read more &gt;</a>
          </div>
          <div className="card-hover" style={{background:"#fff",borderRadius:18,padding:"24px",border:"1px solid #e6e6ea"}}>
            <p style={{fontSize:12,color:"#0071e3",fontWeight:600,textTransform:"uppercase",letterSpacing:".05em",marginBottom:4}}>Software</p>
            <h3 style={{fontSize:17,fontWeight:600,color:"#1d1d1f",marginBottom:4}}>iOS update guide</h3>
            <p style={{fontSize:13,color:"#6e6e73",lineHeight:1.47059,marginBottom:8}}>How to update your mPhone to the latest iOS version.</p>
            <a className="btn-link" style={{fontSize:13}}>Read more &gt;</a>
          </div>
          <div className="card-hover" style={{background:"#fff",borderRadius:18,padding:"24px",border:"1px solid #e6e6ea"}}>
            <p style={{fontSize:12,color:"#0071e3",fontWeight:600,textTransform:"uppercase",letterSpacing:".05em",marginBottom:4}}>Service</p>
            <h3 style={{fontSize:17,fontWeight:600,color:"#1d1d1f",marginBottom:4}}>Schedule a repair</h3>
            <p style={{fontSize:13,color:"#6e6e73",lineHeight:1.47059,marginBottom:8}}>Book a repair appointment at your nearest service center.</p>
            <a className="btn-link" style={{fontSize:13}}>Read more &gt;</a>
          </div>
        </div>
      </section>

'''

still_idx = c.find('Still need help')
if still_idx > 0:
    prev_sec = c.rfind('<section', 0, still_idx)
    c = c[:prev_sec] + articles + c[prev_sec:]

with open(path, 'w', encoding='utf-8') as f:
    f.write(c)
print(f'Support.tsx rewritten: {len(c)} chars')