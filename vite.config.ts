import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';
import compress from 'vite-plugin-compression';
import * as path from 'path';

// [guide](https://vitejs.dev/config/)
export default defineConfig({
  plugins: [vue(), WindiCSS(), compress()],
  server: {
    port: 3600,
  },
  base: '/timeWaster',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '#': path.resolve(__dirname, './src/views'),
      $: path.resolve(__dirname, './src/components'),
    },
  },
});
