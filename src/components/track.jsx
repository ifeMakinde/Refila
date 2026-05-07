import { Package, RefreshCcw, Truck, CheckCircle2, PackageOpen } from "lucide-react";

import Button from "./button";

const stages = [
  { label: "Picked up", icon: Package },
  { label: "Refilling", icon: RefreshCcw },
  { label: "Out for delivery", icon: Truck },
  { label: "Delivered", icon: CheckCircle2 },
];

export default function Track({ activeOrder }) {
  const currentStage = activeOrder?.stage ?? null;

  return (
    <section
      id="track"
      style={{
        background: "linear-gradient(135deg, #3DC96C 0%, #27B857 50%, #1FA84A 100%)",
        padding: "80px 32px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <p className="text-[11px] font-bold tracking-[0.14em] text-white/75 uppercase mb-3">
          Track your order
        </p>

        <h2
          style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 800, color: "#FFFFFF", marginBottom: 48, lineHeight: 1.15 }}
        >
          Watch your refill{" "}
          <em style={{ color: "#FAD4BB", fontStyle: "italic", fontWeight: 700 }}>in motion.</em>
        </h2>

        {/* Card */}
        <div
          className="flex flex-col items-center text-center"
          style={{
            background: "rgba(255,255,255,0.13)",
            border: "1.5px solid rgba(255,255,255,0.22)",
            borderRadius: 20,
            padding: "56px 40px",
            maxWidth: 580,
            margin: "0 auto",
          }}
        >
          {currentStage === null ? (
            <>
              <div className="flex justify-center items-center mb-4">
                <PackageOpen size={44} color="#FAD4BB" strokeWidth={1.4} />
              </div>

              <p className="text-lg font-bold text-white mb-2">No active order</p>

              <p className="text-sm text-white/70 mb-7 leading-relaxed">
                Place an order above and watch its progress live here.
              </p>

              <Button
                onClick={() => document.getElementById("order")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold"
              >
                Order a refill
              </Button>
            </>
          ) : (
            <>
              <p className="text-[13px] text-white/70 mb-8">
                Order #{activeOrder.id} · {activeOrder.cylinder}
              </p>

              <div className="flex justify-center items-start">
                {stages.map((s, i) => {
                  const Icon = s.icon;
                  const done = i <= currentStage;
                  const active = i === currentStage;
                  return (
                    <div key={i} className="flex items-center">
                      <div className="text-center w-20">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2"
                          style={{ background: done ? (active ? "" : "white") : "rgba(255,255,255,0.18)" }}
                        >
                          {/* active stage uses orange-500 */}
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${active ? "bg-orange-500" : ""}`}>
                            <Icon size={22} color={done ? (active ? "white" : "#27B857") : "rgba(255,255,255,0.4)"} />
                          </div>
                        </div>
                        <p className={`text-[11px] font-${done ? "semibold" : "normal"} m-0 leading-tight`}
                          style={{ color: done ? "white" : "rgba(255,255,255,0.4)" }}>
                          {s.label}
                        </p>
                      </div>
                      {i < stages.length - 1 && (
                        <div
                          className="h-px w-9 mb-5 flex-shrink-0"
                          style={{ background: i < currentStage ? "white" : "rgba(255,255,255,0.2)" }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              <p className="mt-8 text-sm text-white/80">
                Estimated delivery:{" "}
                <strong className="text-white">{activeOrder.eta}</strong>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}