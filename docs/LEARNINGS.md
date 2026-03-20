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

## Research #1: Successful Backoffice Apps (Stripe, Shopify, Linear, Vercel, Notion)

This is cross-project research rather than one client. It matters because we are not only building websites anymore. We are building software behind websites too.

### What Repeats In Strong Apps
1. **One source of truth, many views.** Notion, Shopify, and Linear all show the same records in different ways instead of duplicating data to support each workflow.

2. **Overview first, detail second.** Stripe, Shopify, and Vercel separate attention surfaces from deep editing screens. Good apps show what needs action first, then give a focused detail page to act on it.

3. **Search is core infrastructure.** Strong tools treat search as a main navigation system, not a nice extra. Once records grow, nav-only systems break down.

4. **Statuses need behavior behind them.** Shopify product states and Linear SLA states work because each label has operational meaning. A color badge without defined behavior is not enough.

5. **Editing works best in guided sections.** Shopify's product editor is strong because it splits editing into meaningful chunks like media, inventory, pricing, publishing, and metadata instead of one endless form.

6. **Permissions are part of product design.** Stripe and Notion both show that role boundaries shape how safe and usable the system feels. Access design is not cleanup work.

7. **Previews and logs build trust.** Vercel and Stripe both reduce anxiety by showing what changed, what failed, and where to inspect the result.

### What I Learned For Our Builds
1. **Admin quality needs the same design attention as the public site.** A premium storefront plus a weak dashboard still feels like an unfinished product.

2. **Backend and display architecture have to be designed together.** The data model should support multiple surfaces, and the interface should reflect that model clearly.

3. **Homepage placement should be a first-class field, not custom code.** If a record can appear in more than one place, the admin needs explicit placement controls.

4. **Search/filtering should enter earlier in our process.** We should not wait until the dataset becomes painful before designing for findability.

5. **Text fields need constraints.** Strong apps do not leave critical UI copy entirely unstructured. They add field purpose, limits, visibility rules, and preview context.

6. **Preview, draft, and live states should be treated as separate realities.** This is especially important once a site becomes editable by staff instead of only by us.

7. **Observability belongs in small apps too.** Even a lightweight CMS should tell the user whether an upload, publish, import, or save worked.

### What We Should Reuse Next
1. **Stable record model**
2. **Overview page + detail page split**
3. **Structured edit sections**
4. **Strong statuses**
5. **Search or at least real filtering**
6. **Uploads + previews**
7. **Role-aware access once the app becomes production**

See `docs/BACKOFFICE-APP-RESEARCH.md` and `backoffice/DESIGN-SPEC.md` for the reusable system rules behind these findings.

---

## Research #2: Website Systems (Build, Deploy, Sell)

This research matters because a better website process is not only about design taste. It is also about build quality, deployment decisions, and how the work is sold.

### What Repeats In Strong Websites
1. **Responsive quality is component-level, not a late breakpoint patch.** Good responsive systems handle layout, typography, imagery, and interaction together.

2. **Performance is a structural decision.** Strong sites protect Core Web Vitals early, especially image handling, script weight, and LCP behavior.

3. **Semantic HTML beats decorative complexity.** Native elements, visible labels, and clear structure still outperform clever custom UI that is harder to use and maintain.

4. **Helpful content beats SEO-shaped filler.** Strong search performance comes from useful, page-specific content with good metadata and structure.

5. **Deployment has to match the product honestly.** Static hosting is great for static sites, but operational apps need real backend and persistence decisions.

6. **Preview workflows are part of product quality.** Strong deployment platforms all treat previews, environments, and roll-forward safety as first-class concerns.

7. **Selling websites works better when the pitch is diagnostic.** The strongest sales model is consultative: research first, identify the business issue, then propose the site as the solution path.

### What I Learned For Our Builds
1. **Static-first should stay our default.** Many websites do not need backend complexity, and adding it too early creates cost without value.

2. **When a site becomes operational, the architecture should change clearly.** Admin-backed websites should move to real backend thinking, not pretend to remain static.

3. **Forms need stronger UX discipline.** Labels, instructions, autofill, and success states are part of conversion quality, not small details.

4. **Deployment choice is part of design quality.** A premium-looking site deployed on the wrong platform will still create a weak client experience later.

