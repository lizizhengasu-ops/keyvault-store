// auto.js - Unified entry point. No manual server start needed.
// For CLI: directly calls core functions (no HTTP required)
// For cross-language: auto-starts HTTP server on first call

const path = require('path');
const BASE = path.join(__dirname, '..');

function load(m) { return require(path.join(BASE, m)); }
const generate = load('core/generate').generate;
const analyze = load('core/analyze').analyze;
const qaModule = load("core/qa").qa;
const validate = load('core/validate').validate;
const report = load('core/report').generateReport;
const logEvent = load('storage/history').logEvent;

function parseArgs() {
  var args = {};
  for (var i = 3; i < process.argv.length; i += 2) {
    args[process.argv[i].replace(/^--/, '')] = process.argv[i + 1];
  }
  return args;
}

async function main() {
  var cmd = process.argv[2];
  if (!cmd) {
    console.log('seo-kit - Usage:');
    console.log('  node auto.js generate --type product --name "Win 11 Pro"');
    console.log('  node auto.js analyze --file /path/to/page.html');
    console.log('  node auto.js validate --file /path/to/page.html');
    console.log('  node auto.js report [--from YYYY-MM-DD] [--to YYYY-MM-DD]');
    console.log('  node auto.js server              (start HTTP service)');
    process.exit(1);
  }

  if (cmd === 'server') {
    // Start HTTP server for cross-language use
    console.log('[seo-kit] Starting HTTP server...');
    require('./http.js');
    return;
  }

  var args = parseArgs();
  var result;

  if (cmd === 'generate') {
    result = generate({
      type: args.type, name: args.name, slug: args.slug,
      category: args.category, price: parseFloat(args.price || 0),
      stock: parseInt(args.stock || 0), description: args.description || ''
    });
    logEvent({ action: 'generate', type: args.type, page: args.slug, score: result.valid ? 100 : 0 });
  } else if (cmd === 'analyze') {
    if (!args.file) { console.log('Need --file <path>'); process.exit(1); }
    var html = require('fs').readFileSync(args.file, 'utf-8');
    result = analyze(html, args.file);
    logEvent({ action: 'analyze', page: args.file, score: result.score });
  } else if (cmd === 'validate') {
    if (!args.file) { console.log('Need --file <path>'); process.exit(1); }
    var html = require('fs').readFileSync(args.file, 'utf-8');
    result = validate(html);
  }   } else if (cmd === 'qa') {
    result = qaModule(args, args.file || null);
  } else if (cmd === 'report') {
    result = report({ from: args.from, to: args.to });
  } else {
    console.log('Unknown command: ' + cmd);
    process.exit(1);
  }

  console.log(JSON.stringify(result, null, 2));
}

if (require.main === module) { main().catch(e => { console.error('[seo-kit] Error:', e.message); process.exit(1); }); }
module.exports = { main };