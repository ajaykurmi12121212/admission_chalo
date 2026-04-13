// ─── StarRating ───────────────────────────────────────────────────────────────
export function StarRating({ rating }) {
  return (
    <span className="text-amber-400 text-sm">
      {"★".repeat(Math.floor(rating))}
      <span className="text-slate-400 text-xs ml-1">{rating}</span>
    </span>
  );
}

// ─── SectionHeader ────────────────────────────────────────────────────────────
export function SectionHeader({ title, subtitle, link }) {
  return (
    <div className="flex items-center justify-between mb-5">
      <div>
        <h2 className="text-xl font-extrabold text-[#1a3a5c] m-0">{title}</h2>
        {subtitle && (
          <p className="text-slate-500 text-sm mt-1 mb-0">{subtitle}</p>
        )}
      </div>
      {link && (
        <a href="#" className="text-blue-600 text-sm font-semibold no-underline hover:underline">
          {link} →
        </a>
      )}
    </div>
  );
}

// ─── Badge ────────────────────────────────────────────────────────────────────
export function Badge({ children, className = "" }) {
  return (
    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${className}`}>
      {children}
    </span>
  );
}
