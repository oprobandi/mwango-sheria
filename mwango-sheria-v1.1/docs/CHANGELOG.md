# Changelog

All notable changes to Mwango Sheria are documented in this file.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Versioning follows [Semantic Versioning](https://semver.org/).

---

## [Unreleased]

### Planned
- Waitlist backend integration (Resend / Supabase)
- Kiswahili language toggle (`react-i18next`)
- Analytics integration (PostHog)
- `og:image` social share card (1200×630)

---

## [1.1.0] — 2026-03-24

### Added
- **Hero background image** — Unsplash Nairobi skyline with layered gradient
  overlay for text legibility; image loads eagerly as LCP asset
- **Coverage card images** — Each of the 6 legal area cards now has a
  contextual Unsplash header image (office, finance, shipping, HR, tech, nature)
  with hover zoom effect and gradient overlay
- **Testimonial avatars** — All 3 testimonial cards now display real portrait
  photos from Unsplash with gold-border treatment
- **Testimonial star ratings** — 5-star row added above each quote
- **HowItWorks image strip** — Mobile-only Unsplash process image with
  descriptive label; hidden on desktop where the step grid dominates
- **CTA background tint** — Subtle Unsplash image at 10% opacity behind the
  waitlist section for visual depth

### Changed (Mobile Responsiveness)
- **Nav** — Hamburger now renders an animated X on open; mobile menu is
  full-screen overlay with body scroll lock and large tap targets
- **Hero** — Single-column on mobile; dashboard mockup hidden below `lg`;
  floating pills replaced with compact status pills at bottom of hero on mobile;
  stats strip font sizes scale with `clamp()`
- **HowItWorks** — Steps grid now `1-col → 2-col (sm) → 4-col (lg)`;
  intro row responsive two-up layout
- **Features grid** — Now `1-col → 2-col (md) → 3-col (lg)` via CSS
- **Coverage grid** — Now `1-col → 2-col (sm) → 3-col (lg)` via Tailwind
- **Testimonials grid** — Now `1-col → 3-col (md)` via Tailwind
- **ComplianceChecklist** — Checklist + card stacks to `1-col` below `lg`
- **Footer** — Grid changes `1-col → 2-col (sm) → 4-col (lg)`;
  legal links row stacks vertically on mobile
- **CTA form** — `flex-col` on mobile, `flex-row` on `sm+`; border-radius
  adapts correctly to both layouts
- **Section padding** — All sections use `.section-pad` class:
  `6rem 4rem` → `5rem 2.5rem (lg)` → `4rem 1.25rem (mobile)`

### Fixed
- Inline `gridTemplateColumns` styles replaced with Tailwind responsive classes
  throughout all section components
- `section-pad` utility class centralises all section padding
- `img-card` CSS class provides consistent image zoom + overlay treatment
- `hero-image-overlay` gradient tuned to allow right-side image to show on
  desktop while keeping left-side text fully legible

### Technical
- All Unsplash images use `loading="lazy"` except hero (eager, LCP)
- Images sized at 2× breakpoint max-width with `?w=` param for bandwidth savings
- `useWaitlist` hook now drives `CTASection` (replaces inline state)
- Nav body-scroll lock on mobile menu open/close
- Hamburger spans animate to animated X via inline transform styles

---

## [1.0.0] — 2026-03-24

### Added
- **Project scaffold** — Vite 5 + React 18 + Tailwind CSS 3 setup
- Full landing page: Hero, Ticker, HowItWorks, Features, Coverage,
  ComplianceChecklist, Testimonials, CTASection, Footer
- GSAP entrance timeline + ScrollTrigger scroll-reveals
- DashboardCard with animated SVG score ring
- FAB floating chat button
- Vercel deployment configuration
- Documentation: README, CHANGELOG, TODO, CONTRIBUTING, ARCHITECTURE, 4 ADRs

---

[Unreleased]: https://github.com/your-org/mwango-sheria/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/your-org/mwango-sheria/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/your-org/mwango-sheria/releases/tag/v1.0.0
