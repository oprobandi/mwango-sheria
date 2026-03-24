/**
 * Hero.jsx
 * Full-viewport hero: headline, stats row, and dashboard mockup.
 * GSAP entrance timeline fires on mount.
 */
import { useEffect } from 'react'
import { gsap } from 'gsap'
import DashboardCard from '../ui/DashboardCard.jsx'

const STATS = [
  { num: '7.4M+', label: 'SMEs in Kenya' },
  { num: '47',    label: 'Counties Covered' },
  { num: 'EAC+',  label: 'Regional Trade' },
  { num: '2026',  label: 'Regulations Ready' },
]

const PILLS = [
  { label: 'eTIMS Active',        color: '#4ade80', pos: 'top-[-1.5rem] left-[-1.5rem]' },
  { label: 'Annual Returns Due',  color: '#fbbf24', pos: 'top-[-1rem] right-[-1rem]' },
  { label: 'NSSF Auto-scheduled', color: '#60a5fa', pos: 'bottom-[-1.5rem] left-[10%]' },
]

export default function Hero() {
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 })

    tl.to('#hero-eyebrow',  { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 0)
      .from('#hero-title',  { opacity: 0, y: 32, duration: 0.8, ease: 'power3.out' }, 0.15)
      .to('#hero-title',    { opacity: 1, duration: 0 }, 0.15)
      .from('#hero-desc',   { opacity: 0, y: 24, duration: 0.7, ease: 'power3.out' }, 0.35)
      .to('#hero-desc',     { opacity: 1, duration: 0 }, 0.35)
      .from('#hero-actions',{ opacity: 0, y: 20, duration: 0.6, ease: 'power2.out' }, 0.5)
      .to('#hero-actions',  { opacity: 1, duration: 0 }, 0.5)
      .from('#hero-stats',  { opacity: 0, y: 16, duration: 0.6, ease: 'power2.out' }, 0.65)
      .to('#hero-stats',    { opacity: 1, duration: 0 }, 0.65)
      .from('#hero-right',  { opacity: 0, x: 40, duration: 0.9, ease: 'power3.out' }, 0.3)
      .to('#hero-right',    { opacity: 1, duration: 0 }, 0.3)

    // Floating pill bobs
    gsap.to('.pill-tl', { y: -8, duration: 3.2, ease: 'sine.inOut', yoyo: true, repeat: -1 })
    gsap.to('.pill-tr', { y: 6,  duration: 2.8, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 0.7 })
    gsap.to('.pill-bl', { y: -6, duration: 3.6, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 1.4 })
  }, [])

  return (
    <section
      className="min-h-screen grid items-center relative z-[1]"
      style={{
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        padding: '8rem 4rem 5rem',
      }}
    >
      {/* Ambient glows */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: '-10vw', top: '10vh',
          width: '60vw',  height: '60vh',
          background: 'radial-gradient(ellipse, rgba(196,123,42,0.07) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          right: '5vw', bottom: '10vh',
          width: '40vw', height: '40vh',
          background: 'radial-gradient(ellipse, rgba(23,36,25,0.8) 0%, transparent 70%)',
        }}
      />

      {/* ── LEFT: TEXT ── */}
      <div className="relative z-[2]">
        {/* Eyebrow */}
        <div
          id="hero-eyebrow"
          className="inline-flex items-center gap-2.5 text-[0.68rem] font-medium text-[#C47B2A] tracking-[0.28em] uppercase mb-7"
          style={{ opacity: 0 }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#C47B2A] pulse-dot"
            style={{ boxShadow: '0 0 8px #C47B2A' }}
          />
          Kenya Business Intelligence Platform
        </div>

        {/* Headline */}
        <h1
          id="hero-title"
          className="font-serif font-light text-[#F4ECD8] leading-[1.06] mb-7"
          style={{ fontSize: 'clamp(3rem, 5.5vw, 5.5rem)', opacity: 0 }}
        >
          The law behind<br />
          every <em className="italic text-[#F0C070]">thriving</em><br />
          <span
            className="block pl-12 relative"
            style={{
              '--before-content': '""',
            }}
          >
            <span
              className="absolute left-0 top-1/2 w-8 h-px bg-[#C47B2A]"
              aria-hidden="true"
            />
            Kenyan business.
          </span>
        </h1>

        {/* Description */}
        <p
          id="hero-desc"
          className="text-[0.95rem] font-light text-[#6B6050] leading-[1.85] max-w-[440px] mb-10"
          style={{ opacity: 0 }}
        >
          Mwango Sheria is your AI-powered compliance engine — cutting through
          Kenya's intricate web of corporate law, tax obligations, and
          cross-border trade regulations so you can build with confidence.
        </p>

        {/* CTA buttons */}
        <div
          id="hero-actions"
          className="flex gap-4 flex-wrap"
          style={{ opacity: 0 }}
        >
          <a href="#waitlist" className="btn-primary">
            Join the Waitlist
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#how" className="btn-ghost">See How It Works</a>
        </div>

        {/* Stats strip */}
        <div
          id="hero-stats"
          className="flex mt-12 border border-[rgba(196,123,42,0.12)] rounded-sm overflow-hidden"
          style={{ opacity: 0 }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="flex-1 px-5 py-4 transition-colors hover:bg-[rgba(196,123,42,0.08)]"
              style={{
                borderRight: i < STATS.length - 1 ? '1px solid rgba(196,123,42,0.12)' : 'none',
              }}
            >
              <div className="font-serif text-[1.8rem] font-semibold text-[#C47B2A] leading-none mb-1">
                {s.num}
              </div>
              <div className="text-[0.65rem] font-normal text-[#6B6050] tracking-[0.1em] uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT: DASHBOARD MOCKUP ── */}
      <div
        id="hero-right"
        className="relative z-[2] hidden md:block"
        style={{ opacity: 0 }}
      >
        <div className="relative">
          {/* Floating compliance pills */}
          <div
            className="pill-tl absolute flex items-center gap-2 px-3.5 py-2 rounded-[20px] text-[0.65rem] font-medium text-[#F4ECD8] whitespace-nowrap shadow-[0_8px_24px_rgba(0,0,0,0.4)] z-[3]"
            style={{
              top: '-1.5rem', left: '-1.5rem',
              background: '#172419',
              border: '1px solid rgba(196,123,42,0.35)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" />
            eTIMS Active
          </div>

          <div
            className="pill-tr absolute flex items-center gap-2 px-3.5 py-2 rounded-[20px] text-[0.65rem] font-medium text-[#F4ECD8] whitespace-nowrap shadow-[0_8px_24px_rgba(0,0,0,0.4)] z-[3]"
            style={{
              top: '-1rem', right: '-1rem',
              background: '#172419',
              border: '1px solid rgba(196,123,42,0.35)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#fbbf24]" />
            Annual Returns Due
          </div>

          <div
            className="pill-bl absolute flex items-center gap-2 px-3.5 py-2 rounded-[20px] text-[0.65rem] font-medium text-[#F4ECD8] whitespace-nowrap shadow-[0_8px_24px_rgba(0,0,0,0.4)] z-[3]"
            style={{
              bottom: '-1.5rem', left: '10%',
              background: '#172419',
              border: '1px solid rgba(196,123,42,0.35)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#60a5fa]" />
            NSSF Auto-scheduled
          </div>

          <DashboardCard />
        </div>
      </div>
    </section>
  )
}
