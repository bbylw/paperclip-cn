# Paperclip 中文官网

基于 [Paperclip](https://github.com/paperclipai/paperclip) 项目 README（中文版）内容构建的中文营销站点。

> Paperclip 是用来管理工作型 AI 智能体的应用。开源的 AI 智能体团队协作编排工具。
> 如果说 OpenClaw 是一名「员工」，那么 Paperclip 就是这家「公司」。

## 技术栈

| 层 | 技术 | 版本 |
| --- | --- | --- |
| 站点框架 | [Astro](https://astro.build) | 7.3.5（静态输出 + 岛屿架构） |
| UI 框架 | [React](https://react.dev) | 19.3.0（仅用于 3 个交互岛屿） |
| 语言 | [TypeScript](https://www.typescriptlang.org) | 6.0.3（`astro/tsconfigs/strict`） |
| 样式 | [Tailwind CSS](https://tailwindcss.com) | 4.3.3（CSS-first `@theme` 配置） |
| 包管理 | [Bun](https://bun.sh) | 1.4+ |

其他：`@astrojs/react` 7、`@astrojs/sitemap` 3、`@fontsource-variable/inter` 5、
`@fontsource-variable/jetbrains-mono` 5、`@astrojs/check` 0.9。

## 常用命令

```bash
bun install        # 安装依赖
bun run dev        # 本地开发（默认 http://localhost:4321）
bun run typecheck  # astro check（类型 + 模板检查）
bun run build      # 生产构建，输出到 dist/
bun run preview    # 预览生产构建
bun run check      # typecheck + build
```

## 目录结构

```text
src/
├── components/            # 页面区块（Astro 组件）
│   ├── islands/           # React 交互岛屿（client:visible）
│   │   ├── CodeBlock.tsx      # 带复制按钮与 shell 高亮的代码块
│   │   ├── FaqAccordion.tsx   # 常见问题手风琴
│   │   └── RoadmapBoard.tsx   # 路线图状态筛选
│   ├── Hero.astro / ControlPlaneMock.astro
│   ├── AgentRail / Steps / Fit / Pillars / Features
│   ├── Problems / Architecture / ServerDiagram
│   ├── NotA / Quickstart / FaqSection / Roadmap
│   ├── Transparency / Demo / Section / Icon
│   └── SiteHeader / SiteFooter
├── data/                  # 全部文案（与 README 一一对应，便于维护）
│   ├── site.ts            # 站点元数据、导航、外部链接
│   ├── steps.ts           # 三步上手、适配判断、智能体运行时
│   ├── pillars.ts         # 四大支柱、9 项功能特性
│   ├── problems.ts        # 解决的问题、特别之处、不是什么
│   ├── architecture.ts    # 控制平面子系统与说明
│   ├── quickstart.ts      # 快速开始命令片段
│   ├── faq.ts / roadmap.ts / telemetry.ts
├── layouts/Base.astro     # HTML 外壳：SEO 标签、字体、全局样式、进场动画
├── lib/markdown.ts        # 极简单行 **粗体** 解析
├── pages/index.astro      # 首页（按顺序组合所有区块）
└── styles/global.css      # Tailwind v4 @theme 设计令牌 + 组件类
public/                    # favicon、社交分享图 og.jpg（1200×628）、视频封面 banner.webp、智能体 logo
```

## 内容与来源

所有产品文案均来自 Paperclip 官方 README 的中文版，包括：三步上手流程、适合判断清单、
四大支柱、9 项功能特性、解决的 6 个问题、7 条特别之处、底层架构（12 个子系统 + 4 类客户端
运行时）、「不是什么」6 条、快速开始的 6 段命令、5 条常见问题、路线图状态、可观测性与遥测说明。

如需修改文案，只需编辑 `src/data/` 下的数据文件，页面会自动更新。

## 部署

站点为纯静态输出，`dist/` 可直接托管到任意静态平台（Vercel / Netlify / Cloudflare Pages / GitHub Pages）。

部署前请修改：

1. `astro.config.mjs` 中的 `site`（当前为 `https://paperclip.ing`，影响 canonical 与 sitemap）
2. `public/robots.txt` 中的 Sitemap 地址

## 许可

文案与品牌归 [Paperclip Labs, Inc](https://paperclip.ing) 所有，项目以 MIT 协议开源。
本中文站点同样以 MIT 协议发布。
