import { Card, SecTitle } from "../ui/CollegeUI";

export default function PlacementsSection({ data }) {
  const P = data.colors?.primary || "#004aad";
  const G = "#6b7280";
  const pl = data.placements;
  const stats = [
    ["Highest Package", pl.highest],
    ["Average Package", pl.average],
    ["Median Package (UG)", pl.medianUG],
    ["Placement %", pl.percentage],
    ["Companies Visited", pl.companies],
    ["Total Offers", pl.totalOffers],
    ["UG Students Placed", pl.ugPlaced],
  ];

  return (
    <Card>
      <SecTitle>{data.shortName} Placements 2025</SecTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))", gap: 10, marginBottom: 20 }}>
        {stats.map(([k, v], i) => v && (
          <div key={i} style={{ background: "#f9fafb", borderRadius: 8, padding: 12, border: "1px solid #e5e7eb" }}>
            <div style={{ fontSize: 16, fontWeight: 900, color: P }}>{v}</div>
            <div style={{ fontSize: 11, color: G, marginTop: 3 }}>{k}</div>
          </div>
        ))}
      </div>
      {pl.btechWise?.length > 0 && (
        <>
          <div style={{ fontWeight: 700, fontSize: 14, color: "#111827", marginBottom: 10 }}>B.Tech Placements (Branch-wise)</div>
          <div style={{ overflowX: "auto", marginBottom: 20 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#f3f4f6" }}>
                  {["Course", "Avg Package", "Median CTC"].map(h => (
                    <th key={h} style={{ padding: "9px 14px", textAlign: "left", fontWeight: 700, color: "#111827", borderBottom: "2px solid #e5e7eb" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pl.btechWise.map((p, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f9fafb" }}>
                    <td style={{ padding: "9px 14px", color: "#111827", fontWeight: 500 }}>{p.course}</td>
                    <td style={{ padding: "9px 14px", color: "#16a34a", fontWeight: 700 }}>{p.avg}</td>
                    <td style={{ padding: "9px 14px", color: P, fontWeight: 600 }}>{p.median}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
      <div style={{ fontWeight: 700, fontSize: 14, color: "#111827", marginBottom: 10 }}>Top Recruiters</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {pl.topRecruiters.map(r => (
          <span key={r} style={{ background: "#f3f4f6", color: "#374151", fontSize: 12, padding: "5px 12px", borderRadius: 20, border: "1px solid #e5e7eb", fontWeight: 500 }}>{r}</span>
        ))}
      </div>
    </Card>
  );
}
