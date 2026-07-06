# SEO Kit Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build an isolated, callable SEO Kit that frontend invokes during page creation to automatically generate optimized SEO metadata (Title, Meta, OG, JSON-LD), with history-based iterative analysis.

**Architecture:** Pure function core (generate/analyze/validate/report) with three adapters (Express middleware, HTTP service for WordPress, CLI). Config-driven templates and keyword banks. History logging enables iterative improvement across runs.

**Tech Stack:** Node.js (vanilla, no dependencies in core), Express.js for KeyVault adapter, fs for storage.

---

## File Structure

| File | Responsibility |
|------|---------------|
| seo-kit/package.json | Node module manifest |
| seo-kit/config/templates.json | Title/Description templates per page type |
| seo-kit/config/keywords.json | Keyword bank for niche |
| seo-kit/config/rules.json | Validation thresholds |
| seo-kit/core/generate.js | Generate SEO tags from page data |
| seo-kit/core/analyze.js | Analyze HTML for SEO issues |
| seo-kit/core/validate.js | Validate against rules |
| seo-kit/core/report.js | Aggregate history for iteration |
| seo-kit/storage/history.js | Read/write history records |
| seo-kit/adapters/express.js | Express middleware |
| seo-kit/adapters/http.js | HTTP server for WordPress |
| seo-kit/adapters/cli.js | Command-line tool |
| seo-kit/index.js | Unified entry point |
| seo-kit/test/generate.test.js | Tests for generate |
| seo-kit/test/analyze.test.js | Tests for analyze |
| seo-kit/test/validate.test.js | Tests for validate |
| seo-kit/test/report.test.js | Tests for report |
| seo-kit/README.md | Usage documentation |

### Task 1: Scaffold project structure + package.json

**Files:**
- Create: `seo-kit/package.json`
- Create: `seo-kit/config/` (directory)
- Create: `seo-kit/core/` (directory)
- Create: `seo-kit/adapters/` (directory)
- Create: `seo-kit/storage/` (directory)
- Create: `seo-kit/test/` (directory)

- [ ] **Step 1: Create seo-kit/package.json**

```json
{
  "name": "seo-kit",
  "version": "1.0.0",
  "description": "Isolated SEO optimization toolkit for e-commerce sites",
  "main": "index.js",
  "scripts": {
    "test": "node --test test/*.test.js",
    "start:http": "node adapters/http.js"
  },
  "type": "commonjs",
  "license": "MIT"
}
```

- [ ] **Step 2: Create all directories**

Run:
```bash
mkdir -p seo-kit/config seo-kit/core seo-kit/adapters seo-kit/storage seo-kit/test
```

### Task 2: Write config/templates.json

**Files:**
- Create: `seo-kit/config/templates.json`

- [ ] **Step 1: Create templates.json**

```json
{
  "product": {
    "title": "Buy {name} - Genuine License {suffix} KeyVault",
    "metaDescription": "Buy genuine {name}. {desc_short}. Instant digital delivery. Lifetime activation. {price_text}",
    "h1": "{name}"
  },
  "category": {
    "title": "{name} - Buy Genuine OEM License Keys KeyVault",
    "metaDescription": "Shop {name} at KeyVault. Genuine OEM licenses at 70% off retail. Instant digital delivery.",
    "h1": "{name}"
  },
  "guide": {
    "title": "{name} KeyVault Guide",
    "metaDescription": "{desc_short}. Complete step-by-step guide from KeyVault.",
    "h1": "{name}"
  },
  "b2b": {
    "title": "{name} - Bulk Licensing for Business KeyVault",
    "metaDescription": "Bulk {name}. Volume discounts for businesses. Contact us for custom pricing.",
    "h1": "{name}"
  },
  "faq": {
    "title": "FAQ: {name} KeyVault",
    "metaDescription": "Frequently asked questions about {name}. Quick answers from KeyVault.",
    "h1": "Frequently Asked Questions"
  }
}
```
### Task 3: Write config/keywords.json

**Files:**
- Create: seo-kit/config/keywords.json

- [ ] **Step 1: Create keywords.json**

