# Learnings — Perkstage Build (Student Discount Platform)

Built March 20-23, 2026. Full-stack web app: 20 pages, 3 portals, 40+ API endpoints.

---

## What Fernando Wants (Design Preferences — CRITICAL)

### DO:
- **White/clean background** as default — Apple/Qargo energy
- **Dark/light toggle** — always offer the choice, don't force dark
- **Square/rectangular tiles** for business cards — photos with rounded corners, info below
- **Category filter pills** — rounded, centered, active fills with accent color
- **Percentage discounts only** on badges — never "2x1", "Free", "-€X", or "Deal"
- **Star ratings + review counts** on business cards — builds trust
- **Rotating/interactive elements** — auto-cycling reviews, step displays
- **Serif font for quotes** — Playfair Display italic for testimonials
- **Sora for headings** — bold, tight letter-spacing (-0.03em)
- **Minimal icons** — text-focused, no emoji clusters or Phosphor icon overload
- **Dot navigation** for carousels — active dot stretches into pill
- **Everything clickable** — every business tile opens a popup with full details

### DON'T:
- **No emojis** in UI elements (🔥⚡🎁 etc.) — looks cheap
- **No Phosphor icon boxes** as feature cards — text only
- **No colorful icon grids** for quick actions — clean text buttons instead
- **No purple** — use dark navy blue (#1E3A6E) as accent
- **No crown/badge icons** on section headers
- **No "Deal", "Free", "2x1"** labels — percentages only
- **No video backgrounds** — clean text hero preferred
- **No cheap animated figures** — keep illustrations minimal and professional
- **Don't name things "fake"** — present demo content as real

### The Sweet Spot Fernando Likes:
> "Welcoming but exclusive" — people should feel invited but also that this is not for everyone. A hybrid between an exclusive club and an approachable student app.

---

## Architecture Decisions That Worked

### Tech Stack
- **Express + SQLite + bcrypt + express-session** — proven pattern from Tapeo/Qargo
- **No React/Vue needed** — pure HTML + vanilla JS + CSS handles everything
- **Formsubmit.co for contact forms** — no backend needed for email delivery
- **Vercel deployment** with `vercel.json` — works for demos (data reseeds on cold start)

### Database Design
- 10 tables covering: users, businesses, offers, redemptions, referrals, favorites, notifications, activity_log, payments, events
- **Referral codes auto-generated** on registration (PS-XXXXXX format)
- **QR codes auto-generated** per user (PERKSTAGE-ID-XXXXXXXX)
- **Redemption frequency enforcement** built into the API (once, daily, weekly, monthly, unlimited)
- **Seed data matters** — demo with 1 admin, 5 students, 6 businesses, 11 offers, 25 redemptions, 4 events makes the app feel alive

### Auth Pattern
- Session-based with role middleware (requireAuth, requireAdmin, requireBusiness)
- **Demo auto-login routes** (/demo/student, /demo/business, /demo/admin) — critical for showing the app without passwords
- Three separate session types: userId + role for students/admin, businessId for businesses

### API Design
- RESTful endpoints grouped by portal (student, business, admin)
- **COALESCE-based partial updates** — edit only the fields you send
- **QR validation endpoint** separate from redemption — validate first, redeem second
- Activity logging on key actions (verification, redemption, status changes)

---

## Design System That Emerged

### Colors (Light Mode)
```
--bg: #FFFFFF
--bg2: #F8FAFC
--surface: #FFFFFF
--surface2: #F1F5F9
--text: #0F172A
--muted: #64748B
--border: #E2E8F0
--blue: #1E3A6E (primary dark navy)
--blue2: #2563EB
--accent: #3B82F6
--green: #10B981
--gold: #D4A853
```

### Colors (Dark Mode)
```
--bg: #050A14
--bg2: #0A1120
--surface: #0F1729
--surface2: #141E33
--text: #E8ECF4
--muted: rgba(232,236,244,.5)
--border: rgba(255,255,255,.06)
```

### Typography
- **Sora** for headings (800 weight, -0.03em letter-spacing)
- **Inter** for body text
- **Playfair Display italic** for review quotes only
- Section labels: 0.68rem, 700 weight, 0.2em letter-spacing, uppercase, accent color

### Spacing
- Section padding: 64px top
- Card padding: 16px body
- Card border-radius: 14-16px
- Image border-radius: 12px (inside card with 8px margin)
- Grid gap: 20px
- Category pills: 100px border-radius (pill shape)

### Animations
- Scroll reveal: opacity 0→1, translateY 28px→0, 0.7s ease
- Card hover: translateY(-4px), blue border, shadow
- Step/review rotation: 4-5 second intervals
- Hero badge: pulsing dot (2s ease-in-out infinite)
- Progress bar: width transition 0.3s

---

## Mistakes I Made (and Corrections)

### 1. Purple accent instead of dark navy
**What I did:** Used #6C3CE1 purple initially
**What Fernando wanted:** Dark navy blue (#1E3A6E)
**Lesson:** Always ask about accent color preference. Navy = premium, purple = tech/startup

### 2. Emoji overload
**What I did:** Added 🔥⚡🎁🍽️☕🎉💈 everywhere
**What Fernando said:** "looks cheap"
**Lesson:** Emojis in UI elements feel unprofessional. Use text labels, not emoji decorations.

### 3. Phosphor icon feature cards
**What I did:** Created feature cards with big icon boxes (ph-fork-knife, ph-coffee, etc.)
**What Fernando said:** "too many little figures that look cheap"
**Lesson:** Text-focused cards > icon-heavy cards. Icons should be subtle, not the main visual.

### 4. Video background
**What I did:** Added a full-screen video hero
**What Fernando said:** "remove the video, more Apple style"
**Lesson:** Clean text heroes are more professional than video backgrounds. Video can feel gimmicky.

### 5. Dark-only landing page
**What I did:** Built a Tapeo-style dark editorial landing page
**What Fernando said:** "I want a toggle please"
**Lesson:** Always provide dark/light choice. Don't force one mode.

### 6. Business names exposed as fake
**What I did:** Called demo businesses "fake" in conversation
**Lesson:** Present demo content as real. Never draw attention to placeholder data.

### 7. Logo iterations (failed 4+ times)
**What Fernando wanted:** PS with discount tag hanging outside
**What I kept doing:** Tag inside letters, wrong proportions, too complex
**Lesson:** SVG logos need to be tested visually. Simple > complex. When in doubt, ask for a screenshot of what they want.

### 8. "Members Only" vs "Join Free"
**What we landed on:** "Members only" badge with welcoming CTA
**Lesson:** The welcoming-but-exclusive hybrid is hard to get right. The badge creates exclusivity, the CTA creates accessibility.

### 9. Square tiles vs horizontal cards
**What I tried:** Horizontal photo-left info-right cards (like search results)
**What Fernando preferred:** Square tiles with photo on top (like Instagram/app stores)
**Lesson:** Square tiles feel more like an app. Horizontal cards feel more like a directory.

### 10. Static "How It Works" section
**What I did:** Simple numbered list
**What Fernando wanted:** "rotating things or something interactive"
**Lesson:** Static sections feel dead. Auto-rotating displays with tabs feel alive and premium.

---

## What Works on This Type of Platform

### Landing Page Structure (final version)
1. **Hero** — clean text, centered, gradient keyword, pulsing "members only" badge
2. **Partner Businesses** — category filters + square tile grid with photos, discount badges, ratings
3. **Events** — horizontal cards with date, venue, spots left
4. **How It Works** — auto-rotating tabbed display with illustrations
5. **Reviews** — big serif italic quotes, auto-rotating with dot navigation
6. **Savings Calculator** — itemized rows with green amounts + blue total card
7. **CTA** — simple centered text + button
8. **Footer** — minimal, one line

### Business Tile Design (what Fernando approved)
```
┌─────────────────────┐
│  ┌─────────────────┐ │  ← 8px margin, 12px border-radius
│  │                 │ │
│  │   [PHOTO]       │ │  ← aspect-ratio: 4/3
│  │                 │ │
│  └─────────────────┘ │
│  [15% OFF]           │  ← blue badge
│  Business Name       │  ← 0.92rem, 700 weight
│  Category    ★ 4.6   │  ← muted + gold
└─────────────────────┘
```

### Review Display (what Fernando approved)
```
"Big italic serif quote text here that
 tells a real experience story."

         ★★★★★

      Student Name
  University · City

  ● ● ● ● ●   ← dot navigation, active = pill
```

### Popup Design (Tapeo-inspired)
- Full photo at top (240px)
- Category + name + description
- Star rating + review count
- Address (clickable → Google Maps)
- Active offers with green save badges
- Two buttons: Directions + Get Your Card

---

## Competitive Intelligence (UNiDAYS vs Student Beans)

### What they do that we should steal:
1. Urgency labels ("Ends Sunday", "3 days left")
2. Social proof counters ("X students saved here")
3. Personalized "For You" feed based on past redemptions
4. Brand/business following with notifications
5. User ratings on whether deals actually worked
6. Progressive Web App (PWA) for offline card access

### What Perkstage does better:
1. **Savings tracking** with "paid for itself X times"
2. **Local events** section (neither competitor has this)
3. **Business directory** with map directions
4. **Built-in business dashboard** + QR scanner
5. **Tiered referral** with Ambassador program
6. **Local-first** model (not just online retail codes)

### Key insight:
> UNiDAYS and Student Beans are online retail discount aggregators. Perkstage is a local discovery platform. Different market, different competition. Our real competitors are Google Maps, Instagram, and word of mouth.

---

## File Structure
```
~/Perkstage/
├── server.js              ← Express backend, 40+ endpoints, seed data
├── vercel.json            ← Vercel deployment config
├── perkstage.db           ← SQLite database (gitignored)
├── public/
│   ├── css/styles.css     ← Shared design system
│   ├── js/api.js          ← API wrapper, QR generator, utilities
│   ├── js/i18n.js         ← ES/EN translation system
│   ├── img/logo.svg       ← Full PS logo
│   ├── img/logo-nav.svg   ← Compact nav logo
│   ├── index.html         ← Landing page
│   ├── login.html         ← Auth + demo portal selector
│   ├── register.html      ← Student registration
│   ├── dashboard.html     ← Student dashboard
│   ├── directory.html     ← Explore page
│   ├── card.html          ← QR membership card
│   ├── savings.html       ← Savings tracker
│   ├── referrals.html     ← Referral center
│   ├── offers.html        ← Offers listing
│   ├── business-*.html    ← Business portal (5 pages)
│   └── admin-*.html       ← Admin panel (6 pages)
└── tests/
    └── perkstage.spec.js  ← 56 Playwright tests
```

---

## Testing
- 56 Playwright tests covering all 3 portals
- Tests cover: page loads, auth, demo access, dashboard data, QR card, offers, directory, savings, referrals, business portal, admin panel, mobile, API health
- All passing before last push

---

## What to Build Next
1. PWA with offline card access
2. Real QR code generation (use qrcode.js library)
3. Camera-based QR scanner (use html5-qrcode library)
4. Stripe payment integration for real memberships
5. Email notifications (welcome, offer alerts, expiry warnings)
6. Business onboarding form (public application)
7. Image upload for business profiles
8. Real Google Places API integration for ratings
9. Push notifications via web push API
10. Admin: bulk approve/reject, export CSV

---

*Last updated: March 23, 2026*
