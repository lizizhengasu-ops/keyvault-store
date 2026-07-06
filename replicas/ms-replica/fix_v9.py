import os
p = r'C:\Users\31961\Documents\microsoft web\ms-replica\src\pages\SurfacePage.tsx'
c = open(p, encoding='utf-8').read()

# Add <style> tag with !important overrides for generated content
style_tag = '<style>{\\\n.surface-gen h2{font-size:13px!important;font-weight:350!important;line-height:19.5px!important;color:#0e1726!important}\\\n.surface-gen a{font-size:16px!important;font-weight:350!important;color:#262626!important}\\\n.surface-gen section{padding:24px!important}\\\n}</style>\n'

# Add class to wrapper and style tag after return
c = c.replace(
    'return (\n    <div style={{fontWeight:350',
    'return (\n    ' + style_tag + '<div className=\"surface-gen\" style={{fontWeight:350'
)

open(p, 'w', encoding='utf-8').write(c)
print('Added style tag and className')