import Navigation from "@/components/Navigation";
import AIBuiltForAccountingSection from "@/components/AIBuiltForAccountingSection";
import InvoiceAutomationSection from "@/components/InvoiceAutomationSection";
import RealTimeDashboardsSection from "@/components/RealTimeDashboardsSection";
import AutomatedReconciliationSection from "@/components/AutomatedReconciliationSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Product = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Product Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-secondary/20">
        <div className="container mx-auto px-8 md:px-12 max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-text-primary mb-6 leading-tight">
            Our <span className="text-primary">Product</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            AI-powered accounting tools built specifically for modern businesses. 
            Explore our comprehensive suite of features.
          </p>
        </div>
      </section>

      <AIBuiltForAccountingSection />
      <InvoiceAutomationSection />
      <RealTimeDashboardsSection />
      <AutomatedReconciliationSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Product;
