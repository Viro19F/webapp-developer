# AI Progression — How Claude Learned to Build Websites

This document tracks the evolution of my capabilities as a web development partner.

---

## Commit 1: Foundation (c8ecce7)
**What was built:** Basic workspace — client brief template, process doc, industry playbook (9 industries), base HTML template, first Le Tavole homepage with inline styles.

**What I knew at this point:**
- How to structure a web agency workflow
- Design rules per industry (colors, fonts, layout patterns)
- Basic HTML/CSS/JS site structure
- Unsplash stock images as placeholders

**Limitations:** Everything was generic. Stock images. Fake product names. All styles inline. No multi-page. No real data.

---

## Commit 2: Full Multi-Page Site (2647d06)
**What was built:** 6 files — homepage, shop (tienda), product detail, about, contact + shared CSS. 36 real products scraped from letavole.com with actual images and prices.

**What I learned:**
- Scrape real content from existing sites (WooCommerce loads products via JS — must fetch individual product URLs)
- Shared CSS > inline styles (consistency + smaller files)
- Industry-specific design: gold + navy + Cormorant Garamond = luxury tableware
- Two-tier navigation is the luxury standard
- WhatsApp is the #1 CTA for LATAM businesses

**Jump in quality:** Went from placeholder to real. Site looks legitimate because content is real.

---

## Commit 3: Testing + SEO + Documentation (81864f5)
**What was built:** 53 Playwright tests, QA report, learnings doc, Schema.org JSON-LD, Open Graph meta tags.

**What I learned:**
- Playwright strict mode: scope locators to specific sections when elements repeat
- Always test: page loads, nav links, mobile menu, WhatsApp, forms, console errors, load times, meta tags
- Schema.org LocalBusiness + Product markup for SEO
- OG tags so links look good when shared on social media
- Document what works and what doesn't after every project

**New capability:** Automated quality assurance. No site ships without 100% test pass rate.

---

## Commit 4: Luxury Research (e480792)
**What was built:** Comprehensive analysis of Christofle, Juliska, Net-a-Porter, Mr Porter design systems. Prioritized improvement roadmap.

**What I learned from the best luxury sites:**
- Spacing is the #1 luxury signal — use CSS clamp() for responsive padding
- Animations: 300ms buttons, 500ms nav, 1000ms images. Always cubic-bezier, never linear
- Slide-out cart drawer (not a separate page) is the luxury standard
- Predictive search with product images is expected
- Serif + sans-serif pairing: Garamond/Playfair for display, Inter/Lato for body
- 60-30-10 color rule: 60% neutral, 30% secondary, 10% accent on CTAs
- Editorial commerce: blend content/storytelling with shopping (Net-a-Porter model)

**New capability:** I now design based on research, not guesswork. Every choice has a reference.

---

## Commit 5: Dynamic Product System (ba4648f)
**What was built:** products.js database with 36 products. Dynamic product page reads `?id=` from URL. Every link is unique. Related products link correctly. Out-of-stock state works. 55 tests all passing.

**What I learned:**
- Static sites can feel dynamic with URL parameters + JavaScript
- Product database as a JS object = no backend needed, instant filtering
- Every product link must go to the right product (obvious but I missed it initially)
- Test for specific product loading, not just "page loads"
- Out-of-stock products need different UX (hide add-to-cart, show "Agotado")

**Bug I fixed:** All products linked to the same detail page. Critical UX failure. Now each of 36 products has its own unique page.

---

## Commit 6: Mori Matcha Experiment (e2183f8)
**Client:** Specialty matcha retailer concept, Madrid
**What I learned:**
- Use-case navigation beats generic categories for specialty retail (ceremonial, daily, latte, gifts)
- Education must live inside the shopping flow (tasting notes, caffeine feel, serving guide)
- Branded SVG product art works when photography isn't ready yet
- Physical stores need soft conversion CTAs ("Book tasting" > "Buy now")
- Small opinionated catalogs convert better than large noisy ones

## Commit 7: Floristería Calero Concept (1be6b92)
**Client:** Local florist redesign concept, Madrid
**What I learned:**
- Occasion-based navigation for florists (birthday, romance, thank you, condolence)
- Same-day delivery, phone, hours must be above the fold for urgent-purchase businesses
- Dedicated pages for high-value services (weddings, funerary) — not just categories
- Real business photography > concept art for local business pitches
- Lightweight admin panel with product CRUD, image upload, homepage placement controls
- FAQ content often contains the strongest sales copy
- Admin quality matters as much as storefront quality
- Motion should never gate critical content

## Commit 8: Admin Panel Knowledge + Existing App Analysis (current)
**What I studied:**
- WordPress, Shopify, Stripe, Squarespace, Vercel admin panels
- Tapeo project: Express + SQLite + session auth + admin dashboard + business dashboard
- Qargo project: Full CRM + invoicing + document management + AI copilot + activity logs

**What I now know about admin panels:**
- Left sidebar (5-7 items max) + top bar + main content area
- Stat cards at top (3-4 KPIs with trend arrows)
- Data tables with filters, search, pagination
- Session-based auth (express-session + bcrypt) is sufficient
- Give clients content editing, NOT design editing
- Tabler template (40K GitHub stars) as base for rapid admin development
- htmx (16KB) for dynamic operations without React/Vue

**Reusable patterns from existing apps:**
- Tapeo: KPI cards, status badges, horizontal bar charts, demo data fallback, dark/light toggle
- Qargo: CSS design tokens file, centralized API wrapper, i18n support, activity audit trail, invoice auto-numbering, AI copilot with business context injection

---

## Capability Matrix

| Capability | C1 | C2 | C3 | C4 | C5 | C6 | C7 | C8 |
|---|---|---|---|---|---|---|---|---|
| Static HTML pages | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Real scraped content | No | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Multi-page sites | No | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Shared CSS system | No | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Automated testing | No | No | 53 | 53 | 55 | 55 | 55 | 55+ |
| SEO (Schema, OG) | No | No | Yes | Yes | Yes | Yes | Yes | Yes |
| Luxury design patterns | No | No | No | Yes | Yes | Yes | Yes | Yes |
| Dynamic product pages | No | No | No | No | Yes | Yes | Yes | Yes |
| Specialty retail UX | No | No | No | No | No | Yes | Yes | Yes |
| Local business concepts | No | No | No | No | No | No | Yes | Yes |
| Admin panel / CMS | No | No | No | No | No | No | Yes | Yes |
| Auth system knowledge | No | No | No | No | No | No | No | Yes |
| CRM/dashboard patterns | No | No | No | No | No | No | No | Yes |

*C1-C8 = Commits 1 through 8*

---

## What I Can Build Now (Full Stack)

**Frontend:** Multi-page responsive sites with real content, dynamic product pages, brand filters, image galleries, scroll animations, mobile-first design, industry-appropriate styling for 9+ industries.

**Backend:** Express + SQLite server with session auth, role-based access, RESTful API endpoints, file uploads, activity logging.

**Admin Panel:** Dashboard with KPI cards, data tables, CRUD forms, content editing, media management — using Tabler + htmx pattern.

**Testing:** Playwright test suites covering page loads, navigation, mobile, forms, interactivity, performance, SEO.

**SEO:** Schema.org markup, Open Graph, meta descriptions, clean URLs, image alt text.

**Deployment:** Ready for Vercel, Netlify, or Railway.

---

*Last updated: March 20, 2026*
