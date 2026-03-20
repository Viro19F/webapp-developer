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

## Universal Learnings (Apply to Every Client)

### Design Rules That Always Work
1. **Max 2 fonts.** Serif display + sans-serif body. Never 3+ fonts.
2. **60-30-10 color rule.** 60% neutral bg, 30% secondary, 10% accent for CTAs.
3. **Whitespace is luxury.** More padding = more premium feel. Cramped = cheap.
4. **Consistent border-radius.** Pick one (4px for luxury, 12px for friendly) and stick to it.
5. **Scroll animations.** IntersectionObserver + opacity/translateY. Subtle (20px, 0.6s). Never bouncy.
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

### Already Implemented (Le Tavole v2)
- [x] Schema.org markup (LocalBusiness + Product JSON-LD)
- [x] Open Graph meta tags
- [x] Playwright automated testing (53 tests)
- [x] Brand filter with live JavaScript

### Already Implemented (Mori Matcha experiment)
- [x] Use-case based product filtering
- [x] Branded placeholder product art without stock images
- [x] Soft-conversion CTA for physical retail ("Book tasting")
- [x] Educational copy embedded directly in the shopping flow

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

---

*Last updated: March 20, 2026 — after Le Tavole and Mori Matcha experiments*
