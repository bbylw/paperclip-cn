<p align="center">
  <img src="https://raw.githubusercontent.com/paperclipai/paperclip/master/doc/assets/banner.jpg" alt="Paperclip 是用来管理工作型 AI 智能体的应用。" width="720" />
</p>

<p align="center">
  <a href="#quickstart"><strong>快速开始</strong></a> &middot;
  <a href="https://docs.paperclip.ing"><strong>文档</strong></a> &middot;
  <a href="https://github.com/paperclipai/paperclip"><strong>GitHub</strong></a> &middot;
  <a href="https://discord.gg/m4HZY7xNG3"><strong>Discord</strong></a> &middot;
  <a href="https://x.com/papercliping"><strong>Twitter</strong></a> &middot;
  <a href="https://paperclip.ing"><strong>官网</strong></a>
</p>

<p align="center">
  <a href="https://github.com/paperclipai/paperclip/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue" alt="MIT License" /></a>
  <a href="https://github.com/paperclipai/paperclip/stargazers"><img src="https://img.shields.io/github/stars/paperclipai/paperclip?style=flat" alt="Stars" /></a>
  <a href="https://www.star-history.com/paperclipai/paperclip"><img src="https://api.star-history.com/badge?repo=paperclipai/paperclip" alt="Star History Rank" /></a>
  <a href="https://discord.gg/m4HZY7xNG3"><img src="https://img.shields.io/badge/discord-join-7289da" alt="Discord" /></a>
</p>

<br/>

<div align="center">
  <video src="https://github.com/user-attachments/assets/773bdfb2-6d1e-4e30-8c5f-3487d5b70c8f" width="600" controls></video>
</div>

<br/>

# Paperclip 是用来管理工作型 AI 智能体的应用。

开源的 AI 智能体团队协作编排工具。

**如果说 OpenClaw 是一名「员工」，那么 Paperclip 就是这家「公司」。**

Paperclip 是一个 Node.js 服务端加 React 界面，用来编排一支 AI 智能体团队去经营业务。自带你的智能体，分配目标，在一个仪表盘里跟踪工作进度与成本开销。

它看起来像个任务管理器。内核却是：组织架构图、预算、治理、目标对齐，以及智能体之间的协调。

**管理的是业务目标，而不是 pull request。**

|        | 步骤            | 示例                                                            |
| ------ | --------------- | ------------------------------------------------------------------ |
| **01** | 定义目标 | _「打造排名第一的 AI 笔记应用，做到 100 万美元月经常性收入（MRR）。」_                    |
| **02** | 招募团队   | CEO、CTO、工程师、设计师、市场人员——任何机器人，任何供应商。 |
| **03** | 审批并运行 | 审视战略。设定预算。一键启动。在仪表盘上监控。  |

<br/>

<div align="center">
<table>
  <tr>
    <td align="center"><strong>可接入<br/>的智能体</strong></td>
    <td align="center"><img src="https://raw.githubusercontent.com/paperclipai/paperclip/master/doc/assets/logos/openclaw.svg" width="32" alt="OpenClaw" /><br/><sub>OpenClaw</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/paperclipai/paperclip/master/doc/assets/logos/claude.svg" width="32" alt="Claude" /><br/><sub>Claude Code</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/paperclipai/paperclip/master/doc/assets/logos/codex.svg" width="32" alt="Codex" /><br/><sub>Codex</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/paperclipai/paperclip/master/doc/assets/logos/cursor.svg" width="32" alt="Cursor" /><br/><sub>Cursor</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/paperclipai/paperclip/master/doc/assets/logos/bash.svg" width="32" alt="Bash" /><br/><sub>Bash</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/paperclipai/paperclip/master/doc/assets/logos/http.svg" width="32" alt="HTTP" /><br/><sub>HTTP</sub></td>
  </tr>
</table>

<em>只要它能接收心跳信号，就算被录用。</em>

</div>

<br/>

## 如果你符合以下情况，Paperclip 就很适合你

