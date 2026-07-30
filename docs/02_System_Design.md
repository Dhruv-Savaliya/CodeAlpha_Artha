# System Design

## Overview

Artha is a **Turborepo monorepo** managed with **pnpm**. The system separates deployable applications from shared internal packages, enabling independent development, testing, and deployment of each layer.

## Current Architecture (Implemented)

```
┌─────────────────────────────────────────────────────────┐
│                    CodeAlpha_Artha                       │
│                  (pnpm + Turborepo)                      │
├─────────────────────────────────────────────────────────┤
│  apps/                                                   │
│    └── web/          Next.js 16 frontend (port 3000)    │
├─────────────────────────────────────────────────────────┤
│  packages/                                               │
│    ├── ui/           Shared React component library      │
│    ├── eslint-config/ Shared ESLint flat configs         │
│    └── typescript-config/ Shared tsconfig presets        │
└─────────────────────────────────────────────────────────┘
```

## Planned Architecture (Not Yet Implemented)

```
┌──────────────┐     HTTPS      ┌──────────────┐
│   apps/web   │ ◄────────────► │   apps/api   │
│  (Next.js)   │                │  (Node.js)   │
└──────┬───────┘                └──────┬───────┘
       │                               │
       │ workspace:*                   │ ORM
       ▼                               ▼
┌──────────────┐                ┌──────────────┐
│  @repo/ui    │                │  PostgreSQL  │
└──────────────┘                └──────────────┘
```

Future packages under consideration (subject to architecture tickets):

| Package | Responsibility |
|---|---|
| `packages/db` | Database schema, migrations, client |
| `packages/auth` | Authentication utilities and session handling |
| `packages/shared` | Shared types, validators, constants |

## Application Layer

### `apps/web`

- **Framework:** Next.js 16 (App Router)
- **Runtime:** React 19
- **Port:** 3000
- **Status:** Foundation shell — verification page only
- **Role:** Primary user-facing frontend

### `apps/api` (Planned)

- **Framework:** Node.js with Express (or equivalent — pending ADR)
- **Role:** REST API for business logic, data access, and authentication
- **Status:** Not scaffolded

## Shared Packages

### `@repo/ui`

Shared React components consumed by frontend applications. Currently a package shell with no production components.

### `@repo/eslint-config`

Centralized ESLint configurations:

| Export | Used By |
|---|---|
| `base` | All TypeScript packages |
| `next-js` | Next.js applications |
| `react-internal` | React libraries |

### `@repo/typescript-config`

Shared TypeScript compiler presets:

| Config | Used By |
|---|---|
| `base.json` | Foundation for all packages |
| `nextjs.json` | Next.js applications |
| `react-library.json` | React component libraries |

## Task Orchestration

Turborepo manages the following root tasks via `turbo.json`:

| Task | Behavior |
|---|---|
| `build` | Builds all packages; depends on upstream `^build` |
| `dev` | Starts dev servers (persistent, uncached) |
| `lint` | Lints all packages |
| `check-types` | Type-checks all packages |

## Data Flow (Planned)

1. User interacts with `apps/web` in the browser.
2. Frontend calls `apps/api` over HTTPS with authenticated requests.
3. API validates input, applies business rules, and reads/writes via the database layer.
4. Responses return structured JSON consumed by the frontend.

## Deployment (Future)

| Component | Target |
|---|---|
| `apps/web` | Vercel or equivalent static/SSR host |
| `apps/api` | Containerized service (Docker — pending ticket) |
| Database | Managed PostgreSQL instance |

Deployment configuration is out of scope until dedicated infrastructure tickets are approved.

## Related Documents

- `03_Database_Design.md` — Data model
- `04_API_Design.md` — API conventions
- `06_Architecture_Decisions.md` — Recorded decisions