5. **Sales, deployment, and build logic should live in memory together.** If those stay separate, the AI can make a nice page but still miss the business system around it.

### What We Should Reuse Next
1. **Business-first homepage structure**
2. **Semantic HTML and visible labels**
3. **Static-first architecture**
4. **Preview deployment workflows**
5. **Postgres over SQLite for real operational apps**
6. **Consultative audit + proposal sales process**

See `docs/WEBSITE-SYSTEMS-RESEARCH.md`, `website/BUILD-SPEC.md`, `website/DEPLOYMENT-PLAYBOOK.md`, and `website/SALES-PLAYBOOK.md`.

---

## Research #3: Ecommerce Conversion Systems

This research matters because stores do not fail only on design. They often fail on discovery, trust, cart flow, and checkout friction.

### What Repeats In Strong Ecommerce Sites
1. **Checkout friction is still one of the biggest losses.** Cart abandonment remains extremely high, so checkout clarity is revenue-critical.

2. **Guest checkout should be obvious.** If buying without an account feels hidden or discouraged, stores create avoidable drop-off.

3. **Search has to reflect real buyer behavior.** People search by use case, symptom, occasion, and copied wording, not only by neat internal taxonomy.

4. **Product pages need to resolve hesitation.** Price, imagery, trust, shipping, returns, and useful explanation belong close to the decision point.

5. **Hidden costs and vague shipping language still kill conversion.** Uncertainty near purchase is one of the fastest ways to lose trust.

### What I Learned For Our Builds
1. **Search deserves more attention earlier in store builds.**
2. **Guest checkout should be the default assumption.**
3. **Product pages should answer "why buy this now?" not only "what is this?"**
4. **Use-case navigation and bundles are especially valuable in specialty retail.**

See `docs/ECOMMERCE-CONVERSION-RESEARCH.md` and `ecommerce/CONVERSION-SPEC.md`.

---

## Research #4: Lead-Generation Website Systems

This research matters because service sites convert differently than stores. Their job is to create confidence and make contact feel easy.

### What Repeats In Strong Lead-Gen Sites
1. **Specific CTAs beat generic ones.** `Get a quote` or `Book inspection` is stronger than `Submit`.

2. **Shorter forms reduce unnecessary friction.** Lead forms should collect only what the next step needs.

3. **Landing pages work better when they focus on one offer and one action.** Too much navigation and mixed intent weakens campaigns.

4. **Trust often matters before detail.** Reviews, credentials, local proof, and response expectations can matter more than long copy early in the page.

5. **The website and the sales process should feel like one system.** Discovery, outreach, CTA language, and follow-up all need to align.

### What I Learned For Our Builds
1. **Button copy and next-step messaging need more deliberate design.**
2. **Service homepages should usually be built around one dominant action.**
3. **Campaign pages deserve their own structure, not just a homepage remix.**
4. **The AI should think about site conversion and sales workflow together.**

See `docs/LEAD-GENERATION-RESEARCH.md` and `leadgen/CONVERSION-SPEC.md`.

---

## Research #5: CMS / Backend Architecture For Production Websites

This research matters because editable websites stop being simple frontend work once multiple editors, previews, roles, and publishing workflows enter the picture.

### What Repeats In Production-Oriented Content Systems
1. **Draft and published states should be separate.** Preview and live are different realities.

2. **Environment discipline matters.** Development, staging, and production content should not blur together.

3. **Permissions need granularity.** Editors, publishers, and admins should not all have the same power.

4. **Webhooks are part of the system architecture.** Rebuilds, notifications, and sync flows depend on them.

5. **Auth and authorization must live below the UI.** Front-end gates are fine for concepts, not for real editorial systems.

### What I Learned For Our Builds
1. **Production CMS work needs a stronger architectural baseline than our current concept admins.**
2. **Preview should become a first-class feature in serious website systems.**
3. **Postgres plus server-side auth is the safer default for real multi-user website apps.**
4. **Content modeling should be treated as product design, not just database setup.**

See `docs/CMS-BACKEND-ARCHITECTURE-RESEARCH.md` and `cms/ARCHITECTURE-SPEC.md`.

---

## Research #6: Analytics / Measurement Systems

