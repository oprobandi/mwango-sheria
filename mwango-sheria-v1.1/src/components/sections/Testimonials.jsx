/**
 * Testimonials.jsx  — V1.1
 * 3-card testimonial grid with Unsplash avatar photos.
 * Grid: 3-col desktop → 1-col mobile (horizontal scroll option on tablet).
 */
import SectionTag from '../ui/SectionTag.jsx'

const TESTIMONIALS = [
  {
    quote:  "I spent three months trying to understand the documents needed to import electronics from China. A platform like this would have solved it in minutes.",
    author: 'James Mwangi',
    role:   'Electronics Importer · Nairobi',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&auto=format&fit=crop&q=80',
  },
  {
    quote:  "As an avocado exporter, understanding EU phytosanitary requirements felt impossible. The cross-border coverage here covers exactly the gaps I struggled with.",
    author: 'Amina Ochieng',
    role:   'Agro-Exporter · Kisumu',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&h=80&auto=format&fit=crop&q=80',
  },
  {
    quote:  "The KRA eTIMS integration penalties were entirely unknown to me. A compliance tracker with automatic alerts would have saved my business KES 200,000 in fines.",
    author: 'Peter Kamau',
    role:   'Retail Business Owner · Mombasa',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&auto=format&fit=crop&q=80',
  },
]

export default function Testimonials() {
  return (
    <section className="section-pad" style={{ background: '#0C1A0E' }}>
      <SectionTag>Early Voices</SectionTag>
      <h2 className="section-heading gs-reveal">
        Entrepreneurs who<br /><em>needed</em> this platform.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.author}
            className="gs-reveal relative border border-[rgba(196,123,42,0.12)] rounded-[3px] p-8 transition-all duration-300 hover:border-[rgba(196,123,42,0.35)] hover:-translate-y-[3px] flex flex-col"
            style={{ background: '#172419' }}
          >
            {/* Decorative quotemark */}
            <span
              className="absolute top-2 right-4 font-serif text-[5rem] font-light leading-none pointer-events-none select-none"
              style={{ color: 'rgba(196,123,42,0.1)' }}
              aria-hidden="true"
            >
              "
            </span>

            {/* Stars */}
            <div className="flex gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#C47B2A" aria-hidden="true">
                  <path d="M6 1l1.3 3.9H11L8.1 7.1l1 3.9L6 8.7 2.9 11l1-3.9L1 4.9h3.7z"/>
                </svg>
              ))}
            </div>

            <p className="font-serif text-[1.05rem] italic text-[#B8A880] leading-[1.7] mb-6 relative z-[1] flex-1">
              {t.quote}
            </p>

            {/* Author row with avatar */}
            <div className="flex items-center gap-3 pt-5 border-t border-[rgba(196,123,42,0.12)]">
              <img
                src={t.avatar}
                alt={t.author}
                loading="lazy"
                decoding="async"
                className="w-10 h-10 rounded-full object-cover flex-shrink-0 border border-[rgba(196,123,42,0.25)]"
              />
              <div>
                <div className="text-[0.72rem] font-semibold text-[#C47B2A] tracking-[0.1em] uppercase">
                  {t.author}
                </div>
                <div className="text-[0.72rem] text-[#6B6050] mt-0.5">
                  {t.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
