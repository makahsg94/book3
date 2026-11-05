import type { QuizQuestion } from '../types'

/**
 * Lesson practice for Unit 1, based on the exercises in the Student's Book.
 * Each set follows the lesson's grammar, vocabulary and functional language.
 */
export const lessonPractice: Record<string, QuizQuestion[]> = {
  '1A': [
    {
      question: 'Marta inherited a valuable ring from her mother.',
      options: ['True', 'False'],
      answer: 1,
      explanation: 'She inherited the ring, but she says it is "not worth a lot" — it is special for emotional reasons, not because it is valuable.',
    },
    {
      question: 'Marta borrowed a leather jacket from a friend and never gave it back.',
      options: ['True', 'False'],
      answer: 0,
      explanation: 'She says she borrowed it at university "and I never gave it back".',
    },
    {
      question: 'If something is real and not a copy, it is ___.',
      options: ['genuine', 'damaged', 'inherited'],
      answer: 0,
      explanation: 'Genuine means real or authentic: "It\'s a genuine 1980s leather jacket."',
    },
    {
      question: 'I bought these boots while I ___ around New Zealand.',
      options: ['travelled', 'was travelling', 'had travelled'],
      answer: 1,
      explanation: 'The past continuous gives the background action around a past event: while I was travelling.',
    },
    {
      question: 'I bought it to replace a similar one that I ___.',
      options: ['lost', 'was losing', 'had lost'],
      answer: 2,
      explanation: 'The losing happened before the buying, so we use the past perfect: had lost.',
    },
    {
      question: 'In weak forms, auxiliary verbs are usually ___.',
      options: ['stressed', 'unstressed', 'dropped'],
      answer: 1,
      explanation: 'Auxiliary verbs are usually unstressed in connected speech, which is why they are called weak forms.',
    },
  ],
  '1B': [
    {
      question: 'Minimalism refers to ___ things in a simple, elegant way.',
      options: ['design', 'designing', 'designed'],
      answer: 1,
      explanation: 'After a preposition (to) we use the -ing form: refers to designing.',
    },
    {
      question: 'They succeeded in ___ people to stop collecting useless stuff.',
      options: ['persuade', 'persuading', 'to persuade'],
      answer: 1,
      explanation: 'Succeed in + -ing: succeeded in persuading.',
    },
    {
      question: 'I look forward to ___ more street markets.',
      options: ['visit', 'visiting', 'to visit'],
      answer: 1,
      explanation: 'Look forward to + -ing: look forward to visiting. The "to" is a preposition here.',
    },
    {
      question: 'It turned out ___ the most important trip of my life.',
      options: ['be', 'being', 'to be'],
      answer: 2,
      explanation: 'Turn out + to infinitive: it turned out to be.',
    },
    {
      question: 'Which word means "perfect for me"?',
      options: ['ideal', 'genuine', 'damaged'],
      answer: 0,
      explanation: 'Ideal means perfect or most suitable.',
    },
    {
      question: 'Which phrase means "I don\'t like ..."?',
      options: ["I'm not a big fan of ...", 'I appreciate ...', "I can't do without ..."],
      answer: 0,
      explanation: 'Not a big fan of something is a polite way of saying you do not like it.',
    },
    {
      question: 'Which word means "the kind of things you like"?',
      options: ['tastes', 'pleasures', 'hopes'],
      answer: 0,
      explanation: 'Taste refers to your preferences: "people have different tastes".',
    },
    {
      question: 'In prepositional phrases, the preposition is usually ___.',
      options: ['stressed', 'not stressed', 'the loudest word'],
      answer: 1,
      explanation: 'The verb carries the stress; the preposition is usually weak and unstressed.',
    },
  ],
  '1C': [
    {
      question: "You've ___ Café Roma. Please leave a message.",
      options: ['reached', 'arrived', 'got'],
      answer: 0,
      explanation: 'A recorded message says "You\'ve reached ...".',
    },
    {
      question: "Please leave a message and we'll get ___ to you.",
      options: ['back', 'up', 'on'],
      answer: 0,
      explanation: 'Get back to someone means reply to them later.',
    },
    {
      question: "I can't take your call right now, but if you leave a message with your name and number, I'll get back to you as soon as I ___.",
      options: ['can', 'could', 'will'],
      answer: 0,
      explanation: 'The fixed phrase is "as soon as I can".',
    },
    {
      question: 'This is Marcelo Fagundes ___ about my jacket.',
      options: ['calling', 'call', 'called'],
      answer: 0,
      explanation: 'The standard phrase is "This is [name] calling about ...".',
    },
    {
      question: '___ you explain the alarm system to her?',
      options: ['Would', 'Do', 'Are'],
      answer: 0,
      explanation: 'Would you + verb is a polite request: Would you explain the alarm system to her?',
    },
    {
      question: 'Are the requests in Exercise 4A direct or indirect?',
      options: ['Direct', 'Indirect'],
      answer: 1,
      explanation: 'They use polite indirect forms such as I wonder if you could and Do you think you\'ll be able to.',
    },
    {
      question: '___ the rubbish means put it outside or in the bin.',
      options: ['Take out', 'Tidy up', 'Hang up'],
      answer: 0,
      explanation: 'Take out the rubbish = remove it and put it outside.',
    },
    {
      question: '___ your clothes means put them on a hook.',
      options: ['Hang up', 'Throw out', 'Pick up'],
      answer: 0,
      explanation: 'Hang up clothes = put them on a hook or hanger.',
    },
  ],
  '1D': [
    {
      question: 'You lose the ___ contact and that emotion that you get from that interaction.',
      options: ['face-to-face', 'eye', 'physical'],
      answer: 0,
      explanation: 'The speaker says "you lose the face-to-face contact".',
    },
    {
      question: 'I think people are ___ to screen time, needing information or entertainment more immediately.',
      options: ['addicted', 'attached', 'afraid'],
      answer: 0,
      explanation: 'The speaker says people are "addicted to screen time".',
    },
    {
      question: 'I think people probably spend ___ on their phone.',
      options: ['too much time', 'a lot', 'more time'],
      answer: 0,
      explanation: 'The speaker says "people probably spend too much time on their phone".',
    },
    {
      question: 'It prevents you from being able to talk to people in ___.',
      options: ['person', 'public', 'life'],
      answer: 0,
      explanation: 'Talk to people in person means talk to them face to face.',
    },
    {
      question: 'I could live without all my gadgets ___ my phone.',
      options: ['except for', 'even', 'apart'],
      answer: 0,
      explanation: 'Except for (or apart from) introduces the one thing that is not included. "Apart" alone is not correct here.',
    },
    {
      question: 'People certainly look at their phones too much. It might ___ be the first thing in the morning.',
      options: ['even', 'except', 'apart'],
      answer: 0,
      explanation: 'Even emphasises something surprising: it might even be the first thing in the morning.',
    },
  ],
}
