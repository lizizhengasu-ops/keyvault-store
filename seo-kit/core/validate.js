const fs = require('fs');
const path = require('path');
const rules = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'config', 'rules.json'), 'utf-8'));

function validate(html) {
  if (!html) return { passed: false, checks: { error: { passed: false, message: 'No HTML provided' } } };
  const checks = {};

  const tm = html.match(/<title[^>]*>(.*?)<\/title>/i);
  const tLen = tm ? tm[1].trim().length : 0;
  checks.title = {
    passed: !!tm && tLen >= rules.title.minLength && tLen <= rules.title.maxLength,
    value: tm ? tm[1].trim() : null, length: tLen,
    details: 'Required ' + rules.title.minLength + '-' + rules.title.maxLength + ' chars'
  };

  const dm = html.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"/i);
  const dLen = dm ? dm[1].trim().length : 0;
  checks.metaDescription = {
    passed: !!dm && dLen >= rules.metaDescription.minLength && dLen <= rules.metaDescription.maxLength,
    value: dm ? dm[1].trim().substring(0, 80) + '...' : null, length: dLen,
    details: 'Required ' + rules.metaDescription.minLength + '-' + rules.metaDescription.maxLength + ' chars'
  };

  const h1s = html.match(/<h1[^>]*>.*?<\/h1>/gi) || [];
  checks.h1 = { passed: h1s.length === 1, count: h1s.length, details: 'Must have exactly 1 H1, found ' + h1s.length };

  checks.jsonld = { passed: /<script[^>]*type="application\/ld\+json"[^>]*>/i.test(html), details: 'Required for rich snippets' };
  checks.canonical = { passed: /<link[^>]*rel="canonical"[^>]*>/i.test(html), details: 'Prevents duplicate content' };

  const allPassed = Object.values(checks).every(c => c.passed);
  return { passed: allPassed, checks };
}

module.exports = { validate };