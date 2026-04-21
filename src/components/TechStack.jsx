import { useLanguage } from '../i18n/LanguageContext'

const techs = [
  { name: 'Python', color: '#3776AB' },
  { name: 'Streamlit', color: '#FF4B4B' },
  { name: 'Google ADK', color: '#4285F4' },
  { name: 'LiteLLM', color: '#374151' },
  { name: 'Supabase', color: '#3FCF8E' },
  { name: 'GitHub Actions', color: '#2088FF' },
]

export default function TechStack() {
  const { t } = useLanguage()

  return (
    <section className="py-14 px-6">
      <div className="max-w-[720px] mx-auto text-center">
        <h2 className="text-2xl font-bold text-[--color-heading] dark:text-[--color-heading-dark] mb-8">
          {t('techStack.heading')}
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {techs.map((tech) => (
            <span
              key={tech.name}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[--color-border] dark:border-[--color-border-dark] text-sm font-medium text-[--color-text] dark:text-[--color-text-dark] bg-white dark:bg-[--color-surface-dark]"
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: tech.color }} />
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
