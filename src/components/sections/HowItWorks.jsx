/**
 * HowItWorks.jsx
 * 4-step process section.
 */
import SectionTag from '../ui/SectionTag.jsx'

const STEPS = [
  {
    num: '01',
    icon: '🗣️',
    title: 'Describe Your Situation',
    desc: "Tell us about your business type, industry, county, and what you're trying to accomplish. Plain English or Kiswahili — no jargon needed.",
  },
  {
    num: '02',
    icon: '🤖',
    title: 'AI Surfaces What Applies',
    desc: "Our engine cross-references Kenya's Companies Act, Employment Act, EAC Customs Law, and 2026 regulatory updates to give you precise, actionable guidance.",
  },
  {
    num: '03',
    icon: '📅',
    title: 'Track & Stay Compliant',
    desc: 'Your compliance dashboard tracks obligations, upcoming filings, and deadlines across all relevant bodies — KRA, BRS, NEMA, NHIF, and more.',
  },
  {
    num: '04',
    icon: '👨‍⚖️',
    title: 'Escalate When Needed',
    desc: 'Complex matters get routed to vetted Kenyan advocates and licensed clearing agents — with transparent fees and no hidden retainers.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" style={{ background: '#0C1A0E' }}>
      {/* Intro row */}
      <div
        className="grid gap-8 mb-16"
        style={{ gridTemplateColumns: '1fr 1fr' }}
      >
        <div>
          <SectionTag>The Process</SectionTag>
          <h2 className="section-heading gs-reveal">
            From complexity<br />to <em>clarity</em> — fast.
          </h2>
        </div>
        <p
          className="gs-reveal text-[0.9rem] text-[#6B6050] leading-[1.9] self-end pb-2"
          style={{ paddingTop: '2rem' }}
        >
          No legal degree required. Describe your situation in plain English or
          Kiswahili, and Mwango Sheria surfaces exactly what applies to you —
          from a single BRS query to a full cross-border trade workflow.
        </p>
      </div>

      {/* Steps grid */}
      <div
        className="grid"
        style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}
      >
        {STEPS.map((step, i) => (
          <div
            key={step.num}
            className="gs-reveal px-8 py-10 transition-colors hover:bg-[rgba(196,123,42,0.04)]"
            style={{
              borderLeft: i > 0 ? '1px solid rgba(196,123,42,0.12)' : 'none',
              borderTop: '1px solid rgba(196,123,42,0.12)',
            }}
          >
            <div
              className="font-serif text-[2.2rem] font-light leading-none mb-5"
              style={{ color: 'rgba(196,123,42,0.15)' }}
            >
              {step.num}
            </div>
            <div
              className="text-base mb-4 w-10 h-10 flex items-center justify-center border border-[rgba(196,123,42,0.12)] rounded-[4px] transition-colors"
              style={{ fontSize: '1rem' }}
            >
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
