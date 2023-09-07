import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'import.meta.vitest': 'undefined',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    includeSource: ['src/**/*.{js,ts}'],
  },
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),

    quasar(),
  ],
  server: {
    host: true,
    strictPort: true,
    port: 5173,
  },
})
