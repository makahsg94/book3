import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { units } from '../content/book'
import { grammarRefs } from '../content/grammar'
import { vocabGroups } from '../content/vocabulary'
import SearchBox from '../components/SearchBox'
import { PageHeader, Pill } from '../components/PageHeader'
import {
  IconBook,
  IconChevronRight,
  IconEar,
  IconSearch,
  IconTarget,
  IconVideo,
} from '../components/Icons'

type SearchKind = 'lesson' | 'grammar' | 'vocabulary' | 'unit' | 'audio'

interface SearchItem {
  key: string
  kind: SearchKind
  title: string
  subtitle: string
  body: string
  to: string
}

function buildIndex(): SearchItem[] {
  const items: SearchItem[] = []
  for (const unit of units) {
    items.push({
      key: `unit-${unit.number}`,
      kind: 'unit',
      title: `Unit ${unit.number} · ${unit.title}`,
      subtitle: unit.question,
      body: [unit.phrase, unit.intro, ...unit.objectives].join(' '),
      to: `/unit/${unit.number}`,
    })
    for (const lesson of unit.lessons) {
      items.push({
        key: `lesson-${unit.number}-${lesson.id}`,
        kind: 'lesson',
        title: `${lesson.code} · ${lesson.title}`,
        subtitle: `Unit ${unit.number} · pages ${lesson.pages[0]}–${lesson.pages[1]}`,
        body: [
          lesson.code,
          lesson.title,
          lesson.labels.grammar,
          lesson.labels.vocabulary,
          lesson.labels.pronunciation,
          lesson.labels.skills,
          ...lesson.objectives,
        ]
          .filter(Boolean)
          .join(' '),
        to: `/unit/${unit.number}/lesson/${lesson.id}`,
      })
      for (const track of lesson.audio) {
        items.push({
          key: `audio-${unit.number}-${lesson.id}-${track.file}`,
          kind: 'audio',
          title: `Audio ${track.label} · ${lesson.code} ${lesson.title}`,
          subtitle: `Unit ${unit.number} · ${lesson.audio.length} track${lesson.audio.length === 1 ? '' : 's'} in this lesson`,
          body: `${track.label} ${track.note ?? ''} ${lesson.code} ${lesson.title}`,
          to: `/media?tab=audio&unit=${unit.number}`,
        })
      }
    }
  }
  for (const ref of grammarRefs) {
    items.push({
      key: `grammar-${ref.code}`,
      kind: 'grammar',
      title: `${ref.code} · ${ref.title}`,
      subtitle: `Grammar Bank · page ${ref.refPage}`,
      body: ref.paragraphs.join(' '),
      to: `/bank/grammar/${ref.code}`,
    })
  }
  for (const group of vocabGroups) {
    items.push({
      key: `vocab-${group.id}`,
      kind: 'vocabulary',
      title: `Vocabulary · ${group.title}`,
      subtitle: `${group.lessonCode} · page ${group.page} · ${group.items.length} entries`,
      body: [group.intro, ...group.items.map((item) => `${item.word} ${item.meaning ?? ''}`)].join(' '),
      to: '/bank/vocabulary',
    })
  }
  return items
}

