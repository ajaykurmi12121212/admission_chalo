import { Card, SecTitle } from "../ui/CollegeUI";

export default function CutoffSection({ data }) {
  return (
    <Card>
      <SecTitle>{data.shortName} JEE Main Cutoff 2025</SecTitle>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
          <thead>
            <tr style={{ background: "#1a1a2e", color: "#fff" }}>
              <th style={{ padding: "9px 12px", textAlign: "left", fontWeight: 700 }}>Course</th>
              <th style={{ padding: "9px 12px", textAlign: "left", fontWeight: 700 }}>JEE Main Closing Rank (General)</th>
            </tr>
          </thead>
          <tbody>
            {data.cutoffs.map((c, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f9fafb" }}>
                <td style={{ padding: "9px 12px", fontWeight: 600, color: "#111827", minWidth: 240 }}>{c.course}</td>
                <td style={{ padding: "9px 12px", fontWeight: 700, color: "#dc2626" }}>{c.gen}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
