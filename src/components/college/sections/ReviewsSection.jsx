import { Card, SecTitle, Stars, Bar } from "../ui/CollegeUI";

export default function ReviewsSection({ data }) {
  const G = "#6b7280";
  const rv = data.reviews;

  return (
    <Card>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14, flexWrap: "wrap", gap: 8 }}>
        <SecTitle noGap>Student Reviews for {data.shortName}</SecTitle>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 32, fontWeight: 900, color: "#111827" }}>{rv.overall}</span>
          <div><Stars n={rv.overall} /><div style={{ fontSize: 11, color: G }}>{rv.total}+ Reviews</div></div>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 20px", marginBottom: 18 }}>
        {rv.breakdown.map(({ label, val }) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12 }}>
            <span style={{ width: 160, flexShrink: 0 }}>{label}: <strong>{val}/5</strong></span>
            <Bar val={val} />
          </div>
        ))}
      </div>
      {rv.list.map((r, i) => (
        <div key={i} style={{ border: "1px solid #f3f4f6", borderRadius: 8, padding: 14, marginBottom: 10 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, flexWrap: "wrap", gap: 4 }}>
            <div>
              <strong style={{ fontSize: 13, color: "#111827" }}>{r.name}</strong>
              <span style={{ fontSize: 11, color: G, marginLeft: 8 }}>Batch {r.batch} · {r.course}</span>
            </div>
            <Stars n={r.rating} />
          </div>
          <p style={{ fontSize: 13, color: "#374151", margin: 0, lineHeight: 1.75 }}>{r.text}</p>
        </div>
      ))}
    </Card>
  );
}
