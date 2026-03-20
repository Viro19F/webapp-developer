# Website Launch Compliance Spec

This document captures reusable compliance-oriented launch rules for websites, especially EU-facing websites.

Use it for:
- EU-facing website launches
- analytics/cookie decisions
- accessibility-aware launch reviews
- compliance checklists before production

Related research:
- `docs/COMPLIANCE-LAUNCH-RESEARCH.md`
- `website/DEPLOYMENT-PLAYBOOK.md`

Important:
- this is operational guidance, not legal advice
- high-risk or regulated launches should still be reviewed with appropriate counsel

---

## 1. Core Objective

A compliant launch should avoid predictable failures around:
1. cookies and tracking consent
2. privacy transparency
3. accessibility
4. risky assumptions about what can go live without review

---

## 2. Cookie / Tracking Rules

- do not assume all cookies need the same treatment
- strictly necessary cookies can be treated differently from analytics or marketing cookies
- consent for analytics or similar technologies should be obtained where required
- users need a real accept/refuse choice where consent is required

---

## 3. Privacy Rules

- if the website collects personal data, the user should be told what is happening
- privacy information should not be hidden or vague
- forms, analytics, and third-party embeds all affect the privacy posture of a launch

---

## 4. Accessibility Rules

- accessibility is not optional polish
- ecommerce and digital services in the EU face stronger accessibility pressure after the European Accessibility Act became applicable in June 2025
- accessibility should be considered before launch, not after complaints

Minimum operational standard:
- semantic structure
- keyboard access
- form labels and instructions
- contrast
- zoom and responsive behavior
- clear feedback paths

---

## 5. Launch Review Rules

Before launch, confirm:
- cookie/tracking behavior is understood
- consent mechanism is appropriate to the site’s tracking setup
- privacy/contact/legal pages exist where needed
- critical accessibility basics have been checked
- analytics and embeds were added intentionally, not accidentally

---

## 6. What We Should Reuse Automatically

Future launches should default to:
- conscious cookie decisions
- minimal tracking by default
- privacy-aware embed choices
- accessibility review before production
- explicit note when legal review is still needed

This is the baseline for safer launches, especially in Europe.
