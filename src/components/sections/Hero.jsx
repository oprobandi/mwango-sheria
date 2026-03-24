/**
 * Hero.jsx — V1.3 Light Mode
 * Daytime Nairobi skyline, light gradient overlay, clean split layout.
 */
import { useEffect } from 'react'
import { gsap } from 'gsap'
import DashboardCard from '../ui/DashboardCard.jsx'

/* Daytime Nairobi CBD aerial */
const HERO_IMAGE = 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=1800&auto=format&fit=crop&q=80'

const STATS = [
  { num: '7.4M+', label: 'SMEs in Kenya' },
  { num: '47',    label: 'Counties Covered' },
  { num: 'EAC+',  label: 'Regional Trade' },
  { num: '2026',  label: 'Regulations Ready' },
]

export default function Hero() {
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 })
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

      {/* Background image with light overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Nairobi CBD skyline"
          className="w-full h-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
        <div className="hero-image-overlay" />
        {/* Bottom fade to section background */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #F8F4EE, transparent)' }}
        />
      </div>

      {/* Ambient warm glow */}
      <div
        className="absolute pointer-events-none z-[1]"
        style={{
          left: '-5vw', top: '15vh', width: '55vw', height: '55vh',
          background: 'radial-gradient(ellipse, rgba(180,110,20,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Main grid */}
      <div className="relative z-[2] w-full px-5 sm:px-10 lg:px-16 pt-28 pb-20
                      grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-[1400px] mx-auto">

        {/* LEFT: Text */}
        <div>
          {/* Eyebrow */}
          <div
            id="hero-eyebrow"
            className="inline-flex items-center gap-2.5 text-[0.68rem] font-medium text-[#B86520] tracking-[0.28em] uppercase mb-7"
            style={{ opacity: 0 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#B86520] pulse-dot" />
            Kenya Business Intelligence Platform
          </div>

          {/* Headline */}
          <h1
            id="hero-title"
            className="font-serif font-light text-[#1C1207] leading-[1.06] mb-7"
            style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5.5rem)', opacity: 0 }}
          >
            The law behind<br />
            every <em className="italic text-[#B86520]">thriving</em><br />
            <span className="block pl-10 relative">
              <span className="absolute left-0 top-1/2 w-7 h-px bg-[#B86520]" aria-hidden="true" />
              Kenyan business.
            </span>
          </h1>

          {/* Description */}
          <p
            id="hero-desc"
            className="text-[0.95rem] font-light text-[#8A7860] leading-[1.85] max-w-[480px] mb-10"
            style={{ opacity: 0 }}
          >
            Mwango Sheria is your AI-powered compliance engine — cutting through
            Kenya's intricate web of corporate law, tax obligations, and
            cross-border trade regulations so you can build with confidence.
          </p>

          {/* Buttons */}
          <div id="hero-actions" className="flex gap-3 flex-wrap" style={{ opacity: 0 }}>
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
            className="flex mt-12 border border-[rgba(180,110,20,0.18)] rounded-md overflow-hidden max-w-[520px] bg-white shadow-[0_4px_20px_rgba(28,18,7,0.08)]"
            style={{ opacity: 0 }}
          >
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className="flex-1 px-4 py-3.5 transition-colors hover:bg-[rgba(180,110,20,0.05)] min-w-0"
                style={{ borderRight: i < STATS.length - 1 ? '1px solid rgba(180,110,20,0.14)' : 'none' }}
              >
                <div className="font-serif text-[1.4rem] sm:text-[1.7rem] font-semibold text-[#B86520] leading-none mb-0.5 truncate">
                  {s.num}
                </div>
                <div className="text-[0.58rem] sm:text-[0.62rem] font-normal text-[#8A7860] tracking-[0.08em] uppercase leading-tight">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Dashboard mockup — hidden on mobile */}
        <div id="hero-right" className="hidden lg:block relative" style={{ opacity: 0 }}>
          <div className="relative">
            {[
              { cls: 'pill-tl', style: { top: '-1.5rem', left: '-1.5rem' }, dot: '#16a34a', label: 'eTIMS Active' },
              { cls: 'pill-tr', style: { top: '-1rem', right: '-1rem' },    dot: '#d97706', label: 'Annual Returns Due' },
              { cls: 'pill-bl', style: { bottom: '-1.5rem', left: '10%' },  dot: '#2563eb', label: 'NSSF Auto-scheduled' },
            ].map((p) => (
              <div
                key={p.label}
                className={`${p.cls} absolute flex items-center gap-2 px-3.5 py-2 rounded-[20px] text-[0.65rem] font-medium text-[#1C1207] whitespace-nowrap z-[3]`}
                style={{ ...p.style, background: '#FFFFFF', border: '1px solid rgba(180,110,20,0.22)', boxShadow: '0 6px 20px rgba(28,18,7,0.1)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: p.dot }} />
                {p.label}
              </div>
            ))}
            <DashboardCard />
          </div>
        </div>
      </div>

      {/* Mobile: mini status pills */}
      <div className="lg:hidden absolute bottom-6 left-5 right-5 z-[2] flex gap-2 flex-wrap justify-center">
        {[
          { dot: '#16a34a', label: 'eTIMS Active' },
          { dot: '#d97706', label: '14-day Alert' },
          { dot: '#2563eb', label: 'NSSF Tracked' },
        ].map((p) => (
          <div
            key={p.label}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full text-[0.65rem] font-medium text-[#1C1207] bg-white shadow-sm"
            style={{ border: '1px solid rgba(180,110,20,0.2)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: p.dot }} />
            {p.label}
          </div>
        ))}
      </div>
    </section>
  )
}
