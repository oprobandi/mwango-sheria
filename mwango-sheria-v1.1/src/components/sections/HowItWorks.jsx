/**
 * HowItWorks.jsx  — V1.1
 * 4-step process section with an Unsplash illustration panel on mobile,
 * and a fully responsive grid layout.
 */
import SectionTag from '../ui/SectionTag.jsx'

const STEPS = [
  {
    num:   '01',
    icon:  '🗣️',
    title: 'Describe Your Situation',
    desc:  "Tell us about your business type, industry, county, and what you're trying to accomplish. Plain English or Kiswahili — no jargon needed.",
  },
  {
    num:   '02',
    icon:  '🤖',
    title: 'AI Surfaces What Applies',
    desc:  "Our engine cross-references Kenya's Companies Act, Employment Act, EAC Customs Law, and 2026 regulatory updates to give you precise, actionable guidance.",
  },
  {
    num:   '03',
    icon:  '📅',
    title: 'Track & Stay Compliant',
    desc:  'Your compliance dashboard tracks obligations, upcoming filings, and deadlines across all relevant bodies — KRA, BRS, NEMA, NHIF, and more.',
  },
  {
    num:   '04',
    icon:  '👨‍⚖️',
    title: 'Escalate When Needed',
    desc:  'Complex matters get routed to vetted Kenyan advocates and licensed clearing agents — with transparent fees and no hidden retainers.',
  },
]

const PROCESS_IMAGE = 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=900&auto=format&fit=crop&q=75'

export default function HowItWorks() {
  return (
    <section id="how" className="section-pad" style={{ background: '#0C1A0E' }}>

      {/* Intro row: heading + description */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-end">
        <div>
          <SectionTag>The Process</SectionTag>
          <h2 className="section-heading gs-reveal">
            From complexity<br />to <em>clarity</em> — fast.
          </h2>
        </div>
        <p className="gs-reveal text-[0.9rem] text-[#6B6050] leading-[1.9] lg:pb-2">
          No legal degree required. Describe your situation in plain English or
          Kiswahili, and Mwango Sheria surfaces exactly what applies to you —
          from a single BRS query to a full cross-border trade workflow.
        </p>
      </div>

      {/* Mobile: image strip */}
      <div className="lg:hidden mb-10 rounded-md overflow-hidden h-44 relative img-card">
        <img
          src={PROCESS_IMAGE}
          alt="Business professionals collaborating"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 flex items-end p-4">
          <span className="text-[0.65rem] font-medium text-[#B8A880] tracking-[0.1em] uppercase" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>
            AI-Powered · Kenya-Specific · Always Current
          </span>
        </div>
      </div>

      {/* Steps grid: 4-col desktop → 2-col tablet → 1-col mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-[rgba(196,123,42,0.12)]">
        {STEPS.map((step, i) => (
          <div
            key={step.num}
            className="gs-reveal px-6 py-10 transition-colors hover:bg-[rgba(196,123,42,0.04)]
                       border-b border-[rgba(196,123,42,0.12)]
                       sm:border-b-0 sm:border-t border-[rgba(196,123,42,0.12)]"
            style={{
              borderLeft: i > 0 ? '1px solid rgba(196,123,42,0.12)' : 'none',
            }}
          >
            <div
              className="font-serif text-[2.2rem] font-light leading-none mb-5"
              style={{ color: 'rgba(196,123,42,0.18)' }}
            >
              {step.num}
            </div>

            <div className="text-base mb-4 w-10 h-10 flex items-center justify-center border border-[rgba(196,123,42,0.12)] rounded-[4px] transition-colors hover:border-[rgba(196,123,42,0.4)]">
              {step.icon}
            </div>

            <div className="text-[0.82rem] font-semibold text-[#F4ECD8] tracking-[0.06em] uppercase mb-3">
              {step.title}
            </div>

            <p className="text-[0.83rem] text-[#6B6050] leading-[1.8]">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
