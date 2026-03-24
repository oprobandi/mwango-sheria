/**
 * Ticker.jsx  — V1.1
 * Scrolling pain-points strip — responsive, pause on hover.
 */
const ITEMS = [
  'Confusing KRA eTIMS requirements',
  'Costly BRS filing penalties',
  'Unknown import documentation rules',
  'Wrong HS codes causing port delays',
  'Missed NSSF / SHIF deadlines',
  'NEMA & county permit confusion',
  'Beneficial Ownership Registry gaps',
  'EAC & COMESA tariff complexity',
  'Expensive legal retainers for SMEs',
]

const DOUBLED = [...ITEMS, ...ITEMS]

export default function Ticker() {
  return (
    <div
      className="relative flex items-center overflow-hidden border-y border-[rgba(196,123,42,0.12)] z-[1]"
      style={{ background: '#0C1A0E', height: '48px' }}
    >
      {/* Static label */}
      <div
        className="absolute left-0 top-0 bottom-0 z-[2] flex items-center px-4 sm:px-6"
        style={{
          background: 'linear-gradient(90deg, #0C1A0E 60%, transparent)',
          minWidth: '100px',
        }}
      >
        <span
          className="text-[0.58rem] font-semibold tracking-[0.22em] uppercase whitespace-nowrap"
          style={{ color: '#C47B2A' }}
        >
          Pain Points
        </span>
      </div>

      {/* Scrolling track */}
      <div className="ticker-inner flex items-center gap-0 pl-36 whitespace-nowrap">
        {DOUBLED.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 mr-8 text-[0.75rem] font-light tracking-[0.04em]"
            style={{ color: '#6B6050' }}
          >
            <span
              className="inline-block w-1 h-1 rounded-full flex-shrink-0"
              style={{ background: '#C47B2A' }}
              aria-hidden="true"
            />
            {item}
          </span>
        ))}
      </div>

      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-16 pointer-events-none"
        style={{ background: 'linear-gradient(270deg, #0C1A0E, transparent)' }}
      />
    </div>
  )
}
