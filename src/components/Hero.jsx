import { ExternalLink, Copy, Check } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import GithubIcon from './GithubIcon'

export default function Hero() {
  const { t } = useLanguage()
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('pip install youngcan-wyckoff-analysis')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 dark:from-slate-950 dark:via-indigo-950 dark:to-slate-900 animate-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1),transparent_50%)]" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
          {t('hero.title')}
        </h1>
        <p className="text-xl sm:text-2xl text-indigo-100 dark:text-indigo-200 font-medium mb-2">
          {t('hero.tagline')}
        </p>
        <p className="text-base sm:text-lg text-indigo-200/80 dark:text-indigo-300/60 mb-10">
          {t('hero.subtitle')}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <a
            href="https://github.com/YoungCan-Wang/Wyckoff-Analysis"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-indigo-50 transition-colors shadow-lg"
          >
            <GithubIcon size={18} />
            {t('hero.cta_github')}
          </a>
          <a
            href="https://wyckoff-analysis-youngcanphoenix.streamlit.app/"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
          >
            <ExternalLink size={18} />
            {t('hero.cta_demo')}
          </a>
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-900/50 text-green-300 font-mono text-sm rounded-lg border border-white/10 hover:bg-slate-900/70 transition-colors"
          >
            <span>$ pip install youngcan-wyckoff-analysis</span>
            {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} className="text-slate-400" />}
          </button>
        </div>

        {/* badges */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <img src="https://img.shields.io/pypi/v/youngcan-wyckoff-analysis?color=6366f1" alt="PyPI" className="h-5" />
          <img src="https://img.shields.io/badge/python-3.11+-3776ab?logo=python&logoColor=white" alt="Python" className="h-5" />
          <img src="https://img.shields.io/badge/license-AGPL--3.0-green" alt="License" className="h-5" />
          <img src="https://img.shields.io/github/stars/YoungCan-Wang/Wyckoff-Analysis?style=social" alt="Stars" className="h-5" />
        </div>
      </div>
    </section>
  )
}
