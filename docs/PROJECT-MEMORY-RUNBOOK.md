# Project Memory Runbook

This repo is not only for building websites. It is also a memory system for building better websites on the next client.

Every new client should produce reusable knowledge, not just page files.

---

## 1. Read Order Before Building

Before starting a new client build, read in this order:

1. `CLIENT-BRIEF.md` or `clients/<name>/BRIEF.md`
2. `INDUSTRY-PLAYBOOK.md`
3. `docs/LEARNINGS.md`
4. `website/BUILD-SPEC.md`
5. The most similar design-spec or experiment folder
   - Example: `matcha/DESIGN-SPEC.md`
6. The closest existing client folder in `clients/`
7. If the project includes admin, CMS, dashboard, or internal operations work:
   - `docs/BACKOFFICE-APP-RESEARCH.md`
   - `backoffice/DESIGN-SPEC.md`
8. If the project is being launched or sold:
   - `website/DEPLOYMENT-PLAYBOOK.md`
   - `website/SALES-PLAYBOOK.md`
9. If the project is ecommerce:
   - `docs/ECOMMERCE-CONVERSION-RESEARCH.md`
   - `ecommerce/CONVERSION-SPEC.md`
10. If the project is a service-business or landing-page lead-gen build:
   - `docs/LEAD-GENERATION-RESEARCH.md`
   - `leadgen/CONVERSION-SPEC.md`
11. If the project needs a real production content system:
   - `docs/CMS-BACKEND-ARCHITECTURE-RESEARCH.md`
   - `cms/ARCHITECTURE-SPEC.md`

### Why this order
- The brief tells you what this business is
- The playbook gives industry rules
- The learnings file tells you what has already worked
- The design-spec doc gives reusable system decisions
- The client folder gives a concrete implementation reference

---

## 2. Required Output For Every Client

Every serious client build should create or update all relevant artifacts below.

### Required artifacts
- `clients/<name>/BRIEF.md`
- `clients/<name>/index.html`
- `clients/<name>/styles.css`
- Additional pages as needed
- `tests/<name>.spec.js`

### Required memory artifacts
- design-spec doc or reusable folder in `docs/` or a top-level category folder
- `docs/QA-REPORT-<CLIENT-NAME>.md` when testing is actually run
- `docs/LEARNINGS.md` updated with client-specific lessons
- `INDUSTRY-PLAYBOOK.md` updated only if the lesson generalizes beyond one client
- `backoffice/DESIGN-SPEC.md` consulted or updated when the project includes admin, CMS, dashboard, or staff workflows
- `website/BUILD-SPEC.md` consulted for every new website build
- the closest specialized memory folder consulted when the project clearly matches one: `ecommerce`, `leadgen`, `cms`, `matcha`, `florist`

### Optional artifacts
- `products.js` or structured local data file
- research doc for niche market patterns
- deployment notes if the site has unusual constraints
- admin/backoffice prototype notes when the business needs editable products or services
- research doc for successful product patterns in comparable apps
- deployment recommendation doc or notes when hosting/platform choice matters
- proposal or outreach notes when the build is also a sales artifact
- specialized memory updates when the project teaches something reusable about conversion, CMS workflow, or sales

---

## 3. What To Capture After Each Build

Every completed build should answer these questions in writing:

1. What worked well?
2. What design direction was chosen and why?
3. What conversion path was chosen and why?
4. What content structure reduced user confusion?
5. What component patterns should be reused?
6. What mistakes happened during the build?
7. What should the next similar client inherit automatically?
8. What operational/admin flow was necessary to make the prototype credible?
9. What still felt rough even after the upgrade?

If those answers are not saved, the repo does not actually improve.

---

## 4. Design Spec Template

Each design-spec doc should capture:
- project type
- audience
- business model
- primary CTA
- page structure
- visual direction
- color system
- typography
- layout rules
- component rules
- content strategy
- operational layer (forms, admin, editable data)
- reusable lessons
- what not to reuse blindly

The goal is to save **decision logic**, not just describe the final page.

---

## 5. Generalization Rules

Only add something to `INDUSTRY-PLAYBOOK.md` if it is useful for more than one client.

Examples of what belongs there:
- specialty retail customers buy by use case
- small physical stores benefit from visit/tasting CTAs
- certain industries need product guidance before checkout
- successful admin apps separate overview, search, and detail editing clearly
- deployment and sales rules that repeat across many website projects
- ecommerce, lead-gen, and production CMS rules that clearly generalize

Keep client-specific tone, visual nuance, and one-off brand ideas in a dedicated design-spec doc instead.

---

## 6. Retrieval Rules For Future Builds

When a new request comes in, match it to the closest prior system memory:

### If the client is luxury retail
- read `docs/LUXURY-ECOMMERCE-RESEARCH.md`
- read Le Tavole files

### If the client is curated specialty retail
- read `matcha/DESIGN-SPEC.md`
- read `matcha/THOUGHT-PROCESS.md`
- read Mori Matcha files

### If the client is a florist or occasion-driven local retailer
- read `florist/DESIGN-SPEC.md`
- read `florist/THOUGHT-PROCESS.md`
- read Floristería Calero concept files

### If the project includes admin, CMS, backoffice, or internal tooling
- read `docs/BACKOFFICE-APP-RESEARCH.md`
- read `backoffice/DESIGN-SPEC.md`
- read the closest existing client with an operational layer

### If the project is ecommerce
- read `docs/ECOMMERCE-CONVERSION-RESEARCH.md`
- read `ecommerce/CONVERSION-SPEC.md`
- read the closest store-like client files

### If the project is a service-business or lead-generation build
- read `docs/LEAD-GENERATION-RESEARCH.md`
- read `leadgen/CONVERSION-SPEC.md`

### If the project needs a real production content system
- read `docs/CMS-BACKEND-ARCHITECTURE-RESEARCH.md`
- read `cms/ARCHITECTURE-SPEC.md`

### If the client is unclear
- start with `INDUSTRY-PLAYBOOK.md`
- use `docs/LEARNINGS.md` for universal patterns

### If the project is a general website build
- read `website/BUILD-SPEC.md`

### If the project is about launch, hosting, or infrastructure
- read `website/DEPLOYMENT-PLAYBOOK.md`

### If the project is a pitch, redesign offer, or sales workflow
- read `website/SALES-PLAYBOOK.md`

---

## 7. Quality Standard

A build is not complete when the page exists.

A build is complete when:
- the page exists
- the file structure is reusable
- testing exists or is planned clearly
- learnings are written down
- the copy reads like the target business, not like a redesign critique
- operational requirements are either built or explicitly documented
- remaining weaknesses are named clearly so the next iteration starts from truth, not from wishful thinking
- the next similar site can be built faster because of this one

---

## 8. Current Memory Assets

At the time of writing, the repo has these reference points:
- Le Tavole = luxury home-goods e-commerce
- Mori Matcha = curated specialty retail with a physical-first conversion path
- Floristería Calero concept = occasion-driven local florist / gifting retail
- Backoffice memory = reusable admin, CMS, dashboard, and operational app rules
- Website systems memory = reusable build, deployment, and sales rules
- Ecommerce memory = reusable store conversion logic
- Lead-gen memory = reusable service-site conversion logic
- CMS memory = reusable production content-system architecture

Future projects should add to this library instead of replacing it.