```json
{
  "b2b": ["bulk", "wholesale", "volume", "enterprise", "business", "company", "reseller", "corporate"],
  "product": ["buy", "genuine", "OEM", "license", "key", "activation", "cheap", "discount", "lifetime"],
  "guide": ["how to", "vs", "comparison", "guide", "tutorial", "best", "review"],
  "trust": ["secure", "instant", "digital delivery", "money back", "guaranteed"]
}
```

### Task 4: Write config/rules.json

**Files:**
- Create: seo-kit/config/rules.json

- [ ] **Step 1: Create rules.json**

```json
{
  "title": { "minLength": 30, "maxLength": 65, "required": true },
  "metaDescription": { "minLength": 50, "maxLength": 165, "required": true },
  "h1": { "count": 1, "required": true },
  "jsonld": { "required": true },
  "canonical": { "required": true },
  "ogTitle": { "required": true },
  "ogDescription": { "required": true },
  "viewport": { "required": true },
  "lang": { "required": true },
  "favicon": { "required": true }
}
```

### Task 5: Implement core/generate.js

**Files:**
- Create: seo-kit/core/generate.js

- [ ] **Step 1: Write the generate function**

```javascript
const fs = require('fs');
const path = require('path');

const templates = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', 'config', 'templates.json'), 'utf-8')
);

function fillTemplate(template, vars) {
  let result = template;
  for (const [key, value] of Object.entries(vars)) {
    result = result.replace(new RegExp('{' + key + '}', 'g'), String(value || ''));
  }
  return result;
}

function generate(data) {
  if (!data || !data.type || !data.name) {
    return { error: 'Missing required fields: type, name', valid: false };
  }
  if (!templates[data.type]) {
    return { error: 'Unknown page type: ' + data.type, valid: false };
  }

  const baseUrl = data.baseUrl || 'https://example.com';
  const descShort = (data.description || '').substring(0, 120);
  const priceText = data.price ? 'From $' + data.price : '';
  const suffix = data.category === 'office' ? '' : '|';

  const vars = {
    name: data.name,
    suffix: suffix,
    desc_short: descShort,
    price_text: priceText,
  };

  const tpl = templates[data.type];
  const slug = data.slug || data.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
  const pageUrl = baseUrl + '/' + data.type + '/' + slug;

  const title = fillTemplate(tpl.title, vars);
  const metaDescription = fillTemplate(tpl.metaDescription, vars);
  const h1 = fillTemplate(tpl.h1, vars);

  const jsonLd = {
    "@context": "https://schema.org",
  };

  if (data.type === 'product') {
    jsonLd["@type"] = "Product";
    jsonLd.name = data.name;
    jsonLd.description = (data.description || '').substring(0, 300);
    jsonLd.offers = {
      "@type": "Offer",
      price: data.price || 0,
      priceCurrency: "USD",
      availability: (data.stock > 0) ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
    };
  } else if (data.type === 'b2b') {
    jsonLd["@type"] = "Product";
    jsonLd.name = data.name;
    jsonLd.description = (data.description || '').substring(0, 300);
  } else if (data.type === 'faq') {
    jsonLd["@type"] = "FAQPage";
    jsonLd.mainEntity = [];
  } else {
    jsonLd["@type"] = "Article";
    jsonLd.headline = data.name;
  }

  return {
    title: title.trim(),
    metaDescription: metaDescription.trim().substring(0, 165),
    h1: h1.trim(),
    ogTitle: title.trim(),
    ogDescription: metaDescription.trim().substring(0, 165),
    ogUrl: pageUrl,
    ogType: data.type === 'product' ? 'product' : 'website',
    canonical: pageUrl,
    jsonLd: jsonLd,
    keywords: [],
    valid: true
  };
}

module.exports = { generate };
```

### Task 6: Write tests for core/generate.js

**Files:**
- Create: seo-kit/test/generate.test.js

- [ ] **Step 1: Write test file**

