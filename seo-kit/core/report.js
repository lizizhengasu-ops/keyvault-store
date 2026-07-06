const { readHistory } = require('../storage/history');

function generateReport(opts) {
  opts = opts || {};
  const all = readHistory();
  if (all.length === 0) return { summary: { totalActions: 0, avgScore: 0, trend: 'unknown' }, message: 'No history data yet. Generate and analyze some pages first.' };

  let filtered = all;
  if (opts.from) filtered = filtered.filter(e => e.ts >= opts.from);
  if (opts.to) filtered = filtered.filter(e => e.ts <= opts.to);

  const scores = filtered.filter(e => e.score !== undefined).map(e => e.score);
  const avgScore = scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  const lastScore = scores.length > 0 ? scores[scores.length - 1] : null;
  const firstScore = scores.length > 0 ? scores[0] : null;

  const issueCounts = {};
  filtered.forEach(e => {
    if (Array.isArray(e.issues)) e.issues.forEach(issue => {
      const key = issue.message || String(issue);
      issueCounts[key] = (issueCounts[key] || 0) + 1;
    });
  });

  const commonIssues = Object.entries(issueCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([issue, count]) => ({ issue, count }));

  const trend = (firstScore !== null && lastScore !== null)
    ? (lastScore > firstScore ? 'improving' : lastScore < firstScore ? 'declining' : 'stable')
    : 'unknown';

  const suggestions = commonIssues.slice(0, 3).map(i =>
    'Fix "' + i.issue + '" - appeared ' + i.count + ' times'
  );

  return {
    period: { from: opts.from || 'all', to: opts.to || 'all' },
    summary: { totalActions: filtered.length, avgScore, trend, firstScore, lastScore },
    commonIssues,
    suggestions
  };
}

module.exports = { generateReport };