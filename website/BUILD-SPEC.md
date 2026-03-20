# Website Build Spec

This document captures the default rules for building strong business websites.

Use it for:
- brochure sites
- service business websites
- local business sites
- content-led company sites
- lightweight commerce sites
- website rebuilds and redesign concepts

Related research:
- `docs/WEBSITE-SYSTEMS-RESEARCH.md`

---

## 1. Core Objective

A strong website should do four things clearly:
1. explain the offer
2. guide the user to the next action
3. build trust quickly
4. stay fast, accessible, and maintainable

If the site looks good but fails one of those, it is not actually strong.

---

## 2. Start With Business Logic, Not Layout

Before designing, define:
- who the site is for
- what the business sells
- what the primary CTA is
- what trust signals matter most
- what objections the visitor has
- what content changes often
- whether the business needs an admin or only a simple publishing flow

Good websites are built around decision flow, not section count.

---

## 3. Default Page Structure

For most business sites, the homepage should answer these questions in order:
1. What is this?
2. Why should I trust it?
3. What should I do next?
4. Why choose this over the alternatives?
5. What happens if I contact or buy?

Strong default homepage sequence:
- clear hero with one primary CTA
- proof or trust strip
- offer or category overview
- why it is different
- featured products/services
- testimonials or credibility
- FAQ or objection handling
- final CTA

Use more sections only when they reduce confusion.

---

## 4. Content Rules

### People-first content
- Write for the visitor, not for search engines.
- Keep pages specific and useful.
- Match each page to a clear intent.
- Avoid filler copy that only sounds polished.

### Page-level specificity
- Every important page needs its own headline, summary, and value.
- Repeating the same generic copy across pages weakens both conversion and SEO.

### Real proof
- Use real photography where possible.
- Show location, hours, certifications, reviews, team, portfolio, or case evidence where relevant.
- Local businesses feel dramatically stronger when the content is visibly theirs.

### CTA discipline
- One primary CTA per page
- secondary CTA only when it genuinely supports the journey
- button labels should describe the action: `Call now`, `Book tasting`, `Request proposal`, `See availability`

---

## 5. Responsive Design Rules

- Build mobile-first
- treat tablet as its own layout pass, not just a stretched phone
- use media queries to adapt layout, not to patch broken desktop assumptions
- prefer flexible components over hard page-specific dimensions
- protect line length and spacing at all breakpoints
- keep tap targets generous
- do not hide critical business information on mobile

For images:
- use responsive images where possible
- avoid shipping oversized desktop images to phones
- reserve eager loading for high-priority above-the-fold media

---

## 6. Performance Rules

Performance is product quality.

Default rules:
- keep HTML/CSS/JS simple unless complexity is justified
- minimize third-party scripts
- compress and properly size images
- use modern formats when appropriate
- lazy load below-the-fold media
- do not lazy load the LCP image
- reduce layout shift by reserving space for images and embeds
- keep fonts limited and predictable
- prefer server or build-time rendering over client-only rendering for content-heavy pages

Operational rule:
- static by default
- dynamic only when the business problem requires it

---

## 7. Accessibility Rules

Minimum standard:
- semantic HTML first
- visible labels on forms
- instructions before or with the input
- keyboard access to navigation and interactive controls
- strong contrast
- meaningful alt text where images carry content
- dialog, form, and grouped controls clearly labeled
- no motion that hides or delays critical information

Important accessibility principle:
- use native HTML before adding ARIA
- placeholder text is guidance at most, not a label

---

## 8. Form Rules

Forms should collect only what is needed for the next business step.

For most lead forms:
- name
- email or phone
- one context field
- message only if it helps qualification

Good form behavior:
- clear labels
- helpful format hints
- autofill-friendly fields
- obvious success/error states
- no vague submit buttons
- clear expectation of what happens next

---

## 9. SEO Rules

SEO should follow usefulness, not manipulation.

Default rules:
- unique page titles and meta descriptions
- page-specific headings
- useful structured data where relevant
- clean URLs
- crawlable pages
- sitemap submission
- canonical handling when duplication exists
- helpful main content above thin boilerplate

For local/service sites:
- location context
- service context
- real trust details

For product sites:
- product-specific copy
- price and availability when relevant
- product structured data where applicable

---

## 10. Image and Media Rules

- real business images beat generic stock almost every time
- if photography is missing, use branded illustration or controlled placeholders, not random stock
- compress before deploy
- provide dimensions where possible
- keep decorative motion subtle and optional
- do not autoplay disruptive media with sound

---

## 11. CMS / Editing Threshold

Do not add a CMS just because it sounds professional.

Use a static or low-complexity build when:
- content changes rarely
- one person manages updates
- the site is mainly a presentation layer

Add a CMS or admin when:
- products/services change often
- multiple people manage updates
- homepage placements need to change
- forms, inventory, or publishing states matter operationally

---

## 12. QA Standard

Before launch, confirm:
- page loads are fast enough
- mobile layout is solid
- all CTAs work
- forms submit or route correctly
- preview and production content match expectations
- metadata is present
- no obvious console errors
- images and embeds load correctly
- core accessibility basics are covered

---

## 13. What We Should Reuse Automatically

Future website builds should default to:
- business-first page structure
- mobile-first layout
- semantic HTML
- real proof
- lightweight stacks where possible
- performance-aware image handling
- visible labels and clear forms
- page-specific copy and metadata
- static-first architecture unless the business problem requires more

This is the baseline for a website that feels professional, not improvised.
