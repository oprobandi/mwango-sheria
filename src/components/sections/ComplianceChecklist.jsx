/**
 * ComplianceChecklist.jsx — V1.4
 */
import SectionTag from '../ui/SectionTag.jsx'
import CompanyProfileCard from '../ui/CompanyProfileCard.jsx'

const ITEMS = [
  { status: 'done', name: 'eCitizen Business Registration (BRS)',    sub: 'Company name, CR12, and all director details linked to your digital profile' },
  { status: 'done', name: 'KRA eTIMS Activation',                    sub: 'Non-eTIMS expenses treated as profit from Jan 2026 — mandatory for all taxable businesses' },
  { status: 'warn', name: 'Annual Returns Filing (BRS)',              sub: 'Due within 42 days of financial year-end. Late filing incurs KES 5,000/month penalty' },
  { status: 'done', name: 'Beneficial Ownership (BO) Registry',      sub: 'Updated within 14 days of any shareholder change. Failure risks company strike-off' },
  { status: 'info', name: 'SHIF & NSSF Year-4 Scale-Up',             sub: 'Revised contribution tiers effective 2026 — payroll systems must be updated accordingly' },
  { status: 'done', name: 'Data Protection (ODPC Registration)',     sub: 'Mandatory for businesses processing personal data. Penalties up to KES 5M or 1% of turnover' },
  { status: 'info', name: 'Unified Single Business Permit (County)', sub: 'Annual renewal required per county. Mwango Sheria tracks renewal windows automatically' },
]

const CIRCLE = {
  done: { bg: 'rgba(22,163,74,0.1)',  color: '#16a34a', border: 'rgba(22,163,74,0.2)',   icon: '✓' },
  warn: { bg: 'rgba(217,119,6,0.1)', color: '#d97706', border: 'rgba(217,119,6,0.25)',   icon: '!' },
  info: { bg: 'rgba(96,155,230,0.1)', color: '#2563eb', border: 'rgba(96,155,230,0.25)', icon: '→' },
}

export default function ComplianceChecklist() {
  return (
    <section id="compliance" className="section-pad" style={{ background: 'var(--bg-page)' }}>
      <div className="max-w-[1440px] mx-auto">
        <SectionTag>2026 Readiness</SectionTag>
        <h2 className="section-heading gs-reveal">Are you<br /><em>actually</em> compliant?</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mt-14">
          {/* Checklist */}
          <div className="ms-card p-6 sm:p-8">
            {ITEMS.map((item) => {
              const c = CIRCLE[item.status]
              return (
                <div key={item.name} className="checklist-item flex items-start gap-4 py-4 border-b last:border-b-0"
                  style={{ borderColor: 'var(--accent-border)' }}>
                  <span className="w-[22px] h-[22px] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-[0.7rem] font-bold"
                    style={{ background: c.bg, color: c.color, border: `1px solid ${c.border}` }}>
                    {c.icon}
                  </span>
                  <div>
                    <div className="text-[0.88rem] font-medium mb-0.5 leading-snug" style={{ color: 'var(--text-h)' }}>{item.name}</div>
                    <div className="text-[0.75rem] leading-snug" style={{ color: 'var(--text-muted)' }}>{item.sub}</div>
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
      </div>
    </section>
  )
}
