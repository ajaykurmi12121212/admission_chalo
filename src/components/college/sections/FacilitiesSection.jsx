import { Card, SecTitle } from "../ui/CollegeUI";

export default function FacilitiesSection({ data }) {
  return (
    <Card>
      <SecTitle>{data.shortName} Campus Facilities</SecTitle>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {data.facilities.map((f, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "10px 14px", background: i % 2 === 0 ? "#f9fafb" : "#fff", borderRadius: 8, border: "1px solid #f3f4f6" }}>
            <span style={{ color: "#16a34a", fontWeight: 800, fontSize: 15, marginTop: 1 }}>✓</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: 13, color: "#111827" }}>{f.name}</div>
              <div style={{ fontSize: 12, color: "#6b7280", marginTop: 2 }}>{f.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
