import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig, splitVendorChunkPlugin } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  resolve: {
    alias: {
      api: path.resolve(__dirname, 'src', 'api'),
      assets: path.resolve(__dirname, 'src', 'assets'),
      components: path.resolve(__dirname, 'src', 'components'),
      providers: path.resolve(__dirname, 'src', 'providers'),
      router: path.resolve(__dirname, 'src', 'router'),
      routes: path.resolve(__dirname, 'src', 'routes'),
      style: path.resolve(__dirname, 'src', 'style'),
      utils: path.resolve(__dirname, 'src', 'utils'),
    },
  },
})
