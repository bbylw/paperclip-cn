import type { APIRoute } from 'astro';
import { site } from '../data/site';

/**
 * 构建期生成 robots.txt，使 Sitemap 地址与 site.url（SITE_URL）保持单一来源。
 * 对应 public/robots.txt 已被移除——静态文件无法读取环境变量。
 */
export const GET: APIRoute = () =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap-index.xml\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
