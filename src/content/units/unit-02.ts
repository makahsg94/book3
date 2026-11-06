import type { Lesson } from '../../types'

export const unit2Blocks: Record<string, any[]> = {
  '2A': [
    { type: 'callout', title: 'Change of habit', titleAr: 'تغيير العادة', tone: 'brand',
      text: 'Have you ever tried to stop a bad habit or build a new positive habit? In this lesson you read about changing habits, learn the present perfect continuous and vocabulary for making changes.',
      textAr: 'هل سبق أن حاولت إيقاف عادة سيئة أو بناء عادة إيجابية؟ في هذا الدرس تقرأ عن تغيير العادات، وتتعلم المضارع التام المستمر ومفردات تغيير العادات.' },
    { type: 'vocab', title: 'Making changes', titleAr: 'إجراء تغييرات', items: [
      { word: 'habit', meaning: 'something you do regularly' },
      { word: 'break a habit', meaning: 'to stop doing something you usually do' },
      { word: 'build a habit', meaning: 'to start doing something regularly' },
      { word: 'lifestyle', meaning: 'the way a person lives' },
    ] },
    { type: 'grammar', title: 'Present perfect continuous', titleAr: 'المضارع التام المستمر', bankPage: 20,
      explanation: 'We use the present perfect continuous to talk about actions that started in the past and are still continuing, or have recently stopped with a result in the present.',
      examples: ['I have been helping people to change their habits for seven years.', 'We have been practising the violin.'] },
    { type: 'text', title: 'A life coach', titleAr: 'مدرب حياة', paragraphs: ['I have been a life coach for the past seven years, and before this I worked as a psychologist for over ten years. I have been helping people to change their habits.'] },
  ],
  '2B': [
    { type: 'callout', title: 'People pleaser', titleAr: 'إرضاء الناس', tone: 'accent',
      text: 'Are you a people pleaser? In this lesson you listen to a podcast, learn relative clauses and collocations for feelings and behaviour, and practise chunking.',
      textAr: 'هل أنت من مرضي الناس؟ في هذا الدرس تستمع إلى بودكاست، وتتعلم جملاً نسبية وتلازمات للشعور والسلوك، وتتدرب على التجزئة.' },
    { type: 'vocab', title: 'Collocations: feelings and behaviour', titleAr: 'تلازمات: المشاعر والسلوك', items: [
      { word: 'people pleaser', meaning: 'someone who tries too hard to make others happy' },
      { word: 'avoid people who lie', meaning: 'to stay away from dishonest people' },
      { word: 'say no', meaning: 'to refuse a request' },
    ] },
    { type: 'grammar', title: 'Relative clauses', titleAr: 'الجمل النسبية', bankPage: 23,
      explanation: 'Relative clauses give more information about a noun. We use who, which, that, where, when.',
      examples: ['I try to avoid people who lie.', 'The email which you sent was helpful.'] },
  ],
  '2C': [
    { type: 'callout', title: "That's annoying!", titleAr: 'هذا مزعج!', tone: 'warm',
      text: 'Talk about things that annoy you. Learn vocabulary for pet hates and practise stress and intonation to show annoyance.',
      textAr: 'تحدث عن الأشياء التي تزعجك. تعلم مفردات "الكراهيات" (pet hates) وتدرّب على التأكيد والنبرة لإظهار الإزعاج.' },
    { type: 'vocab', title: 'Pet hates', titleAr: 'الكراهيات', items: [
      { word: 'pet hate', meaning: 'something you really dislike' },
      { word: "can't stand", meaning: 'to dislike very much' },
      { word: 'annoy', meaning: 'to make someone slightly angry' },
      { word: 'drives me crazy', meaning: 'makes me very annoyed' },
    ] },
    { type: 'grammar', title: 'Stress and intonation to show annoyance', titleAr: 'التأكيد والنبرة لإظهار الإزعاج', bankPage: 26,
      explanation: 'To show annoyance, we stress key words and use a falling, emphatic intonation.',
      examples: ['I can\'t stand it when people take a long time to pay.', 'It annoys me when they try to sell me something I don\'t want.'] },
  ],
  '2D': [
    { type: 'callout', title: 'Discuss difficult situations', titleAr: 'مناقشة المواقف الصعبة', tone: 'brand',
      text: 'Discuss difficult situations and read a personal experience. Learn to write about a personal experience.',
      textAr: 'ناقش المواقف الصعبة واقرأ تجربة شخصية. تعلم كتابة تجربة شخصية.' },
    { type: 'text', title: 'Not what it seemed to be', titleAr: 'ليس كما بدا', paragraphs: ['A few years ago, I was living in New York City and I took the subway to work every day.'] },
    { type: 'vocab', title: 'Difficult situations', titleAr: 'المواقف الصعبة', items: [
      { word: 'situation', meaning: 'a set of circumstances' },
      { word: 'experience', meaning: 'something that happens to you' },
    ] },
  ],
  '2R': [
    { type: 'callout', title: 'Unit 2 review', titleAr: 'مراجعة الوحدة 2', tone: 'neutral',
      text: 'Review the language from Unit 2: present perfect continuous, relative clauses, pet hates vocabulary.',
      textAr: 'راجع لغة الوحدة 2: المضارع التام المستمر، الجمل النسبية، مفردات الكراهيات.' },
  ],
}
