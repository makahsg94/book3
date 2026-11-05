import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { units } from '../content/book'
import { vocabGroups } from '../content/vocabulary'
import type { VocabItem } from '../types'
import { PageHeader, Pill } from '../components/PageHeader'
import { IconChevronDown, IconEye, IconEyeOff, IconSearch } from '../components/Icons'

function lessonLink(code: string) {
  const unitNumber = Number(code[0])
  return `/unit/${unitNumber}/lesson/${code.toLowerCase()}`
}

function VocabCard({ item, hidden }: { item: VocabItem; hidden: boolean }) {
  const [revealed, setRevealed] = useState(!hidden)
  const show = hidden ? revealed : true

  return (
    <button
      type="button"
      onClick={() => hidden && setRevealed((value) => !value)}
      className={`flex min-h-[84px] flex-col rounded-lg border p-3 text-left transition ${
        hidden && !revealed
          ? 'border-dashed border-[var(--line-strong)] bg-[var(--bg)]/50 hover:border-accent-400'
          : 'border-[var(--line)] bg-[var(--bg)]/35'
      }`}
    >
      <span className="text-xs font-bold text-[var(--ink)]">{item.word}</span>
      {show ? (
        <span className="mt-1 text-[11px] leading-relaxed text-[var(--ink-faint)]">{item.meaning}</span>
      ) : (
        <span className="mt-1 text-[10px] italic text-accent-600 dark:text-accent-300">Tap to reveal meaning</span>
      )}
    </button>
  )
}

export default function VocabularyBankPage() {
  const [query, setQuery] = useState('')
  const [hideMeanings, setHideMeanings] = useState(false)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return vocabGroups
    return vocabGroups
      .map((group) => ({
        ...group,
        items: group.items.filter(
          (item) => item.word.toLowerCase().includes(q) || (item.meaning ?? '').toLowerCase().includes(q),
        ),
      }))
      .filter((group) => group.items.length > 0 || group.title.toLowerCase().includes(q))
  }, [query])

  const totalTerms = vocabGroups.reduce((total, group) => total + group.items.length, 0)

  return (
    <div>
      <PageHeader
        eyebrow="Reference · Vocabulary Bank"
        title="Vocabulary Bank"
        description="The book’s vocabulary groups, collected from the Vocabulary Bank pages. Use the search to find a word, or open a group for the full list."
        backTo="/book"
        backLabel="Contents"
      >
        <div className="flex flex-wrap items-center gap-2">
          <Pill tone="accent">{vocabGroups.length} groups</Pill>
          <Pill>{totalTerms} entries</Pill>
          <Pill>pp. 132–137</Pill>
        </div>
      </PageHeader>

      <div className="mb-5 flex flex-col gap-3 rounded-xl border border-[var(--line)] bg-[var(--surface)] p-3 sm:flex-row sm:items-center">
        <label className="relative flex-1">
          <span className="sr-only">Search vocabulary</span>
          <IconSearch size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--ink-faint)]" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search a word or meaning…"
            className="h-10 w-full rounded-lg border border-[var(--line)] bg-[var(--bg)] pl-9 pr-3 text-sm focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
          />
        </label>
        <button
          type="button"
          onClick={() => setHideMeanings((value) => !value)}
          className={`inline-flex items-center justify-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold transition ${
            hideMeanings
              ? 'bg-accent-600 text-white hover:bg-accent-700'
              : 'bg-[var(--bg)] text-[var(--ink-soft)] ring-1 ring-[var(--line)] hover:text-accent-700'
          }`}
        >
          {hideMeanings ? <IconEyeOff size={14} /> : <IconEye size={14} />}
          {hideMeanings ? 'Study mode on' : 'Hide meanings'}
        </button>
      </div>

      {hideMeanings && (
        <p className="mb-4 rounded-lg border border-accent-200 bg-accent-50 px-3 py-2 text-xs text-accent-900 dark:border-accent-900 dark:bg-accent-950/40 dark:text-accent-200">
          Study mode: cover the meanings, try to recall each word, then tap a card to check.
        </p>
      )}

      {filtered.length === 0 ? (
        <div className="rounded-xl border border-dashed border-[var(--line-strong)] p-8 text-center">
          <p className="text-sm font-semibold">No vocabulary matches “{query}”.</p>
          <button type="button" onClick={() => setQuery('')} className="mt-2 text-xs font-semibold text-accent-600">
            Clear search
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((group) => (
            <section key={group.id} className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4 sm:p-5">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h2 className="flex items-center gap-2 font-display text-xl text-[var(--ink)]">
                    <span className="rounded-md bg-accent-100 px-1.5 py-0.5 text-[11px] font-sans font-black text-accent-700 dark:bg-accent-950 dark:text-accent-300">
                      {group.lessonCode}
                    </span>
                    {group.title}
                  </h2>
                  <p className="mt-0.5 text-xs text-[var(--ink-faint)]">
                    Vocabulary Bank page {group.page} · {group.items.length} entries
                  </p>
                </div>
                <Link
                  to={lessonLink(group.lessonCode)}
                  className="inline-flex items-center gap-1 rounded-full bg-[var(--bg)] px-2.5 py-1 text-[10px] font-semibold text-accent-700 ring-1 ring-[var(--line)] transition hover:bg-accent-50 dark:text-accent-300"
                >
                  Open lesson <IconChevronDown size={11} className="-rotate-90" />
                </Link>
              </div>
              {group.intro && <p className="mt-2 text-xs italic text-[var(--ink-soft)]">{group.intro}</p>}
              <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <VocabCard key={`${group.id}-${item.word}-${hideMeanings}`} item={item} hidden={hideMeanings} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}

      <div className="mt-6 rounded-xl border border-[var(--line)] bg-[var(--bg)]/40 p-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--ink-faint)]">About these definitions</p>
        <p className="mt-1 text-xs leading-relaxed text-[var(--ink-soft)]">
          Entries follow the book’s vocabulary groups and lesson order. Definitions reproduce the book’s glosses where the
          page provides them; where it only lists words, a plain English explanation is given. No translations have been added.
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {units.map((unit) => {
            const groups = vocabGroups.filter((group) => Number(group.lessonCode[0]) === unit.number)
            if (!groups.length) return null
            return (
              <Link
                key={unit.id}
                to={`/unit/${unit.number}`}
                className="rounded-full bg-[var(--surface)] px-2 py-1 text-[10px] font-semibold text-[var(--ink-soft)] ring-1 ring-[var(--line)] hover:text-accent-700"
              >
                Unit {unit.number} · {groups.length} group{groups.length === 1 ? '' : 's'}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
