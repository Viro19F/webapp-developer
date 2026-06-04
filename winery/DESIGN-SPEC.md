# Winery & Wine Tourism — Design Spec

Reusable system memory for organic wineries, vineyards, and wine-tourism destinations.

First captured during the Bodegas Pinuaga build (June 2026).

---

## Project type
- Premium / family-owned winery
- Doubles as a wine-tourism destination (visits + tastings + lunch + harvest experiences)
- Often a small e-commerce element (direct-to-consumer bottles)
- Marketing pitch / redesign for an existing brand

## Audience
- Couples and small groups, 25–40
- Looking for unique, aesthetic, memorable experiences — not just "another tour"
- Decision-making weighted toward emotion and storytelling, not specs
- Often planning a weekend escape from a major city

## Business model
- Bookings: per-person paid experiences (€20–€100+ depending on depth)
- Bottle sales: direct + retail
- Private group / event hire: corporate, celebrations, hen parties
- Press / wine-club / distribution as secondary

---

## Primary CTA hierarchy
1. **Book a Visit** — in nav, hero, every experience card, sticky on mobile, in CTA banners
2. **WhatsApp** — floating button, in contact, in CTAs (LATAM + EU markets prefer it)
3. **Phone** — direct callable links in nav-adjacent header on mobile if traffic is older

The single dominant action across the site is reserving a visit. Bottle sales are a secondary action — never compete with the primary CTA.

---

## Page structure (minimum)
1. **Home** — storytelling-led, lots of photography, every section ends in a CTA
2. **About / Story** — family history, sustainability decisions, the people, the place
3. **Wines** — collection grid + flagship spotlight + clickable detail modals
4. **Visits / Experiences** — full-page deep-dive on each experience tier, booking form
5. **Contact** — address, phone, email, map, hours, WhatsApp, message form

---

## Visual direction

### Palette — "wine country"
Avoid: dark luxury cliché, generic cellar darkness, anything that screams stock photography.
Lead with: warm cream, deep wine red as text, terracotta as accent, olive/wheat as soft secondary.

Pinuaga reference:
- Background cream `#F7F3EC`
- Surface bone `#FBF9F4`
- Text wine `#2A1A1F`
- Accent terracotta `#B8553D`
- Olive `#6B7548`
- Gold `#C9A961` (sparingly — for awards, footer accents)

### Typography
- Display: a sharp/editorial serif (Cormorant Garamond, Maharlika, Playfair). Italic accents read as confident, not desperate.
- Body: a clean grotesque sans (Inter, Livvic). Avoid wide humanist fonts.
- Logo: usually a wordmark + tagline + tiny mark. Treat as a typography element, not a sticker.

### Photography priority
1. **People in the vines** — the crew, the family, hands. Authentic > stock every time.
2. **Wine being made** — vat, fermentation, hand-stirring. Shows craft.
3. **Sweeping vineyard shots** — wide landscape with horizon. The "place" matters.
4. **Lifestyle moments** — wine on a table, bottle on the way to a picnic, glasses by the vines. Captures the 25–40 target's aspirational frame.
5. **Bottle product shots** — keep for the wines page modals, not as hero imagery.

### Layout principles
- Big hero photo, minimum-fold copy, one primary CTA, one secondary
- Generous whitespace — luxury reads through padding, not ornament
- Editorial split layouts (image + text) used 3–5 times per page — reads premium
- Stats strip with serif numerals (e.g. "60 / years of tradition")
- Quote callouts in italic display font for storytelling beats
- Footer in dark wine/ink with cream type — anchors the whole document

### Layout patterns that worked
- **Magazine-spread philosophy section**: image left (with italic quote overlay), numbered list right (01/02/03 with hairline dividers). Killed the AI "3-symmetric-card" feel.
- **Experience cards in 3-grid**: aspect-ratio 4:3 image, meta (duration / group size), title, short body, price + Book CTA in foot.
- **Lifestyle moment section**: full-bleed image + short editorial copy + CTA. Distinct from product photography. Speaks directly to the audience without selling.

---

## Wine card → modal pattern (reusable)

