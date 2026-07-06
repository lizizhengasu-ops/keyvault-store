# SEO Kit - Design Document

**Date:** 2026-07-06
**Status:** Draft
**Project:** KeyVault SEO Kit

---

## 1. Overview

The SEO Kit is an isolated, callable Node.js module for automated SEO.
It is invoked during page creation, not embedded in other skills.

### Core Design Goals
1. Isolated - pure functions, zero coupling
2. Callable - frontend invokes it at page creation time
3. Iterative - logs results for next-run analysis
4. Testable - unit test coverage on core logic
5. Cross-platform - Express, WordPress CLI, HTTP

---

## 2. Architecture

```
seo-kit/
+-- core/              generate.js, analyze.js, validate.js, report.js
+-- adapters/          express.js, http.js, cli.js
+-- config/            keywords.json, templates.json, rules.json
+-- storage/           history.js
+-- index.js           Single entry point
+-- package.json
+-- README.md
```

### Data Flow
1. Frontend calls seoKit.generate(pageData)
2. core/generate.js reads templates from config
3. Generates Title, Meta, OG, JSON-LD
4. Returns structured SEO object
5. storage/history.js logs the event

---

## 3. Core Modules

### 3.1 generate.js
Page types: product | category | guide | b2b | faq

Input fields:
- type, name, slug, category, price, description, platform, stock, originalPrice

Output:
- title, metaDescription, h1, ogTitle, ogDescription, ogUrl
- canonical, jsonLd (Product+Offer Schema), keywords

Example product title:
  "Buy Windows 11 Pro OEM Key - Genuine License | KeyVault"

Example category title:
  "Windows 11 Keys - Buy Genuine OEM License | KeyVault"

### 3.2 analyze.js
Analyzes existing HTML and returns:
- score (0-100)
- issues[] (critical problems)
- warnings[] (minor problems)
- recommendations[] (improvement suggestions)

Checks:
- Title exists and length (30-60 chars)
- Meta description exists and length (50-160 chars)
- H1 exists and only one
- Canonical URL present
- JSON-LD present
- OG tags present
- Image alt texts
- Internal links

### 3.3 validate.js
Validates page HTML against config/rules.json.
Returns pass/fail for each rule with details.

Rules:
- title.minLength: 30
- title.maxLength: 60
- description.minLength: 50
- description.maxLength: 160
- h1.count: 1
- jsonld.required: true
- canonical.required: true

### 3.4 report.js
Reads history from storage and produces:
- Score trend (line chart data)
- Most common issues
- Improvement suggestions
- Per-page-type breakdown

---

## 4. Adapters

### 4.1 Express.js Middleware
```javascript
const seoKit = require('./seo-kit');
app.use(seoKit.express.middleware());
// Adds seoKit object to req for use in route handlers
```

Route usage:
```javascript
app.get('/product/:slug', (req, res) => {
  const product = getProduct(req.params.slug);
  const seo = seoKit.generate({ type: 'product', ...product });
  res.render('product', { seo, product });
});
```

### 4.2 HTTP Service (for WordPress)
Runs on port 3099.

Endpoints:
- POST /seo/generate - Generate SEO for a page
- POST /seo/analyze - Analyze existing page
- POST /seo/validate - Validate page
- GET /seo/report - Get iteration report

WordPress calls via wp_remote_post:
```php
$response = wp_remote_post('http://localhost:3099/seo/generate', array(
  'body' => json_encode($page_data),
  'headers' => array('Content-Type' => 'application/json')
));
```

### 4.3 CLI Tool
```bash
node seo-kit/cli.js generate --type product --name "Windows 11 Pro"
node seo-kit/cli.js analyze --file /path/to/page.html
node seo-kit/cli.js validate --file /path/to/page.html
node seo-kit/cli.js report --from 2026-06-01 --to 2026-07-06
```

---

## 5. Configuration

