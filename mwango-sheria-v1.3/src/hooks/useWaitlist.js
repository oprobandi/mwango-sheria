/**
 * useWaitlist.js
 * Encapsulates waitlist form state, validation, and submission.
 *
 * Returns:
 *   { email, setEmail, status, handleSubmit }
 *
 * status: 'idle' | 'error' | 'success'
 *
 * In production, replace the simulated fetch with your actual API call
 * (e.g. Resend, Mailchimp, Supabase, or a Vercel API route).
 */
import { useState } from 'react'

export function useWaitlist() {
  const [email,  setEmail]  = useState('')
  const [status, setStatus] = useState('idle') // 'idle' | 'error' | 'success'

  async function handleSubmit(e) {
    if (e?.preventDefault) e.preventDefault()

    const val = email.trim()
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!val || !emailRe.test(val)) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 2500)
      return
    }

    // ─── Replace with your real API call ───────────────────────────────────
    // Example Vercel API route:
    //   await fetch('/api/waitlist', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email: val }),
    //   })
    // ───────────────────────────────────────────────────────────────────────

    // Simulate network delay
    await new Promise((res) => setTimeout(res, 600))

    setStatus('success')
  }

  return { email, setEmail, status, handleSubmit }
}
