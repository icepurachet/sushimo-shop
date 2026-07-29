import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

const localApiUrl = 'http://localhost:8080'
const deployedApiUrl = 'https://sushimo-shop-iqpv.onrender.com'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const configuredApiUrl = env.VITE_API_BASE_URL || (mode === 'production' ? deployedApiUrl : localApiUrl)
  const apiBaseUrl = configuredApiUrl.endsWith('/') ? configuredApiUrl.slice(0, -1) : configuredApiUrl

  const normalizeProductionSource = {
    name: 'normalize-production-source',
    enforce: 'pre',
    transform(code, id) {
      const isSourceFile = id.includes('/src/') || id.includes('\\src\\')

      if (!isSourceFile) {
        return null
      }

      const transformedCode = code
        .replaceAll(localApiUrl, apiBaseUrl)
        .replaceAll('menu.picture', 'menu.image')
        .replaceAll('res.data[0].types_id', 'res.data[0].type_id')
        .replaceAll('res.data[0].picture', 'res.data[0].image')

      return transformedCode === code ? null : transformedCode
    }
  }

  return {
    plugins: [
      normalizeProductionSource,
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
