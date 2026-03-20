# Backoffice / Admin App Design Spec

This document turns research from successful apps into reusable rules for our own admin panels, dashboards, CMS tools, and internal software.

Use it for:
- product/catalog admins
- CMS layers
- internal operations dashboards
- content editors
- booking/lead management panels
- any website that needs an operational layer behind the public pages

Related research:
- `docs/BACKOFFICE-APP-RESEARCH.md`

---

## 1. Core Idea

A strong app is not only a nice interface.

It has:
- a clean underlying record model
- clear state and permissions
- task-focused displays
- editing flows that reduce mistakes
- enough system feedback that users trust what just happened

If any of those are missing, the product may still look polished, but it will not feel reliable.

---

## 2. Product Goal

The goal of a backoffice tool is to reduce operational friction.

That means the app should help users do four things well:
1. find what needs attention
2. open the right record fast
3. change it safely
4. confirm the result

This is why successful apps like Stripe, Shopify, Linear, Vercel, and Notion feel strong. They shorten the distance between problem, action, and verification.

---

## 3. Backend Architecture Rules

### One record model, many displays
- Keep one stable source of truth for each record type.
- Do not duplicate data just because different teams need different screens.
- Build display-specific views on top of the same record model.

Examples:
- one `product` record can appear in catalog, featured shelf, search, homepage placement, and admin detail
- one `lead` record can appear in inbox, pipeline board, calendar, and reporting

### Explicit statuses with behavior
- Every important record needs a named state system.
- Status should map to behavior, not only to color.
- Document what each status means and what the system does with it.

Good examples:
- `draft`, `active`, `archived`
- `pending`, `approved`, `rejected`
- `uploaded`, `processing`, `published`, `failed`

### Roles and permissions early
- Do not wait until late in the project to think about access.
- Separate at minimum:
  - viewer
  - editor
  - admin
- If the app has higher-risk actions, isolate them further.

For prototypes:
- a light front-end gate is acceptable

For production:
- server-side auth
- role checks on every sensitive action
- audit trail for changes

### Environment separation
- Test environments should not contaminate production records.
- Keep preview/staging/sandbox behavior explicit.
- If the app publishes to a live website, make draft and live states clearly distinct.

### Logs and auditability
- Users should be able to see what happened after important actions.
- Record:
  - last updated time
  - last updated by
  - publish result
  - sync failures
  - upload problems

If a business action can fail, the system should expose that failure inside the app.

### Media pipeline
- Treat uploads as part of the product, not an afterthought.
- A media field should support:
  - upload from device
  - optional external URL
  - alt text
  - crop/placement expectations when needed
- Store enough metadata to reuse the asset safely across the app.

### Integration boundaries
- External sources should feed into the system cleanly.
- Keep source context when possible.
- Avoid making staff retype data that could be imported or synced.

---

## 4. Display / Interface Rules

### Overview first, record detail second
- The main dashboard should answer: "what needs attention?"
- The detail page should answer: "what exactly do I change here?"
- Do not merge overview widgets and deep editing into one overloaded screen.

### Search is infrastructure
- Add global search as soon as record volume can grow.
- Add local filtering inside list views.
- Include recent items when possible.
- If the app is used often, keyboard access is a serious quality upgrade.

### One dataset, multiple task views
- The same records may need list, board, gallery, calendar, or table views.
- Add multiple views only when they help different jobs.
- Keep filters, grouping, sorting, and visible fields explicit per view.

### Clear edit structure
- Avoid giant generic forms.
- Split detail pages into sections that match user intent:
  - basic info
  - media
  - status and visibility
  - pricing or metadata
  - placement or publishing
  - logs/history

### Separate using from editing
- Normal usage mode should feel safe.
- Structural editing should be intentional.
- This matters for dashboards, homepage editors, and content management surfaces.

### Preview near the action
- Show where content will appear.
- Make placement visible.
- If possible, link directly to the affected public page or preview state.

### Guardrails for text and layout
- Do not rely on unrestricted textareas everywhere.
- Add:
  - helper labels
  - field purpose guidance
  - character limits where layout is fragile
  - previews for headline/subhead combinations

---

## 5. CMS and Website Admin Rules

When an app powers a public site, the admin must make publishing logic obvious.

Minimum useful controls:
- page visibility
- placement or featured status
- media upload
- title and supporting copy
- CTA label/link where relevant
- ordering or pinning
- draft versus published state

For catalog-like websites, each product or service should usually include:
- name
- short description
- long description if needed
- price or price visibility rule
- image
- category/use case
- status
- placement
- slug or routing identity

The admin language should match the website language.

Good:
- `Featured on home`
- `Only in catalog`
- `Hidden from site`

Bad:
- internal engineering terms that the business owner cannot map to the page

---

## 6. Production Ladder

### Good enough for a prototype
- local structured data
- local storage or temporary persistence
- front-end admin gate
- email-prep forms
- manual import/export

### Minimum for a credible operational app
- server-backed persistence
- authenticated admin routes
- role-aware actions
- upload handling
- validation
- draft/live distinction
- action feedback and error states

### Minimum for production
- secure auth
- server-side authorization
- database-backed records
- audit log
- backup/export path
- observability for key failures
- staging or sandbox path

---

## 7. Reuse Rules

Reuse this system when:
- the public site needs editing by non-technical users
- products or services change often
- multiple team members touch the same data
- the quality of the admin affects the quality of the business workflow
- the concept needs to feel like real software, not a static mockup

Do not copy blindly when:
- the website is a simple static brochure with rare edits
- one clean form is enough and a dashboard would be overhead
- the product has no operational workflow behind it

---

## 8. What We Should Inherit Automatically

Future admin/dashboard builds should default to:
- stable record models
- explicit statuses
- overview plus detail separation
- search or strong filtering
- structured edit sections
- previews
- uploads
- placement controls when content appears in multiple surfaces
- real auth for anything beyond a concept
- logs or status feedback for important actions

This is the baseline if we want our apps to feel professional instead of decorative.
