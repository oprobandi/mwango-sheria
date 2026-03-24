/**
 * site.data.js
 * Central content store for all static text, labels, and structured data
 * used across the landing page. Edit here to update copy without touching JSX.
 */

export const SITE = {
  name:    'Mwango Sheria',
  tagline: "Kenya's Business Law Intelligence Platform",
  email:   'hello@mwangosheria.co.ke',
  company: 'Mwango Sheria Technologies Ltd.',
  year:    '2026',
  location: 'Nairobi, Kenya',
}

export const NAV_LINKS = [
  { label: 'How It Works', href: '#how' },
  { label: 'Features',     href: '#features' },
  { label: 'Coverage',     href: '#coverage' },
  { label: 'Compliance',   href: '#compliance' },
]

export const HERO_STATS = [
  { num: '7.4M+', label: 'SMEs in Kenya' },
  { num: '47',    label: 'Counties Covered' },
  { num: 'EAC+',  label: 'Regional Trade' },
  { num: '2026',  label: 'Regulations Ready' },
]

export const TICKER_ITEMS = [
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

export const HOW_STEPS = [
  {
    num:   '01',
    icon:  '🗣️',
    title: 'Describe Your Situation',
    desc:  "Tell us about your business type, industry, county, and what you're trying to accomplish. Plain English or Kiswahili — no jargon needed.",
  },
  {
    num:   '02',
    icon:  '🤖',
    title: 'AI Surfaces What Applies',
    desc:  "Our engine cross-references Kenya's Companies Act, Employment Act, EAC Customs Law, and 2026 regulatory updates to give you precise, actionable guidance.",
  },
  {
    num:   '03',
    icon:  '📅',
    title: 'Track & Stay Compliant',
    desc:  'Your compliance dashboard tracks obligations, upcoming filings, and deadlines across all relevant bodies — KRA, BRS, NEMA, NHIF, and more.',
  },
  {
    num:   '04',
    icon:  '👨‍⚖️',
    title: 'Escalate When Needed',
    desc:  'Complex matters get routed to vetted Kenyan advocates and licensed clearing agents — with transparent fees and no hidden retainers.',
  },
]

export const FEATURES = [
  {
    icon:  '⚖️',
    title: 'AI Legal Q&A',
    desc:  "Ask any business law question in plain English or Kiswahili. Instant answers drawn from Kenya's Companies Act, Employment Act, Tax Laws, and 2026 Finance Act amendments.",
    tag:   '24/7 Available',
  },
  {
    icon:  '📋',
    title: 'Compliance Checklist',
    desc:  'Dynamic checklist tailored to your specific business type, sector, and county — covering BRS, NEMA permits, eTIMS, Housing Levy, and Beneficial Ownership Registry.',
    tag:   'County-Specific',
  },
  {
    icon:  '🔔',
    title: 'Deadline Tracker',
    desc:  'Never miss an annual return, SHIF/NSSF remittance, or VAT filing. Smart SMS and email alerts keep you ahead of every statutory deadline automatically.',
    tag:   'SMS + Email Alerts',
  },
  {
    icon:  '🚢',
    title: 'Trade & Customs Guide',
    desc:  'Step-by-step guidance on import documentation, HS code classification, PVoC requirements, IDF levy, and EAC/COMESA/AfCFTA preferential tariff eligibility.',
    tag:   'EAC · COMESA · AfCFTA',
  },
  {
    icon:  '📄',
    title: 'Contract Templates',
    desc:  'Advocate-reviewed, Kenya-specific templates for employment contracts, supplier agreements, NDAs, shareholder resolutions, and commercial leases under the Law of Contract Act.',
    tag:   'Advocate-Reviewed',
  },
  {
    icon:  '🧮',
    title: 'Duty Calculator',
    desc:  'Instantly calculate import duties, VAT, excise, KEBS levies, and Railway Development Levy for any HS code — with EAC and COMESA preferential rate scenarios.',
    tag:   'HS Code Lookup',
  },
]

export const COVERAGE_AREAS = [
  {
    label: 'Company Law',
    title: 'Business Registration & Corporate Governance',
    desc:  'From sole proprietorships and partnerships to limited companies and NGOs. Covers BRS incorporation, annual returns, share allotments, and director obligations under the Companies Act 2015.',
    pills: ['BRS / eCitizen', 'CR12 Certificates', 'Share Registers', 'Beneficial Ownership', 'Company Alterations'],
  },
  {
    label: 'Tax & Revenue',
    title: 'KRA Obligations & 2026 Finance Act',
    desc:  'Corporate tax, VAT, PAYE, Withholding Tax, Turnover Tax, Digital Service Tax, and the new eTIMS mandate. Fully updated for Finance Act 2026 and KRA portal changes.',
    pills: ['KRA eTIMS', 'VAT Returns', 'PAYE & NSSF', 'Transfer Pricing', 'Tax Amnesty'],
  },
  {
    label: 'Trade & Customs',
    title: 'Cross-Border Trade & Import/Export',
    desc:  'End-to-end customs compliance: IDF, PVoC, HS codes, port documentation, clearing agent workflows, and preferential tariff eligibility under EAC, COMESA, and AfCFTA frameworks.',
    pills: ['EAC Customs', 'COMESA', 'AfCFTA', 'PVoC / KBS', 'HS Classification'],
  },
  {
    label: 'Employment',
    title: 'Labour Law & HR Compliance',
    desc:  "Kenya's Employment Act, WIBA, OSHA, and the new SHIF/NSSF contribution tiers. Covers contracts, termination procedures, leave entitlements, and dispute resolution.",
    pills: ['Employment Act', 'SHIF 2026', 'NSSF Tiers', 'OSHA', 'WIBA'],
  },
  {
    label: 'Sector Permits',
    title: 'Sector-Specific Licences & County Permits',
    desc:  "Unified Business Permit, food handler certificates, NEMA environmental impact assessments, Kenya Film Classification Board, and county-specific approvals across all 47 counties.",
    pills: ['NEMA Permits', 'County Licences', 'Food Business', 'Health Certificates', 'Fire Safety'],
  },
  {
    label: 'Data & IP',
    title: 'Data Protection & Intellectual Property',
    desc:  "ODPC registration, data audit requirements, Privacy Impact Assessments, Kenya Industrial Property Institute (KIPI) filings, and trademark/patent protections.",
    pills: ['ODPC', 'Privacy Policy', 'KIPI Trademarks', 'Copyright', 'Data Audits'],
  },
]

export const CHECKLIST_ITEMS = [
  {
    status: 'done',
    name:   'eCitizen Business Registration (BRS)',
    sub:    'Company name, CR12, and all director details linked to your digital profile',
  },
  {
    status: 'done',
    name:   'KRA eTIMS Activation',
    sub:    'Non-eTIMS expenses treated as profit from Jan 2026 — mandatory for all taxable businesses',
  },
  {
    status: 'warn',
    name:   'Annual Returns Filing (BRS)',
    sub:    'Due within 42 days of financial year-end. Late filing incurs KES 5,000/month penalty',
  },
  {
    status: 'done',
    name:   'Beneficial Ownership (BO) Registry',
    sub:    'Updated within 14 days of any shareholder change. Failure risks company strike-off',
  },
  {
    status: 'info',
    name:   'SHIF & NSSF Year-4 Scale-Up',
    sub:    'Revised contribution tiers effective 2026 — payroll systems must be updated accordingly',
  },
  {
    status: 'done',
    name:   'Data Protection (ODPC Registration)',
    sub:    'Mandatory for businesses processing personal data. Penalties up to KES 5M or 1% of annual turnover',
  },
  {
    status: 'info',
    name:   'Unified Single Business Permit (County)',
    sub:    'Annual renewal required per county. Rates vary — Mwango Sheria tracks renewal windows automatically',
  },
]

export const TESTIMONIALS = [
  {
    quote:  'I spent three months trying to understand the documents needed to import electronics from China. A platform like this would have solved it in minutes.',
    author: 'James Mwangi',
    role:   'Electronics Importer · Nairobi',
  },
  {
    quote:  'As an avocado exporter, understanding EU phytosanitary requirements felt impossible. The cross-border coverage here covers exactly the gaps I struggled with.',
    author: 'Amina Ochieng',
    role:   'Agro-Exporter · Kisumu',
  },
  {
    quote:  'The KRA eTIMS integration penalties were entirely unknown to me. A compliance tracker with automatic alerts would have saved my business KES 200,000 in fines.',
    author: 'Peter Kamau',
    role:   'Retail Business Owner · Mombasa',
  },
]

export const FOOTER_LINKS = {
  Platform: [
    'AI Legal Q&A',
    'Compliance Tracker',
    'Trade & Customs',
    'Contract Templates',
    'Duty Calculator',
  ],
  Resources: [
    '2026 Finance Act Guide',
    'eTIMS Onboarding',
    'BRS Directives',
    'EAC Trade Guide',
    'Compliance Calendar',
  ],
  Company: [
    'About Us',
    'Careers',
    'Press',
    'Contact',
  ],
}
