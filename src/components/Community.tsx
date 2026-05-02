import { motion } from 'framer-motion'
import { useI18n } from '../i18n'

export default function Community() {
  const { t } = useI18n()

  return (
    <section className="py-24 px-6 border-t border-zinc-200 dark:border-white/[0.04]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-3">{t.community.title}</h2>
        <p className="text-sm text-zinc-500 mb-8">{t.community.desc}</p>

        <a
          href="https://github.com/YoungCan-Wang/Wyckoff-Analysis"
          target="_blank" rel="noopener"
          className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-medium text-sm rounded-lg hover:bg-zinc-800 dark:hover:bg-white transition-colors mb-12"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          ★ {t.community.cta}
        </a>

        {/* Group QR codes */}
        <div className="grid grid-cols-2 gap-6 max-w-md mx-auto mb-12">
          <div className="flex flex-col items-center gap-2">
            <img src="/qr/qq-group.jpg" alt="QQ Group" className="w-40 h-40 rounded-xl border border-zinc-200 dark:border-white/[0.08] object-cover" />
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{t.community.qq}</span>
            <span className="text-xs text-zinc-500">{t.community.qqNum}</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img src="/qr/feishu-group.png" alt="Feishu Group" className="w-40 h-40 rounded-xl border border-zinc-200 dark:border-white/[0.08] object-cover" />
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{t.community.feishu}</span>
          </div>
        </div>

        {/* Sponsor */}
        <div className="border-t border-zinc-200 dark:border-white/[0.04] pt-10">
          <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 mb-2">{t.community.sponsor}</h3>
          <p className="text-sm text-zinc-500 mb-6">{t.community.sponsorDesc}</p>
          <div className="grid grid-cols-2 gap-6 max-w-sm mx-auto">
            <div className="flex flex-col items-center gap-2">
              <img src="/qr/alipay.jpg" alt="Alipay" className="w-40 h-40 rounded-xl border border-zinc-200 dark:border-white/[0.08] object-cover" />
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{t.community.alipay}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src="/qr/wechat.png" alt="WeChat" className="w-40 h-40 rounded-xl border border-zinc-200 dark:border-white/[0.08] object-cover" />
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{t.community.wechat}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
