import os
path = os.path.join(r'C:\Users\31961\Documents\microsoft web\mifan-site\src\pages', 'Cart.tsx')
with open(path, 'rb') as f:
    c = f.read()

# Add Apple Pay button between Check Out and delivery info
# Marker: end of Check Out button div
marker = b'Check Out</div>\r\n      <p style={{fontSize:12'
if marker in c:
    applepay_html = b'Check Out</div>\r\n      <div style={{display:"flex",gap:12,justifyContent:"center",marginTop:12}}>\r\n        <div style={{flex:1,background:"#000",color:"#fff",padding:"12px 20px",borderRadius:980,textAlign:"center",fontSize:14,fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:8,letterSpacing:"0.3px"}} role="button" tabIndex={0} aria-label="Check out with Apple Pay" onKeyDown={e=>e.key==="Enter"&&alert("Apple Pay coming soon")}>\r\n          <svg width="32" height="20" viewBox="0 0 80 24" fill="#fff"><text x="0" y="18" fontSize="14" fontWeight="bold" fontFamily="sans-serif">Apple&nbsp;Pay</text></svg>\r\n        </div>\r\n      </div>\r\n      <p style={{fontSize:12,color:"#6e6e73",marginTop:12'
    c = c.replace(marker, applepay_html)
    with open(path, 'wb') as f:
        f.write(c)
    print('Cart: Apple Pay button added')
else:
    print('Cart: marker not found')
    # Print context around Check Out
    idx = c.find(b'Check Out</div>')
    if idx > 0:
        print(f'Context: {c[idx:idx+180]}')