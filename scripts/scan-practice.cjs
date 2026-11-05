const raw = require('../src/content/grammar-data.json')
const start = /^(\d{1,2})\s+(Choose|Complete|Correct|Match|Rewrite|Underline|Put|Write|Find|Work|Look|Read|Circle|Cross|Tick|Make|Add|Answer|Respond|Plan|Prepare|Discuss|Tell|Think|Use|Change|Join|Label|Describe|Explain)\b/i
for (const r of raw) {
  const i = r.paragraphs.findIndex((p) => start.test(p))
  if (i >= 0) {
    console.log(`[${r.code}] practice starts at ${i}/${r.paragraphs.length}: ${r.paragraphs[i].slice(0, 100)}`)
  }
}
