/**
 * CTASection.jsx
 * Waitlist sign-up section with email form and confirmation state.
 */
import { useState } from 'react'
import SectionTag from '../ui/SectionTag.jsx'

export default function CTASection() {
  const [email,     setEmail]     = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error,     setError]     = useState(false)

  const handleSubmit = () => {
    if (!email.trim() || !email.includes('@')) {
      setError(true)
      setTimeout(() => setError(false), 2500)
      return
    }
    setSubmitted(true)
  }

  return (
    <section
      id="waitlist"
      className="relative overflow-hidden text-center"
      style={{ background: '#060C07', padding: '8rem 4rem' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px', height: '400px',
          background: 'radial-gradient(ellipse, rgba(196,123,42,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Decorative hexagon */}
      <svg
        className="absolute pointer-events-none"
        style={{
          left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '400px', height: '400px',
          opacity: 0.06,
        }}
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
      >
        <path d="M200 20 L370 110 L370 290 L200 380 L30 290 L30 110 Z" stroke="#C47B2A" strokeWidth="1"/>
        <path d="M200 60 L340 135 L340 265 L200 340 L60 265 L60 135 Z" stroke="#C47B2A" strokeWidth="0.5"/>
      </svg>

      {/* Content */}
      <div className="relative z-[1]">
        <SectionTag centered>Early Access</SectionTag>

        <h2
          className="gs-reveal font-serif font-light text-[#F4ECD8] leading-[1.08] max-w-[640px] mx-auto mb-6"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
        >
          Be first to <em className="italic text-[#F0C070]">simplify</em><br />
          your business compliance.
        </h2>

        <p className="gs-reveal text-[0.9rem] text-[#6B6050] max-w-[400px] mx-auto mb-12 leading-[1.85]">
          Join hundreds of Kenyan entrepreneurs on the waitlist. Early access
          members receive 6 months of premium features at no cost.
        </p>

        {!submitted ? (
          <>
            <div
              className="gs-reveal flex max-w-[460px] mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                placeholder="your@email.com"
                aria-label="Email address"
                className="flex-1 bg-white/[0.03] border-y border-l border-[rgba(196,123,42,0.12)] rounded-l-sm px-5 py-3.5 text-[#F4ECD8] font-sans text-[0.85rem] outline-none transition-colors placeholder:text-[#6B6050] focus:border-[#C47B2A]"
                style={{
                  borderColor: error ? 'rgba(248,113,113,0.7)' : undefined,
                }}
              />
              <button
                onClick={handleSubmit}
                className="bg-[#C47B2A] text-[#060C07] border-none rounded-r-sm px-7 py-3.5 font-sans text-[0.75rem] font-bold tracking-[0.14em] uppercase cursor-pointer transition-colors whitespace-nowrap hover:bg-[#DFA042]"
              >
                Join Waitlist
              </button>
            </div>

            <p className="gs-reveal text-[0.7rem] text-[#6B6050] mt-4">
              No spam. No commitment. Just early access to Kenya's most
              comprehensive business law platform.
            </p>
          </>
        ) : (
          <div
            className="inline-flex items-center gap-3 px-8 py-4 rounded-sm border"
            style={{
              background: 'rgba(45,90,61,0.2)',
              borderColor: 'rgba(74,222,128,0.2)',
            }}
          >
            <span className="text-[#4ade80] text-lg">✓</span>
            <span className="text-[0.85rem] font-medium text-[#A8D5B5] tracking-[0.04em]">
              You're in! We'll be in touch soon.
            </span>
          </div>
        )}
      </div>
    </section>
  )
}
