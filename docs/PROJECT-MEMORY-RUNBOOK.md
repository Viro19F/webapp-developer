# Project Memory Runbook

This repo is not only for building websites. It is also a memory system for building better websites on the next client.

Every new client should produce reusable knowledge, not just page files.

---

## 1. Read Order Before Building

Before starting a new client build, read in this order:

1. `CLIENT-BRIEF.md` or `clients/<name>/BRIEF.md`
2. `INDUSTRY-PLAYBOOK.md`
3. `docs/LEARNINGS.md`
4. The most similar design-spec or experiment folder
   - Example: `matcha/DESIGN-SPEC.md`
5. The closest existing client folder in `clients/`

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
- `docs/<CLIENT-NAME>-DESIGN-SPEC.md`
- `docs/QA-REPORT-<CLIENT-NAME>.md` when testing is actually run
- `docs/LEARNINGS.md` updated with client-specific lessons
- `INDUSTRY-PLAYBOOK.md` updated only if the lesson generalizes beyond one client

### Optional artifacts
- `products.js` or structured local data file
- research doc for niche market patterns
- deployment notes if the site has unusual constraints

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

### If the client is unclear
- start with `INDUSTRY-PLAYBOOK.md`
- use `docs/LEARNINGS.md` for universal patterns

---

## 7. Quality Standard

A build is not complete when the page exists.

A build is complete when:
- the page exists
- the file structure is reusable
- testing exists or is planned clearly
- learnings are written down
- the next similar site can be built faster because of this one

---

## 8. Current Memory Assets

At the time of writing, the repo has these reference points:
- Le Tavole = luxury home-goods e-commerce
- Mori Matcha = curated specialty retail with a physical-first conversion path

Future projects should add to this library instead of replacing it.
