import { courses } from "../data";
import { SectionHeader } from "./ui";

export default function CoursesSection() {
  return (
    <section className="mb-11">
      <SectionHeader
        title="Stream ke hisaab se Dhundho"
        subtitle="Apna course select karo"
        link="Sab Courses"
      />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-2.5">
        {courses.map((c, i) => (
          <div
            key={i}
            className="bg-white border border-slate-200 rounded-xl px-3.5 py-4 cursor-pointer flex items-center gap-3 hover:border-blue-500 hover:shadow-[0_4px_16px_rgba(26,115,232,0.1)] hover:-translate-y-0.5 transition-all duration-200"
          >
            <span className="text-[26px]">{c.icon}</span>
            <div>
              <p className="font-bold text-[13px] text-slate-800 m-0">{c.name}</p>
              <p className="text-[11px] text-slate-500 mt-0.5 m-0">{c.count}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