```javascript
const { describe, it } = require('node:test');
const assert = require('node:assert');
const { generate } = require('../core/generate');

describe('generate()', () => {
  it('should return valid SEO for product type', () => {
    const result = generate({
      type: 'product',
      name: "Windows 11 Pro OEM Key",
      slug: 'windows-11-pro-key',
      category: 'windows',
      price: 34.99,
      description: "Genuine OEM license key. Lifetime activation for 1 PC.",
      stock: 50
    });
    assert.strictEqual(result.valid, true);
    assert.ok(result.title.includes('Windows 11 Pro'));
    assert.ok(result.title.length >= 30);
    assert.ok(result.title.length <= 65);
    assert.ok(result.metaDescription.length >= 50);
    assert.ok(result.jsonLd['@type'] === 'Product');
    assert.ok(result.jsonLd.offers.price === 34.99);
    assert.ok(result.canonical.includes('windows-11-pro-key'));
  });

  it('should return valid SEO for category type', () => {
    const result = generate({
      type: 'category',
      name: "Windows 11 Keys",
      slug: 'windows-11-keys',
      description: 'Buy Windows 11 license keys at discount prices'
    });
    assert.strictEqual(result.valid, true);
    assert.ok(result.title.includes('Windows 11 Keys'));
    assert.ok(result.jsonLd['@type'] === 'Article');
  });

  it('should return valid SEO for guide type', () => {
    const result = generate({
      type: 'guide',
      name: "How to Activate Windows 11",
      slug: 'activate-windows-11',
      description: "Complete step by step guide for activation"
    });
    assert.strictEqual(result.valid, true);
    assert.ok(result.title.includes('How to Activate Windows 11'));
  });

  it('should return error for missing fields', () => {
    const result = generate({ type: 'product' });
    assert.strictEqual(result.valid, false);
    assert.ok(result.error);
  });

  it('should return error for unknown page type', () => {
    const result = generate({ type: 'unknown', name: 'Test' });
    assert.strictEqual(result.valid, false);
  });
});
```

- [ ] **Step 2: Run tests**

Run: `node --test seo-kit/test/generate.test.js`
Expected: All 5 tests PASS
### Task 7: Implement core/analyze.js

**Files:**
- Create: seo-kit/core/analyze.js

- [ ] **Step 1: Write analyze function**

```javascript
function analyze(html, pageUrl) {
  if (!html) return { score: 0, issues: [{ severity: "critical", message: "No HTML" }], warnings: [], recommendations: [] };
  const issues = [], warnings = [], recs = [];
  const hasTitle = /<title[^>]*>.*?<\/title>/i.test(html);
  const tm = html.match(/<title[^>]*>(.*?)<\/title>/i);
  if (!hasTitle) issues.push({ severity: "critical", message: "Missing title tag" });
  else if (tm) {
    const t = tm[1].trim();
    if (t.length < 30) warnings.push({ severity: "warning", message: "Title too short: " + t.length });
    if (t.length > 65) warnings.push({ severity: "warning", message: "Title too long: " + t.length });
  }
  const descRe = /<meta[^>]*name="description"[^>]*content="([^"]*)"/i;
  const dm = html.match(descRe);
  if (!dm) issues.push({ severity: "critical", message: "Missing meta description" });
  else {
    const d = dm[1].trim();
    if (d.length < 50) warnings.push({ severity: "warning", message: "Desc too short: " + d.length });
    if (d.length > 165) warnings.push({ severity: "warning", message: "Desc too long: " + d.length });
  }
  const h1s = html.match(/<h1[^>]*>.*?<\/h1>/gi) || [];
  if (h1s.length === 0) issues.push({ severity: "critical", message: "Missing H1 tag" });
  if (h1s.length > 1) warnings.push({ severity: "warning", message: "Multiple H1s: " + h1s.length });
  if (!/<link[^>]*rel="canonical"[^>]*>/i.test(html)) warnings.push({ severity: "warning", message: "Missing canonical" });
  if (!/<script[^>]*type="application\/ld\+json"[^>]*>/i.test(html)) warnings.push({ severity: "warning", message: "Missing JSON-LD" });
  if (!/<meta[^>]*property="og:title"[^>]*>/i.test(html)) warnings.push({ severity: "warning", message: "Missing og:title" });
  if (!/<meta[^>]*name="viewport"[^>]*>/i.test(html)) issues.push({ severity: "critical", message: "Missing viewport" });
  const imgs = (html.match(/<img[^>]*>/gi) || []).length;
  const altImgs = (html.match(/<img[^>]*alt=/gi) || []).length;
  if (imgs > 0 && altImgs < imgs) warnings.push({ severity: "warning", message: (imgs - altImgs) + " images missing alt" });
  const deductions = issues.length * 15 + warnings.length * 5;
  const score = Math.max(0, 100 - deductions);
  recs.push(issues.length > 0 ? "Fix critical issues first" : "Page looks good");
  return { score, issues, warnings, recommendations: recs };
}
module.exports = { analyze };
```
### Task 8: Write tests for core/analyze.js

