# Localization / Multilingual Website Research

This document captures current research on multilingual and multi-regional website systems.

Research date:
- March 21, 2026

Primary sources used:
- [Google Search Central: Localized versions of pages](https://developers.google.com/search/docs/specialty/international/localized-versions)
- [Google Search Central: Managing multi-regional and multilingual sites](https://developers.google.com/search/docs/advanced/crawling/managing-multi-regional-sites)
- [Next.js internationalization guide](https://nextjs.org/docs/pages/guides/internationalization)
- [MDN Intl overview](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
- [MDN Internationalization guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Internationalization)
- [W3C Internationalization Quick Tips](https://www.w3.org/International/quicktips/index)

---

## 1. What Strong Localized Websites Repeatedly Need

### A. Language and region should be modeled deliberately

Google distinguishes multilingual from multi-regional sites.

This matters because:
- not every language site needs country variants
- not every country variant needs a different language

### B. Alternate URLs need explicit signals

Google's localized versions guidance is clear:
- alternates should reference themselves and each other
- fully-qualified URLs matter
- `x-default` can be useful for fallbacks

### C. Locale-aware formatting is part of the experience

MDN's Intl guidance reinforces:
- dates, numbers, currencies, and locale display behavior should not be hardcoded to one market

### D. Translation has to feel complete

Google notes that localized versions are only treated as duplicates if the main content remains untranslated.

Practical implication:
- a half-translated site is both a user-experience problem and a quality problem

### E. Framework support helps, but strategy still matters

Next.js can help implement internationalization, but the product decisions still need to be made:
- URL structure
- locale set
- fallback logic
- translation ownership

---

## 2. Practical Patterns We Should Inherit

### URL model
- distinct locale URLs
- one chosen hreflang implementation method
- fallback logic where appropriate

### UX model
- locale-consistent navigation
- locale-consistent metadata
- locale-sensitive formatting
- no mixed-language critical flows

### Operational model
- ownership for translations
- process for updating alternates
- plan for adding or retiring locales

---

## 3. What This Means For Our Builds

- We should stop treating localization as only text replacement.
- Locale strategy should be part of architecture and SEO planning early.
- Multilingual builds need a maintenance plan, not just translated strings.
- Formatting rules should be treated as product behavior, not frontend decoration.

---

## 4. What Not To Copy Blindly

- do not create many locale variants without a content maintenance plan
- do not mix translated templates with weakly localized core pages unless intentional
- do not implement hreflang inconsistently
- do not hardcode one region's date, currency, or number formatting across all markets

The lesson is not "add more languages".
The lesson is to make each supported locale feel real and operationally sustainable.
