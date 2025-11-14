// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://brayancardenas.github.io',
  base: '/portfolio/',
  output: 'static',
  integrations: [react()],
});