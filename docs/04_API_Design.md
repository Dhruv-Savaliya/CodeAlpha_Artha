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
| Production | `https://api.artha.app/api/v1` (placeholder) |

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
| `409` | Conflict (e.g., duplicate email) |
| `500` | Internal server error |

## Planned Endpoints (Draft)

### Auth

| Method | Path | Description | Auth |
|---|---|---|---|
| `POST` | `/auth/register` | Create a new user account | Public |
| `POST` | `/auth/login` | Authenticate and receive session | Public |
| `POST` | `/auth/logout` | Invalidate session | Required |
| `GET` | `/auth/me` | Get current user profile | Required |

### Accounts

| Method | Path | Description | Auth |
|---|---|---|---|
| `GET` | `/accounts` | List user accounts | Required |
| `POST` | `/accounts` | Create an account | Required |
| `GET` | `/accounts/:id` | Get account details | Required |
| `PATCH` | `/accounts/:id` | Update an account | Required |
| `DELETE` | `/accounts/:id` | Delete an account | Required |

### Transactions

| Method | Path | Description | Auth |
|---|---|---|---|
| `GET` | `/transactions` | List transactions (filterable) | Required |
| `POST` | `/transactions` | Create a transaction | Required |
| `GET` | `/transactions/:id` | Get transaction details | Required |
| `PATCH` | `/transactions/:id` | Update a transaction | Required |
| `DELETE` | `/transactions/:id` | Delete a transaction | Required |

### Categories

| Method | Path | Description | Auth |
|---|---|---|---|
| `GET` | `/categories` | List user categories | Required |
| `POST` | `/categories` | Create a category | Required |
| `PATCH` | `/categories/:id` | Update a category | Required |
| `DELETE` | `/categories/:id` | Delete a category | Required |

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
