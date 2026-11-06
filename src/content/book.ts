import type { AudioTrack, Lesson, Unit, VideoRef } from '../types'
import audioFiles from './audio-files.json'
import videoFiles from './video-files.json'
import transcripts from './transcripts.json'
import { grammarByCode } from './grammar'
import { vocabByCode } from './vocabulary'
import { unitQuizzes } from './quizzes'
import { lessonPractice } from './lesson-practice'
import { unit1Blocks } from './units/unit-01'

type RawAudio = { original: string; file: string; code: string; track: string }
type RawVideo = { original: string; file: string; unit: number; kind: VideoRef['kind'] }

function trackLabel(track: string) {
  if (track.startsWith('VB')) return `VB ${track.slice(2).replace('_', '.')}`
  if (track.startsWith('MB')) return `MB ${track.slice(2).replace('_', '.')}`
  if (track.startsWith('R')) return `Review ${track.slice(1).replace('_', '.')}`
  return track.replace('_', '.')
}

const audioTranscripts = transcripts.audio as Record<string, string>
const videoTranscripts = transcripts.video as Record<string, string>

// "VB1_01" -> "VB 1.01", "R1_01" -> "R 1.01", "1_01" -> "1.01"
function transcriptKey(track: string) {
  const match = track.match(/^(VB|MB|R)?(\d+)_(\d+)$/)
  if (!match) return track
  const [, prefix, unit, number] = match
  return `${prefix ? `${prefix} ` : ''}${unit}.${number}`
}

const audioByCode: Record<string, AudioTrack[]> = {}
for (const item of audioFiles as RawAudio[]) {
  const list = (audioByCode[item.code] ??= [])
  list.push({
    label: trackLabel(item.track),
    file: item.file,
    note: item.track,
    transcript: audioTranscripts[transcriptKey(item.track)],
  })
}

const videosByUnit: Record<number, VideoRef[]> = {}
const videoTitles: Record<VideoRef['kind'], string> = {
  streetint: 'BBC Street Interviews',
  vlogs: 'Unit vlog',
  programmes: 'BBC Programme',
}
for (const item of videoFiles as RawVideo[]) {
  const list = (videosByUnit[item.unit] ??= [])
  list.push({
    title: videoTitles[item.kind],
    file: item.file,
    kind: item.kind,
    transcript: videoTranscripts[`${item.unit}:${item.kind}`],
  })
}

type LessonSeed = {
  code: string
  title: string
  pages: [number, number]
  labels: Lesson['labels']
  objectives: string[]
  isReview?: boolean
}

type UnitSeed = {
  number: number
  title: string
  phrase: string
  question: string
  intro: string
  pages: [number, number]
  objectives: string[]
  lessons: LessonSeed[]
}

