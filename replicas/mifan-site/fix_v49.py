import os

base = r'C:\Users\31961\Documents\microsoft web\mifan-site\src\pages'
PROD = os.path.join(base, 'Product.tsx')

with open(PROD, 'rb') as f:
    p = f.read()

# ===== Improve tech specs with categories =====
# Current specs are flat 2-column grid. Change to categorized sections.
# Find the Tech Specs section
specs_start = p.find(b'Tech Specs')
if specs_start > 0:
    # Find the current specs grid
    grid_start = p.find(b'maxWidth:600', specs_start)
    grid_end = p.find(b'</section>', grid_start)
    
    if grid_start > 0 and grid_end > 0:
        # New categorized specs
        new_specs = b'''<h2 style={{fontSize:28,fontWeight:600,textAlign:"center",marginBottom:24}}>Tech Specs</h2>
        <div style={{maxWidth:600,margin:"0 auto"}}>
          <div style={{marginBottom:24}}>
            <p style={{fontSize:11,fontWeight:600,color:"#0071e3",textTransform:"uppercase",letterSpacing:".05em",marginBottom:8}}>Display</p>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
              <div style={{background:"#f5f5f7",borderRadius:12,padding:"12px 16px"}}>
                <p style={{fontSize:10,fontWeight:600,color:"#6e6e73",textTransform:"uppercase",letterSpacing:".03em",marginBottom:2}}>Type</p>
                <p style={{fontSize:14,fontWeight:400,color:"#1d1d1f"}}>6.1in Super Retina XDR</p>
              </div>
              <div style={{background:"#f5f5f7",borderRadius:12,padding:"12px 16px"}}>
                <p style={{fontSize:10,fontWeight:600,color:"#6e6e73",textTransform:"uppercase",letterSpacing:".03em",marginBottom:2}}>Resolution</p>
                <p style={{fontSize:14,fontWeight:400,color:"#1d1d1f"}}>2532x1170 pixels</p>
              </div>
              <div style={{background:"#f5f5f7",borderRadius:12,padding:"12px 16px"}}>
                <p style={{fontSize:10,fontWeight:600,color:"#6e6e73",textTransform:"uppercase",letterSpacing:".03em",marginBottom:2}}>Refresh Rate</p>
                <p style={{fontSize:14,fontWeight:400,color:"#1d1d1f"}}>120Hz ProMotion</p>
              </div>
              <div style={{background:"#f5f5f7",borderRadius:12,padding:"12px 16px"}}>
                <p style={{fontSize:10,fontWeight:600,color:"#6e6e73",textTransform:"uppercase",letterSpacing:".03em",marginBottom:2}}>Brightness</p>
                <p style={{fontSize:14,fontWeight:400,color:"#1d1d1f"}}>1200 nits peak</p>
              </div>
            </div>
          </div>
          <div style={{marginBottom:24}}>
            <p style={{fontSize:11,fontWeight:600,color:"#0071e3",textTransform:"uppercase",letterSpacing:".05em",marginBottom:8}}>Chip</p>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
              <div style={{background:"#f5f5f7",borderRadius:12,padding:"12px 16px"}}>
                <p style={{fontSize:10,fontWeight:600,color:"#6e6e73",textTransform:"uppercase",letterSpacing:".03em",marginBottom:2}}>SoC</p>
                <p style={{fontSize:14,fontWeight:400,color:"#1d1d1f"}}>A13 Bionic</p>
              </div>
              <div style={{background:"#f5f5f7",borderRadius:12,padding:"12px 16px"}}>
                <p style={{fontSize:10,fontWeight:600,color:"#6e6e73",textTransform:"uppercase",letterSpacing:".03em",marginBottom:2}}>CPU</p>
                <p style={{fontSize:14,fontWeight:400,color:"#1d1d1f"}}>6-core (2P + 4E)</p>
              </div>
              <div style={{background:"#f5f5f7",borderRadius:12,padding:"12px 16px"}}>
                <p style={{fontSize:10,fontWeight:600,color:"#6e6e73",textTransform:"uppercase",letterSpacing:".03em",marginBottom:2}}>GPU</p>
                <p style={{fontSize:14,fontWeight:400,color:"#1d1d1f"}}>4-core Apple GPU</p>
              </div>
              <div style={{background:"#f5f5f7",borderRadius:12,padding:"12px 16px"}}>
                <p style={{fontSize:10,fontWeight:600,color:"#6e6e73",textTransform:"uppercase",letterSpacing:".03em",marginBottom:2}}>Neural Engine</p>
                <p style={{fontSize:14,fontWeight:400,color:"#1d1d1f"}}>16-core, 5 TOPS</p>
              </div>
            </div>
          </div>
          <div style={{marginBottom:24}}>
            <p style={{fontSize:11,fontWeight:600,color:"#0071e3",textTransform:"uppercase",letterSpacing:".05em",marginBottom:8}}>Camera</p>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
              <div style={{background:"#f5f5f7",borderRadius:12,padding:"12px 16px"}}>
                <p style={{fontSize:10,fontWeight:600,color:"#6e6e73",textTransform:"uppercase",letterSpacing:".03em",marginBottom:2}}>Wide</p>
                <p style={{fontSize:14,fontWeight:400,color:"#1d1d1f"}}>12MP f/1.6</p>
              </div>
              <div style={{background:"#f5f5f7",borderRadius:12,padding:"12px 16px"}}>
                <p style={{fontSize:10,fontWeight:600,color:"#6e6e73",textTransform:"uppercase",letterSpacing:".03em",marginBottom:2}}>Telephoto</p>
                <p style={{fontSize:14,fontWeight:400,color:"#1d1d1f"}}>12MP f/2.0</p>
              </div>
              <div style={{background:"#f5f5f7",borderRadius:12,padding:"12px 16px"}}>
                <p style={{fontSize:10,fontWeight:600,color:"#6e6e73",textTransform:"uppercase",letterSpacing:".03em",marginBottom:2}}>Ultra Wide</p>
                <p style={{fontSize:14,fontWeight:400,color:"#1d1d1f"}}>12MP f/2.4</p>
              </div>
              <div style={{background:"#f5f5f7",borderRadius:12,padding:"12px 16px"}}>
                <p style={{fontSize:10,fontWeight:600,color:"#6e6e73",textTransform:"uppercase",letterSpacing:".03em",marginBottom:2}}>LiDAR</p>
                <p style={{fontSize:14,fontWeight:400,color:"#1d1d1f"}}>Scanner</p>
              </div>
            </div>
          </div>
        </div>
'''
        p = p[:grid_start] + new_specs + p[grid_end:]
        with open(PROD, 'wb') as f:
            f.write(p)
        print('Product: categorized specs added')
    else:
        print('grid not found')
else:
    print('Tech Specs not found')

print('V49 done')