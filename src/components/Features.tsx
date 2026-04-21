import { motion } from 'framer-motion'
import { useI18n } from '../i18n'

export default function Features() {
  const { t } = useI18n()

  return (
    <section id="features" className="py-24 px-6 border-t border-zinc-200 dark:border-white/[0.04]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-3">{t.features.label}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-200 dark:bg-white/[0.04] rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/[0.06]">
          {t.features.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white p-6 hover:bg-zinc-50 dark:bg-[#09090b] dark:hover:bg-zinc-900/50 transition-colors group"
            >
              <span className="inline-block text-[10px] font-mono text-emerald-600/60 dark:text-emerald-500/60 tracking-wider uppercase mb-3 border border-emerald-500/20 dark:border-emerald-500/10 px-1.5 py-0.5 rounded">
                {item.tag}
              </span>
              <h3 className="text-[15px] font-semibold text-zinc-800 dark:text-zinc-200 mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-[13px] text-zinc-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
