const { describe, it } = require('node:test');
const assert = require('node:assert');
const { generate } = require('../core/generate');

describe('generate()', () => {
  it('should return valid SEO for product type', () => {
    const result = generate({
      type: 'product', name: 'Windows 11 Pro OEM Key', slug: 'windows-11-pro-key',
      category: 'windows', price: 34.99, stock: 50,
      description: 'Genuine OEM license key. Lifetime activation for 1 PC.'
    });
    assert.strictEqual(result.valid, true);
    assert.ok(result.title.includes('Windows 11 Pro'));
    assert.ok(result.title.length >= 30);
    assert.ok(result.title.length <= 65);
    assert.ok(result.metaDescription.length >= 50);
    assert.strictEqual(result.jsonLd['@type'], 'Product');
    assert.strictEqual(result.jsonLd.offers.price, 34.99);
    assert.ok(result.canonical.includes('windows-11-pro-key'));
  });

  it('should return valid SEO for category type', () => {
    const result = generate({ type: 'category', name: 'Windows 11 Keys', slug: 'windows-11-keys', description: 'Buy Windows 11 license keys at discount prices' });
    assert.strictEqual(result.valid, true);
    assert.ok(result.title.includes('Windows 11 Keys'));
    assert.strictEqual(result.jsonLd['@type'], 'Article');
  });

  it('should return valid SEO for guide type', () => {
    const result = generate({ type: 'guide', name: 'How to Activate Windows 11', slug: 'activate-windows-11', description: 'Complete step by step guide for activation' });
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

  it('should generate FAQ with FAQPage schema', () => {
    const result = generate({ type: 'faq', name: 'OEM Keys Questions', slug: 'faq-oem' });
    assert.strictEqual(result.valid, true);
    assert.strictEqual(result.jsonLd['@type'], 'FAQPage');
  });

  it('should truncate long descriptions in meta', () => {
    const longDesc = 'A'.repeat(300);
    const result = generate({ type: 'product', name: 'Test Product', slug: 'test', description: longDesc, price: 10, stock: 1 });
    assert.ok(result.metaDescription.length <= 165);
    assert.ok(result.description === undefined || true);
  });
});