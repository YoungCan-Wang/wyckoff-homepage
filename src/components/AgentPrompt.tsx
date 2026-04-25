import { useState } from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n'

export default function AgentPrompt() {
  const { t } = useI18n()
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(t.agentPrompt.prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-24 px-6 border-t border-zinc-200 dark:border-white/[0.04]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-3">
            {t.agentPrompt.label}
          </h2>
          <p className="text-sm text-zinc-500">{t.agentPrompt.desc}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-xl border border-zinc-200 dark:border-white/[0.06] overflow-hidden"
        >
          {/* terminal title bar */}
          <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-zinc-700/30 bg-zinc-900/50">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]/60" />
            <span className="ml-auto text-[10px] font-mono text-zinc-600">agent prompt</span>
          </div>

          {/* prompt content */}
          <pre className="p-5 text-[13px] font-mono leading-relaxed bg-[#0c0c0f] text-zinc-300 whitespace-pre-wrap overflow-x-auto">
            {t.agentPrompt.prompt}
          </pre>

          {/* copy button */}
          <div className="absolute top-12 right-3">
            <button
              onClick={copy}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                copied
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'bg-zinc-800 text-zinc-400 border border-zinc-700 hover:border-emerald-500/40 hover:text-emerald-400'
              }`}
            >
              {copied ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                </svg>
              )}
              {copied ? t.agentPrompt.copied : t.agentPrompt.copy}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