- ✅ 你想构建**自主运转的 AI 组织**
- ✅ 你在把**许多不同的智能体**（OpenClaw、Codex、Claude、Cursor）协调整合向同一个目标推进
- ✅ 你同时开着 **20 个 Claude Code 终端**，已经搞不清各自在干什么
- ✅ 你希望智能体**7×24 小时自主运行**，但仍想在需要时对工作做审计、随时插手
- ✅ 你想**监控成本**并强制预算
- ✅ 你想要一套管理智能体的流程，**用起来像任务管理器**
- ✅ 你想**在手机上**管理这些自主运转的业务

<br/>

## 四大支柱

一个由 AI 智能体组成的组织要真正产出价值，有四件事必须到位：任务、组织、训练与基础设施。Paperclip 正是围绕这四根支柱构建的。

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/paperclipai/paperclip/1ec33ffd8b597f7e36aac3e2fbb4665b8c42dc3c/doc/assets/four-pillars-dark.png">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/paperclipai/paperclip/1ec33ffd8b597f7e36aac3e2fbb4665b8c42dc3c/doc/assets/four-pillars-light.png">
  <img src="https://raw.githubusercontent.com/paperclipai/paperclip/1ec33ffd8b597f7e36aac3e2fbb4665b8c42dc3c/doc/assets/four-pillars-light.png" alt="Paperclip 的四大支柱">
</picture>

| 支柱 | 面向人群 | 覆盖内容 |
| --- | --- | --- |
| **智能体任务管理器** — 你声明意图，智能体去执行，你验收产出。 | 所有人，日常使用 | 任务、审批与复核关卡 · 主动协作的智能体同事 · 可审计的例程与工作流 · 通过 diff、截图与测试来验收 |
| **智能体组织架构图** — 为人与智能体设定角色、权限与边界。 | 管理者 | 人 + 智能体混合的组织架构图 · 职责、委派、专业化分工 · 治理：谁能做什么 · 作用域隔离的密钥与公司边界 |
| **智能体员工培训** — 设计、训练并评估你的 AI 员工。 | 赋能者 | Skill Studio 与全公司共享的技能 · 评估与已保存的测试运行 · 主动学习闭环与质量指标 · 智能体的绩效评审 |
| **智能体操作系统** — 让工作真正跑起来的基础设施。 | IT 与平台 | 跨供应商运行时：任意模型、任意智能体 · 沙箱化、集成与 MCP 服务器 · SSO、GRC、RBAC 与成本管控 · 数据隐私、内部链路追踪采集、数据价值复利 |

<br/>

## 功能特性

<table>
<tr>
<td align="center" width="33%">
<h3>🔌 自带你的智能体</h3>
任意智能体、任意运行时，共用一张组织架构图。只要能接收心跳信号，就算被录用。
</td>
<td align="center" width="33%">
<h3>🎯 目标对齐</h3>
每个任务都能回溯到组织的使命。智能体清楚自己要做什么、为什么做。
</td>
<td align="center" width="33%">
<h3>💓 心跳机制</h3>
智能体按日程唤醒，检查工作并执行。委派关系在组织架构图中上下流转。
</td>
</tr>
<tr>
<td align="center">
<h3>💰 成本管控</h3>
每个智能体有月度预算。一旦触顶就停止。杜绝失控开销。
</td>
<td align="center">
<h3>🏢 多组织</h3>
一次部署，多个组织。数据完全隔离。一个控制平面统管你的业务组合。
</td>
<td align="center">
<h3>🎫 工单系统</h3>
每次对话都可追溯。每项决策都有解释。完整的工具调用追踪与不可篡改的审计日志。
</td>
</tr>
<tr>
<td align="center">
<h3>🛡️ 治理</h3>
随时审批录用、推翻战略、暂停或终止任意智能体。
</td>
<td align="center">
<h3>📊 组织架构图</h3>
层级、角色、汇报关系。你的智能体有上级、有头衔、有岗位职责。
</td>
<td align="center">
<h3>📱 移动端就绪</h3>
随时随地监控并管理你的自主业务。
</td>
</tr>
</table>

<br/>

## Paperclip 解决了哪些问题

