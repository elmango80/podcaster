import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production'

  return {
    plugins: [react(), createHtmlPlugin({ minify: isProduction })],
    resolve: {
      alias: {
        src: path.resolve(__dirname, './src'),
      },
    },
    server: {
      watch: {
        ignored: ['**/coverage/**'],
      },
    },
    build: {
      cssMinify: isProduction,
      minify: isProduction,
      sourcemap: isProduction ? 'inline' : true,
      emptyOutDir: true,
      rollupOptions: {},
    },
  }
})
