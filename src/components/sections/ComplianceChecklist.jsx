/**
 * ComplianceChecklist.jsx
 * 2026 readiness checklist + company profile card side by side.
 */
import SectionTag from '../ui/SectionTag.jsx'
import CompanyProfileCard from '../ui/CompanyProfileCard.jsx'

const ITEMS = [
  {
    status: 'done',
    name: 'eCitizen Business Registration (BRS)',
    sub: 'Company name, CR12, and all director details linked to your digital profile',
  },
  {
    status: 'done',
    name: 'KRA eTIMS Activation',
    sub: 'Non-eTIMS expenses treated as profit from Jan 2026 — mandatory for all taxable businesses',
  },
  {
    status: 'warn',
    name: 'Annual Returns Filing (BRS)',
    sub: 'Due within 42 days of financial year-end. Late filing incurs KES 5,000/month penalty',
  },
  {
    status: 'done',
    name: 'Beneficial Ownership (BO) Registry',
    sub: 'Updated within 14 days of any shareholder change. Failure risks company strike-off',
  },
  {
    status: 'info',
    name: 'SHIF & NSSF Year-4 Scale-Up',
    sub: 'Revised contribution tiers effective 2026 — payroll systems must be updated accordingly',
  },
  {
    status: 'done',
    name: 'Data Protection (ODPC Registration)',
    sub: 'Mandatory for businesses processing personal data. Penalties up to KES 5M or 1% of annual turnover',
  },
  {
    status: 'info',
    name: 'Unified Single Business Permit (County)',
    sub: 'Annual renewal required per county. Rates vary — Mwango Sheria tracks renewal windows automatically',
  },
]

const CIRCLE = {
  done: { bg: 'rgba(74,222,128,0.12)', color: '#4ade80', border: 'rgba(74,222,128,0.2)', icon: '✓' },
  warn: { bg: 'rgba(251,191,36,0.1)',  color: '#fbbf24', border: 'rgba(251,191,36,0.2)', icon: '!' },
  info: { bg: 'rgba(196,123,42,0.1)',  color: '#C47B2A', border: 'rgba(196,123,42,0.12)', icon: '→' },
}

export default function ComplianceChecklist() {
  return (
    <section id="compliance" style={{ background: '#060C07' }}>
      <SectionTag>2026 Readiness</SectionTag>
      <h2 className="section-heading gs-reveal">
        Are you<br /><em>actually</em> compliant?
      </h2>

      <div
        className="grid gap-24 items-center mt-16"
        style={{ gridTemplateColumns: '1fr 1fr' }}
      >
        {/* Checklist */}
        <div className="flex flex-col gs-reveal">
          {ITEMS.map((item) => {
            const c = CIRCLE[item.status]
            return (
              <div
                key={item.name}
                className="checklist-item flex items-start gap-4 py-5 border-b border-[rgba(196,123,42,0.12)] first:border-t first:border-[rgba(196,123,42,0.12)] cursor-default"
              >
                <span
                  className="w-[22px] h-[22px] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-[0.7rem]"
                  style={{
                    background: c.bg,
                    color: c.color,
                    border: `1px solid ${c.border}`,
                  }}
                >
                  {c.icon}
                </span>
                <div>
                  <div className="text-[0.88rem] font-normal text-[#F4ECD8] mb-0.5">
                    {item.name}
                  </div>
                  <div className="text-[0.75rem] text-[#6B6050]">
                    {item.sub}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Company profile card */}
        <div className="gs-reveal">
          <CompanyProfileCard />
        </div>
      </div>
    </section>
  )
}
