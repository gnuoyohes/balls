import { defineConfig, loadEnv } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    build: {
      target: 'esnext' //browsers can handle the latest ES features
    },
    base: "/balls/",
    plugins: [
      tailwindcss(),
    ],
  })