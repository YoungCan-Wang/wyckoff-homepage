import { motion } from 'framer-motion'
import { useI18n } from '../i18n'

export default function Features() {
  const { t } = useI18n()

  return (
    <section id="features" className="py-24 px-6 border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] font-mono text-emerald-400 tracking-widest uppercase mb-3">
            {t.features.label}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.06]">
          {t.features.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-[#09090b] p-6 hover:bg-zinc-900/50 transition-colors group"
            >
              <span className="inline-block text-[10px] font-mono text-emerald-500/60 tracking-wider uppercase mb-3 border border-emerald-500/10 px-1.5 py-0.5 rounded">
                {item.tag}
              </span>
              <h3 className="text-[15px] font-semibold text-zinc-200 mb-2 group-hover:text-emerald-300 transition-colors">
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