const unitSeeds: UnitSeed[] = [
  {
    number: 1,
    title: 'me & mine',
    phrase: 'The story of me',
    question: "What's the best present you've ever received?",
    intro:
      'Talk about the possessions that tell your story, the materials they are made of, and the choices behind the things we keep.',
    pages: [6, 18],
    objectives: [
      '1A Listening — understand people talking about their possessions; describe possessions and materials; tell a story with narrative tenses; weak forms of auxiliary verbs.',
      '1B Reading — read an article about minimalism vs. maximalism; verb patterns; stress in prepositional phrases.',
      '1C How to … — leave phone messages; phrasal verbs about housework; intonation in polite requests.',
      '1D BBC Street Interviews — understand people talking about gadgets and screen time; except for, apart from, (not) even; write an online forum comment.',
    ],
    lessons: [
      {
        code: '1A',
        title: 'The story of me',
        pages: [8, 10],
        labels: {
          grammar: 'narrative tenses',
          vocabulary: 'describing possessions; materials',
          pronunciation: 'auxiliary verbs: weak forms',
          skills: 'listening',
        },
        objectives: [
          'Understand people talking about their possessions.',
          'Describe possessions and the materials they are made of.',
          'Tell the story of three objects with narrative tenses.',
          'Hear and use weak forms of auxiliary verbs.',
          'Write an advert to sell an item online.',
        ],
      },
      {
        code: '1B',
        title: 'Less is more?',
        pages: [11, 13],
        labels: {
          grammar: 'verb patterns',
          vocabulary: 'personal preferences',
          pronunciation: 'stress in prepositional phrases',
          skills: 'reading',
        },
        objectives: [
          'Read an article about minimalism vs. maximalism.',
          'Use verb patterns to talk about what you like and prefer.',
          'Stress prepositions in phrases correctly.',
          'Answer a questionnaire about personal preferences.',
        ],
      },
      {
        code: '1C',
        title: "Don't forget to …",
        pages: [14, 15],
        labels: {
          grammar: 'How to … leave phone messages',
          vocabulary: 'phrasal verbs: housework',
          pronunciation: 'intonation in polite requests',
          skills: 'how to',
        },
        objectives: [
          'Leave a clear phone message.',
          'Use phrasal verbs to talk about housework.',
          'Sound polite with the right intonation in requests.',
          'Understand recorded messages and respond to them.',
        ],
      },
      {
        code: '1D',
        title: 'Your gadgets',
        pages: [16, 17],
        labels: {
          grammar: 'except for, apart from, (not) even',
          vocabulary: 'gadgets and screen time',
          skills: 'BBC street interviews',
        },
        objectives: [
          'Understand people talking about gadgets and screen time.',
          'Talk about exceptions with except for, apart from and (not) even.',
          'Answer a questionnaire about gadgets.',
          'Write an online forum comment.',
        ],
      },
      {
        code: '1R',
        title: 'Review 1',
        pages: [18, 18],
        labels: { skills: 'review' },
        objectives: [
          'Review the grammar and vocabulary from Unit 1.',
          'Check your progress with a short unit quiz.',
        ],
        isReview: true,
      },
    ],
  },
  {
    number: 2,
    title: 'behaviour',
    phrase: 'Habits and people',
    question: 'What good habits do you have?',
    intro:
      'Explore habits and behaviour, from the science of changing routines to the small things other people do that drive us mad.',
    pages: [19, 30],
    objectives: [
      '2A Reading — read an article about how to change habits; making changes; present perfect continuous; weak form of been.',
      '2B Listening — understand people talking about being a people pleaser; relative clauses; collocations for feelings and behaviour; chunking in relative clauses.',
      '2C How to … — talk about things that annoy you; pet hates; stress and intonation to show annoyance.',
      '2D BBC Programme — understand a wildlife programme about an exciting escape; discuss difficult situations; write a story.',
    ],
    lessons: [
      {
        code: '2A',
        title: 'Change of habit',
        pages: [20, 22],
        labels: {
          grammar: 'present perfect continuous',
          vocabulary: 'making changes',
          pronunciation: 'weak form of been',
          skills: 'reading',
        },
        objectives: [
          'Read an article about how to change habits.',
          'Talk about actions that started in the past and continue now.',
          'Use the weak form of been naturally.',
          'Discuss ways of changing habits.',
        ],
      },
      {
        code: '2B',
        title: 'People pleaser',
        pages: [23, 25],
        labels: {
          grammar: 'relative clauses',
          vocabulary: 'collocations: feelings and behaviour',
          pronunciation: 'chunking in relative clauses',
          skills: 'listening',
        },
        objectives: [
          'Understand people talking about being a people pleaser.',
          'Define and add information with relative clauses.',
          'Use collocations for feelings and behaviour.',
          'Chunk relative clauses into meaningful groups.',
        ],
      },
      {
        code: '2C',
        title: "That's annoying!",
        pages: [26, 27],
        labels: {
          grammar: 'How to … talk about things that annoy you',
          vocabulary: 'pet hates',
          pronunciation: 'stress and intonation to show annoyance',
          skills: 'how to',
        },
        objectives: [
          'Talk about things that annoy you.',
          'Use a range of phrases for pet hates.',
          'Show annoyance with stress and intonation.',
        ],
      },
      {
        code: '2D',
        title: 'Planet Earth II: Jungles',
        pages: [28, 29],
        labels: { vocabulary: 'wildlife', skills: 'BBC programme' },
        objectives: [
          'Understand a wildlife programme about an exciting escape.',
          'Discuss difficult situations and how people react.',
          'Write a story about a dramatic event.',
        ],
      },
      {
        code: '2R',
        title: 'Review 2',
        pages: [30, 30],
        labels: { skills: 'review' },
        objectives: [
          'Review the grammar and vocabulary from Unit 2.',
          'Check your progress with a short unit quiz.',
        ],
        isReview: true,
      },
    ],
  },
  {
    number: 3,
    title: 'working life',
    phrase: 'Work and study',
    question: 'Where do you prefer to work or study?',
    intro:
      'Look at working life, from working from home to the gig economy, and find the language to talk about your own approach to work.',
    pages: [31, 42],
    objectives: [
      '3A Reading — read about famous authors working from home; conditional structures: unless, even if, in case (of); work phrases; stress in phrases.',
      '3B Listening — understand people talking about gig work; necessity, obligation and permission; work vocabulary; elision of /t/.',
      '3C How to … — take part in an interview; personality adjectives (1); negative prefixes; word stress in personality adjectives.',
      '3D BBC Street Interviews — understand people talking about their preferred jobs; expressing preferences; write a discussion board post.',
    ],
    lessons: [
      {
        code: '3A',
        title: 'Working from home',
        pages: [32, 34],
        labels: {
          grammar: 'conditional structures: unless, even if, in case (of)',
          vocabulary: 'work phrases',
          pronunciation: 'stress in phrases',
          skills: 'reading',
        },
        objectives: [
          'Read about famous authors working from home.',
          'Use unless, even if and in case (of) to talk about conditions.',
          'Use common work phrases.',
          'Stress phrases naturally when speaking.',
        ],
      },
      {
        code: '3B',
        title: 'Gig work',
        pages: [35, 37],
        labels: {
          grammar: 'necessity, obligation and permission',
          vocabulary: 'work',
          pronunciation: 'elision of /t/',
          skills: 'listening',
        },
        objectives: [
          'Understand people talking about gig work.',
          'Talk about necessity, obligation and permission.',
          'Notice and produce the elision of /t/.',
        ],
      },
      {
        code: '3C',
        title: 'Good question',
        pages: [38, 39],
        labels: {
          grammar: 'How to … take part in an interview',
          vocabulary: 'personality adjectives (1); negative prefixes',
          pronunciation: 'word stress in personality adjectives',
          skills: 'how to',
        },
        objectives: [
          'Take part in a job interview.',
          'Describe personality and form negative adjectives.',
          'Use the correct word stress in personality adjectives.',
        ],
      },
      {
        code: '3D',
        title: 'This or that?',
        pages: [40, 41],
        labels: {
          grammar: 'expressing preferences',
          skills: 'BBC street interviews',
        },
        objectives: [
          'Understand people talking about their preferred jobs.',
          'Express preferences with a range of structures.',
          'Write a discussion board post.',
        ],
      },
      {
        code: '3R',
        title: 'Review 3',
        pages: [42, 42],
        labels: { skills: 'review' },
        objectives: [
          'Review the grammar and vocabulary from Unit 3.',
          'Check your progress with a short unit quiz.',
        ],
        isReview: true,
      },
    ],
  },
  {
    number: 4,
    title: 'fact or fiction?',
    phrase: 'Stories and truth',
    question: 'Do you prefer true stories or fiction?',
    intro:
      'Investigate hoaxes, documentaries and the news — and decide what you believe, how it is told and why it spreads.',
    pages: [43, 54],
    objectives: [
      '4A Reading — read about a hoax; truth and lies; past plans and intentions; silent consonants.',
      '4B Listening — understand people talking about favourite documentaries; adjectives to describe films; indirect and negative questions; intonation.',
      '4C How to … — talk about the news; news headlines; word stress in adverbs for summarising.',
      '4D BBC Programme — understand a TV programme about keeping secrets; have a conversation with an old friend; write a personal email or letter.',
    ],
    lessons: [
      {
        code: '4A',
        title: 'Hoax!',
        pages: [44, 46],
        labels: {
          grammar: 'past plans and intentions',
          vocabulary: 'truth and lies',
          pronunciation: 'silent consonants',
          skills: 'reading',
        },
        objectives: [
          'Read about a famous hoax.',
          'Talk about past plans and intentions.',
          'Use vocabulary for truth and lies.',
          'Notice and pronounce silent consonants.',
        ],
      },
      {
        code: '4B',
        title: 'Documentary making',
        pages: [47, 49],
        labels: {
          grammar: 'indirect and negative questions',
          vocabulary: 'adjectives to describe films; films and film-making',
          pronunciation: 'intonation in indirect and negative questions',
          skills: 'listening',
        },
        objectives: [
          'Understand people talking about favourite documentaries.',
          'Ask indirect and negative questions.',
          'Describe films and the film-making process.',
          'Use intonation in indirect and negative questions.',
        ],
      },
      {
        code: '4C',
        title: 'News',
        pages: [50, 51],
        labels: {
          grammar: 'How to … talk about the news',
          vocabulary: 'news headlines; the news',
          pronunciation: 'word stress in adverbs for summarising',
          skills: 'how to',
        },
        objectives: [
          'Talk about the news and how stories spread.',
          'Understand news headlines and news vocabulary.',
          'Stress adverbs for summarising correctly.',
        ],
      },
      {
        code: '4D',
        title: 'Fake friends',
        pages: [52, 53],
        labels: { vocabulary: 'keeping secrets', skills: 'BBC programme' },
        objectives: [
          'Understand a TV programme about keeping secrets.',
          'Have a conversation with an old friend.',
          'Write a personal email or letter.',
        ],
      },
      {
        code: '4R',
        title: 'Review 4',
        pages: [54, 54],
        labels: { skills: 'review' },
        objectives: [
          'Review the grammar and vocabulary from Unit 4.',
          'Check your progress with a short unit quiz.',
        ],
        isReview: true,
      },
    ],
  },
  {
    number: 5,
    title: 'consumer',
    phrase: 'Shopping and money',
    question: 'When was the last time you had a problem with a product or service?',
    intro:
      'Talk about shopping, complaints, advertising and money — and learn how to get things done when something goes wrong.',
    pages: [55, 66],
    objectives: [
      '5A Listening — understand people complaining; personality adjectives (2); clauses of purpose; roleplay a complaint; write a complaint email.',
      '5B Reading — read marketing tips; advertising and money; comparative and superlative structures; linking r in phrases.',
      '5C How to … — summarise information from different sources; describing products; intonation in summarising phrases.',
      '5D BBC Street Interviews — understand people talking about DIY; causative have/get; reflexive pronouns; write a meeting summary.',
    ],
    lessons: [
      {
        code: '5A',
        title: 'The customer is always right?',
        pages: [56, 58],
        labels: {
          grammar: 'clauses of purpose: to, so as to, in order to/that, so that',
          vocabulary: 'personality adjectives (2)',
          pronunciation: 'word stress in adjectives',
          skills: 'listening',
        },
        objectives: [
          'Understand people complaining about products and services.',
          'Give reasons and purposes with clauses of purpose.',
          'Use personality adjectives to describe behaviour.',
          'Roleplay a complaint and write a complaint email.',
        ],
      },
      {
        code: '5B',
        title: 'Too good to be true',
        pages: [59, 61],
        labels: {
          grammar: 'comparative and superlative structures',
          vocabulary: 'advertising; money',
          pronunciation: 'linking r in phrases',
          skills: 'reading',
        },
        objectives: [
          'Read marketing tips and spot persuasive language.',
          'Compare products with comparative and superlative structures.',
          'Use advertising and money vocabulary.',
          'Link words naturally with linking r.',
        ],
      },
      {
        code: '5C',
        title: 'Which should I buy?',
        pages: [62, 63],
        labels: {
          grammar: 'How to … summarise information from different sources',
          vocabulary: 'describing products',
          pronunciation: 'intonation in summarising phrases',
          skills: 'how to',
        },
        objectives: [
          'Summarise information from different sources.',
          'Describe products clearly.',
          'Use intonation in summarising phrases.',
        ],
      },
      {
        code: '5D',
        title: 'I do it myself',
        pages: [64, 65],
        labels: {
          grammar: 'causative have and get; reflexive pronouns',
          skills: 'BBC street interviews',
        },
        objectives: [
          'Understand people talking about DIY.',
          'Use the causative have/get and reflexive pronouns.',
          'Write a meeting summary.',
        ],
      },
      {
        code: '5R',
        title: 'Review 5',
        pages: [66, 66],
        labels: { skills: 'review' },
        objectives: [
          'Review the grammar and vocabulary from Unit 5.',
          'Check your progress with a short unit quiz.',
        ],
        isReview: true,
      },
    ],
  },
  {
    number: 6,
    title: 'places',
    phrase: 'Cities and journeys',
    question: "What's your favourite city?",
    intro:
      'Explore cities, epic journeys and city transport, and imagine what the city of tomorrow could look like.',
    pages: [67, 78],
    objectives: [
      '6A Listening — understand people talking about great neighbourhoods; areas of a city; so and such; intonation for emphasis.',
      '6B Reading — read about epic journeys; challenges; idioms; be/get used to.',
      '6C How to … — ask for and confirm information; city transport; fast speech: just.',
      '6D BBC Programme — understand a TV programme about how China has changed; talk about what a place is famous for; write a business idea.',
    ],
    lessons: [
      {
        code: '6A',
        title: 'In the city',
        pages: [68, 70],
        labels: {
          grammar: 'so and such',
          vocabulary: 'areas of a city',
          pronunciation: 'intonation for emphasis with so and such',
          skills: 'listening',
        },
        objectives: [
          'Understand people talking about great neighbourhoods.',
          'Use so and such for emphasis.',
          'Describe areas of a city.',
          'Write instructions for getting to a place.',
        ],
      },
      {
        code: '6B',
        title: 'Great journeys',
        pages: [71, 73],
        labels: {
          grammar: 'be/get used to',
          vocabulary: 'challenges; idioms',
          pronunciation: 'be/get used to',
          skills: 'reading',
        },
        objectives: [
          'Read about epic journeys.',
          'Talk about challenges with be/get used to.',
          'Use travel idioms.',
          'Pronounce be/get used to naturally.',
        ],
      },
      {
        code: '6C',
        title: 'City transport',
        pages: [74, 75],
        labels: {
          grammar: 'How to … ask for and confirm information',
          vocabulary: 'city transport',
          pronunciation: 'fast speech: just',
          skills: 'how to',
        },
        objectives: [
          'Ask for and confirm information.',
          'Use city transport vocabulary.',
          'Understand fast speech with just.',
        ],
      },
      {
        code: '6D',
        title: 'A city of tomorrow',
        pages: [76, 77],
        labels: { vocabulary: 'China', skills: 'BBC programme' },
        objectives: [
          'Understand a TV programme about how China has changed.',
          'Talk about what a place is famous for.',
          'Write a business idea.',
        ],
      },
      {
        code: '6R',
        title: 'Review 6',
        pages: [78, 78],
        labels: { skills: 'review' },
        objectives: [
          'Review the grammar and vocabulary from Unit 6.',
          'Check your progress with a short unit quiz.',
        ],
        isReview: true,
      },
    ],
  },
  {
    number: 7,
    title: 'connect',
    phrase: 'Communication',
    question: "What's your favourite word?",
    intro:
      'Connect with people: report conversations, talk about life online, and learn how to keep talking when a conversation stalls.',
    pages: [79, 90],
    objectives: [
      '7A Listening — understand a podcast about misunderstandings; reporting verbs; ways of speaking; reported speech; stress in reporting verbs.',
      '7B Reading — read about oversharing online; computer use; internet words; passives; stress and weak forms in passives.',
      '7C How to … — keep a conversation going; adverbs; intonation in short questions.',
      '7D BBC Street Interviews — understand people talking about good and bad communication; avoiding repetition: so, to, not, be; write an advice email.',
    ],
    lessons: [
      {
        code: '7A',
        title: 'Mix-up',
        pages: [80, 82],
        labels: {
          grammar: 'reported speech',
          vocabulary: 'reporting verbs; ways of speaking',
          pronunciation: 'stress in reporting verbs',
          skills: 'listening',
        },
        objectives: [
          'Understand a podcast about misunderstandings.',
          'Report what other people said.',
          'Use reporting verbs and ways of speaking.',
          'Stress reporting verbs correctly.',
        ],
      },
      {
        code: '7B',
        title: 'Oversharing',
        pages: [83, 85],
        labels: {
          grammar: 'passives',
          vocabulary: 'computer use; internet words',
          pronunciation: 'stress and weak forms in passives',
          skills: 'reading',
        },
        objectives: [
          'Read about oversharing online.',
          'Use passives to focus on actions and information.',
          'Use computer and internet vocabulary.',
          'Notice stress and weak forms in passives.',
        ],
      },
      {
        code: '7C',
        title: 'Conversation savers',
        pages: [86, 87],
        labels: {
          grammar: 'How to … keep a conversation going',
          vocabulary: 'adverbs',
          pronunciation: 'intonation in short questions',
          skills: 'how to',
        },
        objectives: [
          'Keep a conversation going.',
          'Use adverbs to make questions and answers more natural.',
          'Use intonation in short questions.',
        ],
      },
      {
        code: '7D',
        title: 'A good communicator',
        pages: [88, 89],
        labels: {
          grammar: 'avoiding repetition: so, to, not, be',
          skills: 'BBC street interviews',
        },
        objectives: [
          'Understand people talking about good and bad communication.',
          'Avoid repetition with so, to, not and be.',
          'Write an advice email.',
        ],
      },
      {
        code: '7R',
        title: 'Review 7',
        pages: [90, 90],
        labels: { skills: 'review' },
        objectives: [
          'Review the grammar and vocabulary from Unit 7.',
          'Check your progress with a short unit quiz.',
        ],
        isReview: true,
      },
    ],
  },
  {
    number: 8,
    title: 'wisdom',
    phrase: 'Advice and ideas',
    question: "What's the best piece of advice you've ever been given?",
    intro:
      'Share wisdom, give advice and present your ideas with confidence — from life lessons to a pitch in the Dragons’ Den.',
    pages: [91, 102],
    objectives: [
      '8A Reading — read advice from people of different ages; phrases of advice; third conditional and should have; contractions in complex sentences.',
      '8B Listening — understand the origins of one man’s curiosity; learning; phrasal verbs; would; contracted would.',
      '8C How to … — give a presentation; presenting; stressing words in key phrases.',
      '8D BBC Programme — understand entrepreneurs pitching ideas; talk about pitching a business idea; write a work-related email.',
    ],
    lessons: [
      {
        code: '8A',
        title: 'Wise words',
        pages: [92, 94],
        labels: {
          grammar: 'third conditional and should have',
          vocabulary: 'phrases of advice',
          pronunciation: 'contractions in complex sentences',
          skills: 'reading',
        },
        objectives: [
          'Read advice from people of different ages.',
          'Talk about unreal past situations with the third conditional and should have.',
          'Use phrases of advice.',
          'Use contractions in complex sentences.',
        ],
      },
      {
        code: '8B',
        title: 'Life lessons',
        pages: [95, 97],
        labels: {
          grammar: 'would',
          vocabulary: 'learning; phrasal verbs',
          pronunciation: 'contracted would',
          skills: 'listening',
        },
        objectives: [
          'Understand the origins of one man’s curiosity.',
          'Use would to talk about past habits.',
          'Use phrasal verbs for learning.',
          'Pronounce contracted would naturally.',
        ],
      },
      {
        code: '8C',
        title: 'One thing I know …',
        pages: [98, 99],
        labels: {
          grammar: 'How to … give a presentation',
          vocabulary: 'presenting',
          pronunciation: 'stressing words in key phrases',
          skills: 'how to',
        },
        objectives: [
          'Give a presentation.',
          'Use signposting phrases to structure a talk.',
          'Stress key words in presentation phrases.',
        ],
      },
      {
        code: '8D',
        title: "Dragons' Den",
        pages: [100, 101],
        labels: { vocabulary: 'entrepreneurs', skills: 'BBC programme' },
        objectives: [
          'Understand entrepreneurs pitching ideas.',
          'Talk about pitching a business idea.',
          'Write a work-related email.',
        ],
      },
      {
        code: '8R',
        title: 'Review 8',
        pages: [102, 102],
        labels: { skills: 'review' },
        objectives: [
          'Review the grammar and vocabulary from Unit 8.',
          'Check your progress with a short unit quiz.',
        ],
        isReview: true,
      },
    ],
  },
]

