import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import compress from 'vite-plugin-compression'

// [guide](https://vitejs.dev/config/)
export default defineConfig({
  server: {
    port:3600
  },
  plugins: [
      vue(),
      WindiCSS(),
      compress()
  ]
})
