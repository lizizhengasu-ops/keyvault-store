const { describe, it } = require('node:test');
const assert = require('node:assert');
const { analyze } = require('../core/analyze');

describe('analyze()', () => {
  it('should detect missing title', () => {
    const r = analyze('<html><body></body></html>');
    assert.ok(r.score < 100);
    assert.ok(r.issues.some(i => i.message.includes('title') || i.message.includes('Title')));
  });

  it('should pass good HTML', () => {
    const html = `<html><head>
      <title>Good Title That Is Over Thirty Characters Long Now</title>
      <meta name="description" content="A good meta description that is over fifty characters long and provides useful information for SEO testing purposes.">
      <meta name="viewport" content="width=device-width">
      <link rel="canonical" href="https://example.com">
      <meta property="og:title" content="Test">
      <script type="application/ld+json">{}</script>
    </head><body><h1>Main Title</h1><img src="test.jpg" alt="test"></body></html>`;
    const r = analyze(html);
    assert.ok(r.score >= 80);
    assert.strictEqual(r.issues.length, 0);
  });

  it('should warn about short description', () => {
    const html = `<html><head><title>Good Title That Is Over Thirty Characters Now</title><meta name="description" content="Too short"></head><body><h1>Test</h1></body></html>`;
    const r = analyze(html);
    assert.ok(r.warnings.some(w => w.message.includes('short')));
  });

  it('should detect multiple H1s', () => {
    const html = `<html><head><title>Good Title That Is Over Thirty Characters Now</title><meta name="description" content="A good meta description that is over fifty characters long enough."></head><body><h1>First</h1><h1>Second</h1></body></html>`;
    const r = analyze(html);
    assert.ok(r.warnings.some(w => w.message.includes('Multiple H1')));
  });

  it('should handle empty input', () => {
    const r = analyze(null);
    assert.strictEqual(r.score, 0);
    assert.ok(r.issues.length > 0);
  });
});