function pdfRange(pages: [number, number]) {
  const list: number[] = []
  for (let printed = pages[0]; printed <= pages[1]; printed++) list.push(printed - 1)
  return list
}

function videoForLesson(unit: UnitSeed, lesson: LessonSeed): VideoRef[] {
  if (!lesson.code.endsWith('D')) return []
  const kind: VideoRef['kind'] = unit.number % 2 === 1 ? 'streetint' : 'programmes'
  return (videosByUnit[unit.number] ?? []).filter((v) => v.kind === kind)
}

export const BOOK = {
  title: 'Speakout',
  level: 'B1+',
  edition: '3rd Edition',
  subtitle: "Student's Book",
  description:
    'The complete B1+ Student’s Book: 8 units, 40 lessons, the full Grammar Bank and Vocabulary Bank, 81 audio tracks and 16 BBC videos.',
  questions: 40,
}

export const units: Unit[] = unitSeeds.map((seed) => {
  const videos = videosByUnit[seed.number] ?? []
  const lessons: Lesson[] = seed.lessons.map((lesson) => {
    const audioCode = lesson.code
    const quiz = lesson.isReview ? unitQuizzes[seed.number] : undefined
    return {
      id: lesson.code.toLowerCase(),
      code: lesson.code,
      title: lesson.title,
      pages: lesson.pages,
      pdfPages: pdfRange(lesson.pages),
      labels: lesson.labels,
      objectives: lesson.objectives,
      audio: audioByCode[audioCode] ?? [],
      videos: videoForLesson(seed, lesson),
      grammar: grammarByCode[lesson.code],
      vocab: vocabByCode[lesson.code],
      practice: lessonPractice[lesson.code],
      blocks: seed.number === 1 ? unit1Blocks[lesson.code] : undefined,
      quiz: quiz
        ? {
            id: `unit-${seed.number}`,
            title: `Unit ${seed.number} progress check`,
            questions: quiz,
          }
        : undefined,
    }
  })

  return {
    id: String(seed.number),
    number: seed.number,
    title: seed.title,
    phrase: seed.phrase,
    question: seed.question,
    intro: seed.intro,
    pages: seed.pages,
    pdfPages: pdfRange(seed.pages),
    overviewPdf: seed.pages[0] - 1,
    objectives: seed.objectives,
    videos,
    lessons,
  }
})

