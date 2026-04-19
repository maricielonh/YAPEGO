import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/YAPEGO/',// 👈 nombre de tu repositorio
  plugins: [
    tailwindcss(),
  ],
})