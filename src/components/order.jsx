import { useState } from "react";
import { Flame, Check } from "lucide-react";

const cylinders = [
  { size: "3kg", desc: "1–2 people", price: 3500 },
  { size: "6kg", desc: "Small family", price: 6500 },
  { size: "12kg", desc: "Most households", price: 12500 },
  { size: "25kg", desc: "Restaurants & shops", price: 24000 },
];

export default function Order() {
  const [selected, setSelected] = useState(null);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [placed, setPlaced] = useState(false);

  const cylinder = selected !== null ? cylinders[selected] : null;

  const handleOrder = () => {
    if (!cylinder || !address || !phone) return;
    setPlaced(true);
  };

  return (
    <section id="order" className="bg-[#F5F0E8] py-12 md:py-20">
      <div className="max-w-[1100px] mx-auto px-4 md:px-8">
        <p className="text-[11px] font-semibold tracking-widest text-orange-500 uppercase mb-4">
          Order a refill
        </p>
        <h2 className="font-serif text-[clamp(28px,5vw,52px)] font-bold text-[#1C1917] leading-tight mb-8 md:mb-12">
          Pick your cylinder.{" "}
          <em className="text-orange-500 italic">We do the rest.</em>
        </h2>

        {/* Responsive Grid: Stack on mobile, side-by-side on desktop */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Cylinder cards - Grid changes from 1 to 2 columns at mobile breakpoints */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cylinders.map((c, i) => (
                <button
                  key={i}
                  onClick={() => setSelected(i)}
                  className={`text-left rounded-2xl p-5 md:p-6 cursor-pointer relative transition-all shadow-sm
                    ${selected === i
                      ? "bg-orange-50 border-2 border-orange-600"
                      : "bg-white border-2 border-transparent hover:border-orange-200"}`}
                >
                  {selected === i && (
                    <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-orange-600 flex items-center justify-center">
                      <Check size={12} color="white" strokeWidth={3} />
                    </div>
                  )}
                  <div className="w-11 h-11 rounded-xl bg-orange-500 flex items-center justify-center mb-4 md:mb-5">
                    <Flame size={22} color="white" />
                  </div>
                  <p className="text-xl md:text-[22px] font-bold text-[#1C1917] mb-1">{c.size}</p>
                  <p className="text-sm text-[#8C7B6B] mb-2 md:mb-3">{c.desc}</p>
                  <p className="text-orange-500 font-semibold text-base">
                    ₦{c.price.toLocaleString()}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Sidebar - Full width on mobile, fixed width on desktop */}
          <div className="w-full lg:w-[340px]">
            <div className="bg-white rounded-2xl p-5 md:p-7 shadow-sm">
              {!placed ? (
                <>
                  <div className="mb-5">
                    <label className="block text-sm font-medium text-[#1C1917] mb-2">Delivery address</label>
                    <input
                      type="text"
                      placeholder="12 Allen Avenue, Ikeja"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full border border-[#E8E0D8] rounded-xl px-4 py-3 text-sm text-[#1C1917] bg-[#FAFAF8] outline-none focus:border-orange-300"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-[#1C1917] mb-2">Phone number</label>
                    <input
                      type="tel"
                      placeholder="+234 800 000 0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full border border-[#E8E0D8] rounded-xl px-4 py-3 text-sm text-[#1C1917] bg-[#FAFAF8] outline-none focus:border-orange-300"
                    />
                  </div>

                  {cylinder && (
                    <div className="border-t border-[#F0EAE0] pt-5 mb-5">
                      <div className="flex justify-between text-sm text-[#6B5C4C] mb-2">
                        <span>{cylinder.size} cylinder refill</span>
                        <span className="text-[#1C1917] font-medium">₦{cylinder.price.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm text-[#6B5C4C] mb-5">
                        <span>Pickup & delivery</span>
                        <span className="text-green-600 font-medium">Free</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-base font-bold text-[#1C1917]">Total</span>
                        <span className="text-base font-bold text-[#1C1917]">₦{cylinder.price.toLocaleString()}</span>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={handleOrder}
                    disabled={!cylinder || !address || !phone}
                    className={`w-full font-semibold py-4 rounded-full text-sm mb-3 transition-colors text-white
                      ${cylinder && address && phone
                        ? "bg-orange-500 hover:bg-orange-600 cursor-pointer"
                        : "bg-gray-300 cursor-not-allowed"}`}
                  >
                    Place order
                  </button>
                  <p className="text-center text-xs text-gray-400">Pay on delivery · Cancel anytime</p>
                </>
              ) : (
                <div className="text-center py-6">
                  <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                    <Check size={26} color="#16a34a" strokeWidth={2.5} />
                  </div>
                  <p className="text-lg font-bold text-[#1C1917] mb-2">Order placed!</p>
                  <p className="text-sm text-[#6B5C4C] mb-5">
                    We'll be at <strong>{address}</strong> to pick up your {cylinder?.size} cylinder. Expect a call shortly.
                  </p>
                  <button
                    onClick={() => { setPlaced(false); setSelected(null); setAddress(""); setPhone(""); }}
                    className="border border-orange-600 text-orange-600 bg-transparent hover:bg-orange-50 rounded-full px-6 py-2.5 text-sm font-semibold transition-colors"
                  >
                    Place another order
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}