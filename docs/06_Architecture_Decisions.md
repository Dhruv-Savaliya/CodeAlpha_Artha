# Architecture Decision Records

This document records significant architectural decisions for Project Artha. Each entry follows a lightweight ADR format.

---

## ADR-001: Monorepo with Turborepo and pnpm

| Field | Value |
|---|---|
| **Status** | Accepted |
| **Date** | 2026-07-19 |
| **Ticket** | TASK-001 |

### Context

Artha requires a scalable repository structure that supports multiple applications and shared packages with efficient build caching and consistent tooling.

### Decision

Use a **Turborepo monorepo** managed with **pnpm workspaces**.

### Rationale

- Turborepo provides task orchestration, dependency-aware builds, and local/remote caching.
- pnpm offers disk-efficient dependency management and strict workspace isolation.
- Official `create-turbo` scaffold provides a proven starting structure.

### Consequences

- All developers must use pnpm (pinned to 9.0.0 via `packageManager` field).
- Shared packages use `workspace:*` protocol for internal references.
- CI must install pnpm and run tasks through Turborepo.

---

## ADR-002: Next.js for Frontend

| Field | Value |
|---|---|
| **Status** | Accepted |
| **Date** | 2026-07-19 |
| **Ticket** | TASK-001 |

### Context

Artha needs a modern, performant frontend framework with SSR/SSG support, strong TypeScript integration, and a large ecosystem.

### Decision

Use **Next.js 16** (App Router) with **React 19** for `apps/web`.

### Rationale

- Next.js is the standard for production React applications.
- App Router supports server components, layouts, and streaming.
- Included in the official Turborepo starter; proven monorepo compatibility.

### Consequences

- Frontend deployment will likely target Vercel or a Next.js-compatible host.
- API routes in Next.js are available but business logic will live in `apps/api` (see ADR-004).

---

## ADR-003: PostgreSQL with Prisma for Data Layer

| Field | Value |
|---|---|
| **Status** | Proposed |
| **Date** | 2026-07-19 |
| **Ticket** | TASK-004 |

### Context

Artha handles relational financial data (users, accounts, transactions, categories) requiring ACID compliance and type-safe access from TypeScript.

### Decision

Use **PostgreSQL** as the database and **Prisma** as the ORM, housed in a planned `packages/db` package.

### Rationale

- PostgreSQL provides relational integrity, decimal precision for monetary values, and JSON support.
- Prisma generates type-safe clients and manages migrations.
- Well-documented monorepo patterns exist for Prisma in Turborepo.

### Consequences

- Requires Docker or a managed PostgreSQL instance for local development.
- `DATABASE_URL` environment variable required (documented in `.env.example`).
- Final acceptance pending implementation ticket and Engineering Manager approval.

---

## ADR-004: Separate API Service

| Field | Value |
|---|---|
| **Status** | Proposed |
| **Date** | 2026-07-19 |
| **Ticket** | TASK-004 |

### Context

Artha needs a backend service for business logic, authentication, and data access. Options include Next.js API routes, a dedicated Node.js service, or serverless functions.

### Decision

Use a dedicated **`apps/api`** service (Node.js) separate from the Next.js frontend.

### Rationale

- Separates concerns: frontend focuses on UI, API focuses on business logic.
- Independent scaling and deployment of frontend and backend.
- Clearer testing boundaries for API endpoints.
- Avoids coupling business logic to Next.js rendering lifecycle.

### Consequences

- Frontend communicates with API over HTTP (see `04_API_Design.md`).
- CORS configuration required for local development.
- Framework selection (Express or alternative) deferred to implementation ticket.

---

## ADR-005: Centralized Shared Configurations

| Field | Value |
|---|---|
| **Status** | Accepted |
| **Date** | 2026-07-19 |
| **Ticket** | TASK-001 |

### Context

Multiple packages and apps need consistent linting, formatting, and TypeScript settings.

### Decision

Centralize configurations in `@repo/eslint-config` and `@repo/typescript-config` packages.

### Rationale

- Single source of truth for code quality rules.
- Changes propagate to all packages via workspace references.
- Standard Turborepo monorepo pattern.

### Consequences

- New packages must extend shared configs rather than defining their own.
- ESLint flat config format is used (ESLint 9+).

---

## ADR-006: Ticket-Driven Development

| Field | Value |
|---|---|
| **Status** | Accepted |
| **Date** | 2026-07-19 |
| **Ticket** | TASK-004 |

### Context

The team requires predictable, reviewable progress with clear scope boundaries.

### Decision

All engineering work is executed through numbered tickets (TASK-NNN) with defined objectives, requirements, constraints, and stop conditions.

### Rationale

- Prevents scope creep and unauthorized architectural changes.
- Each ticket produces a verifiable deliverable.
- Enables parallel work by multiple engineers without conflicts.

### Consequences

- Engineers do not implement features outside the current ticket.
- Architecture changes require Engineering Manager approval and a new ADR entry.
- Documentation updates are scoped to the ticket that requires them.

---

## ADR-007: UI/UX Design Specification Established

| Field | Value |
|---|---|
| **Status** | Accepted |
| **Date** | 2026-07-29 |
| **Ticket** | Design Spec Initiative |

### Context

As Artha moves toward Phase 5 (Frontend Application) and Phase 6 (Shared UI & Design System), there was no single authoritative document governing visual design decisions. Engineers would otherwise make inconsistent choices around colors, spacing, typography, motion, and component APIs.

### Decision

A comprehensive UI/UX Design Specification is maintained at `docs/07_Design_Spec.md`. It defines design tokens (CSS custom properties under the `--artha-*` namespace), a 50+ component inventory across 5 tiers, all page routes, layout rules, motion guidelines, and measurable quality targets (WCAG AA, Lighthouse ≥ 95).

### Rationale

- Prevents fragmented design decisions across tickets.
- Enables engineers to implement UI independently with guaranteed consistency.
- Establishes `--artha-*` CSS custom properties as canonical, stable token names.
- Aligns the product aesthetic with premium fintech references (Mercury, CRED, Linear, Stripe) while remaining original.
- Provides measurable quality targets for accessibility and performance.

### Consequences

- All frontend tickets must reference `docs/07_Design_Spec.md`.
- Component names and APIs in `packages/ui` must match the component inventory in the spec.
- Token names (`--artha-*`) are canonical and must not be renamed without an ADR update.
- Any deviation from the spec requires an approved ADR amendment.
- The spec is a living document — version-tagged and amended via tickets.

---

## Template for Future ADRs

```
## ADR-NNN: Title

| Field | Value |
|---|---|
| **Status** | Proposed / Accepted / Deprecated / Superseded |
| **Date** | YYYY-MM-DD |
| **Ticket** | TASK-NNN |

### Context
What is the issue or need?

### Decision
What was decided?

### Rationale
Why this choice over alternatives?

### Consequences
What are the trade-offs and follow-up actions?
```
