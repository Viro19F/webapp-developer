# Website Analytics / Measurement Spec

This document captures reusable measurement rules for websites and web apps.

Use it for:
- brochure sites
- service-business sites
- ecommerce
- landing pages
- operational websites

Related research:
- `docs/ANALYTICS-MEASUREMENT-RESEARCH.md`

---

## 1. Core Objective

Measurement should answer:
1. who is visiting
2. what they are doing
3. whether the site is performing well
4. whether the main business outcomes are happening

If analytics does not help answer those, it is just extra script weight.

---

## 2. Default Measurement Stack

For most website work, think in layers:
- traffic and page measurement
- conversion events
- performance measurement
- search visibility monitoring

Good default tools:
- privacy-aware traffic analytics when possible
- GA4 when marketing/conversion reporting needs it
- Search Console for search visibility
- real-user performance data where possible

---

## 3. Event Rules

- measure business-relevant actions, not everything possible
- use recommended events where the platform benefits from them
- distinguish between page engagement and business outcomes

Strong default events:
- form submit
- call click
- WhatsApp click
- book/reserve click
- add to cart
- begin checkout
- purchase
- search
- important file download if relevant

---

## 4. Conversion Rules

- decide what counts as a key event before launch
- separate "useful interaction" from "business conversion"
- align conversion definitions with how the business actually sells

Examples:
- service site: `generate_lead`, `call_click`, `book_visit`
- store: `purchase`, `begin_checkout`, `add_to_cart`
- content site: newsletter signup, demo request, account start

---

## 5. Performance Measurement Rules

- measure real-user performance, not only local Lighthouse scores
- Core Web Vitals should be part of the reporting system
- preview and production performance should be considered separately when the platform supports it

Track especially:
- LCP
- CLS
- INP or current interaction metric support
- page-level performance differences

---

## 6. Search Visibility Rules

- connect Search Console early
- check indexing, rich results, and recommendations after launch
- use search data to improve content and page targeting over time

---

## 7. Privacy Rules

- use the minimum analytics complexity needed for the business
- prefer privacy-aware options when third-party ad attribution is not required
- consent requirements should be considered before adding analytics or marketing tools

---

## 8. What We Should Reuse Automatically

Future websites should default to:
- a defined measurement plan
- a small core event set tied to business value
- conversion/key-event mapping
- Search Console connection
- real-user performance monitoring
- privacy-aware analytics choices where possible

This is the baseline for websites that can actually improve after launch.
