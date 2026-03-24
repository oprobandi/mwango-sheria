# ADR-004: Waitlist API Strategy

**Date:** 2026-03-24  
**Status:** Proposed  
**Deciders:** Engineering Lead, Product Owner

---

## Context

The landing page collects early-access email addresses via the CTA form. We need to decide how waitlist emails are stored and processed before a full backend exists.

## Decision Drivers

- Zero backend at V1.0 launch
- Emails must not be lost
- Low operational overhead
- Easy to migrate once the product backend is ready

## Options Considered

### Option A — Vercel Serverless Function + Resend
Write emails to a Resend audience list via a `/api/waitlist` edge function. Zero database required.

**Pros:** Instant, no infra, transactional confirmations built-in  
**Cons:** Resend vendor dependency

### Option B — Supabase Table
POST to a Supabase REST endpoint; store in a `waitlist` table with RLS.

**Pros:** SQL queryable, easy export, free tier generous  
**Cons:** Slightly more setup; environment variable required

### Option C — Google Sheets via Apps Script
POST to a Google Apps Script web app that appends a row.

**Pros:** Non-technical team can view submissions directly  
**Cons:** Fragile, rate-limited, not production-grade

## Decision

**Option A (Vercel + Resend) for V1.0**, with a migration path to Option B once the product database is live.

### Implementation Plan

1. Create `api/waitlist.js` in the project root (Vercel auto-detects)
2. Install `resend` npm package (server-side only)
3. Set `RESEND_API_KEY` in Vercel environment variables
4. Update `src/hooks/useWaitlist.js` to POST to `/api/waitlist`

### Skeleton API route

```js
// api/waitlist.js
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { email } = req.body
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email' })
  }

  await resend.contacts.create({
    email,
    audienceId: process.env.RESEND_AUDIENCE_ID,
  })

  return res.status(200).json({ ok: true })
}
```

## Consequences

- Adds a `RESEND_API_KEY` and `RESEND_AUDIENCE_ID` environment variable requirement
- No database migrations needed for V1.0
- Must re-export audience list when migrating to Supabase in V2
