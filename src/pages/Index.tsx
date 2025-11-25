import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AIWorkflowSection from "@/components/AIWorkflowSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import WhatYouGetSection from "@/components/WhatYouGetSection";
import TrustSecuritySection from "@/components/TrustSecuritySection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProblemSolutionSection />
      <AIWorkflowSection />
      <WhatYouGetSection />
      <IntegrationsSection />
      <TrustSecuritySection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;
