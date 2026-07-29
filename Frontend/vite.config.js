import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

const localApiUrl = 'http://localhost:8080'
const deployedApiUrl = 'https://sushimo-shop-iqpv.onrender.com'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const apiBaseUrl = (env.VITE_API_BASE_URL || (mode === 'production' ? deployedApiUrl : localApiUrl)).replace(/\/+$/, '')

  const replaceLocalApiUrl = {
    name: 'replace-local-api-url',
    enforce: 'pre',
    transform(code, id) {
      const isSourceFile = id.includes('/src/') || id.includes('\\src\\')

      if (!isSourceFile || !code.includes(localApiUrl)) {
        return null
      }

      return code.replaceAll(localApiUrl, apiBaseUrl)
    }
  }

  return {
    plugins: [
      replaceLocalApiUrl,
      vue(),
      vueDevTools(),
    ],
    server: {
      host: '0.0.0.0',
      port: process.env.PORT || 4173
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
  }
})
