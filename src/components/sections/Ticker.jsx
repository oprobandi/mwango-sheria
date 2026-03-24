/**
 * Ticker.jsx — V1.4
 */
const ITEMS = ['Confusing KRA eTIMS requirements','Costly BRS filing penalties','Unknown import documentation rules','Wrong HS codes causing port delays','Missed NSSF / SHIF deadlines','NEMA & county permit confusion','Beneficial Ownership Registry gaps','EAC & COMESA tariff complexity','Expensive legal retainers for SMEs']
const DOUBLED = [...ITEMS, ...ITEMS]

export default function Ticker() {
  return (
    <div className="relative flex items-center overflow-hidden border-y z-[1]"
      style={{ background: 'var(--ticker-bg)', borderColor: 'var(--accent-border)', height: '48px' }}>
      <div className="absolute left-0 top-0 bottom-0 z-[2] flex items-center px-4 sm:px-6"
        style={{ background: 'linear-gradient(90deg, var(--ticker-fade) 65%, transparent)', minWidth: '110px' }}>
        <span className="text-[0.58rem] font-semibold tracking-[0.22em] uppercase whitespace-nowrap" style={{ color: 'var(--accent)' }}>
          Pain Points
        </span>
      </div>
      <div className="ticker-inner flex items-center gap-0 pl-36 whitespace-nowrap">
        {DOUBLED.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 mr-8 text-[0.75rem] font-light tracking-[0.04em]" style={{ color: 'var(--text-muted)' }}>
            <span className="inline-block w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'var(--accent)' }} aria-hidden="true" />
            {item}
          </span>
        ))}
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-16 pointer-events-none"
        style={{ background: 'linear-gradient(270deg, var(--ticker-fade), transparent)' }} />
    </div>
  )
}
