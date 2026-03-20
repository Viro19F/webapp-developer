# Website Systems Research

This document captures current research on how strong websites are built, deployed, and sold.

Research date:
- March 20, 2026

Primary sources used:
- [web.dev Learn Responsive Design](https://web.dev/learn/design)
- [web.dev Learn Performance](https://web.dev/learn/performance)
- [web.dev Learn Accessibility](https://web.dev/learn/accessibility)
- [web.dev Learn Forms](https://web.dev/learn/forms)
- [web.dev Responsive Images](https://web.dev/learn/design/responsive-images)
- [web.dev Browser-level lazy loading for CMSs](https://web.dev/articles/browser-level-lazy-loading-for-cmss)
- [Google Search Central: Page Experience](https://developers.google.com/search/docs/appearance/page-experience)
- [Google Search Central: Helpful Content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Google Search Central: Meta descriptions / snippets](https://developers.google.com/search/docs/appearance/snippet)
- [Google Search Central: Structured data search gallery](https://developers.google.com/search/docs/appearance/structured-data/search-gallery)
- [Google Search Central: Product structured data](https://developers.google.com/search/docs/appearance/structured-data/product)
- [Google Search Central: Organization structured data](https://developers.google.com/search/docs/appearance/structured-data/logo)
- [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [W3C Forms Instructions tutorial](https://www.w3.org/WAI/tutorials/forms/instructions/)
- [MDN: Text labels and names](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Text_labels_and_names)
- [MDN: form role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/form_role)
- [Vercel deployment docs](https://vercel.com/docs/deployments)
- [Vercel getting started](https://vercel.com/docs/getting-started-with-vercel)
- [Vercel functions](https://vercel.com/docs/functions)
- [Cloudflare Pages overview](https://developers.cloudflare.com/pages/)
- [Cloudflare Pages Git integration](https://developers.cloudflare.com/pages/get-started/git-integration/)
- [Cloudflare Pages custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/)
- [Cloudflare Pages preview deployments](https://developers.cloudflare.com/pages/configuration/preview-deployments/)
- [Cloudflare Pages Functions](https://developers.cloudflare.com/pages/functions/get-started/)
- [Netlify Deploy Previews](https://docs.netlify.com/deploy/deploy-types/deploy-previews/)
- [Netlify Forms setup](https://docs.netlify.com/manage/forms/setup/)
- [Netlify Functions overview](https://docs.netlify.com/build/functions/overview/)
- [GitHub Pages custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Render: Deploy a Node Express app](https://render.com/docs/deploy-node-express-app)
- [Railway PostgreSQL](https://docs.railway.com/databases/postgresql)
- [Railway services](https://docs.railway.com/services)
- [Fly.io SQLite guidance](https://fly.io/docs/js/prisma/sqlite/)
- [HubSpot discovery call questions](https://blog.hubspot.com/sales/discovery-call-questions)
- [HubSpot consultative selling](https://blog.hubspot.com/sales/consultative-selling)
- [HubSpot website proposal template](https://www.hubspot.com/resources/templates/website-proposal)
- [Clutch web design pricing](https://clutch.co/web-designers/pricing)
- [Clutch web design service guide](https://clutch.co/web-designers/service-guide)

---

## 1. What Strong Websites Repeatedly Do Well

### A. They are responsive by design, not by patching

Google's web.dev learning tracks treat responsive design as a full system:
- layouts
- components
- typography
- images
- interaction
- user preferences

This means responsive quality should be designed at the component level, not only fixed with a few breakpoints late in the project.

### B. They protect performance early

Google's performance guidance and case studies reinforce:
- image handling matters heavily
- Core Web Vitals affect both user experience and search success
- lazy loading is useful, but not for the primary LCP image
- simple stacks can outperform heavier client-side builds for content-heavy sites

The big lesson:
- performance is not a final optimization pass
- it is an architectural choice

### C. They use semantic HTML and visible labels

W3C and MDN repeat the same principle:
- prefer native HTML before ARIA
- form controls need visible labels
- placeholder text is not a replacement for labels
- instructions should be readable by all users, not hidden only in assistive semantics

This is especially important in the kinds of lead-gen and service forms we build.

### D. They publish useful content, not only SEO-shaped content

Google Search Central is explicit:
- helpful, reliable, people-first content matters
- page experience matters
- unique and accurate descriptions matter
- structured data should help search engines understand the page, not fake relevance

Inference:
- good SEO comes from clear, useful pages with strong structure, not from formulaic keyword stuffing

### E. They match the technical stack to the problem honestly

The platform docs make this clear:
- some sites should stay static
- some need serverless helpers
- some need a real backend and database

The fastest way to create future pain is to deploy a real application as if it were only a landing page.

---

## 2. Build Principles We Should Inherit

### Content and structure
- hero must clarify offer and next action immediately
- every important page needs unique value and copy
- real proof beats decorative polish
- trust should appear early, especially for local businesses

### Performance
- compress and size media properly
- limit third-party script sprawl
- lazy load below-the-fold media
- reserve eager loading for priority content
- keep typography and asset loading predictable

### Accessibility
- semantic HTML first
- visible labels
- field instructions in accessible, visible form
- keyboard-friendly interactions
- no motion patterns that block content

### SEO
- page-specific metadata
- structured data where appropriate
- crawlable pages
- sitemap thinking
- page experience and usefulness together

---

## 3. Deployment Patterns From Current Platforms

### Vercel

Strong signals from the docs:
- preview deployments are a first-class workflow
- Local / Preview / Production are clear environments
- deployments can come from Git, CLI, hooks, or API
- functions are close to the frontend deployment model
- observability is tied into the deployment surface

Practical use:
- best when frontend preview/review is a major part of the workflow

### Cloudflare Pages

Strong signals from the docs:
- static and full-stack edge patterns live in one platform
- Git integration and Direct Upload are distinct project choices
- preview deployments are automatically `noindex`
- Functions can add dynamic behavior without a traditional server
- D1 and R2 make Cloudflare a stronger option once a project grows

Practical use:
- very strong for fast static sites and edge-first website/app hybrids

### Netlify

Strong signals from the docs:
- Deploy Previews are central to the workflow
- forms can be handled directly by the platform
- functions are available without running a dedicated server
- per-deploy immutability helps keep environments predictable

Practical use:
- strong for brochure/content sites that need a clean preview cycle and simple built-in form handling

### GitHub Pages

Strong signals from the docs:
- simple static publishing
- custom domains supported

Practical use:
- best for low-complexity public sites or docs, not operational products

### Render

Strong signals from the docs:
- Node/Express deployment is straightforward
- Git-connected auto-deploy is simple
- failed builds do not replace the live service

Practical use:
- a reliable option for real app backends and admin-driven websites

### Railway

Strong signals from the docs:
- PostgreSQL provisioning is quick
- connection environment variables are provided automatically
- deployment approvals exist for connected repos
- service/project observability is available

Practical use:
- strong for internal tools, admin-backed apps, and small full-stack systems

### Fly.io and SQLite

Strong signals from the docs:
- SQLite on Fly can be made more durable with Litestream and volume-backed storage
- this is not "free persistence by default"

Practical use:
- only a deliberate choice; not the default for multi-user production workflows

---

## 4. Sales Patterns We Should Inherit

### Consultative selling is the right model

HubSpot's material reinforces:
- research before outreach
- ask questions and listen actively
- diagnose before proposing
- align the solution to the client's goals
- structure proposals around the business problem and the solution path

This maps well to website selling because weak websites are rarely just visual problems.

### Discovery matters more than demoing design taste

Best questions uncover:
- goals
- pain points
- buyer journey gaps
- who edits the site
- how often content changes
- what "success" means

### Proposal quality matters

HubSpot's proposal guidance aligns with what we need:
- short intro
- project summary tied to larger business goals
- scope and timeline
- pricing and payment schedule
- signature/acceptance path

The proposal should make the decision easier, not show how much jargon we know.

### Market pricing signals are higher than small-business intuition

Clutch's current pricing guide indicates:
- many projects still land under $10,000
- the average reviewed project cost is much higher than our current small-site pricing
- market hourly rates can sit far above entry-level freelance logic

Inference:
- our early pricing is conservative
- websites with strategy, custom writing, admin systems, and backend logic should be priced as systems, not as "just pages"

---

## 5. Recommended Default System

This is an inference from the sources, not a direct quote from any one provider.

### For building
- static-first mindset
- semantic HTML
- mobile-first layout
- strong image discipline
- visible form labels
- people-first content
- structured data where it genuinely fits

### For deployment
- Cloudflare Pages or Netlify for static client websites
- Vercel for frontend-heavy preview-centric apps
- Render or Railway for backend-backed website products
- PostgreSQL as the default real production database

### For selling
- lead with audit findings
- use consultative discovery
- pitch business outcomes, not frameworks
- distinguish brochure sites from operational website products
- offer maintenance or operational support as recurring revenue

---

## 6. What Not To Copy Blindly

- do not use enterprise infrastructure because it sounds premium
- do not overuse ARIA where semantic HTML works
- do not lazy load everything blindly
- do not deploy an app without thinking about data persistence
- do not sell a website by listing technologies before business outcomes
- do not promise SEO rankings instead of useful content and technical quality

The lesson is not to imitate platform marketing.
The lesson is to choose the right level of system for the real job.
