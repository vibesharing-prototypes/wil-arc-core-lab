# Deploy checklist (lab)

**GitHub:** [dil-wrahn/x99-lab](https://github.com/dil-wrahn/x99-lab)  
**VibeSharing:** https://vibesharing.app/dashboard/projects/b509c6bc-2537-49a2-9fb4-00632f0080c4

## Netlify

1. Import **x99-lab**, branch `main`, base directory `.`
2. Build: `npm run build` (`npm install --force` if needed) → `dist`
3. Update [`PROTOTYPES.md`](./PROTOTYPES.md) with live URL

## VibeSharing

Link the project above to the Netlify URL.

## Verify routes

`/`, `/schema-viewer`, `/workflows`, `/explorations/*`

**Note:** `archive/custom-attributes-v1*` is not deployed from this site.
