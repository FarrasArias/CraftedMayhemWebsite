
# Crafted Mayhem — Website

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
- Add your `CNAME` file to `public/` or to the root of the gh-pages branch.

## Structure
- `src/pages/*` — Home, Projects (with filter), About, Contact.
- `src/data/projects.ts` — Project data you can edit.
- Colors are set in `src/theme.ts` (`#8714fa` primary, `#f07d13` secondary).

## Notes
- HashRouter prevents 404s on GitHub Pages.
- Lighthouse-friendly: responsive, accessible contrast, semantic headings.


## Customize images & logo
- Replace **public/images/logo.svg** with your logo (same name).
- Replace image placeholders in **public/images/** and reference them in `src/data/projects.ts` and `src/data/team.ts`.

## Expandable projects
- Each project can include `image`, `gallery`, and `details`. Click “More details” to expand.

## Games tab
- Games are auto-sourced from projects with tags like `Game` or `Unity`.

## Team / Us section
- Edit `src/data/team.ts` to add people, avatars, and optional `cvUrl` and links.
