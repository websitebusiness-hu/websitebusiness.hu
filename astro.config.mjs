import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://websitebusiness.hu',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/404/'),
      namespaces: {
        news: false,
        video: false,
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
