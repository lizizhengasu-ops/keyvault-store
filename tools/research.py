from playwright.sync_api import sync_playwright
import json

queries = [
    'developer tool evaluation framework technology decision matrix',
    'DX developer experience evaluation criteria DevEx metrics',
    'DORA metrics SPACE framework developer productivity 2026',
    'cost of adding npm dependency dependency cost analysis',
    'AI agent tool selection criteria LLM pipeline best practices',
    'reducing token consumption strategies AI coding pipelines',
    'web performance optimization checklist 2026 Apple-level sites',
    'CSS bundle optimization Tailwind CSS purging best practices',
    'React component composition patterns design system consistency',
    'design token workflow design system engineering best practices 2026'
]

results = []
with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()

    for i, q in enumerate(queries):
        try:
            url = 'https://www.google.com/search?q=' + q.replace(' ', '+') + '&num=5'
            page.goto(url, timeout=20000)
            page.wait_for_timeout(2000)

            snippets = page.evaluate("""() => {
                const results = [];
                const items = document.querySelectorAll('div.g, div[data-hveid]');
                let count = 0;
                for (const item of items) {
                    const titleEl = item.querySelector('h3');
                    const snippetEl = item.querySelector('div[data-sncf], span.aCOpRe, div.lEBKkf span');
                    if (titleEl && count < 5) {
                        results.push({
                            title: titleEl.innerText.substring(0, 120),
                            snippet: snippetEl ? snippetEl.innerText.substring(0, 300) : ''
                        });
                        count++;
                    }
                }
                return results;
            }""")

            results.append({'query': q, 'results': snippets})
            print(f'[{i+1}/10] {q[:50]}... -> {len(snippets)} results')
        except Exception as e:
            results.append({'query': q, 'error': str(e)})
            print(f'[{i+1}/10] {q[:50]}... -> ERROR: {str(e)[:60]}')

    browser.close()

with open('research_results.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, ensure_ascii=False, indent=2)
print(f'\nDone. Saved {len(results)} queries to research_results.json')
