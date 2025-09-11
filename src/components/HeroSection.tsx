import { Button } from "@/components/ui/button";
import dashboardMockup from "@/assets/dashboard-mockup.jpg";
import googleForStartupsLogo from "@/assets/Google_for_Startups_logo.svg";

const HeroSection = () => {
  return (
    <section className="relative pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-24 lg:pb-32 bg-background">
      <div className="container mx-auto px-8 md:px-12 lg:px-16 text-center max-w-6xl">
        {/* Social proof badge */}
        <div className="flex justify-center mb-8 md:mb-10 animate-fade-in-up">
          <div className="bg-success/10 text-success border border-success/30 px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2">
            Backed by
            <img src={googleForStartupsLogo} alt="Google for Startups" className="h-4" />
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-text-primary mb-8 md:mb-10 leading-tight animate-fade-in-up px-4 md:px-8" style={{ animationDelay: '0.1s' }}>
          AI bookkeeping for founders <span className="text-primary">automated by AI agents</span>, signed off by <span className="text-success">expert accountants</span>.
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl lg:text-2xl text-text-secondary mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up px-4 md:px-6" style={{ animationDelay: '0.2s' }}>
          We automate 60% of accounting workflows, so you pay up to 40% less than traditional accounting fees.
        </p>

        {/* CTA Button */}
        <div className="mb-12 md:mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <Button variant="hero" className="text-lg md:text-xl font-bold px-8 md:px-10 py-4 md:py-5" asChild>
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