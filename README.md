# FormCraft — Documentation Index

A Typeform-admin-style form builder, scoped for a 4-day build with Excel + Google Sheets connectors.

## Docs
1. **[01-PRD.md](./01-PRD.md)** — Product spec: scope, question types, builder/design/share/results/connector features, roles, success criteria.
2. **[02-DESIGN-SYSTEM.md](./02-DESIGN-SYSTEM.md)** — Unique visual identity ("Studio Notebook"): colors, type, theme presets, motion, components.
3. **[03-TECH-ARCHITECTURE.md](./03-TECH-ARCHITECTURE.md)** — Stack, monorepo layout, Drizzle schema, tRPC routers, Express/OpenAPI/Scalar setup, connector implementation, env vars.
4. **[04-API-CONVENTIONS.md](./04-API-CONVENTIONS.md)** — REST path conventions, tRPC→OpenAPI meta pattern, error shapes, pagination, Scalar setup.
5. **[05-TRACKER.md](./05-TRACKER.md)** — Day-by-day task checklist (Day 0–4), known v1 limitations.
6. **[06-BUILD-FLOW.md](./06-BUILD-FLOW.md)** — Execution order and daily "done" criteria.

## How to use these with an AI coding assistant
- Always reference `01-PRD.md` for "what" and `02-DESIGN-SYSTEM.md` for "how it should look."
- Use `03-TECH-ARCHITECTURE.md` as the schema/router source of truth — don't deviate from table/router names without updating the doc.
- Follow `06-BUILD-FLOW.md` order; check off items in `05-TRACKER.md` as completed.
- All API endpoints must follow `04-API-CONVENTIONS.md` so the OpenAPI spec/Scalar docs stay correct automatically.

## Stack Recap
Turborepo · tRPC · Drizzle · PostgreSQL · Next.js · Express adapter · Scalar (OpenAPI docs) · Excel + Google Sheets connectors.
