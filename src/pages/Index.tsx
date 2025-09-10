import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingTeaserSection from "@/components/PricingTeaserSection";
import CredibilitySection from "@/components/CredibilitySection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <PricingTeaserSection />
      <CredibilitySection />
      <FAQSection />
      <PricingSection />
      <Footer />
    </main>
  );
};

export default Index;
