import { AudioList } from './AudioPlayer'
import { VideoList } from './VideoCard'
import PageViewer from './PageViewer'

export default function Blocks({ blocks, unitNumber }: { blocks: any[]; unitNumber?: number }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'callout':
            return (
              <section key={index} className="rounded-xl border border-brand-200 bg-brand-50/60 p-4 dark:border-brand-800 dark:bg-brand-950/30">
                {block.title && <h3 className="font-display text-lg text-brand-700 dark:text-brand-300">{block.title}</h3>}
                {block.titleAr && <p className="mt-0.5 text-xs italic text-[var(--ink-faint)]" dir="rtl">{block.titleAr}</p>}
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink)]">{block.text}</p>
                {block.textAr && <p className="mt-1 text-xs leading-relaxed text-[var(--ink-soft)]" dir="rtl">{block.textAr}</p>}
              </section>
            )
          case 'text':
            return (
              <section key={index} className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4">
                {block.title && <h3 className="font-display text-lg text-[var(--ink)]">{block.title}</h3>}
                {block.titleAr && <p className="mt-0.5 text-xs italic text-[var(--ink-faint)]" dir="rtl">{block.titleAr}</p>}
                <div className="mt-2 space-y-2 text-sm leading-relaxed text-[var(--ink-soft)]">
                  {block.paragraphs?.map((p: string, i: number) => <p key={i}>{p}</p>)}
                </div>
              </section>
            )
          case 'vocab':
            return (
              <section key={index} className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4">
                {block.title && <h3 className="font-display text-lg text-[var(--ink)]">{block.title}</h3>}
                {block.titleAr && <p className="mt-0.5 text-xs italic text-[var(--ink-faint)]" dir="rtl">{block.titleAr}</p>}
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {block.items?.map((item: any, i: number) => (
                    <div key={i} className="rounded-lg border border-[var(--line)] bg-[var(--bg)]/40 px-3 py-2">
                      <p className="text-xs font-bold text-[var(--ink)]">{item.word}</p>
                      {item.meaning && <p className="mt-0.5 text-[11px] leading-relaxed text-[var(--ink-faint)]">{item.meaning}</p>}
                      {item.example && <p className="mt-0.5 text-[11px] italic text-[var(--ink-soft)]">{item.example}</p>}
                    </div>
                  ))}
                </div>
              </section>
            )
          case 'grammar':
            return (
              <section key={index} className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4">
                {block.title && <h3 className="font-display text-lg text-[var(--ink)]">{block.title}</h3>}
                {block.titleAr && <p className="mt-0.5 text-xs italic text-[var(--ink-faint)]" dir="rtl">{block.titleAr}</p>}
                {block.explanation && <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">{block.explanation}</p>}
                {block.rule && <p className="mt-2 rounded-lg bg-[var(--bg)] px-3 py-2 text-xs font-semibold text-[var(--ink)]">{block.rule}</p>}
                {block.table && (
                  <div className="mt-3 overflow-x-auto">
                    <table className="w-full text-xs">
                      <tbody>
                        {block.table.map((row: any, i: number) => (
                          <tr key={i} className="border-b border-[var(--line)]">
                            {Object.values(row).map((v: any, j: number) => (
                              <td key={j} className="px-2 py-1.5 text-[var(--ink-soft)]">{String(v)}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {block.examples && (
                  <ul className="mt-3 space-y-1 text-xs text-[var(--ink-soft)]">
                    {block.examples.map((e: string, i: number) => <li key={i}>• {e}</li>)}
                  </ul>
                )}
                {block.bankPage && <p className="mt-2 text-[10px] text-[var(--ink-faint)]">Grammar Bank page {block.bankPage}</p>}
              </section>
            )
          case 'examples':
            return (
              <section key={index} className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4">
                {block.title && <h3 className="font-display text-lg text-[var(--ink)]">{block.title}</h3>}
                <ul className="mt-2 space-y-1 text-sm text-[var(--ink-soft)]">
                  {block.items?.map((e: string, i: number) => <li key={i}>• {e}</li>)}
                </ul>
              </section>
            )
          case 'audio':
            return block.tracks?.length ? <AudioList key={index} tracks={block.tracks} /> : null
          case 'video':
            return block.videos?.length ? <VideoList key={index} videos={block.videos} unitNumber={unitNumber ?? 1} /> : null
          case 'pages':
            return block.images?.length ? <PageViewer key={index} pages={block.images} printedPages={block.images.map((_: any, i: number) => i + 1)} title="" /> : null
          default:
            return null
        }
      })}
    </div>
  )
}
