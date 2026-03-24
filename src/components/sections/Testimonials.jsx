/**
 * Testimonials.jsx — V1.4
 */
import SectionTag from '../ui/SectionTag.jsx'

const TESTIMONIALS = [
  { quote: "I spent three months trying to understand the documents needed to import electronics from China. A platform like this would have solved it in minutes.", author: 'James Mwangi', role: 'Electronics Importer · Nairobi', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&auto=format&fit=crop&q=80' },
  { quote: "As an avocado exporter, understanding EU phytosanitary requirements felt impossible. The cross-border coverage here covers exactly the gaps I struggled with.", author: 'Amina Ochieng', role: 'Agro-Exporter · Kisumu', avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&h=80&auto=format&fit=crop&q=80' },
  { quote: "The KRA eTIMS integration penalties were entirely unknown to me. A compliance tracker with automatic alerts would have saved my business KES 200,000 in fines.", author: 'Peter Kamau', role: 'Retail Business Owner · Mombasa', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&auto=format&fit=crop&q=80' },
]

export default function Testimonials() {
  return (
    <section className="section-pad" style={{ background: 'var(--bg-alt)' }}>
      <div className="max-w-[1440px] mx-auto">
        <SectionTag>Early Voices</SectionTag>
        <h2 className="section-heading gs-reveal">Entrepreneurs who<br /><em>needed</em> this platform.</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mt-14">
          {TESTIMONIALS.map((t) => (
            <div key={t.author} className="gs-reveal ms-card relative p-7 sm:p-8 flex flex-col">
              <span className="absolute top-3 right-5 font-serif text-[4rem] font-light leading-none pointer-events-none select-none"
                style={{ color: 'var(--accent-border)' }} aria-hidden="true">"</span>
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M6 1l1.3 3.9H11L8.1 7.1l1 3.9L6 8.7 2.9 11l1-3.9L1 4.9h3.7z" fill="var(--accent)"/>
                  </svg>
                ))}
              </div>
              <p className="font-serif text-[1.05rem] italic leading-[1.7] mb-6 relative z-[1] flex-1" style={{ color: 'var(--text-body)' }}>
                {t.quote}
              </p>
              <div className="flex items-center gap-3 pt-5 border-t" style={{ borderColor: 'var(--accent-border)' }}>
                <img src={t.avatar} alt={t.author} loading="lazy" decoding="async"
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  style={{ border: '2px solid var(--accent-border)' }} />
                <div>
                  <div className="text-[0.72rem] font-semibold tracking-[0.1em] uppercase" style={{ color: 'var(--accent)' }}>{t.author}</div>
                  <div className="text-[0.72rem] mt-0.5" style={{ color: 'var(--text-muted)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
