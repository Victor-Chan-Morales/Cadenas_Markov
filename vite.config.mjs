import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Cadenas_Markov/',  // 👈 igual que antes
  build: {
    outDir: 'docs'        // 👈 genera el build en /docs
  }
})
