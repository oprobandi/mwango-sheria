/**
 * Coverage.jsx — V1.3 Light Mode
 * Better Unsplash images, white cards, warm section bg.
 */
import SectionTag from '../ui/SectionTag.jsx'

const AREAS = [
  {
    label: 'Corporate Law',
    title: 'Company Formation & Governance',
    desc: 'Registration under the Companies Act 2015, BRS workflows, shareholder agreements, board resolutions, and company secretarial obligations.',
    pills: ['Companies Act 2015', 'BRS / eCitizen', 'Beneficial Ownership', 'CR12 & CR8'],
    /* Nairobi modern office towers */
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=640&auto=format&fit=crop&q=75',
    imgAlt: 'Modern corporate office towers',
  },
  {
    label: 'Tax & Revenue',
    title: 'KRA, VAT & eTIMS Compliance',
    desc: 'Income tax, VAT, withholding tax, turnover tax for SMEs, and mandatory KRA eTIMS integration rules effective January 2026.',
    pills: ['Income Tax Act', 'VAT Act', 'eTIMS', 'Finance Act 2026'],
    /* Accountant reviewing finances */
    img: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=640&auto=format&fit=crop&q=75',
    imgAlt: 'Financial documents and tax compliance',
  },
  {
    label: 'Trade & Customs',
    title: 'Imports, Exports & Cross-Border',
    desc: 'EAC Customs Management Act, HS code classification, PVoC certification, IDF levy, and COMESA/AfCFTA preferential tariff rules.',
    pills: ['EAC CMA', 'COMESA', 'AfCFTA', 'KRA Customs'],
    /* Mombasa port shipping containers */
    img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=640&auto=format&fit=crop&q=75',
    imgAlt: 'Cargo shipping containers at Mombasa port',
  },
  {
    label: 'Employment Law',
    title: 'Labour, NSSF & SHIF',
    desc: 'Employment Act 2007, NSSF Act amendments, SHIF contributions, Housing Levy, WIBA, and county-specific labour compliance obligations.',
    pills: ['Employment Act', 'NSSF Act', 'SHIF', 'Housing Levy'],
    /* African business team in meeting */
    img: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=640&auto=format&fit=crop&q=75',
    imgAlt: 'Business professionals in a Kenya office meeting',
  },
  {
    label: 'Data & Tech Law',
    title: 'Data Protection & ODPC',
    desc: 'Kenya Data Protection Act 2019, ODPC registration obligations, data processor agreements, and cross-border data transfer rules.',
    pills: ['Data Protection Act', 'ODPC', 'Privacy Policy', 'DPA Compliance'],
    /* Tech / digital data */
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=640&auto=format&fit=crop&q=75',
    imgAlt: 'Digital technology and data security',
  },
  {
    label: 'Environment & County',
    title: 'NEMA, Permits & County Law',
    desc: 'Environmental Impact Assessments, NEMA licences, Unified Single Business Permits across all 47 counties, and sector-specific approvals.',
    pills: ['NEMA', 'County Permits', 'EIA', 'KEBS Standards'],
    /* Kenya savanna / green landscape */
    img: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=640&auto=format&fit=crop&q=75',
    imgAlt: 'Kenya natural landscape and environment',
  },
]

export default function Coverage() {
  return (
    <section id="coverage" className="section-pad" style={{ background: '#EFE9DE' }}>
      <SectionTag>Legal Coverage</SectionTag>
      <h2 className="section-heading gs-reveal">
        Every area of Kenyan<br />business law, <em>covered</em>.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-14">
        {AREAS.map((area, i) => (
          <div
            key={area.label}
            className="coverage-card relative overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1 flex flex-col bg-white shadow-sm hover:shadow-md"
            style={{ border: '1px solid rgba(180,110,20,0.12)' }}
          >
            {/* Image */}
            <div className="img-card h-44 flex-shrink-0">
              <img src={area.img} alt={area.imgAlt} loading="lazy" decoding="async" />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1 relative">
              <span
                className="absolute bottom-4 right-5 font-serif text-[3rem] font-light leading-none pointer-events-none select-none"
                style={{ color: 'rgba(180,110,20,0.08)' }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="text-[0.6rem] font-semibold text-[#B86520] tracking-[0.25em] uppercase mb-2">
                {area.label}
              </div>

              <h3 className="font-serif text-[1.25rem] font-normal text-[#1C1207] leading-[1.25] mb-3">
                {area.title}
              </h3>

              <p className="text-[0.8rem] text-[#8A7860] leading-[1.85] mb-5 flex-1">
                {area.desc}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {area.pills.map((p) => (
                  <span
                    key={p}
                    className="text-[0.6rem] font-normal text-[#5C4A30] bg-[rgba(180,110,20,0.06)] border border-[rgba(180,110,20,0.14)] px-2.5 py-1 rounded-full tracking-[0.04em]"
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
