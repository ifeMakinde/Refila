import { Tag, ShieldCheck, Clock, Sparkles } from "lucide-react";

const features = [
  {
    icon: Tag,
    title: "Transparent pricing",
    desc: "Same fair price every time. No haggling, no surprises.",
  },
  {
    icon: ShieldCheck,
    title: "Safe handling",
    desc: "Certified agents, leak-tested cylinders, insured deliveries.",
  },
  {
    icon: Clock,
    title: "Reliable supply",
    desc: "Verified depot partnerships mean we never run out when you need us.",
  },
  {
    icon: Sparkles,
    title: "Built for Nigeria",
    desc: "Designed around how families really cook, shop, and live.",
  },
];

export default function WhyRefilia() {
  return (
    <section style={{ background: "#F5F0E8", padding: "80px 32px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", color: "#F97316", textTransform: "uppercase", marginBottom: 16 }}>
          Why Refilia
        </p>
        <h2 style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#1C1917",
          lineHeight: 1.2, marginBottom: 48, maxWidth: 420,
        }}>
          The gas station,{" "}
          <em style={{ color: "#F97316", fontStyle: "italic" }}>reimagined</em>
          {" "}around you.
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} style={{
                background: "#FFFFFF",
                borderRadius: 16,
                padding: "28px 24px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: "#FEF3EC",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 20,
                }}>
                  <Icon size={18} color="#F97316" />
                </div>
                <p style={{ fontSize: 16, fontWeight: 700, color: "#1C1917", marginBottom: 8 }}>{f.title}</p>
                <p style={{ fontSize: 14, color: "#6B5C4C", lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}