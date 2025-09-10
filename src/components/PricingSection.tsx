import { Button } from "@/components/ui/button";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Be first in line
            </h2>
            
            <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-2xl mx-auto">
              Join the early adopters and claim the benefits.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <div className="text-center">
              <div className="text-blue-100 mb-2">✓ Priority onboarding</div>
            </div>
            <div className="text-center">
              <div className="text-blue-100 mb-2">✓ Founder support</div>
            </div>
            <div className="text-center">
              <div className="text-blue-100 mb-2">✓ Early pricing</div>
            </div>
          </div>

          <div className="mb-16 animate-fade-in-up">
            <Button className="bg-white text-blue-600 hover:bg-blue-50 text-lg font-semibold px-8 py-3" asChild>
              <a href="https://cal.com/klaras/30min" target="_blank" rel="noopener noreferrer">
                Book a Demo
              </a>
            </Button>
          </div>

          <div className="text-center">
            <p className="text-blue-200 text-sm">
              Automated bookkeeping. Human expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;