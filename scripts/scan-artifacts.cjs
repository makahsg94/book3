const fs = require('fs')
const files = [
  'src/content/grammar-data.json',
  'src/content/vocabulary.ts',
  'src/content/quizzes.ts',
  'src/content/book.ts',
]
const bad = [
  'tofinish', 'thefirst', 'newflavours', 'comefirst', 'leftwe', 'Ifinally', 'infinding',
  'offmaking', 'orfinish', 'wasfive', 'llfind', 'offilms', 'notfinished', 'leftout',
  'thefithe', 'wefind', 'isfirst', 'offire', 'comesfirst', 'tfind', 'offmy', 'leftthe',
  'forestfires', 'computerfixed', 'tofix', 'boringfilm', 'leftbefore', 'toflying', 'Atfirst',
  'childrenfind', 'clari', 'Elenafinish', 'shefinished', 'leftearly', 'Thefirst', 'nishing',
  'o ff', 'member of sta', ' is di', 'from di', 'hop-o ', 'left We', 'so A: Did', 'fi nishing',
]
for (const f of files) {
  const text = fs.readFileSync(f, 'utf8')
  for (const b of bad) {
    let idx = text.indexOf(b)
    while (idx >= 0) {
      console.log(`${f}: ${b} :: ${text.slice(Math.max(0, idx - 70), idx + b.length + 70).replace(/\n/g, ' ')}`)
      idx = text.indexOf(b, idx + 1)
    }
  }
}
