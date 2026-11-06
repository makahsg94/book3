const fs = require('fs');
const lessons = JSON.parse(fs.readFileSync('scripts/lessons.json','utf8'));
const units = [3,4,5,6,7,8];
for (const u of units) {
  const ul = lessons.filter(l => +l.code[0] === u);
  const obj = {};
  for (const l of ul) {
    const blocks = [];
    blocks.push({ type:'callout', title: l.title, titleAr: l.title, tone:'brand',
      text: l.objectives.join(' '), textAr: l.objectives.join(' ') });
    if (l.labels.vocabulary) {
      blocks.push({ type:'vocab', title: l.labels.vocabulary, titleAr: l.labels.vocabulary, items: [
        { word: l.labels.vocabulary, meaning: 'Key vocabulary for this lesson' }
      ] });
    }
    if (l.labels.grammar) {
      blocks.push({ type:'grammar', title: l.labels.grammar, titleAr: l.labels.grammar, bankPage: l.pages[0],
        explanation: 'Grammar focus: ' + l.labels.grammar + '.', examples: l.objectives.slice(0,3) });
    }
    blocks.push({ type:'text', title:'In this lesson', titleAr:'في هذا الدرس', paragraphs: l.objectives });
    obj[l.code] = blocks;
  }
  const code = `import type { Lesson } from '../../types'\n\nexport const unit${u}Blocks: Record<string, any[]> = ${JSON.stringify(obj, null, 2)}\n`;
  fs.writeFileSync(`src/content/units/unit-0${u}.ts`, code);
  console.log('wrote unit', u, ul.length, 'lessons');
}
