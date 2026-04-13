import { useState } from "react";
import { Card, SecTitle } from "../ui/CollegeUI";

export default function CoursesSection({ data }) {
  const [filter, setFilter] = useState("All");
  const P = data.colors?.primary || "#004aad";
  const O = data.colors?.accent || "#f37021";
  const G = "#6b7280";
  const types = ["All", "B.Tech", "M.Tech", "MBA", "MCA"];
  const filtered = filter === "All" ? data.courses : data.courses.filter(c => c.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <Card>
      <SecTitle>Courses offered by {data.shortName}</SecTitle>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
        {types.map(t => (
          <span key={t} onClick={() => setFilter(t)} style={{ background: filter === t ? P : "#e0eafb", color: filter === t ? "#fff" : P, fontSize: 12, fontWeight: 600, padding: "5px 14px", borderRadius: 20, border: `1px solid ${P}40`, cursor: "pointer" }}>{t}</span>
        ))}
      </div>
      {filtered.map((c, i) => (
        <div key={i} style={{ border: "1px solid #e5e7eb", borderRadius: 8, padding: "13px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 13, color: P }}>{c.name}</div>
            <div style={{ fontSize: 11, color: G, marginTop: 3 }}>{c.mode} &nbsp;|&nbsp; Duration: {c.duration} &nbsp;|&nbsp; Exam: {c.exam}</div>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontWeight: 800, fontSize: 15, color: "#111827" }}>{c.fees}</div>
              <div style={{ fontSize: 10, color: G }}>Total Fees</div>
            </div>
            <button style={{ background: O, color: "#fff", border: "none", borderRadius: 6, padding: "7px 14px", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>Get Info</button>
          </div>
        </div>
      ))}
    </Card>
  );
}
