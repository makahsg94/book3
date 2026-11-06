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
}
