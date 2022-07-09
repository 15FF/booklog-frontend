import { defineNuxtConfig } from 'nuxt';

const lifecycle = process.env.npm_lifecycle_event;

export default defineNuxtConfig({
  // css
  css: ["~/assets/scss/index.scss", "~/assets/css/common.css", 'animate.css/animate.min.css'],

  // build
  build: {
    transpile: lifecycle === "build" ? ["element-plus"] : [],
  },

  // build modules
  buildModules: ["nuxt-windicss", "@pinia/nuxt"],
})
