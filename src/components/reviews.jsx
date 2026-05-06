import { useState } from "react";
import { Star } from "lucide-react";

const existingReviews = [
  { initial: "A", name: "Adaeze O.", time: "Yesterday", stars: 5, text: "Showed up in 40 minutes. The agent connected the cylinder for me — felt so safe." },
  { initial: "T", name: "Tunde A.", time: "2 days ago", stars: 5, text: "No more queues at the gas station. This is genuinely life-changing for my restaurant." },
  { initial: "C", name: "Chiamaka E.", time: "4 days ago", stars: 4, text: "Pricing is transparent and fair. Would love a scheduled refill option next!" },
];

const customerStories = [
  { initials: "LO", name: "Linda O.", location: "Lekki Phase 1", size: "12.5 kg", quote: "I ordered at 7am and it was back by 10. I didn't leave my house once." },
  { initials: "AK", name: "Amaka K.", location: "Yaba", size: "5 kg", quote: "The agent was professional and the seal was intact. First time I've felt safe with a gas delivery." },
  { initials: "TE", name: "Tunde E.", location: "VI", size: "12.5 kg", quote: "Set up my auto-refill and haven't thought about gas since. Exactly what I needed." },
];

function StarRow({ count, onSet, interactive }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div style={{ display: "flex", gap: 6 }}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          size={24}
          fill={(interactive ? (hovered || count) : count) >= n ? "#FFFFFF" : "none"}
          color="#FFFFFF"
          style={{ cursor: interactive ? "pointer" : "default", opacity: interactive ? 1 : 0.7 }}
          onMouseEnter={() => interactive && setHovered(n)}
          onMouseLeave={() => interactive && setHovered(0)}
          onClick={() => interactive && onSet(n)}
        />
      ))}
    </div>
  );
}

function OrangeStarRow({ count }) {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star key={n} size={15} fill={count >= n ? "#F97316" : "none"} color="#F97316" />
      ))}
    </div>
  );
}

