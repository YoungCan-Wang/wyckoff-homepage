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
    <section id="quickstart" className="py-20 px-4 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 dark:text-white mb-10">
          {t('quickStart.heading')}
        </h2>
        <CodeBlock code={installCode} />
      </div>
    </section>
  )
}
