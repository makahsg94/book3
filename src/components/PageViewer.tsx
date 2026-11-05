import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { pageImage } from '../lib/assets'
import {
  IconChevronLeft,
  IconChevronRight,
  IconClose,
  IconZoomIn,
  IconZoomOut,
  IconImage,
} from './Icons'

export default function PageViewer({
  pages,
  printedPages,
  title,
  compact = false,
}: {
  pages: number[]
  printedPages?: number[]
  title: string
  compact?: boolean
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [zoomed, setZoomed] = useState(false)
  const isOpen = openIndex !== null
  const pageLabel = (index: number) => printedPages?.[index] ?? pages[index]

  const close = useCallback(() => {
    setOpenIndex(null)
    setZoomed(false)
  }, [])

  const step = useCallback(
    (delta: number) => {
      setOpenIndex((current) => {
        if (current === null) return current
        return (current + delta + pages.length) % pages.length
      })
      setZoomed(false)
    },
    [pages.length],
  )

  useEffect(() => {
    if (!isOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowLeft') step(-1)
      if (event.key === 'ArrowRight') step(1)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen, close, step])

  return (
    <>
      <div className={`grid gap-4 ${pages.length > 1 ? 'sm:grid-cols-2' : ''} ${compact ? 'gap-3' : ''}`}>
        {pages.map((page, index) => (
          <figure key={page} className="group min-w-0">
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              className="book-cover page-sweep block w-full overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--surface)] text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
              aria-label={`Open page ${pageLabel(index)} of ${title}`}
            >
              <img
                src={pageImage(page)}
                alt={`${title} — page ${pageLabel(index)}`}
                loading="lazy"
                decoding="async"
                className="aspect-[1/1.414] w-full object-cover transition-transform duration-500 group-hover:scale-[1.015]"
              />
            </button>
            <figcaption className="mt-2 flex items-center justify-between gap-2 px-0.5 text-xs text-[var(--ink-faint)]">
              <span className="inline-flex items-center gap-1.5">
                <IconImage size={13} />
                Page {pageLabel(index)}
              </span>
              <span className="opacity-0 transition-opacity group-hover:opacity-100">Click to zoom</span>
            </figcaption>
          </figure>
        ))}
      </div>

      {isOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[90] flex flex-col bg-[#0b1113]/95 text-white backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={`${title}, page ${pageLabel(openIndex)}`}
          >
            <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-6">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">{title}</p>
                <p className="text-xs text-white/60">
                  {openIndex + 1} / {pages.length} · Page {pageLabel(openIndex)}
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setZoomed((z) => !z)}
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition hover:bg-white/20"
                  aria-label={zoomed ? 'Zoom out' : 'Zoom in'}
                  title={zoomed ? 'Zoom out' : 'Zoom in'}
                >
                  {zoomed ? <IconZoomOut size={18} /> : <IconZoomIn size={18} />}
                </button>
                <button
                  type="button"
                  onClick={close}
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition hover:bg-white/20"
                  aria-label="Close viewer"
                >
                  <IconClose size={18} />
                </button>
              </div>
            </div>

            <div
              className={`relative flex-1 ${zoomed ? 'overflow-auto' : 'overflow-hidden'}`}
              onClick={(event) => {
                if (event.target === event.currentTarget) close()
              }}
            >
              <div className={`flex min-h-full items-center justify-center p-3 sm:p-6 ${zoomed ? 'w-max min-w-full' : ''}`}>
                <img
                  src={pageImage(pages[openIndex])}
                  alt={`${title} — page ${pageLabel(openIndex)}`}
                  className={`rounded-md bg-white shadow-2xl transition-[width] duration-300 ${
                    zoomed ? 'w-[1600px] max-w-none' : 'max-h-[calc(100vh-9rem)] max-w-full object-contain'
                  }`}
                />
              </div>
            </div>

            {pages.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => step(-1)}
                  className="absolute left-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white backdrop-blur transition hover:bg-black/60 sm:left-5"
                  aria-label="Previous page"
                >
                  <IconChevronLeft size={24} />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  className="absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white backdrop-blur transition hover:bg-black/60 sm:right-5"
                  aria-label="Next page"
                >
                  <IconChevronRight size={24} />
                </button>
              </>
            )}
          </div>,
          document.body,
        )}
    </>
  )
}
