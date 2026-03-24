/**
 * HowItWorks.jsx — V1.4
 */
import SectionTag from '../ui/SectionTag.jsx'

const STEPS = [
  { num: '01', icon: '🗣️', title: 'Describe Your Situation', desc: "Tell us about your business type, industry, county, and what you're trying to accomplish. Plain English or Kiswahili — no jargon needed." },
  { num: '02', icon: '🤖', title: 'AI Surfaces What Applies', desc: "Our engine cross-references Kenya's Companies Act, Employment Act, EAC Customs Law, and 2026 regulatory updates to give you precise, actionable guidance." },
  { num: '03', icon: '📅', title: 'Track & Stay Compliant', desc: 'Your compliance dashboard tracks obligations, upcoming filings, and deadlines across all relevant bodies — KRA, BRS, NEMA, NHIF, and more.' },
  { num: '04', icon: '👨‍⚖️', title: 'Escalate When Needed', desc: 'Complex matters get routed to vetted Kenyan advocates and licensed clearing agents — with transparent fees and no hidden retainers.' },
]

const PROCESS_IMAGE = 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&auto=format&fit=crop&q=80'

export default function HowItWorks() {
  return (
    <section id="how" className="section-pad" style={{ background: 'var(--bg-alt)' }}>
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-end">
          <div>
            <SectionTag>The Process</SectionTag>
            <h2 className="section-heading gs-reveal">From complexity<br />to <em>clarity</em> — fast.</h2>
          </div>
          <p className="gs-reveal text-[0.9rem] leading-[1.9] lg:pb-2" style={{ color: 'var(--text-muted)' }}>
            No legal degree required. Describe your situation in plain English or Kiswahili, and Mwango Sheria surfaces exactly what applies to you — from a single BRS query to a full cross-border trade workflow.
          </p>
        </div>

        {/* Mobile image */}
        <div className="lg:hidden mb-10 rounded-xl overflow-hidden h-48 relative shadow-md">
          <img src={PROCESS_IMAGE} alt="Business professionals collaborating in Nairobi" loading="lazy" decoding="async" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,18,7,0.5)] to-transparent flex items-end p-4">
            <span className="text-[0.65rem] font-medium text-white tracking-[0.1em] uppercase">AI-Powered · Kenya-Specific · Always Current</span>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 lg:rounded-xl lg:overflow-hidden"
          style={{ border: '1px solid var(--accent-border)' }}>
          {STEPS.map((step, i) => (
            <div key={step.num}
              className="gs-reveal px-6 py-8 sm:py-10 ms-card rounded-none"
              style={{ borderRadius: 0, borderTop: 'none', borderBottom: 'none', borderLeft: i > 0 ? '1px solid var(--accent-border)' : 'none', borderRight: 'none' }}>
              <div className="font-serif text-[2.2rem] font-light leading-none mb-5" style={{ color: 'var(--accent-border)' }}>
                {step.num}
              </div>
              <div className="text-base mb-4 w-10 h-10 flex items-center justify-center rounded-lg" style={{ background: 'var(--accent-soft)', border: '1px solid var(--accent-border)' }}>
                {step.icon}
              </div>
              <div className="text-[0.82rem] font-semibold tracking-[0.05em] uppercase mb-3" style={{ color: 'var(--text-h)' }}>{step.title}</div>
              <p className="text-[0.83rem] leading-[1.8]" style={{ color: 'var(--text-muted)' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
