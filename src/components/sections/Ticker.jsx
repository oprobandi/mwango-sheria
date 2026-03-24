/**
 * Ticker.jsx
 * Horizontal pain-points scrolling ticker strip.
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

export default function Ticker() {
  // Duplicate for seamless loop
  const all = [...ITEMS, ...ITEMS]

  return (
    <div
      className="relative flex items-center overflow-hidden border-y border-[rgba(196,123,42,0.12)] z-[1]"
      style={{ background: '#172419', height: '44px' }}
    >
      {/* Fixed label */}
      <div
        className="absolute left-0 top-0 bottom-0 flex items-center z-10 pr-6"
        style={{
          padding: '0 1.5rem',
          background: 'linear-gradient(90deg, #172419 60%, transparent)',
        }}
      >
        <span
          className="text-[0.6rem] font-semibold text-[#C47B2A] tracking-[0.22em] uppercase whitespace-nowrap"
          style={{
            padding: '0.25rem 0.7rem',
            border: '1px solid rgba(196,123,42,0.25)',
            borderRadius: '1px',
          }}
        >
          Pain Points
        </span>
      </div>

      {/* Scrolling content */}
      <div className="ticker-inner flex items-center gap-0 whitespace-nowrap pl-[160px]">
        {all.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 px-5 text-[0.72rem] font-normal text-[#6B6050] tracking-[0.04em]"
          >
            <span
              className="w-1 h-1 rotate-45 inline-block flex-shrink-0"
              style={{ background: '#C47B2A', opacity: 0.5 }}
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
