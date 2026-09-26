# Paperclip 中文社区翻译站

> **非官方项目。** 本站是 [Paperclip](https://github.com/paperclipai/paperclip) 的社区中文翻译站，
> 与 [Paperclip Labs, Inc](https://paperclip.ing) 无隶属关系。Paperclip 的名称与商标归其所有者所有；
> 本仓库代码以 MIT 协议发布，但该协议不授予任何商标许可。内容出入以[官方仓库](https://github.com/paperclipai/paperclip)为准。

把 Paperclip 官方 README（中文版）的内容做成一个中文静态营销站。

> Paperclip 是用来管理工作型 AI 智能体的应用。开源的 AI 智能体团队协作编排工具。
> 如果说 OpenClaw 是一名「员工」，那么 Paperclip 就是这家「公司」。

## 技术栈

| 层 | 技术 | 版本 |
| --- | --- | --- |
| 站点框架 | [Astro](https://astro.build) | 7.3（静态输出，零客户端框架） |
| 语言 | [TypeScript](https://www.typescriptlang.org) | 6.0（`astro/tsconfigs/strict`） |
| 样式 | [Tailwind CSS](https://tailwindcss.com) | 4.3（CSS-first `@theme`） |
| 交互 | 原生 JS | 无框架，无构建产物 |
| 包管理 | [Bun](https://bun.sh) | 1.4+ |
| 质量 | [Biome](https://biomejs.dev) | 2.5（lint + format） |

其他：`@astrojs/sitemap` 3、`@fontsource-variable/inter` 5、`@fontsource-variable/jetbrains-mono` 5、`@astrojs/check` 0.9。

### 为什么没有 React

初版用 `@astrojs/react` 做了 3 个岛屿（代码块 / FAQ / 路线图），实测代价：

- `client.js` **208 KB raw / 65 KB gzip**，只为了一个复制按钮
- 8 个 `<astro-island>`，每页创建 8 次 React root
- FAQ 折叠态在没有 JS 时高度为 0 且点击无响应 —— **5 条里 4 条永久不可读**

现在全部改为零框架实现：

| 能力 | 实现 | 收益 |
| --- | --- | --- |
| shell 语法高亮 | `src/lib/highlight.ts`，**构建期**切 token，Astro 负责转义 | 无 `dangerouslySetInnerHTML`，无 JS 也能看高亮 |
| 复制按钮 | 事件委托 + `navigator.clipboard`（含 `execCommand` 回退） | 1 个监听器管 6 个代码块 |
| FAQ | 原生 `<details name>` + `<summary>` | **无 JS 全部可读**，浏览器内建互斥 |
| 路线图筛选 | `aria-pressed` 属性 + CSS 选态 | JS 只翻转一个属性 |
| 进场动画 / 导航高亮 / 移动菜单 | rAF 节流扫描 + `IntersectionObserver` | 全部内联，无外部 JS 文件 |

构建产物 **0 个 .js 文件**（脚本全部内联进 HTML）。

## 常用命令

```bash
bun install                # 安装依赖
bun run dev                # 本地开发（默认 http://localhost:4321）
bun run typecheck          # astro check（类型 + 模板检查）
bun run build              # 生产构建，输出到 dist/
bun run preview            # 预览生产构建
bun run check              # typecheck + build
bun run lint               # Biome 检查
bun run lint:fix           # Biome 自动修复
bun run format             # Biome 格式化
```

## 部署

本站通过 GitHub Actions 自动部署到 GitHub Pages（`deploy.yml`，push 到 `main` 即发布）。

- 生产域名：**https://paperclip.ndjp.net**（构建时注入 `SITE_URL`，见 `deploy.yml`）
- `public/CNAME` 随构建输出到 `dist/CNAME`，Pages 用它识别自定义域
- 纯静态输出，也可托管到 Cloudflare Pages / Vercel / Netlify 等任意静态平台

**首次部署前必须手动做两件事**（Actions 做不了）：

1. 仓库 Settings → Pages → Build and deployment → Source 选 **GitHub Actions**
2. DNS 加一条 CNAME：`paperclip` → `bbylw.github.io`，
   然后在 Pages 设置里填 Custom domain `paperclip.ndjp.net` 并勾选 Enforce HTTPS

本地构建其他域名时：

```bash
SITE_URL=https://你的域名 bun run build
```

未设置时会回退到占位域名 `https://paperclip-cn.example.com` 并打印警告。
配置成 `https://paperclip.ing` 会**直接抛错**——本项目无权声明官方域名的权威性。

## 目录结构

```text
src/
├── components/            # 页面区块（Astro 组件）
│   ├── CodeBlock.astro        # 代码块：构建期高亮 + 复制按钮（原生 JS）
│   ├── FaqAccordion.astro     # 原生 <details> 手风琴（零 JS）
│   ├── RoadmapBoard.astro     # 路线图筛选（原生 JS）
│   ├── Hero / ControlPlaneMock / AgentRail / Steps / Fit
│   ├── Pillars / Features / Problems / Architecture / ServerDiagram
│   ├── NotA / Quickstart / FaqSection / Roadmap / Transparency
│   ├── Demo / Section / Icon / Logo / SiteHeader / SiteFooter
├── data/                  # 全部文案（改这里即可更新页面）
│   ├── site.ts            # 元数据、导航、外链；url 来自 import.meta.env.SITE
│   ├── thesis.ts          # 首屏下沉的定位说明四条
│   ├── steps.ts           # 三步上手、适配清单、可接入运行时
│   ├── pillars.ts         # 四大支柱、9 项功能特性
│   ├── problems.ts        # 解决的问题、特别之处、不是什么
│   ├── architecture.ts    # 12 个子系统 + 客户端运行时
│   ├── quickstart.ts      # 命令片段、环境要求、npm 排障、开发文档入口
│   ├── faq.ts / roadmap.ts / telemetry.ts
├── layouts/Base.astro     # HTML 外壳：SEO 标签、JSON-LD、字体、全局样式
├── lib/
│   ├── highlight.ts       # 构建期 shell 高亮（token 化，无 HTML 拼接）
│   └── markdown.ts        # 极简单行 **粗体** 解析
├── pages/
│   ├── index.astro        # 首页
│   ├── 404.astro          # 404 页（noindex）
│   └── robots.txt.ts      # 构建期生成，域名来自 SITE_URL
└── styles/global.css      # Tailwind v4 @theme 令牌 + 组件类
public/                    # favicon、apple-touch-icon、og.jpg、封面、运行时 logo
.github/workflows/ci.yml   # lint + typecheck + build
```

## 设计系统

### 色彩：两组，用途互不重叠

改色板前先看这张表，**不要凭感觉调**：

| 组 | 令牌 | 对比度（于 `ink-900`） | 允许用途 |
| --- | --- | --- | --- |
| 文字 | `ink-100` | 15.9:1 | 大标题 |
| 文字 | `ink-200` | 10.6:1 | 小标题、强调 |
| 文字 | `ink-300` | 7.1:1 | **正文默认** |
| 文字 | `ink-400` | 4.9:1 | 元信息、12–14px 序号（AA 下限） |
| 装饰 | `ink-500` | 3.1:1 | **仅限 ≥24px 大字**（三步流程的 30px 序号） |
| 装饰 | `ink-600` ~ `ink-900` | — | 只用于边框、分隔线、表面 |

违反「文字只用 `ink-100` ~ `ink-400`」是这个项目最容易犯的错。改造前全站有 38 处正文
落在 1.8:3.7:1 之间（步骤序号 1.19:1、对照表左栏 1.82:1、chip 2.70:1），全部不达 AA。

### 组件 token

`.card` · `.btn-primary` / `.btn-ghost` · `.chip` · `.ordinal` · `.eyebrow` · `.link`

圆角只有三档：`--radius-card` 16px / `--radius-tile` 12px / `--radius-pill` 全圆。
卡片表面只有一个值 `ink-900`，边框只有一个值 `ink-700`。

### eyebrow 克制

14 个区块全部挂小标签会变成模板噪音，读者不再把它当分类信号。
**全站只用 3 处**：`FOUR PILLARS` · `UNDER THE HOOD` · `QUICKSTART`。
「FAQ」这种与标题同义的、「FIT CHECK」这种标题本身就是完整句子的，
一律不挂 eyebrow（`Section.astro` 的注释里写死了这条约定）。

### 布局家族去重

改造前 14 个区块只有 3 种模板，其中「带边框圆角卡 + 小标签 + 粗标题 + 灰字」一种
就占了 6 个区块约 27 张卡，滚动时完全无法区分。现在：

| 区块 | 家族 |
| --- | --- |
| Hero | 分栏（左文案 / 右控制平面示意） |
| 智能体条 | 单行横排小卡 |
| 三步 | 3 列编号卡 |
| 适合清单 | 2 列清单 |
| 四大支柱 / 功能特性 | 卡片网格 |
| 解决的问题 | 2 列对照表（唯一需要「行对行」语义的区块） |
| 特别之处 | 无卡片声明列表（序号 + 标题 + 正文，细线分隔） |
| 底层架构 | 网格图 + 连接线 + 2 列详情卡 |
| 不是什么 | 无卡片划掉声明（语义上就该是异类） |
| 快速开始 | 1 主卡通栏 + 2×2 备选 + 3 列底部 |
| FAQ | 原生 details 手风琴（长答案拆成多点列表） |
| 路线图 | 单列状态列表（默认折叠已上线） |
| 遥测 | 2 列卡 + 底部 chip 行 |
| 社区 | 视频 + 方形 tile 网格 |

### 交互细节

- 移动端菜单：`max-height` 过渡（`grid 0fr` 在含 padding 的容器上会解析成内容高度，不可靠）。
- 头部滚动态：单个 `.is-scrolled` 类。不要靠 JS 切 Tailwind 的 `border-ink-800` —— 它和 `border-transparent` 同层，后者在层叠顺序里赢，切了也看不见。
- `backdrop-filter` 只写标准属性，前缀由 Lightning CSS 自动补 —— 手写 `-webkit-` 会被当成重复声明吃掉标准属性。
- Chromium 滚动条：`scrollbar-color` 只对 Firefox 生效，另需 `::-webkit-scrollbar` 一套。
- FAQ 答案支持 `string | string[]`，长答案拆成多点列表。

## 设计取舍

| 决策 | 理由 |
| --- | --- |
| 站点标识用自有的「组织架构」几何标记 | 官方 logo 与品牌色属商标资产，MIT 不覆盖 |
| `banner.webp` / `og.jpg` 为自制中文图 | 替换官方英文品牌图，同时把封面从 117 KB 压到 19 KB |
| 视频封面用 `poster` 属性而非懒加载 | `<video>` 无帧时绘制不透明黑底会盖住下层 `<img>`；动态赋值 `video.poster` 在 Chromium 上不触发重绘 |
| Hero 只留 4 个元素 | 原来塞了 9 个（引言 + 两段正文 + 声明 + 三项元信息），把首屏撑到 1001px 且主标题被挤成三行。被移走的内容下沉成紧邻的独立区块 |
| 代码块换行而非横向滚动 | `overflow-x:auto` 会在 token 中间硬切（`--no-c` 这种），而这个区块的唯一目的就是「复制这条命令」 |
| 代码块用 `div` + `code` 而非 `pre` | `pre` 的 `white-space` 会把模板源码里的换行也渲染成真实换行，行高变成 3 倍 |
| 强调色只出现在图标底色，不染正文 | 四大支柱原本副标题分别是橙/蓝/紫/绿，与紧邻的 Features（全橙）互相推翻规则 |
| 路线图默认折叠 18 条「已上线」 | 对访客零信息价值却占约 1000px 高度 |
| `agentRuntimes` 是纯展示不是链接 | 原本 6 个 logo 全跳向 `#architecture`，点击无意义 |
| FAQ 首选 `<details>` 而非 JS 折叠 | 无 JS 可读性 > 折叠动画 |
| 进场动画用 rAF 扫描而非 IntersectionObserver | 快速滚动 / 锚点跳转时 IO 会整个跳过元素，导致内容永久停在 `opacity: 0` |
| `robots.txt` 改为构建期生成 | 静态文件读不到 `SITE_URL`，会与 `astro.config.mjs` 漂移 |
| Biome 只作用于 `.ts` / `.mjs` / `.json` | Biome 2.x 不理解 `.astro` 模板，会把组件用法误判为未使用导入 |
| 换行保持 CRLF，`highlight.ts` 里做 `normalizeNewlines` | 数据文件的模板字符串会带 `\r`，不处理则页面上出现断行、复制出的命令无法直接执行 |

## 内容来源

全部产品文案来自 Paperclip 官方 README 的中文版：三步上手、适配清单、四大支柱、9 项功能特性、
6 个问题、7 条特别之处、底层架构（12 子系统 + 4 类客户端运行时）、「不是什么」6 条、
快速开始 6 段命令、5 条常见问题、路线图、可观测性与遥测。

已知取舍：上游 README 把「工单系统」同时列在功能特性（✅）和路线图（⚪）里，自相矛盾。
本站的处理是——功能区改为陈述已交付的**事项 / 评论 / 附件 / 审计日志**能力，并在下方加脚注
指明完整工单系统仍在路线图中。

## 许可

代码与翻译内容以 MIT 协议发布，见 [`LICENSE`](./LICENSE)。商标声明见该文件末尾。
