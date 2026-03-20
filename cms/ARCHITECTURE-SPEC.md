# CMS / Backend Architecture Spec

This document captures reusable architecture rules for production website content systems.

Use it for:
- headless CMS builds
- editable marketing sites
- editorial workflows
- backend-backed admin systems
- publish/preview infrastructure

Related research:
- `docs/CMS-BACKEND-ARCHITECTURE-RESEARCH.md`
- `backoffice/DESIGN-SPEC.md`
- `website/DEPLOYMENT-PLAYBOOK.md`

---

## 1. Core Objective

A production content system should let teams:
1. model content clearly
2. edit safely
3. preview before publishing
4. publish reliably
5. control access precisely

If any of those are weak, the website becomes hard to trust operationally.

---

## 2. Content Model Rules

- model reusable content types, not page-shaped blobs first
- keep relationships explicit
- separate content structure from visual rendering where possible
- design fields around editorial decisions, not only database convenience

Good reusable content model pieces:
- pages
- sections or blocks
- products/services
- people/teams
- testimonials
- media assets
- settings

---

## 3. Draft / Preview / Publish Rules

- draft and published states should be distinct
- previews should show unpublished work safely
- production should serve published content only
- preview environments should be intentional, not hacked together

This is one of the biggest differences between a concept admin and a real CMS.

---

## 4. Roles and Permissions Rules

- roles should map to real jobs
- content access should be granular where needed
- deny and allow rules should be deliberate
- admin power should not be the default for all editors

Minimum useful role split:
- viewer
- editor
- publisher
- admin

---

## 5. Webhook and Rebuild Rules

- publishing should be able to trigger downstream actions cleanly
- webhook consumers should be idempotent
- webhook processing should stay fast or become asynchronous
- failed or slow consumers should be visible in logs

Use webhooks for:
- preview refresh
- static rebuilds
- notifications
- audit or logging
- syncing to other systems

---

## 6. Auth and Database Rules

- auth belongs server-side
- authorization belongs in the database or backend policy layer, not only in the UI
- service keys stay server-only
- user-editable metadata and authorization metadata should be treated differently

For production multi-user systems:
- prefer PostgreSQL
- use row-level permissions or equivalent policy enforcement
- relate auth identities to domain records deliberately

---

## 7. Media and Storage Rules

- media should not depend on ephemeral local disk in production
- uploads need a durable storage path
- media permissions should align with content permissions
- alt text and usage context matter operationally too

---

## 8. Environment Rules

- separate development, staging, and production
- treat environment aliases or environment promotion as part of the workflow
- do not test destructive or structural changes directly on production content

---

## 9. Prototype-to-Production Ladder

### Concept stage
- local data
- local admin
- front-end gate
- manual preview

### Credible pre-production stage
- server-backed persistence
- auth
- draft/live split
- preview flow
- upload handling
- logs

### Production stage
- real CMS or backend model
- granular roles
- durable storage
- webhook/rebuild reliability
- staging and production environments
- database-level security or equivalent

---

## 10. What We Should Reuse Automatically

Future production-oriented website systems should default to:
- reusable content models
- draft/published separation
- preview support
- granular roles
- webhook-driven publish flows
- durable media storage
- Postgres and server-side auth for serious multi-user systems

This is the baseline for turning editable websites into real content products.
