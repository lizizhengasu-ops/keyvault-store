import re

with open(r"C:\Users\31961\Documents\microsoft web\mifan-site\src\pages\B2b.tsx", encoding="utf-8", errors="replace") as f:
    content = f.read()

# Replace Unicode curly quotes with ASCII quotes
content = content.replace("\u201c", '"')
content = content.replace("\u201d", '"')
content = content.replace("\u2018", "'")
content = content.replace("\u2019", "'")
content = content.replace("\u2026", "...")

with open(r"C:\Users\31961\Documents\microsoft web\mifan-site\src\pages\B2b.tsx", "w", encoding="utf-8") as f:
    f.write(content)

print("Unicode chars replaced")

# Verify no non-ASCII in the file
with open(r"C:\Users\31961\Documents\microsoft web\mifan-site\src\pages\B2b.tsx", "rb") as f:
    raw = f.read()
non_ascii = [(i, hex(b)) for i, b in enumerate(raw) if b > 127]
print(f"Remaining non-ASCII bytes: {len(non_ascii)}")