import os, base64

base = r'C:\Users\31961\Documents\microsoft web\mifan-site\src\pages'

# Cart cleanup
cart_path = os.path.join(base, 'Cart.tsx')
with open(cart_path, 'rb') as f:
    cart = f.read()
old_p = b'<p style={{fontSize:12,color:"#6e6e73",marginTop:2}}></p>'
cart = cart.replace(old_p, b'')
with open(cart_path, 'wb') as f:
    f.write(cart)
print('Cart cleaned')

# B2B ecosystem - base64 encoded to avoid escaping issues
# This is the ecosystem section content
eco_b64 = "CiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ic2VjdGlvbi1pbiIgc3R5bGU9e3twYWRkaW5nOiI0OHB4IDIwcHgiLGJhY2tncm91bmQ6IiNmZmYifX0+CiAgICAgICAgPGgyIHN0eWxlPXt7Zm9udFNpemU6MjQsZm9udFdlaWdodDo2MDAsbGluZUhlaWdodDoxLjE2NjY3LHRleHRBbGlnbjoiY2VudGVyIixtYXJnaW5Cb3R0b206MjQsY29sb3I6IiMxZDFkMWYifX0+RW50ZXJwcmlzZSBFY29zeXN0ZW08L2gyPgogICAgICAgIDxkaXYgY2xhc3NOYW1lPSJzdGFnZ2VyLWdyaWQiIHN0eWxlPXt7ZGlzcGxheToiZ3JpZCIsZ3JpZFRlbXBsYXRlQ29sdW1uczoicmVwZWF0KDMsMWZyKSIsZ2FwOjE2LG1heFdpZHRoOjgwMCxtYXJnaW46IjAgYXV0byJ9fT4KICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSJzdGFnZ2VyLWl0ZW0gY2FyZC1ob3ZlciIgc3R5bGU9e3tiYWNrZ3JvdW5kOiIjZjVmNWY3Iixib3JkZXJSYWRpdXM6MTgscGFkZGluZzoiMjRweCIsYm9yZGVyOiIxcHggc29saWQgI2U2ZTZlYSIsdGV4dEFsaWduOiJjZW50ZXIifX0+CiAgICAgICAgICAgIDxoMyBzdHlsZT17e2ZvbnRTaXplOjE1LGZvbnRXZWlnaHQ6NjAwLGNvbG9yOiIjMWQxZDFmIixtYXJnaW5Cb3R0b206NH19Plplcm8tVG91Y2ggRGVwbG95bWVudDwvaDM+CiAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6MTMsY29sb3I6IiM2ZTZlNzMiLGxpbmVIZWlnaHQ6MS40NzA1OX19PkNvbmZpZ3VyZSB0aG91c2FuZHMgb2YgZGV2aWNlcyByZW1vdGVseSB3aXRoIE1ETS48L3A+CiAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSJzdGFnZ2VyLWl0ZW0gY2FyZC1ob3ZlciIgc3R5bGU9e3tiYWNrZ3JvdW5kOiIjZjVmNWY3Iixib3JkZXJSYWRpdXM6MTgscGFkZGluZzoiMjRweCIsYm9yZGVyOiIxcHggc29saWQgI2U2ZTZlYSIsdGV4dEFsaWduOiJjZW50ZXIifX0+CiAgICAgICAgICAgIDxoMyBzdHlsZT17e2ZvbnRTaXplOjE1LGZvbnRXZWlnaHQ6NjAwLGNvbG9yOiIjMWQxZDFmIixtYXJnaW5Cb3R0b206NH19PjI0LzcgUHJpb3JpdHkgU3VwcG9ydDwvaDM+CiAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6MTMsY29sb3I6IiM2ZTZlNzMiLGxpbmVIZWlnaHQ6MS40NzA1OX19PkRlZGljYXRlZCBhY2NvdW50IG1hbmFnZXIsIDE1LW1pbiByZXNwb25zZSBTbGEuPC9wPgogICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ic3RhZ2dlci1pdGVtIGNhcmQtaG92ZXIiIHN0eWxlPXt7YmFja2dyb3VuZDoiI2Y1ZjVmNyIsYm9yZGVyUmFkaXVzOjE4LHBhZGRpbmc6IjI0cHgiLGJvcmRlcjoiMXB4IHNvbGlkICNlNmU2ZWEiLHRleHRBbGlnbjoiY2VudGVyIn19PgogICAgICAgICAgICA8aDMgc3R5bGU9e3tmb250U2l6ZToxNSxmb250V2VpZ2h0OjYwMCxjb2xvcjoiIzFkMWQxZiIsbWFyZ2luQm90dG9tOjR9fT5DdXN0b20gSW50ZWdyYXRpb248L2gzPgogICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOjEzLGNvbG9yOiIjNmU2ZTczIixsaW5lSGVpZ2h0OjEuNDcwNTl9fT5BUEkgYWNjZXNzLCBjb25maWdzLCBhbmQgd2hpdGUtZ2xvdmUgc2V0dXAuPC9wPgogICAgICAgICAgPC9kaXY+CiAgICAgICAgPC9kaXY+CiAgICAgIDwvc2VjdGlvbj4KCg=="
import base64
eco_bytes = base64.b64decode(eco_b64)

b2b_path = os.path.join(base, 'B2b.tsx')
with open(b2b_path, 'rb') as f:
    b2b = f.read()
marker = b'Read more case studies'
if marker in b2b:
    idx = b2b.find(marker)
    close_idx = b2b.find(b'</section>', idx) + len(b'</section>')
    b2b = b2b[:close_idx] + eco_bytes + b2b[close_idx:]
    with open(b2b_path, 'wb') as f:
        f.write(b2b)
    print('B2B ecosystem added')
else:
    print('B2B marker not found')

# Home refinements
home_path = os.path.join(base, 'Home.tsx')
with open(home_path, 'rb') as f:
    home = f.read()
home = home.replace(b'color:"#0071e3"}}>{r.t}', b'color:"#0071e3",cursor:"pointer"}}>{r.t}')
with open(home_path, 'wb') as f:
    f.write(home)
print('Home refined')
print('V38 done')