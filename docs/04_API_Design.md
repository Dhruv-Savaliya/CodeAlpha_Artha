# API Design

## Status

**Not implemented.** This document defines conventions for the planned `apps/api` service. Implementation will follow a dedicated engineering ticket.

## Design Principles

1. **RESTful** — Resources map to nouns; HTTP methods map to actions.
2. **JSON** — All request and response bodies use `application/json`.
3. **Consistent errors** — Standard error envelope across all endpoints.
4. **Authenticated by default** — Public endpoints are explicit exceptions.
5. **Versioned** — API version prefix on all routes (e.g., `/api/v1/`).

## Base URL

| Environment | URL |
|---|---|
| Development | `http://localhost:4000/api/v1` |
| Production | `https://api.artha.coffee/api/v1` (placeholder) |

Port and domain are subject to infrastructure tickets.

## Authentication (Planned)

- Session-based or token-based authentication (pending ADR).
- Auth provider integration (e.g., Better Auth) will be decided in a dedicated ticket.
- All protected routes require a valid session/token in the `Authorization` header or cookie.

## Standard Response Envelope

### Success

```json
{
  "data": { },
  "meta": {
    "timestamp": "2026-07-19T18:00:00.000Z"
  }
}
```

### Error

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Human-readable description",
    "details": []
  },
  "meta": {
    "timestamp": "2026-07-19T18:00:00.000Z"
  }
}
```

## HTTP Status Codes

| Code | Usage |
|---|---|
| `200` | Successful GET, PUT, PATCH |
| `201` | Successful POST (resource created) |
| `204` | Successful DELETE |
| `400` | Validation error or malformed request |
| `401` | Missing or invalid authentication |
| `403` | Authenticated but not authorized |
| `404` | Resource not found |
| `409` | Conflict (e.g., duplicate product SKU) |
| `500` | Internal server error |

## Planned Endpoints (Draft)

### Auth

| Method | Path | Description | Auth |
|---|---|---|---|
| `POST` | `/auth/register` | Create a new user account | Public |
| `POST` | `/auth/login` | Authenticate and receive session | Public |
| `POST` | `/auth/logout` | Invalidate session | Required |
| `GET` | `/auth/me` | Get current user profile | Required |

### Products

| Method | Path | Description | Auth |
|---|---|---|---|
| `GET` | `/products` | List products (filterable/sortable) | Public |
| `POST` | `/products` | Create a product | Required (Admin) |
| `GET` | `/products/:id` | Get product details | Public |
| `PATCH` | `/products/:id` | Update product details | Required (Admin) |
| `DELETE` | `/products/:id` | Delete a product | Required (Admin) |

### Categories

| Method | Path | Description | Auth |
|---|---|---|---|
| `GET` | `/categories` | List product categories | Public |
| `POST` | `/categories` | Create a category | Required (Admin) |
| `PATCH` | `/categories/:id` | Update a category | Required (Admin) |
| `DELETE` | `/categories/:id` | Delete a category | Required (Admin) |

### Cart

| Method | Path | Description | Auth |
|---|---|---|---|
| `GET` | `/cart` | Get active shopping cart | Public/Required |
| `POST` | `/cart` | Add product item to cart | Public/Required |
| `PATCH` | `/cart/:id` | Update quantity of a cart item | Public/Required |
| `DELETE` | `/cart/:id` | Remove item from cart | Public/Required |

### Orders

| Method | Path | Description | Auth |
|---|---|---|---|
| `GET` | `/orders` | List order history | Required |
| `POST` | `/orders` | Place a new order | Required |
| `GET` | `/orders/:id` | Get order details | Required |
| `PATCH` | `/orders/:id` | Update order status | Required (Admin) |

### Recommendations

| Method | Path | Description | Auth |
|---|---|---|---|
| `GET` | `/recommendations` | Get personalized coffee selections | Public/Required |

### Reviews

| Method | Path | Description | Auth |
|---|---|---|---|
| `GET` | `/products/:id/reviews` | List product reviews | Public |
| `POST` | `/products/:id/reviews` | Add a product review | Required |
| `DELETE` | `/reviews/:id` | Delete a product review | Required |

### Payments

| Method | Path | Description | Auth |
|---|---|---|---|
| `POST` | `/payments/checkout` | Initialize payment flow | Required |
| `POST` | `/payments/webhook` | Process payment gateway notifications | Public |

## Pagination (Planned)

List endpoints accept query parameters:

| Parameter | Type | Default | Description |
|---|---|---|---|
| `page` | Integer | `1` | Page number |
| `limit` | Integer | `20` | Items per page (max 100) |

Paginated responses include:

```json
{
  "data": [],
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "totalPages": 8
  }
}
```

## Validation

- Input validation occurs at the API boundary before business logic.
- Validation libraries (e.g., Zod) will be selected in an implementation ticket.
- All user-supplied strings are sanitized; monetary values are parsed as decimals.

## Related Documents

- `03_Database_Design.md` — Data model backing these endpoints
- `02_System_Design.md` — System context and deployment
- `06_Architecture_Decisions.md` — API framework selection ADR
