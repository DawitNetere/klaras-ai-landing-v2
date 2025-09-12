import { Button } from "@/components/ui/button";
import dashboardMockup from "@/assets/dashboard-mockup.jpg";
import googleForStartupsLogo from "@/assets/Google_for_Startups_logo.svg";

const HeroSection = () => {
  return (
    <section className="relative py-8 md:py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-8 md:px-12 lg:px-16 text-center max-w-6xl">
        {/* Social proof badge */}
        <div className="flex justify-center mb-8 md:mb-10 animate-fade-in-up">
          <div className="bg-success/10 text-text-primary border border-success/30 px-6 py-3 rounded-full text-sm font-medium flex items-center gap-4">
            Backed by
            <img src={googleForStartupsLogo} alt="Google for Startups logo - Klaras AI is backed by Google for Startups" className="h-4 scale-110" />
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-text-primary mb-8 md:mb-10 leading-tight animate-fade-in-up px-4 md:px-8" style={{ animationDelay: '0.1s' }}>
          Accounting <span className="text-primary">automated by AI agents</span>, reviewed by <span className="text-text-primary">expert accountants</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl lg:text-2xl text-text-secondary mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up px-4 md:px-6" style={{ animationDelay: '0.2s' }}>
          We automate 60% of accounting workflows, so you <span className="text-success">pay up to 40% less</span> than traditional accounting fees.
        </p>

        {/* CTA Button */}
        <div className="mb-16 md:mb-20 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <Button variant="hero" className="text-xl md:text-2xl font-bold px-12 md:px-16 py-6 md:py-7" asChild>
            <a href="https://cal.com/klaras/30min" target="_blank" rel="noopener noreferrer">
              Book a Demo
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;