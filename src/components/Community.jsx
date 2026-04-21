import { Star } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

export default function Community() {
  const { t } = useLanguage()

  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-10">
          {t('community.heading')}
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="https://github.com/YoungCan-Wang/Wyckoff-Analysis"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-lg"
          >
            <Star size={18} />
            {t('community.star')}
          </a>
        </div>

        <p className="text-sm text-slate-400">{t('community.starSub')}</p>
      </div>
    </section>
  )
}
