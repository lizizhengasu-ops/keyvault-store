const fs = require('fs');
const path = require('path');
const HISTORY_FILE = path.join(__dirname, '..', 'storage', '.history.jsonl');

function logEvent(event) {
  try {
    const line = JSON.stringify({ ts: new Date().toISOString(), ...event }) + '\n';
    fs.appendFileSync(HISTORY_FILE, line, 'utf-8');
    return true;
  } catch { return false; }
}

function readHistory() {
  try {
    if (!fs.existsSync(HISTORY_FILE)) return [];
    const data = fs.readFileSync(HISTORY_FILE, 'utf-8');
    return data.trim().split('\n').filter(Boolean).map(line => {
      try { return JSON.parse(line); } catch { return null; }
    }).filter(Boolean);
  } catch { return []; }
}

module.exports = { logEvent, readHistory };