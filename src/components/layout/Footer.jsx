/**
 * Footer.jsx — V1.3 Light Mode
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
      className="border-t"
      style={{ background: '#EFE9DE', borderColor: 'rgba(180,110,20,0.14)', padding: '4rem 1.25rem 2.5rem' }}
    >
      <div className="max-w-[1400px] mx-auto sm:px-5 lg:px-10">

        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10 pb-10 border-b border-[rgba(180,110,20,0.12)]">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo />
            <p className="text-[0.82rem] text-[#8A7860] leading-[1.85] mt-4 max-w-[260px]">
              Kenya's most comprehensive business law and compliance intelligence
              platform. From company registration to cross-border trade.
            </p>
          </div>

          {/* Link cols */}
          {COLS.map((col) => (
            <div key={col.title}>
              <div className="text-[0.62rem] font-semibold text-[#B86520] tracking-[0.25em] uppercase mb-5">
                {col.title}
              </div>
              <ul className="list-none space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-[0.8rem] text-[#8A7860] no-underline transition-colors hover:text-[#B86520]"
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
          <span className="text-[0.72rem] text-[#8A7860]">
            © 2026 Mwango Sheria Technologies Ltd. Registered in Nairobi, Kenya.
          </span>
          <div className="flex flex-wrap gap-5">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((t) => (
              <a
                key={t}
                href="#"
                className="text-[0.72rem] text-[#8A7860] no-underline tracking-[0.06em] transition-colors hover:text-[#B86520]"
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