| 没有 Paperclip                                                                                                                     | 用了 Paperclip                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| ❌ 你开着 20 个 Claude Code 标签页，却分不清谁在干什么。一重启就全没了。                              | ✅ 任务以工单形式管理，对话按线程组织，会话在重启后依然保留。                                                |
| ❌ 你得手动从好几个地方拼凑上下文，提醒你的机器人到底在干什么。                                     | ✅ 上下文从任务向上贯通项目目标与公司目标——你的智能体始终清楚该做什么、为什么做。                  |
| ❌ 一堆智能体配置文件杂乱无章，你还在重复造任务管理、沟通与智能体间协作的轮子。 | ✅ Paperclip 开箱即用地提供组织架构图、工单、委派与治理——所以你经营的是一家公司，而不是一堆脚本。 |
| ❌ 失控的循环白白烧掉几百美元的 token，额度还没反应过来就被打满。                           | ✅ 成本追踪让 token 预算一目了然，额度耗尽时自动节流。管理层用预算定优先级。                    |
| ❌ 你有周期性任务（客服、社媒、报表），还得记得手动启动它们。                        | ✅ 心跳机制按计划处理常规工作。管理层负责监督。                                                                |
| ❌ 你有个想法，得先找到仓库、启动 Claude Code、一直开着标签页、还得盯着它。                                | ✅ 在 Paperclip 里加个任务。你的编程智能体会一直干到做完。管理层验收成果。                              |

<br/>

## Paperclip 特别之处

Paperclip 把那些棘手的编排细节都做对了。

|                                   |                                                                                                               |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| **原子化执行。**             | 任务签出与预算执行都是原子操作，因此不会重复劳动，也不会超额支出。                      |
| **持久的智能体状态。**       | 智能体在多次心跳之间恢复同一份任务上下文，而不是每次从头开始。                     |
| **运行时技能注入。**      | 智能体能在运行时学习 Paperclip 的工作流与项目上下文，无需重新训练。                      |
| **可回滚的治理。**     | 审批关卡被强制生效，配置变更有版本记录，错误的变更可以安全回滚。        |
| **目标感知执行。**                         | 任务携带完整的目标链路，智能体始终能看到「为什么」，而不只是一个标题。                        |
| **可移植的公司模板。**   | 导出 / 导入组织、智能体与技能，自动脱敏密钥并处理命名冲突。                          |
| **真正的多组织隔离。** | 每个实体都按公司划分作用域，因此一次部署即可运行多家公司，各自数据与审计轨迹相互隔离。 |

<br/>

## 底层架构

Paperclip 是一套完整的控制平面，而非简单的封装。在你自己动手造这些之前，要知道它已经存在了：

```
┌──────────────────────────────────────────────────────────────┐
│                       PAPERCLIP SERVER                       │
│                                                              │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐  ┌───────────┐  │
│  │Identity & │  │  Work &   │  │ Heartbeat │  │Governance │  │
│  │  Access   │  │   Tasks   │  │ Execution │  │& Approvals│  │
│  └───────────┘  └───────────┘  └───────────┘  └───────────┘  │
│                                                              │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐  ┌───────────┐  │
│  │ Org Chart │  │Workspaces │  │  Plugins  │  │  Budget   │  │
│  │ & Agents  │  │ & Runtime │  │           │  │ & Costs   │  │
│  └───────────┘  └───────────┘  └───────────┘  └───────────┘  │
│                                                              │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐  ┌───────────┐  │
│  │ Routines  │  │ Secrets & │  │ Activity  │  │  Company  │  │
│  │& Schedules│  │  Storage  │  │ & Events  │  │Portability│  │
│  └───────────┘  └───────────┘  └───────────┘  └───────────┘  │
└──────────────────────────────────────────────────────────────┘
         ▲              ▲              ▲              ▲
   ┌─────┴─────┐  ┌─────┴─────┐  ┌─────┴─────┐  ┌─────┴─────┐
   │  Claude   │  │   Codex   │  │   CLI     │  │ HTTP/web  │
   │   Code    │  │           │  │  agents   │  │   bots    │
   └───────────┘  └───────────┘  └───────────┘  └───────────┘
```

### 各子系统

<table>
<tr>
<td width="50%">

**身份与访问** — 两种部署模式（可信本地或认证模式）、董事会用户、智能体 API 密钥、短时效运行 JWT、公司成员关系、邀请流程，以及 OpenClaw 引导入驻。每个变更类请求都能追溯到具体执行者。

</td>
<td width="50%">

