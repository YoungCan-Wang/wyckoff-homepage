import { motion } from 'framer-motion'
import { useI18n } from '../i18n'

export default function Steps() {
  const { t } = useI18n()

  return (
    <section id="start" className="py-24 px-6 border-t border-zinc-200 dark:border-white/[0.04]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-3">{t.steps.label}</h2>
        </div>

        <div className="space-y-4">
          {t.steps.items.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-6 p-5 rounded-xl border border-zinc-200 bg-zinc-50/50 hover:border-emerald-500/30 dark:border-white/[0.06] dark:bg-zinc-900/30 dark:hover:border-emerald-500/20 transition-colors group"
            >
              <span className="flex-none text-2xl font-bold text-zinc-300 group-hover:text-emerald-500/40 dark:text-zinc-800 dark:group-hover:text-emerald-500/30 transition-colors font-mono">
                {step.n}
              </span>
              <div className="flex-none w-16">
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{step.title}</span>
              </div>
              <div className="flex-1 min-w-0">
                <code className="block text-sm font-mono text-emerald-600/80 dark:text-emerald-400/80 truncate">
                  {step.cmd}
                </code>
              </div>
            </motion.div>
          ))}
        </div>

        {/* terminal preview — always dark */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 rounded-xl border border-zinc-200 dark:border-white/[0.06] overflow-hidden glow-green"
        >
          <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-zinc-700/30 bg-zinc-900/50">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]/60" />
            <span className="ml-auto text-[10px] font-mono text-zinc-600">wyckoff</span>
          </div>
          <pre className="p-5 text-[13px] font-mono leading-loose bg-[#0c0c0f]">
<span className="text-zinc-600">{'# Install'}</span>{'\n'}
<span className="text-emerald-400">$</span><span className="text-zinc-300"> pip install youngcan-wyckoff-analysis</span>{'\n'}
{'\n'}
<span className="text-zinc-600">{'# Launch'}</span>{'\n'}
<span className="text-emerald-400">$</span><span className="text-zinc-300"> wyckoff</span>{'\n'}
{'\n'}
<span className="text-zinc-600">{'# Or via Homebrew'}</span>{'\n'}
<span className="text-emerald-400">$</span><span className="text-zinc-300"> brew tap YoungCan-Wang/wyckoff</span>{'\n'}
<span className="text-emerald-400">$</span><span className="text-zinc-300"> brew install wyckoff</span>
<span className="cursor-blink text-emerald-400">█</span>
          </pre>
        </motion.div>
      </div>
    </section>
  )
}
