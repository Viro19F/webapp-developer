# Mori Matcha Design Spec

This document captures the design logic behind the Mori Matcha experiment so future builds can reuse the same decisions without reverse-engineering the page.

Related files:
- `clients/mori-matcha/index.html`
- `clients/mori-matcha/shop.html`
- `clients/mori-matcha/product.html`
- `clients/mori-matcha/contact.html`
- `clients/mori-matcha/ritual.html`
- `clients/mori-matcha/styles.css`
- `clients/mori-matcha/products.js`

---

## 1. Project Summary

**Business type:** Small specialty retail store  
**Location model:** Physical-first local store with a curated product shelf  
**Product focus:** Matcha tins, latte blends, ritual tools, and small sweets  
**Core positioning:** Calm, premium, and approachable matcha for people who want a repeatable ritual, not a trend-driven wellness brand

### Primary goal
Build a page that makes a niche product feel clear and desirable fast.

### Secondary goals
- Make first-time buyers feel guided instead of overwhelmed
- Show the store has taste and a point of view
- Create a structure that can grow into a full retail site

---

## 2. Customer Model

### Primary customer
- Urban buyer in their 20s to 40s
- Interested in better routines, food culture, and quiet premium experiences
- Curious about matcha but not necessarily informed
- Wants a product recommendation that feels trustworthy and edited

### What this customer needs
- Clear difference between ceremonial, daily, and latte products
- Low-friction explanation of how to start
- A sense that the shelf is curated, not cluttered
- A soft next step: visit, tasting, starter kit, guided recommendation

### What this customer does not want
- Overly technical tea language
- Generic wellness branding
- A noisy e-commerce catalog
- Hard-sell checkout pressure before they understand the product

---

## 3. Conversion Strategy

### Chosen conversion path
**Soft conversion first, purchase second.**

Main CTA:
- `Book tasting`

Why:
- The store is physical-first
- Matcha is a product category with educational friction
- A tasting reservation builds trust better than forcing a cart flow on first contact

### Supporting conversion paths
- Browse featured products
- Read ritual guide
- View product detail pages
- Visit the store

### Key rule
For specialty retail with education friction, the first CTA should often be guidance-based, not transaction-first.

---

## 4. Information Architecture

### Required pages
- `index.html` = emotional entry point + shelf logic + featured products
- `shop.html` = use-case based product catalog
- `product.html` = product detail with tasting/use guidance
- `ritual.html` = educational layer
- `contact.html` = visit, hours, reservation form

### Why this structure works
- Homepage answers: "What is this store and why should I care?"
- Shop answers: "What should I buy?"
- Product page answers: "Why this specific item?"
- Ritual page answers: "How do I use it?"
- Contact page answers: "How do I visit or reserve?"

---

## 5. Content Strategy

### Core messaging frame
Use calm, tactile, specific language.

Best-performing tone:
- quiet
- premium
- edited
- human
- useful

Avoid:
- hype language
- "superfood" framing
- aggressive productivity copy
- vague luxury filler

### Hero copy formula
1. Short brand descriptor
2. Large emotional headline
3. One paragraph explaining the shelf and why it exists
4. Primary CTA + educational secondary CTA
5. Small proof notes below

### Product copy formula
Each product should answer:
1. What is it?
2. Who is it for?
3. How does it taste or feel?
4. Why is it on the shelf?
5. How should it be used?

### Important copy pattern
Organize products by **use case**, not by abstract category or brand.

Examples:
- For your quiet bowl
- For weekday cups
- For milk drinks
- For first kits
- For gifts

---

## 6. Visual Direction

### Visual objective
Make the page feel handcrafted and calm without becoming rustic, sleepy, or overly minimal.

### Design principles
1. **Soft premium over loud premium.**
2. **Warmth over stark whiteness.**
3. **Restraint over decoration.**
4. **Editorial spacing over dense merchandising.**
5. **Branded atmosphere over stock photography.**

### Color system
- `--forest`: dark green anchor
- `--forest-deep`: dark header / contrast base
- `--moss`: green accent for softness
- `--oat`: warm light background
- `--clay`: warm accent for contrast and detail

### Typography
- Display: serif (`Cormorant Garamond`) for mood, taste, and premium feel
- Body: modern sans-serif (`Manrope`) for clarity and readability

### Why this pairing works
- Serif gives the ritual emotional weight
- Sans-serif keeps the page usable and modern
- The combination avoids default startup aesthetics

---

## 7. Layout System

### Hero structure
- Left: message, CTA, brand logic
- Right: stylized matcha scene with bowl, whisk, and tin abstraction

### Section rhythm
Alternate between:
- light neutral sections
- softly tinted panels
- spacious editorial blocks

### Card language
Use rounded cards with:
- soft borders
- high transparency whites
- subtle shadows
- low visual noise

### Motion
Use only subtle reveal motion:
- opacity + translateY
- around 500ms
- no bounce
- no hyperactive micro-interactions

---

## 8. Component Rules

### Navigation
- Sticky header
- Minimal nav items
- Mobile toggle below desktop breakpoint
- CTA in header always visible on desktop

### Product cards
Must include:
- image/art
- category/use signal
- short description
- price
- clear detail-page link

### Product detail
Must include:
- origin
- size
- tasting notes
- shelf reason
- ingredients or contents
- best serving method

### Contact / visit page
Must include:
- exact address
- store hours
- reservation path
- email and phone
- short FAQ for first-time buyers

---

## 9. Product Data Model

The local `products.js` structure worked well for early experimentation.

Recommended product fields for specialty retail:
- `id`
- `name`
- `category`
- `price`
- `size`
- `origin`
- `tasting`
- `badge`
- `description`
- `details`
- `ingredients`
- `serving`
- `featured`
- `related`

### Why this matters
This supports:
- homepage featured products
- shop filters
- product detail pages
- related product recommendations
- future starter bundles

---

## 10. Reuse Rules For Future Builds

Use this spec when a future client has these traits:
- specialty retail
- physical store or showroom
- curated product line
- educational friction before purchase
- taste-driven or ritual-driven category

Examples:
- tea shop
- specialty coffee brand
- skincare boutique
- apothecary
- home fragrance store
- chocolate or pastry concept store

### Reuse what
- use-case based product taxonomy
- educational content inside the sales flow
- soft conversion CTA
- warm editorial spacing
- branded placeholder visuals when photography is missing

### Do not reuse blindly when
- the store is discount / price-led
- the catalog is huge and search-heavy
- the product is commodity-like and not explanation-heavy
- the business is digital-only with no need for in-person trust-building

---

## 11. Next Experiments

Best follow-up tests for this pattern:
1. Add starter bundles to see if the "what else do I need?" hesitation drops
2. Add predictive product finder based on use case
3. Test cart drawer vs reservation-first flow
4. Add local-store proof elements: pickup, event nights, workshop dates
5. Test richer product imagery once real photography exists

---

## 12. Prompting Guidance For Future AI Builds

When building a similar client, the AI should:
1. Start from the client brief
2. Read `INDUSTRY-PLAYBOOK.md`
3. Read `docs/LEARNINGS.md`
4. Read this document if the project resembles specialty retail
5. Choose the conversion path before designing the homepage
6. Define the category model before writing product cards
7. Capture learnings back into repo docs after review

### Short reusable instruction
"For curated specialty retail, explain the shelf, organize products by use case, keep the visual system calm and premium, and use education as part of conversion."
