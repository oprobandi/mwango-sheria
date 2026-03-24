/**
 * CompanyProfileCard.jsx — V1.3 Light Mode
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
    <div
      className="bg-white rounded-xl overflow-hidden"
      style={{ border: '1px solid rgba(180,110,20,0.12)', boxShadow: '0 8px 32px rgba(28,18,7,0.08)' }}
    >
      {/* Header */}
      <div
        className="flex items-center gap-4 px-6 py-5 border-b"
        style={{ borderColor: 'rgba(180,110,20,0.1)', background: 'rgba(239,233,222,0.5)' }}
      >
        <div
          className="w-[38px] h-[38px] rounded-lg flex items-center justify-center text-lg"
          style={{ background: 'rgba(180,110,20,0.08)', border: '1px solid rgba(180,110,20,0.2)' }}
        >
          🏢
        </div>
        <div>
          <div className="font-serif text-[1.05rem] font-semibold text-[#1C1207]">
            Company Profile
          </div>
          <div className="text-[0.68rem] text-[#8A7860] mt-0.5">
            Mwango Sheria Compliance Engine · Live
          </div>
        </div>
      </div>

      {/* Rows */}
      <div className="px-6 py-4">
        {ROWS.map((row) => (
          <div
            key={row.key}
            className="flex justify-between items-center py-3 border-b border-[rgba(180,110,20,0.07)] last:border-none text-[0.78rem]"
          >
            <span className="text-[#8A7860]">{row.key}</span>
            <span className="font-medium text-[#1C1207] flex items-center gap-1.5">
              <span className="w-[5px] h-[5px] rounded-full flex-shrink-0" style={{ background: row.dot }} />
              {row.val}
            </span>
          </div>
        ))}

        {/* Health score bar */}
        <div
          className="mt-5 p-3.5 rounded-lg"
          style={{ background: 'rgba(180,110,20,0.06)', border: '1px solid rgba(180,110,20,0.12)' }}
        >
          <div className="text-[0.62rem] font-semibold text-[#B86520] uppercase tracking-[0.15em] mb-1.5">
            Overall Health Score
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-1 h-1.5 bg-[rgba(180,110,20,0.1)] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: '91%', background: 'linear-gradient(90deg,#B86520,#C47B2A)' }}
              />
            </div>
            <span className="font-serif text-[1.1rem] font-semibold text-[#B86520]">91%</span>
          </div>
        </div>
      </div>
    </div>
  )
}
