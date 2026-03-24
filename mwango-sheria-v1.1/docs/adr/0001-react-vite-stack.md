# ADR 0001 — React + Vite as the UI Stack

**Date**: 2026-03-24
**Status**: Accepted
**Deciders**: Core team

---

## Context

The original prototype was a single HTML file (~1,800 lines) with embedded CSS, inline
SVGs, and vanilla JS. As the codebase grows toward a full product (dashboard, auth,
multi-page routing), this approach becomes unmaintainable. A component-based framework
is needed.

---

## Decision

Adopt **React 18** as the UI framework and **Vite 5** as the build tool.

---

## Alternatives Considered

| Option          | Pros                                   | Cons                                         |
|-----------------|----------------------------------------|----------------------------------------------|
| **React + Vite**| Large ecosystem, team familiarity, fast HMR, excellent Vercel support | Bundle size overhead vs. vanilla |
| Next.js         | SSR/SSG, file-based routing, image optimisation | Overkill for landing page v1; adds complexity |
| Astro           | Near-zero JS by default, great for content sites | Less familiar, smaller ecosystem |
| SvelteKit       | Excellent performance, elegant syntax | Lower team familiarity |
| Vue 3 + Vite    | Similar DX to React                   | Lower team familiarity |
| Vanilla + Vite  | Minimal JS, closest to prototype      | No component reuse, poor scalability |

---

## Rationale

1. **Team familiarity**: The founding team knows React.
2. **Ecosystem**: GSAP, routing, state management, testing — all have first-class React support.
3. **Vercel alignment**: Vercel (our deployment target) was built by the React/Next.js team;
   Vite + React is a supported first-class configuration.
4. **Upgrade path**: React + Vite can be migrated to Next.js (SSR/SSG) with moderate effort
   when SEO and server-side data fetching become requirements.
5. **Vite over CRA**: Create React App is deprecated. Vite offers faster builds, native ESM,
   and better HMR.

---

## Consequences

- ✅ Fast iteration with HMR
- ✅ Component isolation for design system
- ✅ Easy onboarding for React developers
- ⚠️ React adds ~45 kB (gzipped) to the initial JS bundle — acceptable for a landing page
- ⚠️ No SSR out of the box; if SEO becomes critical, migration to Next.js may be needed
