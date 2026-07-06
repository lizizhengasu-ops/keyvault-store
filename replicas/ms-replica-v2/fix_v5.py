import os
root = r"C:\Users\31961\Documents\microsoft web\ms-replica"

css = """:root {
  --primary: #0078D4;
  --secondary: #106EBE;
  --text: #000000;
  --text-secondary: #616161;
  --bg: #FFFFFF;
  --bg-section: #F2F2F2;
  --bg-dark: #000000;
  --font: "Segoe UI", system-ui, sans-serif;
  --radius: 2px;
}
* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  font-family: var(--font);
  color: #000000;
  background: #FFFFFF;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
}
h2 { font-size: 34px; font-weight: 100; line-height: 40px; color: #000000; }
h3 { font-size: 24px; font-weight: 600; line-height: 28px; color: #000000; }
p  { font-size: 20px; font-weight: 200; line-height: 24px; color: #000000; padding: 24px 0 4px; }
a, a:link { color: #000000; font-weight: 400; line-height: inherit; text-decoration: none; }
a:hover { text-decoration: underline; }
nav { background: #000000; color: #FFFFFF; font-size: 13px; line-height: normal; }
nav a { color: #FFFFFF; padding: 0; }
footer { background: #F2F2F2; color: #000000; padding: 0; }
section { padding: 48px 20px; }
"""
with open(os.path.join(root, "src", "index.css"), "w", encoding="utf-8") as f:
    f.write(css)
print("index.css updated")

main_tsx = 'import { StrictMode } from "react";\n'
main_tsx += 'import { createRoot } from "react-dom/client";\n'
main_tsx += 'import App from "./App";\n'
main_tsx += 'import "./index.css";\n'
main_tsx += '\n'
main_tsx += '// Body style override for belt-and-suspenders\n'
main_tsx += 'document.body.style.background = "#FFFFFF";\n'
main_tsx += 'document.body.style.color = "#000000";\n'
main_tsx += 'document.body.style.margin = "0";\n'
main_tsx += '\n'
main_tsx += 'createRoot(document.getElementById("root")!).render(\n'
main_tsx += '  <StrictMode>\n'
main_tsx += '    <App />\n'
main_tsx += '  </StrictMode>\n'
main_tsx += ');\n'
with open(os.path.join(root, "src", "main.tsx"), "w", encoding="utf-8") as f:
    f.write(main_tsx)
print("main.tsx updated")