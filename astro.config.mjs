import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.ASTRO_SITE_URL || 'https://sinannar.github.io',
  base: process.env.ASTRO_BASE_PATH || '/',
  output: 'static'
});
