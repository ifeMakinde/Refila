const prices = [
  { size: "3 KG", price: "₦3,150" },
  { size: "12.5 KG", price: "₦13,200" },
  { size: "50 KG", price: "₦51,000" },
];

export default function Pricing() {
  return (
    <section className="px-8 py-16 text-center mx-auto w-full  lg:max-w-[50%] ">
      <p className="text-orange-500 text-[10px] p-2">LIVE PRICING</p>

      <h2 className="text-3xl font-semibold mt-2">
        Today's prices in <span className="text-orange-500">Lagos</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mt-10 mx-auto">
        {prices.map((item, i) => (
          <div
            key={i}
            className="border border-gray-50 shadow-sm rounded-xl py-6 px-4 lg:p-6"
          >
            <p className="text-sm text-gray-500">{item.size} CYLINDER</p>
            <p className="text-2xl font-bold text-green-600 mt-2">
              {item.price}
            </p>
            <p className="text-xs text-gray-400 mt-1">Refilia price</p>
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-400 mt-4">Updated daily</p>
    </section>
  );
}
