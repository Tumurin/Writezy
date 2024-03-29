import { defineNuxtConfig } from 'nuxt/config'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["bootstrap/dist/css/bootstrap.min.css"],
  vite: {
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
  }
})
