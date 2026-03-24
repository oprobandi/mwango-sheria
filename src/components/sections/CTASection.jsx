/**
 * CTASection.jsx — V1.4
 */
import { useWaitlist } from '../../hooks/useWaitlist.js'

const CTA_BG = 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1400&auto=format&fit=crop&q=65'

export default function CTASection() {
  const { email, setEmail, status, handleSubmit } = useWaitlist()

  return (
    <section id="waitlist" className="relative overflow-hidden text-center" style={{ padding: '7rem 1.25rem', background: 'var(--bg-alt)' }}>
      <div className="absolute inset-0 z-0">
        <img src={CTA_BG} alt="" aria-hidden="true" className="w-full h-full object-cover object-center opacity-[0.07]" loading="lazy" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, var(--bg-alt) 0%, transparent 50%, var(--bg-alt) 100%)' }} />
      </div>
      <div className="absolute pointer-events-none z-[1]"
        style={{ left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '400px', background: 'radial-gradient(ellipse, var(--accent-soft) 0%, transparent 70%)' }} />

      <div className="relative z-[2] max-w-xl mx-auto px-4">
        <span className="section-tag gs-reveal" style={{ justifyContent: 'center' }}>Early Access</span>
        <h2 className="font-serif font-light leading-[1.08] mb-6 gs-reveal" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: 'var(--text-h)' }}>
          Be first to <em className="italic" style={{ color: 'var(--accent)' }}>simplify</em><br />your business compliance.
        </h2>
        <p className="gs-reveal text-[0.9rem] max-w-sm mx-auto mb-10 leading-[1.85]" style={{ color: 'var(--text-muted)' }}>
          Join hundreds of Kenyan entrepreneurs on the waitlist. Early access members receive 6 months of premium features at no cost.
        </p>

        {status !== 'success' ? (
          <form onSubmit={handleSubmit} className="gs-reveal flex flex-col sm:flex-row max-w-[460px] mx-auto gap-3 sm:gap-0" noValidate>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com" aria-label="Email address for waitlist"
              className="flex-1 px-5 py-4 font-['Outfit'] text-[0.88rem] outline-none transition-colors rounded-[3px] sm:rounded-r-none sm:border-r-0"
              style={{
                background: 'var(--bg-card-alt)', color: 'var(--text-h)',
                border: `1px solid ${status === 'error' ? 'rgba(220,38,38,0.6)' : 'var(--accent-border)'}`,
                boxShadow: 'var(--shadow-sm)',
              }}
            />
            <button type="submit"
              className="font-['Outfit'] font-bold text-[0.78rem] tracking-[0.14em] uppercase px-7 py-4 border-none cursor-pointer text-white whitespace-nowrap rounded-[3px] sm:rounded-l-none touch-manipulation"
              style={{ background: 'var(--accent)' }}>
              Join Waitlist
            </button>
          </form>
        ) : (
          <div className="gs-reveal inline-flex items-center gap-3 px-6 py-4 rounded-[3px] text-[0.85rem] font-medium"
            style={{ background: 'rgba(22,163,74,0.08)', color: '#16a34a', border: '1px solid rgba(22,163,74,0.2)' }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8l3.5 3.5L13 5" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            You're on the list! We'll be in touch soon.
          </div>
        )}
        {status === 'error' && <p className="text-[0.72rem] mt-2" style={{ color: 'rgba(220,38,38,0.9)' }}>Please enter a valid email address.</p>}
        <p className="gs-reveal text-[0.7rem] mt-5" style={{ color: 'var(--text-muted)' }}>No spam. No commitment. Just early access to Kenya's most comprehensive business law platform.</p>
      </div>
    </section>
  )
}
