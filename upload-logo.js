const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

const LOGIN_URL = 'http://keysavings.local/wp-login.php';
const ADMIN_AJAX = 'http://keysavings.local/wp-admin/admin-ajax.php';
const REST_API = 'http://keysavings.local/wp-json/wp/v2/media';
const USER = 'zizhenglee';
const PASS = 'snixhwnm1';
const SVG_PATH = 'C:\\Users\\31961\\Documents\\microsoft web\\logo.svg';

function post(url, data, cookies) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const body = typeof data === 'string' ? data : querystring.stringify(data);
    const opts = {
      hostname: urlObj.hostname,
      port: urlObj.port || 80,
      path: urlObj.pathname + (urlObj.search || ''),
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(body),
      }
    };
    if (cookies) opts.headers['Cookie'] = cookies;
    const req = http.request(opts, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        const setCookie = res.headers['set-cookie'];
        resolve({ status: res.statusCode, body: d, cookies: setCookie ? setCookie.join('; ') : cookies });
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function main() {
  // Step 1: Login
  console.log('Logging in...');
  const loginBody = 'log=' + encodeURIComponent(USER) + '&pwd=' + encodeURIComponent(PASS) + '&wp-submit=Log+In&redirect_to=' + encodeURIComponent('/wp-admin/') + '&testcookie=1';
  const login = await post(LOGIN_URL, loginBody);
  
  if (login.status === 302 || login.status === 301) {
    console.log('Login redirected (likely success), status: ' + login.status);
  } else if (login.body.includes('ERROR')) {
    console.log('Login failed!');
    const errMatch = login.body.match(/<div[^>]*id=\"login_error\"[^>]*>([\\s\\S]*?)<\\/div>/);
    console.log('Error: ' + (errMatch ? errMatch[1].replace(/<[^>]*>/g,'').trim() : 'Unknown'));
    return;
  }
  
  // Set the logo via direct database
  console.log('Attempting direct logo setting...');
  
  // Get nonce from admin page
  const adminRes = await post('http://keysavings.local/wp-admin/admin-ajax.php', { action: 'rest-nonce' }, login.cookies);
  console.log('Nonce response: ' + adminRes.body.substring(0, 200));
  
  console.log('Done. Login cookies: ' + (login.cookies || 'none').substring(0, 100));
}

main().catch(console.error);
