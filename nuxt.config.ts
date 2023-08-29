import path from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  css: ['@/assets/scss/style.scss'],
  nitro: {
    output: {
      publicDir: path.join(__dirname, 'dist'),
    },
  },
})
