/**
 * Coverage.jsx
 * Legal coverage areas — 6 cards with hover reveal top-line.
 */
import SectionTag from '../ui/SectionTag.jsx'

const AREAS = [
  {
    label: 'Corporate Law',
    title: 'Company Formation & Governance',
    desc: "Registration under the Companies Act 2015, BRS workflows, shareholder agreements, board resolutions, and company secretarial obligations.",
    pills: ['Companies Act 2015', 'BRS / eCitizen', 'Beneficial Ownership', 'CR12 & CR8'],
  },
  {
    label: 'Tax & Revenue',
    title: 'KRA, VAT & eTIMS Compliance',
    desc: 'Income tax, VAT, withholding tax, turnover tax for SMEs, and mandatory KRA eTIMS integration rules effective January 2026.',
    pills: ['Income Tax Act', 'VAT Act', 'eTIMS', 'Finance Act 2026'],
  },
  {
    label: 'Trade & Customs',
    title: 'Imports, Exports & Cross-Border',
    desc: "EAC Customs Management Act, HS code classification, PVoC certification, IDF levy, and COMESA/AfCFTA preferential tariff rules.",
    pills: ['EAC CMA', 'COMESA', 'AfCFTA', 'KRA Customs'],
  },
  {
    label: 'Employment Law',
    title: 'Labour, NSSF & SHIF',
    desc: "Employment Act 2007, NSSF Act amendments, SHIF contributions, Housing Levy, WIBA, and county-specific labour compliance obligations.",
    pills: ['Employment Act', 'NSSF Act', 'SHIF', 'Housing Levy'],
  },
  {
    label: 'Data & Tech Law',
    title: 'Data Protection & ODPC',
    desc: 'Kenya Data Protection Act 2019, ODPC registration obligations, data processor agreements, and cross-border data transfer rules.',
    pills: ['Data Protection Act', 'ODPC', 'Privacy Policy', 'DPA Compliance'],
  },
  {
    label: 'Environment & County',
    title: 'NEMA, Permits & County Law',
    desc: 'Environmental Impact Assessments, NEMA licences, Unified Single Business Permits across all 47 counties, and sector-specific approvals.',
    pills: ['NEMA', 'County Permits', 'EIA', 'KEBS Standards'],
  },
]

export default function Coverage() {
  return (
    <section id="coverage" style={{ background: '#0C1A0E' }}>
      <SectionTag>Legal Coverage</SectionTag>
      <h2 className="section-heading gs-reveal">
        Every area of Kenyan<br />business law, <em>covered</em>.
      </h2>

      <div
        className="grid gap-6 mt-16"
        style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
      >
        {AREAS.map((area, i) => (
          <div
            key={area.label}
            className="coverage-card relative overflow-hidden border border-[rgba(196,123,42,0.12)] rounded-[3px] p-8 transition-all duration-350 hover:border-[rgba(196,123,42,0.35)] hover:-translate-y-1"
            style={{ background: '#172419' }}
          >
            {/* Big decorative number */}
            <span
              className="absolute bottom-4 right-5 font-serif text-[3rem] font-light leading-none pointer-events-none select-none"
              style={{ color: 'rgba(196,123,42,0.12)' }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>

            <div className="text-[0.6rem] font-semibold text-[#C47B2A] tracking-[0.25em] uppercase mb-2.5">
              {area.label}
            </div>

            <h3
              className="font-serif text-[1.5rem] font-normal text-[#F4ECD8] leading-[1.2] mb-3"
            >
              {area.title}
            </h3>

            <p className="text-[0.8rem] text-[#6B6050] leading-[1.85] mb-5">
              {area.desc}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {area.pills.map((p) => (
                <span
                  key={p}
                  className="text-[0.62rem] font-normal text-[#6B6050] bg-[rgba(196,123,42,0.06)] border border-[rgba(196,123,42,0.14)] px-2.5 py-1 rounded-[20px] tracking-[0.05em]"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
