// // import Navbar from "../components/navbar";
// // import Pricing from "../components/pricing";
// // import Analytics from "../components/analyicts";
// // import Hero from "../components/hero";
// // import Problem from "../components/problem";
// // import HowItWorks from "../components/howitworks";

// // function homepage() {
// //   return (
// //     <>
// //       <Navbar />
// //       <Hero />
// //       <Pricing />
// //       <Analytics />
// //       <Problem />
// //       <HowItWorks />
// //     </>
// //   );
// // }

// // export default homepage;



import Navbar from "../components/navbar";
import Hero from "../components/hero";
import HowItWorks from "../components/howitworks";
import Problem from "../components/problem";
import Pricing from "../components/pricing";
import Analytics from "../components/analytics";
// New sections you built — drop these into src/components/
import Order from "../components/order";
import Track from "../components/track";
import Safety from "../components/safety";
import WhyRefilia from "../components/whyrefilia";
import Coverage from "../components/coverage";
import Reviews from "../components/reviews";
import { Waitlist } from "../components/waitlistandfooter";
import { Footer } from "../components/waitlistandfooter";

function Homepage() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: 60 }}> {/* offset for fixed navbar */}
        <Hero />
        <Pricing />
        <Analytics />
        <Problem />
        <HowItWorks />
        <Order />
        <Track />
        <Safety />
        <WhyRefilia />
        <Coverage />
        <Reviews />
        <Waitlist />
        <Footer />
      </div>
    </>
  );
}

export default Homepage;