/**
 * CTASection.jsx  — V1.1
 * Waitlist CTA — fully responsive form layout with useWaitlist hook.
 * Includes Unsplash background tint for visual depth.
 */
import { useWaitlist } from '../../hooks/useWaitlist.js'

const CTA_BG = 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=1400&auto=format&fit=crop&q=60'

export default function CTASection() {
  const { email, setEmail, status, handleSubmit } = useWaitlist()

  return (
    <section
      id="waitlist"
      className="relative overflow-hidden text-center"
      style={{ padding: '8rem 1.25rem' }}
    >
      {/* Subtle background tint */}
      <div className="absolute inset-0 z-0">
        <img
          src={CTA_BG}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-10"
          loading="lazy"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #060C07 0%, rgba(6,12,7,0.6) 50%, #060C07 100%)' }} />
      </div>

      {/* Radial glow */}
      <div
        className="absolute pointer-events-none z-[1]"
        style={{
          left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px', height: '400px',
          background: 'radial-gradient(ellipse, rgba(196,123,42,0.09) 0%, transparent 70%)',
        }}
      />

      {/* Decorative hexagon */}
      <svg
        className="absolute pointer-events-none z-[1]"
        style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '400px', height: '400px', opacity: 0.05 }}
        viewBox="0 0 400 400" fill="none"
        aria-hidden="true"
      >
        <path d="M200 20 L370 110 L370 290 L200 380 L30 290 L30 110 Z" stroke="#C47B2A" strokeWidth="1" />
        <path d="M200 60 L340 135 L340 265 L200 340 L60 265 L60 135 Z" stroke="#C47B2A" strokeWidth="0.5" />
      </svg>

      {/* Content */}
      <div className="relative z-[2] max-w-2xl mx-auto">
        <span className="section-tag gs-reveal" style={{ justifyContent: 'center' }}>Early Access</span>

        <h2
          className="font-serif font-light text-[#F4ECD8] leading-[1.08] mb-6 gs-reveal"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 4.8rem)' }}
        >
          Be first to <em className="italic text-[#F0C070]">simplify</em><br />
          your business compliance.
        </h2>

        <p className="gs-reveal text-[0.9rem] text-[#6B6050] max-w-md mx-auto mb-10 leading-[1.85]">
          Join hundreds of Kenyan entrepreneurs on the waitlist. Early access members
          receive 6 months of premium features at no cost.
        </p>

        {/* Form */}
        {status !== 'success' ? (
          <form
            onSubmit={handleSubmit}
            className="gs-reveal flex flex-col sm:flex-row max-w-[460px] mx-auto gap-0"
            noValidate
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              aria-label="Email address for waitlist"
              className="flex-1 px-5 py-3.5 bg-white/[0.03] text-[#F4ECD8] font-['Outfit'] text-[0.85rem] outline-none transition-colors
                         placeholder:text-[#6B6050]
                         border border-[rgba(196,123,42,0.15)] focus:border-[rgba(196,123,42,0.6)]
                         rounded-[2px] sm:rounded-r-none sm:border-r-0"
              style={status === 'error' ? { borderColor: 'rgba(248,113,113,0.7)' } : {}}
            />
            <button
              type="submit"
              className="bg-[#C47B2A] hover:bg-[#DFA042] text-[#060C07] font-['Outfit'] font-bold text-[0.75rem] tracking-[0.14em] uppercase px-7 py-3.5 border-none cursor-pointer transition-colors whitespace-nowrap
                         rounded-[2px] sm:rounded-l-none"
            >
              Join Waitlist
            </button>
          </form>
        ) : (
          <div
            className="gs-reveal inline-flex items-center gap-3 px-6 py-3.5 rounded-[2px] text-[0.85rem] font-medium"
            style={{ background: 'rgba(45,90,61,0.6)', color: '#A8D5B5', border: '1px solid rgba(74,222,128,0.2)' }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8l3.5 3.5L13 5" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            You're on the list! We'll be in touch soon.
          </div>
        )}

        {status === 'error' && (
          <p className="text-[0.72rem] mt-2" style={{ color: 'rgba(248,113,113,0.9)' }}>
            Please enter a valid email address.
          </p>
        )}

        <p className="gs-reveal text-[0.7rem] text-[#6B6050] mt-5">
          No spam. No commitment. Just early access to Kenya's most comprehensive business law platform.
        </p>
      </div>
    </section>
  )
}
