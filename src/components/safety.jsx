import { CheckCircle2, ShieldCheck } from "lucide-react";

const items = [
  {
    title: "Refilled only at DPR-certified stations",
    desc: "We never source from roadside or unregulated depots.",
  },
  {
    title: "Cylinder weight verified before and after",
    desc: "You only pay for the gas you actually receive.",
  },
  {
    title: "Tamper-evident seal on every delivery",
    desc: "If the seal is broken, refuse the cylinder — no questions asked.",
  },
  {
    title: "Agents trained in LPG handling and safety",
    desc: "Every Refila rider completes our certified safety program.",
  },
];

export default function Safety() {
  return (
    <section style={{ background: "#F5F0E8", padding: "80px 32px" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          background: "#EAF7EF", border: "1px solid #C2E8D0",
          borderRadius: 50, padding: "6px 16px", marginBottom: 28,
        }}>
          <ShieldCheck size={14} color="#2D9E4E" />
          <span style={{ fontSize: 13, color: "#2D9E4E", fontWeight: 500 }}>Certified safe</span>
        </div>

        <h2 style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#1C1917",
          lineHeight: 1.2, marginBottom: 48,
        }}>
          Every refill,{" "}
          <em style={{ color: "#F97316", fontStyle: "italic" }}>done right</em>
        </h2>

        <div style={{ textAlign: "left", display: "flex", flexDirection: "column", gap: 28 }}>
          {items.map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <CheckCircle2 size={22} color="#2D9E4E" style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <p style={{ fontSize: 16, fontWeight: 600, color: "#1C1917", margin: "0 0 4px" }}>{item.title}</p>
                <p style={{ fontSize: 14, color: "#6B5C4C", margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}