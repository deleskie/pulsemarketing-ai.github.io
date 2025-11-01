# Pulse Marketing AI Site

Marketing microsite that showcases the Pulse Marketing AI platform with launch concepts, pricing programs, and five long-form chronicles.

## Getting Started

```bash
npm install
npm run dev
```

The site is built with Vite + React + Sass. Linting uses `tsc --noEmit`.

## Production Build

```bash
npm run build
npm run preview   # optional: serve the production bundle locally
```

## Testing

```bash
npm run lint
npm run test:e2e
```

Playwright spins up the dev server automatically (port 4173) and stores artifacts under `playwright-report/`.
Run `npx playwright install` once to download browsers locally.

## CI/CD & Deployment

- `.github/workflows/ci.yml` runs linting, end-to-end tests, and the production build on every push/PR.
- `.github/workflows/pages.yml` publishes the `dist/` bundle to GitHub Pages whenever `main` updates. Enable Pages in the repo settings (`Deploy from GitHub Actions`) the first time you push. The workflow sets `VITE_BASE_PATH` to `/<repo-name>/`; adjust that value if you map a custom domain.

## Content Guide

Voice guardrails live in `VOICE_GUIDE.md`. Long-form chronicles (3k–3.5k words) are defined in `src/data/blogPosts.data.ts` and surfaced through the Resources newsroom.
