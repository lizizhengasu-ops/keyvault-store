import requests
headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}

# Try accessing specific key sources directly
pages = [
    ("DORA Report", "https://dora.dev/devops-capabilities/"),
    ("SPACE Framework", "https://queue.acm.org/detail.cfm?id=3454124"),
    ("DevEx Framework", "https://newsletter.getdx.com/p/devex-framework"),
    ("npm Cost Analysis", "https://bundlephobia.com/"),
    ("React Patterns", "https://react.dev/learn/thinking-in-react"),
    ("Design Tokens W3C", "https://design-tokens.github.io/community-group/format/"),
]

for label, url in pages:
    try:
        r = requests.get(url, headers=headers, timeout=10)
        print(f"  {label}: HTTP {r.status_code}, len={len(r.text)}")
    except Exception as e:
        print(f"  {label}: FAILED {str(e)[:60]}")
