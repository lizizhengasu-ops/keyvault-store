const fs = require('fs');
const path = 'C:/Users/31961/Local Sites/keysavings/app/public/wp-content/themes/astra/assets/js/b2b-component-plain.js';
const src = fs.readFileSync(path, 'utf-8');

const funcs = [];
let remaining = src.replace(/^\uFEFF/, '');
const funcRegex = /^  function (\w+)\(\) \{/gm;
let match;

while ((match = funcRegex.exec(remaining)) !== null) {
    const start = match.index;
    const bracePos = match.index + match[0].length - 1;
    let depth = 1;
    let inStr = false;
    let i = bracePos + 1;
    
    while (i < remaining.length && depth > 0) {
        const ch = remaining[i];
        const prev = i > 0 ? remaining[i-1] : '';
        if (ch === '"' && prev !== '\\') inStr = !inStr;
        else if (!inStr) {
            if (ch === '{') depth++;
            else if (ch === '}') depth--;
        }
        i++;
    }
    
    funcs.push(remaining.substring(start, i));
    funcRegex.lastIndex = i;
}

console.log('Found ' + funcs.length + ' top-level functions');
funcs.forEach(f => console.log('  - ' + f.match(/function (\w+)/)[1]));

let result = '(function() {\n  if (typeof React === "undefined" || typeof ReactDOM === "undefined") return;\n  var e = React.createElement, F = React.Fragment, useState = React.useState, useEffect = React.useEffect;\n\n';
for (const fn of funcs) result += fn + '\n\n';

const loadEnd = remaining.indexOf('window.addEventListener("load"');
if (loadEnd >= 0) {
    let loadStr = remaining.substring(loadEnd);
    let nDepth = 0, inStr2 = false;
    let j = 0;
    while (j < loadStr.length) {
        const ch = loadStr[j];
        const prev = j > 0 ? loadStr[j-1] : '';
        if (ch === '"' && prev !== '\\') inStr2 = !inStr2;
        else if (!inStr2) {
            if (ch === '{') nDepth++;
            else if (ch === '}') { nDepth--; if (nDepth < 0) break; }
        }
        j++;
    }
    result += loadStr.substring(0, j) + '\n';
}

fs.writeFileSync(path, result, 'utf-8');
console.log('Written: ' + result.length + ' chars');
