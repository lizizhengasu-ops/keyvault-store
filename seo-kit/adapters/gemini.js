// Gemini AI adapter - optional enhancement for SEO Kit
// Uses Google Gemini API for AI-powered title/description generation and content analysis
// Only active when GEMINI_API_KEY is set

const https = require('https');

let apiKey = null;
try {
  apiKey = process.env.GEMINI_API_KEY || null;
} catch(e) { /* ignore */ }

const MODEL = 'gemini-2.0-flash';
const API_BASE = 'https://generativelanguage.googleapis.com/v1beta/models';

function callGemini(prompt, systemInstruction) {
  return new Promise((resolve, reject) => {
    if (!apiKey) return reject(new Error('GEMINI_API_KEY not set'));
    
    const body = JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      systemInstruction: systemInstruction ? { parts: [{ text: systemInstruction }] } : undefined,
      generationConfig: { temperature: 0.7, maxOutputTokens: 500 }
    });

    const url = new URL(API_BASE + '/' + MODEL + ':generateContent?key=' + apiKey);
    const req = https.request({
      hostname: url.hostname, path: url.pathname + url.search,
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) }
    }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try {
          const j = JSON.parse(data);
          const text = j.candidates?.[0]?.content?.parts?.[0]?.text || '';
          resolve(text);
        } catch(e) { reject(new Error('Failed to parse Gemini response: ' + e.message)); }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function generateAI(data) {
  if (!apiKey) return { error: 'GEMINI_API_KEY not set', available: false };
  
  const prompt = 'You are an SEO expert. Given the following product/page data, generate:\n'
    + '1. An SEO title (30-60 characters, include primary keyword)\n'
    + '2. A meta description (50-160 characters, compelling, include keywords)\n'
    + '3. 3-5 relevant keywords\n\n'
    + 'Page data:\n'
    + 'Type: ' + (data.type || 'unknown') + '\n'
    + 'Name: ' + (data.name || '') + '\n'
    + 'Category: ' + (data.category || '') + '\n'
    + 'Description: ' + (data.description || '') + '\n'
    + 'Price: $' + (data.price || 0) + '\n\n'
    + 'Respond in JSON format only:\n'
    + '{"title":"...","metaDescription":"...","keywords":["...","..."]}';

  try {
    const text = await callGemini(prompt);
    const j = JSON.parse(text.replace(/```json|```/g, '').trim());
    return {
      title: (j.title || '').substring(0, 65),
      metaDescription: (j.metaDescription || '').substring(0, 165),
      keywords: j.keywords || [],
      source: 'gemini-ai',
      available: true
    };
  } catch(e) {
    return { error: 'Gemini AI failed: ' + e.message, available: true, fallback: true };
  }
}

async function analyzeAI(htmlContent, url) {
  if (!apiKey) return { error: 'GEMINI_API_KEY not set', available: false };
  
  const prompt = 'Analyze this webpage for SEO quality. Provide:\n'
    + '1. Overall score (0-100)\n'
    + '2. Top 3 issues found\n'
    + '3. Top 3 improvement suggestions\n\n'
    + 'URL: ' + (url || 'unknown') + '\n'
    + 'Content preview: ' + (htmlContent || '').substring(0, 2000) + '\n\n'
    + 'Respond in JSON format only:\n'
    + '{"score":85,"issues":["...","...","..."],"suggestions":["...","...","..."]}';

  try {
    const text = await callGemini(prompt);
    const j = JSON.parse(text.replace(/```json|```/g, '').trim());
    return {
      score: j.score || 0,
      issues: j.issues || [],
      suggestions: j.suggestions || [],
      source: 'gemini-ai',
      available: true
    };
  } catch(e) {
    return { error: 'Gemini AI failed: ' + e.message, available: true, fallback: true };
  }
}

function available() {
  return apiKey !== null;
}

module.exports = { generateAI, analyzeAI, available };