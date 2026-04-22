import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useI18n } from '../i18n'

const BASE = import.meta.env.BASE_URL

interface CmdItem {
  cmd: string
  desc: string
}

interface CmdGroup {
  title: string
  icon: string
  items: CmdItem[]
}

const cliScreens = [
  { key: 'home', img: `${BASE}screenshots/cli-home.png` },
  { key: 'running', img: `${BASE}screenshots/cli-running.png` },
  { key: 'analysis', img: `${BASE}screenshots/cli-analysis.png` },
  { key: 'result', img: `${BASE}screenshots/cli-result.png` },
] as const

type ScreenKey = (typeof cliScreens)[number]['key']

function GroupAccordion({ group, index }: { group: CmdGroup; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 px-5 py-4 rounded-xl border border-zinc-200 dark:border-white/[0.06] bg-zinc-50/50 dark:bg-zinc-900/30 hover:border-emerald-500/30 dark:hover:border-emerald-500/20 transition-colors text-left group"
      >
        <span className="text-lg">{group.icon}</span>
        <span className="flex-1 text-sm font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
          {group.title}
        </span>
        <span className="text-xs text-zinc-400 font-mono">{group.items.length}</span>
        <svg
          className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-2 pt-2 pb-1 space-y-1">
              {group.items.map((item) => (
                <div
                  key={item.cmd}
                  className="flex items-start gap-3 px-4 py-2.5 rounded-lg hover:bg-zinc-100/80 dark:hover:bg-zinc-800/40 transition-colors"
                >
                  <code className="flex-none text-[13px] font-mono text-emerald-600 dark:text-emerald-400 whitespace-nowrap mt-px">
                    {item.cmd}
                  </code>
                  <span className="text-[13px] text-zinc-500 leading-relaxed">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function CliReference() {
  const { t } = useI18n()
  const groups: CmdGroup[] = t.cli.groups
  const tabs = t.cli.screens as Record<ScreenKey, { title: string; desc: string }>
  const [active, setActive] = useState<ScreenKey>('home')
  const current = cliScreens.find((s) => s.key === active)!

  return (
    <section className="py-24 px-6 border-t border-zinc-200 dark:border-white/[0.04]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-3">
            {t.cli.label}
          </h2>
          <p className="text-sm text-zinc-500">{t.cli.desc}</p>
        </div>

        {/* CLI screenshots */}
        <div className="mb-16">
          <div className="flex justify-center gap-2 mb-6">
            {cliScreens.map((s) => (
              <button
                key={s.key}
                onClick={() => setActive(s.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  active === s.key
                    ? 'bg-emerald-500 text-white dark:text-black'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800/60 dark:text-zinc-400 dark:hover:bg-zinc-800'
                }`}
              >
                {tabs[s.key].title}
              </button>
            ))}
          </div>

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-zinc-50 dark:bg-zinc-900/50">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-zinc-200 dark:border-zinc-800 bg-[#1e1e2e] dark:bg-[#0c0c14]">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <span className="flex-1 text-center text-[11px] text-zinc-500 font-mono truncate">
                  wyckoff — zsh
                </span>
              </div>
              <img
                src={current.img}
                alt={tabs[active].title}
                className="w-full"
                loading="lazy"
              />
            </div>
            <p className="mt-4 text-center text-sm text-zinc-500 dark:text-zinc-400">
              {tabs[active].desc}
            </p>
          </motion.div>
        </div>

        {/* command reference */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-3">
            {groups.map((group, i) => (
              <GroupAccordion key={group.title} group={group} index={i} />
            ))}
          </div>

          <div className="mt-6 text-center">
            <code className="text-[12px] font-mono text-zinc-400 dark:text-zinc-600">
              wyckoff --help
            </code>
          </div>
        </div>
      </div>
    </section>
  )
}