**组织架构图与智能体** — 智能体拥有角色、头衔、汇报关系、权限与预算。适配器示例与图中对应：Claude Code、Codex、CLI 类智能体（如 Cursor/Gemini/bash）、HTTP/Webhook 类机器人（如 OpenClaw），以及外部适配器插件。只要能接收心跳信号，就算被录用。

</td>
</tr>
<tr>
<td>

**工作与任务系统** — 事项携带公司 / 项目 / 目标 / 父级链接，原子化签出并加执行锁，一等公民级别的阻塞依赖、评论、文档、附件、工作产物、标签与收件箱状态。不重复劳动，不丢失上下文。

</td>
<td>

**心跳执行** — 基于数据库的唤醒队列，支持合并、预算检查、工作区解析、密钥注入、技能加载与适配器调用。运行过程产出结构化日志、成本事件、会话状态与审计轨迹。恢复流程会自动处理孤儿运行。

</td>
</tr>
<tr>
<td>

**工作区与运行时** — 项目工作区、隔离的执行工作区（git worktree、操作员分支），以及运行时服务（开发服务器、预览 URL）。智能体每次都在正确的目录、带着正确的上下文工作。

</td>
<td>

**治理与审批** — 董事会审批工作流、带复核 / 审批阶段的执行策略、决策追踪、预算硬上限、智能体暂停 / 恢复 / 终止，以及完整的审计日志。没有你的签字，什么都不会上线。

</td>
</tr>
<tr>
<td>

**预算与成本管控** — 按公司、智能体、项目、目标、事项、供应商与模型统计 token 与成本。带作用域的预算策略，含预警阈值与硬上限。超额时自动暂停智能体并取消排队中的工作。

</td>
<td>

**例程与排程** — 用 cron、Webhook 与 API 触发的周期性任务。含并发与补跑策略。每次例程执行都会生成一条被追踪的事项，并唤醒指派的智能体——无需手动启动。

</td>
</tr>
<tr>
<td>

**插件** — 全局插件系统，含进程外 worker、能力门控的主机服务、任务调度、工具暴露与 UI 贡献。无需 fork 即可扩展 Paperclip。

</td>
<td>

**密钥与存储** — 实例级与公司级密钥、加密的本地存储、供应商托管的对象存储、附件与工作产物。敏感值不会进入 prompt，除非某次作用域内的运行明确需要。

</td>
</tr>
<tr>
<td>

**活动与事件** — 变更类操作、心跳状态变化、成本事件、审批、评论与工作产物都会记录为持久化活动，方便运维人员审计发生了什么、为什么发生。

</td>
<td>

**公司可移植性** — 导出并导入整个组织——智能体、技能、项目、例程与事项——自动脱敏密钥并处理命名冲突。一次部署，多家公司，数据完全隔离。

</td>
</tr>
</table>

<br/>

## Paperclip 不是什么

|                              |                                                                                                                      |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **不是聊天机器人。**           | 智能体有岗位，没有聊天窗口。                                                                                  |
| **不是智能体框架。**  | 我们不会告诉你怎么造智能体，而是告诉你怎么运营一家由智能体组成的公司。                                |
| **不是工作流搭建器。**  | 没有拖拽式流水线。Paperclip 建模的是公司——有组织架构图、目标、预算与治理。            |
| **不是提示词管理器。**    | 智能体自带提示词、模型与运行时。Paperclip 管理的是它们所处的组织。               |
| **不是单智能体工具。** | 这是为团队准备的。如果你只有一个智能体，大概不需要 Paperclip；如果你有二十个——那你一定需要。 |
| **不是代码审查工具。**  | Paperclip 编排的是工作，不是 pull request。审查流程请自带。                                       |

<br/>

<a id="quickstart"></a>

## 快速开始

开源。自托管。无需 Paperclip 账号。

```bash
curl -fsSLO https://paperclip.ing/install.sh
curl -fsSLO https://paperclip.ing/install.sh.sha256
if command -v sha256sum >/dev/null 2>&1; then
  sha256sum -c install.sh.sha256
else
  shasum -a 256 -c install.sh.sha256
fi
bash install.sh
```

安装器会确保系统具备 Node.js 24.11 或更高版本，在 `~/.paperclip/cli` 下安装一个受控的 Paperclip CLI，并启动交互式引导。它还可以在受支持的 Linux 与 macOS 系统上把 Paperclip 安装为后台服务。校验和能发现传输或发布环节的错误，但它与脚本同源；当你需要独立托管的来源时，请使用按发布标签或提交锁定的 GitHub 副本。