export default function Reviews() {
  const [rating, setRating] = useState(0);
  const [reviewName, setReviewName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [reviews, setReviews] = useState(existingReviews);

  const handleSubmit = () => {
    if (!rating || !reviewName || !reviewText) return;
    setReviews([{ initial: reviewName[0].toUpperCase(), name: reviewName, time: "Just now", stars: rating, text: reviewText }, ...reviews]);
    setSubmitted(true);
  };

  const avgRating = (reviews.reduce((a, r) => a + r.stars, 0) / reviews.length).toFixed(1);

  return (
    <>
      {/* Reviews section with rate form */}
      <section id="reviews" style={{ background: "#F5F0E8", padding: "60px 16px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {/* Header: stack on mobile, row on larger screens */}
          <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "flex-start",
            gap: 20,
            marginBottom: 36 
          }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", color: "#F97316", textTransform: "uppercase", marginBottom: 12 }}>Reviews</p>
              <h2 style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 700, color: "#1C1917", margin: 0 }}>
                Loved by Nigerian <em style={{ color: "#F97316", fontStyle: "italic" }}>kitchens.</em>
              </h2>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: 50, padding: "8px 16px", display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ display: "flex", gap: 2 }}>
                {[1,2,3,4,5].map(n => <Star key={n} size={14} fill="#F97316" color="#F97316" />)}
              </div>
              <span style={{ fontSize: 15, fontWeight: 700, color: "#1C1917" }}>{avgRating}</span>
              <span style={{ fontSize: 13, color: "#9E8E7E" }}>· {reviews.length} reviews</span>
            </div>
          </div>

          {/* Main grid: stack on mobile, 2 columns on tablet+ */}
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "1fr", 
            gap: 24,
            alignItems: "start",
            "@media (min-width: 768px)": {
              gridTemplateColumns: "1fr 1fr"
            }
          }}>
            {/* Rate form */}
            <div style={{ background: "#F97316", borderRadius: 20, padding: "28px 20px" }}>
              {!submitted ? (
                <>
                  <p style={{ fontSize: "clamp(18px, 5vw, 20px)", fontWeight: 700, color: "white", marginBottom: 6 }}>Rate your last refill</p>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", marginBottom: 24 }}>Your feedback shapes Refila.</p>
                  <div style={{ marginBottom: 24 }}>
                    <StarRow count={rating} onSet={setRating} interactive={true} />
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <label style={{ display: "block", fontSize: 13, color: "rgba(255,255,255,0.9)", marginBottom: 8, fontWeight: 500 }}>Your name</label>
                    <input
                      type="text"
                      placeholder="Adaeze O."
                      value={reviewName}
                      onChange={(e) => setReviewName(e.target.value)}
                      style={{
                        width: "100%", boxSizing: "border-box",
                        background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.3)",
                        borderRadius: 10, padding: "11px 14px", fontSize: 14,
                        color: "white", outline: "none",
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    <label style={{ display: "block", fontSize: 13, color: "rgba(255,255,255,0.9)", marginBottom: 8, fontWeight: 500 }}>Your review</label>
                    <textarea
                      placeholder="How was your delivery experience?"
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      rows={4}
                      style={{
                        width: "100%", boxSizing: "border-box", resize: "none",
                        background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.3)",
                        borderRadius: 10, padding: "11px 14px", fontSize: 14,
                        color: "white", outline: "none",
                      }}
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    style={{
                      width: "100%", background: "#FFFFFF", color: "#F97316",
                      border: "none", borderRadius: 50, padding: "14px",
                      fontSize: 14, fontWeight: 600, cursor: "pointer",
                    }}
                  >
                    Submit review
                  </button>
                </>
              ) : (
                <div style={{ textAlign: "center", padding: "24px 0" }}>
                  <p style={{ fontSize: 18, fontWeight: 700, color: "white", marginBottom: 8 }}>Thank you! 🙌</p>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.8)" }}>Your review helps other Nigerians trust Refilia.</p>
                </div>
              )}
            </div>

            {/* Review cards - responsive grid */}
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "1fr", 
              gap: 14,
              "@media (min-width: 480px)": {
                gridTemplateColumns: "1fr 1fr"
              }
            }}>
              {reviews.slice(0, 4).map((r, i) => (
                <div key={i} style={{ background: "#FFFFFF", borderRadius: 16, padding: "20px", boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6, flexWrap: "wrap", gap: 8 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#FEF3EC", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "#E8682A" }}>
                        {r.initial}
                      </div>
                      <div>
                        <p style={{ fontSize: 13, fontWeight: 600, color: "#1C1917", margin: 0 }}>{r.name}</p>
                        <p style={{ fontSize: 12, color: "#9E8E7E", margin: 0 }}>{r.time}</p>
                      </div>
                    </div>
                    <OrangeStarRow count={r.stars} />
                  </div>
                  <p style={{ fontSize: 13, color: "#4A3C2C", lineHeight: 1.6, margin: 0 }}>{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer stories section */}
      <section style={{ background: "#F5F0E8", padding: "0 16px 60px 16px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", color: "#F97316", textTransform: "uppercase", marginBottom: 16 }}>
            Stories
          </p>
          <h2 style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 700, color: "#1C1917", marginBottom: 32 }}>
            From our <em style={{ color: "#F97316", fontStyle: "italic" }}>customers</em>
          </h2>

          {/* Customer stories grid: 1→2→3 columns responsive */}
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "1fr", 
            gap: 20,
            "@media (min-width: 550px)": {
              gridTemplateColumns: "repeat(2, 1fr)"
            },
            "@media (min-width: 900px)": {
              gridTemplateColumns: "repeat(3, 1fr)"
            }
          }}>
            {customerStories.map((s, i) => (
              <div key={i} style={{ background: "#FFFFFF", borderRadius: 16, padding: "24px", boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: "#F97316", display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 14, fontWeight: 700, color: "white", marginBottom: 20,
                }}>
                  {s.initials}
                </div>
                <p style={{ fontSize: "clamp(14px, 4vw, 15px)", color: "#4A3C2C", fontStyle: "italic", lineHeight: 1.65, marginBottom: 24 }}>
                  "{s.quote}"
                </p>
                <div style={{ borderTop: "1px solid #F0EAE0", paddingTop: 16 }}>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "#1C1917", margin: "0 0 2px" }}>{s.name}</p>
                  <p style={{ fontSize: 13, color: "#9E8E7E", margin: 0 }}>{s.location} · {s.size}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}