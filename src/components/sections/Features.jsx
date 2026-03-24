/**
 * Features.jsx
 * 6-card features grid — border-collapse style, hover shimmer.
 */
import SectionTag from '../ui/SectionTag.jsx'

const FEATURES = [
  {
    icon: '⚖️',
    title: 'AI Legal Q&A',
    desc: "Ask any business law question in plain English or Kiswahili. Instant answers drawn from Kenya's Companies Act, Employment Act, Tax Laws, and 2026 Finance Act amendments.",
    tag: '24/7 Available',
  },
  {
    icon: '📋',
    title: 'Compliance Checklist',
    desc: 'Dynamic checklist tailored to your specific business type, sector, and county — covering BRS, NEMA permits, eTIMS, Housing Levy, and Beneficial Ownership Registry.',
    tag: 'County-Specific',
  },
  {
    icon: '🔔',
    title: 'Deadline Tracker',
    desc: 'Never miss an annual return, SHIF/NSSF remittance, or VAT filing. Smart SMS and email alerts keep you ahead of every statutory deadline automatically.',
    tag: 'SMS + Email Alerts',
  },
  {
    icon: '🚢',
    title: 'Trade & Customs Guide',
    desc: 'Step-by-step guidance on import documentation, HS code classification, PVoC requirements, IDF levy, and EAC/COMESA/AfCFTA preferential tariff eligibility.',
    tag: 'EAC · COMESA · AfCFTA',
  },
  {
    icon: '📄',
    title: 'Contract Templates',
    desc: "Advocate-reviewed, Kenya-specific templates for employment contracts, supplier agreements, NDAs, shareholder resolutions, and commercial leases under the Law of Contract Act.",
    tag: 'Advocate-Reviewed',
  },
  {
    icon: '🧮',
    title: 'Duty Calculator',
    desc: 'Accurate import duty, VAT, excise, IDF levy, and Railway Development Levy computations using current KRA tariff schedules — updated for the 2026 Finance Act.',
    tag: 'Real-Time Tariffs',
  },
]

export default function Features() {
  return (
    <section id="features" style={{ background: '#060C07' }}>
      {/* Top row */}
      <div
        className="grid gap-20 items-end mb-16"
        style={{ gridTemplateColumns: '1fr 1fr' }}
      >
        <div>
          <SectionTag>Platform Capabilities</SectionTag>
          <h2 className="section-heading gs-reveal">
            Every tool a<br />Kenyan entrepreneur <em>needs</em>.
          </h2>
        </div>
        <p
          className="gs-reveal text-[0.9rem] text-[#6B6050] leading-[1.9]"
          style={{ paddingTop: '2rem' }}
        >
          Whether you're registering a new company, navigating KRA obligations,
          importing through Mombasa, or exporting to the EU — Mwango Sheria
          handles every regulatory touchpoint in one intelligent platform.
        </p>
      </div>

      {/* Features grid — border collapse trick */}
      <div className="features-grid">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="gs-reveal feature-card group relative overflow-hidden p-9 transition-colors hover:bg-[rgba(23,36,25,0.6)]"
            style={{ background: '#060C07' }}
          >
            {/* Hover shimmer overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
              style={{ background: 'linear-gradient(135deg, rgba(196,123,42,0.08) 0%, transparent 60%)' }}
            />

            <div
              className="relative z-[1] w-[42px] h-[42px] border border-[rgba(196,123,42,0.12)] rounded-[4px] flex items-center justify-center text-[1.1rem] mb-5 transition-colors group-hover:border-[#C47B2A]"
            >
              {f.icon}
            </div>

            <div className="relative z-[1] text-[0.82rem] font-semibold text-[#F4ECD8] uppercase tracking-[0.07em] mb-2.5">
              {f.title}
            </div>

            <p className="relative z-[1] text-[0.82rem] text-[#6B6050] leading-[1.8]">
              {f.desc}
            </p>

            <span
              className="relative z-[1] inline-block mt-4 text-[0.6rem] font-medium text-[#C47B2A] tracking-[0.18em] uppercase border border-[rgba(196,123,42,0.25)] px-2.5 py-0.5 rounded-sm"
            >
              {f.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
