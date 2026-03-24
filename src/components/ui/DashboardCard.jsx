/**
 * DashboardCard.jsx — V1.4 — CSS var driven
 */
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ITEMS = [
  { icon: '🧾', name: 'KRA eTIMS Integration',  sub: 'All invoices validated · KRA compliant', status: 'Active',    statusClass: 'status-ok' },
  { icon: '📋', name: 'Annual Returns (BRS)',    sub: 'Due in 14 days · File before penalty',   status: 'Action',   statusClass: 'status-warn' },
  { icon: '🛡️', name: 'SHIF / NSSF Remittance', sub: 'Auto-scheduled · Next: Mar 28',          status: 'Scheduled',statusClass: 'status-info' },
  { icon: '🌍', name: 'Import Duty Calculator',  sub: 'Last run: Electronics from Shenzhen',    status: 'Ready',    statusClass: 'status-ochre' },
]

export default function DashboardCard() {
  const circleRef = useRef(null)
  const cardRef   = useRef(null)

  useEffect(() => {
    if (!circleRef.current || !cardRef.current) return
    ScrollTrigger.create({
      trigger: cardRef.current, start: 'top 80%',
      onEnter: () => gsap.fromTo(circleRef.current,
        { strokeDasharray: '0 132' },
        { strokeDasharray: '120 132', duration: 1.2, ease: 'power2.out' }
      ),
    })
  }, [])

  return (
    <div ref={cardRef} className="ms-card overflow-hidden" style={{ borderRadius: '12px' }}>
      {/* Topbar */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b" style={{ borderColor: 'var(--accent-border)', background: 'var(--accent-soft)' }}>
        <div className="flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
          <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
          <span className="w-2 h-2 rounded-full bg-[#28c840]" />
        </div>
        <span className="text-[0.7rem] font-medium tracking-[0.1em]" style={{ color: 'var(--text-muted)' }}>Compliance Dashboard</span>
        <span className="text-[0.58rem] font-semibold px-2 py-0.5 rounded-xl status-ok tracking-[0.1em] uppercase border border-[rgba(22,163,74,0.2)]">● Live</span>
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="flex justify-between items-center mb-5">
          <div>
            <div className="font-serif text-lg font-semibold" style={{ color: 'var(--text-h)' }}>Savannah Ventures Ltd.</div>
            <div className="text-[0.62rem] mt-0.5" style={{ color: 'var(--text-muted)' }}>BRS Reg: BN-4921-KE · Nairobi</div>
          </div>
          <div className="relative w-[52px] h-[52px]">
            <svg width="52" height="52" viewBox="0 0 52 52" style={{ transform: 'rotate(-90deg)' }}>
              <circle cx="26" cy="26" r="21" fill="none" stroke="var(--accent-border)" strokeWidth="4" />
              <circle ref={circleRef} cx="26" cy="26" r="21" fill="none" stroke="var(--accent)" strokeWidth="4" strokeDasharray="0 132" strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-serif text-base font-bold leading-none" style={{ color: 'var(--accent)' }}>91</span>
              <span className="text-[0.45rem] tracking-[0.05em]" style={{ color: 'var(--text-muted)' }}>SCORE</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {ITEMS.map((item) => (
            <div key={item.name} className="flex items-center justify-between rounded-lg px-3.5 py-2.5"
              style={{ background: 'var(--accent-soft)', border: '1px solid var(--accent-border)' }}>
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md flex items-center justify-center text-[0.7rem] flex-shrink-0" style={{ background: 'var(--bg-card-alt)' }}>{item.icon}</div>
                <div>
                  <div className="text-[0.75rem] font-medium" style={{ color: 'var(--text-h)' }}>{item.name}</div>
                  <div className="text-[0.6rem] mt-0.5" style={{ color: 'var(--text-muted)' }}>{item.sub}</div>
                </div>
              </div>
              <span className={`dash-status ${item.statusClass}`}>{item.status}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between px-5 py-3 border-t" style={{ borderColor: 'var(--accent-border)', background: 'var(--accent-soft)' }}>
        <span className="text-[0.62rem]" style={{ color: 'var(--text-muted)' }}>Powered by Mwango Sheria AI · Updated 2026</span>
        <button className="text-[0.62rem] font-semibold bg-none border-none cursor-pointer tracking-[0.08em] uppercase" style={{ color: 'var(--accent)' }}>View Full Report →</button>
      </div>
    </div>
  )
}
