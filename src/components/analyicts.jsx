const analytics = [
  {
    figure: "1,284",
    description: "orders delivered",
  },
  {
    figure: "2h,41m",
    description: "orders delivered",
  },
  {
    figure: "98%",
    description: "satisfaction rate",
  },
];

export default function Analytics() {
  return (
    <section className="bg-orange-50 px-8 py-16 ">
      <div className=" px-8 py-16 grid md:grid-cols-3 gap-8 lg:gap-10 mx-auto w-full lg:max-w-[50%]">
        {analytics.map((item, i) => (
          <div key={i} className="space-y-1">
            <p className="text-3xl lg:text-5xl text-orange-500 font-bold">
              {item.figure}
            </p>
            <p className="text-gray-500 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
