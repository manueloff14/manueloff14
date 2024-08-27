import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://manueloff14.github.io',
  base: '',
  integrations: [tailwind()]
});