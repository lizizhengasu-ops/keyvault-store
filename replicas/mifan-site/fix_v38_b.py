import os, base64

base = r'C:\Users\31961\Documents\microsoft web\mifan-site\src\pages'

# B2B ecosystem - base64 encoded
# Decodes to: a section with "Enterprise Ecosystem" heading and 3 feature cards
eco_b64 = "CiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ic2VjdGlvbi1pbiIgc3R5bGU9e3twYWRkaW5nOiI0OHB4IDIwcHgiLGJhY2tncm91bmQ6IiNmZmYifX0+CiAgICAgICAgPGgyIHN0eWxlPXt7Zm9udFNpemU6MjQsZm9udFdlaWdodDo2MDAsbGluZUhlaWdodDoxLjE2NjY3LHRleHRBbGlnbjoiY2VudGVyIixtYXJnaW5Cb3R0b206MjQsY29sb3I6IiMxZDFkMWYifX0+RW50ZXJwcmlzZSBFY29zeXN0ZW08L2gyPgogICAgICAgIDxkaXYgY2xhc3NOYW1lPSJzdGFnZ2VyLWdyaWQiIHN0eWxlPXt7ZGlzcGxheToiZ3JpZCIsZ3JpZFRlbXBsYXRlQ29sdW1uczoicmVwZWF0KDMsMWZyKSIsZ2FwOjE2LG1heFdpZHRoOjgwMCxtYXJnaW46IjAgYXV0byJ9fT4KICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSJzdGFnZ2VyLWl0ZW0gY2FyZC1ob3ZlciIgc3R5bGU9e3tiYWNrZ3JvdW5kOiIjZjVmNWY3Iixib3JkZXJSYWRpdXM6MTgscGFkZGluZzoiMjRweCIsYm9yZGVyOiIxcHggc29saWQgI2U2ZTZlYSIsdGV4dEFsaWduOiJjZW50ZXIifX0+CiAgICAgICAgICAgIDxoMyBzdHlsZT17e2ZvbnRTaXplOjE1LGZvbnRXZWlnaHQ6NjAwLGNvbG9yOiIjMWQxZDFmIixtYXJnaW5Cb3R0b206NH19Plplcm8tVG91Y2ggRGVwbG95bWVudDwvaDM+CiAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6MTMsY29sb3I6IiM2ZTZlNzMiLGxpbmVIZWlnaHQ6MS40NzA1OX19PkNvbmZpZ3VyZSB0aG91c2FuZHMgb2YgZGV2aWNlcyByZW1vdGVseS48L3A+CiAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSJzdGFnZ2VyLWl0ZW0gY2FyZC1ob3ZlciIgc3R5bGU9e3tiYWNrZ3JvdW5kOiIjZjVmNWY3Iixib3JkZXJSYWRpdXM6MTgscGFkZGluZzoiMjRweCIsYm9yZGVyOiIxcHggc29saWQgI2U2ZTZlYSIsdGV4dEFsaWduOiJjZW50ZXIifX0+CiAgICAgICAgICAgIDxoMyBzdHlsZT17e2ZvbnRTaXplOjE1LGZvbnRXZWlnaHQ6NjAwLGNvbG9yOiIjMWQxZDFmIixtYXJnaW5Cb3R0b206NH19PjI0LzcgUHJpb3JpdHkgU3VwcG9ydDwvaDM+CiAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6MTMsY29sb3I6IiM2ZTZlNzMiLGxpbmVIZWlnaHQ6MS40NzA1OX19PkRlZGljYXRlZCBhY2NvdW50IG1hbmFnZXIuPC9wPgogICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ic3RhZ2dlci1pdGVtIGNhcmQtaG92ZXIiIHN0eWxlPXt7YmFja2dyb3VuZDoiI2Y1ZjVmNyIsYm9yZGVyUmFkaXVzOjE4LHBhZGRpbmc6IjI0cHgiLGJvcmRlcjoiMXB4IHNvbGlkICNlNmU2ZWEiLHRleHRBbGlnbjoiY2VudGVyIn19PgogICAgICAgICAgICA8aDMgc3R5bGU9e3tmb250U2l6ZToxNSxmb250V2VpZ2h0OjYwMCxjb2xvcjoiIzFkMWQxZiIsbWFyZ2luQm90dG9tOjR9fT5DdXN0b20gSW50ZWdyYXRpb248L2gzPgogICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOjEzLGNvbG9yOiIjNmU2ZTczIixsaW5lSGVpZ2h0OjEuNDcwNTl9fT5BUEkgYWNjZXNzIGFuZCB3aGl0ZS1nbG92ZSBzZXR1cC48L3A+CiAgICAgICAgICA8L2Rpdj4KICAgICAgICA8L2Rpdj4KICAgICAgPC9zZWN0aW9uPgo="
eco_bytes = base64.b64decode(eco_b64)

b2b_path = os.path.join(base, 'B2b.tsx')
with open(b2b_path, 'rb') as f:
    b2b = f.read()

# Find stats section and insert ecosystem before it
marker = b'Enterprise Pricing'
if marker in b2b:
    idx = b2b.find(marker)
    # Find the section start before it
    sec_start = b2b.rfind(b'<section', 0, idx)
    if sec_start > 0:
        b2b = b2b[:sec_start] + eco_bytes + b2b[sec_start:]
        with open(b2b_path, 'wb') as f:
            f.write(b2b)
        print('B2B ecosystem added before pricing')
    else:
        print('section_start not found')
else:
    print('Enterprise Pricing marker not found')
    # Try using /Ampersand/ or other marker
    marker2 = b'Trusted by'
    if marker2 in b2b:
        print('Trusted by marker found')
    else:
        marker3 = b'10K+'
        if marker3 in b2b:
            print('10K+ marker found')
            idx = b2b.find(marker3)
            sec_start = b2b.rfind(b'<section', 0, idx)
            if sec_start > 0:
                b2b = b2b[:sec_start] + eco_bytes + b2b[sec_start:]
                with open(b2b_path, 'wb') as f:
                    f.write(b2b)
                print('B2B ecosystem added before stats')