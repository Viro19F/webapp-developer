# Luxury E-Commerce Research — What the Best Sites Do

Research from: Christofle, Juliska, Net-a-Porter, Mr Porter, Matches Fashion, Aesop, Everlane, Bang & Olufsen

---

## Typography Rules
1. **Max 2 font families** — one serif display, one sans-serif body
2. **High-contrast serifs** (Didot, Garamond, Bodoni) = heritage & sophistication
3. **Uppercase + letter-spacing** (1-2px) for labels, buttons, nav
4. **Line-height 1.3-1.6** for body text
5. **Dramatic size hierarchy** — H1 can be 4-6rem while body is 1rem
6. Christofle uses Garamond at 6rem for H1

## Spacing — The #1 Luxury Signal
> "Double your margins. Then double them again."

- Use CSS `clamp()` for responsive spacing: `clamp(24px, 5vw, 160px)`
- Full-screen hero sections
- Product grid density: 4/row = variety, 3/row = balanced, 1/row = editorial
- Max-width 1200-1440px with generous side padding

## Color Strategy
- **Neutrals as foundation** — black, white, cream, warm grays
- **Single accent color max** — Tiffany Blue, Hermès Orange, Christofle Gold
- Avoid multiple competing colors — restraint = confidence
- Beige/cream (#FBF9F6) feels warmer than pure white
- Christofle: Gold #7C6923 + cream #FBF9F6 + text #191919

## Animations — Choreography, Not a Dance Party
- **300ms** for fast interactions (buttons, hovers)
- **500ms** for navigation transitions
- **1000ms** for image transitions (cinematic)
- **Never use linear easing** — always cubic-bezier
- Curves: `.3,1,.3,1` (smooth), `.6,0,.4,1` (navigation)

### Must-Have Micro-Interactions
1. Link underline growing 0→100% width on hover
2. Button color/shadow elevation on hover + active
3. Cart drawer slide-in with background blur
4. Scroll-triggered section reveals (gentle fade-up, 20px)
5. Image hover showing alternate product view
6. Quick-add overlay appearing on product card hover
7. Input label float animation on focus
8. Add-to-cart confirmation animation (color change → revert)

## Navigation Patterns
- **Two-tier header**: logo/icons on top, category links below
- **Mega menus** with 4-7 columns for many categories
- **Mobile**: accordion drawer with nested sections
- **Sticky header** with backdrop-filter blur
- Search integrated in header (capped width for elegance)
- Christofle: 56px mobile header, 100px desktop

## Product Pages
1. **6-8 high-res images minimum** with zoom
2. **"Complete the Look"** cross-sell section
3. **Editorial descriptions** — tell a story, don't list specs
4. **"How to Style/Use"** content
5. Size/dimension guides with measurements
6. Clear shipping + returns (reduces purchase anxiety)
7. 3D/AR views = 94% conversion lift

## Cart & Checkout
1. **Slide-out drawer cart** (NOT a separate page) — luxury standard
2. Background blur when cart is open
3. Mini cart count in header with animation
4. **One-page checkout** reduces abandonment
5. Guest checkout must be available
6. Show shipping costs + delivery estimates in cart

## Search
1. **Predictive/autocomplete** is mandatory
2. Visual results with product images
3. Response time < 200ms
4. Algolia is industry standard

## Email Capture
1. First-visit incentive (10% off) — Net-a-Porter, Saks do this
2. "Exclusive access" language, NOT "subscribe to newsletter"
3. Footer placement as standard
4. Exit-intent popup (elegant, not aggressive)
5. Loyalty program signup integrated with email capture

## Wishlist & Accounts
1. Wishlist usable without account (session-based → prompt to save)
2. Tiered loyalty programs
3. Personal styling at higher tiers
4. Saved addresses/payment for frictionless repeat purchases

## Mobile
- Mobile-first, NOT responsive-second
- 56px minimum touch targets
- Accordion nav replacing mega menus
- Drawer menu with nested sections
- Sticky header with cart count + search
- 0.1s speed improvement = 3.6% conversion increase

## Key Stats
- First impressions form in **50 milliseconds**
- **40%** leave if page takes >3 seconds
- **78%** consider product images "extremely important"
- Average luxury e-commerce order: **$436**

## Sites to Study
| Site | Why |
|---|---|
| Christofle | Gold standard for tableware — serif typography, gold+cream palette |
| Juliska | Collection-first navigation, lifestyle categories |
| Net-a-Porter | Editorial commerce — shoppable magazine |
| Aesop | Replicates physical store experience online |
| Everlane | Strongest imagery + UX + content combo |
| The White Company | Perfect reference for home goods — emotive photography |

---

*Last updated: March 20, 2026*