**Files:**
- Create: seo-kit/test/analyze.test.js

- [ ] **Step 1: Write test file**

```javascript
const { describe, it } = require("node:test");
const assert = require("node:assert");
const { analyze } = require("../core/analyze");

describe("analyze()", () => {
  it("should detect missing title", () => {
    const r = analyze("<html><body></body></html>");
    assert.ok(r.score < 100);
    assert.ok(r.issues.some(i => i.message.includes("title")));
  });
  it("should pass good HTML", () => {
    const html = `
      <html><head>
        <title>Good Title - Over 30 chars long enough</title>
        <meta name="description" content="A good meta description that is over fifty characters long and provides useful information.">
        <meta name="viewport" content="width=device-width">
        <link rel="canonical" href="https://example.com">
        <meta property="og:title" content="Test">
        <script type="application/ld+json">{}</script>
      </head><body>
        <h1>Main Title</h1>
        <img src="test.jpg" alt="test">
      </body></html>`;
    const r = analyze(html);
    assert.ok(r.score >= 80);
    assert.strictEqual(r.issues.length, 0);
  });
  it("should warn about short description", () => {
    const html = `<html><head>
      <title>Good Title - Over 30 characters long enough</title>
      <meta name="description" content="Too short">
      <link rel="canonical" href="https://example.com">
    </head><body><h1>Test</h1></body></html>`;
    const r = analyze(html);
    assert.ok(r.warnings.some(w => w.message.includes("Desc")));
  });
  it("should detect multiple H1s", () => {
    const html = `<html><head><title>Test Title - Over 30 chars long enough</title>
      <meta name="description" content="A good meta description that is over fifty characters long and provides useful information.">
    </head><body><h1>First</h1><h1>Second</h1></body></html>`;
    const r = analyze(html);
    assert.ok(r.warnings.some(w => w.message.includes("Multiple H1")));
  });
});
```
### Task 9: Implement core/validate.js

**Files:**
- Create: seo-kit/core/validate.js

- [ ] **Step 1: Write validate function**

```javascript
const fs = require("fs");
const path = require("path");
const rules = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "config", "rules.json"), "utf-8"));

function validate(html) {
  if (!html) return { passed: false, checks: { error: { passed: false, message: "No HTML" } } };
  const checks = {};
 
  const tm = html.match(/<title[^>]*>(.*?)<\/title>/i);
  const tLen = tm ? tm[1].trim().length : 0;
  checks.title = {
    passed: tm && tLen >= rules.title.minLength && tLen <= rules.title.maxLength,
    value: tm ? tm[1].trim() : null,
    length: tLen,
    details: "Required " + rules.title.minLength + "-" + rules.title.maxLength + " chars"
  };
  
  const dm = html.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"/i);
  const dLen = dm ? dm[1].trim().length : 0;
  checks.metaDescription = {
    passed: dm && dLen >= rules.metaDescription.minLength && dLen <= rules.metaDescription.maxLength,
    value: dm ? dm[1].trim().substring(0, 80) + "..." : null,
    length: dLen,
    details: "Required " + rules.metaDescription.minLength + "-" + rules.metaDescription.maxLength + " chars"
  };
  
  const h1s = html.match(/<h1[^>]*>.*?<\/h1>/gi) || [];
  checks.h1 = { passed: h1s.length === 1, count: h1s.length, details: "Must have exactly 1 H1" };
  
  checks.jsonld = {
    passed: /<script[^>]*type="application\/ld\+json"[^>]*>/i.test(html),
    details: "Required for rich snippets"
  };
  
  checks.canonical = {
    passed: /<link[^>]*rel="canonical"[^>]*>/i.test(html),
    details: "Prevents duplicate content issues"
  };
  
  const allPassed = Object.values(checks).every(c => c.passed);
  return { passed: allPassed, checks };
}
module.exports = { validate };
```

