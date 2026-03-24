/**
 * Hero.jsx  — V1.1
 * Full-viewport hero with:
 * - Unsplash Nairobi skyline background image
 * - Responsive two-column → single-column layout
 * - Dashboard mockup hidden below md, shown above
 * - GSAP entrance timeline
 */
import { useEffect } from 'react'
import { gsap } from 'gsap'
import DashboardCard from '../ui/DashboardCard.jsx'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=1800&auto=format&fit=crop&q=75'

const STATS = [
  { num: '7.4M+', label: 'SMEs in Kenya' },
  { num: '47',    label: 'Counties Covered' },
  { num: 'EAC+',  label: 'Regional Trade' },
  { num: '2026',  label: 'Regulations Ready' },
]

export default function Hero() {
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.25 })
    tl.to('#hero-eyebrow',   { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 0)
      .from('#hero-title',   { opacity: 0, y: 32, duration: 0.8, ease: 'power3.out' }, 0.15)
      .to('#hero-title',     { opacity: 1, duration: 0 }, 0.15)
      .from('#hero-desc',    { opacity: 0, y: 24, duration: 0.7, ease: 'power3.out' }, 0.32)
      .to('#hero-desc',      { opacity: 1, duration: 0 }, 0.32)
      .from('#hero-actions', { opacity: 0, y: 20, duration: 0.6, ease: 'power2.out' }, 0.48)
      .to('#hero-actions',   { opacity: 1, duration: 0 }, 0.48)
      .from('#hero-stats',   { opacity: 0, y: 16, duration: 0.6, ease: 'power2.out' }, 0.62)
      .to('#hero-stats',     { opacity: 1, duration: 0 }, 0.62)
      .from('#hero-right',   { opacity: 0, x: 40, duration: 0.9, ease: 'power3.out' }, 0.3)
      .to('#hero-right',     { opacity: 1, duration: 0 }, 0.3)

    gsap.to('.pill-tl', { y: -8, duration: 3.2, ease: 'sine.inOut', yoyo: true, repeat: -1 })
    gsap.to('.pill-tr', { y:  6, duration: 2.8, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 0.7 })
    gsap.to('.pill-bl', { y: -6, duration: 3.6, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 1.4 })
  }, [])

  return (
    <section className="relative min-h-screen flex items-center z-[1] overflow-hidden">

      {/* ── Background Image ── */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Nairobi skyline at night"
          className="w-full h-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
        {/* Gradient overlay: heavy on left for text legibility, lighter on right */}
        <div className="hero-image-overlay" />
        {/* Extra bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #060C07, transparent)' }}
        />
      </div>

      {/* ── Ambient glows over image ── */}
      <div
        className="absolute pointer-events-none z-[1]"
        style={{
          left: '-10vw', top: '10vh', width: '60vw', height: '60vh',
          background: 'radial-gradient(ellipse, rgba(196,123,42,0.1) 0%, transparent 70%)',
        }}
      />

      {/* ── Main grid ── */}
      <div className="relative z-[2] w-full px-5 sm:px-10 lg:px-16 pt-28 pb-16
                      grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-[1400px] mx-auto">

        {/* LEFT: Text */}
        <div>
          {/* Eyebrow */}
          <div
            id="hero-eyebrow"
            className="inline-flex items-center gap-2.5 text-[0.68rem] font-medium text-[#C47B2A] tracking-[0.28em] uppercase mb-7"
            style={{ opacity: 0 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C47B2A] pulse-dot" style={{ boxShadow: '0 0 8px #C47B2A' }} />
            Kenya Business Intelligence Platform
          </div>

          {/* Headline */}
          <h1
            id="hero-title"
            className="font-serif font-light text-[#F4ECD8] leading-[1.06] mb-7"
            style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5.5rem)', opacity: 0 }}
          >
            The law behind<br />
            every <em className="italic text-[#F0C070]">thriving</em><br />
            <span className="block pl-12 relative">
              <span className="absolute left-0 top-1/2 w-8 h-px bg-[#C47B2A]" aria-hidden="true" />
              Kenyan business.
            </span>
          </h1>

          {/* Description */}
          <p
            id="hero-desc"
            className="text-[0.95rem] font-light text-[#8a7a66] leading-[1.85] max-w-[480px] mb-10"
            style={{ opacity: 0 }}
          >
            Mwango Sheria is your AI-powered compliance engine — cutting through
            Kenya's intricate web of corporate law, tax obligations, and
            cross-border trade regulations so you can build with confidence.
          </p>

          {/* Buttons */}
          <div id="hero-actions" className="flex gap-4 flex-wrap" style={{ opacity: 0 }}>
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
            className="flex mt-12 border border-[rgba(196,123,42,0.18)] rounded-sm overflow-hidden max-w-[520px]"
            style={{ opacity: 0, background: 'rgba(6,12,7,0.6)', backdropFilter: 'blur(8px)' }}
          >
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className="flex-1 px-4 py-3.5 transition-colors hover:bg-[rgba(196,123,42,0.08)] min-w-0"
                style={{ borderRight: i < STATS.length - 1 ? '1px solid rgba(196,123,42,0.18)' : 'none' }}
              >
                <div className="font-serif text-[1.5rem] sm:text-[1.8rem] font-semibold text-[#C47B2A] leading-none mb-0.5 truncate">
                  {s.num}
                </div>
                <div className="text-[0.58rem] sm:text-[0.65rem] font-normal text-[#6B6050] tracking-[0.08em] uppercase leading-tight">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Dashboard mockup — hidden on mobile */}
        <div id="hero-right" className="hidden lg:block relative" style={{ opacity: 0 }}>
          <div className="relative">
            {/* Floating pills */}
            {[
              { cls: 'pill-tl', style: { top: '-1.5rem', left: '-1.5rem' }, dot: '#4ade80', label: 'eTIMS Active' },
              { cls: 'pill-tr', style: { top: '-1rem', right: '-1rem' },    dot: '#fbbf24', label: 'Annual Returns Due' },
              { cls: 'pill-bl', style: { bottom: '-1.5rem', left: '10%' },  dot: '#60a5fa', label: 'NSSF Auto-scheduled' },
            ].map((p) => (
              <div
                key={p.label}
                className={`${p.cls} absolute flex items-center gap-2 px-3.5 py-2 rounded-[20px] text-[0.65rem] font-medium text-[#F4ECD8] whitespace-nowrap shadow-[0_8px_24px_rgba(0,0,0,0.5)] z-[3]`}
                style={{ ...p.style, background: '#172419', border: '1px solid rgba(196,123,42,0.35)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: p.dot }} />
                {p.label}
              </div>
            ))}
            <DashboardCard />
          </div>
        </div>
      </div>

      {/* Mobile: mini stat pills instead of dashboard */}
      <div className="lg:hidden absolute bottom-6 left-5 right-5 z-[2] flex gap-2 flex-wrap justify-center">
        {[
          { dot: '#4ade80', label: 'eTIMS Active' },
          { dot: '#fbbf24', label: '14-day Alert' },
          { dot: '#60a5fa', label: 'NSSF Tracked' },
        ].map((p) => (
          <div
            key={p.label}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[0.65rem] font-medium text-[#F4ECD8]"
            style={{ background: 'rgba(23,36,25,0.9)', border: '1px solid rgba(196,123,42,0.3)', backdropFilter: 'blur(8px)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: p.dot }} />
            {p.label}
          </div>
        ))}
      </div>
    </section>
  )
}
