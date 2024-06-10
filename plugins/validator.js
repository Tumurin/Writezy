import validator from 'validator'

export default defineNuxtPlugin((_nuxtApp) => {
  return {
    provide: {
      validator
    }
  }
})
