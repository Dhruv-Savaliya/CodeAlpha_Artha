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

Represents an authenticated customer or administrator.

| Field | Type | Notes |
|---|---|---|
| `id` | UUID | Primary key |
| `email` | String | Unique, required |
| `name` | String | Optional display name |
| `role` | Enum | `CUSTOMER`, `ADMIN` |
| `createdAt` | DateTime | Auto-set on creation |
| `updatedAt` | DateTime | Auto-updated |

### Product

Represents a coffee item, equipment, or gift set.

| Field | Type | Notes |
|---|---|---|
| `id` | UUID | Primary key |
| `name` | String | Product name |
| `description` | String | Rich storytelling description |
| `price` | Decimal | Base price |
| `roastLevel` | Enum | `LIGHT`, `MEDIUM`, `DARK`, `NONE` (for accessories) |
| `origin` | String | Country/region of origin |
| `tasteProfile` | JSON | Taste tags (e.g. `["fruity", "chocolatey"]`) |
| `categoryId` | UUID | Foreign key → Category |
| `createdAt` | DateTime | Auto-set |
| `updatedAt` | DateTime | Auto-updated |

### Category

Product categorization (e.g., "Single Origin", "Espresso Blends", "Brewing Gear").

| Field | Type | Notes |
|---|---|---|
| `id` | UUID | Primary key |
| `name` | String | e.g., "Single Origin" |
| `slug` | String | Unique slug for routing |
| `createdAt` | DateTime | Auto-set |

### Order

Represents a customer checkout and purchase.

| Field | Type | Notes |
|---|---|---|
| `id` | UUID | Primary key |
| `userId` | UUID | Foreign key → User |
| `status` | Enum | `PENDING`, `PAID`, `SHIPPED`, `DELIVERED`, `CANCELLED` |
| `totalAmount` | Decimal | Total order amount after discount |
| `couponId` | UUID | Foreign key → Coupon (nullable) |
| `addressId` | UUID | Foreign key → Address |
| `createdAt` | DateTime | Auto-set |
| `updatedAt` | DateTime | Auto-updated |

### OrderItem

An individual item line within an order.

| Field | Type | Notes |
|---|---|---|
| `id` | UUID | Primary key |
| `orderId` | UUID | Foreign key → Order |
| `productId` | UUID | Foreign key → Product |
| `quantity` | Integer | Purchased quantity |
| `price` | Decimal | Unit price at purchase time |

### Cart

Represents a user's active shopping cart items before checkout.

| Field | Type | Notes |
|---|---|---|
| `id` | UUID | Primary key |
| `userId` | UUID | Foreign key → User (nullable for guests) |
| `productId` | UUID | Foreign key → Product |
| `quantity` | Integer | Selected quantity |
| `createdAt` | DateTime | Auto-set |

### Wishlist

Represents saved products for future purchase.

| Field | Type | Notes |
|---|---|---|
| `id` | UUID | Primary key |
| `userId` | UUID | Foreign key → User |
| `productId` | UUID | Foreign key → Product |
| `createdAt` | DateTime | Auto-set |

### Review

Product feedback and rating.

| Field | Type | Notes |
|---|---|---|
| `id` | UUID | Primary key |
| `userId` | UUID | Foreign key → User |
| `productId` | UUID | Foreign key → Product |
| `rating` | Integer | Value 1 to 5 |
| `comment` | String | Review message (optional) |
| `createdAt` | DateTime | Auto-set |

### Coupon

Promotional discount codes.

| Field | Type | Notes |
|---|---|---|
| `id` | UUID | Primary key |
| `code` | String | Unique uppercase code |
| `discountType` | Enum | `PERCENT`, `FIXED` |
| `value` | Decimal | Discount value |
| `expiresAt` | DateTime | Expiry date |

### Address

Billing or shipping address.

| Field | Type | Notes |
|---|---|---|
| `id` | UUID | Primary key |
| `userId` | UUID | Foreign key → User |
| `type` | Enum | `SHIPPING`, `BILLING` |
| `street` | String | Address line |
| `city` | String | City name |
| `state` | String | State name |
| `postalCode` | String | ZIP/Postal code |
| `country` | String | Country name |

### Inventory

Stock level tracking for physical products.

| Field | Type | Notes |
|---|---|---|
| `productId` | UUID | Primary key, Foreign key → Product |
| `stock` | Integer | Available inventory count |
| `updatedAt` | DateTime | Auto-updated |

### Subscription

Automated recurring specialty coffee deliveries.

| Field | Type | Notes |
|---|---|---|
| `id` | UUID | Primary key |
| `userId` | UUID | Foreign key → User |
| `productId` | UUID | Foreign key → Product |
| `frequency` | Enum | `WEEKLY`, `BIWEEKLY`, `MONTHLY` |
| `status` | Enum | `ACTIVE`, `PAUSED`, `CANCELLED` |
| `nextDelivery` | DateTime | Date of next roast & ship |
| `createdAt` | DateTime | Auto-set |
| `updatedAt` | DateTime | Auto-updated |

### Payment

Payment transaction logging.

| Field | Type | Notes |
|---|---|---|
| `id` | UUID | Primary key |
| `orderId` | UUID | Foreign key → Order |
| `provider` | String | e.g. "Stripe", "Razorpay" |
| `reference` | String | External payment transaction ID |
| `status` | Enum | `SUCCESS`, `FAILED`, `REFUNDED` |
| `amount` | Decimal | Paid amount |
| `createdAt` | DateTime | Auto-set |

## Entity Relationships

```
User 1──* Address
User 1──* Cart
User 1──* Wishlist
User 1──* Order 1──* OrderItem
User 1──* Subscription
User 1──* Review
Product 1──* OrderItem
Product 1──* Review
Product 1──1 Inventory
Category 1──* Product
Order 1──1 Payment
Coupon 1──* Order
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
