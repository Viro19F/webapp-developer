# Learnings — What I Know About Building Professional Websites

This document evolves. Every client teaches something new. I update it after each project.

---

## Client #1: Le Tavole (Luxury Tableware E-Commerce, Santo Domingo)

### What Worked
1. **Real content > placeholder content.** Scraping actual products with real images, prices, and descriptions made the site feel legitimate immediately. Stock photos kill credibility for luxury brands.

2. **Shared CSS file.** Moving styles into `styles.css` instead of inline per page = consistency + easy updates. Every page looks cohesive because they share the exact same design tokens.

3. **Industry-appropriate design.** Gold + navy + warm cream with Cormorant Garamond serif font communicates luxury. For a gym it would be wrong — bold sans-serif + dark bg + red accents. Design must match the industry.

4. **Brand filter on shop page.** Simple JavaScript filter (no backend needed) adds real interactivity. Customers of luxury tableware shop BY BRAND — this is how they think.

5. **WhatsApp as primary CTA.** In the Dominican Republic and Latin America, WhatsApp IS the business communication tool. Pre-filled WhatsApp messages with product names = instant lead.

6. **Two-tier navigation.** Logo/icons on top, category links below. This is the standard for luxury e-commerce (Christofle, Net-a-Porter all do this).

7. **Product detail page with specs.** Material, origin, dimensions, SKU, care instructions — these matter for $300+ purchases. Trust comes from transparency.

### What I Learned (Mistakes & Fixes)
1. **WooCommerce products load dynamically.** Can't scrape category pages — products load via JavaScript/AJAX. Solution: fetch individual product URLs which have full data in HTML.

2. **Strict mode in Playwright.** When an element appears in both content AND footer, Playwright throws strict mode errors. Solution: scope locators to specific sections (`.contact-items a[href="..."]`).

3. **Homepage was too long initially.** The inline styles made index.html 54KB. Should have used shared CSS from the start. Lesson: always start with external CSS.

4. **Missing "Nosotros" link in nav.** The About page existed but wasn't in the navigation. Always verify EVERY page is reachable from nav.

### Technical Decisions
- **No build tools needed.** Pure HTML/CSS/JS works perfectly for static showcase sites. No webpack, no React, no complexity.
- **Phosphor Icons over FontAwesome.** Lighter, cleaner, consistent style. One script tag.
- **Google Fonts: 2 fonts max.** Display (serif) + Body (sans-serif). Loading more hurts performance.
- **CSS variables for theming.** Change `--gold` and `--navy` and the whole site updates. Makes per-client customization trivial.

---

## Client #2: Mori Matcha (Specialty Matcha Retail, Madrid)

### What Worked
1. **Use-case navigation beats generic category language.** For matcha, customers think in outcomes: ceremonial bowl, weekday latte, first kit, sweet pairing. Organizing the page this way reduces hesitation quickly.

2. **Education has to live inside the page.** Tasting notes, serving guidance, and a short ritual explanation are not optional extras for specialty tea. They are part of the product itself.

3. **A strong mood line clarifies the whole brand.** "Matcha for slow mornings and clear afternoons" gave the page a clear emotional frame and made the product mix feel coherent.

4. **Branded product art is better than placeholder photography.** When real product photos do not exist yet, custom SVG pack art keeps the prototype feeling intentional and premium instead of fake.

5. **Physical-store retail needs a soft conversion path.** For a small neighborhood shop, "Book tasting" can be stronger than pushing checkout immediately. It matches how customers build trust in a niche product.

### What I Learned (Build-Level)
1. **Small retail pages should explain the shelf logic.** If the product mix is curated, the page must explain why each product exists and who it is for.

2. **Product detail pages for food/drink retail need different fields than luxury home goods.** Origin, tasting notes, and best-use guidance matter more than long technical specs.

3. **A one-page experiment can still generate reusable system knowledge.** Even when the first artifact is just a landing page or homepage, the copy structure, category model, CTA strategy, and visual system can all feed future builds.

4. **Local JS product data is enough for early experiments.** A simple `products.js` file makes it easy to test filters, product detail pages, and starter bundles before adding a cart or backend.

5. **Small-store premium does not mean luxury-cliche.** Soft neutrals, one green family, restrained motion, and calm spacing work better than overdone wellness visuals.

### Technical Decisions
- **Shared CSS + data-driven catalog.** The matcha experiment uses one `styles.css` file and local product data so new retail concepts can be swapped in quickly.
- **Inline SVG product visuals.** Product artwork is generated locally so the page can feel branded before photography is ready.
- **Expandable structure.** The homepage can act as the first experiment page, then grow into a fuller catalog and product detail flow without changing the visual language.

---

## Client #3: Floristería Calero (Local Florist Concept, Madrid)

