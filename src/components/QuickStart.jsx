import { useLanguage } from '../i18n/LanguageContext'
import CodeBlock from './CodeBlock'

const installCode = `# Install
$ pip install youngcan-wyckoff-analysis

# Launch CLI
$ wyckoff

# Or use Homebrew
$ brew tap YoungCan-Wang/wyckoff
$ brew install wyckoff`

export default function QuickStart() {
  const { t } = useLanguage()

  return (
    <section id="quickstart" className="py-16 px-6 border-y border-[--color-border] dark:border-[--color-border-dark] bg-[--color-surface] dark:bg-[--color-surface-dark]">
      <div className="max-w-[560px] mx-auto">
        <h2 className="text-2xl font-bold text-center text-[--color-heading] dark:text-[--color-heading-dark] mb-8">
          {t('quickStart.heading')}
        </h2>
        <CodeBlock code={installCode} />
      </div>
    </section>
  )
}
