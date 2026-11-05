import raw from './grammar-data.json'
import type { GrammarRef } from '../types'

const grammarTitles: Record<string, string> = {
  '1A': 'narrative tenses',
  '1B': 'verb patterns',
  '1C': 'How to … leave phone messages',
  '1D': 'except for, apart from, (not) even',
  '2A': 'present perfect continuous',
  '2B': 'relative clauses',
  '2C': 'How to … talk about things that annoy you',
  '3A': 'conditional structures: unless, even if, in case (of)',
  '3B': 'necessity, obligation and permission',
  '3C': 'How to … take part in an interview',
  '3D': 'expressing preferences',
  '4A': 'past plans and intentions',
  '4B': 'indirect and negative questions',
  '4C': 'How to … talk about the news',
  '5A': 'clauses of purpose: to, so as to, in order to/that, so that',
  '5B': 'comparative and superlative structures',
  '5C': 'How to … summarise information from different sources',
  '5D': 'causative have and get; reflexive pronouns',
  '6A': 'so and such',
  '6B': 'be/get used to',
  '6C': 'How to … ask for and confirm information',
  '7A': 'reported speech',
  '7B': 'passives',
  '7C': 'How to … keep a conversation going',
  '7D': 'avoiding repetition: so, to, not, be',
  '8A': 'third conditional and should have',
  '8B': 'would',
  '8C': 'How to … give a presentation',
}

type RawRef = { code: string; title: string; refPage: number; pdf: number; paragraphs: string[] }

