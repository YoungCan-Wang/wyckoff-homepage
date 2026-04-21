import { useLanguage } from '../i18n/LanguageContext'

const techs = [
  { name: 'Python 3.11+', logo: 'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white' },
  { name: 'Streamlit', logo: 'https://img.shields.io/badge/Streamlit-FF4B4B?style=for-the-badge&logo=streamlit&logoColor=white' },
  { name: 'Google ADK', logo: 'https://img.shields.io/badge/Google_ADK-4285F4?style=for-the-badge&logo=google&logoColor=white' },
  { name: 'LiteLLM', logo: 'https://img.shields.io/badge/LiteLLM-000000?style=for-the-badge&logoColor=white' },
  { name: 'Supabase', logo: 'https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white' },
  { name: 'GitHub Actions', logo: 'https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white' },
]

export default function TechStack() {
  const { t } = useLanguage()

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-10">
          {t('techStack.heading')}
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {techs.map((tech) => (
            <img key={tech.name} src={tech.logo} alt={tech.name} className="h-8 rounded" />
          ))}
        </div>
      </div>
    </section>
  )
}
