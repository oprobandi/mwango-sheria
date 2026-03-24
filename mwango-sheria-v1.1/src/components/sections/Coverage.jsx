/**
 * Coverage.jsx  — V1.1
 * Legal coverage areas — 6 cards, each with an Unsplash image header.
 * Grid: 3-col desktop → 2-col tablet → 1-col mobile.
 */
import SectionTag from '../ui/SectionTag.jsx'

const AREAS = [
  {
    label: 'Corporate Law',
    title: 'Company Formation & Governance',
    desc: 'Registration under the Companies Act 2015, BRS workflows, shareholder agreements, board resolutions, and company secretarial obligations.',
    pills: ['Companies Act 2015', 'BRS / eCitizen', 'Beneficial Ownership', 'CR12 & CR8'],
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=640&auto=format&fit=crop&q=70',
    imgAlt: 'Modern office towers in Nairobi',
  },
  {
    label: 'Tax & Revenue',
    title: 'KRA, VAT & eTIMS Compliance',
    desc: 'Income tax, VAT, withholding tax, turnover tax for SMEs, and mandatory KRA eTIMS integration rules effective January 2026.',
    pills: ['Income Tax Act', 'VAT Act', 'eTIMS', 'Finance Act 2026'],
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=640&auto=format&fit=crop&q=70',
    imgAlt: 'Financial documents and accounting',
  },
  {
    label: 'Trade & Customs',
    title: 'Imports, Exports & Cross-Border',
    desc: 'EAC Customs Management Act, HS code classification, PVoC certification, IDF levy, and COMESA/AfCFTA preferential tariff rules.',
    pills: ['EAC CMA', 'COMESA', 'AfCFTA', 'KRA Customs'],
    img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=640&auto=format&fit=crop&q=70',
    imgAlt: 'Shipping containers at Mombasa port',
  },
  {
    label: 'Employment Law',
    title: 'Labour, NSSF & SHIF',
    desc: 'Employment Act 2007, NSSF Act amendments, SHIF contributions, Housing Levy, WIBA, and county-specific labour compliance obligations.',
    pills: ['Employment Act', 'NSSF Act', 'SHIF', 'Housing Levy'],
    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=640&auto=format&fit=crop&q=70',
    imgAlt: 'Business professionals in meeting',
  },
  {
    label: 'Data & Tech Law',
    title: 'Data Protection & ODPC',
    desc: 'Kenya Data Protection Act 2019, ODPC registration obligations, data processor agreements, and cross-border data transfer rules.',
    pills: ['Data Protection Act', 'ODPC', 'Privacy Policy', 'DPA Compliance'],
    img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=640&auto=format&fit=crop&q=70',
    imgAlt: 'Digital data and technology',
  },
  {
    label: 'Environment & County',
    title: 'NEMA, Permits & County Law',
    desc: 'Environmental Impact Assessments, NEMA licences, Unified Single Business Permits across all 47 counties, and sector-specific approvals.',
    pills: ['NEMA', 'County Permits', 'EIA', 'KEBS Standards'],
    img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=640&auto=format&fit=crop&q=70',
    imgAlt: 'Kenya landscape — environment and nature',
  },
]

export default function Coverage() {
  return (
    <section id="coverage" className="section-pad" style={{ background: '#0C1A0E' }}>
      <SectionTag>Legal Coverage</SectionTag>
      <h2 className="section-heading gs-reveal">
        Every area of Kenyan<br />business law, <em>covered</em>.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {AREAS.map((area, i) => (
          <div
            key={area.label}
            className="coverage-card relative overflow-hidden border border-[rgba(196,123,42,0.12)] rounded-[3px] transition-all duration-350 hover:border-[rgba(196,123,42,0.35)] hover:-translate-y-1 flex flex-col"
            style={{ background: '#172419' }}
          >
            {/* Image header */}
            <div className="img-card h-40 flex-shrink-0">
              <img
                src={area.img}
                alt={area.imgAlt}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1 relative">
              {/* Decorative number */}
              <span
                className="absolute bottom-4 right-5 font-serif text-[3rem] font-light leading-none pointer-events-none select-none"
                style={{ color: 'rgba(196,123,42,0.1)' }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="text-[0.6rem] font-semibold text-[#C47B2A] tracking-[0.25em] uppercase mb-2.5">
                {area.label}
              </div>

              <h3 className="font-serif text-[1.35rem] font-normal text-[#F4ECD8] leading-[1.2] mb-3">
                {area.title}
              </h3>

              <p className="text-[0.8rem] text-[#6B6050] leading-[1.85] mb-5 flex-1">
                {area.desc}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {area.pills.map((p) => (
                  <span
                    key={p}
                    className="text-[0.6rem] font-normal text-[#6B6050] bg-[rgba(196,123,42,0.06)] border border-[rgba(196,123,42,0.14)] px-2.5 py-1 rounded-[20px] tracking-[0.04em]"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
