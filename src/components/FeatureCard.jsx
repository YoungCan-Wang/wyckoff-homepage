export default function FeatureCard({ icon: Icon, title, desc, color }) {
  const colorMap = {
    indigo: 'text-indigo-500 bg-indigo-50 dark:bg-indigo-500/10',
    emerald: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10',
    rose: 'text-rose-500 bg-rose-50 dark:bg-rose-500/10',
    amber: 'text-amber-500 bg-amber-50 dark:bg-amber-500/10',
    cyan: 'text-cyan-500 bg-cyan-50 dark:bg-cyan-500/10',
    violet: 'text-violet-500 bg-violet-50 dark:bg-violet-500/10',
    teal: 'text-teal-500 bg-teal-50 dark:bg-teal-500/10',
    orange: 'text-orange-500 bg-orange-50 dark:bg-orange-500/10',
  }

  return (
    <div className="group p-5 rounded-xl border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-800/50 hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 hover:-translate-y-0.5">
      <div className={`inline-flex p-2.5 rounded-lg mb-3 ${colorMap[color] || colorMap.indigo}`}>
        <Icon size={22} />
      </div>
      <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1.5">{title}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{desc}</p>
    </div>
  )
}
