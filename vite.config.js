import { defineConfig, loadEnv } from 'vite'

export default defineConfig({
    build: {
      target: 'esnext' //browsers can handle the latest ES features
    },
    base: "/balls/"
  })