import { Copy, Check } from 'lucide-react'
import { useState } from 'react'

export default function CodeBlock({ code, label = 'terminal' }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    const raw = code.replace(/^[#$] .*/gm, '').replace(/^#.*$/gm, '').trim()
    navigator.clipboard.writeText(raw || code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="rounded-xl overflow-hidden bg-slate-900 shadow-2xl text-left">
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-800/80 border-b border-slate-700/50">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-xs text-slate-500 font-mono">{label}</span>
        <button onClick={handleCopy} className="text-slate-400 hover:text-white transition-colors p-1">
          {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 text-sm font-mono leading-relaxed overflow-x-auto">
        {code.split('\n').map((line, i) => (
          <div key={i}>
            {line.startsWith('#') ? (
              <span className="text-slate-500">{line}</span>
            ) : line.startsWith('$') ? (
              <><span className="text-green-400">$</span><span className="text-slate-200">{line.slice(1)}</span></>
            ) : (
              <span className="text-slate-300">{line}</span>
            )}
          </div>
        ))}
      </pre>
    </div>
  )
}