Catalogue grids of any product where each item has rich detail (wines, dishes, hotel rooms, treatments) benefit from a click-to-modal flow:

- Card: tag (category), name, vintage/sub-detail, one-line description
- Hover: small arrow indicator appears (`::after` content)
- Click: opens a modal with `data-wine` (or generic `data-product`)

Modal anatomy:
- Left: dedicated product image, padded, drop-shadow, contain-fit on a cream gradient — looks like a product showcase
- Right: scrollable body with eyebrow tag, large italic name, vintage line, italic lede, **Tasting notes**, **Pair with**, technical specs (grape, aging, alcohol, production), award (if any), CTAs to Visit + Online
- Close on X / backdrop click / Escape key
- Modal scroll resets each open

This pattern fits any rich product catalogue. Save the JS in `wines.html`/`modal.js` of any winery client and adapt the data shape.

---

## Content strategy

### Voice
- First-person plural ("we", "our family")
- Specific over vague ("200 cepas planted by our grandparents") beats abstract ("century-old tradition")
- Numbers ground claims: "60 years", "700 metres altitude", "100% organic"
- Spanish words sprinkled into English copy reads authentic: "Bodega", "Cencibel", "Manchego"

### What every winery page needs
- A family or origin story (1965, the grandfather, etc.) — even if the actual founders are different now
- Specific sustainability practice claims (not just "eco" — *what* you do)
- A flagship wine with a story (years, vines, awards)
- An experience offering that sounds personal, not industrial
- Real photography of the place and the people

### What to avoid
- Generic "passion for wine" copy — every winery says it, nobody believes it
- Stock photo "rolling vineyards" — readable in 2 seconds
- Awards-as-decoration when there's no context
- Bottle-shot-on-white as hero imagery — looks like e-commerce, not a destination
- "Premium" / "boutique" / "artisanal" without proof

---

## Operational layer

### Booking form
- Simple, 6–8 fields max: name, email, phone, guests, experience, date, optional message
- mailto fallback for prototype / pitch stage
- Confirms in 24h with personal email — set expectation in form

### WhatsApp
- Pre-filled message: `Hello%2C%20I%27d%20like%20to%20book%20a%20visit%20at%20[Winery]`
- Float button on every page
- Lives next to phone in contact

### Map
- Google Maps embed on contact page
- Light grayscale + sepia filter to match the brand palette (`filter: grayscale(0.3) sepia(0.08);`)

### Online shop
- For redesign pitches, link out to existing shop — don't try to rebuild e-commerce on day one
- If the shop is part of scope, use the wine-modal pattern as the product detail page

---

## What we learned that generalizes beyond wineries

1. **Real product photography from the client's existing site beats anything else** for redesign pitches. WordPress sites usually have `/wp-content/uploads/` with the assets — they can be fetched and inlined for a believable pitch.
2. **Transparent-PNG logo > blend-mode hack on JPEG**. Process the file once with Pillow → PNG with proper alpha. Blend modes leak edge artifacts.
3. **Single-file shareable HTML** with base64 images + JS image map + SPA hash routing is the right format for marketing pitches. The client opens one file and sees the whole site.
4. **When a section feels "AI-generated"**, it's almost always because it's symmetric and text-only. The fix is asymmetry + photography, not better copy.
5. **The "lifestyle moment" section** (one full-bleed lifestyle image + emotive copy) is now part of our standard premium-brand toolkit. It works because most brand sites lean too hard on either product or process — the lifestyle frame is rare.

---

## What still needs work

- Wine modal needs a "next/previous wine" navigation at the bottom for browsing
- Bottle photography from third-party sites is inconsistent in style (some studio, some still-life). A real client engagement should shoot consistent bottle photography first.
- The art-on-the-bottle story (artist Miguel Ángel Muñoz Zamora) could be its own page with a label gallery — left as a single paragraph for now
- Online shop integration not in scope yet — when added, use Snipcart or Stripe Checkout per the e-commerce spec
- The booking form currently uses mailto — for production, swap to a server-backed form (Formspree, Resend, or own backend)