This research matters because a website that cannot be measured cannot be improved with confidence.

### What Repeats In Strong Measurement Systems
1. **Events need hierarchy.** Not every interaction should be treated like a business outcome.

2. **Conversions should match real goals.** Leads, calls, purchases, bookings, and search use are different signals and should not be collapsed carelessly.

3. **Search visibility needs its own monitoring surface.** Search Console adds operational information that normal analytics tools do not replace.

4. **Performance measurement should use real-user data where possible.** Local testing is useful, but live traffic reveals the real experience.

5. **Analytics choice should consider privacy.** Not every site needs a heavy traditional tracking stack.

### What I Learned For Our Builds
1. **We should define measurement plans during the build, not after launch.**
2. **Search Console should be treated as a standard launch step for serious sites.**
3. **A small, useful event set is better than measuring every click.**
4. **Privacy-aware analytics can be the better default when marketing complexity is low.**

See `docs/ANALYTICS-MEASUREMENT-RESEARCH.md` and `analytics/MEASUREMENT-SPEC.md`.

---

## Research #7: Localization / Multilingual Website Systems

This research matters because multilingual sites break quickly when translation, SEO, and locale behavior are treated as separate afterthoughts.

### What Repeats In Strong Localized Sites
1. **Language and region need to be modeled deliberately.** A multilingual site is not automatically a multi-regional one.

2. **Alternate versions need explicit signals.** Distinct URLs and correct hreflang relationships matter.

3. **Locale-aware formatting is part of product quality.** Dates, currencies, and numbers should match the audience.

4. **Translation has to feel complete.** Mixed-language critical flows create both user and quality problems.

5. **Framework support helps, but strategy still matters more.** URL structure, locale scope, and fallback logic need decisions.

### What I Learned For Our Builds
1. **Localization should be treated as architecture, not just copy replacement.**
2. **Locale formatting rules should be part of the build spec for multi-market sites.**
3. **We should not add many locales without a maintenance plan.**
4. **Multilingual SEO and translation workflows need to be planned together.**

See `docs/LOCALIZATION-RESEARCH.md` and `localization/LOCALIZATION-SPEC.md`.

---

## Research #8: Launch Compliance For EU-Facing Websites

This research matters because safer launches depend on cookies, privacy choices, and accessibility being handled deliberately before production.

### What Repeats In Safer Launches
1. **Cookie and tracking decisions must be explicit.** Not all storage technologies are equal, and optional tracking should not be added carelessly.

2. **Consent needs to be meaningful where required.** Accept/refuse behavior should not be fake.

3. **Accessibility is part of launch quality.** For EU-facing digital services, accessibility pressure increased after the European Accessibility Act became applicable in June 2025.

4. **Analytics and embeds affect compliance posture.** Third-party scripts are not neutral additions.

### What I Learned For Our Builds
1. **We should launch with less accidental tracking.**
2. **Cookie/analytics choices belong in architecture decisions, not only in legal cleanup.**
3. **Accessibility review should happen before production.**
4. **For higher-risk launches, we should explicitly note when counsel is still needed.**

See `docs/COMPLIANCE-LAUNCH-RESEARCH.md` and `compliance/LAUNCH-COMPLIANCE-SPEC.md`.

---

## Research #9: Current Trend Signals By Area

This research matters because not everything in the repo should be timeless. Some decisions should respond to what is changing right now.

### What Repeats In Current Trend Signals
1. **Commerce is moving into AI conversations.** Product discovery is spreading beyond traditional website browsing.

2. **Observability, analytics, and AI-assisted development are converging.** Modern platforms increasingly connect code, runtime, performance, and telemetry.

3. **Discoverability is no longer only classic SEO.** AI crawlers are now a meaningful part of how the web is processed.

4. **Localization and multi-market work are becoming more structural.** Platforms and search guidance keep reinforcing explicit locale and market architecture.

5. **EU-facing launches carry stronger accessibility and tracking pressure than before.**

### What I Learned For Our Builds
1. **We should distinguish evergreen rules from trend-aware decisions.**
2. **Structured data and clean content models are becoming even more valuable because both humans and AI systems consume them.**
3. **Measurement and observability should be treated as product infrastructure, not just reporting.**
4. **We should be careful not to chase trend theatre.**

