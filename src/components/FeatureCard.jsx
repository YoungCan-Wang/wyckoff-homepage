export default function FeatureCard({ icon: Icon, title, desc, index }) {
  return (
    <div className={`opacity-0 animate-fade-in stagger-${index + 1} group p-5 rounded-xl border border-[--color-border] dark:border-[--color-border-dark] bg-white dark:bg-[--color-surface-dark] hover:border-[--color-accent]/40 transition-all duration-200`}>
      <div className="inline-flex p-2 rounded-lg bg-[--color-accent-bg] dark:bg-[--color-accent-bg-dark] text-[--color-accent] mb-3">
        <Icon size={20} strokeWidth={1.8} />
      </div>
      <h3 className="text-[15px] font-semibold text-[--color-heading] dark:text-[--color-heading-dark] mb-1.5">{title}</h3>
      <p className="text-sm text-[--color-muted] leading-relaxed">{desc}</p>
    </div>
  )
}