/** Text repairs for spaces lost at line breaks during PDF column extraction. */
const FIXES: [string, string][] = [
  // Specific structural repairs (run before the generic spacing fixes).
  [
    'the wind was blowing Josh was walking down the road',
    'the wind was blowing. Josh was walking down the road',
  ],
  ['the moped been badly damaged', 'the moped had been badly damaged'],
  ['she decided she woke to go out up early for a walk', ''],
  [
    'The sun was shining. The wind was blowing (background information) He was living in Brazil. (at the time of the story, temporary) We were travelling around Australia. (temporary) we were travelling around Australia',
    'The sun was shining. The wind was blowing. (background information)\nHe was living in Brazil. (at the time of the story, temporary)\nWe were travelling around Australia. (temporary)',
  ],
  [
    'the train leftwe arrived at the station The past perfect links a past point ( we arrived at the station ) to a point further back in time ( the train had left ).',
    'The past perfect links a past point (we arrived at the station) to a point further back in time (the train had left).',
  ],
  ['conditional structures: unless unless We use unless to mean if not.', 'We use unless to mean if not.'],
  [
    '(If you don’t hurry up, we’re going to leave without you.) Please don’t park here unless you’re a member of sta (Please don’t park here if you’re not a member of sta When the unless clause isfirst in a sentence, we use a comma at the end of the clause.',
    '(If you don’t hurry up, we’re going to leave without you.)\nPlease don’t park here unless you’re a member of staff. (Please don’t park here if you’re not a member of staff.)\nWhen the unless clause is first in a sentence, we use a comma at the end of the clause.',
  ],
  [
    'I can’t understand Liz unless she speaks slowly even if We use even if for emphasis, to say that something will not change a situation.',
    'I can’t understand Liz unless she speaks slowly.\n## even if\nWe use even if for emphasis, to say that something will not change a situation.',
  ],
  [
    'in case We use in case to talk about being prepared for the possibility that something might happen.',
    '## in case\nWe use in case to talk about being prepared for the possibility that something might happen.',
  ],
  [
    'in case of We use in case of + noun in formal situations',
    '## in case of\nWe use in case of + noun in formal situations',
  ],
  ['unless you’ll tell me the problem.', 'NOT I can’t help you unless you’ll tell me the problem.'],
  ['be allowed Office workers here are permitted', 'be allowed. Office workers here are permitted'],
  [
    'would rather We use would rather + infinitive + than to talk about:',
    '## would rather\nWe use would rather + infinitive + than to talk about:',
  ],
  ['Zayan would rather cook with electricity with gas.', 'Zayan would rather cook with electricity than gas.'],
  [
    'prefer, would prefer We use prefer',
    '## prefer, would prefer\nWe use prefer',
  ],
  ['but he left We meant to invite you', 'but he left. We meant to invite you'],
  [
    'The negative of planned to is wasn’t planning to I wasn’t planning to go anywhere',
    'The negative of planned to is wasn’t planning to. I wasn’t planning to go anywhere',
  ],
  ['more formal than meant to, to, etc.', 'more formal than meant to, planned to, etc.'],
  [
    'After the opening phrase ( Could you tell me …? Can I ask you …? Do you know …? we use the affirmative form.',
    'After the opening phrase (Could you tell me …? Can I ask you …? Do you know …?), we use the affirmative form.',
  ],
  ['we should take a taxi.) Wouldn’t you say', '(I think that we should take a taxi.) Wouldn’t you say'],
  [
    'I often turn offmy phone in order to avoid We can also use so as to + infinitive.',
    'I often turn off my phone in order to avoid distractions. We can also use so as to + infinitive.',
  ],
  [
    'I’d like to move closer to the stage so that I can hear The school is changing the exam date in order that have more time to prepare.',
    'I’d like to move closer to the stage so that I can hear. The school is changing the exam date in order that we have more time to prepare.',
  ],
  ['the subject of the two clauses is di we use', 'the subject of the two clauses is different, we use'],
  [
    'I eat a lot of vegetables, not to lose weight my health.',
    'I eat a lot of vegetables, not to lose weight but for my health.',
  ],
  [
    'I’m going to send you all the information so that you make a decision.',
    'I’m going to send you all the information so that you can make a decision.',
  ],
  [
    'He set his alarm for 7 a.m. in order not to oversleep I check my ‘to do’ list every day so as not to forget We can use not to, but it is not common except as a contrast.',
    'He set his alarm for 7 a.m. in order not to oversleep. I check my ‘to do’ list every day so as not to forget. We can use not to, but it is not common except as a contrast.',
  ],
  [
    'We use quantifiers ( a bit, a little, slightly, much, adverbs to talk about how much difference there is.',
    'We use quantifiers (a bit, a little, slightly, much, a lot) with comparative adjectives and adverbs to talk about how much difference there is.',
  ],
  [
    'but it’s Dimitris is writing a lot more confidently now than he used to.',
    'but it’s better value. Dimitris is writing a lot more confidently now than he used to.',
  ],
  [
    'Mateo and Luciana have travelled the furthest We use quantifiers',
    'Mateo and Luciana have travelled the furthest. We use quantifiers',
  ],
  [
    'Bianca drove faster and faster We use than ever',
    'Bianca drove faster and faster. We use than ever',
  ],
  [
    'than before/ever/ever before We also use ever with superlative adjectives. We don’t use superlatives.',
    'than before/ever/ever before. We also use ever with superlative adjectives.',
  ],
  ['but this is the tallest ever Other structures', 'but this is the tallest ever. Other structures'],
  [
    'summarise information from di We use these phrases',
    'summarise information from different sources.\nWe use these phrases',
  ],
  ['information from information that we read or hear.', 'information that we read or hear.'],
  ['causative have and get; re', 'causative have and get; reflexive pronouns'],
  [
    'Be careful with the word order. The causative different from:',
    'Be careful with the word order. The causative is different from:',
  ],
  [
    'I got my computerfixed, but it took a week to someone.',
    'I got my computer fixed, but it took a week to get someone to do it.',
  ],
  ['it himself.) He had his bike repaired yesterday.', '(He didn’t repair it himself.) He had his bike repaired yesterday.'],
  ['We can use adjective/adverb to show emphasis', 'We can use so + adjective/adverb to show emphasis'],
  [
    'We can also use so + adjective / adverb + that describe something that leads to a result.',
    'We can also use so + adjective/adverb + that to describe something that leads to a result.',
  ],
  ['Without so the sentence would still be complete.', 'Without so, the sentence would still be complete.'],
  ['Without sentence would still be complete.', 'Without such, the sentence would still be complete.'],
  ['such + (a/an) + adjective + noun clause', 'such + (a/an) + adjective + noun + clause'],
  [
    'we sometimes omit from so/such sentences with a clause.',
    'we sometimes omit that from so/such sentences with a clause.',
  ],
  ['so we The negative is be not used to.', 'so we are used to it. The negative is be not used to.'],
  [
    'but I soon got used to it I don’t think I’ll ever get used to their accent. It’s di understand.',
    'but I soon got used to it. I don’t think I’ll ever get used to their accent. It’s difficult to understand.',
  ],
  [
    'How to … ask for and con confirming understanding or asking for clari',
    'How to … ask for and confirm information\n## Confirming understanding or asking for clarification',
  ],
  ['hop-on, hop-o ticket', 'hop-on, hop-off ticket'],
  ['Heidi told me that Spanish.', 'Heidi told me that she spoke Spanish.'],
  [
    'present continuous past continuous ‘I’m working from Bianca explained that home.’ working from home.',
    'present continuous → past continuous: ‘I’m working from home.’ Bianca explained that she was working from home.',
  ],
  [
    'past simple and past perfect present perfect ‘We went to the same Alan said that they had gone school.’ to the same school.',
    'past simple and present perfect → past perfect: ‘We went to the same school.’ Alan said that they had gone to the same school.',
  ],
  [
    '‘My new phone has Hakim complained that his just broken!’ new phone had just broken past continuous past perfect continuous ‘We were planning to They said that they’d been go to Japan.’ planning to go to Japan.',
    '‘My new phone has just broken!’ Hakim complained that his new phone had just broken.\npast continuous → past perfect continuous: ‘We were planning to go to Japan.’ They said that they’d been planning to go to Japan.',
  ],
  [
    'will/would would ‘I’ll call you back later.’ You said you would call back later.',
    'will → would: ‘I’ll call you back later.’ You said you would call back later.',
  ],
  [
    'can/could could ‘I can’t help you.’ Bao replied that he help me.',
    'can → could: ‘I can’t help you.’ Bao replied that he couldn’t help me.',
  ],
  ['agreed the dinner had been terrible.', 'We agreed the dinner had been terrible.'],
  ['agreed, answered, complained explained', 'agreed, answered, complained, explained'],
  [
    'his, she, her, etc.) direct speech reported speech present simple past simple ‘I speak Spanish.’',
    'his, she, her, etc.)\ndirect speech → reported speech: present simple → past simple. ‘I speak Spanish.’',
  ],
  [
    'When it is important, we use The play was written by Shakespeare in 1609.',
    'When it is important, we use by + agent: The play was written by Shakespeare in 1609.',
  ],
  ['We’re going to be met station.', 'We’re going to be met at the station.'],
  ['The school will be completed year.', 'The school will be completed next year.'],
  [
    'The Taj Mahal has been called most beautiful building ever.',
    'The Taj Mahal has been called the most beautiful building ever.',
  ],
  ['We o negative situations.', 'We often use it for negative situations.'],
  [
    'avoiding repetition: so, When we want',
    'avoiding repetition: so, to, not, be\nWhen we want',
  ],
  [
    'Q: I think you know John? A: Yes, I do. (Yes, I know John.) Susan thinks Ben doesn’t like jazz, but he does likes jazz) I didn’t see John, but Mary did. (but Mary saw him) so and not We use think so, hope so and tell ( someone ) so repetition.',
    'Q: I think you know John?\nA: Yes, I do. (Yes, I know John.)\nSusan thinks Ben doesn’t like jazz, but he does. (but he does like jazz)\nI didn’t see John, but Mary did. (but Mary saw him)\n## so and not\nWe use think so, hope so and tell (someone) so to avoid repetition.',
  ],
  [
    'B: I suppose so, but I’ll need it back in half an hour that you can borrow my phone, but I’m not happy about it.) For negatives we use hope not, suppose not and A: Has Angus gone home?',
    'B: I suppose so, but I’ll need it back in half an hour. (I agree that you can borrow my phone, but I’m not happy about it.)\nFor negatives we use hope not, suppose not and guess not.\nA: Has Angus gone home?',
  ],
  [
    'B: I guess not. (I guess we’re not going to catch it.) With think, we prefer to use don’t / doesn’t think so A: Did Elena finish the video?',
    'B: I guess not. (I guess we’re not going to catch it.)\nWith think, we prefer to use don’t/doesn’t think so.\nA: Did Elena finish the video?',
  ],
  [
    'We often use want to, would like to and try to repetition, particularly of a verb.',
    'We often use want to, would like to and try to to avoid repetition, particularly of a verb.',
  ],
  [
    'but I want to. ( I didn’t want to go to college.)',
    'but I didn’t want to. (I didn’t want to go to college.)',
  ],
  [
    'to register.) be With be, we use want to be, would like to be and A: Do you want to be a professional actor?',
    'to register.)\n## be\nWith be, we use want to be, would like to be and be.\nA: Do you want to be a professional actor?',
  ],
  ['fi nishing I’d like to end with', '## finishing\nI’d like to end with'],
  ['used to We can use used to when talking about past habits', '## used to\nWe can use used to when talking about past habits'],
  ['would We can use would to talk about past habits.', 'We can use would to talk about past habits.'],
  [
    'studying Mandarin.) He’s been living',
    '(I’m still studying Mandarin.) He’s been living',
  ],
  [
    'We use the present perfect continuous with to talk about the length or duration of an activity',
    'We use the present perfect continuous with for and since to talk about the length or duration of an activity',
  ],
  ['We use the present perfect continuous with to talk about actions and situations that are relevant now.', 'We use the present perfect continuous with recently, lately, etc. to talk about actions and situations that are relevant now.'],
  ['(She deserves a promotion.) We often use the present perfect simple', '(She deserves a promotion.)\nWe often use the present perfect simple'],
  [
    'Once there was a girl whose name was Lilibet In defining relative clauses',
    'Once there was a girl whose name was Lilibet. In defining relative clauses',
  ],
  [
    'We use relative pronouns who, which, where, when whose',
    'We use relative pronouns who, which, where, when and whose',
  ],
  [
    'Do you think you could NOT Do you think could you',
    'Do you think you could …? NOT Do you think could you …?',
  ],
  ['Our (o hours are (8 a.m. to 6 p.m.).', 'Our office hours are (8 a.m. to 6 p.m.).'],
  ['back to you Thank you for calling', 'back to you. Thank you for calling'],

  // Generic spaces lost at line breaks.
  ['o ff', 'off'],
  ['tofinish', 'to finish'],
  ['thefirst', 'the first'],
  ['Thefirst', 'The first'],
  ['newflavours', 'new flavours'],
  ['comefirst', 'come first'],
  ['Ifinally', 'I finally'],
  ['infinding', 'in finding'],
  ['offmaking', 'off making'],
  ['orfinish', 'or finish'],
  ['wasfive', 'was five'],
  ['You’llfind', 'You’ll find'],
  ['offilms', 'of films'],
  ['notfinished', 'not finished'],
  ['leftout', 'left out'],
  ['thefithe last', 'the first, the last'],
  ['wefind', 'we find'],
  ['isfirst', 'is first'],
  ['offire', 'of fire'],
  ['comesfirst', 'comes first'],
  ['couldn’tfind', 'couldn’t find'],
  ['offmy', 'off my'],
  ['leftthe', 'left the'],
  ['forestfires', 'forest fires'],
  ['computerfixed', 'computer fixed'],
  ['tofix', 'to fix'],
  ['boringfilm', 'boring film'],
  ['leftbefore', 'left before'],
  ['toflying', 'to flying'],
  ['Atfirst', 'At first'],
  ['childrenfind', 'children find'],
  ['Elenafinish', 'Elena finish'],
  ['shefinished', 'she finished'],
  ['leftearly', 'left early'],
  ['newfilm', 'new film'],
  ['We’ d', 'We’d'],
  ['I’ d', 'I’d'],
  [' n’t', 'n’t'],
]

