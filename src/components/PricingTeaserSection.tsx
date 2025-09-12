import { Button } from "@/components/ui/button";

const PricingTeaserSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-6">
              Up to 40% less than traditional accounting firms.
            </h2>
            
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Simple, transparent pricing for founders and small businesses. No hidden fees.
            </p>

            <Button variant="hero" className="text-xl md:text-2xl font-bold px-12 md:px-16 py-6 md:py-7 mb-16" asChild>
              <a href="https://cal.com/klaras/30min" target="_blank" rel="noopener noreferrer">
                Book a Demo
              </a>
            </Button>
          </div>

          <div className="bg-gradient-hero rounded-3xl p-12 shadow-large animate-scale-in">
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-bold text-text-primary">
                Accounting, reimagined for founders.
              </h3>
              
              <p className="text-lg text-text-secondary leading-relaxed">
                Stop wasting time and money on outdated accounting. With Klaras, you get automation + expert assurance — at a fraction of the cost.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTeaserSection;
