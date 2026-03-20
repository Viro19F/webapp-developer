# Web Agency Process — How We Work Together

## The Workflow (5 Steps)

### Step 1: You Land the Client
- Meet the business, pitch them a website
- Pricing guide: €500-800 (simple site), €1000-2000 (multi-page + features), €2500+ (e-commerce/booking)
- Fill out `CLIENT-BRIEF.md` with their info

### Step 2: Tell Claude "New client: [name]"
- Paste or reference the filled brief
- Claude builds the full site from the template, customized to the business
- Industry-specific design, colors, content, layout

### Step 3: Claude Builds & Tests
- Generates all HTML/CSS/JS files in `/clients/<name>/`
- Sets up a local server to test
- Verifies mobile responsiveness, all links work, form works
- Shows you the result

### Step 4: You Review & Request Changes
- Open the site locally, show the client a preview
- Tell Claude any changes: "make the hero bigger", "add a gallery page", "change color to red"
- Iterate until perfect

### Step 5: Deploy
- Deploy to Vercel/Netlify/Railway (free or cheap hosting)
- Point client's domain to it
- Hand off and collect payment

---

## Required Memory Capture After Every Client

Do not stop at the website files. Every client should improve the system.

### Always save
- `clients/<name>/BRIEF.md`
- final site files in `clients/<name>/`
- a Playwright test in `tests/<name>.spec.js`
- a design-spec doc in `docs/`
- updates to `docs/LEARNINGS.md`
- updates to `INDUSTRY-PLAYBOOK.md` only when the lesson generalizes

### Read before building
1. Client brief
2. `INDUSTRY-PLAYBOOK.md`
3. `docs/LEARNINGS.md`
4. closest matching design-spec doc in `docs/`

### Write after building
1. What worked
2. What did not
3. Why the design direction was chosen
4. What should be reused on the next similar client

See `docs/PROJECT-MEMORY-RUNBOOK.md` for the full rule set.

---

## What Claude Needs From You (Minimum)
1. Business name
2. What they do (industry + services)
3. Contact info (phone, email, address)
4. What pages they want
5. Any brand colors or logo (optional — Claude will pick good defaults)

## Folder Structure
```
~/WebAgency/
├── CLIENT-BRIEF.md          ← Template brief (copy per client)
├── PROCESS.md                ← This file
├── template/
│   └── index.html            ← Master template
└── clients/
    ├── client-name-1/
    │   ├── BRIEF.md
    │   ├── index.html
    │   ├── about.html
    │   └── ...
    └── client-name-2/
        └── ...
```

## Quick Start Commands
```bash
# Preview a client site
cd ~/WebAgency/clients/<name>
python3 -m http.server 8080
# Open http://localhost:8080

# Deploy to Vercel (free)
npm i -g vercel
cd ~/WebAgency/clients/<name>
vercel

# Deploy to Netlify (free)
npm i -g netlify-cli
cd ~/WebAgency/clients/<name>
netlify deploy --prod
```
