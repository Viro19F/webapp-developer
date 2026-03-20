# Mori Matcha Thought Process

This document records the explicit decision logic behind the Mori Matcha page so future work can reuse the reasoning without starting from zero.

This is a design rationale document, not hidden internal chain-of-thought.

---

## 1. Core Problem

The page needed to solve a difficult retail problem:
- the product category is niche
- the customer may be curious but under-informed
- the store is small and curated
- the business benefits from trust before transaction

That means the page cannot behave like a generic online store.

---

## 2. Main Strategic Choice

### Decision
Treat the website like a guided specialty-retail experience, not a broad e-commerce catalog.

### Why
- Matcha is easier to buy when someone explains it
- A smaller product line feels stronger when the curation is visible
- The store has a physical presence, so "visit" and "tasting" are strong actions
- Trust matters before checkout

---

## 3. Why The Homepage Was Built This Way

### The hero needed to do four jobs
1. establish taste
2. explain the store quickly
3. lower product anxiety
4. provide a strong next step

### Result
The homepage uses:
- a calm emotional headline
- one paragraph that explains the shelf
- a primary CTA for tasting
- a secondary CTA for learning
- proof notes to make the store feel specific

This is more effective for specialty retail than jumping directly to a dense product grid.

---

## 4. Why The Product Categories Are Use-Case Based

### Decision
Organize products by how people will use them, not by generic internal labels.

### Why
People new to matcha do not always know what "ceremonial grade" means in practice.

They do understand:
- straight bowl
- weekday cup
- latte
- starter kit
- gift

Use-case language reduces confusion and improves self-selection.

---

## 5. Why The CTA Is "Book Tasting"

### Decision
Use a soft-conversion CTA in the main nav and homepage.

### Why
- physical-first store
- trust-first category
- educational sales environment
- stronger local-store positioning

This CTA says:
"You do not have to know everything yet. Come in and we will guide you."

That is strategically stronger than pushing checkout too early.

---

## 6. Why The Visual Language Is Calm Instead Of Trendy

### Decision
Use warm neutrals, green accents, serif display typography, and quiet motion.

### Why
- matcha already carries cultural and ritual cues
- the page should feel grounded, not loud
- the store wants quiet premium, not mass-market wellness
- soft visual discipline makes small retail feel more trustworthy

### Specifically avoided
- neon green
- startup SaaS layout patterns
- generic wellness beige with no structure
- over-ornamented luxury styling

---

## 7. Why Branded SVG Product Art Was Used

### Decision
Create inline branded product visuals in local code.

### Why
- no real photography existed yet
- stock images would weaken trust
- a consistent visual placeholder still lets the prototype feel branded
- it keeps the experiment portable and self-contained

This is a good tactic for early-stage client concepts when photography is not ready.

---

## 8. Why The Site Includes A Ritual Page

### Decision
Add a page dedicated to product education and use guidance.

### Why
- specialty retail often requires buyer education
- educational content should not be buried in product descriptions alone
- this gives the customer a low-pressure path before purchase

For niche categories, education is conversion support, not extra content.

---

## 9. Why The Product Detail Fields Were Chosen

### Fields included
- origin
- size
- tasting notes
- shelf reason
- ingredients or contents
- best serving method

### Why
For this kind of store, these fields answer the practical buying questions faster than generic specs alone.

The customer wants:
- what this tastes like
- what this is good for
- whether it fits their routine

---

## 10. What Should Be Reused Next Time

Reuse for similar specialty retail:
- use-case categorization
- educational product framing
- physical-store CTA
- calm editorial spacing
- curated featured shelf
- small FAQ for first-time buyers

---

## 11. What Should Change For Other Clients

Do not reuse this exact structure when:
- the business is service-led instead of product-led
- the store is discount-oriented
- the catalog is too large for curation-first browsing
- direct checkout matters more than guidance
- the brand wants high energy instead of calm precision

---

## 12. Fast Decision Rules

If the client sells a niche product and buyers hesitate because they do not know what to choose:
- teach first
- simplify category logic
- guide the visitor toward one good first action

If the client has a physical store:
- consider visit, tasting, fitting, consultation, or pickup as the primary CTA

If the product photography is missing:
- use high-quality brand-consistent placeholders, not random stock imagery
