import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({

  base: '/', // Ensure this matches your deployment path
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  server: {
    port: 3000, //or any prefered port
  }
})
