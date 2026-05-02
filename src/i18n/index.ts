import { createContext, useContext } from 'react'

export const zh = {
  hero: {
    badge: '开源 · 免费 · AGPL-3.0',
    title1: '你说人话',
    title2: '他读盘面',
    subtitle: 'A 股威科夫量价分析智能体 — 10 个专业工具 + 5 个通用能力自主编排，五层漏斗从 4500+ 股筛至 ~30 候选',
    cta_start: '快速开始',
    cta_github: 'GitHub',
    install: 'curl -fsSL https://raw.githubusercontent.com/YoungCan-Wang/Wyckoff-Analysis/main/install.sh | bash',
  },
  features: {
    label: '核心能力',
    items: [
      { tag: 'Agent', title: '对话式 AI Agent', desc: '自然语言驱动，自主编排 10 个专业工具 + 5 个通用能力（量价分析 + 读写文件 + 执行命令 + 抓取网页）。发个 CSV 路径就能分析。' },
      { tag: 'Funnel', title: '五层漏斗筛选', desc: '垃圾剥离 → 六通道甄选 → 板块共振 → 微观狙击 → AI 审判。基于历史量价结构发现潜力标的，不构成投资建议。' },
      { tag: 'Diagnosis', title: '持仓诊断', desc: '批量体检均线结构、吸筹阶段、触发信号，输出 EXIT / TRIM / HOLD / PROBE / ATTACK。' },
      { tag: 'Report', title: 'AI 三阵营研报', desc: 'LLM 独立给出逻辑破产、储备营地、起跳板三大判决。' },
      { tag: 'Tail', title: '尾盘策略', desc: '盘中 14:00 自动执行：规则打分 + LLM 复判两阶段，筛选尾盘买入标的推送。' },
      { tag: 'Skills', title: 'Skills 系统', desc: '内置 /screen、/checkup、/report、/strategy、/backtest 一键复合工作流；~/.wyckoff/skills/*.md 用户可自定义扩展。' },
      { tag: 'Dashboard', title: '本地可视化面板', desc: 'wyckoff dashboard 一键启动：推荐、信号、持仓、后台任务历史、Agent 记忆、对话日志，暗色/亮色 + 中英双语。启动 CLI 时自动打开。' },
      { tag: 'Cron', title: '7 条自动化管线', desc: 'GitHub Actions：漏斗+研报+策略 / 尾盘买入 / 盘前风控 / 涨停复盘 / 推荐追踪 / 回测网格 / 缓存维护。' },
      { tag: 'Push', title: '多通道推送', desc: '飞书、企微、钉钉、Telegram 四通道，信号实时触达。' },
      { tag: 'Confirm', title: '信号确认池', desc: 'L4 触发信号经 1-3 天价格确认，降低假突破风险。' },
      { tag: 'Memory', title: 'Agent 跨会话记忆', desc: '自动提取对话结论存入 SQLite，下次提问时注入相关股票的历史分析上下文。' },
      { tag: 'Realtime', title: '盘中持仓监控', desc: 'TickFlow 实时行情驱动，止损穿破 / 跳空低开 / 放量滞涨 / VWAP 破位四维盘中预警。' },
      { tag: 'MCP', title: 'MCP Server', desc: '10 个工具通过 MCP 协议对外暴露，Claude Code / Cursor / 任何 MCP Client 即插即用，一行命令注册。' },
      { tag: 'General', title: '通用 Agent 能力', desc: '不只是股票工具 — 执行命令、读写文件、抓取网页，发个文件路径就能帮你分析数据。' },
    ],
  },
  webapp: {
    label: 'Web App',
    desc: '基于 Streamlit 的可视化投研平台 — 注册即用，无需安装',
    cta: '立即体验',
    explore: '更多功能点开探索 →',
    tabs: {
      chat: { title: '读盘室', desc: '与威科夫大师对话，自然语言驱动量价分析，自动编排 10 个量化工具给出持仓建议。' },
      export: { title: '数据导出', desc: '支持 OHLCV 增强版 / 原始数据下载，覆盖 ETF、指数、宏观 CPI 等多数据源，自定义导出。' },
      login: { title: '注册登录', desc: '邮箱注册即可使用，账号与 CLI 共享，一次注册全平台通行。' },
    },
  },
  steps: {
    label: '三步启动',
    items: [
      { n: '01', title: '安装', cmd: 'curl -fsSL https://raw.githubusercontent.com/YoungCan-Wang/Wyckoff-Analysis/main/install.sh | bash' },
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
    dashboard: {
      label: '本地可视化面板',
      desc: '全部数据存储在本地 SQLite，无需联网，安全可信。启动 CLI 时自动在浏览器打开。',
      screens: {
        overview: { title: '数据总览', desc: '推荐跟踪、信号池、持仓、后台任务历史、Agent 记忆、同步状态一目了然。' },
        chatlog: { title: '对话日志', desc: '完整记录每次对话：用户输入、模型输出、Token 消耗、工具调用，支持按会话浏览。' },
      },
    },
    backtest: {
      label: '回测网格',
      desc: '18 组参数并行回测，自动输出最优组合、夏普矩阵和策略体检',
      screens: {
        ranking: { title: '最优参数', desc: '参数梯队表：按夏普比率排序，展示胜率、均收、回撤、样本量。' },
        matrix: { title: '夏普矩阵', desc: '持有天数 × 止损幅度交叉矩阵，直观定位最优参数区间。' },
      },
    },
    groups: [
      {
        title: '认证 · auth',
        icon: '🔐',
        items: [
          { cmd: 'wyckoff auth <email>', desc: '登录账户（密码交互输入）' },
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
        title: '筛选 · screen',
        icon: '🔍',
        items: [
          { cmd: 'wyckoff screen', desc: '全市场五层漏斗筛选' },
          { cmd: 'wyckoff screen --board main', desc: '指定板块筛选' },
        ],
      },
      {
        title: '回测 · backtest',
        icon: '📈',
        items: [
          { cmd: 'wyckoff backtest', desc: '策略历史回测（默认 18 个月）' },
          { cmd: 'wyckoff bt --hold-days 20 --months 12', desc: '自定义持有天数和回测时长' },
        ],
      },
      {
        title: '研报 · report',
        icon: '📝',
        items: [
          { cmd: 'wyckoff report 000001,600519', desc: 'AI 深度研报（三阵营分类）' },
        ],
      },
      {
        title: 'MCP Server',
        icon: '🔌',
        items: [
          { cmd: 'wyckoff mcp', desc: '启动 MCP Server，供 Claude Code / Cursor 调用' },
        ],
      },
      {
        title: '信号 · signal',
        icon: '📡',
        items: [
          { cmd: 'wyckoff signal', desc: '查看信号确认池' },
          { cmd: 'wyckoff signal pending', desc: '仅看待确认信号' },
        ],
      },
      {
        title: '推荐 · recommend',
        icon: '🎯',
        items: [
          { cmd: 'wyckoff recommend', desc: '查看 AI 推荐跟踪' },
          { cmd: 'wyckoff rec -n 50', desc: '返回更多条数' },
        ],
      },
      {
        title: '记忆 · memory',
        icon: '🧠',
        items: [
          { cmd: 'wyckoff memory', desc: '查看 Agent 记忆列表' },
          { cmd: 'wyckoff mem search 银行', desc: '搜索记忆' },
          { cmd: 'wyckoff mem clear', desc: '清除过期记忆' },
          { cmd: 'wyckoff mem delete <id>', desc: '删除指定记忆' },
        ],
      },
      {
        title: '日志 · log',
        icon: '💬',
        items: [
          { cmd: 'wyckoff log', desc: '查看最近对话日志' },
          { cmd: 'wyckoff log --session <id>', desc: '查看指定会话' },
        ],
      },
      {
        title: '面板 · dashboard',
        icon: '📊',
        items: [
          { cmd: 'wyckoff dashboard', desc: '启动本地可视化面板（TUI 自动打开）' },
          { cmd: 'wyckoff dash --port 9000', desc: '自定义端口' },
        ],
      },
      {
        title: '同步 · sync',
        icon: '🔄',
        items: [
          { cmd: 'wyckoff sync', desc: '手动同步云端数据到本地' },
          { cmd: 'wyckoff sync status', desc: '查看各表同步状态' },
        ],
      },
    ],
  },
  agentPrompt: {
    label: '一键配置 Agent',
    desc: '复制下方提示词发给你的 AI Agent（Claude Code / Cursor / ChatGPT 等），它会帮你完成安装和配置',
    copy: '复制给Agent',
    copied: '已复制 ✓',
    prompt: `请帮我完成以下任务：

1. 访问 https://github.com/YoungCan-Wang/Wyckoff-Analysis 并帮我点 Star

2. 安装 Wyckoff CLI（一键脚本，自动检测环境）：
   curl -fsSL https://raw.githubusercontent.com/YoungCan-Wang/Wyckoff-Analysis/main/install.sh | bash

3. 运行 wyckoff 启动 CLI，用 /model 命令配置 LLM API Key（Gemini / Claude / OpenAI 任选一个）

4. 配置数据源（可选，提升数据质量）：
   wyckoff config tickflow <your_tickflow_api_key>
   数据源购买: https://tickflow.org/auth/register?ref=5N4NKTCPL4
   大模型购买: https://www.1route.dev/register?aff=359904261

5. 安装 MCP 依赖并注册 Wyckoff MCP Server：
   pip install "youngcan-wyckoff-analysis[mcp]"
   claude mcp add wyckoff -- wyckoff-mcp

注册完成后，你就可以直接使用 analyze_stock、screen_stocks、portfolio 等 10 个威科夫量价分析工具了。试试问"帮我诊断 000001"。`,
  },
  mcp: {
    label: 'MCP Server',
    desc: '通过 MCP 协议暴露 10 个威科夫量价分析工具，一行注册即插即用',
    clients: '支持所有 MCP 兼容客户端',
    copy: '复制配置',
    copied: '已复制 ✓',
    install: '$ pip install "youngcan-wyckoff-analysis[mcp]" && claude mcp add wyckoff -- wyckoff-mcp',
    tools: '注册后可直接使用 analyze_stock、screen_stocks、portfolio 等 10 个工具',
  },
  stack: { label: '技术栈', data: 'API Key 购买', tickflow: 'TickFlow 数据源（实时行情 + 分钟K线）', llm: '1Route 大模型（Gemini / Claude / GPT）' },
  community: {
    title: '加入社区',
    desc: '觉得有帮助？给个 Star。赚到钱了？请作者吃个汉堡。',
    cta: 'Star on GitHub',
    feishu: '飞书群',
    qq: 'QQ群',
    qqNum: '群号: 761348919',
    sponsor: '赞助',
    sponsorDesc: '请作者吃个汉堡',
    alipay: '支付宝',
    wechat: '微信',
  },
  footer: {
    product: '产品',
    community: '社区',
    legal: '法律',
    demo: '在线使用',
    tickflow: 'TickFlow 行情',
    disclaimer: '风险提示：本工具基于历史量价结构发现潜力标的，过去表现不代表未来收益，不构成任何投资建议。投资有风险，决策需自主。',
    copy: '© 2024-2026 youngcan. AGPL-3.0',
  },
}

export const en: typeof zh = {
  hero: {
    badge: 'Open Source · Free · AGPL-3.0',
    title1: 'Talk Human',
    title2: 'It Reads the Tape',
    subtitle: 'Wyckoff volume-price analysis agent for China A-Shares — 10 pro tools + 5 general capabilities, autonomous orchestration, funnels 4,500+ stocks to ~30 picks',
    cta_start: 'Quick Start',
    cta_github: 'GitHub',
    install: 'curl -fsSL https://raw.githubusercontent.com/YoungCan-Wang/Wyckoff-Analysis/main/install.sh | bash',
  },
  features: {
    label: 'Key Features',
    items: [
      { tag: 'Agent', title: 'Conversational AI Agent', desc: 'Natural language driven, orchestrates 10 pro tools + 5 general capabilities (quant analysis + file I/O + shell exec + web fetch). Drop a CSV path and it analyzes.' },
      { tag: 'Funnel', title: 'Five-Layer Funnel', desc: 'Garbage filter → Six channels → Sector resonance → Micro triggers → AI verdict. Identifies potential based on historical patterns — past performance does not guarantee future results.' },
      { tag: 'Diagnosis', title: 'Portfolio Diagnosis', desc: 'Batch health check: MA structure, accumulation phase, triggers. Outputs EXIT / TRIM / HOLD / PROBE / ATTACK.' },
      { tag: 'Report', title: 'AI Three-Camp Reports', desc: 'LLM renders three verdicts: Logic Bankrupt, Reserve Camp, Springboard.' },
      { tag: 'Tail', title: 'Tail-Buy Strategy', desc: 'Runs at 14:00 intraday: rule scoring + LLM second-pass, two-stage end-of-day buy candidate screening.' },
      { tag: 'Skills', title: 'Skills System', desc: 'Built-in /screen, /checkup, /report, /strategy, /backtest for one-tap workflows. Extend with custom ~/.wyckoff/skills/*.md files.' },
      { tag: 'Dashboard', title: 'Local Dashboard', desc: 'wyckoff dashboard: recommendations, signals, portfolio, background task history, agent memory, chat logs. Dark/light + zh/en. Auto-opens with CLI.' },
      { tag: 'Cron', title: '7 Automation Pipelines', desc: 'GitHub Actions: funnel+report+strategy / tail-buy / pre-market risk / limit-up review / rec tracking / backtest grid / cache cleanup.' },
      { tag: 'Push', title: 'Multi-Channel Push', desc: 'Feishu, WeCom, DingTalk, Telegram — signals delivered in real time.' },
      { tag: 'Confirm', title: 'Signal Confirmation', desc: 'L4 triggers require 1-3 day price confirmation, reducing false breakout risk.' },
      { tag: 'Memory', title: 'Cross-Session Memory', desc: 'Auto-extracts conversation conclusions to SQLite. Injects relevant stock analysis context on next query.' },
      { tag: 'Realtime', title: 'Intraday Monitor', desc: 'TickFlow real-time quotes: stop-loss breach / gap-down / volume stall / VWAP breakdown — four-dimensional intraday alerts.' },
      { tag: 'MCP', title: 'MCP Server', desc: '10 tools exposed via MCP protocol — plug into Claude Code / Cursor / any MCP client with one command.' },
      { tag: 'General', title: 'General Agent', desc: 'Not just stock tools — exec commands, read/write files, fetch web pages. Drop a file path and it analyzes your data.' },
    ],
  },
  webapp: {
    label: 'Web App',
    desc: 'Streamlit-powered visual research platform — sign up and use, no install required',
    cta: 'Try it now',
    explore: 'Explore more features →',
    tabs: {
      chat: { title: 'Trading Room', desc: 'Chat with the Wyckoff master. Natural language drives volume-price analysis, auto-orchestrates 10 quant tools for portfolio advice.' },
      export: { title: 'Data Export', desc: 'Download enhanced OHLCV or raw data. Covers ETFs, indices, macro CPI, and more with custom export options.' },
      login: { title: 'Sign Up', desc: 'Register with email to get started. Account is shared with CLI — one signup, full platform access.' },
    },
  },
  steps: {
    label: 'Get Started',
    items: [
      { n: '01', title: 'Install', cmd: 'curl -fsSL https://raw.githubusercontent.com/YoungCan-Wang/Wyckoff-Analysis/main/install.sh | bash' },
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
    dashboard: {
      label: 'Local Dashboard',
      desc: 'All data stored in local SQLite — no network required, secure and trustworthy. Auto-opens in browser with CLI.',
      screens: {
        overview: { title: 'Overview', desc: 'Recommendations, signals, portfolio, background task history, agent memory, and sync status at a glance.' },
        chatlog: { title: 'Chat Log', desc: 'Full conversation history: user input, model output, token usage, tool calls — browsable by session.' },
      },
    },
    backtest: {
      label: 'Backtest Grid',
      desc: '18 parameter combos run in parallel — outputs optimal parameters, Sharpe matrix, and strategy health check',
      screens: {
        ranking: { title: 'Ranking', desc: 'Parameter ranking table: sorted by Sharpe ratio, showing win rate, avg return, drawdown, and sample size.' },
        matrix: { title: 'Matrix', desc: 'Hold period × stop-loss cross matrix — visually pinpoint the optimal parameter zone.' },
      },
    },
    groups: [
      {
        title: 'Auth',
        icon: '🔐',
        items: [
          { cmd: 'wyckoff auth <email>', desc: 'Log in (password prompted interactively)' },
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
        title: 'Screen',
        icon: '🔍',
        items: [
          { cmd: 'wyckoff screen', desc: 'Full-market 5-layer funnel screening' },
          { cmd: 'wyckoff screen --board main', desc: 'Screen specific board' },
        ],
      },
      {
        title: 'Backtest',
        icon: '📈',
        items: [
          { cmd: 'wyckoff backtest', desc: 'Strategy backtest (default 18 months)' },
          { cmd: 'wyckoff bt --hold-days 20 --months 12', desc: 'Custom hold days and period' },
        ],
      },
      {
        title: 'Report',
        icon: '📝',
        items: [
          { cmd: 'wyckoff report 000001,600519', desc: 'AI deep report (3-camp classification)' },
        ],
      },
      {
        title: 'MCP Server',
        icon: '🔌',
        items: [
          { cmd: 'wyckoff mcp', desc: 'Start MCP Server for Claude Code / Cursor' },
        ],
      },
      {
        title: 'Signal',
        icon: '📡',
        items: [
          { cmd: 'wyckoff signal', desc: 'View signal confirmation pool' },
          { cmd: 'wyckoff signal pending', desc: 'Pending signals only' },
        ],
      },
      {
        title: 'Recommend',
        icon: '🎯',
        items: [
          { cmd: 'wyckoff recommend', desc: 'View AI recommendation tracking' },
          { cmd: 'wyckoff rec -n 50', desc: 'Return more results' },
        ],
      },
      {
        title: 'Memory',
        icon: '🧠',
        items: [
          { cmd: 'wyckoff memory', desc: 'View agent memory list' },
          { cmd: 'wyckoff mem search bank', desc: 'Search memories' },
          { cmd: 'wyckoff mem clear', desc: 'Clear expired memories' },
          { cmd: 'wyckoff mem delete <id>', desc: 'Delete specific memory' },
        ],
      },
      {
        title: 'Log',
        icon: '💬',
        items: [
          { cmd: 'wyckoff log', desc: 'View recent chat logs' },
          { cmd: 'wyckoff log --session <id>', desc: 'View specific session' },
        ],
      },
      {
        title: 'Dashboard',
        icon: '📊',
        items: [
          { cmd: 'wyckoff dashboard', desc: 'Launch local dashboard (auto-opens with TUI)' },
          { cmd: 'wyckoff dash --port 9000', desc: 'Custom port' },
        ],
      },
      {
        title: 'Sync',
        icon: '🔄',
        items: [
          { cmd: 'wyckoff sync', desc: 'Sync cloud data to local' },
          { cmd: 'wyckoff sync status', desc: 'View sync status per table' },
        ],
      },
    ],
  },
  agentPrompt: {
    label: 'One-Click Agent Setup',
    desc: 'Copy the prompt below and send it to your AI Agent (Claude Code / Cursor / ChatGPT, etc.) — it will handle the install and config for you',
    copy: 'Copy for Agent',
    copied: 'Copied ✓',
    prompt: `Please help me complete the following tasks:

1. Visit https://github.com/YoungCan-Wang/Wyckoff-Analysis and star the repo

2. Install Wyckoff CLI (one-line script, auto-detects environment):
   curl -fsSL https://raw.githubusercontent.com/YoungCan-Wang/Wyckoff-Analysis/main/install.sh | bash

3. Run wyckoff to launch the CLI, then use the /model command to configure an LLM API Key (Gemini / Claude / OpenAI — pick one)

4. Configure data sources (optional, improves data quality):
   wyckoff config tickflow <your_tickflow_api_key>
   Data API: https://tickflow.org/auth/register?ref=5N4NKTCPL4
   LLM API: https://www.1route.dev/register?aff=359904261

5. Install MCP dependency and register the Wyckoff MCP Server:
   pip install "youngcan-wyckoff-analysis[mcp]"
   claude mcp add wyckoff -- wyckoff-mcp

Once registered, you can directly use 10 Wyckoff volume-price analysis tools like analyze_stock, screen_stocks, portfolio, etc. Try asking "diagnose 000001".`,
  },
  mcp: {
    label: 'MCP Server',
    desc: 'Expose 10 Wyckoff volume-price analysis tools via MCP protocol — one command to register',
    clients: 'Works with all MCP-compatible clients',
    copy: 'Copy config',
    copied: 'Copied ✓',
    install: '$ pip install "youngcan-wyckoff-analysis[mcp]" && claude mcp add wyckoff -- wyckoff-mcp',
    tools: 'After registration, use analyze_stock, screen_stocks, portfolio and 7 more tools directly',
  },
  stack: { label: 'Tech Stack', data: 'Get API Keys', tickflow: 'TickFlow Data (Real-time + Minute K-line)', llm: '1Route LLM (Gemini / Claude / GPT)' },
  community: {
    title: 'Join the Community',
    desc: 'Find it useful? Star the repo. Made some profit? Buy the author a burger.',
    cta: 'Star on GitHub',
    feishu: 'Feishu Group',
    qq: 'QQ Group',
    qqNum: 'Group: 761348919',
    sponsor: 'Sponsor',
    sponsorDesc: 'Buy the author a burger',
    alipay: 'Alipay',
    wechat: 'WeChat',
  },
  footer: {
    product: 'Product',
    community: 'Community',
    legal: 'Legal',
    demo: 'Web App',
    tickflow: 'TickFlow Data',
    disclaimer: 'Disclaimer: This tool identifies potential based on historical volume-price patterns. Past performance does not guarantee future results and nothing here constitutes investment advice. Invest at your own risk.',
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
