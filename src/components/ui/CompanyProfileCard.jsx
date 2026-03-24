/**
 * CompanyProfileCard.jsx
 * Compliance section right-panel — shows registration statuses and health score.
 */
const ROWS = [
  { key: 'BRS Registration',      val: 'Active',              dot: '#4ade80' },
  { key: 'KRA PIN Status',        val: 'Compliant',           dot: '#4ade80' },
  { key: 'Tax Compliance Cert.',  val: 'Valid · Exp. Dec 2026', dot: '#4ade80' },
  { key: 'Annual Returns',        val: 'Due in 14 days',      dot: '#fbbf24' },
  { key: 'BO Registry',           val: 'Up to date',          dot: '#4ade80' },
  { key: 'County Permit (NCC)',   val: 'Paid · Expires Dec 31', dot: '#4ade80' },
  { key: 'eTIMS Onboarding',      val: 'Integrated',          dot: '#4ade80' },
  { key: 'ODPC Registration',     val: 'In Progress',         dot: '#60a5fa' },
]

export default function CompanyProfileCard() {
  return (
    <div
      className="bg-[#1C2B1E] border border-[rgba(196,123,42,0.12)] rounded-md overflow-hidden"
      style={{ boxShadow: '0 30px 60px rgba(0,0,0,0.4)' }}
    >
      {/* Header */}
      <div className="flex items-center gap-4 px-6 py-5 border-b border-[rgba(196,123,42,0.12)] bg-black/20">
        <div className="w-[38px] h-[38px] rounded-md bg-[rgba(196,123,42,0.12)] border border-[rgba(196,123,42,0.35)] flex items-center justify-center text-lg">
          🏢
        </div>
        <div>
          <div className="font-serif text-[1.05rem] font-semibold text-[#F4ECD8]">
            Company Profile
          </div>
          <div className="text-[0.68rem] text-[#6B6050] mt-0.5">
            Mwango Sheria Compliance Engine · Live
          </div>
        </div>
      </div>

      {/* Rows */}
      <div className="px-6 py-4">
        {ROWS.map((row) => (
          <div
            key={row.key}
            className="flex justify-between items-center py-3 border-b border-white/[0.04] last:border-none text-[0.78rem]"
          >
            <span className="text-[#6B6050]">{row.key}</span>
            <span className="font-medium text-[#F4ECD8] flex items-center gap-1.5">
              <span
                className="w-[5px] h-[5px] rounded-full flex-shrink-0"
                style={{ background: row.dot }}
              />
              {row.val}
            </span>
          </div>
        ))}

        {/* Health score bar */}
        <div className="mt-5 p-3.5 bg-[rgba(196,123,42,0.07)] border border-[rgba(196,123,42,0.12)] rounded-[4px]">
          <div className="text-[0.62rem] font-semibold text-[#C47B2A] uppercase tracking-[0.15em] mb-1.5">
            Overall Health Score
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-1 h-1 bg-white/[0.06] rounded-sm overflow-hidden">
              <div
                className="h-full rounded-sm"
                style={{
                  width: '91%',
                  background: 'linear-gradient(90deg,#C47B2A,#F0C070)',
                }}
              />
            </div>
            <span className="font-serif text-[1.1rem] font-semibold text-[#F0C070]">
              91%
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
