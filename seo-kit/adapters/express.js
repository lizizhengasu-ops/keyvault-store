const { generate } = require('../core/generate');
const { analyze } = require('../core/analyze');
const { validate } = require('../core/validate');
const { generateReport } = require('../core/report');

function middleware() {
  return function (req, res, next) {
    req.seoKit = { generate, analyze, validate, report: generateReport };
    next();
  };
}

module.exports = { middleware };