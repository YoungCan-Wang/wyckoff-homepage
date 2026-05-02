import { useI18n } from '../i18n'

export default function DataSource() {
  const { t } = useI18n()

  return (
    <section className="py-20 px-6 border-t border-zinc-200 dark:border-white/[0.04]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-8">{t.stack.data}</h2>
        <div className="flex flex-col items-center gap-3">
          <a
            href="https://tickflow.org/auth/register?ref=5N4NKTCPL4"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-sm font-mono text-emerald-600 dark:text-emerald-400 hover:border-emerald-500/60 hover:bg-emerald-500/10 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
            {t.stack.tickflow}
            <svg className="w-3.5 h-3.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a
            href="https://www.1route.dev/register?aff=359904261"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-violet-500/30 bg-violet-500/5 text-sm font-mono text-violet-600 dark:text-violet-400 hover:border-violet-500/60 hover:bg-violet-500/10 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-violet-500 dark:bg-violet-400" />
            {t.stack.llm}
            <svg className="w-3.5 h-3.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
