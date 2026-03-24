# ADR-005: Unsplash for Imagery

**Date:** 2026-03-24
**Status:** Accepted
**Deciders:** Product, Engineering, Design

---

## Context

V1.1 adds visual imagery to the hero, coverage cards, CTA section, and testimonial
avatars. We need a reliable, free-to-use image source that doesn't require
individual attribution per image in the UI.

## Decision

Use **Unsplash** via direct CDN URLs with size parameters (`?w=`, `?q=`).

### Rationale

- **Free to use** — Unsplash licence permits use in commercial products without
  per-image attribution in the UI (attribution in source comments is good practice)
- **CDN delivery** — Images are served from Fastly; no self-hosting overhead
- **Resize API** — Append `?w=640&auto=format&fit=crop&q=70` to control bandwidth
- **No account required** — Direct embed; no API key for read-only access

### Image Budget

| Location           | Width param | Load strategy |
|--------------------|-------------|---------------|
| Hero background    | `w=1800`    | `eager` (LCP) |
| Coverage cards     | `w=640`     | `lazy`        |
| Testimonial avatars| `w=80&h=80` | `lazy`        |
| HowItWorks strip   | `w=900`     | `lazy`        |
| CTA tint           | `w=1400`    | `lazy`        |

### Trade-offs

- **Dependency on Unsplash CDN** — Images unavailable if Unsplash is down.
  Mitigation: use CSS fallback `background-color` on all image containers.
- **Not pixel-perfect design control** — Unsplash photos are stock; a future
  design pass with custom photography would elevate brand authenticity.
- **Alt text is generic** — Must be updated with specific descriptions once
  custom photography is procured.

## Consequences

- Zero additional npm dependencies
- No environment variables required
- Future V2 should replace with owned brand photography stored in a CDN bucket
  (e.g. Cloudflare R2 or Vercel Blob)
