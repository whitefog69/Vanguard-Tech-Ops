# Vanguard Tech Ops

Source for [vanguardtechops.com](https://vanguardtechops.com), built with React 19, Vite 6, React Router 7 and Tailwind CSS 4.

## Run locally

1. `npm install`
2. `npm run dev` (http://localhost:3000)

The dev server uses Cloudflare's Turnstile test key when no site key is set.

## Deploy

Every push to `main` is built by GitHub Actions and published to GitHub Pages. The workflow reads the public Turnstile site key from the `TURNSTILE_SITE_KEY` repository variable, and the build fails if it is missing.

## Backend

The contact form posts to a Vercel function at `https://vanguard-backend.vercel.app/api/contact`. Its code lives only in the private `whitefog69/Vanguard-Backend` repo.
