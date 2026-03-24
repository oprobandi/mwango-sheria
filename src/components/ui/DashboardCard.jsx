/**
 * DashboardCard.jsx
 * Hero section compliance dashboard mockup.
 * Includes animated score ring (GSAP ScrollTrigger drives the fill).
 */
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ITEMS = [
  {
    icon: '🧾',
    iconBg: 'rgba(74,222,128,0.1)',
    name: 'KRA eTIMS Integration',
    sub: 'All invoices validated · KRA compliant',
    status: 'Active',
    statusClass: 'status-ok',
  },
  {
    icon: '📋',
    iconBg: 'rgba(251,191,36,0.1)',
    name: 'Annual Returns (BRS)',
    sub: 'Due in 14 days · File before penalty',
    status: 'Action',
    statusClass: 'status-warn',
  },
  {
    icon: '🛡️',
    iconBg: 'rgba(96,165,250,0.1)',
    name: 'SHIF / NSSF Remittance',
    sub: 'Auto-scheduled · Next: Mar 28',
    status: 'Scheduled',
    statusClass: 'status-info',
  },
  {
    icon: '🌍',
    iconBg: 'rgba(196,123,42,0.1)',
    name: 'Import Duty Calculator',
    sub: 'Last run: Electronics from Shenzhen',
    status: 'Ready',
    statusClass: 'status-ochre',
  },
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
        gsap.fromTo(
          circleRef.current,
          { strokeDasharray: '0 132' },
          { strokeDasharray: '120 132', duration: 1.2, ease: 'power2.out' }
        )
      },
    })
  }, [])

  return (
    <div
      ref={cardRef}
      className="relative bg-[#1C2B1E] border border-[rgba(196,123,42,0.12)] rounded-lg overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.5),0_0_0_1px_rgba(196,123,42,0.12)] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#C47B2A] before:to-transparent"
    >
      {/* Topbar */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-[rgba(196,123,42,0.12)] bg-black/20">
        <div className="flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
          <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
          <span className="w-2 h-2 rounded-full bg-[#28c840]" />
        </div>
        <span className="text-[0.7rem] font-medium text-[#6B6050] tracking-[0.1em]">
          Compliance Dashboard
        </span>
        <span className="text-[0.58rem] font-semibold px-2 py-0.5 rounded-xl bg-[rgba(74,222,128,0.1)] text-[#4ade80] border border-[rgba(74,222,128,0.2)] tracking-[0.1em] uppercase">
          ● Live
        </span>
      </div>

      {/* Body */}
      <div className="p-5">
        {/* Header row */}
        <div className="flex justify-between items-center mb-5">
          <div>
            <div className="font-serif text-lg font-semibold text-[#F4ECD8]">
              Savannah Ventures Ltd.
            </div>
            <div className="text-[0.62rem] text-[#6B6050] mt-0.5">
              BRS Reg: BN-4921-KE · Nairobi
            </div>
          </div>

          {/* Score ring */}
          <div className="relative w-[52px] h-[52px]">
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              style={{ transform: 'rotate(-90deg)' }}
            >
              <circle
                cx="26" cy="26" r="21"
                fill="none"
                stroke="rgba(196,123,42,0.15)"
                strokeWidth="4"
              />
              <circle
                ref={circleRef}
                cx="26" cy="26" r="21"
                fill="none"
                stroke="#C47B2A"
                strokeWidth="4"
                strokeDasharray="0 132"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-serif text-base font-bold text-[#F0C070] leading-none">
                91
              </span>
              <span className="text-[0.45rem] text-[#6B6050] tracking-[0.05em]">
                SCORE
              </span>
            </div>
          </div>
        </div>

        {/* Items */}
        <div className="flex flex-col gap-2.5">
          {ITEMS.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between bg-black/20 border border-white/[0.04] rounded-md px-3.5 py-2.5 transition-colors hover:border-[rgba(196,123,42,0.12)]"
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="w-7 h-7 rounded-md flex items-center justify-center text-[0.7rem] flex-shrink-0"
                  style={{ background: item.iconBg }}
                >
                  {item.icon}
                </div>
                <div>
                  <div className="text-[0.75rem] font-medium text-[#F4ECD8]">
                    {item.name}
                  </div>
                  <div className="text-[0.6rem] text-[#6B6050] mt-0.5">
                    {item.sub}
                  </div>
                </div>
              </div>
              <span className={`dash-status ${item.statusClass}`}>{item.status}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-5 py-3 border-t border-[rgba(196,123,42,0.12)] bg-black/15">
        <span className="text-[0.62rem] text-[#6B6050]">
          Powered by Mwango Sheria AI · Updated 2026
        </span>
        <button className="text-[0.62rem] font-semibold text-[#C47B2A] bg-none border-none cursor-pointer tracking-[0.08em] uppercase">
          View Full Report →
        </button>
      </div>
    </div>
  )
}
