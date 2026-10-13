import Header from "./components/Header";
import Hero from "./components/Hero";
import BalanceCheck from "./components/BalanceCheck";
import ActivationGuide from "./components/ActivationGuide";
import BalancePlanner from "./components/BalancePlanner";
import SecurityTips from "./components/SecurityTips";
import FaqSection from "./components/FaqSection";
import ContactSection from "./components/ContactSection";
import CtaSection from "./components/CtaSection";
import Disclaimer from "./components/Disclaimer";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div id="top" className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <Hero />
        <BalanceCheck />
        <ActivationGuide />
        <BalancePlanner />
        <SecurityTips />
        <FaqSection />
        <ContactSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
