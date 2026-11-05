import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { grammarRefs } from '../content/grammar'
import type { GrammarRef } from '../types'
import PageViewer from '../components/PageViewer'
import { PageHeader, Pill, SectionTitle } from '../components/PageHeader'
import { IconChevronRight, IconSearch, IconTarget } from '../components/Icons'

export function GrammarParagraphs({ refData }: { refData: GrammarRef }) {
  return (
    <div className="prose-book max-w-none text-sm leading-relaxed text-[var(--ink-soft)]">
      {refData.paragraphs.map((paragraph, index) => {
        if (paragraph.startsWith('## ')) {
          return (
            <h3 key={index} className="mb-1.5 mt-4 flex items-center gap-2 text-sm font-bold text-brand-700 dark:text-brand-300">
              <span className="h-3 w-0.5 rounded-full bg-brand-500" />
              {paragraph.slice(3)}
            </h3>
          )
        }
        if (paragraph.startsWith('• ')) {
          return (
            <p key={index} className="my-1 flex gap-2 pl-1">
              <span className="text-brand-500">•</span>
              <span>{paragraph.slice(2)}</span>
            </p>
          )
        }
        return (
          <p key={index} className="my-2">
            {paragraph}
          </p>
        )
      })}
    </div>
  )
}

export default function GrammarBankPage() {
  const [query, setQuery] = useState('')
  const [unitFilter, setUnitFilter] = useState('all')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return grammarRefs.filter((item) => {
      if (unitFilter !== 'all' && !item.code.startsWith(unitFilter)) return false
      if (!q) return true
      return (
        item.code.toLowerCase().includes(q) ||
        item.title.toLowerCase().includes(q) ||
        item.paragraphs.some((p) => p.toLowerCase().includes(q))
      )
    })
  }, [query, unitFilter])

  return (
    <div>
      <PageHeader
        eyebrow="Reference · Grammar Bank"
        title="Grammar Bank"
        description="Every grammar reference in the B1+ Student’s Book, with the book’s explanations and examples. Open a reference to see the original page and the practice exercises beside it."
        backTo="/book"
        backLabel="Contents"
      >
        <div className="flex flex-wrap items-center gap-2">
          <Pill tone="brand">{grammarRefs.length} references</Pill>
          <Pill>pp. 104–131</Pill>
          <Pill tone="warm">28 lessons + 4 review pages</Pill>
        </div>
      </PageHeader>

      <div className="mb-5 flex flex-col gap-3 rounded-xl border border-[var(--line)] bg-[var(--surface)] p-3 sm:flex-row sm:items-center">
        <label className="relative flex-1">
          <span className="sr-only">Search grammar</span>
          <IconSearch size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--ink-faint)]" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search a grammar point, e.g. narrative tenses…"
            className="h-10 w-full rounded-lg border border-[var(--line)] bg-[var(--bg)] pl-9 pr-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
          />
        </label>
        <div className="flex flex-wrap gap-1">
          {['all', '1', '2', '3', '4', '5', '6', '7', '8'].map((unit) => (
            <button
              key={unit}
              type="button"
              onClick={() => setUnitFilter(unit)}
              className={`rounded-full px-2.5 py-1 text-[11px] font-semibold transition ${
                unitFilter === unit
                  ? 'bg-brand-600 text-white'
                  : 'bg-[var(--bg)] text-[var(--ink-soft)] ring-1 ring-[var(--line)] hover:text-brand-700'
              }`}
            >
              {unit === 'all' ? 'All' : `U${unit}`}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-xl border border-dashed border-[var(--line-strong)] p-8 text-center">
          <p className="text-sm font-semibold">No grammar references match “{query}”.</p>
          <button type="button" onClick={() => { setQuery(''); setUnitFilter('all') }} className="mt-2 text-xs font-semibold text-brand-600">
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid gap-2.5 sm:grid-cols-2">
          {filtered.map((item) => (
            <Link
              key={item.code}
              to={`/bank/grammar/${item.code}`}
              className="group flex gap-3 rounded-xl border border-[var(--line)] bg-[var(--surface)] p-3.5 transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md dark:hover:border-brand-800"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-100 text-xs font-black text-brand-800 dark:bg-brand-950 dark:text-brand-300">
                {item.code}
              </span>
              <div className="min-w-0 flex-1">
                <h2 className="line-clamp-2 text-sm font-bold leading-snug text-[var(--ink)] group-hover:text-brand-700 dark:group-hover:text-brand-300">
                  {item.title}
                </h2>
                <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-[var(--ink-faint)]">
                  {item.paragraphs.find((p) => !p.startsWith('## '))?.slice(0, 130)}
                </p>
                <div className="mt-2 flex items-center justify-between text-[10px] text-[var(--ink-faint)]">
                  <span>Reference page {item.refPage}</span>
                  <IconChevronRight size={13} className="transition group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export function GrammarDetailPage() {
  const { code = '' } = useParams()
  const item = grammarRefs.find((ref) => ref.code.toLowerCase() === code.toLowerCase())

  if (!item) {
    return (
      <div className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-6">
        <h1 className="font-display text-2xl">Grammar reference not found</h1>
        <Link to="/bank/grammar" className="mt-3 inline-block text-sm font-semibold text-brand-600">
          Back to the Grammar Bank
        </Link>
      </div>
    )
  }

  const unit = item.code[0]
  const unitNumber = Number(unit)

  return (
    <div>
      <PageHeader
        eyebrow={`Grammar Bank · ${item.code} · Reference page ${item.refPage}`}
        title={item.title}
        description={`Unit ${unitNumber} grammar reference, read from the book. The page image below shows the reference and practice exactly as printed.`}
        backTo="/bank/grammar"
        backLabel="Grammar Bank"
      >
        <div className="flex flex-wrap gap-2">
          <Pill tone="brand">{item.code}</Pill>
          <Link to={`/unit/${unitNumber}`} className="rounded-full bg-[var(--surface)] px-2.5 py-1 text-[10px] font-semibold text-[var(--ink-soft)] ring-1 ring-[var(--line)] hover:text-brand-700">
            Unit {unitNumber} lessons
          </Link>
          <Link to={`/bank/grammar`} className="rounded-full bg-[var(--surface)] px-2.5 py-1 text-[10px] font-semibold text-[var(--ink-soft)] ring-1 ring-[var(--line)] hover:text-brand-700">
            All references
          </Link>
        </div>
      </PageHeader>

      <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
        <section className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4 sm:p-5">
          <SectionTitle icon={<IconTarget size={17} className="text-brand-600" />} title="Reference" hint={`${item.code} · ${item.title}`} />
          <GrammarParagraphs refData={item} />
          <p className="mt-4 rounded-lg bg-[var(--bg)] px-3 py-2 text-[10px] leading-relaxed text-[var(--ink-faint)]">
            Transcribed from the Grammar Bank reference column. Small typographic artefacts may remain; the page image is
            the authoritative version.
          </p>
        </section>

        <section className="lg:sticky lg:top-28 lg:self-start">
          <SectionTitle icon={<IconTarget size={17} className="text-accent-600" />} title="The book page" hint="Reference and practice are printed side by side." />
          <PageViewer pages={[item.pdf]} title={`Grammar Bank ${item.code}`} />
        </section>
      </div>
    </div>
  )
}
