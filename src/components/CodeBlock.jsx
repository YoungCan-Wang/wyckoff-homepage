import { Copy, Check } from 'lucide-react'
import { useState } from 'react'

export default function CodeBlock({ code, label = 'terminal' }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    const commands = code.split('\n')
      .filter(l => l.startsWith('$'))
      .map(l => l.slice(2))
      .join('\n')
    navigator.clipboard.writeText(commands || code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="rounded-xl overflow-hidden border border-[--color-border] dark:border-[--color-border-dark] bg-[#1a1b26] text-left">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="text-xs text-slate-500 font-mono">{label}</span>
        <button onClick={handleCopy} className="text-slate-500 hover:text-slate-300 transition-colors p-1">
          {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 text-[13px] font-mono leading-relaxed overflow-x-auto">
        {code.split('\n').map((line, i) => (
          <div key={i}>
            {line.startsWith('#') ? (
              <span className="text-slate-500">{line}</span>
            ) : line.startsWith('$') ? (
              <><span className="text-emerald-400">$</span><span className="text-slate-300">{line.slice(1)}</span></>
            ) : (
              <span className="text-slate-400">{line}</span>
            )}
          </div>
        ))}
      </pre>
    </div>
  )
}
