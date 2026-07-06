import requests
from bs4 import BeautifulSoup
import json, time

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
}

queries = [
    ("Tool Evaluation", "developer tool evaluation framework OR technology decision matrix 2026"),
    ("DX Metrics", "developer experience evaluation criteria OR Devex metrics"),
    ("DORA SPACE", "DORA metrics OR SPACE framework developer productivity"),
    ("NPM Cost", "cost of adding npm dependency OR dependency cost analysis"),
    ("AI Tool Selection", "AI agent tool selection criteria OR LLM pipeline tooling best practices"),
    ("Token Reduction", "reducing token consumption strategies AI coding pipelines"),
    ("Web Perf 2026", "web performance optimization checklist best practices 2026"),
    ("CSS Bundle", "CSS bundle optimization OR Tailwind CSS purging best practices"),
    ("React Patterns", "React component composition patterns design system consistency 2026"),
    ("Design Tokens", "design token workflow OR design system engineering best practices 2026")
]

# Also additional new-tool queries
new_tool_labels = [
    "React Bits", "Vercel AI SDK", "Biome", "21st", "R3F drei",
    "GPT-Researcher", "Radix UI Colors", "tRPC", "LiteFS", "WASM Edge",
    "Hono", "Bun", "Astro", "Convex", "Effect TS",
    "Million.js", "Panda CSS", "Motion One", "Zero Runtime CSS", "Vite 6"
]

results_data = {}

for label, q in queries:
    try:
        url = "https://html.duckduckgo.com/html/?q=" + q.replace(" ", "+")
        r = requests.get(url, headers=headers, timeout=15)
        soup = BeautifulSoup(r.text, "html.parser")
        
        items = []
        for res in soup.select(".result") or soup.select("article") or soup.select("div[class*=result]") or soup.select(".web-result"):
            title_el = res.select_one("h2 a, .result__title a, a[rel=noopener]")
            snippet_el = res.select_one(".result__snippet, .snippet")
            if title_el:
                items.append({
                    "title": title_el.get_text(strip=True)[:120],
                    "snippet": snippet_el.get_text(strip=True)[:300] if snippet_el else ""
                })
            if len(items) >= 5:
                break
        
        results_data[label] = items
        print(f"  {label}: {len(items)} results")
    except Exception as e:
        results_data[label] = {"error": str(e)}
        print(f"  {label}: ERROR {str(e)[:80]}")

print(f"\n--- New Tool Research ---")
for label in new_tool_labels:
    try:
        q = label + " github stars 2025 2026"
        url = "https://html.duckduckgo.com/html/?q=" + q.replace(" ", "+")
        r = requests.get(url, headers=headers, timeout=15)
        soup = BeautifulSoup(r.text, "html.parser")
        items = []
        for res in soup.select(".result") or soup.select("article") or []:
            title_el = res.select_one("h2 a, .result__title a, a[rel=noopener]")
            snippet_el = res.select_one(".result__snippet, .snippet")
            if title_el:
                items.append({
                    "title": title_el.get_text(strip=True)[:120],
                    "snippet": snippet_el.get_text(strip=True)[:300] if snippet_el else ""
                })
            if len(items) >= 3:
                break
        results_data[label] = items if items else {"note": "no results"}
        print(f"  {label}: {len(items) if items else 'no results'} results")
    except Exception as e:
        results_data[label] = {"error": str(e)}
        print(f"  {label}: ERROR {str(e)[:80]}")

with open("research_final.json", "w", encoding="utf-8") as f:
    json.dump(results_data, f, ensure_ascii=False, indent=2)
print(f"\nSaved {len(results_data)} entries to research_final.json")
