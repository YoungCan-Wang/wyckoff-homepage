import { useState } from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n'

const CLIENTS = [
  { name: 'Claude', color: '#d97706' },
  { name: 'Cursor', color: '#10b981' },
  { name: 'Windsurf', color: '#06b6d4' },
  { name: 'Trae', color: '#ef4444' },
  { name: 'Cline', color: '#6366f1' },
  { name: 'VS Code', color: '#3b82f6' },
  { name: 'Cherry Studio', color: '#f59e0b' },
  { name: 'Continue', color: '#8b5cf6' },
  { name: '5ire', color: '#f97316' },
  { name: 'Dify', color: '#2563eb' },
]

const CONFIG_JSON = `{
  "mcpServers": {
    "wyckoff": {
      "command": "wyckoff-mcp",
      "env": {
        "TUSHARE_TOKEN": "your_token",
        "TICKFLOW_API_KEY": "your_key"
      }
    }
  }
}`

export default function McpServer() {
  const { t } = useI18n()
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(CONFIG_JSON)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-24 px-6 border-t border-zinc-200 dark:border-white/[0.04]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-3">
            {t.mcp.label}
          </h2>
          <p className="text-sm text-zinc-500">{t.mcp.desc}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: config code block */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-xl border border-zinc-200 dark:border-white/[0.06] overflow-hidden"
          >
            <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-zinc-700/30 bg-zinc-900/50">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]/60" />
              <span className="ml-auto text-[10px] font-mono text-zinc-600">mcp.json</span>
            </div>
            <pre className="p-5 text-[13px] font-mono leading-relaxed bg-[#0c0c0f] text-zinc-300 whitespace-pre-wrap">
              {CONFIG_JSON}
            </pre>
            <div className="absolute top-12 right-3">
              <button
                onClick={copy}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  copied
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'bg-zinc-800 text-zinc-400 border border-zinc-700 hover:border-emerald-500/40 hover:text-emerald-400'
                }`}
              >
                {copied ? t.mcp.copied : t.mcp.copy}
              </button>
            </div>
            <div className="px-5 py-3 bg-zinc-900/30 border-t border-zinc-700/20">
              <p className="text-[11px] text-zinc-500 font-mono">{t.mcp.install}</p>
            </div>
          </motion.div>

          {/* Right: supported clients */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col"
          >
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-5 font-medium">
              {t.mcp.clients}
            </p>
            <div className="grid grid-cols-5 gap-2.5">
              {CLIENTS.map((c) => (
                <div
                  key={c.name}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-lg border border-zinc-200 dark:border-white/[0.08] bg-white dark:bg-zinc-900/50 hover:border-emerald-500/40 transition-colors"
                >
                  <span
                    className="w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold text-white shrink-0"
                    style={{ backgroundColor: c.color }}
                  >
                    {c.name[0]}
                  </span>
                  <span className="text-[12px] text-zinc-700 dark:text-zinc-300 font-medium whitespace-nowrap">
                    {c.name}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-5 p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
              <p className="text-xs text-emerald-700 dark:text-emerald-400">
                {t.mcp.tools}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