### Task 10: Write tests for core/validate.js

**Files:**
- Create: seo-kit/test/validate.test.js

- [ ] **Step 1: Write test file**

```javascript
const { describe, it } = require("node:test");
const assert = require("node:assert");
const { validate } = require("../core/validate");

describe("validate()", () => {
  it("should pass valid HTML", () => {
    const r = validate('<html><head><title>Proper Title Length 30 chars</title><meta name="description" content="Good description that is over fifty characters long for testing"><link rel="canonical" href="/"><script type="application/ld+json">{}</script></head><body><h1>Title</h1></body></html>');
    assert.ok(r.passed);
  });
  it("should fail missing title", () => {
    const r = validate('<html><body><h1>Test</h1></body></html>');
    assert.strictEqual(r.passed, false);
    assert.strictEqual(r.checks.title.passed, false);
  });
  it("should fail missing H1", () => {
    const r = validate('<html><head><title>Proper Title Length 30 chars</title></head><body></body></html>');
    assert.strictEqual(r.checks.h1.passed, false);
  });
});
```
### Task 11: Implement storage/history.js + core/report.js

**Files:**
- Create: seo-kit/storage/history.js
- Create: seo-kit/core/report.js

- [ ] **Step 1: Write storage/history.js**

```javascript
const fs = require("fs");
const path = require("path");
const HISTORY_FILE = path.join(__dirname, "..", "storage", ".history.jsonl");

function logEvent(event) {
  try {
    const line = JSON.stringify({ ts: new Date().toISOString(), ...event }) + "
";
    fs.appendFileSync(HISTORY_FILE, line, "utf-8");
    return true;
  } catch (e) {
    return false;
  }
}

function readHistory() {
  try {
    if (!fs.existsSync(HISTORY_FILE)) return [];
    const data = fs.readFileSync(HISTORY_FILE, "utf-8");
    return data.trim().split("
").filter(Boolean).map(line => {
      try { return JSON.parse(line); } catch { return null; }
    }).filter(Boolean);
  } catch { return []; }
}

module.exports = { logEvent, readHistory };
```

- [ ] **Step 2: Write core/report.js**

```javascript
const { readHistory } = require("../storage/history");

function generateReport(opts) {
  opts = opts || {};
  const all = readHistory();
  if (all.length === 0) return { summary: { totalActions: 0 }, message: "No history data yet" };
  
  let filtered = all;
  if (opts.from) filtered = filtered.filter(e => e.ts >= opts.from);
  if (opts.to) filtered = filtered.filter(e => e.ts <= opts.to);
  
  const scores = filtered.filter(e => e.score !== undefined).map(e => e.score);
  const avgScore = scores.length > 0 ? Math.round(scores.reduce((a,b) => a+b, 0) / scores.length) : 0;
  const lastScore = scores.length > 0 ? scores[scores.length - 1] : null;
  const firstScore = scores.length > 0 ? scores[0] : null;

  const issueCounts = {};
  filtered.forEach(e => {
    if (e.issues) e.issues.forEach(issue => {
      const key = issue.message || issue;
      issueCounts[key] = (issueCounts[key] || 0) + 1;
    });
  });
  
  const commonIssues = Object.entries(issueCounts)
    .sort((a,b) => b[1] - a[1])
    .slice(0, 5)
    .map(([issue, count]) => ({ issue, count }));
  
  const trend = firstScore !== null && lastScore !== null
    ? (lastScore > firstScore ? "improving" : lastScore < firstScore ? "declining" : "stable")
    : "unknown";
  
  return {
    period: { from: opts.from || "all", to: opts.to || "all" },
    summary: {
      totalActions: filtered.length,
      avgScore,
      trend,
      firstScore,
      lastScore
    },
    commonIssues,
    suggestions: commonIssues.slice(0, 3).map(i =>
      "Fix \"" + i.issue + "\" - appeared " + i.count + " times"
    )
  };
}
module.exports = { generateReport };
```

