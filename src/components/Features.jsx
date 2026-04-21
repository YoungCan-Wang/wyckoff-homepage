import { MessageSquare, Filter, HeartPulse, FileSearch, Clock, Bell, ShieldCheck, Monitor } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import FeatureCard from './FeatureCard'

const icons = [MessageSquare, Filter, HeartPulse, FileSearch, Clock, Bell, ShieldCheck, Monitor]

export default function Features() {
  const { t } = useLanguage()
  const items = t('features.items')

  return (
    <section id="features" className="py-16 px-6">
      <div className="max-w-[960px] mx-auto">
        <h2 className="text-2xl font-bold text-[--color-heading] dark:text-[--color-heading-dark] mb-2 text-center">
          {t('features.heading')}
        </h2>
        <p className="text-[--color-muted] text-center mb-10 text-sm">
          10 quantitative tools, autonomous orchestration
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.isArray(items) && items.map((item, i) => (
            <FeatureCard
              key={i}
              icon={icons[i]}
              title={item.title}
              desc={item.desc}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
