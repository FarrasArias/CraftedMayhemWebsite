
# Crafted Mayhem Website

React + Vite + TypeScript + Material UI (Material Design 3), optimized for GitHub Pages and mobile.

## Quickstart
```bash
npm i
npm run dev
```

## Deploy to GitHub Pages
1. Create a public repo on GitHub (e.g., `crafted-mayhem-site`).
2. In `vite.config.ts`, set `base` to `'/<your-repo-name>/'`. Or only for build:
   ```bash
   VITE_GH_PAGES_BASE='/<your-repo-name>/' npm run build
   ```
3. Commit and push your code.
4. Run:
   ```bash
   npm run deploy
   ```
   It publishes `dist/` to the `gh-pages` branch.

### Custom domain
- `public/CNAME` holds `www.craftedmayhem.studio`, so every deploy keeps the custom domain.

## Structure
- `src/pages/*`: Home, Projects (with filter), Games, About, Contact.
- `src/data/projects.ts`: project data you can edit.
- Brand colours, fonts and social links live in `src/brand.ts`; `src/theme.ts` applies them to Material UI.

## Notes
- Clean URLs (`/games`, not `/#/games`). The build copies `index.html` into a folder per route and to `404.html` (see `vite.config.ts`); add new routes to the `routes` list there. Old `/#/...` links are redirected in `src/main.tsx`.
- The contact form posts to Formspree once `FORMSPREE_ID` is set in `src/pages/Contact.tsx`; until then it opens the visitor's email app.
- Link previews use `public/images/og-image.png` (1200x630) and the Open Graph tags in `index.html`.
- Lighthouse-friendly: responsive, accessible contrast, semantic headings.


## Customize images & logo
- The logo is an inline SVG in `src/components/Logo.tsx`; the favicon is `public/favicon.svg`.
- Replace image placeholders in **public/images/** and reference them in `src/data/projects.ts` and `src/data/team.ts`.

## Expandable projects
- Each project can include `image`, `gallery`, and `details`. Click “More details” to expand.

## Games tab
- Games are auto-sourced from projects with tags like `Game` or `Unity`.

## Team / Us section
- Edit `src/data/team.ts` to add people, avatars, and optional `cvUrl` and links.
