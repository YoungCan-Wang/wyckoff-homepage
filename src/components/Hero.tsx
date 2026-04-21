import { useState } from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n'

export default function Hero() {
  const { t } = useI18n()
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText('pip install youngcan-wyckoff-analysis')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden grid-bg">
      {/* radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-500/[0.07] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center">
        {/* badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-10 rounded-full border border-zinc-800 text-[11px] font-mono text-zinc-500"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          {t.hero.badge}
        </motion.div>

        {/* headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          <span className="text-zinc-100">{t.hero.title1}</span>
          <br />
          <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
            {t.hero.title2}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-base sm:text-lg text-zinc-400 mb-10 max-w-xl mx-auto leading-relaxed font-light"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          <a href="#start" className="px-5 py-2.5 bg-emerald-500 text-black font-medium text-sm rounded-lg hover:bg-emerald-400 transition-colors">
            {t.hero.cta_start}
          </a>
          <a
            href="https://github.com/YoungCan-Wang/Wyckoff-Analysis" target="_blank" rel="noopener"
            className="px-5 py-2.5 border border-zinc-800 text-zinc-300 font-medium text-sm rounded-lg hover:border-zinc-600 hover:text-white transition-colors"
          >
            {t.hero.cta_github}
          </a>
          <a
            href="https://wyckoff-analysis-youngcanphoenix.streamlit.app/" target="_blank" rel="noopener"
            className="px-5 py-2.5 border border-zinc-800 text-zinc-300 font-medium text-sm rounded-lg hover:border-zinc-600 hover:text-white transition-colors"
          >
            Demo →
          </a>
        </motion.div>

        {/* install bar */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          onClick={copy}
          className="group inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-zinc-900/80 border border-zinc-800 hover:border-emerald-500/30 transition-all"
        >
          <code className="text-sm font-mono">
            <span className="text-emerald-400">$</span>
            <span className="text-zinc-400"> pip install </span>
            <span className="text-zinc-200">youngcan-wyckoff-analysis</span>
          </code>
          <span className="text-[11px] text-zinc-600 group-hover:text-emerald-400 transition-colors font-mono">
            {copied ? '✓' : 'copy'}
          </span>
        </motion.button>

        {/* badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 opacity-60">
          <img src="https://img.shields.io/pypi/v/youngcan-wyckoff-analysis?color=22c55e&labelColor=18181b&style=flat-square" alt="PyPI" className="h-[18px]" />
          <img src="https://img.shields.io/badge/python-3.11+-3776ab?style=flat-square&labelColor=18181b&logo=python&logoColor=white" alt="Python" className="h-[18px]" />
          <img src="https://img.shields.io/github/stars/YoungCan-Wang/Wyckoff-Analysis?style=flat-square&labelColor=18181b&color=22c55e" alt="Stars" className="h-[18px]" />
        </div>
      </div>
    </section>
  )
}
