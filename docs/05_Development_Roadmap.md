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

## Phase 2: Design System

| Ticket | Title | Status |
|---|---|---|
| — | Establish design tokens and dark-first theme variables | Planned |
| — | Implement Tier 1 core component library in `@repo/ui` | Planned |
| — | Integrate Lucide icons and typography styling | Planned |

**Goal:** Provide reusable visual building blocks supporting luxurious, responsive layouts.

## Phase 3: Landing Experience

| Ticket | Title | Status |
|---|---|---|
| — | Create cinematic Hero section with animated headings | Planned |
| — | Add brand storytelling sections and features showcase | Planned |
| — | Integrate testimonial cards and footer layout | Planned |

**Goal:** Launch an emotionally engaging, high-aesthetic home page for Artha.

## Phase 4: Authentication

| Ticket | Title | Status |
|---|---|---|
| — | Integrate backend authentication provider (e.g., Better Auth) | Planned |
| — | Implement 2-column customer registration and login flows | Planned |
| — | Manage secure customer sessions and route guards | Planned |

**Goal:** Secure customer accounts and personal data access.

## Phase 5: Catalog

| Ticket | Title | Status |
|---|---|---|
| — | Implement backend products API endpoints | Planned |
| — | Create catalog listing grid for coffee products | Planned |
| — | Add multi-criteria filtering by origin, roast, and taste profile | Planned |

**Goal:** Enable customers to browse and filter the coffee collection.

## Phase 6: Product Pages

| Ticket | Title | Status |
|---|---|---|
| — | Design high-polish, detail-rich product template pages | Planned |
| — | Display tasting profile annotations and brewing instructions | Planned |
| — | Add product reviews and customer ratings form | Planned |

**Goal:** Showcase specialty coffee micro-lots through storytelling and detailed metadata.

## Phase 7: Cart

| Ticket | Title | Status |
|---|---|---|
| — | Build cart storage with guest-to-user persistence | Planned |
| — | Implement slide-out shopping cart sheet component | Planned |
| — | Setup cart CRUD endpoints and state handlers | Planned |

**Goal:** Manage selected items with smooth, responsive micro-animations.

## Phase 8: Checkout

| Ticket | Title | Status |
|---|---|---|
| — | Design multi-step checkout form | Planned |
| — | Implement discount coupon validation | Planned |
| — | Integrate Stripe payment checkout flows | Planned |

**Goal:** Provide an elegant, secure transaction funnel.

## Phase 9: Orders

| Ticket | Title | Status |
|---|---|---|
| — | Define database models for orders and payments | Planned |
| — | Build order confirmation and receipt screen | Planned |
| — | Implement automated purchase invoice emails | Planned |

**Goal:** Complete transaction recording and customer notification.

## Phase 10: Dashboard

| Ticket | Title | Status |
|---|---|---|
| — | Build customer dashboard layout | Planned |
| — | Setup subscription schedule, frequency, and pause options | Planned |
| — | Display purchase history and shipping updates | Planned |

**Goal:** Empower customers to manage subscriptions and orders dynamically.

## Phase 11: Admin

| Ticket | Title | Status |
|---|---|---|
| — | Design back-office admin dashboard | Planned |
| — | Implement product creation and inventory management UI | Planned |
| — | Build order fulfillment status tracking for admins | Planned |

**Goal:** Operational tooling to run the e-commerce business.

## Phase 12: AI Recommendations

| Ticket | Title | Status |
|---|---|---|
| — | Implement tasting quiz flow for sensory profiling | Planned |
| — | Build recommendation engine based on user preference vectors | Planned |
| — | Show personalized recommendations across product detail cards | Planned |

**Goal:** Match customers with specialty roasts tailored to their palate.

## Phase 13: Performance

| Ticket | Title | Status |
|---|---|---|
| — | Optimize visual media assets (WebP/AVIF) | Planned |
| — | Implement query caching and database index optimizations | Planned |
| — | Conduct accessibility (WCAG AA) and Lighthouse audits | Planned |

**Goal:** Ensure the storefront loads instantly and remains highly accessible.

## Phase 14: Deployment

| Ticket | Title | Status |
|---|---|---|
| — | Configure CI/CD automated test & build checks | Planned |
| — | Deploy Next.js web application on Vercel | Planned |
| — | Set up environment variables and error tracking (Sentry) | Planned |

**Goal:** Launch the platform securely in a production environment.

## Guiding Rules

1. **No phase skipping** — Each phase builds on the previous unless the Engineering Manager approves a reorder.
2. **Ticket scope is sacred** — Engineers implement only what the ticket specifies.
3. **Verify at every step** — `build`, `lint`, and `check-types` must pass before closing any ticket.
4. **Document as you go** — Update architecture docs and ADRs when decisions are made.

## Related Documents

- `01_Product_Vision.md` — Why we are building Artha
- `02_System_Design.md` — How the system is structured
- `06_Architecture_Decisions.md` — Record of technical choices
