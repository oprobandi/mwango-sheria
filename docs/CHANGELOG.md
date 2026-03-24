# Changelog

All notable changes to Mwango Sheria are documented in this file.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Versioning follows [Semantic Versioning](https://semver.org/).

---

## [Unreleased]

### Planned
- Waitlist backend integration (Supabase / Resend)
- Kiswahili language toggle
- Google Analytics 4 integration
- og:image social share card

---

## [1.0.0] — 2026-03-24

### Added
- **Project scaffold** — Vite 5 + React 18 + Tailwind CSS 3 setup
- **Nav** — Fixed top navigation with scroll-aware glassmorphism background
  and mobile hamburger menu with slide-down panel
- **Hero section** — Two-column layout with headline, stats strip, and
  interactive compliance dashboard mockup
- **DashboardCard** — Animated SVG score ring (GSAP ScrollTrigger), compliance
  item list with status badges, floating compliance pills
- **Ticker** — Infinite scrolling pain-points strip with CSS animation;
  pauses on hover
- **HowItWorks** — 4-step numbered process grid with hover states
- **Features** — 6-card border-collapse grid with per-card hover shimmer overlay
- **Coverage** — 6 legal area cards (Corporate, Tax, Trade, Employment, Data, County)
  with pill tags and top-line reveal animation
- **ComplianceChecklist** — 7-item 2026 readiness checklist with
  done / warn / info indicators alongside company profile card mockup
- **Testimonials** — 3 testimonial cards with decorative quotemark
- **CTASection** — Waitlist email form with client-side validation,
  error highlight, and success confirmation state
- **Footer** — 4-column grid with brand info, link columns, and legal row
- **FAB** — Floating "Chat with an Advocate" button with expanding label on hover
- **Logo** — Reusable SVG brand mark component (hexagon + balance scale)
- **SectionTag** — Reusable pill label component
- **Design tokens** — Full CSS custom property palette + Tailwind extension
- **GSAP animations** — Hero entrance timeline, scroll-reveal for all sections,
  staggered checklist, coverage card entrance, floating pill bobs
- **Vercel config** — `vercel.json` with SPA rewrites and asset cache headers
- **Documentation** — README, CHANGELOG, TODO, CONTRIBUTING, ARCHITECTURE,
  and 4 Architecture Decision Records (ADRs)

### Technical
- Single-file HTML prototype refactored into 14 React components
- CSS separated into global `index.css` (Tailwind layers + custom properties)
  and component-level Tailwind utilities
- GSAP registered once in `App.jsx`; ScrollTrigger cleanup on unmount
- Vite manual chunk splitting: `vendor` (React) and `gsap` chunks
- Mobile-first responsive breakpoints at 960px

---

## [0.1.0] — 2026-01-15

### Added
- Initial single-file HTML prototype (`mwango-sheria.html`)
- All sections: Hero, Ticker, How It Works, Features, Coverage,
  Compliance Checklist, Testimonials, CTA, Footer
- GSAP animations via CDN
- Google Fonts: Cormorant Garamond + Outfit
- Brand identity: dark forest/ochre palette, hexagon scale logo

---

[Unreleased]: https://github.com/your-org/mwango-sheria/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/your-org/mwango-sheria/compare/v0.1.0...v1.0.0
[0.1.0]: https://github.com/your-org/mwango-sheria/releases/tag/v0.1.0
