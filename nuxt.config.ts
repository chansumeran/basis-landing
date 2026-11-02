import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@vercel/analytics/nuxt'],
  css: ['~/assets/css/main.css', '~/assets/css/landing.css'],
  runtimeConfig: {
    public: {
      // The site's public origin, e.g. https://basis.app. Social previews, the canonical link and
      // the sitemap need absolute URLs. NUXT_PUBLIC_SITE_URL wins; on Vercel it falls back to the
      // project's production domain.
      siteUrl: process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : '',
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Private crypto trading journal for iOS — basis',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0A0B0D', media: '(prefers-color-scheme: dark)' },
        { name: 'theme-color', content: '#F5F5F2', media: '(prefers-color-scheme: light)' },
      ],
      // ?v= busts browsers' favicon cache, which otherwise keeps showing Nuxt's default icon
      // from the same URL. Bump it whenever the icons change.
      link: [
        { rel: 'icon', href: '/favicon.ico?v=5', sizes: '16x16 32x32' },
        { rel: 'icon', href: '/favicon.svg?v=5', type: 'image/svg+xml' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png?v=5' },
      ],
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ]
  }
})
