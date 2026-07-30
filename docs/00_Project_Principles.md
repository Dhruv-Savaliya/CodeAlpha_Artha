# Project Principles

Artha is built by a professional engineering team using ticket-driven development. These principles govern every change to the repository.

## Core Values

1. **Clarity over cleverness** — Prefer readable, maintainable code over abstractions that save a few lines.
2. **Minimal scope** — Each ticket delivers one well-defined outcome. No drive-by refactors or unrequested features.
3. **Architecture first** — The Engineering Manager defines architecture. Engineers execute tickets; they do not redesign systems without approval.
4. **Verify before done** — Every change must pass `build`, `lint`, and `check-types` before a ticket is closed.
5. **Document decisions** — Significant technical choices are recorded in `docs/06_Architecture_Decisions.md`.

## Engineering Standards

### Monorepo Discipline

- Use **pnpm workspaces** for dependency management.
- Use **Turborepo** for task orchestration and caching.
- Shared code lives in `packages/`; deployable applications live in `apps/`.
- Internal packages are referenced with `workspace:*` protocol.

### Code Quality

- **TypeScript** is required for all application and library code.
- **ESLint** configurations are centralized in `@repo/eslint-config`.
- **Prettier** enforces consistent formatting via root `.prettierrc`.
- Strict TypeScript settings (`strict`, `noUncheckedIndexedAccess`) are non-negotiable.

### Git & Workflow

- One ticket, one focused change set.
- Do not commit secrets (`.env` files are gitignored; use `.env.example` as a template).
- Commit messages describe *why*, not just *what*.
- Do not force-push to `main`.

### Security

- Never commit credentials, API keys, or connection strings.
- Environment variables are documented in `.env.example`.
- Authentication and authorization will be implemented in dedicated tickets.

### Testing Philosophy

- Tests are added when they provide meaningful coverage of real behavior.
- Avoid tests that only assert implementation details or trivial truths.
- Testing infrastructure will be introduced in a future ticket.

## What We Avoid

- Installing packages or frameworks outside an approved ticket.
- Scaffolding features before their architecture is decided.
- Modifying generated or upstream boilerplate without a documented reason.
- Renaming package scopes without an explicit migration ticket.

## Reference

| Document | Purpose |
|---|---|
| `01_Product_Vision.md` | Product goals and user value |
| `02_System_Design.md` | Technical architecture |
| `AGENTS.md` | AI agent operating instructions |
| `06_Architecture_Decisions.md` | Record of architectural choices |
