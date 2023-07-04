import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import topLevelAwait from 'vite-plugin-top-level-await';

const prodBase = '/timeWaster';

// https://vitejs.dev/config/
export default defineConfig({
  base: prodBase,
  plugins: [
    react(),
    topLevelAwait({
       // The export name of top-level await promise for each chunk module
       promiseExportName: '__tla',
       // The function to generate import names of top-level await promise in each chunk module
       promiseImportName: i => `__tla_${i}`
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@as': path.resolve(__dirname, 'assembly')      
    }
  },
  optimizeDeps: { // 👈 optimizedeps
    esbuildOptions: {
      target: "esnext", 
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis'
      },
      supported: { 
        bigint: true 
      },
    }
  },
  build: {
    sourcemap: false,
    target: ["esnext"], // 👈 build.target
  },
});
