import { useRef } from "react";
import { latestNews } from "../data";

export default function NewsSection() {
  const scrollRef = useRef(null);

  const scroll = (dir) =>
    scrollRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });

  return (
    <div className="bg-white rounded-2xl border border-slate-200 mb-11 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <h2 className="text-lg font-extrabold text-[#1a3a5c] m-0">
          Latest News and Notifications
        </h2>
        <a href="#" className="text-blue-600 text-sm font-bold no-underline hover:underline">
          View All
        </a>
      </div>

      {/* Scrollable news strip */}
      <div className="relative flex items-center">
        {/* Left arrow */}
        <button
          onClick={() => scroll(-1)}
          className="absolute left-2.5 z-10 w-8 h-8 rounded-full border border-slate-200 bg-white cursor-pointer text-lg shadow-md flex items-center justify-center hover:bg-slate-50 transition-colors"
        >
          ‹
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto px-12 scroll-smooth"
          style={{ scrollbarWidth: "none", scrollSnapType: "x mandatory" }}
        >
          {latestNews.map((news, i) => (
            <div
              key={news.id}
              className={`flex items-center gap-3 py-3 px-4 min-w-[330px] cursor-pointer hover:bg-slate-50 transition-colors flex-shrink-0 ${
                i < latestNews.length - 1 ? "border-r border-slate-100" : ""
              }`}
              style={{ scrollSnapAlign: "start" }}
            >
              <img
                src={news.img}
                alt=""
                className="w-[72px] h-14 object-cover rounded-lg flex-shrink-0 bg-slate-200"
                onError={(e) => (e.target.style.display = "none")}
              />
              <div>
                <p className="font-semibold text-[13px] text-slate-800 leading-snug m-0">
                  {news.title}
                </p>
                <p className="text-[11px] text-slate-400 mt-1 m-0">{news.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scroll(1)}
          className="absolute right-2.5 z-10 w-8 h-8 rounded-full border border-slate-200 bg-white cursor-pointer text-lg shadow-md flex items-center justify-center hover:bg-slate-50 transition-colors"
        >
          ›
        </button>
      </div>
    </div>
  );
}
