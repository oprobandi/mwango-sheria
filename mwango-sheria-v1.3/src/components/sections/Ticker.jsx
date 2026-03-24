/**
 * Ticker.jsx — V1.3 Light Mode
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
      className="relative flex items-center overflow-hidden border-y z-[1]"
      style={{ background: '#EFE9DE', borderColor: 'rgba(180,110,20,0.14)', height: '48px' }}
    >
      {/* Label */}
      <div
        className="absolute left-0 top-0 bottom-0 z-[2] flex items-center px-4 sm:px-6"
        style={{ background: 'linear-gradient(90deg, #EFE9DE 65%, transparent)', minWidth: '110px' }}
      >
        <span className="text-[0.58rem] font-semibold tracking-[0.22em] uppercase whitespace-nowrap text-[#B86520]">
          Pain Points
        </span>
      </div>

      {/* Scrolling track */}
      <div className="ticker-inner flex items-center gap-0 pl-36 whitespace-nowrap">
        {DOUBLED.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 mr-8 text-[0.75rem] font-light tracking-[0.04em] text-[#8A7860]"
          >
            <span className="inline-block w-1 h-1 rounded-full flex-shrink-0 bg-[#B86520]" aria-hidden="true" />
            {item}
          </span>
        ))}
      </div>

      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-16 pointer-events-none"
        style={{ background: 'linear-gradient(270deg, #EFE9DE, transparent)' }}
      />
    </div>
  )
}
