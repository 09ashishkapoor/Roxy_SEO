# @unseated7635/pi-roxy-seo

Companion **PI extension scaffold** for the public **Roxy SEO** skill.

## What this package is

This package is a minimal, publishable PI/OMP extension scaffold that:
- proves the npm packaging shape for a PI extension
- exposes an extension entry through `omp.extensions`
- registers a lightweight `roxy-seo-about` command
- publishes compiled JavaScript and TypeScript declarations from `dist/`

## What this package is not

This package does **not** replace the full skill. Install the companion GitHub-hosted skill separately:

```bash
npx skills add 09ashishkapoor/Roxy_SEO --skill roxy-seo -a pi
```

## Install after publish

```bash
npm install @unseated7635/pi-roxy-seo
```

## Load the extension

Examples:

```bash
omp --extension ./node_modules/@unseated7635/pi-roxy-seo/dist/index.js
```

Or add the path to your OMP/PI extension config.

## Intended pairing

Use this package together with the public GitHub-hosted skill from:

`https://github.com/09ashishkapoor/Roxy_SEO`

## Notes

- Version is scaffold-only until first real publish.
- This repo intentionally stops before `npm publish` in the current task scope.
