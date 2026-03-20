# Website Launch Compliance Research

This document captures current operational research for safer website launches, especially for EU-facing sites.

Research date:
- March 21, 2026

Primary sources used:
- [ICO: Cookies and similar technologies](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/cookies-and-similar-technologies/)
- [ICO: Storage and access technologies](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/what-are-storage-and-access-technologies/)
- [European Commission cookies policy](https://commission.europa.eu/cookies-policy_en)
- [AEPD: Guía sobre el uso de las cookies (PDF)](https://www.aepd.es/es/documento/guia-cookies.pdf)
- [European Commission: The EU becomes more accessible for all](https://commission.europa.eu/news-and-media/news/eu-becomes-more-accessible-all-2025-07-31_en)
- [European Commission accessibility statement](https://commission.europa.eu/accessibility-statement_en)
- [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/)

Important:
- this is operational guidance, not legal advice
- high-risk launches should still be reviewed with legal/compliance counsel

---

## 1. What Safer Website Launches Repeatedly Need

### A. Cookie decisions should be explicit

ICO guidance and European public-site cookie policies reinforce:
- not every cookie is treated the same
- strictly necessary technologies differ from analytics or advertising technologies
- consent should be handled deliberately where required

### B. Consent needs to be meaningful

European public-site examples and AEPD guidance reinforce:
- users should be able to accept or refuse where consent is required
- analytics and third-party content choices should not be hidden

### C. Accessibility is part of launch quality

The European Commission notes that the European Accessibility Act became applicable in June 2025, and its July 31, 2025 communication explicitly includes e-commerce platforms among the services covered.

Inference:
- accessibility has become even harder to treat as optional for EU-facing digital services

### D. Accessibility statements and review discipline matter

The Commission's own accessibility material shows a pattern:
- declared conformance target
- known issues
- review date
- contact/feedback path

This is a useful operational model even when not legally required in the same way for every private site.

---

## 2. Practical Patterns We Should Inherit

### Cookie/tracking posture
- know which cookies or storage technologies exist
- separate necessary from optional
- avoid adding tracking by habit

### Accessibility posture
- keyboard access
- visible labels and instructions
- contrast
- zoom/responsive resilience
- semantic structure
- feedback path

### Launch posture
- do not treat embeds, analytics, and marketing tags as harmless defaults
- confirm what third parties are loaded before launch

---

## 3. What This Means For Our Builds

- We should launch with less accidental tracking.
- Cookie/analytics choice should be part of architecture and deployment decisions.
- Accessibility should be reviewed before production, not after complaints.
- EU-facing ecommerce and digital-service projects need stronger accessibility awareness after June 2025.

---

## 4. What Not To Copy Blindly

- do not assume a generic cookie banner makes the site compliant
- do not assume analytics is exempt just because it feels harmless
- do not ship EU-facing digital services without accessibility review
- do not treat legal/compliance unknowns as design details

The lesson is not "turn every project into a legal review".
The lesson is to launch with safer defaults and know when counsel is needed.
