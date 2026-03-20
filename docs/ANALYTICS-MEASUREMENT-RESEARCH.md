# Analytics / Measurement Research

This document captures current research on how websites should be measured after launch.

Research date:
- March 21, 2026

Primary sources used:
- [GA4 setup for a website](https://support.google.com/analytics/answer/9304153)
- [GA4 recommended events](https://support.google.com/analytics/answer/9268036)
- [GA4 creating conversions](https://support.google.com/analytics/answer/14710559)
- [GA4 mark events as key events](https://support.google.com/analytics/answer/13128484)
- [Search Console recommendations](https://support.google.com/webmasters/answer/15107108)
- [Search Console top tasks](https://support.google.com/webmasters/answer/10351509)
- [Vercel Web Analytics](https://vercel.com/docs/analytics/)
- [Vercel custom events](https://vercel.com/docs/analytics/custom-events)
- [Vercel Speed Insights](https://vercel.com/docs/speed-insights/)
- [Vercel Observability](https://vercel.com/docs/observability)

---

## 1. What Strong Website Measurement Repeatedly Needs

### A. Event planning matters

GA4's official guidance emphasizes recommended events and key events, which means:
- not every click matters equally
- the business should define which events are outcomes and which are only interactions

### B. Conversions should map to actual business goals

GA4's conversion guidance makes a clear distinction:
- event
- key event
- conversion

This matters because measurement should align with how the business actually sells, not only with what is easy to track.

### C. Search visibility needs its own operational surface

Search Console recommendations and task guidance reinforce:
- indexing, rich results, search recommendations, and Core Web Vitals deserve ongoing review
- search performance is not fully visible from analytics tools alone

### D. Performance should use real-user data where possible

Vercel Speed Insights and Web Analytics reinforce:
- measurement should include real traffic and Core Web Vitals
- page-level performance differences matter

### E. Privacy-aware analytics is a real option

Vercel Web Analytics explicitly positions itself as cookie-free and anonymized.

Inference:
- not every website needs the full overhead of traditional marketing analytics
- analytics choice should match the business need and privacy posture

---

## 2. Practical Patterns We Should Inherit

### Core measurement stack
- traffic/page analytics
- business events
- conversions/key events
- search visibility monitoring
- performance monitoring

### Strong default business events
- generate lead
- search
- purchase
- begin checkout
- add to cart
- click-to-call
- WhatsApp click
- booking/reservation intent

### Performance stack
- page-level Core Web Vitals
- preview vs production awareness where available
- observability/log review for operational apps

---

## 3. What This Means For Our Builds

- We should define event plans during build, not after launch.
- Search Console should be treated as a standard part of launch for serious sites.
- We should choose analytics based on business needs and consent implications, not habit.
- Measurement should stay lean and useful, not become a dump of every possible event.

---

## 4. What Not To Copy Blindly

- do not track everything because you can
- do not confuse interactions with conversions
- do not rely on analytics only while ignoring search or performance reporting
- do not add heavy analytics stacks if privacy-aware lighter measurement would cover the job

The lesson is not "add more dashboards".
The lesson is to measure outcomes and performance with intent.
