// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  // @ts-ignore
  components: [
    {
      path: '~/components/ui',
      // this is required else Nuxt will autoImport `.ts` file
      extensions: ['.vue'],
      // prefix for your components, eg: UiButton
      prefix: ''
    },
  ],
  devtools: { enabled: true },
})
