import { Card, SecTitle } from "../ui/CollegeUI";

export default function ClubsSection({ data }) {
  const P = data.colors?.primary || "#004aad";

  return (
    <Card>
      <SecTitle>Student Clubs at {data.shortName}</SecTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 12 }}>
        {data.clubs.map((a, i) => (
          <div key={i} style={{ border: "1px solid #e5e7eb", borderRadius: 10, padding: "14px 16px", display: "flex", gap: 12, alignItems: "center" }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", background: `hsl(${i * 60},70%,90%)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{a.emoji}</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 13, color: "#111827" }}>{a.name}</div>
              <div style={{ fontSize: 12, color: P, marginTop: 2, fontWeight: 600 }}>{a.role}</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
