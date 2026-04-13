import { useState } from "react";
import { Card, SecTitle, Stars, Bar } from "../ui/CollegeUI";

export default function OverviewSection({ data }) {
  const [openFaq, setOpenFaq] = useState(0);
  const P = data.colors?.primary || "#004aad";
  const G = "#6b7280";

  return (
    <>
      {/* News */}
      <Card>
        <SecTitle>{data.shortName} News and Notifications</SecTitle>
        {data.news.map((n, i) => (
          <div key={i} style={{ display: "flex", gap: 8, padding: "7px 0", borderBottom: i < data.news.length - 1 ? "1px solid #f3f4f6" : "none", fontSize: 13, color: "#374151", lineHeight: 1.65 }}>
            <span style={{ color: P, flexShrink: 0, marginTop: 2 }}>▸</span>
            <span>{n}</span>
          </div>
        ))}
      </Card>

      {/* Stories */}
      {data.stories?.length > 0 && (
        <Card>
          <h3 style={{ margin: "0 0 14px", fontSize: 16, fontWeight: 800, color: "#111827" }}>College Success Stories</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))", gap: 12 }}>
            {data.stories.map((s, i) => (
              <div key={i} style={{ border: "1px solid #e5e7eb", borderRadius: 8, overflow: "hidden", cursor: "pointer" }}>
                <div style={{ background: `linear-gradient(135deg,${P},#0f3460)`, height: 70, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>{s.emoji}</div>
                <div style={{ padding: 10, fontSize: 12, color: "#111827", lineHeight: 1.5, fontWeight: 500 }}>{s.title} <span style={{ color: P }}>›</span></div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* About */}
      <Card>
        <SecTitle>About {data.shortName}</SecTitle>
        <p style={{ fontSize: 13, lineHeight: 1.85, color: "#374151", margin: "0 0 10px" }}>{data.about}</p>
        <ul style={{ margin: 0, padding: "0 0 0 18px", fontSize: 13, lineHeight: 1.95, color: "#374151" }}>
          {data.aboutPoints.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
      </Card>

      {/* FAQs */}
      <Card>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
          <span style={{ fontSize: 28 }}>💬</span>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, color: "#111827" }}>Commonly Asked Questions</div>
            <div style={{ fontSize: 12, color: G }}>On {data.shortName}</div>
          </div>
        </div>
        <div style={{ marginTop: 14 }}>
          {data.faqs.map((f, i) => (
            <div key={i} style={{ borderTop: i === 0 ? "none" : "1px solid #f3f4f6" }}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", background: "none", border: "none", padding: "13px 0", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "flex-start", cursor: "pointer", gap: 12 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#111827", lineHeight: 1.5 }}>Q: &nbsp;{f.q}</span>
                <span style={{ color: G, fontSize: 16, flexShrink: 0, marginTop: 2 }}>{openFaq === i ? "∧" : "∨"}</span>
              </button>
              {openFaq === i && (
                <div style={{ paddingBottom: 12, paddingLeft: 22, fontSize: 13, color: "#374151", lineHeight: 1.8 }}>
                  <strong>A: </strong>{f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Highlights */}
      <Card>
        <SecTitle>{data.shortName} Highlights</SecTitle>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
          <tbody>
            {data.highlights.map(([k, v], i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f9fafb" }}>
                <td style={{ padding: "9px 14px", fontWeight: 600, color: "#111827", width: "42%", borderBottom: "1px solid #f3f4f6" }}>{k}</td>
                <td style={{ padding: "9px 14px", color: "#374151", borderBottom: "1px solid #f3f4f6" }}>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {/* Rankings */}
      <Card>
        <SecTitle>Rankings / Accreditations</SecTitle>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {data.rankings.map((r, i) => (
            <div key={i} style={{ border: `2px solid ${P}`, borderRadius: 10, padding: "14px 18px", textAlign: "center", flex: "1 1 130px" }}>
              <div style={{ fontSize: 26, fontWeight: 900, color: P }}>{r.rank}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#111827", marginTop: 4 }}>{r.cat}</div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}
