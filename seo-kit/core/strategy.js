// strategy.js - SEO strategy advisor
// Reads from embedded knowledge base for rich, detailed advice

const fs2 = require("fs");
const path = require("path");

var KB_PATH = path.join(__dirname, "..", "strategy", "knowledge-base");
var STRAT_PATH = path.join(__dirname, "..", "strategy", "strategy.json");

function loadStrategy() {
  try { return JSON.parse(fs2.readFileSync(STRAT_PATH, "utf-8")); }
  catch(e) { return { valid: false, error: "Strategy file not found: " + e.message }; }
}

function listKnowledge() {
  try {
    if (!fs2.existsSync(KB_PATH)) return { valid: false, error: "Knowledge base not found" };
    var files = fs2.readdirSync(KB_PATH).filter(function(f) { return f.endsWith(".md"); });
    return { valid: true, docs: files.sort().map(function(f) {
      var stat = fs2.statSync(path.join(KB_PATH, f));
      return { name: f, size: stat.size + " bytes", modified: stat.mtime.toISOString().split("T")[0] };
    });
  } catch(e) { return { valid: false, error: "Failed to read: " + e.message }; }
}

function readKnowledge(pattern) {
  try {
    var all = listKnowledge();
    if (all.error) return all;
    var match = all.filter(function(f) { return f.name.includes(pattern); });
    if (match.length === 0) return { valid: false, error: "No match: " + pattern, available: all.map(function(f){return f.name;}) };
    var file = path.join(KB_PATH, match[0].name);
    var content = fs2.readFileSync(file, "utf-8");
    return { name: match[0].name, content: content.substring(0, 5000) };
  } catch(e) { return { valid: false, error: "Failed: " + e.message }; }
}

function searchKnowledge(term) {
  if (!term) return { valid: false, error: "Search term required" };
  try {
    var all = listKnowledge();
    if (all.error) return all;
    var results = [];
    all.forEach(function(f) {
      var fp = path.join(KB_PATH, f.name);
      var content = fs2.readFileSync(fp, "utf-8");
      var lines = content.split("\n");
      var matches = [];
      lines.forEach(function(line, i) {
        if (line.toLowerCase().includes(term.toLowerCase()))
          matches.push({ line: i + 1, text: line.trim().substring(0, 100) });
      });
      if (matches.length > 0)
        results.push({ file: f.name, matches: matches.length, snippets: matches.slice(0, 3) });
    });
    return { term: term, total: results.reduce(function(a,r){return a+r.matches;}, 0), results: results };
  } catch(e) { return { valid: false, error: "Search failed: " + e.message }; }
}

function getPlan(phase) {
  var s = loadStrategy();
  if (s.error) return s;
  if (!phase) return s;
  var p = s.phases.find(function(x) { return x.id === phase; });
  if (!p) return { valid: false, error: "Unknown phase: " + phase };
  return { phase: p, principles: s.corePrinciple, sources: s.sources };
}

function getNextSteps(currentPhase, completed) {
  var s = loadStrategy();
  if (s.error) return s;
  completed = completed || [];
  var idx = s.phases.findIndex(function(x) { return x.id === currentPhase; });
  if (idx === -1) idx = 0;
  var phase = s.phases[idx];
  if (!phase) return { valid: false, error: "All complete" };
  var inc = phase.tasks.filter(function(t) { return completed.indexOf(t.id) === -1; });
  return { phase: phase.name, id: phase.id, effort: phase.effort,
    total: phase.tasks.length, done: phase.tasks.length - inc.length,
    next: inc.length > 0 ? inc[0] : null, goal: phase.goal };
}

function getSummary() {
  var s = loadStrategy();
  if (s.error) return s;
  return { strategy: s.name, version: s.version,
    phases: s.phases.map(function(p) { return { id: p.id, name: p.name, tasks: p.tasks.length, goal: p.goal.substring(0,50) }; }),
    total: s.phases.reduce(function(a,p){return a+p.tasks.length;}, 0) };
}

function advise(ctx) {
  ctx = ctx || {};
  var s = loadStrategy();
  if (s.error) return s;
  var done = ctx.completed || [];
  var phase = ctx.currentPhase || "early";
  var idx = s.phases.findIndex(function(x) { return x.id === phase; });
  var p = s.phases[idx >= 0 ? idx : 0];
  var inc = p.tasks.filter(function(t) { return done.indexOf(t.id) === -1; });
  var pct = Math.round(((p.tasks.length - inc.length) / p.tasks.length) * 100);
  var out = [];
  if (pct < 100) {
    out.push("In " + p.name + ". " + inc.length + " tasks remaining.");
    if (inc.length > 0) out.push("Next: " + inc[0].name);
  } else {
    out.push(p.name + " complete!");
    var next = s.phases[idx + 1];
    if (next) out.push("Ready for " + next.name + ". Start: " + next.tasks[0].name);
  }
  var kbCount = 0;
  try { kbCount = fs2.readdirSync(KB_PATH).filter(function(f){return f.endsWith(".md");}).length; } catch(e) {}
  out.push(kbCount + " KB docs available. Use listKnowledge() or searchKnowledge().");
  return { phase: p.name, completion: pct + "%", advice: out, sources: s.sources };
}

module.exports = { getPlan, getNextSteps, getSummary, advise, listKnowledge, readKnowledge, searchKnowledge };
