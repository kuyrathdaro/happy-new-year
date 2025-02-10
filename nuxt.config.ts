import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxt/icon'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  icon: {
    serverBundle: {
      collections: ['mdi']
    }
  },
  app: {
    head: {
      script: [
        { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/329180/fscreen%401.0.1.js", async: true },
        { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/329180/Stage%400.1.4.js", async: true },
        { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/329180/MyMath.js", async: true },
      ]
    }
  },
})