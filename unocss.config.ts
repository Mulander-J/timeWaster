import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetTypography,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import extractorPug from '@unocss/extractor-pug'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'Open Sans',
        bad: 'Bad Script'
      },
    })
  ],
  extractors: [ extractorPug() ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  rules: [],
  shortcuts: [
    ['row-center', 'flex items-center justify-center'],
    ['col-center', 'flex flex-col items-center justify-center'],
  ],
})
