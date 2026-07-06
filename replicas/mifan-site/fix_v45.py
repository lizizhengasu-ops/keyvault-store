import os
path = os.path.join(r'C:\Users\31961\Documents\microsoft web\mifan-site\src\pages', 'Support.tsx')
with open(path, 'rb') as f:
    c = f.read()

# Improve search bar - make it more Apple Support-like: larger, more prominent
old_search = b'<input type="text" placeholder="Search support topics" style={{width:"100%",padding:"14px 14px 14px 48px",borderRadius:14,border:"1px solid #d2d2d7",background:"#f5f5f7",fontSize:15,color:"#1d1d1f",outline:"none",fontFamily:"inherit",boxSizing:"border-box"}} />'
new_search = b'<input type="text" placeholder="Search support topics" style={{width:"100%",padding:"18px 18px 18px 52px",borderRadius:16,border:"2px solid #d2d2d7",background:"#fff",fontSize:17,color:"#1d1d1f",outline:"none",fontFamily:"inherit",boxSizing:"border-box",boxShadow:"0 2px 8px rgba(0,0,0,0.04)"}} />'

c = c.replace(old_search, new_search)
with open(path, 'wb') as f:
    f.write(c)
print('Support search bar improved')