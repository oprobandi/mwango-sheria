/**
 * Testimonials.jsx
 * 3-card testimonial grid with decorative quote mark.
 */
import SectionTag from '../ui/SectionTag.jsx'

const TESTIMONIALS = [
  {
    quote: "I spent three months trying to understand the documents needed to import electronics from China. A platform like this would have solved it in minutes.",
    author: 'James Mwangi',
    role: 'Electronics Importer · Nairobi',
  },
  {
    quote: "As an avocado exporter, understanding EU phytosanitary requirements felt impossible. The cross-border coverage here covers exactly the gaps I struggled with.",
    author: 'Amina Ochieng',
    role: 'Agro-Exporter · Kisumu',
  },
  {
    quote: "The KRA eTIMS integration penalties were entirely unknown to me. A compliance tracker with automatic alerts would have saved my business KES 200,000 in fines.",
    author: 'Peter Kamau',
    role: 'Retail Business Owner · Mombasa',
  },
]

export default function Testimonials() {
  return (
    <section style={{ background: '#0C1A0E' }}>
      <SectionTag>Early Voices</SectionTag>
      <h2 className="section-heading gs-reveal">
        Entrepreneurs who<br /><em>needed</em> this platform.
      </h2>

      <div
        className="grid gap-6 mt-16"
        style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
      >
        {TESTIMONIALS.map((t) => (
          <div
            key={t.author}
            className="gs-reveal relative border border-[rgba(196,123,42,0.12)] rounded-[3px] p-8 transition-all duration-300 hover:border-[rgba(196,123,42,0.35)] hover:-translate-y-[3px]"
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

            <p
              className="font-serif text-[1.05rem] italic text-[#B8A880] leading-[1.7] mb-6 relative z-[1]"
            >
              {t.quote}
            </p>

            <div className="text-[0.72rem] font-semibold text-[#C47B2A] tracking-[0.1em] uppercase">
              {t.author}
            </div>
            <div className="text-[0.75rem] text-[#6B6050] mt-0.5">
              {t.role}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