### What Worked
1. **Real business photography immediately raised the credibility of the redesign.** For a local florist, using the shop's own imagery works far better than invented art or generic placeholders.

2. **Occasion-led shopping is stronger than product-led navigation for florists.** Customers buy for birthdays, romance, thanks, or condolences. That framing is much clearer than generic bouquet categories.

3. **Urgency and reassurance should appear before the catalog.** Same-day delivery, local address, phone number, and own delivery service are not secondary details. They are core conversion drivers.

4. **Separate pages for weddings and funerary work create clearer service value.** These are not just extra categories. They are distinct, higher-stakes service lines with different user intent.

5. **A florist can feel premium without looking luxury-fashion.** Warm neutrals, wine tones, olive accents, editorial spacing, and controlled surfaces gave the concept a stronger local-premium feel than a template store layout.

6. **A lightweight admin panel makes the concept feel like a real app.** Being able to add, edit, delete, import, and export products turns a redesign from a static mockup into an operational prototype.

7. **Placement controls make the homepage reusable.** Letting the admin decide whether a flower lives only in the catalog, in the main featured shelf, or in an editorial homepage section makes the site much easier to adapt without rebuilding layout code.

8. **Photo upload is a meaningful threshold.** The moment the business can take a new photo and push it into the product flow, the site stops feeling like a concept and starts feeling usable.

### What I Learned (Build-Level)
1. **Local retail with emotional purchases should lead with trust.** This means phone, delivery promise, hours, and location need to appear early and often.

2. **FAQ content often contains the best sales copy.** In Floristería Calero's case, details about reparto propio, Sundays/festivos, hospitals, and tanatorios are exactly the reasons people trust the business.

3. **Product pages for florists should explain the moment, not just the SKU.** The customer wants to know when this bouquet fits and how quickly it can be delivered.

4. **Customer-facing copy must sound like the business, not like a redesign note.** If the page keeps saying what the redesign fixed, it still feels like a mockup instead of the finished site.

5. **Service-plus-store businesses need both catalog pages and service pages.** A florist is not only an online shop. It also sells event work, urgent fulfillment, and local expertise.

6. **Operational forms beat decorative forms.** A simple mailto-prep flow is enough to make event, contact, and funerary forms function without a backend.

7. **Motion should never gate content.** Scroll-reveal patterns are fine only if the page still reads correctly in screenshots, fast scans, and non-scroll contexts.

8. **Backoffice quality matters almost as much as storefront quality.** If the admin panel feels rough, the overall app still feels unfinished even when the public pages look strong.

9. **Text systems need constraints, not just textareas.** When every field is free-form and unbounded, copy can quickly become messy. Good CMS flows need guidance, previews, and eventually character limits or clearer content roles.

10. **Prospect research can become reusable system memory.** Auditing a live Madrid business is useful not only for outreach, but also for improving future redesign strategy in the same category.

### Technical Decisions
- **Small local catalog in JS + localStorage admin.** The florist concept uses `catalogo.js` plus an admin panel so storefront and operations share the same lightweight data model.
- **Real remote imagery from the live business.** The concept uses Floristería Calero's own photos to keep the redesign believable and premium.
- **Operational lead forms without backend complexity.** Contact, event, and funerary forms prepare structured emails so the prototype is usable immediately.
- **Service-page architecture.** Weddings/events and funerary work were given their own conversion paths instead of being buried inside general store navigation.

### What Still Needs Work
1. **Admin hierarchy can be cleaner.** The panel is now much more useful, but it still needs one more pass to feel truly polished as software rather than a strong prototype.

2. **Text controls need better guardrails.** Some fields can still create awkward visual results if the entered copy is too long or too dense.

3. **The access gate is only lightweight front-end protection.** It is fine for a static concept, but a production admin needs real server-side authentication and roles.

---

## Universal Learnings (Apply to Every Client)

### Design Rules That Always Work
1. **Max 2 fonts.** Serif display + sans-serif body. Never 3+ fonts.
2. **60-30-10 color rule.** 60% neutral bg, 30% secondary, 10% accent for CTAs.
3. **Whitespace is luxury.** More padding = more premium feel. Cramped = cheap.
4. **Consistent border-radius.** Pick one (4px for luxury, 12px for friendly) and stick to it.
5. **Scroll animations.** Subtle motion can help, but never hide essential content by default or depend on scroll to reveal critical sections.
6. **Sticky nav.** Always. With backdrop-filter blur and subtle shadow on scroll.
7. **Mobile hamburger below 768px.** Nav links become full-width stacked.

### Features Every Business Site Needs
1. **Click-to-call phone number** (visible on every page)
2. **WhatsApp button** (especially for LATAM, Caribbean, Europe)
3. **Contact form** (name, email, phone, subject, message)
4. **Google Maps embed** on contact page
5. **Social media links** (footer minimum, contact page ideal)
6. **Business hours** visible somewhere
7. **Meta descriptions** on every page (SEO)
8. **Mobile responsive** (test at 375px, 768px, 1024px)

