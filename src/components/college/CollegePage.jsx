import { useState, useEffect } from "react";
import OverviewSection   from "./sections/OverviewSection";
import CoursesSection    from "./sections/CoursesSection";
import FeesSection       from "./sections/FeesSection";
import CutoffSection     from "./sections/CutoffSection";
import AdmissionsSection from "./sections/AdmissionsSection";
import PlacementsSection from "./sections/PlacementsSection";
import ReviewsSection    from "./sections/ReviewsSection";
import FacilitiesSection from "./sections/FacilitiesSection";
import ClubsSection      from "./sections/ClubsSection";

const TABS = ["Overview", "Courses", "Fees", "Cut-offs", "Admissions", "Placements", "Reviews", "Facilities", "Student Clubs"];

const SIDEBAR_COLLEGES = [
  { name: "Galgotias University", desc: "Top-ranked private university in UP. Highest CTC: 1.5 CR", color: "#d90429" },
  { name: "Sharda University", desc: "Globally recognized. NAAC A+ Accredited. Avg CTC 6.5 LPA", color: "#2563eb" },
  { name: "NIET Noida", desc: "Top engineering college. Highest CTC: 58 LPA", color: "#7c3aed" },
];

export default function CollegePage({ data }) {
  const [activeTab, setActiveTab] = useState("Overview");
  const [showModal, setShowModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const P = data.colors?.primary || "#004aad";
  const O = data.colors?.accent  || "#f37021";
  const G = "#6b7280";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 5);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "Overview":      return <OverviewSection   data={data} />;
      case "Courses":       return <CoursesSection    data={data} />;
      case "Fees":          return <FeesSection        data={data} />;
      case "Cut-offs":      return <CutoffSection      data={data} />;
      case "Admissions":    return <AdmissionsSection  data={data} />;
      case "Placements":    return <PlacementsSection  data={data} />;
      case "Reviews":       return <ReviewsSection     data={data} />;
      case "Facilities":    return <FacilitiesSection  data={data} />;
      case "Student Clubs": return <ClubsSection       data={data} />;
      default: return (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 40, textAlign: "center", color: G }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>🏗️</div>
          <div style={{ fontWeight: 700, color: "#111827", fontSize: 16 }}>{activeTab} — Coming Soon</div>
        </div>
      );
    }
  };

  return (
    <div style={{ background: "#f3f4f6", minHeight: "100vh", fontFamily: "'Segoe UI',-apple-system,sans-serif", color: "#111827" }}>

      {/* STICKY HEADER */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, background: "#fff", boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.1)" : "0 1px 4px rgba(0,0,0,0.06)" }}>
        {/* College banner */}
        <div style={{ padding: "10px 28px", display: "flex", alignItems: "center", gap: 12, borderBottom: "1px solid #e5e7eb", flexWrap: "wrap" }}>
          <div style={{ width: 42, height: 42, borderRadius: "50%", background: P, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "2px solid #fff", boxShadow: "0 0 5px rgba(0,0,0,0.2)" }}>
            <span style={{ fontSize: 11, fontWeight: 900, color: "#fff" }}>{data.code}</span>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: "#111827" }}>{data.name} - Admission 2026, Cutoff, Courses, Fees, Placements</div>
            <div style={{ fontSize: 11, color: G, marginTop: 1 }}>
              📍 {data.location} &nbsp;·&nbsp;
              <span style={{ color: "#f59e0b" }}>{"★".repeat(Math.round(data.rating))}</span>&nbsp;
              <strong>{data.rating}</strong>/5 ({data.totalReviews}+ Reviews) &nbsp;·&nbsp;
              {data.type} &nbsp;·&nbsp; NIRF {data.nirf}
            </div>
          </div>
          <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
            <button onClick={() => setShowModal(true)} style={{ background: O, color: "#fff", border: "none", borderRadius: 6, padding: "8px 16px", fontWeight: 700, fontSize: 12, cursor: "pointer" }}>Apply Now</button>
            <button style={{ background: "none", color: P, border: `1.5px solid ${P}`, borderRadius: 6, padding: "7px 14px", fontWeight: 600, fontSize: 12, cursor: "pointer" }}>Compare</button>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", overflowX: "auto", background: "#fff", borderBottom: "2px solid #e5e7eb", padding: "0 24px" }}>
          {TABS.map(t => (
            <button key={t} onClick={() => setActiveTab(t)} style={{
              background: "none", border: "none", padding: "10px 15px", fontSize: 13, cursor: "pointer", whiteSpace: "nowrap",
              fontWeight: t === activeTab ? 700 : 400,
              color: t === activeTab ? P : G,
              borderBottom: t === activeTab ? `2.5px solid ${P}` : "2.5px solid transparent",
              marginBottom: -2,
            }}>{t}</button>
          ))}
        </div>
      </div>

      <div style={{ height: 104 }} />

      {/* BODY */}
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "18px 20px 50px", display: "flex", gap: 20, alignItems: "flex-start" }}>

        {/* MAIN */}
        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 12, color: G, display: "flex", alignItems: "center", gap: 5 }}>
            🕐 Updated on <strong>Apr 13 2026, 09:30 AM IST</strong>
          </div>
          {renderContent()}
        </div>

        {/* SIDEBAR */}
        <div style={{ width: 292, flexShrink: 0, display: "flex", flexDirection: "column", gap: 16, position: "sticky", top: 120 }}>
          {/* Nearby colleges */}
          <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 16, boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
            <div style={{ fontWeight: 700, fontSize: 14, color: "#111827", marginBottom: 14, textAlign: "center" }}>Admissions Open (Nearby Colleges)</div>
            {SIDEBAR_COLLEGES.map((c, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "10px 0", borderBottom: i < 2 ? "1px solid #f3f4f6" : "none" }}>
                <div style={{ width: 34, height: 34, borderRadius: "50%", background: c.color, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: "#fff", fontSize: 12, fontWeight: 800 }}>{c.name[0]}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 12, color: "#111827" }}>{c.name}</div>
                  <div style={{ fontSize: 11, color: G, marginTop: 2, lineHeight: 1.4 }}>{c.desc}</div>
                </div>
                <button style={{ background: O, color: "#fff", border: "none", borderRadius: 5, padding: "5px 9px", fontSize: 11, fontWeight: 700, cursor: "pointer", flexShrink: 0 }}>Apply</button>
              </div>
            ))}
          </div>

          {/* Enquire form */}
          <div style={{ background: "linear-gradient(135deg,#1a1a2e,#0f3460)", color: "#fff", borderRadius: 10, padding: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 4 }}>Interested in {data.shortName}?</div>
            <div style={{ fontSize: 11, color: "#94a3b8", marginBottom: 14 }}>Get updates on Eligibility, Admission & Fees</div>
            {["Your Name", "Mobile Number", "Email Address"].map(pl => (
              <input key={pl} placeholder={pl} style={{ display: "block", width: "100%", boxSizing: "border-box", marginBottom: 8, padding: "8px 10px", borderRadius: 6, border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.08)", color: "#fff", fontSize: 12 }} />
            ))}
            <button onClick={() => setShowModal(true)} style={{ width: "100%", background: O, color: "#fff", border: "none", borderRadius: 7, padding: 9, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>Enquire Now</button>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ background: "#1a1a2e", color: "#94a3b8", textAlign: "center", padding: 14, fontSize: 12 }}>
        © 2026 {data.shortName} College Profile · Data source: Official Website & NIRF 2025
      </div>

      {/* MODAL */}
      {showModal && (
        <div onClick={() => setShowModal(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 2000, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
          <div onClick={e => e.stopPropagation()} style={{ background: "#fff", borderRadius: 14, padding: 28, width: 380, maxWidth: "100%" }}>
            <h3 style={{ margin: "0 0 6px", fontSize: 17, fontWeight: 800 }}>Enquire About {data.shortName}</h3>
            <p style={{ fontSize: 12, color: G, margin: "0 0 18px" }}>Get admission details, brochure & expert guidance — free</p>
            {["Full Name", "Mobile Number", "Email Address", "Preferred Course"].map(pl => (
              <input key={pl} placeholder={pl} style={{ display: "block", width: "100%", boxSizing: "border-box", marginBottom: 10, padding: "10px 12px", borderRadius: 8, border: "1px solid #d1d5db", fontSize: 13 }} />
            ))}
            <button style={{ width: "100%", background: O, color: "#fff", border: "none", borderRadius: 8, padding: 11, fontWeight: 700, fontSize: 14, cursor: "pointer" }}>Submit Enquiry</button>
            <button onClick={() => setShowModal(false)} style={{ width: "100%", background: "none", border: "none", color: G, marginTop: 8, cursor: "pointer", fontSize: 12 }}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
