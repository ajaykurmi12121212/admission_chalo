import { Card, SecTitle } from "../ui/CollegeUI";

export default function AdmissionsSection({ data }) {
  const P = data.colors?.primary || "#004aad";
  const G = "#6b7280";

  return (
    <Card>
      <SecTitle>{data.shortName} Admissions 2026</SecTitle>
      <div style={{ overflowX: "auto", marginBottom: 20 }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
          <thead>
            <tr style={{ background: "#f3f4f6" }}>
              {["Programme", "Eligibility", "Exam", "Counselling", "Seats"].map(h => (
                <th key={h} style={{ padding: "9px 12px", textAlign: "left", fontWeight: 700, color: "#111827", borderBottom: "2px solid #e5e7eb", whiteSpace: "nowrap" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.admissions.map((a, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f9fafb" }}>
                <td style={{ padding: "9px 12px", fontWeight: 600, color: P }}>{a.prog}</td>
                <td style={{ padding: "9px 12px", color: "#374151" }}>{a.eligibility}</td>
                <td style={{ padding: "9px 12px", fontWeight: 600, color: "#111827" }}>{a.exam}</td>
                <td style={{ padding: "9px 12px", color: G }}>{a.counselling}</td>
                <td style={{ padding: "9px 12px", fontWeight: 600 }}>{a.seats}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ fontWeight: 700, fontSize: 14, color: "#111827", marginBottom: 10 }}>Important Dates 2026</div>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
        <tbody>
          {data.admissionDates.map(([event, date], i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f9fafb" }}>
              <td style={{ padding: "9px 14px", color: "#374151", borderBottom: "1px solid #f3f4f6" }}>{event}</td>
              <td style={{ padding: "9px 14px", fontWeight: 700, color: P, borderBottom: "1px solid #f3f4f6", whiteSpace: "nowrap" }}>{date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
