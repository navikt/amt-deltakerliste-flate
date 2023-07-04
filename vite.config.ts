import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteMockServe } from 'vite-plugin-mock'
import EnvironmentPlugin from 'vite-plugin-environment'
import { rollupImportMapPlugin } from 'rollup-plugin-import-map'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import terser from '@rollup/plugin-terser'
import { resolve } from 'path'
import importmap from './importmap.json'

export default ({ command }) => ({
  plugins: [
    react(),
    terser(),
    cssInjectedByJsPlugin(),
    viteMockServe({
      mockPath: 'mock',
      localEnabled: command === 'serve'
    }),
    {
      ...rollupImportMapPlugin([importmap]),
      enforce: 'pre',
      apply: 'build'
    },
    EnvironmentPlugin({ NODE_ENV: process.env.NODE_ENV || 'development' })
  ],
  build: {
    manifest: true,
    rollupOptions: {
      input: resolve(__dirname, 'src/Mikrofrontend.tsx'),
      preserveEntrySignatures: 'exports-only',
      output: {
        entryFileNames: 'bundle.js',
        format: 'es'
      }
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    deps: {
      inline: ['@testing-library/user-event']
    }
  }
})
