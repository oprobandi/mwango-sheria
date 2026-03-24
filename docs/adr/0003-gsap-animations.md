# ADR 0003 — GSAP for Animations

**Date**: 2026-03-24
**Status**: Accepted
**Deciders**: Core team

---

## Context

The prototype relied heavily on GSAP (loaded via CDN) for hero entrance animations,
scroll-triggered reveals, floating pill bobs, and the SVG score ring animation. The
question is whether to retain GSAP, replace it with a lighter alternative, or rely
on CSS-only animations.

---

## Decision

Retain **GSAP 3** (imported via npm, not CDN) with the `ScrollTrigger` plugin.

---

## Alternatives Considered

| Option                  | Pros                                 | Cons                                            |
|-------------------------|--------------------------------------|-------------------------------------------------|
| **GSAP + ScrollTrigger**| Battle-tested, powerful timeline API, great DX | ~30 kB gzipped |
| Framer Motion           | React-native, declarative, AnimatePresence | Larger bundle (~40 kB), less control over SVG strokes |
| CSS Animations + IntersectionObserver | Zero JS overhead        | No timeline control, complex stagger requires JS anyway |
| @motionone/animate      | Tiny (~3 kB), Web Animations API     | Limited timeline, no ScrollTrigger equivalent   |
| anime.js                | Lightweight (~14 kB), simple API     | Less maintained, no native React integration    |

---

## Rationale

1. **Prototype parity**: The original design relies on GSAP idioms (timelines, `ease`,
   `yoyo`, `repeat`). Rewriting all animations in another library would be risky scope.
2. **SVG stroke animation**: The compliance score ring uses `strokeDasharray` tweening —
   GSAP handles this cleanly out of the box.
3. **ScrollTrigger**: The "on-enter-once" scroll reveals, staggered checklists, and card
   entrances all use ScrollTrigger callbacks. CSS IntersectionObserver would require
   significantly more custom code.
4. **npm vs. CDN**: Moving to npm import allows tree-shaking and eliminates the CDN
   dependency, improving reliability and CSP compliance.
5. **Lazy loading**: GSAP and ScrollTrigger can be dynamically imported to reduce initial
   bundle (tracked in TODO).

---

## Integration Pattern

```
App.jsx                  ← registers ScrollTrigger once; handles global reveals
Hero.jsx                 ← hero entrance timeline (fires on mount)
DashboardCard.jsx        ← score ring ScrollTrigger (encapsulated)
```

Cleanup on unmount:
```js
return () => {
  ScrollTrigger.getAll().forEach(t => t.kill())
}
```

---

## Consequences

- ✅ Rich, choreographed animations matching the design vision
- ✅ SVG stroke animation support
- ✅ Scroll-triggered reveals with precise control
- ⚠️ ~30 kB gzipped added to bundle — split into a separate Vite chunk (`gsap`)
- ⚠️ GSAP animations run even when `prefers-reduced-motion: reduce` is set —
  this must be addressed in v1.1 (see TODO)
