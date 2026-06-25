import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://websitebusiness.hu',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
