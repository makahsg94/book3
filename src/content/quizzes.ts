import type { QuizQuestion } from '../types'

export const unitQuizzes: Record<number, QuizQuestion[]> = {
  1: [
    {
      question: 'By the time we arrived at the cinema, the film ___ .',
      options: ['started', 'had started', 'was starting'],
      answer: 1,
      explanation: 'The film started before we arrived, so we use the past perfect: had started.',
    },
    {
      question: 'She ___ along the beach when she found the ring.',
      options: ['jogged', 'had jogged', 'was jogging'],
      answer: 2,
      explanation: 'The past continuous was jogging gives the background action to the main event found.',
    },
    {
      question: 'I don’t mind ___ early at the weekend.',
      options: ['get up', 'to get up', 'getting up'],
      answer: 2,
      explanation: 'Mind is followed by the -ing form: mind getting up.',
    },
    {
      question: 'He suggested ___ a taxi to the airport.',
      options: ['take', 'to take', 'taking'],
      answer: 2,
      explanation: 'Suggest is followed by the -ing form: suggested taking.',
    },
    {
      question: '___ the noisy neighbours, the flat is perfect.',
      options: ['Except for', 'Even', 'Apart'],
      answer: 0,
      explanation: 'Except for introduces the one thing that is not included.',
    },
  ],
  2: [
    {
      question: 'I ___ for my exam for two hours and I’m still not finished.',
      options: ['study', 'have been studying', 'studied'],
      answer: 1,
      explanation: 'The present perfect continuous describes an action that started in the past and is still continuing.',
    },
    {
      question: 'The woman ___ helped me was very kind.',
      options: ['which', 'whose', 'who'],
      answer: 2,
      explanation: 'Who refers to a person in a defining relative clause.',
    },
    {
      question: 'This is the book ___ I told you about.',
      options: ['who', 'that', 'whose'],
      answer: 1,
      explanation: 'That can refer to a thing in a defining relative clause.',
    },
    {
      question: 'It ___ me when people talk loudly on the phone.',
      options: ['annoys', 'is annoyed', 'annoying'],
      answer: 0,
      explanation: 'We use it + verb to talk about a thing that annoys us: It annoys me.',
    },
    {
      question: 'I can’t stand ___ in long queues.',
      options: ['to wait', 'waiting', 'wait'],
      answer: 1,
      explanation: 'Can’t stand is followed by the -ing form.',
    },
  ],
  3: [
    {
      question: 'Unless you hurry, you ___ late for the meeting.',
      options: ['will be', 'would be', 'are being'],
      answer: 0,
      explanation: 'Unless means if not. The first conditional uses if/will: Unless you hurry, you will be late.',
    },
    {
      question: 'You ___ wear a helmet on this building site. It’s the law.',
      options: ['might', 'must', 'could'],
      answer: 1,
      explanation: 'Must expresses a strong obligation.',
    },
    {
      question: 'I ___ work tomorrow, so I can relax tonight.',
      options: ['mustn’t', 'don’t have to', 'can’t'],
      answer: 1,
      explanation: 'Don’t have to means it is not necessary. Mustn’t means it is forbidden.',
    },
    {
      question: 'I’d rather ___ at home tonight.',
      options: ['to stay', 'staying', 'stay'],
      answer: 2,
      explanation: 'Would rather is followed by the infinitive without to: would rather stay.',
    },
    {
      question: 'She prefers tea ___ coffee.',
      options: ['than', 'to', 'from'],
      answer: 1,
      explanation: 'Prefer X to Y: She prefers tea to coffee.',
    },
  ],
  4: [
    {
      question: 'We ___ go to Italy last summer, but we changed our plans.',
      options: ['were going to', 'had gone to', 'went to'],
      answer: 0,
      explanation: 'Was/were going to describes a past plan that did not happen.',
    },
    {
      question: 'Could you tell me where ___ ?',
      options: ['is the station', 'the station is', 'the station was'],
      answer: 1,
      explanation: 'In an indirect question, the subject comes before the verb: where the station is.',
    },
    {
      question: 'Why ___ you tell me about the meeting?',
      options: ['didn’t', 'you didn’t', 'not'],
      answer: 0,
      explanation: 'A negative question uses the auxiliary + n’t + subject: Why didn’t you tell me?',
    },
    {
      question: 'He asked me whether I ___ the news.',
      options: ['see', 'saw', 'had seen'],
      answer: 2,
      explanation: 'After a past reporting verb, the present perfect usually changes to the past perfect.',
    },
    {
      question: 'I was going to call you, but I ___ .',
      options: ['forget', 'forgot', 'was forgetting'],
      answer: 1,
      explanation: 'The past simple reports the completed action that interrupted the plan.',
    },
  ],
  5: [
    {
      question: 'I went to the shop ___ some milk.',
      options: ['for buy', 'to buy', 'buying'],
      answer: 1,
      explanation: 'We use the to-infinitive to express purpose: to buy some milk.',
    },
    {
      question: 'She spoke quietly ___ wake the baby.',
      options: ['so as not to', 'to not', 'for not'],
      answer: 0,
      explanation: 'The negative purpose clause is so as not to + infinitive.',
    },
    {
      question: 'This is ___ film I’ve ever seen.',
      options: ['the better', 'best', 'the best'],
      answer: 2,
      explanation: 'The superlative of good is the best, with the definite article.',
    },
    {
      question: 'He’s ___ than his brother.',
      options: ['more tall', 'taller', 'tallest'],
      answer: 1,
      explanation: 'Short adjectives form the comparative with -er: taller than.',
    },
    {
      question: 'I ___ my hair cut yesterday.',
      options: ['had', 'have', 'did'],
      answer: 0,
      explanation: 'The causative is have + object + past participle: had my hair cut.',
    },
  ],
  6: [
    {
      question: 'It was ___ a hot day that we stayed inside.',
      options: ['so', 'such', 'too'],
      answer: 1,
      explanation: 'Such is used before a/an + adjective + noun: such a hot day.',
    },
    {
      question: 'The film was ___ boring that I fell asleep.',
      options: ['so', 'such', 'too'],
      answer: 0,
      explanation: 'So is used before an adjective: so boring that …',
    },
    {
      question: 'I’m used to ___ up early.',
      options: ['get', 'getting', 'got'],
      answer: 1,
      explanation: 'Be used to is followed by the -ing form: used to getting up.',
    },
    {
      question: 'She’ll get used to ___ in London.',
      options: ['live', 'living', 'lived'],
      answer: 1,
      explanation: 'Get used to is followed by the -ing form: get used to living.',
    },
    {
      question: '___ the weather, the trip was perfect.',
      options: ['Apart from', 'Even', 'Except'],
      answer: 0,
      explanation: 'Apart from introduces the one exception: Apart from the weather …',
    },
  ],
  7: [
    {
      question: 'She said she ___ tired.',
      options: ['is', 'was', 'has been'],
      answer: 1,
      explanation: 'In reported speech, the present simple usually becomes the past simple.',
    },
    {
      question: 'He told me he ___ the film.',
      options: ['saw', 'has seen', 'had seen'],
      answer: 2,
      explanation: 'The past simple usually becomes the past perfect in reported speech.',
    },
    {
      question: 'The building ___ in 1990.',
      options: ['built', 'was built', 'is building'],
      answer: 1,
      explanation: 'The passive is be + past participle: was built.',
    },
    {
      question: 'English ___ all over the world.',
      options: ['speaks', 'is spoken', 'is speaking'],
      answer: 1,
      explanation: 'The passive focuses on the language, not on who speaks it: English is spoken.',
    },
    {
      question: 'I don’t like coffee, but my sister ___ .',
      options: ['does', 'is', 'likes'],
      answer: 0,
      explanation: 'We can avoid repetition with an auxiliary verb: my sister does.',
    },
  ],
  8: [
    {
      question: 'If I ___ known, I would have helped.',
      options: ['have', 'had', 'would have'],
      answer: 1,
      explanation: 'The third conditional uses if + past perfect + would have + past participle.',
    },
    {
      question: 'You ___ told me! I would have understood.',
      options: ['should have', 'should', 'must'],
      answer: 0,
      explanation: 'Should have + past participle criticises a past action that did not happen.',
    },
    {
      question: 'When I was a child, we ___ go camping every summer.',
      options: ['will', 'would', 'are used to'],
      answer: 1,
      explanation: 'Would describes a repeated past habit.',
    },
    {
      question: 'I ___ live in Paris when I was young.',
      options: ['would', 'use to', 'used to'],
      answer: 2,
      explanation: 'Used to describes a past state. Would is not used for past states.',
    },
    {
      question: 'I ___ have called you, but I lost my phone.',
      options: ['should', 'would', 'must'],
      answer: 0,
      explanation: 'Should have + past participle expresses regret about a past action.',
    },
  ],
}
