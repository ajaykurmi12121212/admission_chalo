import { useState } from "react";
import { compareCollegesData } from "../../data";

const COMPARE_ROWS = [
  { label: "Fees", key: "fees" },
  { label: "Rating", key: "rating" },
  { label: "Avg Placement", key: "placement" },
  { label: "NIRF Rank", key: "nirf" },
  { label: "Intake", key: "intake" },
  { label: "Hostel", key: "hostel" },
  { label: "Research", key: "research" },
  { label: "Accept Rate", key: "acceptRate" },
];

export default function CompareModal({ onClose }) {
  const allColleges = Object.keys(compareCollegesData);
  const [selected, setSelected] = useState(["IIT Delhi", "NIT Trichy"]);

  const updateSelected = (idx, value) => {
    const next = [...selected];
    next[idx] = value;
    setSelected(next);
  };

  return (
    <div className="fixed inset-0 bg-black/55 z-[1000] flex items-center justify-center p-5">
      <div className="bg-white rounded-2xl w-full max-w-[700px] max-h-[90vh] overflow-y-auto shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
        {/* Header */}
        <div className="flex justify-between items-center px-6 pt-5 pb-4 border-b border-slate-100">
          <div>
            <h3 className="m-0 font-extrabold text-lg text-[#1a3a5c]">⚖️ College Compare</h3>
            <p className="m-0 mt-1 text-[13px] text-slate-500">2 colleges choose karo aur compare karo</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-slate-200 bg-slate-50 cursor-pointer text-base flex items-center justify-center hover:bg-slate-100 transition-colors"
          >
            ×
          </button>
        </div>

        <div className="p-6">
          {/* College selectors */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {[0, 1].map((idx) => (
              <div key={idx}>
                <label className="text-xs font-bold text-slate-500 block mb-1.5">
                  COLLEGE {idx + 1}
                </label>
                <select
                  value={selected[idx]}
                  onChange={(e) => updateSelected(idx, e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg border-2 border-blue-600 text-sm outline-none cursor-pointer font-semibold"
                >
                  {allColleges.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <div className="border border-slate-200 rounded-xl overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-[1.2fr_1fr_1fr] bg-slate-50 border-b border-slate-200">
              <div className="px-4 py-3 text-xs font-bold text-slate-500">PARAMETER</div>
              {selected.map((col, i) => (
                <div key={i} className="px-4 py-3 text-[13px] font-extrabold text-[#1a3a5c] border-l border-slate-200">
                  {col}
                </div>
              ))}
            </div>

            {/* Table rows */}
            {COMPARE_ROWS.map((row, ri) => (
              <div
                key={ri}
                className={`grid grid-cols-[1.2fr_1fr_1fr] ${
                  ri < COMPARE_ROWS.length - 1 ? "border-b border-slate-100" : ""
                } ${ri % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}
              >
                <div className="px-4 py-3 text-[13px] text-slate-500 font-semibold">{row.label}</div>
                {selected.map((col, ci) => (
                  <div key={ci} className="px-4 py-3 text-[13px] text-slate-800 font-medium border-l border-slate-100">
                    {compareCollegesData[col]?.[row.key] ?? "—"}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
