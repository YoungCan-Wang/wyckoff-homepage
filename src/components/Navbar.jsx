import { Sun, Moon } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { useTheme } from '../hooks/useTheme'
import GithubIcon from './GithubIcon'

export default function Navbar() {
  const { lang, setLang } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
          <svg viewBox="0 0 64 64" className="w-7 h-7">
            <rect width="64" height="64" rx="14" fill="#6366f1" />
            <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fontFamily="Inter,sans-serif" fontWeight="700" fontSize="36" fill="white">W</text>
          </svg>
          Wyckoff
        </a>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
            className="px-2 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            {lang === 'zh' ? 'EN' : '中文'}
          </button>
          <button onClick={toggleTheme} className="p-1.5 rounded-md text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href="https://github.com/YoungCan-Wang/Wyckoff-Analysis" target="_blank" rel="noopener" className="p-1.5 rounded-md text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <GithubIcon size={18} />
          </a>
        </div>
      </div>
    </nav>
  )
}
