import { MessageSquare, Filter, HeartPulse, FileSearch, Clock, Bell, ShieldCheck, Monitor } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import FeatureCard from './FeatureCard'

const icons = [MessageSquare, Filter, HeartPulse, FileSearch, Clock, Bell, ShieldCheck, Monitor]
const colors = ['indigo', 'emerald', 'rose', 'amber', 'cyan', 'violet', 'teal', 'orange']

export default function Features() {
  const { t } = useLanguage()
  const items = t('features.items')

  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
          {t('features.heading')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.isArray(items) && items.map((item, i) => (
            <FeatureCard
              key={i}
              icon={icons[i]}
              title={item.title}
              desc={item.desc}
              color={colors[i]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