const INDEX = buildIndex()
const kindLabels: Record<SearchKind, string> = {
  lesson: 'Lesson',
  grammar: 'Grammar',
  vocabulary: 'Vocabulary',
  unit: 'Unit',
  audio: 'Audio',
}
const kindTones: Record<SearchKind, string> = {
  lesson: 'bg-brand-100 text-brand-800 dark:bg-brand-950 dark:text-brand-200',
  grammar: 'bg-accent-100 text-accent-800 dark:bg-accent-950 dark:text-accent-200',
  vocabulary: 'bg-warm-100 text-warm-900 dark:bg-warm-950/60 dark:text-warm-200',
  unit: 'bg-sky-100 text-sky-700 dark:bg-sky-900/50 dark:text-sky-200',
  audio: 'bg-[var(--bg)] text-[var(--ink-soft)] ring-1 ring-[var(--line)]',
}
const kindIcons = {
  lesson: IconBook,
  grammar: IconTarget,
  vocabulary: IconBook,
  unit: IconBook,
  audio: IconEar,
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function Highlight({ text, terms }: { text: string; terms: string[] }) {
  if (!terms.length) return <>{text}</>
  const pattern = new RegExp(`(${terms.map(escapeRegExp).join('|')})`, 'gi')
  return (
    <>
      {text.split(pattern).map((part, index) =>
        terms.some((term) => term && part.toLowerCase() === term.toLowerCase()) ? (
          <mark key={index} className="rounded bg-warm-200/80 px-0.5 text-[var(--ink)] dark:bg-warm-700/60 dark:text-warm-100">
            {part}
          </mark>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </>
  )
}

function snippet(text: string, terms: string[], length = 170) {
  if (!text) return ''
  const lower = text.toLowerCase()
  const index = terms.map((term) => lower.indexOf(term)).filter((i) => i >= 0).sort((a, b) => a - b)[0] ?? 0
  const start = Math.max(0, index - 45)
  return `${start > 0 ? '…' : ''}${text.slice(start, start + length).trim()}${start + length < text.length ? '…' : ''}`
}

const suggestions = [
  'narrative tenses',
  'relative clauses',
  'passives',
  'conditionals',
  'money',
  'hoax',
  'Jungles',
  'advice',
]

export default function SearchPage() {
  const [params] = useSearchParams()
  const query = (params.get('q') ?? '').trim()
  const terms = useMemo(() => query.toLowerCase().split(/\s+/).filter(Boolean), [query])

  const results = useMemo(() => {
    if (!query) return []
    return INDEX.map((item) => {
      const haystack = `${item.title} ${item.subtitle} ${item.body}`.toLowerCase()
      if (!terms.every((term) => haystack.includes(term))) return null
      let score = 0
      for (const term of terms) {
        if (item.title.toLowerCase().includes(term)) score += 5
        if (item.subtitle.toLowerCase().includes(term)) score += 2
        if (item.kind === 'grammar' || item.kind === 'vocabulary') score += 1
      }
      return { item, score }
    })
      .filter((entry): entry is { item: SearchItem; score: number } => Boolean(entry))
      .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
      .slice(0, 50)
  }, [query, terms])

  const grouped = useMemo(() => {
    const groups: Partial<Record<SearchKind, SearchItem[]>> = {}
    for (const { item } of results) (groups[item.kind] ??= []).push(item)
    return groups
  }, [results])

  return (
    <div>
      <PageHeader
        eyebrow="Search"
        title={query ? `Results for “${query}”` : 'Search the book'}
        description={
          query
            ? `${results.length} result${results.length === 1 ? '' : 's'} across lessons, grammar, vocabulary, units and audio.`
            : 'Find a lesson, a grammar point, a word or an audio track. The search covers the full contents, Grammar Bank and Vocabulary Bank.'
        }
        backTo="/book"
        backLabel="Contents"
      />

      <div className="mx-auto max-w-2xl">
        <SearchBox initial={query} autoFocus placeholder="What do you want to find?" />
      </div>

      {!query && (
        <div className="mx-auto mt-6 max-w-2xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--ink-faint)]">Try searching for</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {suggestions.map((suggestion) => (
              <Link
                key={suggestion}
                to={`/search?q=${encodeURIComponent(suggestion)}`}
                className="inline-flex items-center gap-1 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1.5 text-xs font-semibold text-[var(--ink-soft)] transition hover:border-brand-400 hover:text-brand-700"
              >
                <IconSearch size={12} />
                {suggestion}
              </Link>
            ))}
          </div>
          <div className="mt-6 grid gap-2 sm:grid-cols-3">
            {[
              ['40', 'lessons'],
              [String(grammarRefs.length), 'grammar references'],
              [String(vocabGroups.reduce((total, group) => total + group.items.length, 0)), 'vocabulary entries'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-3 text-center">
                <p className="font-display text-2xl text-brand-700 dark:text-brand-300">{value}</p>
                <p className="text-[10px] uppercase tracking-wide text-[var(--ink-faint)]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {query && results.length === 0 && (
        <div className="mx-auto mt-8 max-w-xl rounded-xl border border-dashed border-[var(--line-strong)] p-8 text-center">
          <IconSearch size={26} className="mx-auto text-[var(--ink-faint)]" />
          <p className="mt-2 text-sm font-semibold">No matches found.</p>
          <p className="mt-1 text-xs text-[var(--ink-faint)]">Try a shorter phrase, or search for a lesson code such as 1A.</p>
        </div>
      )}

      {query && results.length > 0 && (
        <div className="mt-6 space-y-6">
          {(Object.keys(grouped) as SearchKind[]).map((kind) => {
            const items = grouped[kind]!
            const Icon = kindIcons[kind]
            return (
              <section key={kind}>
                <div className="mb-2 flex items-center gap-2">
                  <Icon size={15} className="text-brand-600" />
                  <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--ink-faint)]">
                    {kindLabels[kind]} · {items.length}
                  </h2>
                </div>
                <div className="space-y-2">
                  {items.map((item) => (
                    <Link
                      key={item.key}
                      to={item.to}
                      className="group flex gap-3 rounded-xl border border-[var(--line)] bg-[var(--surface)] p-3.5 transition hover:border-brand-300 hover:shadow-sm"
                    >
                      <span className={`mt-0.5 h-fit shrink-0 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide ${kindTones[item.kind]}`}>
                        {kindLabels[item.kind]}
                      </span>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm font-bold text-[var(--ink)] group-hover:text-brand-700 dark:group-hover:text-brand-300">
                          <Highlight text={item.title} terms={terms} />
                        </h3>
                        <p className="mt-0.5 text-[11px] text-[var(--ink-faint)]">
                          <Highlight text={item.subtitle} terms={terms} />
                        </p>
                        <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-[var(--ink-soft)]">
                          <Highlight text={snippet(item.body, terms)} terms={terms} />
                        </p>
                      </div>
                      <IconChevronRight size={15} className="mt-1 shrink-0 text-[var(--ink-faint)] transition group-hover:translate-x-0.5" />
                    </Link>
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      )}
    </div>
  )
}
