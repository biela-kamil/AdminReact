import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(({}) => {
  return {
    build: {
      outDir: 'build'
    },
    plugins: [react(
      {
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: ['@emotion/babel-plugin']
        }
      }
    )],
    resolve: {
      alias: {}
    }
  }
})
