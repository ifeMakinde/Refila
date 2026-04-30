import Navbar from "../components/navbar";
import Pricing from "../components/pricing";
import Analytics from "../components/analyicts";
import Hero from "../components/hero";
import Problem from "../components/problem";
import HowItWorks from "../components/howitworks";

function homepage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Pricing />
      <Analytics />
      <Problem />
      <HowItWorks />
    </>
  );
}

export default homepage;
