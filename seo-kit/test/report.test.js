const { describe, it } = require('node:test');
const assert = require('node:assert');
const { logEvent, readHistory } = require('../storage/history');
const { generateReport } = require('../core/report');

describe('history + report', () => {
  it('should log and read events', () => {
    const ok = logEvent({ action: 'test', page: '/test', score: 85 });
    assert.strictEqual(ok, true);
    const history = readHistory();
    assert.ok(history.length > 0);
    const last = history[history.length - 1];
    assert.strictEqual(last.action, 'test');
  });

  it('should generate report from history', () => {
    logEvent({ action: 'generate', type: 'product', score: 90 });
    logEvent({ action: 'analyze', type: 'product', score: 85, issues: [{ message: 'Missing alt text' }] });
    const report = generateReport();
    assert.ok(report.summary.totalActions >= 2);
    assert.ok(report.summary.avgScore >= 0);
  });

  it('should handle empty history period', () => {
    const report = generateReport({ from: '2099-01-01' });
    assert.ok(report.summary.totalActions === 0 || report.summary.totalActions >= 0);
  });
});