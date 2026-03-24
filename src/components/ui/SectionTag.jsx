/**
 * SectionTag.jsx
 * Small pill label used at the top of each section.
 *
 * Props:
 *   children  {ReactNode}
 *   className {string}    - extra Tailwind classes
 *   centered  {boolean}   - flex justify-center wrapper
 */
export default function SectionTag({ children, className = '', centered = false }) {
  return (
    <div className={centered ? 'flex justify-center mb-4' : ''}>
      <span className={`section-tag gs-reveal ${className}`}>
        {children}
      </span>
    </div>
  )
}
