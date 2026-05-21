# Custom attributes — Lab prototype

**Repository:** [x99-lab](https://github.com/dil-wrahn/x99-lab)  
**VibeSharing:** [Lab project](https://vibesharing.app/dashboard/projects/b509c6bc-2537-49a2-9fb4-00632f0080c4)  
**Scope:** Lab home, workflows (experimental), explorations (BOS, form preview, permission cards, vision archives). Not for milestone stakeholder demos.

## Deploy

| Item | Value |
|------|--------|
| **GitHub** | `dil-wrahn/x99-lab`, branch `main`, repo root (no base directory) |
| **Netlify** | Site linked to this repo; publish `dist` after `npm run build` |
| **Live URL** | _Set in VibeSharing / Netlify — paste here when stable_ |
| **VibeSharing** | https://vibesharing.app/dashboard/projects/b509c6bc-2537-49a2-9fb4-00632f0080c4 |

**Build:** `npm install` (use `npm install --force` if Atlas tarball integrity fails) → `npm run build`.

## Sibling prototypes

| Prototype | GitHub | VibeSharing |
|-----------|--------|-------------|
| **MVP** | [x99-mvp](https://github.com/dil-wrahn/x99-mvp) | [MVP project](https://vibesharing.app/dashboard/projects/06369505-d472-46b0-8df9-b86d24b2c3b3) |
| **Vision** | [x99-vision](https://github.com/dil-wrahn/x99-vision) | [Vision project](https://vibesharing.app/dashboard/projects/31318a96-b6bd-40db-8aac-4408da2dd2a8) |

## `archive/` folder

Historical snapshots (`custom-attributes-v1a` … `v1c`) and frozen vision copies are **reference only** — not built by this repo’s main Netlify site.

## Product docs

Canonical requirements: [Confluence — Custom attributes prototype docs](https://diligentbrands.atlassian.net/wiki/spaces/RCP/folder/6953959468). Local copies under `src/docs/`.

## CI

GitHub Actions build checks: **TBD** (see `README.md`).
