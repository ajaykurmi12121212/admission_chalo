import { ourProducts } from "../data";
import { SectionHeader } from "./ui";

export default function OurProductsSection({ onProductClick }) {
  return (
    <section className="mb-11">
      <SectionHeader
        title="Hamare Products"
        subtitle="Students ke liye special tools aur services"
      />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
        {ourProducts.map((p, i) => (
          <div
            key={i}
            className="bg-white border border-slate-200 rounded-2xl px-5 py-6 cursor-pointer transition-all duration-200 hover:-translate-y-1"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = p.color;
              e.currentTarget.style.boxShadow = `0 8px 24px ${p.color}22`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            <div
              className="w-13 h-13 rounded-2xl flex items-center justify-center text-[26px] mb-3.5"
              style={{ background: p.bg, width: "52px", height: "52px" }}
            >
              {p.icon}
            </div>
            <h3 className="font-extrabold text-base text-[#1a3a5c] mb-1.5 m-0">{p.title}</h3>
            <p className="text-[13px] text-slate-500 leading-relaxed mb-4 m-0">{p.desc}</p>
            <button
              onClick={() => onProductClick(p.cta)}
              className="bg-transparent border rounded-lg px-4 py-2 text-[13px] font-bold cursor-pointer hover:opacity-80 transition-opacity"
              style={{ color: p.color, borderColor: p.color }}
            >
              {p.cta} →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
