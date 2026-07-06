function analyze(html, pageUrl) {
  if (!html) return { score: 0, issues: [{ severity: 'critical', message: 'No HTML content provided' }], warnings: [], recommendations: [] };
  const issues = [], warnings = [], recs = [];

  const tm = html.match(/<title[^>]*>(.*?)<\/title>/i);
  if (!tm) issues.push({ severity: 'critical', message: 'Missing <title> tag' });
  else {
    const t = tm[1].trim();
    if (t.length < 30) warnings.push({ severity: 'warning', message: 'Title too short: ' + t.length + ' chars' });
    if (t.length > 65) warnings.push({ severity: 'warning', message: 'Title too long: ' + t.length + ' chars' });
  }

  const dm = html.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"/i);
  if (!dm) issues.push({ severity: 'critical', message: 'Missing meta description' });
  else {
    const d = (dm[1] || dm[2] || "").trim();
    if (d.length < 50) warnings.push({ severity: 'warning', message: 'Description too short: ' + d.length + ' chars' });
    if (d.length > 165) warnings.push({ severity: 'warning', message: 'Description too long: ' + d.length + ' chars' });
  }

  const h1s = html.match(/<h1[^>]*>.*?<\/h1>/gi) || [];
  if (h1s.length === 0) issues.push({ severity: 'critical', message: 'Missing H1 tag' });
  if (h1s.length > 1) warnings.push({ severity: 'warning', message: 'Multiple H1 tags: ' + h1s.length });

  if (!/<link[^>]*rel="canonical"[^>]*>/i.test(html))
    warnings.push({ severity: 'warning', message: 'Missing canonical link' });
  if (!/<script[^>]*type="application\/ld\+json"[^>]*>/i.test(html))
    warnings.push({ severity: 'warning', message: 'Missing JSON-LD structured data' });
  if (!/<meta[^>]*property="og:title"[^>]*>/i.test(html))
    warnings.push({ severity: 'warning', message: 'Missing og:title tag' });
  if (!/<meta[^>]*name="viewport"[^>]*>/i.test(html))
    issues.push({ severity: 'critical', message: 'Missing viewport meta tag' });

  const imgs = (html.match(/<img[^>]*>/gi) || []).length;
  const altImgs = (html.match(/<img[^>]*alt=/gi) || []).length;
  if (imgs > 0 && altImgs < imgs)
    warnings.push({ severity: 'warning', message: (imgs - altImgs) + ' images missing alt text' });

  const deductions = issues.length * 15 + warnings.length * 5;
  const score = Math.max(0, 100 - deductions);

  recs.push(issues.length > 0 ? 'Fix critical issues first, then address warnings.' : 'Page looks good! Score: ' + score);
  return { score, issues, warnings, recommendations: recs };
}

module.exports = { analyze };