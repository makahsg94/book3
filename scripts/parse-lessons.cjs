const fs = require('fs');
const s = fs.readFileSync('src/content/book.ts', 'utf8');
const lessonRe = /code:\s*'([^']+)',\s*title:\s*(?:"([^"]*)"|'([^']*)'),\s*pages:\s*\[(\d+),\s*(\d+)\],\s*labels:\s*\{([\s\S]*?)\},\s*objectives:\s*\[([\s\S]*?)\],/g;
let m; const lessons = [];
while ((m = lessonRe.exec(s))) {
  const title = m[2] !== undefined ? m[2] : m[3];
  const labels = m[6];
  const g = (k) => { const r = new RegExp(k + ":\\s*'([^']*)'").exec(labels); return r ? r[1] : ''; };
  const objs = m[7].match(/'([^']*)'/g)?.map(x => x.slice(1, -1)) || [];
  lessons.push({ code: m[1], title, pages: [+m[4], +m[5]], labels: { grammar: g('grammar'), vocabulary: g('vocabulary'), pronunciation: g('pronunciation'), skills: g('skills') }, objectives: objs });
}
fs.writeFileSync('scripts/lessons.json', JSON.stringify(lessons, null, 2));
console.log('parsed', lessons.length);
