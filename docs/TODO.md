# TODO — Mwango Sheria

> Living backlog. Items are grouped by priority tier and labelled with estimated effort.
> Format: `[ ] Task — effort (S/M/L/XL) — owner`

---

## 🔴 P0 — Launch Blockers

- [ ] Connect waitlist form to a real backend (Supabase / Resend / Loops) — M
- [ ] Add basic SEO meta tags (canonical, og:image, twitter:card) — S
- [ ] Set up Vercel Analytics / Plausible — S
- [ ] Fix mobile footer layout (2-col → 1-col below 480px) — S
- [ ] Add `aria-live` region for waitlist success/error state — S

---

## 🟠 P1 — Shortly After Launch

- [ ] Implement Google Analytics 4 with privacy-friendly config — S
- [ ] Create `og:image` static card (1200×630) for social sharing — M
- [ ] Add `robots.txt` and `sitemap.xml` — S
- [ ] Lazy-load GSAP and ScrollTrigger (dynamic import) to reduce initial JS — M
- [ ] Write unit tests for `CTASection` form validation (Vitest + RTL) — M
- [ ] Add Prettier + ESLint config and CI linting step — S
- [ ] Set up GitHub Actions CI pipeline (lint → build → deploy preview) — M
- [ ] Mobile responsive pass for HowItWorks (4-col → 2-col → 1-col) — S

---

## 🟡 P2 — Next Sprint

- [ ] Extract all copy strings to `src/data/content.js` (i18n-ready) — M
- [ ] Kiswahili language toggle (i18n with `react-i18next`) — L
- [ ] Dark/light mode toggle (currently dark-only) — M
- [ ] Add `useReducedMotion` hook; disable GSAP when `prefers-reduced-motion` — S
- [ ] Replace emoji icons with custom SVG icon set — M
- [ ] Add keyboard navigation support for mobile menu — S
- [ ] Test and fix CLS / LCP issues (PageSpeed Insights) — M
- [ ] Implement intersection-observer fallback for GSAP ScrollTrigger — S

---

## 🟢 P3 — Future Features

- [ ] Dashboard page (post-login) — XL
- [ ] Compliance quiz / business profile wizard — L
- [ ] Blog / resources section (MDX) — L
- [ ] AI Legal Q&A demo (iframe or embedded chat) — XL
- [ ] Duty calculator interactive widget — L
- [ ] Advocate directory / booking flow — XL
- [ ] Email nurture sequence for waitlist subscribers — M
- [ ] Referral programme ("refer 3 → get premium free") — L
- [ ] PWA manifest + service worker for offline shell — M
- [ ] Integration with BRS eCitizen API (when available) — XL

---

## 🔵 Technical Debt

- [ ] Audit and clean up inline styles — move to Tailwind utilities — M
- [ ] Add `PropTypes` or migrate to TypeScript — L
- [ ] Add Storybook for UI components — L
- [ ] Set up Sentry error monitoring — S
- [ ] Document all component props with JSDoc — S
- [ ] Audit third-party scripts (GSAP CDN vs. npm bundle) — S

---

## ✅ Done

- [x] Convert single-file HTML to React + Vite project structure
- [x] Separate all sections into individual components
- [x] Migrate CSS to Tailwind + custom properties
- [x] Hero GSAP entrance animation
- [x] ScrollTrigger scroll-reveal for all sections
- [x] Animated compliance score ring
- [x] Floating pills animation (bob)
- [x] Ticker infinite scroll
- [x] Mobile hamburger menu
- [x] Waitlist form with client-side validation
- [x] Vercel deployment configuration
- [x] Documentation (README, CHANGELOG, ADRs, CONTRIBUTING, TODO)
