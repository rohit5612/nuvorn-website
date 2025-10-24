# Nuvorn ERP (PERN, JavaScript)

A production-grade ERP built with PostgreSQL, Express.js, React, and Node.js. It features a hardened Role-Based Access Control (RBAC) system, secure data access, procurement and inventory modules, and a visual workflow designer.

## What’s inside
- Procurement and Inventory modules with printable documents and attachments
- Hybrid RBAC with department-module scoping and feature/data-level permissions
- Secure API gateway with layered middleware, validation, and rate-limiting
- Visual Workflow Designer for configurable approvals and process flows
- Modern React frontend (Vite + Tailwind CSS 4, CSS-first, no @apply)

## RBAC and Security Access

### RBAC model
- Superuser (protected, non-deletable) and backup superuser
- Departments own access to modules; users receive roles within a department
- Role templates (levels 2-5) plus custom roles; cross-department access is opt-in
- Permission tiers:
  - Module-level: procurement, inventory, system, user-management
  - Feature-level: create, read, update, delete, approve, export
  - Data-level: own, department, all

### Enforcement layers
- Route middleware: `authMiddleware`, `permissionMiddleware`, `advancedPermissionMiddleware`
- Validation: `express-validator` for inputs; consistent error handling
- DB isolation: queries and views scoped by department/user; least-privilege defaults
- Frontend guards: route and component-level gates based on permissions
- Caching: Redis-backed permission/cache for low-latency checks

### Security hardening
- JWT auth with short-lived access tokens and refresh flow
- Helmet security headers, CORS policy, rate limiting on sensitive endpoints
- Strong password hashing (bcrypt), CSRF-safe patterns for state-changing calls
- Sanitized queries, centralized error handling, audit logging (Winston + Morgan)
- File uploads via Multer stored under `server/uploads` with validation

See `docs/API_DOCUMENTATION.md` for endpoint coverage and security notes.

## Modules

### Procurement
- Purchase Requisition (PR) and Purchase Order (PO)
- Goods Receipt Note (GRN) with item-level details and attachments
- Supplier and price list management
- Approval chains via Workflow Designer
- Printable PO/GRN documents

### Inventory
- Item and category master; units and attributes
- Warehouses, bins, opening balances, and stock snapshots
- Stock Transfers (inter-warehouse) with printable challans
- Stock Adjustments with reasons and approvals
- Stock Return Note (SRN) for returns and reconciliation
- Periodic stock count and discrepancy handling

### System and User Management
- Departments, roles, role templates, and custom permissions
- User lifecycle: invite/register, approval, department/role assignment
- Module registry, audit logs, and permission refresh

## Workflow Designer
- Built with React Flow (`@xyflow/react`) for visual graph editing
- Nodes: approval, decision, task, notification; edges with conditions
- Versioned workflows per module/feature (e.g., PO approval, GRN exceptions)
- Execution engine integrates with services (approve/reject, escalate, notify)
- Draft → Activate lifecycle; safe rollbacks and audit trails

Refer to `system_progress/workflow_desginer.md` for deeper details.

## Tech stack

### Backend
- Node.js 18+, Express 4
- PostgreSQL 14+, `pg`
- Redis 7 (cache, permission acceleration)
- Auth: `jsonwebtoken`, `bcryptjs`
- Security: `helmet`, `cors`, `express-rate-limit`, `express-validator`
- Uploads: `multer`
- Logging: `winston`, `morgan`
- Mail: `nodemailer`
- Testing: `jest`, `supertest`

### Frontend
- React 19, Vite 7, Tailwind CSS 4 (CSS-first, no `@apply`)
- Router: `react-router-dom`
- Icons/UI: `@headlessui/react`, `@heroicons/react`, `lucide-react`
- Workflow UI: `@xyflow/react`
- Utilities: `clsx`, `react-to-print`
- Linting/Testing: ESLint, Vitest + RTL (planned)

### DevOps & tooling
- Docker Compose (Redis); optional Redis Commander UI
- Scripts for migrations, seeds, data import and consistency checks
- Environment via `.env` in `server/` (see root `env.example`)

## Getting started

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- Redis 7

### Setup
```bash
# 1) Clone
git clone <repository-url>
cd 0.ERP

# 2) Backend
cd server
npm install
cp ../env.example .env   # fill DB, JWT, Redis configs
npm run migrate
npm run seed              # base data (roles, modules, etc.)

# (optional) Demo data
npm run seed:inventory-demo
npm run seed:demo-users

# 3) Frontend
cd ../client
npm install
npm run dev

# 4) Start backend API
cd ../server
npm run dev
```

### Redis (via Docker)
```bash
docker compose up -d redis
# Optional UI
docker compose up -d redis-commander
```

## Key architecture
- Clean separation: controllers, services, middleware, routes, database (migrations/seeds)
- Permission checks at API, service, and UI levels; cached permission snapshots
- Attachment storage under `server/uploads` (e.g., GRN, SRN, transfers, adjustments)
- Consistent response/error contracts; centralized validation

## Project conventions
- JavaScript-first (no TypeScript)
- Clean pages folder structure; only top-level module pages at `client/src/pages`
- No Tailwind `@apply`; prefer components/utilities
- `.env` lives in `server/` and is ignored; use root `env.example` as reference

## Useful scripts
From `server/`:
- `npm run migrate` – apply SQL migrations
- `npm run seed` – seed core data; `seed:inventory-demo`, `seed:demo-users`
- `npm run ensure:inventory` / `ensure:stockcount` – verify and create required tables
- `npm run import:items` – import items from CSV

## Documentation
- API reference: `docs/API_DOCUMENTATION.md`
- Database schema: `docs/database_schema.md`
- Advanced features: `docs/advanced-system-features.md`
- Implementation progress: `system_progress/`

---

Last updated: October 2025
Status: Active development

