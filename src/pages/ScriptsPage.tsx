import { useState } from 'react'
import { Link } from 'react-router-dom'
import { asset } from '../lib/assets'
import { PageHeader, Pill } from '../components/PageHeader'
import { IconArrowUpRight, IconBook, IconEar, IconVideo } from '../components/Icons'

const docs = [
  {
    id: 'audioscripts',
    title: 'Audio scripts',
    file: 'docs/audioscripts.pdf',
    size: '0.79 MB',
    pages: 'Book reference',
    description: 'The full scripts for the Student’s Book audio, printed at the back of the book.',
    icon: IconEar,
  },
  {
    id: 'videoscripts',
    title: 'Video scripts',
    file: 'docs/videoscripts.pdf',
    size: '0.62 MB',
    pages: 'Book reference',
    description: 'The scripts for the BBC video material that accompanies the course.',
    icon: IconVideo,
  },
  {
    id: 'student-book',
    title: "Student’s Book PDF",
    file: 'docs/student-book-b1plus.pdf',
    size: '37.6 MB',
    pages: '136 pages',
    description: 'The complete B1+ Student’s Book as a single PDF, including every printed page.',
    icon: IconBook,
  },
]

export default function ScriptsPage() {
  const [preview, setPreview] = useState<string | null>(null)

  return (
    <div>
      <PageHeader
        eyebrow="Reference · Scripts & documents"
        title="Audio & video scripts"
        description="Read along with the recordings. The original scripts are provided as PDFs; every audio track is also available in the media library."
        backTo="/book"
        backLabel="Contents"
      >
        <div className="flex flex-wrap gap-2">
          <Pill tone="brand">3 documents</Pill>
          <Pill>PDF</Pill>
          <Link to="/media" className="rounded-full bg-brand-600 px-2.5 py-1 text-[10px] font-semibold text-white hover:bg-brand-700">
            Open media library
          </Link>
        </div>
      </PageHeader>

      <div className="grid gap-3 sm:grid-cols-3">
        {docs.map((doc) => {
          const Icon = doc.icon
          return (
            <article key={doc.id} className="flex flex-col rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4 shadow-sm">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-100 text-brand-700 dark:bg-brand-950 dark:text-brand-300">
                <Icon size={19} />
              </span>
              <h2 className="mt-2.5 text-sm font-bold">{doc.title}</h2>
              <p className="mt-1 flex-1 text-xs leading-relaxed text-[var(--ink-faint)]">{doc.description}</p>
              <p className="mt-2 text-[10px] text-[var(--ink-faint)]">
                {doc.pages} · {doc.size}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href={asset(doc.file)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-full bg-brand-600 px-2.5 py-1 text-[10px] font-semibold text-white transition hover:bg-brand-700"
                >
                  Open PDF <IconArrowUpRight size={11} />
                </a>
                <button
                  type="button"
                  onClick={() => setPreview(preview === doc.file ? null : doc.file)}
                  className="rounded-full border border-[var(--line-strong)] px-2.5 py-1 text-[10px] font-semibold text-[var(--ink-soft)] transition hover:border-brand-400 hover:text-brand-700"
                >
                  {preview === doc.file ? 'Close preview' : 'Preview'}
                </button>
              </div>
            </article>
          )
        })}
      </div>

      {preview && (
        <section className="mt-5 overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--surface)]">
          <div className="flex items-center justify-between gap-2 border-b border-[var(--line)] px-4 py-2.5">
            <p className="text-xs font-semibold text-[var(--ink)]">PDF preview</p>
            <a href={asset(preview)} target="_blank" rel="noreferrer" className="text-[10px] font-semibold text-brand-600 hover:underline">
              Open in a new tab
            </a>
          </div>
          <iframe src={`${asset(preview)}#view=FitH`} title="PDF preview" className="h-[70vh] w-full bg-white" />
        </section>
      )}

      <section className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4">
          <h2 className="text-sm font-bold">How to use the scripts</h2>
          <ol className="mt-2 space-y-1.5 text-xs leading-relaxed text-[var(--ink-soft)]">
            <li>1. Open a lesson and play the audio track.</li>
            <li>2. Keep the script open in a second window or on another device.</li>
            <li>3. Read along once, then listen again without the script.</li>
            <li>4. Note new words in the Vocabulary Bank.</li>
          </ol>
        </div>
        <div className="rounded-xl border border-brand-200 bg-brand-50/60 p-4 dark:border-brand-900 dark:bg-brand-950/30">
          <h2 className="text-sm font-bold">Looking for a track?</h2>
          <p className="mt-1 text-xs leading-relaxed text-[var(--ink-soft)]">
            Audio is grouped by lesson. Open the media library to browse all 81 tracks, or go straight to a lesson from the
            contents.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <Link to="/media" className="rounded-full bg-brand-600 px-3 py-1 text-[10px] font-semibold text-white">
              Browse audio
            </Link>
            <Link to="/book" className="rounded-full border border-brand-300 px-3 py-1 text-[10px] font-semibold text-brand-800 dark:border-brand-700 dark:text-brand-200">
              Open contents
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
