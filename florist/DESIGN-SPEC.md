# Local Florist Design Spec

This document captures the reusable design logic from the Floristería Calero concept.

Use it for:
- florists
- gift-driven local retail
- same-day delivery shops
- businesses where purchases are emotional, urgent, or occasion-based

---

## 1. Business Model

This kind of business is not just "retail".

It usually combines:
- catalog products
- urgent purchases
- emotional purchases
- local delivery trust
- higher-value service lines like weddings or funeral work

That means the website should not behave like a generic online store.

---

## 2. Conversion Model

### Primary conversions
- call the shop
- order same-day flowers
- request wedding/event work
- request urgent funerary delivery

### Why
Many florist purchases happen under one of these conditions:
- last-minute gift
- emotionally sensitive moment
- event planning
- uncertainty about what to choose

The user often wants reassurance before a complex checkout flow.

---

## 3. Homepage Rules

The homepage should communicate these things immediately:
1. local florist identity
2. same-day delivery if true
3. own delivery / careful handling if true
4. purchase by occasion
5. direct contact path
6. real business photography or real sourced imagery

### Strong homepage pattern
- local positioning
- large emotional headline
- same-day delivery line
- phone CTA
- category cards by occasion
- a short curated product shelf
- dedicated blocks for weddings/events and funerary service

---

## 4. Best Category Logic

For florists, customers often think by **occasion**, not botanical category.

Better labels:
- Cumpleaños
- Amor
- Gracias
- Hoy mismo
- A gusto del florista
- Condolencias

Worse first-layer labels:
- mixed internal categories
- deeply nested product taxonomies
- too many similar bouquet groupings with no emotional context

---

## 5. Trust Signals

These matter more than generic e-commerce polish:
- local address
- visible phone number
- opening hours
- same-day delivery
- own delivery service
- what happens if recipient is not there
- hospitals/tanatorios coverage

These should appear above the fold or very early on the page.

---

## 6. High-Value Service Pages

A florist site often needs separate pages for:
- weddings and events
- funerary service

Why:
- they have different questions
- they require different calls to action
- they can produce larger orders than normal bouquets

Treat them as service pages, not just extra categories.

---

## 7. Product Page Rules

Product pages should answer:
- who this bouquet is for
- what kind of moment it suits
- price clearly
- how delivery works
- how to contact quickly
- what the product actually looks like with real imagery

Product copy should describe the bouquet or arrangement itself.
It should never read like commentary about the redesign or about UI choices.

For florists, a clean product page can outperform a feature-heavy one.

---

## 8. Operational Layer

If the business updates products often, the prototype should include a lightweight management path.

Good options:
- editable local data file
- simple admin panel
- import/export flow for catalog data
- image upload from phone or computer
- placement controls for homepage visibility

The reason is practical:
- a premium storefront that cannot be maintained still feels like a mockup
- adding operational control makes the concept much easier to sell as a real app
- the admin should feel calm and obvious, not like a developer tool dropped into the project

Admin guidance:
- separate products, homepage copy, and access/settings into distinct sections
- show a live preview while editing
- make placement choices explicit: catalog only, featured shelf, editorial slot
- support image upload in addition to pasted URLs
- use labels that map to the page, not to implementation details

---

## 9. Visual Direction

Best visual direction for this concept:
- warm neutrals
- one floral accent family
- one dark tone for contrast
- elegant serif headline font
- clean sans-serif body
- enough spacing to feel premium
- real-source photography from the business wherever possible

Avoid:
- hard template-store layouts
- too many simultaneous modules
- default WooCommerce feel
- visual noise near urgent CTAs
- fake or invented imagery when real work already exists

---

## 10. Good CTA Patterns

Best CTA options:
- Llamar ahora
- Encargar hoy
- Ver colecciones
- Solicitar propuesta

For urgent or sensitive pages:
- phone first
- form second

Contact and service forms can be lightweight if no backend exists yet, but they should still produce a usable action such as a prefilled email draft.

---

## 11. Reuse Rules

Reuse this system when:
- the business is local
- the purchase is emotional or time-sensitive
- customers need light guidance
- the site has both products and services
- the catalog is curated enough that a lightweight admin path is realistic

Still improve this system when reused:
- add stronger text constraints and copy guidance inside the admin
- improve visual polish of internal dashboards, not just the public storefront
- replace front-end-only access with real auth if the project becomes production

Do not reuse blindly when:
- the catalog is huge and search-heavy
- the business is pure luxury editorial retail
- the purchase is low-emotion and comparison-driven
