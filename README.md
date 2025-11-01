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

## CI/CD

The GitHub workflow (`.github/workflows/ci.yml`) installs dependencies, type-checks, and builds on pushes/PRs to `main`. Hook your deployment platform (Vercel, Netlify, etc.) to the same commands.

## Content Guide

Voice guardrails live in `VOICE_GUIDE.md`. Long-form chronicles (3k–3.5k words) are defined in `src/data/blogPosts.data.ts` and surfaced through the Resources newsroom.
