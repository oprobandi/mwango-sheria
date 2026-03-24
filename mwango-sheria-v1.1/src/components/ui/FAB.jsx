/**
 * FAB.jsx
 * Floating Action Button — "Chat with an Advocate"
 * Expands label on hover via CSS transition.
 */
export default function FAB() {
  return (
    <button
      className="fab fixed bottom-8 right-8 z-[200] flex items-center overflow-hidden bg-[#C47B2A] rounded-full shadow-[0_8px_30px_rgba(196,123,42,0.4)] border-none cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(196,123,42,0.5)]"
      aria-label="Chat with an Advocate"
    >
      <div className="w-12 h-12 flex items-center justify-center text-lg flex-shrink-0">
        ⚖️
      </div>
      <span className="fab-label">Chat with an Advocate</span>
    </button>
  )
}
