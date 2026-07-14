// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// PENDIENTE: sustituir por el dominio definitivo cuando exista.
// URL provisional basada en el nombre del proyecto en Cloudflare Pages.
const SITE_URL = 'https://mai-softwares-web.pages.dev';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es', en: 'en' },
      },
    }),
  ],
});
