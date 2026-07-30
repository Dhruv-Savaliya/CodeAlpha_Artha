# Development Roadmap

## Overview

Artha development follows a phased, ticket-driven roadmap. Each phase delivers a verifiable milestone before the next begins. Phases are sequential unless explicitly marked as parallel-safe.

## Phase 0: Foundation (Complete)

| Ticket | Title | Status |
|---|---|---|
| TASK-001 | Initialize Monorepo Foundation | Complete |
| TASK-002 | Workspace Audit & Cleanup Plan | Complete |
| TASK-003 | Repository Cleanup & Foundation Preparation | Complete |
| TASK-004 | Project Identity & Engineering Standards | Complete |

**Deliverables:**
- Turborepo + pnpm monorepo
- Next.js web app shell
- Shared config packages (`eslint-config`, `typescript-config`, `ui`)
- Project documentation and engineering standards

## Phase 1: Repository Baseline

| Ticket | Title | Status |
|---|---|---|
| TASK-005 | Baseline Git Commit | Planned |
| — | Sync `pnpm-lock.yaml` (remove stale references) | Planned |
| — | Add CI pipeline (build, lint, check-types) | Planned |

**Goal:** Establish a committed, reproducible baseline with automated verification on every pull request.

## Phase 2: Database Layer

| Ticket | Title | Status |
|---|---|---|
| — | Scaffold `packages/db` with Prisma | Planned |
| — | Define initial schema (User, Account, Transaction, Category) | Planned |
| — | Development seed data | Planned |
| — | Docker Compose for local PostgreSQL | Planned |

**Goal:** Type-safe database access available to backend services.

## Phase 3: Authentication

| Ticket | Title | Status |
|---|---|---|
| — | Evaluate and integrate auth provider | Planned |
| — | User registration and login flows | Planned |
| — | Session management and protected routes | Planned |

**Goal:** Secure user accounts with authenticated API access.

## Phase 4: API Service

| Ticket | Title | Status |
|---|---|---|
| — | Scaffold `apps/api` | Planned |
| — | Implement CRUD endpoints (accounts, transactions, categories) | Planned |
| — | Input validation and error handling | Planned |
| — | API integration tests | Planned |

**Goal:** Functional REST API backing all core data operations.

## Phase 5: Frontend Application

| Ticket | Title | Status |
|---|---|---|
| — | Application layout and navigation | Planned |
| — | Dashboard with financial summary | Planned |
| — | Account management UI | Planned |
| — | Transaction entry and listing | Planned |
| — | Category management | Planned |

**Goal:** User-facing application for daily financial tracking.

## Phase 6: Shared UI & Design System

| Ticket | Title | Status |
|---|---|---|
| — | Design tokens and theme | Planned |
| — | Core component library in `@repo/ui` | Planned |
| — | Tailwind CSS integration (if approved) | Planned |
| — | shadcn/ui integration (if approved) | Planned |

**Goal:** Consistent, reusable UI components across the frontend.

## Phase 7: Goals & Analytics

| Ticket | Title | Status |
|---|---|---|
| — | Financial goal tracking | Planned |
| — | Spending analytics and charts | Planned |
| — | Monthly summary reports | Planned |

**Goal:** Help users understand patterns and track progress toward goals.

## Phase 8: Production Readiness

| Ticket | Title | Status |
|---|---|---|
| — | Production deployment pipeline | Planned |
| — | Environment configuration (staging, production) | Planned |
| — | Monitoring and error tracking | Planned |
| — | Security audit | Planned |

**Goal:** Artha is deployable, monitored, and secure for real users.

## Guiding Rules

1. **No phase skipping** — Each phase builds on the previous unless the Engineering Manager approves a reorder.
2. **Ticket scope is sacred** — Engineers implement only what the ticket specifies.
3. **Verify at every step** — `build`, `lint`, and `check-types` must pass before closing any ticket.
4. **Document as you go** — Update architecture docs and ADRs when decisions are made.

## Related Documents

- `01_Product_Vision.md` — Why we are building Artha
- `02_System_Design.md` — How the system is structured
- `06_Architecture_Decisions.md` — Record of technical choices
