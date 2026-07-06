# SEO Kit

Isolated, callable SEO optimization toolkit for e-commerce sites.

## Install

```bash
npm install @keyvault/seo-kit
```

## Quick Start

```javascript
const seoKit = require('@keyvault/seo-kit');

// Generate SEO tags for a product page
const seo = seoKit.generate({
  type: 'product',
  name: 'Windows 11 Pro OEM Key',
  slug: 'windows-11-pro-key',
  category: 'windows',
  price: 34.99,
  stock: 50,
  description: 'Genuine OEM license key'
});
// Returns: { title, metaDescription, h1, ogTitle, ogDescription, canonical, jsonLd, ... }
```

## API

| Function | Description |
|----------|-------------|
| generate(data) | Generate Title, Meta, OG, JSON-LD for a page |
| analyze(html, url) | Analyze existing HTML for SEO issues, returns score 0-100 |
| validate(html) | Validate HTML against SEO rules, returns pass/fail per rule |
| report(opts) | Generate iteration report from history, shows trends and issues |
| logEvent(event) | Log an event to history for future analysis |
| readHistory() | Read all history events |

## Adapters

### Express.js
```javascript
const { middleware } = require('@keyvault/seo-kit').express;
app.use(middleware());
```

### HTTP (for WordPress)
```bash
node node_modules/@keyvault/seo-kit/adapters/http.js
curl -X POST http://localhost:3099/seo/generate -H "Content-Type: application/json" -d '{"type":"product","name":"Test"}'
```

### CLI
```bash
node node_modules/@keyvault/seo-kit/adapters/cli.js generate --type product --name "Windows 11 Pro"
```

## Test
```bash
npm test
```