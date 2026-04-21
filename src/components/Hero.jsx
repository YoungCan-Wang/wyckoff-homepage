import { ExternalLink, Copy, Check, ArrowRight } from 'lucide-react'
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
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-[720px] mx-auto text-center">
        {/* badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-[--color-border] dark:border-[--color-border-dark] text-xs font-medium text-[--color-muted]">
          <span className="w-1.5 h-1.5 rounded-full bg-[--color-accent]" />
          Open Source &middot; AGPL-3.0
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-[--color-heading] dark:text-[--color-heading-dark] mb-5 tracking-tight leading-[1.15]">
          {t('hero.title')}
        </h1>
        <p className="text-lg sm:text-xl text-[--color-accent] font-medium mb-3">
          {t('hero.tagline')}
        </p>
        <p className="text-base text-[--color-muted] mb-10 max-w-[520px] mx-auto leading-relaxed">
          {t('hero.subtitle')}
        </p>

        {/* CTA */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <a
            href="https://github.com/YoungCan-Wang/Wyckoff-Analysis"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[--color-accent] text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            <GithubIcon size={16} />
            GitHub
            <ArrowRight size={14} />
          </a>
          <a
            href="https://wyckoff-analysis-youngcanphoenix.streamlit.app/"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[--color-border] dark:border-[--color-border-dark] text-[--color-heading] dark:text-[--color-heading-dark] font-medium rounded-lg hover:border-[--color-accent] hover:text-[--color-accent] transition-colors"
          >
            <ExternalLink size={16} />
            {t('hero.cta_demo')}
          </a>
        </div>

        {/* install command */}
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-3 px-4 py-2 bg-[--color-surface] dark:bg-[--color-surface-dark] rounded-lg border border-[--color-border] dark:border-[--color-border-dark] hover:border-[--color-accent] transition-colors group"
        >
          <code className="text-sm font-mono text-[--color-text] dark:text-[--color-text-dark]">
            <span className="text-[--color-accent]">$</span> pip install youngcan-wyckoff-analysis
          </code>
          {copied
            ? <Check size={14} className="text-[--color-accent]" />
            : <Copy size={14} className="text-[--color-muted] group-hover:text-[--color-accent] transition-colors" />
          }
        </button>

        {/* badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          <img src="https://img.shields.io/pypi/v/youngcan-wyckoff-analysis?color=0d9373&labelColor=f9fafb" alt="PyPI" className="h-5" />
          <img src="https://img.shields.io/badge/python-3.11+-3776ab?logo=python&logoColor=white&labelColor=f9fafb" alt="Python" className="h-5" />
          <img src="https://img.shields.io/github/stars/YoungCan-Wang/Wyckoff-Analysis?style=social" alt="Stars" className="h-5" />
        </div>
      </div>
    </section>
  )
}
