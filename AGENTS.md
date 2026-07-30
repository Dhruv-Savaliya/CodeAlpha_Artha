# Artha — Agent Instructions

This file provides operating instructions for AI coding agents (Cursor, Copilot, etc.) working in the Artha repository.

## Project Context

**Artha** is a personal finance platform monorepo built with Turborepo, pnpm, Next.js, and TypeScript. The project follows ticket-driven development with architecture decisions made by the Engineering Manager.

## Before You Start

1. Read the current engineering ticket carefully — implement **only** what it specifies.
2. Review `docs/00_Project_Principles.md` for engineering standards.
3. Check `docs/05_Development_Roadmap.md` for phase context.
4. Check `docs/06_Architecture_Decisions.md` for recorded decisions.

## Repository Structure

```
apps/web/          → Next.js frontend (port 3000)
packages/ui/       → Shared React components (@repo/ui)
packages/eslint-config/   → Shared ESLint configs
packages/typescript-config/ → Shared tsconfig presets
docs/              → Project documentation
```

## Commands

Run from the repository root:

| Command | Purpose |
|---|---|
| `pnpm install` | Install dependencies |
| `pnpm run dev` | Start development servers |
| `pnpm run build` | Build all packages |
| `pnpm run lint` | Lint all packages |
| `pnpm run check-types` | Type-check all packages |
| `pnpm run format` | Format with Prettier |

Filter to a single package:

```bash
pnpm exec turbo run build --filter=web
```

## Rules for Agents

### Do

- Follow the current ticket's requirements, constraints, and stop conditions exactly.
- Match existing code conventions (naming, imports, config patterns).
- Run `build`, `lint`, and `check-types` before marking a ticket complete.
- Keep changes minimal and focused on the ticket scope.
- Use `workspace:*` for internal package dependencies.
- Document significant decisions in `docs/06_Architecture_Decisions.md`.

### Do Not

- Install packages unless the ticket explicitly authorizes it.
- Rename `@repo/*` package scopes unless a migration ticket says so.
- Modify `turbo.json` unless the ticket requires it.
- Scaffold backend, auth, database, or UI features outside their dedicated tickets.
- Add business logic during foundation or documentation tickets.
- Commit secrets or `.env` files.
- Create git commits unless the user explicitly requests it.

## Code Conventions

- **Language:** TypeScript everywhere.
- **Formatting:** Prettier (root `.prettierrc`).
- **Linting:** ESLint via `@repo/eslint-config`.
- **Imports:** Use workspace package names (`@repo/ui/button`), not relative paths across packages.
- **Comments:** Only for non-obvious logic; code should be self-explanatory.

## Environment

- Node.js >= 18
- pnpm 9.0.0 (pinned via `packageManager` in root `package.json`)
- Enable Corepack: `corepack enable`

## Documentation

| File | When to Read |
|---|---|
| `docs/00_Project_Principles.md` | Before any code change |
| `docs/01_Product_Vision.md` | When implementing user-facing features |
| `docs/02_System_Design.md` | When adding apps or packages |
| `docs/03_Database_Design.md` | When working on data layer |
| `docs/04_API_Design.md` | When working on API endpoints |
| `docs/05_Development_Roadmap.md` | For phase and priority context |
| `docs/06_Architecture_Decisions.md` | Before making architectural choices |

## Ticket Workflow

1. Read ticket requirements and constraints.
2. Explore relevant code (do not modify yet).
3. Implement only what the ticket specifies.
4. Verify: `pnpm run build && pnpm run lint && pnpm run check-types`.
5. Report deliverables and stop at the ticket's stop condition.

## Getting Help

- Architecture questions → refer to `docs/06_Architecture_Decisions.md` or escalate to Engineering Manager.
- Product questions → refer to `docs/01_Product_Vision.md`.
- Scope questions → the current ticket is the source of truth.
