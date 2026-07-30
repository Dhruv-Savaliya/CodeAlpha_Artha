# Artha

**Premium coffee e-commerce, with sensory excellence.**

Artha is a premium AI-powered coffee e-commerce platform that builds an emotional brand through storytelling, motion design, and exceptional UX. Built as a modern TypeScript monorepo by the CodeAlpha engineering team.

## Vision

Artha is designed to craft a luxurious, minimalistic, and cinematic online shopping experience for coffee lovers and premium lifestyle customers. Through storytelling, motion design, and AI-powered recommendations, Artha turns purchasing specialty coffee into an emotional brand experience.

See [`docs/01_Product_Vision.md`](docs/01_Product_Vision.md) for the full product vision.

## Tech Stack

| Layer | Technology |
|---|---|
| Monorepo | Turborepo 2.x |
| Package Manager | pnpm 9.0.0 |
| Language | TypeScript 5.9 |
| Frontend | Next.js 16, React 19 |
| Linting | ESLint 9 (flat config) |
| Formatting | Prettier 3.x |
| Database (planned) | PostgreSQL + Prisma |
| API (planned) | Node.js REST service |

## Folder Structure

```
CodeAlpha_Artha/
├── apps/
│   └── web/                  # Next.js frontend application
├── packages/
│   ├── ui/                   # Shared React component library
│   ├── eslint-config/        # Shared ESLint configurations
│   └── typescript-config/      # Shared TypeScript presets
├── docs/                     # Project documentation
├── AGENTS.md                 # AI agent operating instructions
├── turbo.json                # Turborepo task configuration
├── pnpm-workspace.yaml       # pnpm workspace definition
└── package.json              # Root workspace manifest
```

## Getting Started

### Prerequisites

- **Node.js** >= 18
- **pnpm** 9.0.0 (recommended via Corepack)

```bash
corepack enable
corepack prepare pnpm@9.0.0 --activate
```

### Installation

```bash
git clone <repository-url>
cd CodeAlpha_Artha
pnpm install
```

### Environment

Copy the example environment file and adjust values as needed:

```bash
cp .env.example .env
```

Most variables are placeholders for planned features. See `.env.example` for details.

### Development

Start all development servers:

```bash
pnpm run dev
```

The web application runs at [http://localhost:3000](http://localhost:3000).

To run a single application:

```bash
pnpm exec turbo run dev --filter=web
```

## Scripts

| Script | Description |
|---|---|
| `pnpm run dev` | Start all development servers |
| `pnpm run build` | Build all apps and packages |
| `pnpm run lint` | Lint all apps and packages |
| `pnpm run check-types` | Type-check all apps and packages |
| `pnpm run format` | Format code with Prettier |

## Engineering Philosophy

Artha follows **ticket-driven development** with clear scope boundaries:

1. Architecture is decided by the Engineering Manager and recorded in ADRs.
2. Engineers execute one ticket at a time with defined stop conditions.
3. Every change passes `build`, `lint`, and `check-types` before completion.
4. Shared configurations live in `packages/` — apps extend, not redefine.
5. No secrets in version control; environment variables are documented in `.env.example`.

Read the full principles in [`docs/00_Project_Principles.md`](docs/00_Project_Principles.md).

## Documentation

| Document | Description |
|---|---|
| [`docs/00_Project_Principles.md`](docs/00_Project_Principles.md) | Engineering standards and values |
| [`docs/01_Product_Vision.md`](docs/01_Product_Vision.md) | Product goals and target users |
| [`docs/02_System_Design.md`](docs/02_System_Design.md) | Technical architecture |
| [`docs/03_Database_Design.md`](docs/03_Database_Design.md) | Planned data model |
| [`docs/04_API_Design.md`](docs/04_API_Design.md) | Planned API conventions |
| [`docs/05_Development_Roadmap.md`](docs/05_Development_Roadmap.md) | Phased development plan |
| [`docs/06_Architecture_Decisions.md`](docs/06_Architecture_Decisions.md) | Architecture decision records |
| [`AGENTS.md`](AGENTS.md) | Instructions for AI coding agents |

## Current Status

| Phase | Status |
|---|---|
| Monorepo foundation | Complete |
| Repository cleanup | Complete |
| Project identity & standards | Complete |
| Database layer | Not started |
| Authentication | Not started |
| API service | Not started |
| Frontend features | Not started |

The web application displays a verification page confirming the repository foundation is in place. Feature development begins with Phase 2 in the roadmap.

## License

Private — CodeAlpha. All rights reserved.