### Testing Checklist (Playwright)
Run these for EVERY client site before delivery:
- [ ] All pages load (no 404s)
- [ ] Page titles are correct
- [ ] Nav links work cross-page
- [ ] Logo links back to home
- [ ] Mobile menu opens/closes
- [ ] WhatsApp button visible + correct number
- [ ] Contact form has all fields
- [ ] No console errors on any page
- [ ] All pages load under 5 seconds
- [ ] Meta descriptions exist on all pages
- [ ] Phone/email links are clickable
- [ ] Images load (no broken images)

### Pricing Guidance (What We've Seen)
- Simple 1-page landing: €500-800
- Multi-page business site (5 pages): €1,000-2,000
- E-commerce with products: €2,000-4,000
- Full rebuild of existing site: €1,500-3,000

### File Structure Standard
```
clients/<name>/
├── index.html          ← Homepage
├── styles.css          ← Shared styles
├── tienda.html         ← Shop/products (if applicable)
├── producto.html       ← Product detail (if applicable)
├── nosotros.html       ← About
├── contacto.html       ← Contact
├── servicios.html      ← Services (if applicable)
└── assets/             ← Local images, logos
```

---

## What to Improve Next (Priority Order)

### Already Implemented
- [x] Schema.org markup (LocalBusiness + Product JSON-LD)
- [x] Open Graph meta tags
- [x] Playwright automated testing (55 tests)
- [x] Brand filter with live JavaScript
- [x] Dynamic product pages with URL params (?id=)
- [x] Product database (products.js with 36 real products)
- [x] Out-of-stock state handling
- [x] Related products linking correctly

### Already Implemented (Mori Matcha experiment)
- [x] Use-case based product filtering
- [x] Branded placeholder product art without stock images
- [x] Soft-conversion CTA for physical retail ("Book tasting")
- [x] Educational copy embedded directly in the shopping flow

### Already Implemented (Floristería Calero concept)
- [x] Occasion-based local retail navigation
- [x] Dedicated service pages for weddings/events and funerary work
- [x] Trust-first florist homepage with phone and same-day delivery above the fold
- [x] Prospect audit and outreach copy registered as repo memory
- [x] Real-source business photography in the concept
- [x] Lightweight admin panel for editable catalog management
- [x] Homepage placement controls for products
- [x] Image upload flow from the admin panel

### High Priority (Next Client)
1. **Slide-out cart drawer** — opens from right with background blur (luxury standard)
2. **Predictive search** — live results as you type with product images
3. **Image lazy loading** — `loading="lazy"` on all images below fold
4. **Mega menu dropdowns** — for sites with many categories
5. **Input label float animation** — label moves up on focus
6. **Image hover swap** — show alternate product angle on hover

### Medium Priority
7. **Cookie consent banner** — required for EU clients (GDPR)
8. **Newsletter popup** — elegant, "exclusive access" language, 10% off incentive
9. **Skeleton loading states** — gray placeholders while images load
10. **Product image zoom** — click/hover to see detail
11. **"Complete the Look" section** — cross-sell on product pages

### Nice to Have
12. **Dark mode toggle**
13. **3D/AR product views** (94% conversion lift per research)
14. **Tiered loyalty program**
15. **Virtual consultation booking**

## Key Insight from Luxury Research
> "Spacing is the #1 signal of luxury. Double your margins. Then double them again."

See `docs/LUXURY-ECOMMERCE-RESEARCH.md` for full analysis of Christofle, Juliska, Net-a-Porter patterns.

## Admin Panel Knowledge (from Tapeo + Qargo + Industry Research)

### What I Know Now
- Left sidebar (5-7 items) + top bar + main content area is the universal pattern
- Express + SQLite + session auth (proven in Tapeo & Qargo) is the right stack
- Tabler template (40K stars, Bootstrap 5, free) as rapid admin base
- htmx (16KB) for dynamic ops without React/Vue
- Give clients CONTENT editing, not DESIGN editing

### Reusable Code from Existing Apps
- **Tapeo:** KPI cards, status badges, bar charts, demo data fallback, dark/light toggle
- **Qargo:** CSS tokens file, API wrapper, audit trail, invoice numbering, i18n, AI copilot

### What Clients Actually Need to Edit
Business info, hero text, about section, menu/products, gallery, team bios, testimonials, social links, announcements

### What Must Stay Fixed
Layout, colors, fonts, nav structure, footer, forms, SEO, responsiveness

See `docs/ADMIN-PANEL-GUIDE.md` and `docs/PROGRESSION.md` for full details.

---

*Last updated: March 20, 2026 — after Le Tavole, Mori Matcha, Floristería Calero, admin panel research + Tapeo/Qargo analysis*
