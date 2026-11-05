const fs = require('fs')
const raw = require('../src/content/grammar-data.json')
const words = new Set(
  fs.readFileSync(require('word-list').default ?? require('word-list'), 'utf8').split('\n').map((w) => w.trim().toLowerCase()).filter(Boolean),
)
const counts = new Map()
for (const r of raw) {
  for (const p of r.paragraphs) {
    for (const tok of p.match(/[A-Za-z][A-Za-z'-]*/g) || []) {
      const t = tok.replace(/['’]/g, '').toLowerCase()
      if (t.length < 4) continue
      if (words.has(t)) continue
      counts.set(tok, (counts.get(tok) || 0) + 1)
    }
  }
}
console.log([...counts].sort((a, b) => b[1] - a[1]).slice(0, 250).map(([w, c]) => `${w} ${c}`).join('\n'))
