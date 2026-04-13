import { useState } from "react";
import Navbar from "../components/Navbar";
import { stats } from "../data";

// Sections
import NewsSection from "../components/NewsSection";
import CoursesSection from "../components/CoursesSection";
import TopCollegesSection from "../components/TopCollegesSection";
import UpcomingExamsSection from "../components/UpcomingExamsSection";
import PredictorsSection from "../components/PredictorsSection";
import CitiesSection from "../components/CitiesSection";
import TrendingSection from "../components/TrendingSection";
import OurProductsSection from "../components/OurProductsSection";
import TestimonialsSection from "../components/TestimonialsSection";

// Modals
import CollegePredictorModal from "../components/modals/CollegePredictorModal";
import CompareModal from "../components/modals/CompareModal";
import CounsellingModal from "../components/modals/CounsellingModal";

const NAV_LINKS = ["Colleges", "Courses", "Exams", "Study Abroad", "News", "Rankings"];

const SEARCH_TAGS = ["IIT JEE", "NEET", "MBA", "B.Tech", "MBBS Delhi", "Law Colleges"];

export default function AdmissionChalo() {
  const [searchType, setSearchType] = useState("colleges");
  const [searchQuery, setSearchQuery] = useState("");
  const [wishlist, setWishlist] = useState([]);

  // Modal state
  const [showPredictor, setShowPredictor] = useState(false);
  const [showCompare, setShowCompare] = useState(false);
  const [showCounselling, setShowCounselling] = useState(false);

  const toggleWishlist = (name) =>
    setWishlist((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );

  /** Maps CTA button titles → correct modal */
  const handlePredictorClick = (title) => {
    if (title === "College Predictor" || title === "Predict My College") {
      setShowPredictor(true);
    } else if (title === "College Compare" || title === "Compare Now") {
      setShowCompare(true);
    } else if (title === "Career Counselling" || title === "Book Session") {
      setShowCounselling(true);
    }
  };

  return (
    <div className="font-[Segoe_UI,sans-serif] bg-slate-100 min-h-screen text-slate-800">
      {/* ── Modals ── */}
      {showPredictor && <CollegePredictorModal onClose={() => setShowPredictor(false)} />}
      {showCompare && <CompareModal onClose={() => setShowCompare(false)} />}
      {showCounselling && <CounsellingModal onClose={() => setShowCounselling(false)} />}

      {/* ── Top alert bar ── */}
      <div className="bg-[#1a3a5c] text-[#94c5f5] text-xs py-1.5">
        <div className="max-w-[1200px] mx-auto px-5 flex justify-between flex-wrap gap-1.5">
          <span>📞 Helpline: 1800-XXX-XXXX (Free Counselling)</span>
          <span>
            📰 JEE Main 2026 Paper 1 ongoing TODAY &nbsp;|&nbsp; NEET 2026 Registration Open
          </span>
        </div>
      </div>

      {/* ── Navbar ── */}
      <Navbar navLinks={NAV_LINKS} wishlist={wishlist} />

      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-[#1a3a5c] via-[#1a73e8] to-[#0891b2] py-14 px-5 text-center relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-16 -right-16 w-72 h-72 bg-white/[0.04] rounded-full pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/[0.03] rounded-full pointer-events-none" />

        <div className="max-w-[800px] mx-auto relative">
          {/* Pill badge */}
          <div className="inline-block bg-white/15 rounded-2xl px-4 py-1 text-[13px] text-blue-200 mb-3.5">
            🎓 India's Largest College Discovery Platform
          </div>

          <h1 className="text-white text-[clamp(24px,4.5vw,42px)] font-extrabold m-0 mb-2.5 leading-tight">
            Sahi College, Sahi Course
            <br />
            <span className="text-blue-300">Aapka Sapna, Humari Zimmedari</span>
          </h1>

          <p className="text-blue-200 text-[15px] mb-7 m-0">
            25,000+ colleges • 1.8 lakh+ courses • Free expert counselling
          </p>

          {/* Search bar */}
          <div className="bg-white rounded-2xl p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.18)] flex items-center max-w-[680px] mx-auto">
            <select
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="border-none border-r border-slate-200 px-3 py-2.5 text-[13px] text-slate-700 bg-transparent cursor-pointer outline-none font-semibold"
            >
              <option value="colleges">Colleges</option>
              <option value="courses">Courses</option>
              <option value="exams">Exams</option>
            </select>
            <input
              type="text"
              placeholder="College, course ya exam search karo..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 border-none px-3.5 py-2.5 text-sm outline-none text-slate-800 bg-transparent"
            />
            <button className="bg-blue-600 text-white border-none rounded-xl px-5 py-2.5 text-sm font-bold cursor-pointer hover:bg-blue-700 transition-colors">
              🔍 Khojo
            </button>
          </div>

          {/* Quick search tags */}
          <div className="mt-3.5 flex gap-2 justify-center flex-wrap">
            {SEARCH_TAGS.map((tag) => (
              <span
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className="bg-white/15 text-blue-100 text-xs px-3 py-1 rounded-full cursor-pointer border border-white/20 hover:bg-white/25 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats band ── */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto grid grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`py-4 text-center ${i < 3 ? "border-r border-slate-200" : ""}`}
            >
              <div className="text-2xl font-extrabold text-blue-600">{s.value}</div>
              <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="max-w-[1200px] mx-auto px-5 py-9">
        <NewsSection />

        <CoursesSection />

        <TopCollegesSection
          wishlist={wishlist}
          onToggleWishlist={toggleWishlist}
          onPredictorOpen={() => setShowPredictor(true)}
        />

        <UpcomingExamsSection />

        <PredictorsSection onPredictorClick={handlePredictorClick} />

        <CitiesSection />

        <TrendingSection />

        <OurProductsSection onProductClick={handlePredictorClick} />

        <TestimonialsSection />

        {/* ── CTA Banner ── */}
        <section className="bg-gradient-to-br from-[#1a3a5c] to-[#1a73e8] rounded-2xl p-10 flex items-center justify-between gap-6 flex-wrap mb-12">
          <div>
            <h2 className="text-white font-extrabold text-2xl m-0 mb-2">
              Free Expert Counselling Lelo! 🎓
            </h2>
            <p className="text-blue-200 text-[15px] m-0">
              Our experts help you choose the right college &amp; course for your career
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={() => setShowCounselling(true)}
              className="bg-white text-[#1a3a5c] border-none rounded-xl px-7 py-3 font-extrabold text-[15px] cursor-pointer hover:bg-blue-50 transition-colors"
            >
              📞 Call Now
            </button>
            <button
              onClick={() => setShowCounselling(true)}
              className="bg-white/15 text-white border-2 border-white/40 rounded-xl px-7 py-3 font-bold text-[15px] cursor-pointer hover:bg-white/25 transition-colors"
            >
              WhatsApp Karo
            </button>
          </div>
        </section>
      </div>

      {/* ── Footer ── */}
      <footer className="bg-[#1a3a5c] text-slate-400 px-5 pt-10 pb-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-8 mb-8">
            {/* Brand */}
            <div>
              <p className="text-white font-extrabold text-lg mb-2 m-0">Admission Chalo</p>
              <p className="text-[13px] leading-relaxed mb-4 m-0">
                India ka sabse trusted education portal. Sahi college dhundhne mein aapki madad karte hain.
              </p>
              <div className="flex gap-2.5">
                {["📘", "📷", "🐦", "▶️"].map((icon, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center cursor-pointer text-[15px] hover:bg-white/20 transition-colors"
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {[
              { title: "Quick Links", links: ["Colleges", "Courses", "Exams", "Scholarships", "Study Abroad"] },
              { title: "Our Tools", links: ["College Compare", "College Reviews", "College Predictor", "Rank Predictor", "Scholarship Finder"] },
              { title: "Popular Streams", links: ["Engineering", "Medical", "MBA", "Law", "Design"] },
              { title: "Help & Support", links: ["About Us", "Contact Us", "Career Counselling", "News & Updates", "Campus Ambassador"] },
            ].map((col, i) => (
              <div key={i}>
                <p className="text-white font-bold text-sm mb-3 m-0">{col.title}</p>
                {col.links.map((link) => (
                  <div key={link} className="mb-2">
                    <a
                      href="#"
                      className="text-slate-400 text-[13px] no-underline hover:text-blue-300 transition-colors"
                    >
                      {link}
                    </a>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="border-t border-[#2d4a6e] pt-5 flex justify-between flex-wrap gap-3 text-[13px]">
            <span>©️ 2026 Admission Chalo. All rights reserved.</span>
            <span>Made with ❤️ for Indian Students</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
