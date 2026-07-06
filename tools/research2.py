from playwright.sync_api import sync_playwright
import json

queries = [
    ('Tool Evaluation', 'developer tool evaluation framework OR "technology decision matrix" 2025 2026'),
    ('DX Metrics', 'developer experience evaluation criteria OR "DevEx metrics"'),
    ('DORA SPACE', 'DORA metrics OR SPACE framework developer productivity'),
    ('NPM Cost', 'cost of adding npm dependency OR dependency cost analysis'),
    ('AI Tool Selection', 'AI agent tool selection criteria OR "LLM pipeline" tooling'),
    ('Token Reduction', 'reduce token consumption AI coding pipeline'),
    ('Web Perf 2026', 'web performance optimization best practices 2026'),
    ('CSS Bundle', 'CSS bundle optimization OR "Tailwind CSS purging"'),
    ('React Patterns', 'React component composition patterns design system 2026'),
    ('Design Tokens', 'design token workflow OR "design system engineering" 2026')
]

results = []
with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.set_extra_http_headers({
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'
    })

    for i, (label, q) in enumerate(queries):
        try:
            url = 'https://html.duckduckgo.com/html/?q=' + q.replace(' ', '+')
            page.goto(url, timeout=15000)
            page.wait_for_timeout(1500)

            snippets = page.evaluate("""() => {
                const results = [];
                const items = document.querySelectorAll('.result');
                for (const item of items) {
                    if (results.length >= 5) break;
                    const titleEl = item.querySelector('.result__title a');
                    const snippetEl = item.querySelector('.result__snippet');
                    if (titleEl) {
                        results.push({
                            title: (titleEl.innerText || titleEl.textContent || '').substring(0, 120),
                            snippet: (snippetEl ? (snippetEl.innerText || snippetEl.textContent || '') : '').substring(0, 300)
                        });
                    }
                }
                return results;
            }""")

            results.append({'label': label, 'query': q, 'results': snippets})
            print(f'[{i+1}/10] {label}: {len(snippets)} results')
        except Exception as e:
            results.append({'label': label, 'query': q, 'error': str(e)})
            print(f'[{i+1}/10] {label}: ERROR {str(e)[:60]}')

    browser.close()

with open('research_results2.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, ensure_ascii=False, indent=2)
print(f'\nDone. {len(results)} queries saved.')
