import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',
  base: '/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: 'src/index.html'
    }
  },
  publicDir: '../public',
  server: {
    open: true,
    watch: {
      usePolling: false,
      interval: 100
    },
    hmr: true
  }
})
