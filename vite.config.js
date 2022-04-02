import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), WindiCSS()],
  base: './',
  server: {
    proxy: {
      '/oauth': {
        target: 'https://aip.baidubce.com/',
        changeOrigin: true
      },
      '/rest': {
        target: 'https://aip.baidubce.com/',
        changeOrigin: true
      },
      '/api': {
        target: 'http://192.168.110.155:4000',
        changeOrigin: true
      }
    }
  }
})