See `trends/TRENDS-BY-AREA-2026.md`.

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

### Features Every Operational App Needs
1. **Clear statuses** with behavior behind them
2. **Search or filtering** once the data can grow
3. **Overview screen** for attention and priorities
4. **Detail pages** for focused editing
5. **Structured forms** grouped by user intent
6. **Upload support** where images or documents matter
7. **Preview of result** when content affects a public page
8. **Permissions model** appropriate to risk level
9. **Action feedback** for saves, imports, publishes, and failures

### Features Every Professional Website Needs Beyond Design
1. **A clear deployment path** before launch
2. **A real domain and HTTPS plan**
3. **An editing strategy** even if the answer is "no CMS needed"
4. **Performance-aware media handling**
5. **Accessible forms and interactions**
6. **Metadata and structured data** where relevant
7. **A proposal and handoff model** if the site is being sold as a service

### Features Every Strong Ecommerce Site Needs
1. **Search or strong product discovery**
2. **Product pages that resolve hesitation**
3. **Visible shipping and returns clarity**
4. **Guest checkout**
5. **Trust near the point of purchase**

### Features Every Strong Lead-Gen Site Needs
1. **One dominant CTA**
2. **Short high-intent forms**
3. **Trust above the fold or very early**
4. **Specific next-step language**
5. **Sales-process alignment**

### Features Every Strong Measured Website Needs
1. **A defined event plan**
2. **Key events tied to business outcomes**
3. **Search Console or equivalent search visibility review**
4. **Performance monitoring beyond local tests**
5. **Analytics choices that match privacy posture**

### Trend-Aware Reminders
1. **Not every trend deserves implementation**
2. **AI-facing discoverability is becoming more relevant**
3. **Observability is moving into the default stack**
4. **Multi-market structure matters more than casual translation**
5. **EU accessibility pressure is materially higher now than it was pre-2025**

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
7. **Search-first admin patterns** — global search, recent items, saved filters where the data model justifies it
8. **Draft/live publishing model** — make editable websites feel safer and more production-ready
9. **Role-aware admin routing** — viewer/editor/admin permissions instead of one flat admin surface
10. **Deployment decision tree** — static, serverless, or backend-backed from the start of each build
11. **Proposal templates tied to business outcome** — stronger sales repeatability
12. **Search and autocomplete patterns for stores** — especially use-case aware discovery
13. **Preview-first CMS workflows** — drafts, preview links, publish logs, and safer editorial systems
14. **Measurement planning in the build phase** — events, key events, and performance signals before launch
15. **Localization architecture templates** — URLs, hreflang, locale formatting, and fallback logic
16. **Trend refresh cadence** — keep time-sensitive memory updated instead of letting it fossilize

### Medium Priority
17. **Cookie consent banner** — required for EU clients (GDPR)
18. **Newsletter popup** — elegant, "exclusive access" language, 10% off incentive
19. **Skeleton loading states** — gray placeholders while images load
20. **Product image zoom** — click/hover to see detail
21. **"Complete the Look" section** — cross-sell on product pages
22. **Audit/event feed for admin actions** — especially for uploads, imports, and publishing
23. **Default launch checklist** — DNS, HTTPS, preview, forms, analytics, metadata
24. **Dedicated landing-page templates for ads and outreach campaigns**
25. **Compliance-aware launch checklist** — cookies, accessibility, privacy pages, and tracking review
26. **AI-discoverability review** — structured content and machine-readable product/site surfaces

### Nice to Have
27. **Dark mode toggle**
28. **3D/AR product views** (94% conversion lift per research)
29. **Tiered loyalty program**
30. **Virtual consultation booking**
31. **Keyboard-first admin shortcuts** for power users
32. **Reusable outreach + proposal pack** for local business pitches
33. **Durable media storage templates** for operational websites
34. **Localized component libraries** for multilingual rollouts
35. **Trend dashboard or refresh note** inside the repo

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

*Last updated: March 21, 2026 — after Le Tavole, Mori Matcha, Floristería Calero, admin panel research, Tapeo/Qargo analysis, backoffice app research, website systems research, ecommerce conversion research, lead-gen research, CMS/backend architecture research, analytics research, localization research, compliance launch research, and trend research by area*
