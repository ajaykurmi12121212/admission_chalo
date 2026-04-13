import { upcomingExams, streamBadgeColors } from "../data";
import { SectionHeader } from "./ui";

export default function UpcomingExamsSection() {
  return (
    <section className="mb-11">
      <SectionHeader
        title="Upcoming Entrance Exams"
        subtitle="Important exam dates miss mat karo"
        link="Sab Exams"
      />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-3">
        {upcomingExams.map((ex, i) => {
          const sc = streamBadgeColors[ex.stream] || { bg: "bg-slate-100", text: "text-slate-600" };
          return (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-xl px-4 py-3.5 flex items-center gap-3 cursor-pointer transition-all duration-200 hover:shadow-md group"
              style={{
                "--hover-border": ex.color,
                "--hover-shadow": `${ex.color}22`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = ex.color;
                e.currentTarget.style.boxShadow = `0 4px 16px ${ex.color}22`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg"
                style={{ background: ex.color + "15" }}
              >
                📝
              </div>
              <div className="flex-1">
                <p className="font-bold text-[13px] text-slate-800 m-0">{ex.name}</p>
                <p className="text-[11px] text-slate-500 mt-0.5 m-0">📅 {ex.date}</p>
              </div>
              <span className={`${sc.bg} ${sc.text} text-[11px] px-2 py-0.5 rounded-md font-semibold whitespace-nowrap`}>
                {ex.stream}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
