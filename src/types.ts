export interface AudioTrack {
  label: string
  file: string
  page?: number
  note?: string
}

export interface VideoRef {
  title: string
  file: string
  kind: 'streetint' | 'vlogs' | 'programmes'
  note?: string
}

export interface VocabItem {
  word: string
  meaning?: string
  note?: string
  example?: string
}

export interface VocabGroup {
  id: string
  title: string
  lessonCode: string
  page: number
  intro?: string
  items: VocabItem[]
}

export interface GrammarRef {
  code: string
  title: string
  refPage: number
  pdf: number
  paragraphs: string[]
}

export interface QuizQuestion {
  question: string
  options: string[]
  answer: number
  explanation: string
}

export interface LessonLabels {
  grammar?: string
  vocabulary?: string
  pronunciation?: string
  skills?: string
}

export interface Lesson {
  id: string
  code: string
  title: string
  pages: [number, number]
  pdfPages: number[]
  labels: LessonLabels
  objectives: string[]
  audio: AudioTrack[]
  videos: VideoRef[]
  grammar?: GrammarRef
  vocab?: VocabGroup
  quiz?: {
    id: string
    title: string
    questions: QuizQuestion[]
  }
}

export interface Unit {
  id: string
  number: number
  title: string
  phrase: string
  question: string
  intro: string
  pages: [number, number]
  pdfPages: number[]
  overviewPdf: number
  objectives: string[]
  videos: VideoRef[]
  lessons: Lesson[]
}
