import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    // Bind a todas as interfaces (0.0.0.0) garante acesso de localhost, 127.0.0.1 e rede
    host: '0.0.0.0',
    strictPort: false,
  },
})
