
const { generate } = require("./core/generate");
const { analyze } = require("./core/analyze");
const { validate } = require("./core/validate");
const { generateReport } = require("./core/report");
const { qa } = require("./core/qa");
const { getPlan, getNextSteps, getSummary, advise, listKnowledge, readKnowledge, searchKnowledge } = require("./core/strategy");
const { logEvent, readHistory } = require("./storage/history");

let gemini = null;
try { gemini = require("./adapters/gemini"); } catch(e) { }

module.exports = {
  generate, analyze, validate,
  report: generateReport,
  qa, getPlan, getNextSteps, getSummary, advise,
  listKnowledge, readKnowledge, searchKnowledge,
  logEvent, readHistory,
  express: require("./adapters/express"),
  gemini: gemini || null
};
