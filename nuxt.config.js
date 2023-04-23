export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'test-av100',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  env: {
    APP_API_URL: process.env.APP_API_URL,
    APP_API_HEADERS_API_KEY: process.env.APP_API_HEADERS_API_KEY,
    APP_API_HEADERS_API_KEY_VALUE: process.env.APP_API_HEADERS_API_KEY_VALUE,
    APP_AUTH_TOKEN_NAME: process.env.APP_AUTH_TOKEN_NAME,
    APP_AUTH_TOKEN_EXPIRE_TIME: process.env.APP_AUTH_TOKEN_EXPIRE_TIME,
    APP_AUTH_TOKEN_HEADERS_KEY: process.env.APP_AUTH_TOKEN_HEADERS_KEY,
    APP_AUTH_TOKEN_PREFIX: process.env.APP_AUTH_TOKEN_PREFIX,
    APP_AUTH_USER_KEY: process.env.APP_AUTH_USER_KEY,
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/get-route-path.js' },
    { src: '~/plugins/api.js' },
    { src: '~/plugins/axios.js' },
    { src: '~/plugins/auth.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',

    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    ['cookie-universal-nuxt', { alias: 'cookies' }],
  ],

  router: {
    middleware: ['auth'],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.APP_API_URL,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: process.env.NODE_ENV !== 'development',
    transpile: [
      'defu'
    ]
  },
}