/** Diagram fragments that are meaningless without the printed layout. */
const DROP = new Set([
  '## I’ve',
  '+ been reading',
  '## She’s',
  '## They haven’t',
  '- been listening',
  '## He hasn’t',
  '## Have you',
  'working? been long time?',
  '## Has she',
])

const PRACTICE_START =
  /^\d{1,2}\s+(Choose|Complete|Correct|Match|Rewrite|Underline|Put|Write|Find|Work|Look|Read|Circle|Cross|Tick|Make|Add|Answer|Respond|Plan|Prepare|Discuss|Tell|Think|Use|Change|Join|Label|Describe|Explain)\b/i

function fixText(value: string) {
  let text = value
  for (const [from, to] of FIXES) {
    if (text.includes(from)) text = text.split(from).join(to)
  }
  return text
}

function cleanParagraphs(code: string, title: string, paragraphs: string[]) {
  const result: string[] = []
  for (let i = 0; i < paragraphs.length; i++) {
    let p = paragraphs[i].trim()
    if (!p) continue
    if (i === 0) {
      p = p.replace(new RegExp(`^${code}\\s+`), '')
      const escapedTitle = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      p = p.replace(new RegExp(`^${escapedTitle}\\s+`, 'i'), '')
    }
    p = fixText(p).trim()
    if (i === 0) {
      const escapedTitle = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      p = p.replace(new RegExp(`^${escapedTitle}[.:]?\\s+`, 'i'), '')
    }
    if (!p) continue
    if (PRACTICE_START.test(p)) break
    for (const line of p.split('\n')) {
      const part = line.trim()
      if (!part || DROP.has(part)) continue
      result.push(part)
    }
  }
  return result
}

export const grammarRefs: GrammarRef[] = (raw as RawRef[])
  .map((item) => ({
    code: item.code,
    title: grammarTitles[item.code] ?? item.title,
    refPage: item.refPage,
    pdf: item.pdf,
    paragraphs: cleanParagraphs(item.code, grammarTitles[item.code] ?? item.title, item.paragraphs),
  }))
  .sort((a, b) => a.code.localeCompare(b.code))

export const grammarByCode: Record<string, GrammarRef> = Object.fromEntries(
  grammarRefs.map((g) => [g.code, g]),
)

export function getGrammarRef(code: string) {
  return grammarByCode[code]
}
