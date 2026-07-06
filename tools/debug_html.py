import requests
headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}
url = "https://html.duckduckgo.com/html/?q=developer+tool+evaluation+framework"
r = requests.get(url, headers=headers, timeout=15)
# Print a small section of HTML for analysis
text = r.text
# Find areas with "result" in class
import re
matches = re.findall(r'<div[^>]*class="[^"]*result[^"]*"[^>]*>', text)
print(f"Found {len(matches)} divs with 'result' in class")
for i, m in enumerate(matches[:5]):
    print(f"  [{i}] {m[:200]}")

# Check other patterns
for pattern in ["web-result", "article", "result__title", "result__snippet", "data-testid"]:
    count = text.count(pattern)
    print(f"  '{pattern}': {count} occurrences")
    
# Print a section of the page
print(f"\nTotal HTML length: {len(text)}")
print(f"\nFirst 3000 chars after <body>...")
body_start = text.find("<body")
if body_start > 0:
    print(text[body_start:body_start+3000])
