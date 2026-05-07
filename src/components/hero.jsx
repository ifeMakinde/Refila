import Button from "./button";

export default function Hero() {
  return (
    <section className="bg-orange-50 py-10">
      <div className=" px-4 py-8 lg:px-8 lg:py-16  grid md:grid-cols-2 gap-10 items-center mx-auto w-full lg:max-w-[80%]">
        <div className="text-start">
          <span className="text-xs bg-orange-100 text-orange-600 px-3 py-2 rounded-full">
            NOW SERVING LAGOS · 2026
          </span>

          <h1 className=" text-4xl lg:text-6xl font-bold mt-6 leading-tight">
            Cooking gas, <br />
            <span className="text-orange-500">delivered</span> to your door.
          </h1>

          <p className="text-gray-600 text-sm lg:text-base mt-4 max-w-md">
            No more queues at the gas station. No more carrying heavy cylinders.
            Refilia picks up, refills, and returns your cylinder.
          </p>

          <div className="flex gap-4 mt-6">
            <Button className="bg-orange-500 hover:bg-amber-600 text-white">
              Order your first refill
            </Button>
            <Button className="border border-gray-50 hover:bg-green-600 hover:text-white ">
              See how it works
            </Button>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden w-full lg:w-[99%]">
          <img
            src="/hero-image.jpg"
            alt="delivery"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}