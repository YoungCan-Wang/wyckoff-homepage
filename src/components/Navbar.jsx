import { Sun, Moon } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { useTheme } from '../hooks/useTheme'
import GithubIcon from './GithubIcon'

export default function Navbar() {
  const { lang, setLang } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/90 dark:bg-[#0f1117]/90 backdrop-blur-md border-b border-[--color-border] dark:border-[--color-border-dark]">
      <div className="max-w-[960px] mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 font-semibold text-[--color-heading] dark:text-[--color-heading-dark]">
          <svg viewBox="0 0 32 32" className="w-6 h-6">
            <rect width="32" height="32" rx="8" fill="var(--color-accent)" />
            <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontWeight="700" fontSize="18" fill="white">W</text>
          </svg>
          Wyckoff
        </a>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
            className="px-2.5 py-1 text-xs font-medium rounded-md border border-[--color-border] dark:border-[--color-border-dark] text-[--color-muted] hover:text-[--color-heading] dark:hover:text-[--color-heading-dark] hover:border-[--color-accent] transition-colors"
          >
            {lang === 'zh' ? 'EN' : '中文'}
          </button>
          <button onClick={toggleTheme} className="p-1.5 rounded-md text-[--color-muted] hover:text-[--color-heading] dark:hover:text-[--color-heading-dark] transition-colors">
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a href="https://github.com/YoungCan-Wang/Wyckoff-Analysis" target="_blank" rel="noopener" className="p-1.5 rounded-md text-[--color-muted] hover:text-[--color-heading] dark:hover:text-[--color-heading-dark] transition-colors">
            <GithubIcon size={16} />
          </a>
        </div>
      </div>
    </nav>
  )
}
