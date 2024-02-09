import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://rising3.github.io',
  base: '/rising.github.io/docs',
  outDir: './docs',
  integrations: [mdx(), sitemap(), tailwind()]
});