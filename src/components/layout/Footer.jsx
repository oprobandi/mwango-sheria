/**
 * Footer.jsx
 * Site footer with brand info, platform/resource/company links, and legal row.
 */
import Logo from '../ui/Logo.jsx'

const COLS = [
  {
    title: 'Platform',
    links: [
      'AI Legal Q&A',
      'Compliance Tracker',
      'Trade & Customs',
      'Contract Templates',
      'Duty Calculator',
    ],
  },
  {
    title: 'Resources',
    links: [
      '2026 Finance Act Guide',
      'eTIMS Onboarding',
      'BRS Directives',
      'EAC Trade Guide',
      'Compliance Calendar',
    ],
  },
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Press', 'Contact', 'hello@mwangosheria.co.ke'],
  },
]

export default function Footer() {
  return (
    <footer
      className="bg-[#0C1A0E] border-t border-[rgba(196,123,42,0.12)]"
      style={{ padding: '4rem' }}
    >
      {/* Top grid */}
      <div
        className="grid gap-12 mb-12 pb-12 border-b border-[rgba(196,123,42,0.12)]"
        style={{ gridTemplateColumns: '1.5fr 1fr 1fr 1fr' }}
      >
        {/* Brand */}
        <div>
          <Logo />
          <p className="text-[0.82rem] text-[#6B6050] leading-[1.85] mt-4 max-w-[240px]">
            Kenya's most comprehensive business law and compliance intelligence
            platform. From company registration to cross-border trade.
          </p>
        </div>

        {/* Link cols */}
        {COLS.map((col) => (
          <div key={col.title}>
            <div className="text-[0.62rem] font-semibold text-[#C47B2A] tracking-[0.25em] uppercase mb-5">
              {col.title}
            </div>
            <ul className="list-none space-y-2.5">
              {col.links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-[0.8rem] text-[#6B6050] no-underline transition-colors hover:text-[#F0C070]"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom row */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <span className="text-[0.72rem] text-[#6B6050]">
          © 2026 Mwango Sheria Technologies Ltd. Registered in Nairobi, Kenya.
        </span>
        <div className="flex gap-8">
          {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((t) => (
            <a
              key={t}
              href="#"
              className="text-[0.72rem] text-[#6B6050] no-underline tracking-[0.06em] transition-colors hover:text-[#C47B2A]"
            >
              {t}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
