// import { useState } from "react";

// const areas = [
//   { name: "Lekki / VI / Ikoyi", status: "Live", statusColor: "#2D9E4E", barColor: "#2D9E4E", barWidth: "100%" },
//   { name: "Yaba / Surulere", status: "Live", statusColor: "#2D9E4E", barColor: "#2D9E4E", barWidth: "95%" },
//   { name: "Ikeja / Maryland", status: "Expanding", statusColor: "#3B7DD8", barColor: "#3B7DD8", barWidth: "60%" },
//   { name: "Ajah / Sangotedo", status: "Coming soon", statusColor: "#E8682A", barColor: "#F5A623", barWidth: "20%" },
// ];

// export default function Coverage() {
//   const [phoneInput, setPhoneInput] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   return (
//     <section style={{ background: "#F5F0E8", padding: "80px 32px" }}>
//       <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
//         <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", color: "#E8682A", textTransform: "uppercase", marginBottom: 16 }}>
//           Coverage
//         </p>
//         <h2 style={{
//           fontFamily: "Georgia, 'Times New Roman', serif",
//           fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#1C1917",
//           marginBottom: 40,
//         }}>
//           Where we <em style={{ color: "#E8682A", fontStyle: "italic" }}>deliver</em>
//         </h2>

//         {/* Coverage card */}
//         <div style={{
//           background: "#FFFFFF",
//           borderRadius: 16,
//           padding: "32px",
//           boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
//           marginBottom: 32,
//           textAlign: "left",
//         }}>
//           {areas.map((a, i) => (
//             <div key={i} style={{ marginBottom: i < areas.length - 1 ? 28 : 0 }}>
//               <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
//                 <span style={{ fontSize: 15, fontWeight: 500, color: "#1C1917" }}>{a.name}</span>
//                 <span style={{ fontSize: 13, fontWeight: 600, color: a.statusColor }}>{a.status}</span>
//               </div>
//               <div style={{ height: 6, background: "#F0EAE0", borderRadius: 99, overflow: "hidden" }}>
//                 <div style={{
//                   height: "100%", width: a.barWidth,
//                   background: a.barColor, borderRadius: 99,
//                   transition: "width 0.6s ease",
//                 }} />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Notify form */}
//         {!submitted ? (
//           <>
//             <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
//               <input
//                 type="tel"
//                 placeholder="Your phone number"
//                 value={phoneInput}
//                 onChange={(e) => setPhoneInput(e.target.value)}
//                 style={{
//                   flex: 1, minWidth: 220, maxWidth: 320,
//                   border: "1.5px solid #E8E0D8", borderRadius: 50,
//                   padding: "13px 20px", fontSize: 14, color: "#1C1917",
//                   background: "#FFFFFF", outline: "none",
//                 }}
//               />
//               <button
//                 onClick={() => phoneInput && setSubmitted(true)}
//                 style={{
//                   background: "#E8682A", color: "white",
//                   border: "none", borderRadius: 50,
//                   padding: "13px 28px", fontSize: 14, fontWeight: 600,
//                   cursor: "pointer", whiteSpace: "nowrap",
//                 }}
//               >
//                 Notify me
//               </button>
//             </div>
//             <p style={{ fontSize: 13, color: "#9E8E7E", marginTop: 12 }}>
//               3,100+ neighbours already on the waitlist
//             </p>
//           </>
//         ) : (
//           <div style={{ background: "#EAF7EF", borderRadius: 12, padding: "16px 24px", display: "inline-block" }}>
//             <p style={{ fontSize: 14, color: "#2D9E4E", fontWeight: 600, margin: 0 }}>
//               ✓ You're on the list! We'll notify you when we expand to your area.
//             </p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

import { useState } from "react";

const areas = [
  {
    name: "Lekki / VI / Ikoyi",
    status: "Live",
    statusColor: "#2D9E4E",
    barColor: "#2D9E4E",
    barWidth: "100%",
  },
  {
    name: "Yaba / Surulere",
    status: "Live",
    statusColor: "#2D9E4E",
    barColor: "#2D9E4E",
    barWidth: "95%",
  },
  {
    name: "Ikeja / Maryland",
    status: "Expanding",
    statusColor: "#3B7DD8",
    barColor: "#3B7DD8",
    barWidth: "60%",
  },
  {
    name: "Ajah / Sangotedo",
    status: "Coming soon",
    statusColor: "#EA580C",
    barColor: "#F5A623",
    barWidth: "20%",
  },
];

export default function Coverage() {
  const [phoneInput, setPhoneInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section style={{ background: "#F5F0E8", padding: "80px 32px" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.12em",
            color: "#F97316",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Coverage
        </p>
        <h2
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 700,
            color: "#1C1917",
            marginBottom: 40,
          }}
        >
          Where we{" "}
          <em style={{ color: "#F97316", fontStyle: "italic" }}>deliver</em>
        </h2>

        <div
          style={{
            background: "#FFFFFF",
            borderRadius: 16,
            padding: "32px",
            boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
            marginBottom: 32,
            textAlign: "left",
          }}
        >
          {areas.map((a, i) => (
            <div
              key={i}
              style={{ marginBottom: i < areas.length - 1 ? 28 : 0 }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 8,
                }}
              >
                <span
                  style={{ fontSize: 15, fontWeight: 500, color: "#1C1917" }}
                >
                  {a.name}
                </span>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: a.statusColor,
                  }}
                >
                  {a.status}
                </span>
              </div>
              <div
                style={{
                  height: 6,
                  background: "#F0EAE0",
                  borderRadius: 99,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: a.barWidth,
                    background: a.barColor,
                    borderRadius: 99,
                    transition: "width 0.6s ease",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {!submitted ? (
          <>
            <div
              style={{
                display: "flex",
                gap: 12,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <input
                type="tel"
                placeholder="Your phone number"
                value={phoneInput}
                onChange={(e) => setPhoneInput(e.target.value)}
                style={{
                  flex: 1,
                  minWidth: 220,
                  maxWidth: 320,
                  border: "1.5px solid #E8E0D8",
                  borderRadius: 50,
                  padding: "13px 20px",
                  fontSize: 14,
                  color: "#1C1917",
                  background: "#FFFFFF",
                  outline: "none",
                }}
              />
              <button
                onClick={() => phoneInput && setSubmitted(true)}
                style={{
                  background: "#EA580C",
                  color: "white",
                  border: "none",
                  borderRadius: 50,
                  padding: "13px 28px",
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                Notify me
              </button>
            </div>
            <p style={{ fontSize: 13, color: "#9E8E7E", marginTop: 12 }}>
              3,100+ neighbours already on the waitlist
            </p>
          </>
        ) : (
          <div
            style={{
              background: "#F97316",
              borderRadius: 12,
              padding: "16px 24px",
              display: "inline-block",
            }}
          >
            <p
              style={{
                fontSize: 14,
                color: "#2D9E4E",
                fontWeight: 600,
                margin: 0,
              }}
            >
              ✓ You're on the list! We'll notify you when we expand to your
              area.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
