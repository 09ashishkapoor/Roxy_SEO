# npm publish notes for @ashish/pi-roxy-seo

## Package path

```bash
cd packages/pi-roxy-seo
```

## Pre-publish checks

1. Confirm package name availability on npm.
2. Confirm you are logged in to npm with the account that owns the `@ashish` scope.
3. Review package contents:
   ```bash
   npm pack --dry-run
   ```
4. Confirm the tarball includes `dist/index.js` and `dist/index.d.ts`.
5. If needed, test local install in another folder.

## Publish command

Because the package is scoped and intended to be public:

```bash
npm publish --access public
```

## Post-publish verification

1. Open the npm package page.
2. Install it in a test project.
3. Load the extension by explicit path.
4. Confirm `roxy-seo-about` is available in the PI/OMP environment.

## Current scope

This task stops before publishing. These notes are for the later release step.
