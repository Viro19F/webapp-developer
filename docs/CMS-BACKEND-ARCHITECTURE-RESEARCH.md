# CMS / Backend Architecture Research

This document captures current research on what production website content systems need.

Research date:
- March 20, 2026

Primary sources used:
- [Sanity: Perspectives](https://www.sanity.io/docs/content-lake/perspectives)
- [Sanity: Webhooks](https://www.sanity.io/docs/content-lake/webhooks)
- [Sanity: Roles](https://www.sanity.io/docs/user-guides/roles)
- [Contentful: Environments](https://www.contentful.com/help/environments/)
- [Contentful: Webhooks overview](https://www.contentful.com/developers/docs/webhooks/overview/)
- [Contentful: Content permissions](https://www.contentful.com/help/roles/space-roles-and-permissions/content-permissions/)
- [Supabase: Row Level Security](https://supabase.com/docs/guides/database/postgres/row-level-security)
- [Supabase: Auth architecture](https://supabase.com/docs/guides/auth/architecture)

---

## 1. What Production Content Systems Repeatedly Need

### A. Draft and published states must be distinct

Sanity's Perspectives docs make this explicit:
- `drafts` can be queried as if unpublished work were live
- `published` excludes unpublished changes

What this means:
- preview and production should not be the same thing
- draft support is not a nice extra for real editorial workflows

### B. Environments matter

Contentful's environment guidance distinguishes development, staging, and production-style environments, and environment aliases let teams switch what an alias serves without changing the actual environment name.

What this means:
- content operations need environment discipline
- testing structural changes directly in production is avoidable risk

### C. Roles and permissions need granularity

Sanity and Contentful both reinforce that permissions should apply to specific actions and content scopes, not only broad all-or-nothing access.

What this means:
- editors, publishers, and admins should not automatically share the same power
- serious content systems need role design from the start

### D. Webhooks are part of the architecture, not a bolt-on

Sanity and Contentful both show that webhooks drive rebuilds, notifications, and external syncing.

Important operational takeaways:
- webhook consumers should be idempotent
- slow consumers create queue problems or failures
- local testing should be intentional

### E. Auth and authorization must live below the UI

Supabase's auth and RLS docs reinforce:
- auth data lives alongside the database
- RLS and role policy matter
- service keys must stay server-side
- auth metadata and authorization data should not be treated the same

What this means:
- front-end gates are not production security
- multi-user content systems need server-side auth and policy enforcement

---

## 2. Practical Patterns We Should Inherit

### Content workflow
- draft
- preview
- publish
- rollback or republish path where possible

### Environment model
- local/dev
- staging/preview
- production

### Role model
- viewer
- editor
- publisher
- admin

### Publish integrations
- webhook to rebuild static site
- webhook to log activity
- webhook to notify Slack/email if needed

### Security model
- server-only privileged keys
- database-level policy or equivalent
- durable media storage

---

## 3. What This Means For Our Builds

- Our current lightweight admin concepts are useful, but production website apps need a stronger architecture layer.
- Preview should become a first-class feature in serious CMS builds.
- If multiple users or sensitive actions exist, Postgres plus server-side auth and policy becomes the safer default.
- CMS decisions should be treated as product architecture, not just as an editing convenience.

---

## 4. What Not To Copy Blindly

- do not add enterprise CMS complexity to a simple static site
- do not expose service keys in browser code
- do not assume preview and published content can safely share one path
- do not rely on front-end-only protection for real editorial systems

The lesson is not "use a headless CMS because it sounds modern".
The lesson is to add the workflow and security depth that the content operation actually needs.
