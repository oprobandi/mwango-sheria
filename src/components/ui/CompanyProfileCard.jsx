/**
 * CompanyProfileCard.jsx — V1.4
 */
const ROWS = [
  { key: 'BRS Registration',      val: 'Active',                dot: '#16a34a' },
  { key: 'KRA PIN Status',        val: 'Compliant',             dot: '#16a34a' },
  { key: 'Tax Compliance Cert.',  val: 'Valid · Exp. Dec 2026', dot: '#16a34a' },
  { key: 'Annual Returns',        val: 'Due in 14 days',        dot: '#d97706' },
  { key: 'BO Registry',           val: 'Up to date',            dot: '#16a34a' },
  { key: 'County Permit (NCC)',   val: 'Paid · Expires Dec 31', dot: '#16a34a' },
  { key: 'eTIMS Onboarding',      val: 'Integrated',            dot: '#16a34a' },
  { key: 'ODPC Registration',     val: 'In Progress',           dot: '#2563eb' },
]

export default function CompanyProfileCard() {
  return (
    <div className="ms-card overflow-hidden" style={{ borderRadius: '12px' }}>
      <div className="flex items-center gap-4 px-6 py-5 border-b" style={{ borderColor: 'var(--accent-border)', background: 'var(--accent-soft)' }}>
        <div className="w-[38px] h-[38px] rounded-lg flex items-center justify-center text-lg" style={{ background: 'var(--bg-card-alt)', border: '1px solid var(--accent-border)' }}>🏢</div>
        <div>
          <div className="font-serif text-[1.05rem] font-semibold" style={{ color: 'var(--text-h)' }}>Company Profile</div>
          <div className="text-[0.68rem] mt-0.5" style={{ color: 'var(--text-muted)' }}>Mwango Sheria Compliance Engine · Live</div>
        </div>
      </div>
      <div className="px-6 py-4">
        {ROWS.map((row) => (
          <div key={row.key} className="flex justify-between items-center py-3 border-b last:border-none text-[0.78rem]" style={{ borderColor: 'var(--accent-border)' }}>
            <span style={{ color: 'var(--text-muted)' }}>{row.key}</span>
            <span className="font-medium flex items-center gap-1.5" style={{ color: 'var(--text-h)' }}>
              <span className="w-[5px] h-[5px] rounded-full flex-shrink-0" style={{ background: row.dot }} />
              {row.val}
            </span>
          </div>
        ))}
        <div className="mt-5 p-3.5 rounded-lg" style={{ background: 'var(--accent-soft)', border: '1px solid var(--accent-border)' }}>
          <div className="text-[0.62rem] font-semibold uppercase tracking-[0.15em] mb-1.5" style={{ color: 'var(--accent)' }}>Overall Health Score</div>
          <div className="flex items-center gap-3">
            <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--accent-border)' }}>
              <div className="h-full rounded-full" style={{ width: '91%', background: 'linear-gradient(90deg, var(--accent), var(--accent-hover))' }} />
            </div>
            <span className="font-serif text-[1.1rem] font-semibold" style={{ color: 'var(--accent)' }}>91%</span>
          </div>
        </div>
      </div>
    </div>
  )
}
