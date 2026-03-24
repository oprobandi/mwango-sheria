/**
 * DashboardCard.jsx — V1.3 Light Mode
 */
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ITEMS = [
  { icon: '🧾', iconBg: 'rgba(22,163,74,0.1)',  name: 'KRA eTIMS Integration',  sub: 'All invoices validated · KRA compliant', status: 'Active',     statusClass: 'status-ok' },
  { icon: '📋', iconBg: 'rgba(217,119,6,0.1)',  name: 'Annual Returns (BRS)',    sub: 'Due in 14 days · File before penalty',   status: 'Action',     statusClass: 'status-warn' },
  { icon: '🛡️', iconBg: 'rgba(37,99,235,0.1)',  name: 'SHIF / NSSF Remittance', sub: 'Auto-scheduled · Next: Mar 28',          status: 'Scheduled',  statusClass: 'status-info' },
  { icon: '🌍', iconBg: 'rgba(184,101,32,0.1)', name: 'Import Duty Calculator',  sub: 'Last run: Electronics from Shenzhen',    status: 'Ready',      statusClass: 'status-ochre' },
]

export default function DashboardCard() {
  const circleRef = useRef(null)
  const cardRef   = useRef(null)

  useEffect(() => {
    if (!circleRef.current || !cardRef.current) return
    ScrollTrigger.create({
      trigger: cardRef.current,
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo(circleRef.current,
          { strokeDasharray: '0 132' },
          { strokeDasharray: '120 132', duration: 1.2, ease: 'power2.out' }
        )
      },
    })
  }, [])

  return (
    <div
      ref={cardRef}
      className="relative bg-white rounded-xl overflow-hidden"
      style={{
        border: '1px solid rgba(180,110,20,0.15)',
        boxShadow: '0 24px 64px rgba(28,18,7,0.12), 0 0 0 1px rgba(180,110,20,0.08)',
      }}
    >
      {/* Topbar */}
      <div
        className="flex items-center justify-between px-5 py-3.5 border-b"
        style={{ borderColor: 'rgba(180,110,20,0.1)', background: 'rgba(239,233,222,0.6)' }}
      >
        <div className="flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
          <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
          <span className="w-2 h-2 rounded-full bg-[#28c840]" />
        </div>
        <span className="text-[0.7rem] font-medium text-[#8A7860] tracking-[0.1em]">
          Compliance Dashboard
        </span>
        <span className="text-[0.58rem] font-semibold px-2 py-0.5 rounded-xl bg-[rgba(22,163,74,0.08)] text-[#16a34a] border border-[rgba(22,163,74,0.2)] tracking-[0.1em] uppercase">
          ● Live
        </span>
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="flex justify-between items-center mb-5">
          <div>
            <div className="font-serif text-lg font-semibold text-[#1C1207]">
              Savannah Ventures Ltd.
            </div>
            <div className="text-[0.62rem] text-[#8A7860] mt-0.5">
              BRS Reg: BN-4921-KE · Nairobi
            </div>
          </div>

          {/* Score ring */}
          <div className="relative w-[52px] h-[52px]">
            <svg width="52" height="52" viewBox="0 0 52 52" style={{ transform: 'rotate(-90deg)' }}>
              <circle cx="26" cy="26" r="21" fill="none" stroke="rgba(180,110,20,0.12)" strokeWidth="4" />
              <circle ref={circleRef} cx="26" cy="26" r="21" fill="none" stroke="#B86520" strokeWidth="4" strokeDasharray="0 132" strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-serif text-base font-bold text-[#B86520] leading-none">91</span>
              <span className="text-[0.45rem] text-[#8A7860] tracking-[0.05em]">SCORE</span>
            </div>
          </div>
        </div>

        {/* Items */}
        <div className="flex flex-col gap-2">
          {ITEMS.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between rounded-lg px-3.5 py-2.5 transition-colors hover:bg-[rgba(180,110,20,0.03)]"
              style={{ background: 'rgba(239,233,222,0.5)', border: '1px solid rgba(180,110,20,0.08)' }}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md flex items-center justify-center text-[0.7rem] flex-shrink-0" style={{ background: item.iconBg }}>
                  {item.icon}
                </div>
                <div>
                  <div className="text-[0.75rem] font-medium text-[#1C1207]">{item.name}</div>
                  <div className="text-[0.6rem] text-[#8A7860] mt-0.5">{item.sub}</div>
                </div>
              </div>
              <span className={`dash-status ${item.statusClass}`}>{item.status}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        className="flex items-center justify-between px-5 py-3 border-t"
        style={{ borderColor: 'rgba(180,110,20,0.1)', background: 'rgba(239,233,222,0.4)' }}
      >
        <span className="text-[0.62rem] text-[#8A7860]">Powered by Mwango Sheria AI · Updated 2026</span>
        <button className="text-[0.62rem] font-semibold text-[#B86520] bg-none border-none cursor-pointer tracking-[0.08em] uppercase">
          View Full Report →
        </button>
      </div>
    </div>
  )
}