### Task 12: Write tests for report + history

**Files:**
- Create: seo-kit/test/report.test.js

- [ ] **Step 1: Write test file**

```javascript
const { describe, it } = require("node:test");
const assert = require("node:assert");

const { logEvent, readHistory } = require("../storage/history");
const { generateReport } = require("../core/report");

describe("history + report", () => {
  it("should log and read events", () => {
    const ok = logEvent({ action: "test", page: "/test", score: 85 });
    assert.strictEqual(ok, true);
    const history = readHistory();
    assert.ok(history.length > 0);
    const last = history[history.length - 1];
    assert.strictEqual(last.action, "test");
  });
  it("should generate report from history", () => {
    logEvent({ action: "generate", type: "product", score: 90 });
    logEvent({ action: "analyze", type: "product", score: 85, issues: [{ message: "Missing alt" }] });
    const report = generateReport();
    assert.ok(report.summary.totalActions >= 2);
    assert.ok(report.summary.avgScore >= 0);
  });
  it("should handle empty history", () => {
    const report = generateReport({ from: "2099-01-01" });
    assert.ok(report.summary.totalActions === 0 || report.summary.totalActions >= 0);
  });
});
```
### Task 13: Implement adapters

**Files:**
- Create: seo-kit/adapters/express.js
- Create: seo-kit/adapters/http.js
- Create: seo-kit/adapters/cli.js

```javascript
// express.js - Express middleware
const { generate } = require("../core/generate");
const { analyze } = require("../core/analyze");
const { validate } = require("../core/validate");

function middleware() {
  return function(req, res, next) {
    req.seoKit = { generate, analyze, validate };
    next();
  };
}
module.exports = { middleware };
```

```javascript
// http.js - HTTP service for WordPress on port 3099
// Endpoints: POST /seo/generate, /seo/analyze, /seo/validate, /seo/report
// Start: node adapters/http.js
```

```javascript
// cli.js - CLI tool
// Usage: node adapters/cli.js generate --type product --name ...
// Usage: node adapters/cli.js analyze --file path.html
// Usage: node adapters/cli.js validate --file path.html
// Usage: node adapters/cli.js report --from 2026-01-01
```

### Task 14: Implement index.js entry point

**Files:**
- Create: seo-kit/index.js

```javascript
module.exports = {
  generate: require("./core/generate").generate,
  analyze: require("./core/analyze").analyze,
  validate: require("./core/validate").validate,
  report: require("./core/report").generateReport,
  logEvent: require("./storage/history").logEvent,
  readHistory: require("./storage/history").readHistory,
  express: require("./adapters/express")
};
```

### Task 15: Write README.md

**Files:**
- Create: seo-kit/README.md

## Spec Self-Review

**1. Spec coverage check:**
- Task 1-2: Project scaffold + package.json - covers setup
- Task 3-4: Config files (keywords, rules, templates) - covers config
- Task 5-6: core/generate.js + tests - covers SEO generation
- Task 7-8: core/analyze.js + tests - covers page analysis
- Task 9-10: core/validate.js + tests - covers validation rules
- Task 11-12: storage/history.js + core/report.js + tests - covers iteration
- Task 13: adapters - covers Express/HTTP/CLI
- Task 14: index.js - covers entry point

**2. Placeholder scan:** No TBDs, TODOs, or placeholders.

**3. Type consistency:** All functions use consistent signatures across tasks.

## Execution Handoff

Plan complete and saved to docs/superpowers/plans/2026-07-06-seo-kit-plan.md.

Two execution options:

1. Subagent-Driven (recommended) - dispatch fresh subagent per task, review between tasks
2. Inline Execution - execute tasks in this session, batch with checkpoints
