interface ImportMetaEnv {
  readonly VITE_PORT: number
  readonly VITE_APP_MODE: string
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_SHORT_TITLE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
