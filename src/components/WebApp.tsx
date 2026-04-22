import { useState } from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n'

const BASE = import.meta.env.BASE_URL

const screens = [
  { key: 'login', img: `${BASE}screenshots/login.png` },
  { key: 'chat', img: `${BASE}screenshots/chat.png` },
  { key: 'export', img: `${BASE}screenshots/export.png` },
] as const

type ScreenKey = (typeof screens)[number]['key']

export default function WebApp() {
  const { t } = useI18n()
  const [active, setActive] = useState<ScreenKey>('login')
  const tabs = t.webapp.tabs as Record<ScreenKey, { title: string; desc: string }>
  const current = screens.find((s) => s.key === active)!

  return (
    <section className="py-24 px-6 border-t border-zinc-200 dark:border-white/[0.04]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-3">
            {t.webapp.label}
          </h2>
          <p className="text-sm text-zinc-500">{t.webapp.desc}</p>
        </div>

        {/* tab bar */}
        <div className="flex justify-center gap-2 mb-8">
          {screens.map((s) => (
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

        {/* screenshot + description */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* browser frame */}
          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-zinc-50 dark:bg-zinc-900/50">
            {/* title bar */}
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
              <span className="flex-1 text-center text-[11px] text-zinc-400 font-mono truncate">
                wyckoff-analysis-youngcanphoenix.streamlit.app
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

        <div className="mt-6 text-center">
          <a
            href="https://wyckoff-analysis-youngcanphoenix.streamlit.app/"
            target="_blank"
            rel="noopener"
            className="text-xs text-zinc-400 hover:text-emerald-500 transition-colors"
          >
            {t.webapp.explore}
          </a>
        </div>
      </div>
    </section>
  )
}
