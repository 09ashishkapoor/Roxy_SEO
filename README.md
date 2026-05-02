# roxy-seo

![Roxy SEO social card](assets/roxy-social-card.png)

Public home for **Roxy SEO**:
- an installable agent skill for SEO, AEO, GEO, AI search visibility, crawl/indexation audits, structured data, and content strategy
- a companion **PI extension package** scaffold for npm distribution

## Planned public targets

- **GitHub repo:** `09ashishkapoor/Roxy_SEO`
- **npm package:** `@unseated7635/pi-roxy-seo`

## Repo layout

- `skills/roxy-seo/SKILL.md` - public skill for Vercel skills / agent-skills ecosystem
- `packages/pi-roxy-seo/` - PI extension package scaffold
- `docs/` - install and publish notes

## Install the skill with Vercel skills

Install directly from the public GitHub repo:

```bash
npx skills add 09ashishkapoor/Roxy_SEO --skill roxy-seo -a pi
```

To inspect available skills first:

```bash
npx skills add 09ashishkapoor/Roxy_SEO --list
```

## PI extension package

The npm package scaffold lives in `packages/pi-roxy-seo`.

Install after the npm package is published:

```bash
npm install @unseated7635/pi-roxy-seo
```

Then load the extension in PI/OMP using an explicit extension path or config entry.

## Status

This repository is structured for public release as `09ashishkapoor/Roxy_SEO`. The npm package is published separately as `@unseated7635/pi-roxy-seo`.

## Release Checklist

```bash
git push --force-with-lease origin main
npx skills add 09ashishkapoor/Roxy_SEO --list
npx skills add 09ashishkapoor/Roxy_SEO --skill roxy-seo -a pi
```
