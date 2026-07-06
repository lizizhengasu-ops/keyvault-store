import sys
css_path = "src/index.css"
with open(css_path, "r", encoding="utf-8") as f:
    css = f.read()
additions = """
/* Apple-style hero large links */
.hero-link-large{font-size:24px!important;font-weight:600!important;color:#0071e3!important;text-decoration:none!important;cursor:pointer!important;letter-spacing:0.216px!important;transition:color 0.2s!important;display:inline-block!important}
.hero-link-large:hover{color:#0077ed!important}
.hero-link-large:active{transform:scale(0.97)!important;color:#006edb!important}
.hero-link-large::after{content:" \u203A";font-size:24px!important;font-weight:600!important}
.feature-lg{font-size:24px!important;font-weight:600!important;color:#1d1d1f!important;line-height:28px!important}
.parallax-section{will-change:transform;position:relative;overflow:hidden}
.card-item-in{opacity:0;transform:translateY(20px);transition:all 0.5s cubic-bezier(0.25,0.1,0.25,1)}
.card-item-in.visible{opacity:1;transform:translateY(0)}
"""
css += additions
with open(css_path, "w", encoding="utf-8") as f:
    f.write(css)
print("OK")