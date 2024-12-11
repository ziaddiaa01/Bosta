import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import githubPages from '@vitejs/plugin-react'; 


export default defineConfig({
  plugins: [react() , githubPages()],
  base: '/bosta/',
  server: {
    proxy: {
      '/shipments': {
        target: 'https://tracking.bosta.co',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/shipments/, '/shipments'),
      },
    },
  },
})