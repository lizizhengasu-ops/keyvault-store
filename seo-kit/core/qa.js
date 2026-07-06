// qa.js - Quality Assurance Gate
const { generate } = require("./generate");
const { validate } = require("./validate");
const { analyze } = require("./analyze");
const { logEvent } = require("../storage/history");
const fs2 = require("fs");
const path = require("path");

function loadRules() {
  try {
    return JSON.parse(fs2.readFileSync(path.join(__dirname, "..", "config", "rules.json"), "utf-8"));
  } catch(e) {
    return { qa: { minScore: 80, autoValidate: true, requiredChecks: ["title","metaDescription","h1","jsonld","canonical"], failOnCritical: true } };
  }
}

function qa(pageData, htmlContent) {
  var rules = loadRules().qa || {};
  var minScore = rules.minScore || 80;
  var required = rules.requiredChecks || [];
  var failOnCritical = rules.failOnCritical !== false;

  var checks = [];
  var issues = [];
  var warnings = [];

  // Phase 1: Pre-check input
  if (pageData) {
    if (!pageData.type) issues.push({ severity: "critical", phase: "input", message: "Missing page type" });
    if (!pageData.name) issues.push({ severity: "critical", phase: "input", message: "Missing page name" });
    checks.push({ name: "input-data", passed: issues.filter(function(i){return i.phase==="input";}).length === 0 });
  }

  
      // B2B strategy alignment check
      if (pageData && pageData.type === "product") {
        var name = (pageData.name || "").toLowerCase();
        var desc = (pageData.description || "").toLowerCase();
        var hasB2BKeyword = name.includes("bulk") || name.includes("business") || name.includes("enterprise")
          || name.includes("wholesale") || name.includes("volume") || desc.includes("business") || desc.includes("bulk");
        if (pageData.price && pageData.price > 50 && !hasB2BKeyword) {
          warnings.push({ severity: "info", phase: "strategy", message: "High price product lacks B2B keywords. Consider adding bulk/business terms." });
        }
      }
  // Phase 2: Generate + validate output
  var seo = null;
  if (pageData) {
    seo = generate(pageData);
    if (!seo.valid) {
      issues.push({ severity: "critical", phase: "generate", message: seo.error || "Generation failed" });
    } else {
      checks.push({ name: "generate", passed: true });
      if (seo.title.length < 30) warnings.push({ severity: "warning", phase: "qa", message: "Title too short: "+seo.title.length });
      if (seo.title.length > 65) warnings.push({ severity: "warning", phase: "qa", message: "Title too long: "+seo.title.length });
      if (seo.metaDescription.length < 50) warnings.push({ severity: "warning", phase: "qa", message: "Description too short: "+seo.metaDescription.length });
      if (seo.metaDescription.length > 165) warnings.push({ severity: "warning", phase: "qa", message: "Description too long: "+seo.metaDescription.length });
    }
  }

  // Phase 3: Validate HTML
  if (htmlContent) {
    var vResult = validate(htmlContent);
    checks.push({ name: "validate", passed: vResult.passed });
    required.forEach(function(field) {
      if (vResult.checks[field] && !vResult.checks[field].passed) {
        issues.push({ severity: failOnCritical ? "critical" : "warning", phase: "validate", message: field + " validation failed" });
      }
    });
    var aResult = analyze(htmlContent);
    checks.push({ name: "analyze", passed: aResult.score >= minScore, score: aResult.score });
    aResult.issues.forEach(function(i){ issues.push(i); });
    aResult.warnings.forEach(function(w){ warnings.push(w); });
  }

  var deduction = issues.filter(function(i){return i.severity==="critical";}).length * 15
    + warnings.filter(function(w){return w.severity==="warning";}).length * 5;
  var score = Math.max(0, 100 - deduction);
  var passed = issues.filter(function(i){return i.severity==="critical";}).length === 0;

  logEvent({ action: "qa", score: score, passed: passed, issues: issues, warnings: warnings });

  
  // Gate mode: hard block publishing
  if (pageData && pageData.mode === "gate" && !passed) {
    return { passed: false, blocked: true, score: score, threshold: minScore, checks: checks, issues: issues, warnings: warnings, message: "QA GATE: Fix critical issues before publishing" };
  }
  return { passed: passed, score: score, threshold: minScore, checks: checks, issues: issues, warnings: warnings, seo: seo };
}

module.exports = { qa };
