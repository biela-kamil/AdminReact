/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_REACT_APP_API_URL: string
    readonly VITE_REACT_APP_TITLE: string
    readonly VITE_REACT_APP_ENV: string
    readonly VITE_REACT_APP_I18N_DEBUG: boolean
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
