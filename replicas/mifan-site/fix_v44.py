import os
path = r'C:\Users\31961\Documents\microsoft web\mifan-site\src\pages\Home.tsx'
with open(path, 'rb') as f:
    c = f.read()
end = c.rfind(b'</>\r\n')
if end > 0:
    note = b'\n      <div style={{textAlign:"center",padding:"20px 20px 32px",background:"#f5f5f7",fontSize:13,color:"#6e6e73",lineHeight:1.6}}>\n        <p style={{marginBottom:4}}>Get $200-$650 for your current phone. From $41.62/mo. at 0% APR. Free delivery.</p>\n      </div>\n\n'
    c = c[:end] + note + c[end:]
    with open(path, 'wb') as f:
        f.write(c)
    print('V44: Financing note added')