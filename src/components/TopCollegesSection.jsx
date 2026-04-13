import { topColleges, streamBadgeColors } from "../data";
import { SectionHeader, StarRating } from "./ui";

export default function TopCollegesSection({ wishlist, onToggleWishlist, onPredictorOpen }) {
  return (
    <section className="mb-11">
      <SectionHeader
        title="Top Colleges 2026"
        subtitle="India ke best colleges ki jankari"
        link="Sab Colleges Dekho"
      />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-4">
        {topColleges.map((col, i) => {
          const sc = streamBadgeColors[col.type] || { bg: "bg-slate-100", text: "text-slate-600" };
          const saved = wishlist.includes(col.name);

          return (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-2xl p-5 cursor-pointer relative hover:border-blue-500 hover:shadow-[0_6px_24px_rgba(26,115,232,0.1)] transition-all duration-200"
            >
              {/* Wishlist button */}
              <button
                onClick={() => onToggleWishlist(col.name)}
                className="absolute top-3.5 right-3.5 bg-transparent border-none cursor-pointer text-xl leading-none"
              >
                {saved ? "❤️" : "🤍"}
              </button>

              {/* College header */}
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1a3a5c] to-[#1a73e8] flex items-center justify-center text-white font-extrabold text-lg">
                    {col.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-[15px] text-slate-800 m-0">{col.name}</p>
                    <p className="text-xs text-slate-500 mt-0.5 m-0">📍 {col.location}</p>
                  </div>
                </div>
                <span className="bg-orange-50 text-orange-700 text-[11px] font-bold px-2 py-0.5 rounded-md border border-orange-200 mr-7">
                  {col.badge}
                </span>
              </div>

              {/* Badges */}
              <div className="flex gap-2 flex-wrap mb-3">
                <span className={`${sc.bg} ${sc.text} text-xs px-2.5 py-0.5 rounded-full font-semibold`}>
                  {col.type}
                </span>
                <span className="bg-green-50 text-green-800 text-xs px-2.5 py-0.5 rounded-full font-semibold">
                  {col.rank}
                </span>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center pt-3 border-t border-slate-100">
                <div>
                  <p className="text-[11px] text-slate-400 m-0">Fees (Approx.)</p>
                  <p className="font-bold text-blue-600 text-[15px] m-0">{col.fees}</p>
                </div>
                <StarRating rating={col.rating} />
              </div>

              {/* Action buttons */}
              <div className="flex gap-2 mt-3">
                <button
                  onClick={onPredictorOpen}
                  className="flex-1 py-2 bg-blue-50 text-blue-600 border border-blue-200 rounded-lg font-bold text-xs cursor-pointer hover:bg-blue-100 transition-colors"
                >
                  Check Chances
                </button>
                <button className="flex-1 py-2 bg-blue-600 text-white border-none rounded-lg font-bold text-xs cursor-pointer hover:bg-blue-700 transition-colors">
                  Enquire →
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
