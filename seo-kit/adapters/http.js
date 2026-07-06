const http = require('http');
const { generate } = require('../core/generate');
const { analyze } = require('../core/analyze');
const { validate } = require('../core/validate');
const { generateReport } = require('../core/report');
const { logEvent } = require('../storage/history');

function parseBody(req) {
  return new Promise(resolve => {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => { try { resolve(JSON.parse(body)); } catch { resolve({ parseError: true, error: "Invalid JSON" }); } });
  });
}

const server = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.writeHead(200); res.end(); return; }

  try {
    const body = await parseBody(req);
  if (body && body.parseError) { res.writeHead(400); res.end(JSON.stringify({ error: body.error })); return; }
    let result;
    if (req.url === '/seo/generate') {
      result = generate(body);
      logEvent({ action: 'generate', type: body.type, page: body.slug, score: result.valid ? 100 : 0 });
    } else if (req.url === '/seo/analyze') {
      result = analyze(body.html, body.url);
      logEvent({ action: 'analyze', url: body.url, score: result.score, issues: result.issues });
    } else if (req.url === '/seo/validate') {
      result = validate(body.html);
    }   } else if (req.url === '/seo/qa') {
      var qaM = require('../core/qa').qa;
      result = qaM(body.pageData, body.html);
    } else if (req.url === '/seo/report') {
      result = generateReport(body);
    } else {
      res.writeHead(404); res.end(JSON.stringify({ error: 'Not found' })); return;
    }
    res.writeHead(200); res.end(JSON.stringify(result));
  } catch (e) {
    res.writeHead(500); res.end(JSON.stringify({ error: e.message }));
  }
});

const PORT = process.env.SEO_KIT_PORT || 3099;
if (require.main === module) server.listen(PORT, () => console.log('SEO Kit HTTP service running on port ' + PORT));
module.exports = { server };