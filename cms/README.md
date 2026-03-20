# CMS / Backend Memory

This folder stores reusable architecture logic for production-oriented content systems behind websites.

Use it when a project needs:
- draft and publish workflows
- content roles and permissions
- preview environments
- webhooks and rebuild triggers
- auth, storage, or database rules
- a real path from prototype admin to production CMS

Core references:
- `cms/ARCHITECTURE-SPEC.md`
- `docs/CMS-BACKEND-ARCHITECTURE-RESEARCH.md`

Why this exists:
- a website with real editors needs more than a frontend admin mockup
- future operational builds should inherit stronger content architecture automatically
