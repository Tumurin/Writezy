import { defineNuxtConfig } from 'nuxt/config'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    css: { // 定義全域共用 Sass / SCSS 變數
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/scss/custom/_color.scss";
            @import "@/assets/scss/stylesheets/_variables.scss";
          `
        }
      }
    },
    define: {
      "process.env.DEBUG": false,
    },
  },
  runtimeConfig: {
    public: {
      googleOauthId: process.env.NUXT_PUBLIC_GOOGLE_OAUTH_ID,
    },
    googleOauthSecret: process.env.NUXT_GOOGLE_OAUTH_SECRET,
    mongodbUri: process.env.NUXT_MONGODB_URI,
    jwtAccessTokenSecret: process.env.NUXT_JWT_ACCESS_TOKEN_SECRET,
    jwtRefreshTokenSecret: process.env.NUXT_JWT_REFRESH_TOKEN_SECRET,
  },
  css: ["@/assets/scss/app.scss"],
  postcss: { // CSS 屬性加上瀏覽器相容性前綴
    plugins: {
        autoprefixer: true
    }
  },
  modules: ['nuxt-icon']
})
