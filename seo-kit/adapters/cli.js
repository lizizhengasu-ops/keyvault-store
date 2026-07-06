#!/usr/bin/env node
const { generate } = require('../core/generate');
const { analyze } = require('../core/analyze');
const { validate } = require('../core/validate');
const { generateReport } = require('../core/report');
const fs = require('fs');

const cmd = process.argv[2];
if (!cmd) { console.log('Usage: node cli.js generate|analyze|validate|report [options]'); process.exit(1); }

function getArgs() {
  const data = {};
  for (let i = 3; i < process.argv.length; i += 2) {
    data[process.argv[i].replace(/^--/, '')] = process.argv[i + 1];
  }
  return data;
}

if (cmd === 'generate') {
  console.log(JSON.stringify(generate(getArgs()), null, 2));
} else if (cmd === 'analyze') {
  const idx = process.argv.indexOf('--file');
  if (idx > -1) {
    const html = fs.readFileSync(process.argv[idx + 1], 'utf-8');
    console.log(JSON.stringify(analyze(html), null, 2));
  }
} else if (cmd === 'validate') {
  const idx = process.argv.indexOf('--file');
  if (idx > -1) {
    const html = fs.readFileSync(process.argv[idx + 1], 'utf-8');
    console.log(JSON.stringify(validate(html), null, 2));
  }
} else if (cmd === 'report') {
  const opts = {};
  const fi = process.argv.indexOf('--from'); if (fi > -1) opts.from = process.argv[fi + 1];
  const ti = process.argv.indexOf('--to'); if (ti > -1) opts.to = process.argv[ti + 1];
  console.log(JSON.stringify(generateReport(opts), null, 2));
}