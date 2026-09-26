import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

/**
 * 站点域名 —— 全站唯一的来源。
 *
 * Astro 会把它注入 `import.meta.env.SITE`，供 src/data/site.ts 读取，
 * 从而驱动 canonical / og:url / robots.txt / sitemap，避免多处硬编码漂移。
 *
 * 部署前请设置环境变量：
 *   SITE_URL=https://你的域名 bun run build
 *
 * 注意：本项目是 Paperclip 的**非官方社区中文翻译站**，
 * 绝不可把 SITE_URL 设为 https://paperclip.ing（官方域名）。
 */
const SITE_URL = process.env.SITE_URL ?? 'https://paperclip-cn.example.com';

if (!process.env.SITE_URL) {
  console.warn(
    [
      '',
      `  ⚠  未设置 SITE_URL，已回退到占位域名 ${SITE_URL}`,
      '     部署前请执行：SITE_URL=https://你的域名 bun run build',
      '     切勿设为 https://paperclip.ing（官方域名，会造成 canonical 冲突）',
      '',
    ].join('\n'),
  );
}

if (/^https?:\/\/(www\.)?paperclip\.ing\/?$/.test(SITE_URL)) {
  throw new Error(
    `SITE_URL 不能指向官方域名 paperclip.ing（本项目为非官方社区翻译站）。当前值：${SITE_URL}`,
  );
}

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
