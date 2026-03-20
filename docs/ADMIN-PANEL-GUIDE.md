# Admin Panel Guide — How to Build Client Dashboards

## Architecture

```
client-site/
├── public/              ← Frontend (what visitors see)
│   ├── index.html
│   ├── styles.css
│   └── ...
├── admin/               ← Admin panel (what client manages)
│   ├── index.html       ← Dashboard (KPIs, recent activity)
│   ├── content.html     ← Edit website text/images
│   ├── messages.html    ← View contact form submissions
│   ├── media.html       ← Upload/manage images
│   ├── settings.html    ← Business info, hours, social links
│   └── login.html       ← Authentication
├── server.js            ← Express backend
└── data.db              ← SQLite database
```

## Tech Stack
- **Backend:** Express + SQLite (proven in Tapeo & Qargo)
- **Auth:** express-session + bcrypt (simple, no third-party)
- **Admin UI:** Tabler template (Bootstrap 5, 100+ components, free)
- **Dynamic ops:** htmx (16KB, no build step)
- **No React/Vue needed**

## Sidebar Navigation (5-7 Items Max)

```
Dashboard      ← KPI cards + recent activity
Content        ← Edit hero text, about, services
Products/Menu  ← CRUD items (if applicable)
Messages       ← Contact form submissions
Media          ← Image gallery management
Settings       ← Business info, hours, links
```

## What Clients Can Edit vs. What Stays Fixed

### Editable (client controls):
- Business name, phone, email, address, hours
- Hero headline + subheadline + CTA text
- About/description paragraphs
- Menu items / services / products (name, price, description, image)
- Photo gallery (add/remove/reorder)
- Team bios (name, role, photo)
- Testimonials
- Social media links
- Announcement banners

### Fixed (agency controls):
- Page layout and structure
- Color scheme, fonts, typography
- Navigation structure
- Footer layout
- Form functionality
- SEO meta tags
- Responsive breakpoints
- Third-party integrations

**Golden rule:** Give clients CONTENT editing, not DESIGN editing.

## Auth Pattern (Reuse from Tapeo/Qargo)

```javascript
// Middleware
function requireAuth(req, res, next) {
    if (!req.session.authenticated) return res.redirect('/admin/login.html');
    next();
}

// Login endpoint
app.post('/api/admin/login', async (req, res) => {
    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(req.body.email);
    if (!user || !bcrypt.compareSync(req.body.password, user.password)) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
    req.session.authenticated = true;
    req.session.userId = user.id;
    req.session.role = user.role;
    res.json({ ok: true });
});
```

## Data Display Patterns (from Tapeo/Qargo)

### KPI Cards
- 3-4 cards in a row at top of dashboard
- Large number + label + trend arrow (up green / down red)
- Example: Total Visits | Messages | Products | Revenue

### Data Tables
- Sortable columns, search bar, pagination
- Status badges (color-coded pills)
- Row click → detail/edit page
- Bulk actions (delete selected)

### Charts
- Horizontal bar charts (pure CSS, no library needed)
- Trend sparklines in KPI cards
- Source breakdowns with percentages

## Handoff Checklist
1. Record Loom video walkthrough (5-10 min)
2. Pre-populate admin with real content
3. Admin URL: `theirsite.com/admin`
4. Provide login credentials securely
5. Support email/WhatsApp for questions
6. "Reset to default" option on text fields

## Reusable Patterns from Existing Apps

### From Tapeo:
- KPI card components with CSS variables
- Status/plan badges (.badge.starter, .badge.growth)
- Horizontal bar charts (pure CSS, animated)
- Demo data fallback when API unavailable
- Dark/light theme toggle with localStorage

### From Qargo:
- CSS design tokens file (tokens.css)
- Centralized API wrapper (apiFetch with error handling)
- Activity audit trail (who changed what, when)
- Invoice auto-numbering (INV-YYYY-XXXX)
- i18n support (Spanish/English)
- AI copilot with business context injection
- COALESCE-based partial updates in SQL
