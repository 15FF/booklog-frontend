import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  // css
  css: [
    "~/assets/scss/index.scss", 
    "~/assets/css/common.css", 
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
  ],

  // build
  build: {
    transpile: ['vuetify'],
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    server: {
      proxy: {
        "/api": {
          target: 'http://localhost:3000',
          rewrite: (path) => path.replace(/^\/api/, '')
        },
      },
    },
  },

  // build modules
  buildModules: ["@pinia/nuxt"],
})
