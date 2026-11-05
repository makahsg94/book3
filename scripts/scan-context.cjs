const raw = require('../src/content/grammar-data.json')
const targets = ['tfind', 'clari', 'nishing', 'hop-o', 'sta ', 'o ff', 'di ', 'Elenafinish', 'leftwe', 'forestfires']
for (const r of raw) {
  for (const p of r.paragraphs) {
    if (targets.some((t) => p.includes(t))) {
      console.log(`[${r.code}] ${p}`)
      console.log('---')
    }
  }
}
