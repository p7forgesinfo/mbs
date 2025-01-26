// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: {
    enabled: true
  },
  modules: [
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@nuxt/image',
    'nuxt-svgo'
  ],
  typescript: {
    typeCheck: true
  },
  css: [
    '~/assets/css/main.scss',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/css/_mixins.scss";',
        },
      },
    },
  },
  imports: {
    dirs: [
      'types/*.ts',
      'store/*.ts',
      'types/**/*.ts',
    ],
  },
})