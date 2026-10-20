# Launchpad — Deployment Foundations

Next.js App Router starter for the internship Foundations assignment.

## Routes
- `/` — overview
- `/about` — architecture placeholder
- `/settings` — settings placeholder
- `/health` — fetches and renders `/api/health`
- `/api/health` — JSON health endpoint
- `not-found` — shared 404 page

No detailed product screen specification was provided, so About and Settings are documented placeholders to be replaced or extended when the spec is available.

## Requirements
Node.js 20.9+ (Node.js 22 LTS recommended) and npm.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Validation
```bash
npm run typecheck
npm run lint
npm run build
```

## Environment variables
`.env.example` contains an optional public base URL placeholder. The health page uses a same-origin request and does not require environment variables. Never commit real `.env` files, tokens, or secrets.

## Deploy to Vercel
1. Push this project to a GitHub repository.
2. In Vercel, select Add New → Project and import the repository.
3. Keep framework preset as Next.js and root directory as `./`.
4. Use the standard Next.js build command `npm run build`; do not set a static output directory.
5. Deploy, then verify `/`, `/health`, `/about`, `/settings`, and `/api/health`.
6. Push a new commit to confirm Git-connected deployments update the preview/deployment.
Vercel authorization must be completed using an account with access to the target repository. Do not put credentials in source code.

## Design/accessibility
Tailwind CSS 3, CSS custom-property design tokens, semantic headings, labelled navigation, visible focus indicators, and responsive utility classes are included.
