/**
 * Coverage.jsx — V1.4 — CSS var cards
 */
import SectionTag from '../ui/SectionTag.jsx'

const AREAS = [
  { label: 'Corporate Law', title: 'Company Formation & Governance', desc: 'Registration under the Companies Act 2015, BRS workflows, shareholder agreements, board resolutions, and company secretarial obligations.', pills: ['Companies Act 2015', 'BRS / eCitizen', 'Beneficial Ownership', 'CR12 & CR8'], img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=640&auto=format&fit=crop&q=75', imgAlt: 'Modern corporate office towers' },
  { label: 'Tax & Revenue', title: 'KRA, VAT & eTIMS Compliance', desc: 'Income tax, VAT, withholding tax, turnover tax for SMEs, and mandatory KRA eTIMS integration rules effective January 2026.', pills: ['Income Tax Act', 'VAT Act', 'eTIMS', 'Finance Act 2026'], img: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=640&auto=format&fit=crop&q=75', imgAlt: 'Financial documents and tax compliance' },
  { label: 'Trade & Customs', title: 'Imports, Exports & Cross-Border', desc: 'EAC Customs Management Act, HS code classification, PVoC certification, IDF levy, and COMESA/AfCFTA preferential tariff rules.', pills: ['EAC CMA', 'COMESA', 'AfCFTA', 'KRA Customs'], img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=640&auto=format&fit=crop&q=75', imgAlt: 'Cargo shipping containers at Mombasa port' },
  { label: 'Employment Law', title: 'Labour, NSSF & SHIF', desc: 'Employment Act 2007, NSSF Act amendments, SHIF contributions, Housing Levy, WIBA, and county-specific labour compliance obligations.', pills: ['Employment Act', 'NSSF Act', 'SHIF', 'Housing Levy'], img: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=640&auto=format&fit=crop&q=75', imgAlt: 'Business professionals in a Kenya office meeting' },
  { label: 'Data & Tech Law', title: 'Data Protection & ODPC', desc: 'Kenya Data Protection Act 2019, ODPC registration obligations, data processor agreements, and cross-border data transfer rules.', pills: ['Data Protection Act', 'ODPC', 'Privacy Policy', 'DPA Compliance'], img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=640&auto=format&fit=crop&q=75', imgAlt: 'Digital technology and data security' },
  { label: 'Environment & County', title: 'NEMA, Permits & County Law', desc: 'Environmental Impact Assessments, NEMA licences, Unified Single Business Permits across all 47 counties, and sector-specific approvals.', pills: ['NEMA', 'County Permits', 'EIA', 'KEBS Standards'], img: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=640&auto=format&fit=crop&q=75', imgAlt: 'Kenya natural landscape' },
]

export default function Coverage() {
  return (
    <section id="coverage" className="section-pad" style={{ background: 'var(--bg-alt)' }}>
      <div className="max-w-[1440px] mx-auto">
        <SectionTag>Legal Coverage</SectionTag>
        <h2 className="section-heading gs-reveal">Every area of Kenyan<br />business law, <em>covered</em>.</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-14">
          {AREAS.map((area, i) => (
            <div key={area.label}
              className="coverage-card ms-card relative overflow-hidden flex flex-col"
              style={{ borderRadius: '12px' }}>
              <div className="img-card h-44 flex-shrink-0">
                <img src={area.img} alt={area.imgAlt} loading="lazy" decoding="async" />
              </div>
              <div className="p-6 flex flex-col flex-1 relative">
                <span className="absolute bottom-4 right-5 font-serif text-[3rem] font-light leading-none pointer-events-none select-none"
                  style={{ color: 'var(--accent-border)' }} aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="text-[0.6rem] font-semibold tracking-[0.25em] uppercase mb-2" style={{ color: 'var(--accent)' }}>{area.label}</div>
                <h3 className="font-serif text-[1.25rem] font-normal leading-[1.25] mb-3" style={{ color: 'var(--text-h)' }}>{area.title}</h3>
                <p className="text-[0.8rem] leading-[1.85] mb-5 flex-1" style={{ color: 'var(--text-muted)' }}>{area.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {area.pills.map((p) => (
                    <span key={p} className="text-[0.6rem] font-normal px-2.5 py-1 rounded-full tracking-[0.04em]"
                      style={{ color: 'var(--text-body)', background: 'var(--accent-soft)', border: '1px solid var(--accent-border)' }}>
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
