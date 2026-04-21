import { createContext, useContext } from 'react'

export const zh = {
  hero: {
    badge: '开源 · 免费 · AGPL-3.0',
    title1: '你说人话',
    title2: '他读盘面',
    subtitle: 'A 股威科夫量价分析智能体 — 10 个量化工具自主编排，五层漏斗从 4500+ 股筛至 ~30 候选',
    cta_start: '快速开始',
    cta_github: 'GitHub',
    install: 'pip install youngcan-wyckoff-analysis',
  },
  features: {
    label: '核心能力',
    items: [
      { tag: 'Agent', title: '对话式 AI Agent', desc: '自然语言驱动，自主编排 10 个量化工具。支持 Gemini、Claude、OpenAI 多模型切换。' },
      { tag: 'Funnel', title: '五层漏斗筛选', desc: '垃圾剥离 → 六通道甄选 → 板块共振 → 微观狙击 → AI 审判，全市场漏斗。' },
      { tag: 'Diagnosis', title: '持仓诊断', desc: '批量体检均线结构、吸筹阶段、触发信号，输出 EXIT / TRIM / HOLD / PROBE / ATTACK。' },
      { tag: 'Report', title: 'AI 三阵营研报', desc: 'LLM 独立给出逻辑破产、储备营地、起跳板三大判决。' },
      { tag: 'Cron', title: '每日自动化', desc: '5 条 GitHub Actions 管线：漏斗 + 研报 + 再平衡、盘前风控、涨停复盘。' },
      { tag: 'Push', title: '多通道推送', desc: '飞书、企微、钉钉、Telegram 四通道，信号实时触达。' },
      { tag: 'Confirm', title: '信号确认池', desc: 'L4 触发信号经 1-3 天价格确认，降低假突破风险。' },
      { tag: 'Dual', title: 'CLI + Web', desc: '终端 TUI 极客范 + Streamlit 可视化，同一套引擎两种入口。' },
    ],
  },
  steps: {
    label: '三步启动',
    items: [
      { n: '01', title: '安装', cmd: 'pip install youngcan-wyckoff-analysis' },
      { n: '02', title: '启动', cmd: 'wyckoff' },
      { n: '03', title: '对话', cmd: '> 帮我诊断一下持仓' },
    ],
  },
  stack: { label: '技术栈' },
  community: {
    title: '加入社区',
    desc: '觉得有帮助？给个 Star。赚到钱了？请作者吃个汉堡。',
    cta: 'Star on GitHub',
  },
  footer: {
    product: '产品',
    community: '社区',
    legal: '法律',
    demo: '在线体验',
    copy: '© 2024-2026 youngcan. AGPL-3.0',
  },
}

export const en: typeof zh = {
  hero: {
    badge: 'Open Source · Free · AGPL-3.0',
    title1: 'Talk Human',
    title2: 'It Reads the Tape',
    subtitle: 'Wyckoff volume-price analysis agent for China A-Shares — 10 quant tools, autonomous orchestration, funnels 4,500+ stocks to ~30 picks',
    cta_start: 'Quick Start',
    cta_github: 'GitHub',
    install: 'pip install youngcan-wyckoff-analysis',
  },
  features: {
    label: 'Key Features',
    items: [
      { tag: 'Agent', title: 'Conversational AI Agent', desc: 'Natural language driven, autonomously orchestrates 10 quant tools. Multi-LLM: Gemini, Claude, OpenAI.' },
      { tag: 'Funnel', title: 'Five-Layer Funnel', desc: 'Garbage filter → Six channels → Sector resonance → Micro triggers → AI verdict. Full-market funnel.' },
      { tag: 'Diagnosis', title: 'Portfolio Diagnosis', desc: 'Batch health check: MA structure, accumulation phase, triggers. Outputs EXIT / TRIM / HOLD / PROBE / ATTACK.' },
      { tag: 'Report', title: 'AI Three-Camp Reports', desc: 'LLM renders three verdicts: Logic Bankrupt, Reserve Camp, Springboard.' },
      { tag: 'Cron', title: 'Daily Automation', desc: '5 GitHub Actions pipelines: funnel + report + rebalance, pre-market risk, limit-up review.' },
      { tag: 'Push', title: 'Multi-Channel Push', desc: 'Feishu, WeCom, DingTalk, Telegram — signals delivered in real time.' },
      { tag: 'Confirm', title: 'Signal Confirmation', desc: 'L4 triggers require 1-3 day price confirmation, reducing false breakout risk.' },
      { tag: 'Dual', title: 'CLI + Web', desc: 'Terminal TUI for power users + Streamlit Web for visualization. Same engine, two entry points.' },
    ],
  },
  steps: {
    label: 'Get Started',
    items: [
      { n: '01', title: 'Install', cmd: 'pip install youngcan-wyckoff-analysis' },
      { n: '02', title: 'Launch', cmd: 'wyckoff' },
      { n: '03', title: 'Talk', cmd: '> Diagnose my portfolio' },
    ],
  },
  stack: { label: 'Tech Stack' },
  community: {
    title: 'Join the Community',
    desc: 'Find it useful? Star the repo. Made some profit? Buy the author a burger.',
    cta: 'Star on GitHub',
  },
  footer: {
    product: 'Product',
    community: 'Community',
    legal: 'Legal',
    demo: 'Live Demo',
    copy: '© 2024-2026 youngcan. AGPL-3.0',
  },
}

type Strings = typeof zh
const strings: Record<string, Strings> = { zh, en }
export type Lang = 'zh' | 'en'

export interface I18nContextValue { lang: Lang; setLang: (l: Lang) => void; t: Strings }
export const I18nContext = createContext<I18nContextValue>({
  lang: 'zh', setLang: () => {}, t: zh,
})
export const useI18n = () => useContext(I18nContext)
export const getStrings = (lang: Lang) => strings[lang] ?? zh
