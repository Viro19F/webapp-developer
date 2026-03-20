# Website Deployment Playbook

This document captures how to choose hosting and deployment setups for the kinds of websites and apps we build.

Use it for:
- launch decisions
- deployment architecture
- platform choice
- preview/review flows
- domain and DNS handoff
- operational website builds with admin or backend

Related research:
- `docs/WEBSITE-SYSTEMS-RESEARCH.md`

---

## 1. Core Rule

Choose the simplest deployment model that supports the product honestly.

Bad deployment decisions usually come from:
- adding backend infrastructure to a static marketing site
- forcing a static host to behave like a real app backend
- using SQLite in places where multi-user production behavior matters
- launching without preview URLs, rollback thinking, or environment separation

---

## 2. Deployment Decision Matrix

### A. Static brochure or content site

Best default options:
- Cloudflare Pages
- Netlify
- GitHub Pages for very simple public static sites

Use this when:
- the site is mostly HTML/CSS/JS or a static build output
- no custom server runtime is needed
- forms can be handled by platform features or simple integrations
- preview URLs are enough for review

### B. Frontend-heavy site with preview workflow

Best default options:
- Vercel
- Cloudflare Pages
- Netlify

Use this when:
- the site benefits from preview deployments on every push or PR
- a framework like Next.js, Astro, SvelteKit, or Nuxt is involved
- serverless functions or edge behavior may be needed

### C. Operational site with real backend

Best default options:
- Render
- Railway

Use this when:
- the site includes auth, admin, message storage, scheduled jobs, or real database-backed records
- Express or another application server is part of the product
- you need server-backed persistence instead of static exports

### D. SQLite-specific builds

Only use this in production when:
- the app is deliberately single-node
- the storage path is persistent
- backups/replication are accounted for

Otherwise:
- prefer PostgreSQL

---

## 3. Platform Notes

### Vercel

Strong for:
- preview-first workflows
- modern frontend frameworks
- fast team review cycles
- serverless functions close to the frontend

What matters:
- Git, CLI, hooks, and API deployment paths exist
- Local, Preview, and Production environments are first-class
- Functions should run near the data source
- deployment logs and observability are built in

Default use:
- premium frontend builds
- client review flows
- Next.js-heavy work

### Cloudflare Pages

Strong for:
- static sites
- edge-friendly apps
- global delivery
- Pages Functions with D1/R2 when needed

What matters:
- Git integration creates automatic builds and preview deployments
- preview deployments are `noindex` by default
- Git integration and Direct Upload are different project choices
- custom domain flow is clear, but apex domains require zone/nameserver handling

Default use:
- static sites we want fast and cheap
- edge-first website/app hybrids

### Netlify

Strong for:
- static sites with a strong content workflow
- deploy previews
- built-in form handling
- function add-ons without a full server

What matters:
- deploy previews are automatic for connected repos
- form detection can process HTML forms without extra JS
- functions are immutable per deploy

Default use:
- brochure sites that need platform-managed forms
- content sites where preview comments help review

### GitHub Pages

Strong for:
- documentation
- personal/project sites
- very simple public static publishing

Weak for:
- real app backends
- complex preview workflows
- operational products

Default use:
- lightweight docs or public marketing microsites

### Render

Strong for:
- Node/Express services
- straightforward web services
- backend-backed admin panels

What matters:
- Git-connected web services are easy to deploy
- if a build fails, the current successful deploy stays live

Default use:
- Express apps with simple, reliable deployment needs

### Railway

Strong for:
- full-stack internal tools
- simple service + database setups
- fast infrastructure composition

What matters:
- PostgreSQL can be provisioned quickly
- useful environment variables are injected automatically
- deployment approvals exist for connected GitHub pushes
- observability is available at the service/project level

Default use:
- operational prototypes growing into real apps
- admin dashboards with database-backed records

### Fly.io

Useful when:
- you deliberately want app instances close to users
- you understand the operational tradeoffs
- you need a specific machine/networking model

Important note:
- SQLite on Fly should be treated carefully; volume persistence and replication/backup are not optional details

---

## 4. Default Recommendations

These are inference-based recommendations from the platform docs plus the kinds of projects we build.

### Default for static client websites
- Cloudflare Pages first
- Netlify if built-in forms are a major convenience

### Default for premium frontend apps
- Vercel first

### Default for Express/admin/dashboard projects
- Railway or Render

### Default production database
- PostgreSQL

### Avoid by default
- production SQLite without a deliberate persistence and backup plan
- backend-free deployments for apps that really need auth, records, or workflows

---

## 5. Deployment Standards We Should Follow

Every serious deployment should define:
- production URL
- preview/staging flow
- custom domain plan
- environment variables per environment
- form or API submission path
- rollback path
- log access
- ownership of DNS and platform account

For preview deployments:
- keep previews index-safe
- use them for review, not as permanent production substitutes

For domains:
- decide whether the client or we own DNS control
- document apex vs subdomain setup
- keep `www` and non-`www` behavior intentional

---

## 6. Backend Deployment Rules

If the project has a backend:
- deploy the backend and database as first-class services
- use secrets, not hardcoded credentials
- keep staging and production separate
- use a managed or persistent database
- add logs and basic health visibility
- prefer Postgres over SQLite for multi-user workflows

If uploads exist:
- define storage location clearly
- know whether files live on local disk, object storage, or a media service
- avoid assuming ephemeral server files are durable

---

## 7. Launch and Handoff Checklist

Before launch:
- domain connected
- HTTPS working
- redirects correct
- metadata verified on production
- forms/API callbacks tested on production
- admin route protected appropriately
- backup/export path defined if data matters
- preview links no longer treated as production
- ownership and billing documented

After launch:
- send client the production URL
- send admin URL if applicable
- send credentials securely
- provide a short handoff video or document
- note what is editable and what is not

---

## 8. What We Should Reuse Automatically

Future deployments should default to:
- static hosting unless the product needs more
- preview URLs before production changes
- custom domain setup as part of launch, not an afterthought
- environment separation
- logs/observability for any backend
- Postgres for real operational apps
- clear handoff of hosting, DNS, and credentials

This is the baseline for deployments that feel deliberate and safe.
