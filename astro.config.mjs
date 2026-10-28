import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.kerstinbonke.de',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      // Entwürfe und Rechtsseiten ohne fertigen Text bleiben aus der Sitemap
      filter: (page) => !/\/(stimmen|impressum|datenschutz)$/.test(page),
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
