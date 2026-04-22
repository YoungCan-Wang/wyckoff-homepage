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
  webapp: {
    label: 'Web App',
    desc: '基于 Streamlit 的可视化投研平台 — 注册即用，无需安装',
    cta: '立即体验',
    tabs: {
      chat: { title: '读盘室', desc: '与威科夫大师对话，自然语言驱动量价分析，自动编排 10 个量化工具给出持仓建议。' },
      export: { title: '数据导出', desc: '支持 OHLCV 增强版 / 原始数据下载，覆盖 ETF、指数、宏观 CPI 等多数据源，自定义导出。' },
      login: { title: '注册登录', desc: '邮箱注册即可使用，账号与 CLI 共享，一次注册全平台通行。' },
    },
  },
  steps: {
    label: '三步启动',
    items: [
      { n: '01', title: '安装', cmd: 'pip install youngcan-wyckoff-analysis' },
      { n: '02', title: '启动', cmd: 'wyckoff' },
      { n: '03', title: '对话', cmd: '> 帮我诊断一下持仓' },
    ],
  },
  cli: {
    label: 'CLI 命令速查',
    desc: '所有子命令一览 — 可直接集成到 Agent / Skill 工作流',
    screens: {
      home: { title: '启动界面', desc: '终端 TUI 界面，支持多模型切换、自动登录、实时 Token 统计。' },
      running: { title: '持仓查询', desc: '自然语言查询持仓，Agent 自动调用工具获取持仓数据并以威科夫语气回复。' },
      analysis: { title: '诊断报告', desc: '五张体检报告速览：健康灯、核心结论、关键缺陷、生死线，一目了然。' },
      result: { title: '操作指令', desc: '威科夫大去留令：EXIT / TRIM / HOLD / PROBE / ATTACK，逐票给出理由与风险铁律。' },
    },
    groups: [
      {
        title: '认证 · auth',
        icon: '🔐',
        items: [
          { cmd: 'wyckoff auth login <email> <password>', desc: '登录账户' },
          { cmd: 'wyckoff auth logout', desc: '退出登录' },
          { cmd: 'wyckoff auth status', desc: '查看当前登录状态' },
        ],
      },
      {
        title: '模型 · model',
        icon: '🤖',
        items: [
          { cmd: 'wyckoff model list', desc: '列出已配置的模型' },
          { cmd: 'wyckoff model add <name> <provider> <model>', desc: '添加新模型' },
          { cmd: 'wyckoff model set <name> <key> <value>', desc: '修改模型参数' },
          { cmd: 'wyckoff model rm <name>', desc: '删除模型' },
          { cmd: 'wyckoff model default <name>', desc: '设置默认模型' },
        ],
      },
      {
        title: '配置 · config',
        icon: '⚙️',
        items: [
          { cmd: 'wyckoff config show', desc: '显示当前配置' },
          { cmd: 'wyckoff config tushare <token>', desc: '设置 Tushare Token' },
          { cmd: 'wyckoff config tickflow <api_key>', desc: '设置 TickFlow API Key' },
        ],
      },
      {
        title: '持仓 · portfolio',
        icon: '💼',
        items: [
          { cmd: 'wyckoff portfolio list', desc: '查看持仓列表' },
          { cmd: 'wyckoff portfolio add <code> <shares> <cost>', desc: '添加持仓' },
          { cmd: 'wyckoff portfolio rm <code>', desc: '删除持仓' },
          { cmd: 'wyckoff portfolio cash <amount>', desc: '设置可用资金' },
        ],
      },
      {
        title: '信号 · signal',
        icon: '📡',
        items: [
          { cmd: 'wyckoff signal', desc: '查看今日触发信号' },
          { cmd: 'wyckoff signal --json', desc: 'JSON 格式输出' },
        ],
      },
      {
        title: '推荐 · recommend',
        icon: '🎯',
        items: [
          { cmd: 'wyckoff recommend', desc: '查看今日推荐标的' },
          { cmd: 'wyckoff recommend --json', desc: 'JSON 格式输出' },
        ],
      },
    ],
  },
  stack: { label: '技术栈', data: '行情数据接入', tickflow: 'TickFlow 行情数据' },
  community: {
    title: '加入社区',
    desc: '觉得有帮助？给个 Star。赚到钱了？请作者吃个汉堡。',
    cta: 'Star on GitHub',
  },
  footer: {
    product: '产品',
    community: '社区',
    legal: '法律',
    demo: '在线使用',
    tickflow: 'TickFlow 行情',
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
  webapp: {
    label: 'Web App',
    desc: 'Streamlit-powered visual research platform — sign up and use, no install required',
    cta: 'Try it now',
    tabs: {
      chat: { title: 'Trading Room', desc: 'Chat with the Wyckoff master. Natural language drives volume-price analysis, auto-orchestrates 10 quant tools for portfolio advice.' },
      export: { title: 'Data Export', desc: 'Download enhanced OHLCV or raw data. Covers ETFs, indices, macro CPI, and more with custom export options.' },
      login: { title: 'Sign Up', desc: 'Register with email to get started. Account is shared with CLI — one signup, full platform access.' },
    },
  },
  steps: {
    label: 'Get Started',
    items: [
      { n: '01', title: 'Install', cmd: 'pip install youngcan-wyckoff-analysis' },
      { n: '02', title: 'Launch', cmd: 'wyckoff' },
      { n: '03', title: 'Talk', cmd: '> Diagnose my portfolio' },
    ],
  },
  cli: {
    label: 'CLI Reference',
    desc: 'All subcommands at a glance — ready for Agent / Skill integration',
    screens: {
      home: { title: 'Home', desc: 'Terminal TUI interface with multi-model switching, auto-login, and real-time token stats.' },
      running: { title: 'Portfolio', desc: 'Natural language portfolio queries — the agent auto-invokes tools and replies in Wyckoff voice.' },
      analysis: { title: 'Diagnosis', desc: 'Five-stock health report at a glance: health light, core verdict, key flaws, and survival line.' },
      result: { title: 'Orders', desc: 'Wyckoff action orders: EXIT / TRIM / HOLD / PROBE / ATTACK with per-stock reasoning and risk rules.' },
    },
    groups: [
      {
        title: 'Auth',
        icon: '🔐',
        items: [
          { cmd: 'wyckoff auth login <email> <password>', desc: 'Log in to your account' },
          { cmd: 'wyckoff auth logout', desc: 'Log out' },
          { cmd: 'wyckoff auth status', desc: 'Check current login status' },
        ],
      },
      {
        title: 'Model',
        icon: '🤖',
        items: [
          { cmd: 'wyckoff model list', desc: 'List configured models' },
          { cmd: 'wyckoff model add <name> <provider> <model>', desc: 'Add a new model' },
          { cmd: 'wyckoff model set <name> <key> <value>', desc: 'Update model parameter' },
          { cmd: 'wyckoff model rm <name>', desc: 'Remove a model' },
          { cmd: 'wyckoff model default <name>', desc: 'Set default model' },
        ],
      },
      {
        title: 'Config',
        icon: '⚙️',
        items: [
          { cmd: 'wyckoff config show', desc: 'Show current config' },
          { cmd: 'wyckoff config tushare <token>', desc: 'Set Tushare token' },
          { cmd: 'wyckoff config tickflow <api_key>', desc: 'Set TickFlow API key' },
        ],
      },
      {
        title: 'Portfolio',
        icon: '💼',
        items: [
          { cmd: 'wyckoff portfolio list', desc: 'View portfolio' },
          { cmd: 'wyckoff portfolio add <code> <shares> <cost>', desc: 'Add a position' },
          { cmd: 'wyckoff portfolio rm <code>', desc: 'Remove a position' },
          { cmd: 'wyckoff portfolio cash <amount>', desc: 'Set available cash' },
        ],
      },
      {
        title: 'Signal',
        icon: '📡',
        items: [
          { cmd: 'wyckoff signal', desc: 'View today\'s triggered signals' },
          { cmd: 'wyckoff signal --json', desc: 'JSON output' },
        ],
      },
      {
        title: 'Recommend',
        icon: '🎯',
        items: [
          { cmd: 'wyckoff recommend', desc: 'View today\'s recommendations' },
          { cmd: 'wyckoff recommend --json', desc: 'JSON output' },
        ],
      },
    ],
  },
  stack: { label: 'Tech Stack', data: 'Market Data Integration', tickflow: 'TickFlow Market Data' },
  community: {
    title: 'Join the Community',
    desc: 'Find it useful? Star the repo. Made some profit? Buy the author a burger.',
    cta: 'Star on GitHub',
  },
  footer: {
    product: 'Product',
    community: 'Community',
    legal: 'Legal',
    demo: 'Web App',
    tickflow: 'TickFlow Data',
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
