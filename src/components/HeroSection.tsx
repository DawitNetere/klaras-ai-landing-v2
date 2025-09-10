import { Button } from "@/components/ui/button";
import dashboardMockup from "@/assets/dashboard-mockup.jpg";
import googleForStartupsLogo from "@/assets/Google_for_Startups_logo.svg";

const HeroSection = () => {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-6 text-center max-w-5xl">
        {/* Social proof badge */}
        <div className="flex justify-center mb-6 animate-fade-in-up">
          <div className="bg-success/10 text-success border border-success/30 px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2">
            Backed by
            <img src={googleForStartupsLogo} alt="Google for Startups" className="h-4" />
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-text-primary mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          AI bookkeeping for founders <span className="text-primary">automated by AI agents</span>, signed off by <span className="text-success">expert accountants</span>.
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          We automate 60% of accounting workflows, so you pay up to 40% less than traditional accounting fees.
        </p>

        {/* CTA Button */}
        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <Button variant="hero" className="text-lg font-bold" asChild>
            <a href="https://cal.com/klaras/30min" target="_blank" rel="noopener noreferrer">
              Book a Demo
            </a>
          </Button>
        </div>

        {/* Bottom trust line */}
        <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-base text-text-muted font-medium">
            Already serving 12+ startups
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;