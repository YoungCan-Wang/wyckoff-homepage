import { Star } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import GithubIcon from './GithubIcon'

export default function Community() {
  const { t } = useLanguage()

  return (
    <section className="py-16 px-6">
      <div className="max-w-[560px] mx-auto text-center">
        <h2 className="text-2xl font-bold text-[--color-heading] dark:text-[--color-heading-dark] mb-3">
          {t('community.heading')}
        </h2>
        <p className="text-sm text-[--color-muted] mb-8">{t('community.starSub')}</p>

        <a
          href="https://github.com/YoungCan-Wang/Wyckoff-Analysis"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[--color-heading] dark:bg-[--color-heading-dark] text-white dark:text-[#0f1117] font-medium rounded-lg hover:opacity-90 transition-opacity"
        >
          <GithubIcon size={16} />
          <Star size={16} />
          {t('community.star')}
        </a>
      </div>
    </section>
  )
}
