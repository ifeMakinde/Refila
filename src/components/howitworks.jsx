import { Truck, Package, Home } from "lucide-react";

const steps = [
  {
    icon: <Package size={22} />,
    title: "Place your order",
    desc: "Choose your cylinder size in the app. Set a pickup time that works for you..",
  },
  {
    icon: <Truck size={22} />,
    title: "We pick up & refill",
    desc: "A certified Refila agent collects your cylinder and refills it at a verified depot.",
  },
  {
    icon: <Home size={22} />,
    title: "Back at your door",
    desc: "Your full cylinder is returned, safely connected, and ready to cook — same day",
  },
];
// bg-green-600/80 backdrop-blur-sm
export default function HowItWorks() {
  return (
    <section
      className="px-8 py-16 bg-green-600 backdrop-contrast-75 text-white text-start"
      id="howitworks"
    >
      <div className="mx-auto w-full lg:max-w-[60%] space-y-1">
        <p className="text-gray-300 text-[10px]  mb-3"> HOW IT WORKS</p>

        <h2 className="text-3xl font-semibold ">Three steps. Zero hassle.</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10 ">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-green-500/80 backdrop-blur-sm p-6 xl:p-8 rounded-xl "
            >
              <div className="mb-4 bg-orange-500 p-2 rounded-xl inline-block">
                {step.icon}
              </div>
              <h3 className="font-semibold text-base lg:text-2xl ">
                {step.title}
              </h3>
              <p className="text-xs lg:text-sm mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
