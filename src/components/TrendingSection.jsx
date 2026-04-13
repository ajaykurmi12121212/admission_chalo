import { useState } from "react";
import { trendingCourses, trendingCertificates, trendingSpecializations, tagColors } from "../data";
import { SectionHeader } from "./ui";

const TABS = [
  { key: "courses", label: "🔥 Trending Courses" },
  { key: "certs", label: "🏅 Top Certificates" },
  { key: "specs", label: "⚡ Trending Specializations" },
];

function TrendingCoursesList() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3">
      {trendingCourses.map((c, i) => (
        <div
          key={i}
          className="bg-white border border-slate-200 rounded-xl px-4 py-4 flex items-center gap-3.5 cursor-pointer hover:border-blue-500 hover:shadow-[0_4px_16px_rgba(26,115,232,0.1)] transition-all duration-200"
        >
          <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-[22px] flex-shrink-0">
            {c.icon}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-1.5">
              <p className="font-bold text-sm text-slate-800 m-0">{c.name}</p>
              {c.hot && (
                <span className="bg-red-50 text-red-600 text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  🔥 HOT
                </span>
              )}
            </div>
            <p className="text-xs text-slate-500 mt-0.5 m-0">
              {c.enrolled} • {c.level}
            </p>
          </div>
          <span className="text-blue-600 text-lg">›</span>
        </div>
      ))}
    </div>
  );
}

function CertificatesList() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-3">
      {trendingCertificates.map((c, i) => (
        <div
          key={i}
          className="bg-white border border-slate-200 rounded-xl p-4 cursor-pointer transition-all duration-200"
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = c.color;
            e.currentTarget.style.boxShadow = `0 4px 16px ${c.color}22`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "";
            e.currentTarget.style.boxShadow = "";
          }}
        >
          <div className="flex items-center gap-2.5 mb-2.5">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-lg"
              style={{ background: c.color + "18" }}
            >
              🏅
            </div>
            <div>
              <p className="font-bold text-sm text-slate-800 m-0">{c.name}</p>
              <p className="text-xs text-slate-500 m-0">by {c.provider}</p>
            </div>
          </div>
          <div className="flex justify-between items-center pt-2.5 border-t border-slate-100">
            <span className="text-xs text-slate-500">⏱ {c.duration}</span>
            <span className="text-amber-400 text-[13px]">★ {c.rating}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function SpecializationsList() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-2.5">
      {trendingSpecializations.map((s, i) => {
        const tc = tagColors[s.tag] || { bg: "bg-slate-100", text: "text-slate-600" };
        return (
          <div
            key={i}
            className="bg-white border border-slate-200 rounded-xl px-3.5 py-4 cursor-pointer flex items-center gap-3 hover:border-blue-500 hover:-translate-y-0.5 transition-all duration-200"
          >
            <span className="text-2xl">{s.icon}</span>
            <div className="flex-1">
              <p className="font-semibold text-[13px] text-slate-800 m-0">{s.name}</p>
              <span className={`${tc.bg} ${tc.text} text-[10px] font-bold px-2 py-0.5 rounded-full mt-1 inline-block`}>
                {s.tag}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function TrendingSection() {
  const [activeTab, setActiveTab] = useState("courses");

  return (
    <section className="mb-11">
      <SectionHeader
        title="Trending in Education"
        subtitle="Sabse zyada search kiye jane wale courses aur specializations"
      />

      {/* Tab buttons */}
      <div className="flex gap-2 mb-5 flex-wrap">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-5 py-2 rounded-full text-[13px] font-semibold cursor-pointer transition-all duration-150 ${
              activeTab === tab.key
                ? "bg-blue-600 text-white border-transparent border"
                : "bg-white text-slate-700 border border-slate-200 hover:border-blue-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "courses" && <TrendingCoursesList />}
      {activeTab === "certs" && <CertificatesList />}
      {activeTab === "specs" && <SpecializationsList />}
    </section>
  );
}
