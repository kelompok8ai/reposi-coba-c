# AGENTS.md

## Cursor Cloud specific instructions

This is a single-service **Vite + React 18 + TypeScript + Tailwind** frontend SPA (no backend, no database). All data is mock data / persisted to browser `localStorage` (key `banksumut-director-dinas`); there are no external services to run.

- Dependencies are installed by the startup update script (`npm ci`). Node 22 is available by default.
- Run/build/preview commands are defined in `package.json` scripts:
  - Dev server: `npm run dev` (Vite, `--host`, defaults to port `5173`, falls back to another port if busy).
  - Build (includes `tsc` typecheck): `npm run build`.
  - Preview production build: `npm run preview`.
- There is **no lint script and no ESLint config**; type checking happens as part of `npm run build` (`tsc -b`).
- `vite.config.ts` sets `server.open: true`. In a headless VM this simply fails silently to launch a browser — the dev server still runs and serves correctly; navigate to the URL manually.
- Core interactive feature: the "Jadwal Dinas Direktur" (Director Travel Schedule) section, where schedules are added/edited/deleted and saved to `localStorage`.
