# Vercel Skills / agent-skills install notes

## What the docs confirm

Using Vercel's `skills` CLI, a public GitHub repo can be installed directly with:

```bash
npx skills add owner/repo
```

The docs/repo research performed for this scaffold also indicates:
- repo discovery supports `SKILL.md` at root, `skills/`, and agent-specific directories like `.pi/skills/`
- PI is one of the supported target agents

## Recommended layout in this repo

This repo uses:

```text
skills/
  roxy-seo/
    SKILL.md
```

That layout is clear, ecosystem-friendly, and matches the public skill intent.

## Expected install command after GitHub publish

```bash
npx skills add 09ashishkapoor/Roxy_SEO --skill roxy-seo -a pi
```

## Verification steps after publish

1. Run:
   ```bash
   npx skills add 09ashishkapoor/Roxy_SEO --list
   ```
2. Confirm `roxy-seo` appears.
3. Install to PI:
   ```bash
   npx skills add 09ashishkapoor/Roxy_SEO --skill roxy-seo -a pi
   ```
4. Verify the skill lands under the PI skill directory expected by your environment.

## Note on directory listing

The Vercel docs confirm direct GitHub-repo installation. A separate community/directory submission step may still be needed if you want it surfaced in a browsable public directory beyond direct install. Treat that as a post-push follow-up task.
