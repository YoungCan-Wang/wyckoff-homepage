import { useLanguage } from '../i18n/LanguageContext'
import { useTheme } from '../hooks/useTheme'

export default function Footer() {
  const { t } = useLanguage()
  const { theme } = useTheme()

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400 pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
          <div>
            <h4 className="text-white font-semibold mb-3">{t('footer.product')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com/YoungCan-Wang/Wyckoff-Analysis" target="_blank" rel="noopener" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="https://pypi.org/project/youngcan-wyckoff-analysis/" target="_blank" rel="noopener" className="hover:text-white transition-colors">PyPI</a></li>
              <li><a href="https://wyckoff-analysis-youngcanphoenix.streamlit.app/" target="_blank" rel="noopener" className="hover:text-white transition-colors">{t('nav.demo')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">{t('footer.community')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com/YoungCan-Wang/Wyckoff-Analysis/issues" target="_blank" rel="noopener" className="hover:text-white transition-colors">Issues</a></li>
              <li><a href="https://github.com/YoungCan-Wang/Wyckoff-Analysis/discussions" target="_blank" rel="noopener" className="hover:text-white transition-colors">Discussions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">{t('footer.legal')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com/YoungCan-Wang/Wyckoff-Analysis/blob/main/LICENSE" target="_blank" rel="noopener" className="hover:text-white transition-colors">AGPL-3.0</a></li>
            </ul>
          </div>
        </div>

        {/* Star History */}
        <div className="flex justify-center mb-8">
          <a href="https://star-history.com/#YoungCan-Wang/Wyckoff-Analysis&Date" target="_blank" rel="noopener">
            <img
              src={`https://api.star-history.com/svg?repos=YoungCan-Wang/Wyckoff-Analysis&type=Date${theme === 'dark' ? '&theme=dark' : ''}`}
              alt="Star History"
              className="max-w-full h-auto rounded-lg"
              style={{ maxHeight: '200px' }}
              loading="lazy"
            />
          </a>
        </div>

        <div className="border-t border-slate-800 pt-6 text-center text-xs">
          &copy; {t('footer.copyright')}
        </div>
      </div>
    </footer>
  )
}
