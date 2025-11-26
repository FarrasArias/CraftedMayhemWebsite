
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Update base to '/<your-repo-name>/' when deploying to GitHub Pages
    base: process.env.VITE_GH_PAGES_BASE || 'https://github.com/FarrasArias/CraftedMayhemWebsite.git',
})
