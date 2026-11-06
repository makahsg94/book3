const fs = require('fs');
const lessons = JSON.parse(fs.readFileSync('scripts/lessons.json','utf8'));
const pageText = JSON.parse(fs.readFileSync('src/content/page-text.json','utf8'));
const u = 2;
const ul = lessons.filter(l => +l.code[0] === u);
const obj = {};
for (const l of ul) {
  const blocks = [];
  const pages = [];
  for (let p = l.pages[0]; p <= l.pages[1]; p++) pages.push(p);
  const ocr = pages.map(p => pageText[String(p)]?.text || '').join('\n\n').trim();
  blocks.push({ type:'callout', title: l.title, titleAr: l.title, tone:'brand', text: l.objectives.join(' '), textAr: l.objectives.join(' ') });
  if (ocr) blocks.push({ type:'text', title: 'Lesson text (from book pages)', titleAr: 'نص الدرس (من صفحات الكتاب)', paragraphs: [ocr] });
  if (l.labels.vocabulary) blocks.push({ type:'vocab', title: l.labels.vocabulary, titleAr: l.labels.vocabulary, items: [{ word: l.labels.vocabulary, meaning: 'Key vocabulary for this lesson' }] });
  if (l.labels.grammar) blocks.push({ type:'grammar', title: l.labels.grammar, titleAr: l.labels.grammar, bankPage: l.pages[0], explanation: 'Grammar focus: ' + l.labels.grammar + '.', examples: l.objectives.slice(0,3) });
  blocks.push({ type:'text', title:'In this lesson', titleAr:'في هذا الدرس', paragraphs: l.objectives });
  obj[l.code] = blocks;
}
const code = `import type { Lesson } from '../../types'\n\nexport const unit2Blocks: Record<string, any[]> = ${JSON.stringify(obj, null, 2)}\n`;
fs.writeFileSync(`src/content/units/unit-02.ts`, code);
console.log('wrote unit 2', ul.length, 'lessons');
