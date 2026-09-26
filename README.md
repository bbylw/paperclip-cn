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

站点为纯静态输出，`dist/` 可托管到任意静态平台（Cloudflare Pages / Vercel / Netlify / GitHub Pages）。

**部署前必须设置 `SITE_URL`**——它是全站域名的唯一来源，驱动 canonical、`og:url`、sitemap 与 `robots.txt`：

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

## 设计取舍

| 决策 | 理由 |
| --- | --- |
| 站点标识用自有的「组织架构」几何标记 | 官方 logo 与品牌色属商标资产，MIT 不覆盖 |
| `banner.webp` / `og.jpg` 为自制中文图 | 替换官方英文品牌图，同时把封面从 117 KB 压到 19 KB |
| 视频封面用 `poster` 属性而非懒加载 | `<video>` 无帧时绘制不透明黑底会盖住下层 `<img>`；动态赋值 `video.poster` 在 Chromium 上不触发重绘 |
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
