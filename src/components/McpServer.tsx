import { useState } from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n'

type Client = {
  name: string
  icon: string
  fallback: string
}

const CLIENTS: Client[] = [
  { name: 'Claude Code', icon: `${import.meta.env.BASE_URL}logos/claude-code.svg`, fallback: 'CC' },
  { name: 'Cursor', icon: `${import.meta.env.BASE_URL}logos/cursor.svg`, fallback: 'CU' },
  { name: 'Codex', icon: `${import.meta.env.BASE_URL}logos/codex.svg`, fallback: 'CO' },
  { name: 'Trae', icon: `${import.meta.env.BASE_URL}logos/trae.svg`, fallback: 'TR' },
  { name: 'CodeBuddy', icon: `${import.meta.env.BASE_URL}logos/codebuddy.svg`, fallback: 'CB' },
  { name: 'Qoder', icon: `${import.meta.env.BASE_URL}logos/qoder.svg`, fallback: 'QD' },
  { name: 'OpenClaw', icon: `${import.meta.env.BASE_URL}logos/openclaw.svg`, fallback: 'OC' },
  { name: 'Hermes', icon: `${import.meta.env.BASE_URL}logos/hermes.svg`, fallback: 'HM' },
  { name: 'VS Code', icon: `${import.meta.env.BASE_URL}logos/vscode.svg`, fallback: 'VS' },
  { name: 'Antigravity', icon: `${import.meta.env.BASE_URL}logos/antigravity.svg`, fallback: 'AG' },
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
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
              {CLIENTS.map((c) => (
                <div
                  key={c.name}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-lg border border-zinc-200 dark:border-white/[0.08] bg-white dark:bg-zinc-900/50 hover:border-emerald-500/40 transition-colors"
                >
                  <div className="relative w-5 h-5 shrink-0 rounded-md overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                    <span className="absolute inset-0 flex items-center justify-center text-[9px] font-semibold text-zinc-600 dark:text-zinc-300">
                      {c.fallback}
                    </span>
                    <img
                      src={c.icon}
                      alt={`${c.name} logo`}
                      className="absolute inset-0 w-5 h-5 bg-white object-contain z-10"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  </div>
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
