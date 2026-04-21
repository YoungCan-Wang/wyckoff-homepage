import { useLanguage } from '../i18n/LanguageContext'
import { useTheme } from '../hooks/useTheme'

export default function Footer() {
  const { t } = useLanguage()
  const { theme } = useTheme()

  return (
    <footer className="border-t border-[--color-border] dark:border-[--color-border-dark] pt-12 pb-8 px-6">
      <div className="max-w-[960px] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg viewBox="0 0 32 32" className="w-5 h-5">
                <rect width="32" height="32" rx="8" fill="var(--color-accent)" />
                <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontWeight="700" fontSize="18" fill="white">W</text>
              </svg>
              <span className="font-semibold text-sm text-[--color-heading] dark:text-[--color-heading-dark]">Wyckoff</span>
            </div>
            <p className="text-xs text-[--color-muted] leading-relaxed">
              A 股威科夫量价分析智能体
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-[--color-heading] dark:text-[--color-heading-dark] uppercase tracking-wider mb-3">{t('footer.product')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com/YoungCan-Wang/Wyckoff-Analysis" target="_blank" rel="noopener" className="text-[--color-muted] hover:text-[--color-accent] transition-colors">GitHub</a></li>
              <li><a href="https://pypi.org/project/youngcan-wyckoff-analysis/" target="_blank" rel="noopener" className="text-[--color-muted] hover:text-[--color-accent] transition-colors">PyPI</a></li>
              <li><a href="https://wyckoff-analysis-youngcanphoenix.streamlit.app/" target="_blank" rel="noopener" className="text-[--color-muted] hover:text-[--color-accent] transition-colors">{t('nav.demo')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-[--color-heading] dark:text-[--color-heading-dark] uppercase tracking-wider mb-3">{t('footer.community')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com/YoungCan-Wang/Wyckoff-Analysis/issues" target="_blank" rel="noopener" className="text-[--color-muted] hover:text-[--color-accent] transition-colors">Issues</a></li>
              <li><a href="https://github.com/YoungCan-Wang/Wyckoff-Analysis/discussions" target="_blank" rel="noopener" className="text-[--color-muted] hover:text-[--color-accent] transition-colors">Discussions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-[--color-heading] dark:text-[--color-heading-dark] uppercase tracking-wider mb-3">{t('footer.legal')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com/YoungCan-Wang/Wyckoff-Analysis/blob/main/LICENSE" target="_blank" rel="noopener" className="text-[--color-muted] hover:text-[--color-accent] transition-colors">AGPL-3.0</a></li>
            </ul>
          </div>
        </div>

        {/* Star History */}
        <div className="flex justify-center mb-8">
          <a href="https://star-history.com/#YoungCan-Wang/Wyckoff-Analysis&Date" target="_blank" rel="noopener">
            <img
              src={`https://api.star-history.com/svg?repos=YoungCan-Wang/Wyckoff-Analysis&type=Date${theme === 'dark' ? '&theme=dark' : ''}`}
              alt="Star History"
              className="max-w-full h-auto rounded-lg border border-[--color-border] dark:border-[--color-border-dark]"
              style={{ maxHeight: '180px' }}
              loading="lazy"
            />
          </a>
        </div>

        <div className="border-t border-[--color-border] dark:border-[--color-border-dark] pt-5 text-center text-xs text-[--color-muted]">
          &copy; {t('footer.copyright')}
        </div>
      </div>
    </footer>
  )
}
