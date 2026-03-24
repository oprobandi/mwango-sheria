/**
 * Footer.jsx  — V1.1
 * 4-column desktop → 2-column tablet → 1-column mobile.
 */
import Logo from '../ui/Logo.jsx'

const COLS = [
  {
    title: 'Platform',
    links: ['AI Legal Q&A', 'Compliance Tracker', 'Trade & Customs', 'Contract Templates', 'Duty Calculator'],
  },
  {
    title: 'Resources',
    links: ['2026 Finance Act Guide', 'eTIMS Onboarding', 'BRS Directives', 'EAC Trade Guide', 'Compliance Calendar'],
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
      style={{ padding: '4rem 1.25rem' }}
    >
      <div className="max-w-[1400px] mx-auto px-0 sm:px-5 lg:px-10">

        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 pb-12 border-b border-[rgba(196,123,42,0.12)]">

          {/* Brand col — spans 2 on lg */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo />
            <p className="text-[0.82rem] text-[#6B6050] leading-[1.85] mt-4 max-w-[260px]">
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
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <span className="text-[0.72rem] text-[#6B6050]">
            © 2026 Mwango Sheria Technologies Ltd. Registered in Nairobi, Kenya.
          </span>
          <div className="flex flex-wrap gap-5">
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
      </div>
    </footer>
  )
}
