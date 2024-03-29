import vue3GoogleLogin from "vue3-google-login";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const { googleOauthId: GOOGLE_CLIENT_ID } = config.public;

  nuxtApp.vueApp.use(vue3GoogleLogin, {
    clientId: GOOGLE_CLIENT_ID,
  });
});
