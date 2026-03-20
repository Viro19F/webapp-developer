# Localization / Multilingual Website Spec

This document captures reusable rules for multilingual and multi-regional website systems.

Use it for:
- bilingual websites
- international company sites
- country-targeted content
- localized ecommerce or service pages

Related research:
- `docs/LOCALIZATION-RESEARCH.md`

---

## 1. Core Objective

A localized site should:
1. show the right language or region version clearly
2. help search engines understand alternate versions
3. format language-sensitive content correctly
4. avoid confusing users with mixed-language or mixed-region experiences

---

## 2. Language vs Region Rules

- multilingual and multi-regional are not the same thing
- do not create country variants unless the content or business rules really differ
- if multiple country variants share one language, a generic fallback page can still be useful

Examples:
- `es` for generic Spanish
- `es-es` for Spain-specific version
- `en` for generic English
- `en-gb` and `en-us` when price, offers, spelling, or regulations differ

---

## 3. URL and Discovery Rules

- use distinct URLs for localized content
- keep the URL structure consistent
- choose one hreflang method and maintain it well
- every localized version should reference itself and the alternates

---

## 4. Translation Rules

- do not mix translated chrome with untranslated core content unless that is a deliberate choice
- localized pages should feel complete, not half-switched
- navigation, metadata, CTA labels, and key trust content should all match the locale

---

## 5. Locale-Aware Formatting Rules

Use locale-sensitive formatting for:
- dates
- times
- currencies
- numbers
- lists or display names when relevant

Do not hardcode one locale format across all versions if the site serves multiple markets.

---

## 6. SEO Rules

- implement hreflang carefully
- use fully-qualified URLs for alternates
- include `x-default` where a generic fallback makes sense
- keep canonical and localized signals consistent
- avoid auto-redirect traps that make discovery or indexing harder

---

## 7. Operational Rules

- translation workflows should have ownership
- content updates need a plan for alternate locales
- locale expansion should not happen without a maintenance plan

---

## 8. What We Should Reuse Automatically

Future multilingual builds should default to:
- clear locale strategy
- distinct URLs
- consistent localized navigation and metadata
- locale-aware formatting
- hreflang implementation
- fallback thinking for unmatched users

This is the baseline for localized sites that feel intentional instead of patched together.
