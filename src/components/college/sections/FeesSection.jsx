import { Card, SecTitle } from "../ui/CollegeUI";

export default function FeesSection({ data }) {
  const P = data.colors?.primary || "#004aad";

  return (
    <Card>
      <SecTitle>{data.shortName} Fees Structure 2026</SecTitle>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
          <thead>
            <tr style={{ background: "#1a1a2e", color: "#fff" }}>
              {["Programme", "Tuition Fee", "Hostel Fee", "Total Fees", "Exam"].map(h => (
                <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700, whiteSpace: "nowrap" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.fees.map((f, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f9fafb" }}>
                <td style={{ padding: "9px 14px", fontWeight: 600, color: "#111827" }}>{f.prog}</td>
                <td style={{ padding: "9px 14px", color: "#374151" }}>{f.tuition}</td>
                <td style={{ padding: "9px 14px", color: "#374151" }}>{f.hostel}</td>
                <td style={{ padding: "9px 14px", fontWeight: 700, color: P }}>{f.total}</td>
                <td style={{ padding: "9px 14px", color: "#6b7280" }}>{f.exam}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {data.scholarships?.length > 0 && (
        <div style={{ marginTop: 20 }}>
          <div style={{ fontWeight: 700, fontSize: 15, color: "#111827", marginBottom: 10 }}>Scholarships 2026</div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
            <thead>
              <tr style={{ background: "#f3f4f6" }}>
                {["Scholarship", "Eligibility", "Amount"].map(h => (
                  <th key={h} style={{ padding: "9px 12px", textAlign: "left", fontWeight: 700, color: "#111827", borderBottom: "2px solid #e5e7eb" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.scholarships.map((s, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f9fafb" }}>
                  <td style={{ padding: "8px 12px", fontWeight: 600, color: P }}>{s.name}</td>
                  <td style={{ padding: "8px 12px", color: "#374151" }}>{s.eligibility}</td>
                  <td style={{ padding: "8px 12px", fontWeight: 700, color: "#16a34a" }}>{s.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Card>
  );
}
