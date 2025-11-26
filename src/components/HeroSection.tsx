import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ChevronDown, Loader2, CheckCircle } from "lucide-react";
import aizenLogo from "@/assets/testomonial logos/AIzen logo.jpeg";
import adgrowLogo from "@/assets/testomonial logos/adgrow logo.png";
import learngoLogo from "@/assets/testomonial logos/Learngo - Logo.png";
import mobitouchLogo from "@/assets/testomonial logos/mobitouch_logo_kolor_L.png";
import drMaciejLogo from "@/assets/testomonial logos/dr maciej logo.png";
import brixellsLogo from "@/assets/testomonial logos/brixells-logo-new-XdaqXzC5.png";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const formData = new FormData();
      formData.append("form-name", "hero-email-capture");
      formData.append("email", email);
      
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      
      setIsSubmitted(true);
      setEmail("");
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/30 overflow-hidden">
      {/* Subtle dot pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />
      
      <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl py-20 relative z-10">
        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-text-primary mb-8 leading-tight animate-fade-in-up">
          Full-Service AI Accounting, <span className="text-primary">Backed by Experts</span>
        </h1>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          We combine advanced AI automation with our in-house accountants to deliver fast, accurate, end-to-end accounting for modern businesses.
        </p>

        {/* Email capture form */}
        <div className="animate-fade-in-up max-w-md mx-auto" style={{ animationDelay: '0.2s' }}>
          {isSubmitted ? (
            <div className="flex items-center justify-center gap-2 py-3 text-green-600 bg-green-50 rounded-lg border border-green-200">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Thanks! We'll be in touch soon.</span>
            </div>
          ) : (
            <form 
              name="hero-email-capture" 
              method="POST" 
              data-netlify="true"
              onSubmit={handleEmailSubmit} 
              className="flex gap-3"
            >
              <input type="hidden" name="form-name" value="hero-email-capture" />
              <Input
                type="email"
                name="email"
                placeholder="Work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 text-base focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                required
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                className="px-6 py-3 bg-primary hover:bg-primary-hover text-primary-foreground font-semibold min-w-[120px]"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  "Get Started"
                )}
              </Button>
            </form>
          )}
        </div>

        {/* Client logos - Infinite scroll */}
        <div className="animate-fade-in-up mt-16 md:mt-24" style={{ animationDelay: '0.3s' }}>
          <div className="relative w-full max-w-xl mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="flex gap-16 animate-scroll">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex gap-16 shrink-0">
                  <img src={aizenLogo} alt="AIZEN" className="h-8 md:h-9 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" />
                  <img src={adgrowLogo} alt="Adgrow" className="h-8 md:h-9 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" />
                  <img src={learngoLogo} alt="LearnGo" className="h-8 md:h-9 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" />
                  <img src={mobitouchLogo} alt="Mobitouch" className="h-8 md:h-9 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" />
                  <img src={drMaciejLogo} alt="Dr Maciej" className="h-8 md:h-9 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" />
                  <img src={brixellsLogo} alt="Brixells" className="h-8 md:h-9 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-secondary/60 hover:text-text-primary transition-colors animate-bounce cursor-pointer"
        aria-label="Scroll to content"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;