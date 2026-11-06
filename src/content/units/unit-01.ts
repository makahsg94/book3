import type { Lesson } from '../../types'

// Unit 1 — "me & mine" (pages 8-18)
// Authored from Speakout 3rd B1+ Student's Book pages 8-18.

export const unit1Lessons: Partial<Lesson>[] = []
export const unit1Blocks: Record<string, any[]> = {
  '1A': [
    {
      type: 'callout',
      title: 'A story of me',
      titleAr: 'قصة عني',
      tone: 'brand',
      text: 'The objects we keep often reflect who we were, who we have become and who we want to be. In this lesson you listen to two people talk about three objects they would never throw away, then tell your own story in three objects using narrative tenses.',
      textAr: 'الأشياء التي نحتفظ بها تعكس غالباً من كنا، ومن أصبحنا، ومن نريد أن نكون. في هذا الدرس تستمع إلى شخصين يتحدثان عن ثلاثة أشياء لن يتخلوا عنها أبداً، ثم تروي قصتك الخاصة في ثلاثة أشياء باستخدام أزمنة السرد.',
    },
    {
      type: 'vocab',
      title: 'Describing possessions',
      titleAr: 'وصف الممتلكات',
      items: [
        { word: 'belong to', meaning: 'to be owned by someone', example: 'This ring belongs to my mother.' },
        { word: 'inherit', meaning: 'to receive something from someone who has died', example: 'Marta inherited a valuable ring from her mother.' },
        { word: 'borrow', meaning: 'to take and use something that belongs to someone else', example: 'She borrowed a leather jacket from a friend.' },
        { word: 'genuine', meaning: 'real, not a copy', example: 'It is a genuine Spanish guitar.' },
        { word: 'damaged', meaning: 'harmed or broken', example: 'The moped had been badly damaged.' },
        { word: 'special to me', meaning: 'having a personal meaning', example: 'These boots are special to me.' },
        { word: 'worth a lot', meaning: 'having great value', example: 'The silver rings are worth a lot.' },
      ],
    },
    {
      type: 'vocab',
      title: 'Materials',
      titleAr: 'المواد',
      source: 'Vocabulary Bank p.132',
      items: [
        { word: 'stone', meaning: 'a hard material from rock' },
        { word: 'rubber', meaning: 'an elastic material used for tyres and boots' },
        { word: 'a diamond', meaning: 'a very hard, valuable precious stone' },
        { word: 'iron', meaning: 'a strong metal used for pans, gates and tools' },
        { word: 'cotton', meaning: 'a soft plant fibre used for clothes and sheets' },
        { word: 'silver', meaning: 'a shiny grey precious metal used for jewellery' },
        { word: 'denim', meaning: 'a strong cotton cloth used for jeans' },
        { word: 'wood', meaning: 'the hard material that trees are made of' },
        { word: 'steel', meaning: 'a strong metal made from iron and carbon' },
        { word: 'plastic', meaning: 'a light artificial material' },
        { word: 'gold', meaning: 'a valuable yellow precious metal' },
        { word: 'glass', meaning: 'a hard, transparent material used for windows and bottles' },
      ],
    },
    {
      type: 'grammar',
      title: 'Narrative tenses',
      titleAr: 'أزمنة السرد',
      bankPage: 9,
      explanation: 'When we tell a story, we often use a variety of tenses. These are called narrative tenses and they include the past simple, the past continuous and the past perfect. It is important to use the correct tense as this gives us information about the sequence of events and the most important details of the story.',
      rule: 'Past simple = main events; Past continuous = background; Past perfect = earlier action.',
      table: [
        { tense: 'Past simple', use: 'main events of a story', example: 'Suddenly, he heard a terrible crash.' },
        { tense: 'Past continuous', use: 'background / temporary states', example: 'The wind was blowing.' },
        { tense: 'Past perfect', use: 'action before the main events', example: 'The train had already left.' },
      ],
      examples: [
        'It was a cold, wet day and the wind was blowing.',
        'Josh was walking down the road when suddenly, he heard a terrible crash.',
        'He turned around and saw that a woman had crashed her moped.',
      ],
    },
    {
      type: 'text',
      title: 'Speaking: a story of me in three objects',
      titleAr: 'تحدث: قصتي في ثلاثة أشياء',
      paragraphs: [
        'Think of three people you know and three objects connected with each person. The objects that we choose to have around us reflect our personalities in different ways. Our possessions contain our memories; they remind us of people and places in our lives.',
        'Do you ever think about why you choose to keep some objects and not others? The objects we keep often reflect who we were, who we have become and who we want to be.',
      ],
    },
    {
      type: 'text',
      title: 'Writing: an advert to sell an item online',
      titleAr: 'كتابة: إعلان لبيع شيء عبر الإنترنت',
      paragraphs: [
        'Write an advert to sell an item online. Use the vocabulary and grammar from this lesson to describe the object, the material it is made of and its story.',
      ],
    },
  ],
  '1B': [
    {
      type: 'callout',
      title: 'Less is more?',
      titleAr: 'الأقل أفضل؟',
      tone: 'accent',
      text: 'Some people believe that having fewer possessions makes life simpler and happier. Others love collecting things. In this lesson you read about minimalism vs. maximalism and talk about your own preferences.',
      textAr: 'يعتقد بعض الناس أن امتلاك أشياء أقل يجعل الحياة أبسط وأكثر سعادة. بينما يحب آخرون جمع الأشياء. في هذا الدرس تقرأ عن الحد الأدنى مقابل الحد الأقصى وتتحدث عن تفضيلاتك.',
    },
    {
      type: 'text',
      title: 'Reading: minimalism vs. maximalism',
      titleAr: 'قراءة: الحد الأدنى مقابل الحد الأقصى',
      paragraphs: [
        'Minimalism is about keeping only what you need and what brings you joy. Maximalism, on the other hand, celebrates abundance and personal expression through objects.',
        'Both approaches have their fans. The question is not which is right, but which suits your lifestyle and values.',
      ],
    },
    {
      type: 'vocab',
      title: 'Personal preferences',
      titleAr: 'التفضيلات الشخصية',
      items: [
        { word: 'prefer', meaning: 'to like one thing more than another', example: 'I prefer a tidy room.' },
        { word: 'would rather', meaning: 'to prefer one option', example: 'I would rather have fewer things.' },
        { word: 'rather than', meaning: 'instead of', example: 'Quality rather than quantity.' },
        { word: 'appeal to', meaning: 'to attract or interest', example: 'Minimalism appeals to me.' },
      ],
    },
    {
      type: 'grammar',
      title: 'Verb patterns',
      titleAr: 'أنماط الأفعال',
      bankPage: 10,
      explanation: 'Some verbs are followed by a to-infinitive, others by an -ing form. Learning these patterns helps you express preferences correctly.',
      rule: 'prefer + -ing; would rather + base verb; enjoy + -ing.',
      examples: [
        'I prefer living with less.',
        'I would rather keep it simple.',
        'I enjoy collecting things.',
      ],
    },
    {
      type: 'text',
      title: 'Pronunciation: stress in prepositional phrases',
      titleAr: 'نطق: التأكيد في العبارات حرف الجر',
      paragraphs: [
        'In prepositional phrases, stress often falls on the content word. Listen and repeat the examples, then practise with your own preferences.',
      ],
    },
  ],
  '1C': [
    {
      type: 'callout',
      title: 'How to … leave phone messages',
      titleAr: 'كيف … تترك رسالة هاتفية',
      tone: 'warm',
      text: 'Leaving a clear phone message is an important skill. In this lesson you learn phrasal verbs about housework and practise intonation in polite requests.',
      textAr: 'ترك رسالة هاتفية واضحة مهارة مهمة. في هذا الدرس تتعلم أفعالاً مركبة عن أعمال المنزل وتتدرب على نبرة الصوت في الطلبات المهذبة.',
    },
    {
      type: 'vocab',
      title: 'Phrasal verbs: housework',
      titleAr: 'أفعال مركبة: أعمال المنزل',
      items: [
        { word: 'tidy up', meaning: 'to make a place neat', example: 'Can you tidy up your room?' },
        { word: 'clean up', meaning: 'to remove dirt or mess', example: 'Please clean up the kitchen.' },
        { word: 'put away', meaning: 'to place something in its proper place', example: 'Put away your toys.' },
        { word: 'throw away', meaning: 'to discard', example: 'Throw away the old magazines.' },
        { word: 'take out', meaning: 'to remove (rubbish)', example: 'Take out the rubbish.' },
      ],
    },
    {
      type: 'grammar',
      title: 'Intonation in polite requests',
      titleAr: 'النبرة في الطلبات المهذبة',
      bankPage: 11,
      explanation: 'Polite requests often use rising intonation. The voice goes up at the end of the sentence to sound friendly and non-demanding.',
      examples: [
        'Could you call me back?',
        'Would you mind leaving a message?',
        'Can you tidy up, please?',
      ],
    },
    {
      type: 'text',
      title: 'How to leave a phone message',
      titleAr: 'كيف تترك رسالة هاتفية',
      paragraphs: [
        'A good phone message includes your name, the time, a brief reason for calling and a request to call back. Keep it short and polite.',
      ],
    },
  ],
  '1D': [
    {
      type: 'callout',
      title: 'BBC Street Interviews — gadgets and screen time',
      titleAr: 'مقابلات BBC في الشارع — الأجهزة ووقت الشاشة',
      tone: 'brand',
      text: 'People talk about their gadgets and how much time they spend on screens. You learn expressions like except for, apart from and (not) even, and write an online forum comment.',
      textAr: 'يتحدث الناس عن أجهزتهم ومقدار الوقت الذي يقضونه أمام الشاشات. تتعلم تعبيرات مثل except for و apart from و (not) even، وتكتب تعليقاً في منتدى عبر الإنترنت.',
    },
    {
      type: 'vocab',
      title: 'Gadgets and screen time',
      titleAr: 'الأجهزة ووقت الشاشة',
      items: [
        { word: 'gadget', meaning: 'a small electronic device', example: 'My favourite gadget is my phone.' },
        { word: 'screen time', meaning: 'time spent using a screen', example: 'I try to reduce screen time.' },
        { word: 'addicted', meaning: 'unable to stop using something', example: 'Teenagers are addicted to their phones.' },
      ],
    },
    {
      type: 'grammar',
      title: 'except for, apart from, (not) even',
      titleAr: 'except for, apart from, (not) even',
      bankPage: 12,
      explanation: 'These expressions are used to add exceptions or emphasis. "Except for" and "apart from" introduce an exception; "not even" emphasises a negative.',
      examples: [
        'I use my phone for everything except for reading.',
        'Apart from my laptop, I rarely use other gadgets.',
        'I do not even check my phone at night.',
      ],
    },
    {
      type: 'text',
      title: 'Writing: an online forum comment',
      titleAr: 'كتابة: تعليق في منتدى',
      paragraphs: [
        'Write a short comment for an online forum about gadgets and screen time. Use the vocabulary and grammar from this lesson.',
      ],
    },
  ],
  '1R': [
    {
      type: 'callout',
      title: 'Unit 1 review',
      titleAr: 'مراجعة الوحدة 1',
      tone: 'neutral',
      text: 'Review the language from Unit 1: narrative tenses, materials, verb patterns, housework phrasal verbs and gadget vocabulary.',
      textAr: 'راجع لغة الوحدة 1: أزمنة السرد، المواد، أنماط الأفعال، أفعال housework المركبة، ومفردات الأجهزة.',
    },
    {
      type: 'text',
      title: 'Check your progress',
      titleAr: 'تحقق من تقدمك',
      paragraphs: [
        'Go back through lessons 1A–1D and check you can use the key language confidently. Try the unit test when ready.',
      ],
    },
  ],
}
