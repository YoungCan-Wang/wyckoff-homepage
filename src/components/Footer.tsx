import { useI18n } from '../i18n'

export default function Footer() {
  const { t } = useI18n()
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  return (
    <footer className="border-t border-zinc-200 dark:border-white/[0.04] pt-12 pb-8 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12">
          {/* brand */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-md border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 font-semibold text-xs">
                W
              </span>
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Wyckoff</span>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-600 leading-relaxed">A 股威科夫量价分析智能体</p>
          </div>

          <div>
            <h4 className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-3">{t.footer.product}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com/YoungCan-Wang/Wyckoff-Analysis" target="_blank" rel="noopener" className="text-zinc-500 hover:text-emerald-600 dark:text-zinc-600 dark:hover:text-emerald-400 transition-colors">GitHub</a></li>
              <li><a href="https://pypi.org/project/youngcan-wyckoff-analysis/" target="_blank" rel="noopener" className="text-zinc-500 hover:text-emerald-600 dark:text-zinc-600 dark:hover:text-emerald-400 transition-colors">PyPI</a></li>
              <li><a href="https://wyckoff-analysis-youngcanphoenix.streamlit.app/" target="_blank" rel="noopener" className="text-zinc-500 hover:text-emerald-600 dark:text-zinc-600 dark:hover:text-emerald-400 transition-colors">{t.footer.demo}</a></li>
              <li><a href="https://tickflow.org/auth/register?ref=5N4NKTCPL4" target="_blank" rel="noopener" className="text-zinc-500 hover:text-emerald-600 dark:text-zinc-600 dark:hover:text-emerald-400 transition-colors">{t.footer.tickflow}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-3">{t.footer.community}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com/YoungCan-Wang/Wyckoff-Analysis/issues" target="_blank" rel="noopener" className="text-zinc-500 hover:text-emerald-600 dark:text-zinc-600 dark:hover:text-emerald-400 transition-colors">Issues</a></li>
              <li><a href="https://github.com/YoungCan-Wang/Wyckoff-Analysis/discussions" target="_blank" rel="noopener" className="text-zinc-500 hover:text-emerald-600 dark:text-zinc-600 dark:hover:text-emerald-400 transition-colors">Discussions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-3">{t.footer.legal}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com/YoungCan-Wang/Wyckoff-Analysis/blob/main/LICENSE" target="_blank" rel="noopener" className="text-zinc-500 hover:text-emerald-600 dark:text-zinc-600 dark:hover:text-emerald-400 transition-colors">AGPL-3.0</a></li>
            </ul>
          </div>
        </div>

        {/* star history */}
        <div className="flex justify-center mb-8">
          <a href="https://star-history.com/#YoungCan-Wang/Wyckoff-Analysis&Date" target="_blank" rel="noopener">
            <img
              src={`https://api.star-history.com/svg?repos=YoungCan-Wang/Wyckoff-Analysis&type=Date${isDark ? '&theme=dark' : ''}`}
              alt="Star History"
              className="max-w-full h-auto rounded-lg border border-zinc-200 dark:border-white/[0.04] opacity-70 hover:opacity-100 transition-opacity"
              style={{ maxHeight: '280px' }}
              loading="lazy"
            />
          </a>
        </div>

        <div className="border-t border-zinc-200 dark:border-white/[0.04] pt-5 text-center">
          <p className="text-[11px] text-zinc-400 dark:text-zinc-600 leading-relaxed mb-3">{t.footer.disclaimer}</p>
          <p className="text-[11px] font-mono text-zinc-400 dark:text-zinc-700">{t.footer.copy}</p>
        </div>
      </div>
    </footer>
  )
}
