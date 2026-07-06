const { describe, it } = require('node:test');
const assert = require('node:assert');
const { validate } = require('../core/validate');

describe('validate()', () => {
  it('should pass valid HTML', () => {
    const r = validate('<html><head><title>Proper Title Length 30 chars+ ok</title><meta name="description" content="Good description that is over fifty characters long for testing validity"><link rel="canonical" href="/"><script type="application/ld+json">{}</script></head><body><h1>Title</h1></body></html>');
    assert.ok(r.passed);
  });

  it('should fail missing title', () => {
    const r = validate('<html><body><h1>Test</h1></body></html>');
    assert.strictEqual(r.passed, false);
    assert.strictEqual(r.checks.title.passed, false);
  });

  it('should fail missing H1', () => {
    const r = validate('<html><head><title>Proper Title Length 30 chars+ ok</title></head><body></body></html>');
    assert.strictEqual(r.checks.h1.passed, false);
  });
});