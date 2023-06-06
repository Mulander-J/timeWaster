import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VitePWA } from 'vite-plugin-pwa'

const prodBase = '/timeWaster'

export default ({ mode }: any) => {
  const isProd = /stg|stage|prod/i.test(mode)

  const root = process.cwd()
  const env = loadEnv(mode, root)
  const { VITE_PORT, VITE_APP_TITLE, VITE_APP_SHORT_TITLE } = env

  return defineConfig({
    base: isProd ? prodBase : '',
    server: {
      port: Number(VITE_PORT)
    },
    plugins: [
      Vue(),
      // https://github.com/antfu/unocss
      // see unocss.config.ts for config
      Unocss(),
      // https://github.com/antfu/unplugin-auto-import
      AutoImport({
        imports: [
          'vue',
          'vue-router',
          '@vueuse/core'
        ],
        dts: 'src/types/auto-imports.d.ts',
        dirs: [
          './src/composables',
          './src/hooks',
        ],
        resolvers: [],
        vueTemplate: true,
      }),
      // https://github.com/antfu/unplugin-vue-components
      Components({
        // allow auto load markdown components under `./src/components/`
        extensions: ['vue'],
        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/],
        dts: 'src/types/components.d.ts',
        resolvers: []
      }),
      VitePWA({
        registerType: 'autoUpdate',
        manifest: {
          name: VITE_APP_TITLE,
          short_name: VITE_APP_SHORT_TITLE,
          icons: [
            {
              src: prodBase +'/img/icons/192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: prodBase + '/img/icons/192x192.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        },
        devOptions: {
          enabled: false
        }
      })
    ],
    resolve: {
      alias: {
        '@/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
    build: {
      minify: 'terser',
      chunkSizeWarningLimit: 1500,
      reportCompressedSize: !isProd,
      sourcemap: !isProd,
      terserOptions: {
        compress: {
          drop_console: isProd,
          drop_debugger: isProd,
        },
      },
      commonjsOptions: {
        transformMixedEsModules: true,
      }
    }
  })
}
