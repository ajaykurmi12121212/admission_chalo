import { predictors } from "../data";
import { SectionHeader } from "./ui";

export default function PredictorsSection({ onPredictorClick }) {
  return (
    <section className="mb-11">
      <SectionHeader
        title="Smart Predictors"
        subtitle="AI-powered tools se apna future plan karo"
      />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-3.5">
        {predictors.map((p, i) => (
          <div
            key={i}
            className="rounded-2xl p-5 cursor-pointer transition-all duration-200 hover:-translate-y-1"
            style={{
              background: p.bg,
              border: `1.5px solid ${p.border}`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 8px 24px ${p.color}22`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div className="text-3xl mb-2.5">{p.icon}</div>
            <h3 className="font-extrabold text-base text-[#1a3a5c] mb-1.5 m-0">{p.title}</h3>
            <p className="text-[13px] text-slate-500 leading-relaxed mb-4 m-0">{p.desc}</p>
            <button
              onClick={() => onPredictorClick(p.title)}
              className="w-full py-2.5 text-white border-none rounded-lg text-[13px] font-bold cursor-pointer hover:opacity-90 transition-opacity"
              style={{ background: p.color }}
            >
              {p.cta} →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
