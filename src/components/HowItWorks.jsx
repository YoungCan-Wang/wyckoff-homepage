import { Terminal, Settings, MessageCircle } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const stepIcons = [Terminal, Settings, MessageCircle]

export default function HowItWorks() {
  const { t } = useLanguage()
  const steps = t('howItWorks.steps')

  return (
    <section className="py-16 px-6 border-y border-[--color-border] dark:border-[--color-border-dark] bg-[--color-surface] dark:bg-[--color-surface-dark]">
      <div className="max-w-[720px] mx-auto">
        <h2 className="text-2xl font-bold text-[--color-heading] dark:text-[--color-heading-dark] text-center mb-12">
          {t('howItWorks.heading')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* connector */}
          <div className="hidden md:block absolute top-8 left-[20%] right-[20%] h-px border-t border-dashed border-[--color-border] dark:border-[--color-border-dark]" />

          {Array.isArray(steps) && steps.map((step, i) => {
            const Icon = stepIcons[i]
            return (
              <div key={i} className="relative flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full border-2 border-[--color-border] dark:border-[--color-border-dark] bg-white dark:bg-[#0f1117] flex items-center justify-center mb-4 relative z-10">
                  <Icon size={22} className="text-[--color-accent]" strokeWidth={1.8} />
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[--color-accent] text-white text-[11px] font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-[--color-heading] dark:text-[--color-heading-dark] mb-1">{step.title}</h3>
                <p className="text-xs text-[--color-muted] mb-3">{step.desc}</p>
                <code className="text-xs font-mono bg-[#1a1b26] text-emerald-400 px-3 py-1.5 rounded-md whitespace-pre-line">
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
