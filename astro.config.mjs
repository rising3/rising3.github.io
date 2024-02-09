import { defineConfig } from 'astro/config';
// import relativeLinks from "astro-relative-links";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://rising3.github.io',
  outDir: './dist',
//  integrations: [relativeLinks(), mdx(), sitemap(), tailwind()]
  integrations: [mdx(), sitemap(), tailwind()]
});