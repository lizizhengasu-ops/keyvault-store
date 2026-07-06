path = r'C:\Users\31961\Documents\microsoft web\mifan-site\src\pages\Support.tsx'
with open(path, 'rb') as f:
    c = f.read()
# Replace the problematic byte sequence
# The issue is: ...}}">Battery... where ">Battery is quote starting text
# Fix: change to ...}}>Battery (remove stray quote)
c = c.replace(b'}">Battery', b'}>Battery')
c = c.replace(b'}">Diagnose', b'}>Diagnose')
c = c.replace(b'}">How to', b'}>How to')
c = c.replace(b'}">Book a', b'}>Book a')
c = c.replace(b'}">Step-by-step', b'}>Step-by-step')
with open(path, 'wb') as f:
    f.write(c)
print('Fixed via binary mode')