import { Terminal, Settings, MessageCircle } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const stepIcons = [Terminal, Settings, MessageCircle]

export default function HowItWorks() {
  const { t } = useLanguage()
  const steps = t('howItWorks.steps')

  return (
    <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 dark:text-white mb-14">
          {t('howItWorks.heading')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* connector line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-300 dark:from-indigo-700 dark:via-purple-700 dark:to-indigo-700" />

          {Array.isArray(steps) && steps.map((step, i) => {
            const Icon = stepIcons[i]
            return (
              <div key={i} className="relative flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-indigo-100 dark:bg-indigo-500/10 flex items-center justify-center mb-4 relative z-10">
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-indigo-500 text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                  <Icon size={28} className="text-indigo-500" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">{step.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{step.desc}</p>
                <code className="text-xs bg-slate-900 dark:bg-slate-800 text-green-400 px-3 py-1.5 rounded-md whitespace-pre-line">
                  {step.code}
                </code>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
