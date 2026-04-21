import { motion } from 'framer-motion'
import { useI18n } from '../i18n'

const techs = [
  { name: 'Python', color: '#3776AB' },
  { name: 'Google ADK', color: '#4285F4' },
  { name: 'LiteLLM', color: '#a1a1aa' },
  { name: 'Streamlit', color: '#FF4B4B' },
  { name: 'Supabase', color: '#3FCF8E' },
  { name: 'GitHub Actions', color: '#2088FF' },
  { name: 'Gemini', color: '#8E75B2' },
  { name: 'Claude', color: '#D4A574' },
  { name: 'OpenAI', color: '#74AA9C' },
]

export default function Stack() {
  const { t } = useI18n()

  return (
    <section className="py-20 px-6 border-t border-white/[0.04]">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] font-mono text-emerald-400 tracking-widest uppercase mb-8">
          {t.stack.label}
        </span>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2"
        >
          {techs.map((tech) => (
            <span
              key={tech.name}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 text-xs font-mono text-zinc-400 hover:border-zinc-600 hover:text-zinc-200 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: tech.color }} />
              {tech.name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
