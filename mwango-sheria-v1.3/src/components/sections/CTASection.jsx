/**
 * CTASection.jsx — V1.3 Light Mode
 * Warm background with Nairobi image tint. Fully responsive form.
 */
import { useWaitlist } from '../../hooks/useWaitlist.js'

/* Nairobi business district — warm daytime */
const CTA_BG = 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1400&auto=format&fit=crop&q=65'

export default function CTASection() {
  const { email, setEmail, status, handleSubmit } = useWaitlist()

  return (
    <section
      id="waitlist"
      className="relative overflow-hidden text-center"
      style={{ padding: '7rem 1.25rem', background: '#EFE9DE' }}
    >
      {/* Background image — very subtle warm tint */}
      <div className="absolute inset-0 z-0">
        <img
          src={CTA_BG}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-[0.08]"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, #EFE9DE 0%, rgba(239,233,222,0.7) 50%, #EFE9DE 100%)' }}
        />
      </div>

      {/* Radial warm glow */}
      <div
        className="absolute pointer-events-none z-[1]"
        style={{
          left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px', height: '400px',
          background: 'radial-gradient(ellipse, rgba(180,110,20,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-[2] max-w-xl mx-auto px-4">
        <span className="section-tag gs-reveal" style={{ justifyContent: 'center' }}>Early Access</span>

        <h2
          className="font-serif font-light text-[#1C1207] leading-[1.08] mb-6 gs-reveal"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
        >
          Be first to <em className="italic text-[#B86520]">simplify</em><br />
          your business compliance.
        </h2>

        <p className="gs-reveal text-[0.9rem] text-[#8A7860] max-w-sm mx-auto mb-10 leading-[1.85]">
          Join hundreds of Kenyan entrepreneurs on the waitlist. Early access members
          receive 6 months of premium features at no cost.
        </p>

        {/* Form */}
        {status !== 'success' ? (
          <form
            onSubmit={handleSubmit}
            className="gs-reveal flex flex-col sm:flex-row max-w-[460px] mx-auto gap-3 sm:gap-0"
            noValidate
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              aria-label="Email address for waitlist"
              className="flex-1 px-5 py-4 bg-white text-[#1C1207] font-['Outfit'] text-[0.88rem] outline-none transition-colors
                         placeholder:text-[#8A7860]
                         border border-[rgba(180,110,20,0.2)] focus:border-[rgba(180,110,20,0.6)]
                         rounded-[3px] sm:rounded-r-none sm:border-r-0
                         shadow-sm"
              style={status === 'error' ? { borderColor: 'rgba(220,38,38,0.6)' } : {}}
            />
            <button
              type="submit"
              className="bg-[#B86520] hover:bg-[#C47B2A] text-white font-['Outfit'] font-bold text-[0.78rem] tracking-[0.14em] uppercase px-7 py-4 border-none cursor-pointer transition-colors whitespace-nowrap
                         rounded-[3px] sm:rounded-l-none shadow-sm touch-manipulation"
            >
              Join Waitlist
            </button>
          </form>
        ) : (
          <div
            className="gs-reveal inline-flex items-center gap-3 px-6 py-4 rounded-[3px] text-[0.85rem] font-medium"
            style={{ background: 'rgba(22,163,74,0.08)', color: '#16a34a', border: '1px solid rgba(22,163,74,0.2)' }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8l3.5 3.5L13 5" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            You're on the list! We'll be in touch soon.
          </div>
        )}

        {status === 'error' && (
          <p className="text-[0.72rem] mt-2 text-red-600">
            Please enter a valid email address.
          </p>
        )}

        <p className="gs-reveal text-[0.7rem] text-[#8A7860] mt-5">
          No spam. No commitment. Just early access to Kenya's most comprehensive business law platform.
        </p>
      </div>
    </section>
  )
}
