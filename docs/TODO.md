# TODO — Mwango Sheria

> Living backlog. Items are grouped by priority tier.
> Format: `[ ] Task — effort (S/M/L/XL)`

---

## 🔴 P0 — Launch Blockers

- [ ] Connect waitlist form to real backend (Resend / Supabase) — M
- [ ] Add canonical URL, og:image, twitter:card meta — S
- [ ] Set up Vercel Analytics or Plausible — S
- [ ] Add `aria-live` region for waitlist form status messages — S
- [ ] Replace Unsplash images with owned brand photography — L

---

## 🟠 P1 — Shortly After Launch

- [ ] Create og:image static card (1200×630) for social sharing — M
- [ ] Add `robots.txt` and `sitemap.xml` — S
- [ ] Lazy-load GSAP/ScrollTrigger via dynamic import — M
- [ ] Write Vitest + RTL tests for `useWaitlist` hook and form — M
- [ ] Add Prettier config + pre-commit hook — S
- [ ] GitHub Actions CI: lint → build → Vercel preview — M
- [ ] Audit CLS / LCP with PageSpeed Insights — M
- [ ] Add `loading="lazy"` crossorigin hints for Google Fonts — S

---

## 🟡 P2 — Next Sprint

- [ ] Kiswahili language toggle (`react-i18next`) — L
- [ ] `useReducedMotion` hook — disable GSAP when OS preference set — S
- [ ] Replace emoji icons with custom SVG icon set — M
- [ ] Test keyboard navigation on all interactive elements — M
- [ ] Dark/light mode toggle — M
- [ ] Intersection-observer polyfill for GSAP ScrollTrigger — S
- [ ] Migrate inline styles fully to Tailwind utilities — M

---

## 🟢 P3 — Future Features

- [ ] Dashboard page (post-login) — XL
- [ ] Compliance quiz / business profile wizard — L
- [ ] AI Legal Q&A demo chat (embedded) — XL
- [ ] Import duty calculator interactive widget — L
- [ ] Blog / resources (MDX) — L
- [ ] Advocate directory and booking flow — XL
- [ ] Email nurture sequence for waitlist — M
- [ ] Referral programme — L
- [ ] PWA manifest + service worker — M
- [ ] BRS eCitizen API integration (when available) — XL

---

## 🔵 Technical Debt

- [ ] Migrate to TypeScript — L
- [ ] Add PropTypes to all components — S
- [ ] Add Storybook for UI components — L
- [ ] Set up Sentry error monitoring — S
- [ ] Document all component props with JSDoc — S
- [ ] Audit third-party script load order (GSAP, fonts) — S

---

## ✅ Done

- [x] Convert single-file HTML → React + Vite (V1.0)
- [x] Separate all sections into individual components (V1.0)
- [x] Tailwind CSS + CSS custom properties design system (V1.0)
- [x] GSAP hero entrance + ScrollTrigger reveals (V1.0)
- [x] Animated compliance score ring (V1.0)
- [x] Floating pills bob animation (V1.0)
- [x] Ticker infinite scroll (V1.0)
- [x] Waitlist form with client-side validation (V1.0)
- [x] Vercel deployment config (V1.0)
- [x] Documentation: README, CHANGELOG, ADRs, CONTRIBUTING, TODO (V1.0)
- [x] Unsplash hero background image with gradient overlay (V1.1)
- [x] Unsplash images on all 6 coverage cards (V1.1)
- [x] Unsplash avatar portraits + star ratings on testimonials (V1.1)
- [x] Unsplash background tint on CTA section (V1.1)
- [x] Mobile image strip on HowItWorks for small screens (V1.1)
- [x] Full mobile responsive — all grids 1→2→3/4-col (V1.1)
- [x] Animated X hamburger with fullscreen mobile menu overlay (V1.1)
- [x] Body scroll lock on mobile menu open (V1.1)
- [x] Responsive section padding via .section-pad class (V1.1)
- [x] Responsive CTA form (stacked mobile → row desktop) (V1.1)
- [x] ADR-005: Unsplash image strategy (V1.1)
- [x] ADR-006: Mobile responsive breakpoint strategy (V1.1)