如需非交互式的受控安装：

```bash
curl -fsSL https://paperclip.ing/install.sh | bash -s -- --no-prompt --no-onboard
paperclipai onboard --yes
```

管道形式要求系统已具备受支持的 Node.js、npm 与 npx。如果需要引导安装 Node.js，请先下载并审阅 `install.sh` 再运行，以免通过管道接受任何提权的依赖安装命令。

想不永久安装任何东西就试用 Paperclip：

```bash
npx --registry https://registry.npmjs.org paperclipai onboard --yes
```

想试用一个已用 CEO 智能体初始化好的隔离手动测试实例，可以使用 `test-drive`。它始终保持在前台运行，从不安装服务，也不创建首个任务，只有在初始化成功后才打开浏览器：

```bash
ANTHROPIC_API_KEY=... npx paperclipai test-drive
OPENAI_API_KEY=... npx paperclipai test-drive --harness codex
OPENROUTER_API_KEY=... npx paperclipai test-drive \
  --harness opencode \
  --model openrouter/anthropic/claude-sonnet-4.5
```

每次不带 `--data-dir` 的运行都会获得一个独立的、保留下来的临时目录；其绝对路径会在启动时打印出来。传入 `--data-dir` 可复用同一个目录，或用 `--no-browser` 让初始化好的实例保持不打开。当从已链接的 Git worktree 中调用时，`test-drive` 还会在该 worktree 中启用任务执行。详见 [`doc/CLI.md`](https://github.com/paperclipai/paperclip/blob/master/doc/CLI.md#isolated-manual-test-drives) 了解凭证与复用行为。

> **排障：私有 npm 源 `.npmrc`**
>
> 如果因 `paperclipai`（或类似包）报 `E404` 而失败，并且你通过全局 `~/.npmrc` 使用了私有 npm 源（例如 GitHub Packages），`npx` 可能会把 `paperclipai` 解析到该私有源，而非公共 npm 源。
>
> 诊断：
>
> ```bash
> npm config get registry
> ```
>
> 变通方案（跨平台；为该命令强制使用公共 npm 源）：
>
> ```bash
> npx --registry https://registry.npmjs.org paperclipai onboard --yes
> ```

该快速开始路径现在默认采用可信本地回环模式，以获得最快的首次运行体验。如果想改用认证 / 私有模式启动，请显式选择绑定预设：

```bash
paperclipai onboard --yes --bind lan
# 或：
paperclipai onboard --yes --bind tailnet
```

如果你已经配置过 Paperclip，重新运行 `onboard` 会保留现有配置。使用 `paperclipai configure` 编辑设置。

关于锁定版本、canary 与 git-ref 安装、更新、回滚、服务管理与卸载，详见 [`doc/INSTALLING.md`](https://github.com/paperclipai/paperclip/blob/master/doc/INSTALLING.md)。

或手动安装：

```bash
git clone https://github.com/paperclipai/paperclip.git
cd paperclip
pnpm install
pnpm dev
```

这会在 `http://localhost:3100` 启动 API 服务。内置的 PostgreSQL 数据库会自动创建——无需任何配置。

> **环境要求：** Node.js 24.11+，pnpm 9.15+

<br/>

## 常见问题

**典型的部署形态是怎样的？**
在本地，单个 Node.js 进程管理一个内置的 Postgres 与本地文件存储。生产环境则把它指向你自己的 Postgres，按需自行部署。配置好项目、智能体与目标——其余的交给智能体。

如果你是独立开发者，可以用 Tailscale 随时随地访问 Paperclip。等需要了，再部署到比如 Vercel 上。

**我能运营多家公司吗？**
可以。一次部署即可运行数量不限的公司，且数据完全隔离。

**Paperclip 与 OpenClaw、Claude Code 这类智能体有何不同？**
Paperclip 是在「使用」那些智能体。它把它们编排成一家公司——有组织架构图、预算、目标、治理与问责机制。

**为什么要用 Paperclip，而不是直接把 OpenClaw 接上 Asana 或 Trello？**
智能体编排在协调「谁签出了工作」「如何维持会话」「监控成本」「建立治理」这些事上有不少门道——这些 Paperclip 都替你做好了。

（自带工单系统已在路线图中）

**智能体会持续运行吗？**
默认情况下，智能体按既定心跳与基于事件的触发器（任务指派、@提及）运行。你也可以接入 OpenClaw 这类持续运行的智能体。智能体由你提供，Paperclip 负责协调。

<br/>

## 开发

```bash
pnpm dev              # 完整开发（API + UI，监听模式）
pnpm dev:once         # 不监听文件的完整开发
pnpm dev:server       # 仅服务端
pnpm dev:mobile       # 在 :3101 为手机/平板提供预构建 UI（代理 /api → :3100）
pnpm dev:both         # 同时运行 pnpm dev 与 pnpm dev:mobile
pnpm build            # 构建全部
pnpm typecheck        # 类型检查
pnpm test             # 开销低的默认测试（仅 Vitest）
pnpm test:watch       # Vitest 监听模式
pnpm test:e2e         # Playwright 浏览器测试套件
pnpm db:generate      # 生成数据库迁移
pnpm db:migrate       # 应用迁移
```

`pnpm test` 不会运行 Playwright。浏览器测试套件单独维护，通常只在处理相关流程或 CI 中才跑。

完整的开发指南详见 [doc/DEVELOPING.md](https://github.com/paperclipai/paperclip/blob/master/doc/DEVELOPING.md)。

<br/>

## 路线图

- ✅ 插件系统（例如新增知识库、自定义追踪、队列等）
- ✅ 接入 OpenClaw / claw 风格的智能体员工
- ✅ companies.sh——导入导出整个组织
- ✅ 简易 AGENTS.md 配置
- ✅ 技能管理器、技能工作室与技能商店
- ✅ 定时例程
- ✅ 更完善的预算
- ✅ 智能体评审与审批
- ✅ 多人类用户
- ✅ 云端 / 沙箱智能体（e2b、Cloudflare、Daytona、Modal、Novita、自托管 Kubernetes）
- ✅ 产物与工作成果
- ✅ 深度规划（规划模式、带版本的计划、计划审批）
- ✅ 强制结果（看门狗、恢复动作、复核关卡）
- ✅ MCP 工具网关与应用（受治理的工具访问）
- ✅ 带按智能体访问权限的密钥管理器
- ✅ 活动日志与行为归因
- ✅ 自愈运行与自动恢复
- ✅ 智能体评估与反馈
- ⚪ 记忆 / 知识
- ⚪ MAXIMIZER 模式
- ⚪ 工作队列
- ⚪ 自组织
- ⚪ 自动组织学习
- ⚪ CEO 聊天
- 🟡 云端部署（多租户隔离与公司导入 / 导出已上线）
- ⚪ 桌面应用
- ⚪ 自带工单系统（以 Asana / Linear / Jira 作为接入点）
- ⚪ 关联应用（一键集成，例如 Vercel）

这是精简版路线图预览。完整路线图详见 [ROADMAP.md](https://github.com/paperclipai/paperclip/blob/master/ROADMAP.md)。

<br/>

## 社区与插件

在 [awesome-paperclip](https://github.com/gsxdsm/awesome-paperclip) 发现插件及更多内容

## 可观测性

Paperclip 内置可选的 OpenTelemetry 服务端自动埋点（仅追踪）。当设置了 `OTEL_EXPORTER_OTLP_ENDPOINT` 时启用，并通过标准的 `OTEL_EXPORTER_OTLP_PROTOCOL` 环境变量支持 `grpc`、`http/protobuf` 与 `http/json`。`@opentelemetry/api` 是常规的服务端依赖；SDK、自动埋点与导出器包则是可选的 peer 依赖——只有当你需要追踪时才安装。安装命令与完整环境变量参考详见 [doc/observability.md](https://github.com/paperclipai/paperclip/blob/master/doc/observability.md)。

Paperclip 还内置可选的 Sentry 错误监控，覆盖服务端和浏览器。设置 `SENTRY_DSN_FRONTEND` 为浏览器启用，`SENTRY_DSN_BACKEND` 为服务端启用——这两个变量都是可选的，旧版的 `SENTRY_DSN` 变量仍可作为任一组件的兜底。受支持的服务端 SDK 版本为 `@sentry/node@10.71.0`；它是服务端的 optional peer dependency，因此只有当你需要错误监控时才安装。浏览器 SDK `@sentry/browser` 锁定为完全相同版本。安装命令、隐私设置与完整默认采集项详见 [doc/observability.md](https://github.com/paperclipai/paperclip/blob/master/doc/observability.md#sentry-error-monitoring)。

## 遥测

Paperclip 收集匿名的使用遥测数据，帮助我们了解产品的使用方式并加以改进。我们绝不收集个人信息、事项内容、提示词、文件路径或密钥。私有仓库的引用在发送前会用每个安装实例独立的盐值做哈希。

改动已 emitting 的遥测事件的贡献者，应遵循 [遥测数据契约](https://github.com/paperclipai/paperclip/blob/master/packages/shared/src/telemetry/README.md)。
对于尚未进入生成契约的拟议第一方事件，请遵循 [遥测工作流](https://github.com/paperclipai/paperclip/blob/master/doc/TELEMETRY_WORKFLOW.md)。

遥测**默认开启**，可通过以下任一方式关闭：

| 方法               | 做法                                                     |
| -------------------- | ------------------------------------------------------- |
| 环境变量 | `PAPERCLIP_TELEMETRY_DISABLED=1`                        |
| 通用约定  | `DO_NOT_TRACK=1`                                        |
| CI 环境      | 当 `CI=true` 时自动关闭                   |
| 配置文件          | 在你的 Paperclip 配置中设置 `telemetry.enabled: false` |

## 贡献

我们欢迎贡献。详情请见 [贡献指南](https://github.com/paperclipai/paperclip/blob/master/CONTRIBUTING.md)。

<br/>

## 社区

- [Discord](https://discord.gg/m4HZY7xNG3) — 加入社区
- [Twitter / X](https://x.com/papercliping) — 关注更新与公告
- [GitHub Issues](https://github.com/paperclipai/paperclip/issues) — 缺陷与功能请求
- [GitHub Discussions](https://github.com/paperclipai/paperclip/discussions) — 想法与 RFC

<br/>

## 许可证

MIT &copy; 2026 [Paperclip Labs, Inc](https://paperclip.ing)

## Star 历史

<a href="https://www.star-history.com/?repos=paperclipai%2Fpaperclip&type=date&legend=top-left">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/chart?repos=paperclipai/paperclip&type=date&theme=dark&legend=top-left&sealed_token=hFjuwFq41bQD5cevvXVv5cTru2swWRZujwJYKlHhtBh6n0H5-VvJZW2SAlcQKB8u4KxhyEB9JqFg1yccJ8WLv9wPBcoWpWcak4gx0MYTWu_pOs2jKOaDluH7KsLeTKt6DHGkHiN3LsqV9s--MTDQcC6Xl7zV51W0-YezQXo-pVPgoFDFAGf2CY5fiP5Q" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/chart?repos=paperclipai/paperclip&type=date&legend=top-left&sealed_token=hFjuwFq41bQD5cevvXVv5cTru2swWRZujwJYKlHhtBh6n0H5-VvJZW2SAlcQKB8u4KxhyEB9JqFg1yccJ8WLv9wPBcoWpWcak4gx0MYTWu_pOs2jKOaDluH7KsLeTKt6DHGkHiN3LsqV9s--MTDQcC6Xl7zV51W0-YezQXo-pVPgoFDFAGf2CY5fiP5Q" />
    <img src="https://api.star-history.com/chart?repos=paperclipai/paperclip&type=date&legend=top-left&sealed_token=hFjuwFq41bQD5cevvXVv5cTru2swWRZujwJYKlHhtBh6n0H5-VvJZW2SAlcQKB8u4KxhyEB9JqFg1yccJ8WLv9wPBcoWpWcak4gx0MYTWu_pOs2jKOaDluH7KsLeTKt6DHGkHiN3LsqV9s--MTDQcC6Xl7zV51W0-YezQXo-pVPgoFDFAGf2CY5fiP5Q" alt="Star History Chart" />
  </picture>
</a>

<br/>

---

<p align="center">
  <sub>基于 MIT 协议开源。为想把事做成、而不是想盯着智能体的人而打造。</sub>
</p>
