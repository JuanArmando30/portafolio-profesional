import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' hace que el sitio funcione igual en GitHub Pages, Vercel o Netlify
export default defineConfig({
  plugins: [react()],
  base: './',
})
