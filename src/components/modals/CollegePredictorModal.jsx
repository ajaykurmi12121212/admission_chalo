import { useState } from "react";
import { jeeCollegesData } from "../../data";

export default function CollegePredictorModal({ onClose }) {
  const [exam, setExam] = useState("JEE Main");
  const [rank, setRank] = useState("");
  const [category, setCategory] = useState("General");
  const [results, setResults] = useState(null);

  const predict = () => {
    const r = parseInt(rank);
    if (!r || r <= 0) return;
    const list = jeeCollegesData[category] || jeeCollegesData.General;
    const filtered = list.filter((_, i) => {
      if (r < 500) return true;
      if (r < 5000) return i >= 1;
      if (r < 15000) return i >= 3;
      return i >= 4;
    });
    setResults(filtered);
  };

  return (
    <div className="fixed inset-0 bg-black/55 z-[1000] flex items-center justify-center p-5">
      <div className="bg-white rounded-2xl w-full max-w-[540px] max-h-[90vh] overflow-y-auto shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
        {/* Header */}
        <div className="flex justify-between items-center px-6 pt-5 pb-4 border-b border-slate-100">
          <div>
            <h3 className="m-0 font-extrabold text-lg text-[#1a3a5c]">🏫 College Predictor</h3>
            <p className="m-0 mt-1 text-[13px] text-slate-500">Apna rank daalo, colleges pata karo</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-slate-200 bg-slate-50 cursor-pointer text-base flex items-center justify-center hover:bg-slate-100 transition-colors"
          >
            ×
          </button>
        </div>

        <div className="p-6">
          {/* Form */}
          <div className="grid grid-cols-2 gap-3.5 mb-3.5">
            <div>
              <label className="text-xs font-bold text-slate-500 block mb-1.5">EXAM</label>
              <select
                value={exam}
                onChange={(e) => setExam(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm outline-none cursor-pointer"
              >
                <option>JEE Main</option>
                <option>JEE Advanced</option>
                <option>NEET UG</option>
                <option>CAT</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500 block mb-1.5">CATEGORY</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm outline-none cursor-pointer"
              >
                <option>General</option>
                <option>OBC</option>
                <option>SC</option>
                <option>ST</option>
                <option>EWS</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="text-xs font-bold text-slate-500 block mb-1.5">YOUR RANK / SCORE</label>
            <input
              type="number"
              placeholder="e.g. 5000"
              value={rank}
              onChange={(e) => setRank(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-[15px] outline-none box-border"
            />
          </div>

          <button
            onClick={predict}
            className="w-full py-3 bg-blue-600 text-white border-none rounded-xl font-extrabold text-[15px] cursor-pointer hover:bg-blue-700 transition-colors"
          >
            🔮 Predict My Colleges
          </button>

          {/* Results */}
          {results && (
            <div className="mt-6">
              <p className="text-xs font-bold text-slate-500 mb-3">
                PROBABLE COLLEGES FOR RANK {rank}
              </p>
              {results.map((c, i) => {
                const chanceColor =
                  c.chance > 80
                    ? { bg: "bg-green-50", text: "text-green-800", bar: "bg-green-500" }
                    : c.chance > 60
                    ? { bg: "bg-amber-50", text: "text-amber-800", bar: "bg-amber-400" }
                    : { bg: "bg-red-50", text: "text-red-600", bar: "bg-red-400" };

                return (
                  <div
                    key={i}
                    className="bg-slate-50 rounded-xl px-4 py-3.5 mb-2.5 border border-slate-200"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-sm text-slate-800 m-0">{c.name}</p>
                        <p className="text-xs text-slate-500 mt-0.5 m-0">
                          {c.branch} • Cutoff: {c.cutoff}
                        </p>
                      </div>
                      <span
                        className={`${chanceColor.bg} ${chanceColor.text} text-xs font-extrabold px-2.5 py-1 rounded-full`}
                      >
                        {c.chance}% chance
                      </span>
                    </div>
                    <div className="mt-2.5 bg-slate-200 rounded h-1.5 overflow-hidden">
                      <div
                        className={`${chanceColor.bar} h-full rounded transition-all duration-500`}
                        style={{ width: `${c.chance}%` }}
                      />
                    </div>
                  </div>
                );
              })}
              <p className="text-xs text-slate-400 mt-2 text-center">
                * Predictions based on previous year data. Actual results may vary.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
