const { describe, it } = require("node:test");
const assert = require("node:assert");
const { qa } = require("../core/qa");

describe("qa()", () => {
  it("pass with valid product", () => {
    var r = qa({ type: "product", name: "Windows 11 Pro OEM Key", slug: "w11pro", category: "windows", price: 34.99, stock: 50, description: "Genuine OEM license key" });
    assert.ok(r.passed);
    assert.ok(r.score >= 80);
  });
  it("fail with missing name", () => {
    var r = qa({ type: "product" });
    assert.strictEqual(r.passed, false);
  });
  it("validate HTML", () => {
    var html = "<html><head><title>Good Title 30 chars here min</title><meta name=\"description\" content=\"A good description over 50 chars for testing QA\"><link rel=\"canonical\" href=\"/\"><meta name=\"viewport\" content=\"width=device-width\"><meta property=\"og:title\" content=\"T\"><script type=\"application/ld+json\">{}</script></head><body><h1>Test</h1></body></html>";
    var r = qa(null, html);
    assert.ok(typeof r.score === "number");
    assert.ok(Array.isArray(r.checks));
  });
  it("B2B mismatch warning", () => {
    var r = qa({ type: "product", name: "Cheap Key", slug: "t", category: "windows", price: 99.99, stock: 50, description: "A key" });
    assert.ok(r.warnings.length > 0);
  });
  it("gate blocks on failure", () => {
    var r = qa({ type: "product", name: "", mode: "gate" });
    assert.strictEqual(r.blocked, true);
  });
  it("gate passes valid data", () => {
    var r = qa({ type: "product", name: "Win11 Pro", slug: "w11pro", category: "windows", price: 34.99, stock: 50, description: "Genuine key", mode: "gate" });
    assert.strictEqual(r.blocked, undefined);
    assert.ok(r.passed);
  });
});