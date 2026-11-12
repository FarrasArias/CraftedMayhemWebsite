import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'

// Client-side routes. GitHub Pages only serves real files, so after each build we
// copy index.html into a folder per route (clean URLs like /games load directly)
// and to 404.html (unknown paths still load the app, which shows its 404 page).
const routes = ['games', 'projects', 'about', 'contact']

function spaPages(): Plugin {
    let outDir = 'dist'
    return {
        name: 'spa-pages',
        apply: 'build',
        configResolved(config) {
            outDir = resolve(config.root, config.build.outDir)
        },
        closeBundle() {
            const index = resolve(outDir, 'index.html')
            for (const r of routes) {
                mkdirSync(resolve(outDir, r), { recursive: true })
                copyFileSync(index, resolve(outDir, r, 'index.html'))
            }
            copyFileSync(index, resolve(outDir, '404.html'))
        },
    }
}

export default defineConfig({
    plugins: [react(), spaPages()],
    base: '/',
})
