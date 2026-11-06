import { useState } from 'react'
import { IconBook, IconChevronDown } from './Icons'
import pageText from '../content/page-text.json'

type PageEntry = { text: string; confidence: number }
const texts = pageText as Record<string, PageEntry>
const MIN_CONFIDENCE = 50

export default function PageText({
  pages,
  printedPages,
}: {
  pages: number[]
  printedPages: number[]
}) {
  const available = pages
    .map((pdf, index) => {
      const printed = printedPages[index] ?? pdf + 1
      return { pdf, printed, entry: texts[String(printed)] }
    })
    .filter((item) => item.entry?.text)

  if (!available.length) return null

  return (
    <details className="group mt-3 rounded-xl border border-[var(--line)] bg-[var(--surface)]">
      <summary className="flex cursor-pointer list-none items-center gap-2 px-4 py-3 text-sm font-semibold text-[var(--ink)] [&::-webkit-details-marker]:hidden">
        <IconBook size={16} className="text-brand-600" />
        Page text &amp; exercises
        <span className="ml-auto text-[10px] font-medium text-[var(--ink-faint)]">
          Auto-transcribed · {available.length} page{available.length === 1 ? '' : 's'}
        </span>
        <IconChevronDown size={14} className="text-[var(--ink-faint)] transition group-open:rotate-180" />
      </summary>
      <div className="border-t border-[var(--line)] px-4 py-2">
        <p className="mb-1 py-2 text-[11px] leading-relaxed text-[var(--ink-faint)]">
          Text read from the scanned pages by OCR. Paragraph order may be imperfect on two-column pages; use the
          image above as the reference.
        </p>
        {available.map((item) => (
          <PageTextItem
            key={item.pdf}
            printed={item.printed}
            text={item.entry.text}
            confidence={item.entry.confidence}
          />
        ))}
      </div>
    </details>
  )
}

function PageTextItem({ printed, text, confidence }: { printed: number; text: string; confidence: number }) {
  const [open, setOpen] = useState(false)
  const lowQuality = confidence < MIN_CONFIDENCE

  return (
    <div className="border-t border-[var(--line)] py-1.5 first:border-0">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center gap-2 rounded-lg px-1 py-1.5 text-left text-xs font-semibold text-brand-700 transition hover:text-brand-600 dark:text-brand-300"
        aria-expanded={open}
      >
        <IconChevronDown size={12} className={`transition ${open ? 'rotate-180' : ''}`} />
        Page {printed}
        {lowQuality && (
          <span className="rounded-full bg-amber-100 px-1.5 py-0.5 text-[10px] font-semibold text-amber-800 dark:bg-amber-900/40 dark:text-amber-200">
            low quality
          </span>
        )}
      </button>
      {open && (
        <div className="mt-1 pb-3 text-[13px] leading-relaxed text-[var(--ink-soft)]">
          {lowQuality && (
            <p className="mb-2 rounded-md bg-amber-50 px-2 py-1.5 text-[11px] leading-relaxed text-amber-800 dark:bg-amber-950/40 dark:text-amber-200">
              This page is image-heavy, so the transcription below may contain errors. Use the page image above as the
              reference.
            </p>
          )}
          <div className="whitespace-pre-line">{text}</div>
        </div>
      )}
    </div>
  )
}
