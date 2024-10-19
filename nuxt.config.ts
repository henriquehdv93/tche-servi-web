// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: false,
  devtools: { enabled: true },
  css: [
		'~/styles/global.scss',
	],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/ionic',
    '@pinia/nuxt',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxtjs/device',
    'nuxt-vue3-google-signin',
    'nuxt-lucide-icons'
  ],
  ionic: {
    css: {
      utilities: true,
    },
  },
  googleFonts: {
    families: {
      Poppins: true,
      // Inter: '200..700',
    }
  },

  googleSignIn: {
    clientId: 'CLIENT ID OBTAINED FROM GOOGLE API CONSOLE',
  },
  lucide: {
    namePrefix: 'lucide-icon'
  },
})
