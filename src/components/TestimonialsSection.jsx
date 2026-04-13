import { testimonials } from "../data";
import { SectionHeader } from "./ui";

export default function TestimonialsSection() {
  return (
    <section className="mb-11">
      <SectionHeader
        title="Students Ki Kahaniyan"
        subtitle="Unhe kya mila Admission Chalo se"
      />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-400 hover:shadow-[0_6px_24px_rgba(26,115,232,0.08)] transition-all duration-200"
          >
            <div className="text-amber-400 text-base mb-3">★★★★★</div>
            <p className="text-sm text-slate-600 leading-relaxed mb-4 italic m-0">"{t.text}"</p>
            <div className="flex items-center gap-2.5 pt-3.5 border-t border-slate-100">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-sm flex-shrink-0"
                style={{ background: t.color + "20", color: t.color }}
              >
                {t.avatar}
              </div>
              <div>
                <p className="font-bold text-sm text-slate-800 m-0">{t.name}</p>
                <p className="text-[11px] text-slate-500 m-0">{t.college}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
