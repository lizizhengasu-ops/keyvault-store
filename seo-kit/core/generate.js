const fs = require('fs');
const path = require('path');

const templates = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', 'config', 'templates.json'), 'utf-8')
);

function fillTemplate(template, vars) {
  let result = template;
  for (const [key, value] of Object.entries(vars)) {
    result = result.replace(new RegExp('{' + key + '}', 'g'), String(value || ''));
  }
  return result;
}

function generate(data) {
  if (!data || !data.type || !data.name) {
    return { error: 'Missing required fields: type, name', valid: false };
  }
  if (!templates[data.type]) {
    return { error: 'Unknown page type: ' + data.type, valid: false };
  }

  const baseUrl = data.baseUrl || 'https://example.com';
  const descShort = (data.description || '').substring(0, 120);
  const descShortSpaced = descShort ? ' ' + descShort + '.' : '';
  const slug = data.slug || data.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
  const pageUrl = baseUrl + '/' + data.type + '/' + slug;

  const vars = { name: data.name, desc_short: descShort, desc_short_spaced: descShortSpaced };
  const tpl = templates[data.type];

  const title = fillTemplate(tpl.title, vars);
  const metaDescription = fillTemplate(tpl.metaDescription, vars);
  const h1 = fillTemplate(tpl.h1, vars);

  const jsonLd = { '@context': 'https://schema.org' };

  if (data.type === 'product') {
    jsonLd['@type'] = 'Product';
    jsonLd.name = data.name;
    jsonLd.description = (data.description || '').substring(0, 300);
    jsonLd.offers = {
      '@type': 'Offer',
      price: data.price || 0,
      priceCurrency: 'USD',
      availability: (data.stock === undefined || data.stock > 0) ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      seller: { '@type': 'Organization', name: 'KeyVault' }
    };
  } else if (data.type === 'faq') {
    jsonLd['@type'] = 'FAQPage';
    jsonLd.mainEntity = [];
  } else if (data.type === 'b2b') {
    jsonLd['@type'] = 'Product';
    jsonLd.name = data.name;
    jsonLd.description = (data.description || '').substring(0, 300);
  } else {
    jsonLd['@type'] = 'Article';
    jsonLd.headline = data.name;
  }

  return {
    title: title.trim().substring(0, 65),
    metaDescription: metaDescription.trim().substring(0, 165),
    h1: h1.trim(),
    ogTitle: title.trim().substring(0, 65),
    ogDescription: metaDescription.trim().substring(0, 165),
    ogUrl: pageUrl,
    ogType: data.type === 'product' ? 'product' : 'website',
    canonical: pageUrl,
    jsonLd: jsonLd,
    valid: true
  };
}

module.exports = { generate };