### templates.json
```json
{
  "product": {
    "title": "Buy {name} - {category_phrase} | KeyVault",
    "metaDescription": "Buy genuine {name}. {description_short}. Instant digital delivery.",
    "h1": "{name}"
  },
  "category": {
    "title": "{name} - Buy Genuine OEM License Keys | KeyVault",
    "metaDescription": "Shop {name} at KeyVault. Genuine OEM licenses at 70% off retail.",
    "h1": "{name}"
  },
  "guide": {
    "title": "{name} | KeyVault Guide",
    "metaDescription": "{description_short}. Step-by-step guide.",
    "h1": "{name}"
  },
  "b2b": {
    "title": "{name} - Bulk Licensing for Business | KeyVault",
    "metaDescription": "Bulk {name}. Volume discounts for businesses. Contact us for pricing.",
    "h1": "{name}"
  },
  "faq": {
    "title": "FAQ: {name} | KeyVault",
    "metaDescription": "Frequently asked questions about {name}. Get answers fast.",
    "h1": "Frequently Asked Questions"
  }
}
```

### keywords.json
B2B keywords: bulk, wholesale, business, volume, enterprise, reseller
Product keywords: buy, cheap, genuine, OEM, license, key, activation
Guide keywords: how to, vs, comparison, guide, tutorial, best

### rules.json
Thresholds for validation checks.

---

## 6. Storage and Iterative Analysis

### history.jsonl format
Each line is a JSON event:
```json
{"ts":"2026-07-06T10:00:00Z","action":"generate","type":"product","page":"/p/win11pro","score":95}
{"ts":"2026-07-06T11:00:00Z","action":"analyze","page":"/p/win11pro","score":92,"issues":1}
```

### report() output
```json
{
  "period": {"from": "2026-06-01", "to": "2026-07-06"},
  "summary": {"totalActions": 42, "avgScore": 91, "trend": "improving"},
  "commonIssues": [
    {"issue": "Missing JSON-LD", "count": 5, "pages": ["/p/win10pro"]},
    {"issue": "Title too short", "count": 3, "pages": ["/p/win11home"]}
  ],
  "suggestions": [
    "Add Product schema to /p/win10home - 3 users bounced from this page"
  ]
}
```

---

## 7. Testing Strategy

### Unit Tests (core/*.test.js)
- generate.test.js: Test each page type, edge cases, error inputs
- analyze.test.js: Test each check type, malformed HTML
- validate.test.js: Test each rule, boundary values
- report.test.js: Test history aggregation and trend analysis

### Integration Tests
- Express adapter: Full request-response cycle
- HTTP adapter: curl-based endpoint testing
- CLI adapter: Command execution testing

### Test coverage target: 90%+ on core modules

---

## 8. Error Handling

All public functions follow this pattern:
- Return structured result, never throw for expected errors
- Invalid input: return { error: "message", valid: false }
- Missing config: use sensible defaults, log warning
- Storage failure: graceful degradation (continue without logging)

---

## 9. Integration Points

### With KeyVault Express.js
- import seoKit
- Use express adapter middleware
- Call seoKit.generate() in route handlers
- Inject seo object into template

### With WordPress
- Run HTTP adapter: node seo-kit/http.js
- WordPress calls POST /seo/generate from theme's functions.php
- Receive SEO tags, inject into wp_head()

### With Other Skills/Kits
- Other skills import seoKit directly via require()
- Call generate/analyze/validate as needed
- SEO Kit has no dependencies on other skills

---

## 10. Verification Checklist

The following will be verified before marking complete:

- [ ] All core functions produce correct output for valid inputs
- [ ] All core functions handle invalid inputs gracefully
- [ ] Adapters (Express/HTTP/CLI) successfully invoke core functions
- [ ] History logging works end-to-end
- [ ] report() produces meaningful analysis from history
- [ ] Tests pass (generate, analyze, validate, report)
- [ ] WordPress HTTP endpoint returns correct SEO data
- [ ] Isolated import works (no unintended side effects)
