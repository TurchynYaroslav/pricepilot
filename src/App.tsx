import { useRef } from "react";
import { CTASection } from "./components/sections/CTASection";
import Features from "./components/sections/Features";
import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Pricing from "./components/sections/Pricing";
import PricingCalculator from "./components/sections/PricingCalculator";

function App() {
  const pricingRef = useRef<HTMLElement | null>(null);
  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView(true);
  };
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero scroll={scrollToPricing} />
        <Features />
        <Pricing ref={pricingRef} />
        <PricingCalculator />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
