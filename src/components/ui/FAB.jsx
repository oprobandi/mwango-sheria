export default function FAB() {
  return (
    <a href="#waitlist" className="fab fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-[200] flex items-center rounded-full cursor-pointer no-underline touch-manipulation"
      style={{ background: 'var(--accent)', boxShadow: '0 8px 28px rgba(184,101,32,0.35)', padding: '0.85rem' }}
      aria-label="Join the waitlist">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2C5.58 2 2 5.13 2 9c0 1.74.65 3.34 1.73 4.6L2.5 17.5l4.27-1.37A8.16 8.16 0 0010 16c4.42 0 8-3.13 8-7s-3.58-7-8-7z" fill="white"/>
      </svg>
      <span className="fab-label">Chat with us</span>
    </a>
  )
}