export function getUnit(id: string | number) {
  return units.find((u) => String(u.number) === String(id))
}

export function getLesson(unitId: string | number, lessonId: string) {
  const unit = getUnit(unitId)
  return unit?.lessons.find((l) => l.id === lessonId.toLowerCase())
}

export function flattenLessons() {
  return units.flatMap((unit) => unit.lessons.map((lesson) => ({ unit, lesson })))
}

export function nextLesson(unitId: string, lessonId: string) {
  const flat = flattenLessons()
  const index = flat.findIndex((x) => String(x.unit.number) === unitId && x.lesson.id === lessonId)
  if (index < 0) return undefined
  return flat[index + 1]
}

export function previousLesson(unitId: string, lessonId: string) {
  const flat = flattenLessons()
  const index = flat.findIndex((x) => String(x.unit.number) === unitId && x.lesson.id === lessonId)
  if (index <= 0) return undefined
  return flat[index - 1]
}

export function unitLabel(n: number) {
  return `Unit ${n}`
}

export function allAudio() {
  return units.flatMap((unit) =>
    unit.lessons.flatMap((lesson) =>
      lesson.audio.map((track) => ({
        ...track,
        unit,
        lesson,
      })),
    ),
  )
}

export function allVideos() {
  return units.flatMap((unit) =>
    unit.videos.map((video) => ({
      ...video,
      unit,
      lesson: unit.lessons.find((l) => l.videos.some((v) => v.file === video.file)),
    })),
  )
}
