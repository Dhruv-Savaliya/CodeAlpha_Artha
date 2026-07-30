# Database Design

## Status

**Not implemented.** This document defines the planned data layer for Artha. Schema, migrations, and ORM setup will be introduced in a dedicated engineering ticket.

## Planned Technology

| Component | Choice | Rationale |
|---|---|---|
| Database | PostgreSQL | Relational integrity, JSON support, mature ecosystem |
| ORM | Prisma | Type-safe queries, migration tooling, monorepo compatibility |
| Location | `packages/db` (planned) | Shared schema accessible by API and tooling |

## Core Entities (Draft)

The following entities represent the initial domain model. Field-level details will be finalized during implementation.

### User

Represents an authenticated account holder.

| Field | Type | Notes |
|---|---|---|
| `id` | UUID | Primary key |
| `email` | String | Unique, required |
| `name` | String | Optional display name |
| `createdAt` | DateTime | Auto-set on creation |
| `updatedAt` | DateTime | Auto-updated |

### Account

A financial account owned by a user (e.g., checking, savings, credit).

| Field | Type | Notes |
|---|---|---|
| `id` | UUID | Primary key |
| `userId` | UUID | Foreign key → User |
| `name` | String | User-defined label |
| `type` | Enum | `CHECKING`, `SAVINGS`, `CREDIT`, `CASH`, `OTHER` |
| `currency` | String | ISO 4217 code (default: `INR`) |
| `balance` | Decimal | Current balance (computed or stored — TBD) |
| `createdAt` | DateTime | Auto-set |
| `updatedAt` | DateTime | Auto-updated |

### Transaction

A single financial movement tied to an account.

| Field | Type | Notes |
|---|---|---|
| `id` | UUID | Primary key |
| `accountId` | UUID | Foreign key → Account |
| `amount` | Decimal | Positive for income, negative for expense |
| `description` | String | Optional memo |
| `categoryId` | UUID | Foreign key → Category (nullable) |
| `date` | DateTime | Transaction date |
| `createdAt` | DateTime | Auto-set |
| `updatedAt` | DateTime | Auto-updated |

### Category

A spending or income category for classification.

| Field | Type | Notes |
|---|---|---|
| `id` | UUID | Primary key |
| `userId` | UUID | Foreign key → User |
| `name` | String | e.g., "Groceries", "Salary" |
| `type` | Enum | `INCOME`, `EXPENSE` |
| `createdAt` | DateTime | Auto-set |

### Goal (Future Phase)

A financial target tracked over time.

| Field | Type | Notes |
|---|---|---|
| `id` | UUID | Primary key |
| `userId` | UUID | Foreign key → User |
| `name` | String | Goal label |
| `targetAmount` | Decimal | Target value |
| `currentAmount` | Decimal | Progress tracker |
| `deadline` | DateTime | Optional target date |
| `createdAt` | DateTime | Auto-set |
| `updatedAt` | DateTime | Auto-updated |

## Entity Relationships

```
User 1──* Account 1──* Transaction
User 1──* Category
User 1──* Goal
Category 1──* Transaction
```

## Conventions

- All primary keys use UUID v4.
- Timestamps use UTC.
- Monetary values use `Decimal` type — never floating-point.
- Soft deletes are not planned for initial release; hard deletes with audit logging may be added later.
- All tables include `createdAt` and `updatedAt`.

## Environment Variables

Database connection will be configured via environment variables documented in `.env.example`:

```
DATABASE_URL=postgresql://user:password@localhost:5432/artha
```

## Migration Strategy (Planned)

1. Prisma schema defined in `packages/db/prisma/schema.prisma`.
2. Migrations generated with `prisma migrate dev` during development.
3. Production migrations applied via CI/CD pipeline.
4. Seed scripts for development data in a dedicated ticket.

## Related Documents

- `04_API_Design.md` — How the API exposes data
- `06_Architecture_Decisions.md` — ADR for PostgreSQL + Prisma selection
