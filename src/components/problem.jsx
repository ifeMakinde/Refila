export default function Problem() {
  return (
    <section className="">
      <div className="text-start space-y-5 px-8 py-16 mx-auto w-full lg:max-w-[50%]">
        <p className="text-orange-500 text-xs">THE PROBLEM</p>

        <h2 className="text-2xl lg:text-3xl font-semibold ">
          Linda gets home tired. Her gas is finished.
        </h2>

        <div className="flex justify-center gap-4 lg:gap-3 h-50">
          <div className="h-[69%] lg:h-[60%] p-px bg-orange-900"></div>

          <div className="space-y-3">
            <p className="text-gray-500 text-sm lg:text-base">
              To refill it, she must travel to a gas station, face uncertainty
              about availability, wait in long queues, and carry a heavy
              cylinder back home.
            </p>

            <p className="italic text-gray-900 text-sm lg:text-base ">
              It's stressful, time-consuming, and sometimes unsafe — and
              millions of Nigerians <br />
              go through it every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
