import { useState } from "react";
import { Flame } from "lucide-react";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  return (
    <section style={{ background: "#F5F0E8", padding: "0 32px 80px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{
          background: "linear-gradient(135deg, #F97316 0%, #D45A20 100%)",
          borderRadius: 24, padding: "64px 56px",
        }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", color: "rgba(255,255,255,0.7)", textTransform: "uppercase", marginBottom: 16 }}>
            Join the waitlist
          </p>
          <h2 style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 700, color: "#FFFFFF",
            lineHeight: 1.2, marginBottom: 12, maxWidth: 500,
          }}>
            Be first in line when we land in your neighborhood.
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.85)", marginBottom: 32 }}>
            Early users get free first refills and priority delivery slots.
          </p>

          {!joined ? (
            <>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: 1, minWidth: 220, maxWidth: 340,
                    background: "rgba(255,255,255,0.2)", border: "1.5px solid rgba(255,255,255,0.35)",
                    borderRadius: 50, padding: "14px 22px", fontSize: 14,
                    color: "white", outline: "none",
                  }}
                />
                <button
                  onClick={() => email && setJoined(true)}
                  style={{
                    background: "#FFFFFF", color: "#F97316",
                    border: "none", borderRadius: 50,
                    padding: "14px 30px", fontSize: 14, fontWeight: 700,
                    cursor: "pointer", whiteSpace: "nowrap",
                  }}
                >
                  Join waitlist
                </button>
              </div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: 12 }}>
                No spam. Unsubscribe anytime.
              </p>
            </>
          ) : (
            <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 12, padding: "16px 24px", display: "inline-block" }}>
              <p style={{ fontSize: 14, color: "white", fontWeight: 600, margin: 0 }}>
                ✓ You're on the list! We'll be in touch soon.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer style={{ background: "#F5F0E8", borderTop: "1px solid #E8E0D8", padding: "24px 32px" }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: 16,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: "#F97316", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Flame size={16} color="white" />
          </div>
          <span style={{ fontSize: 15, fontWeight: 700, color: "#1C1917" }}>Refilia</span>
        </div>

        <p style={{ fontSize: 13, color: "#9E8E7E", margin: 0 }}>
          © 2026 Refilia · Made in Nigeria 🇳🇬
        </p>

        <div style={{ display: "flex", gap: 24 }}>
          {["Privacy", "Terms", "Contact"].map((link) => (
            <a key={link} href="#" style={{ fontSize: 13, color: "#6B5C4C", textDecoration: "none" }}
              onMouseEnter={(e) => e.target.style.color = "#F97316"}
              onMouseLeave={(e) => e.target.style.color = "#6B5C4C"}>
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}