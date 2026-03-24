/**
 * Features.jsx — V1.3 Light Mode
 */
import SectionTag from '../ui/SectionTag.jsx'

const FEATURES = [
  {
    icon: '⚖️', title: 'AI Legal Q&A',
    desc: "Ask any business law question in plain English or Kiswahili. Instant answers drawn from Kenya's Companies Act, Employment Act, Tax Laws, and 2026 Finance Act amendments.",
    tag: '24/7 Available',
  },
  {
    icon: '📋', title: 'Compliance Checklist',
    desc: 'Dynamic checklist tailored to your business type, sector, and county — covering BRS, NEMA permits, eTIMS, Housing Levy, and Beneficial Ownership Registry.',
    tag: 'County-Specific',
  },
  {
    icon: '🔔', title: 'Deadline Tracker',
    desc: 'Never miss an annual return, SHIF/NSSF remittance, or VAT filing. Smart SMS and email alerts keep you ahead of every statutory deadline automatically.',
    tag: 'SMS + Email Alerts',
  },
  {
    icon: '🚢', title: 'Trade & Customs Guide',
    desc: 'Step-by-step guidance on import documentation, HS code classification, PVoC requirements, IDF levy, and EAC/COMESA/AfCFTA preferential tariff eligibility.',
    tag: 'EAC · COMESA · AfCFTA',
  },
  {
    icon: '📄', title: 'Contract Templates',
    desc: 'Advocate-reviewed, Kenya-specific templates for employment contracts, supplier agreements, NDAs, shareholder resolutions, and commercial leases.',
    tag: 'Advocate-Reviewed',
  },
  {
    icon: '🧮', title: 'Duty Calculator',
    desc: 'Instantly calculate import duties, VAT, excise, KEBS levies, and Railway Development Levy for any HS code — with EAC and COMESA preferential rate scenarios.',
    tag: 'HS Code Lookup',
  },
]

export default function Features() {
  return (
    <section id="features" className="section-pad" style={{ background: '#F8F4EE' }}>
      {/* Heading row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-14">
        <div>
          <SectionTag>Platform Capabilities</SectionTag>
          <h2 className="section-heading gs-reveal">
            Every tool a<br />Kenyan entrepreneur <em>needs</em>.
          </h2>
        </div>
        <p className="gs-reveal text-[0.9rem] text-[#8A7860] leading-[1.9] lg:pt-8">
          Whether you're registering a new company, navigating KRA obligations,
          importing through Mombasa, or exporting to the EU — Mwango Sheria
          handles every regulatory touchpoint in one intelligent platform.
        </p>
      </div>

      {/* Cards */}
      <div className="features-grid">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="gs-reveal relative overflow-hidden p-8 sm:p-9 transition-colors group bg-white"
          >
            {/* Hover shimmer */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{ background: 'linear-gradient(135deg, rgba(180,110,20,0.05) 0%, transparent 60%)' }}
            />

            <div className="w-[44px] h-[44px] border border-[rgba(180,110,20,0.14)] bg-[rgba(180,110,20,0.04)] rounded-lg flex items-center justify-center text-[1.1rem] mb-5 relative z-[1] transition-colors group-hover:border-[rgba(180,110,20,0.4)] group-hover:bg-[rgba(180,110,20,0.08)]">
              {f.icon}
            </div>

            <div className="text-[0.82rem] font-semibold text-[#1C1207] tracking-[0.06em] uppercase mb-2.5 relative z-[1]">
              {f.title}
            </div>

            <p className="text-[0.82rem] text-[#8A7860] leading-[1.8] relative z-[1]">
              {f.desc}
            </p>

            <span className="inline-block mt-4 text-[0.6rem] font-medium text-[#B86520] tracking-[0.18em] uppercase border border-[rgba(180,110,20,0.22)] px-2.5 py-1 rounded-[2px] relative z-[1] bg-[rgba(180,110,20,0.04)]">
              {f.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
