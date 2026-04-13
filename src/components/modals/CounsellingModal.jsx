import { useState } from "react";

const INITIAL_FORM = { name: "", phone: "", stream: "", exam: "", score: "" };

export default function CounsellingModal({ onClose }) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = () => {
    if (!form.name || !form.phone) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 bg-black/55 z-[1000] flex items-center justify-center p-5">
      <div className="bg-white rounded-2xl w-full max-w-[460px] shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
        {/* Gradient header */}
        <div className="bg-gradient-to-br from-[#1a3a5c] to-[#1a73e8] rounded-t-2xl p-6 text-center">
          <div className="text-[36px] mb-2">🎓</div>
          <h3 className="m-0 font-extrabold text-xl text-white">Free Expert Counselling</h3>
          <p className="m-0 mt-1.5 text-sm text-blue-200">India ke top counsellors se seedha baat karo</p>
        </div>

        <div className="p-6">
          {submitted ? (
            /* Success state */
            <div className="text-center py-5">
              <div className="text-5xl mb-3">✅</div>
              <h4 className="font-extrabold text-[#1a3a5c] m-0 mb-2">Request Submitted!</h4>
              <p className="text-slate-500 text-sm m-0 mb-5">
                Hamare expert <strong>{form.phone}</strong> pe 2 ghante mein call karenge.
              </p>
              <button
                onClick={onClose}
                className="bg-blue-600 text-white border-none rounded-xl px-7 py-3 font-bold text-sm cursor-pointer hover:bg-blue-700 transition-colors"
              >
                Got it! 👍
              </button>
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-3.5">
                {/* Name */}
                <div>
                  <label className="text-xs font-bold text-slate-500 block mb-1.5">FULL NAME *</label>
                  <input
                    type="text"
                    placeholder="Apna naam likhein"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm outline-none box-border"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="text-xs font-bold text-slate-500 block mb-1.5">PHONE NUMBER *</label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm outline-none box-border"
                  />
                </div>

                {/* Stream + Exam */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-500 block mb-1.5">STREAM</label>
                    <select
                      value={form.stream}
                      onChange={(e) => update("stream", e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-[13px] outline-none cursor-pointer"
                    >
                      <option value="">Select</option>
                      <option>Engineering</option>
                      <option>Medical</option>
                      <option>MBA</option>
                      <option>Law</option>
                      <option>Commerce</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-500 block mb-1.5">EXAM</label>
                    <select
                      value={form.exam}
                      onChange={(e) => update("exam", e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-[13px] outline-none cursor-pointer"
                    >
                      <option value="">Select</option>
                      <option>JEE Main</option>
                      <option>NEET</option>
                      <option>CAT</option>
                      <option>CLAT</option>
                      <option>CUET</option>
                    </select>
                  </div>
                </div>

                {/* Score */}
                <div>
                  <label className="text-xs font-bold text-slate-500 block mb-1.5">
                    SCORE / RANK (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Rank 5000 or Score 680"
                    value={form.score}
                    onChange={(e) => update("score", e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm outline-none box-border"
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2.5 mt-5">
                <button
                  onClick={onClose}
                  className="flex-1 py-3 rounded-xl border border-slate-200 bg-white text-slate-500 font-semibold text-sm cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="flex-[2] py-3 rounded-xl border-none bg-blue-600 text-white font-extrabold text-sm cursor-pointer hover:bg-blue-700 transition-colors"
                >
                  📞 Book Free Session
                </button>
              </div>
              <p className="text-[11px] text-slate-400 text-center mt-2.5 m-0">
                No spam • 100% free • Expert callback within 2 hours
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
