import { Button } from "@/components/ui/button";
import { Link, Camera, Bot, UserCheck, CheckCircle } from "lucide-react";

const SolutionSection = () => {
  const features = [
    {
      icon: Link,
      text: "Connect your bank and cards → transactions flow in automatically."
    },
    {
      icon: Camera,
      text: "Snap receipts → Klaras categorizes them instantly."
    },
    {
      icon: Bot,
      text: "AI agents handle 60% of repetitive tasks."
    },
    {
      icon: UserCheck,
      text: "A certified accountant (15+ years of experience) reviews and closes your month."
    },
    {
      icon: CheckCircle,
      text: "Affordable, accurate, tax-ready — every time."
    }
  ];

  return (
    <section className="py-32 bg-background border-t border-border/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-8 leading-tight">
            Meet <span className="text-primary">Klaras AI</span> — your bookkeeper powered by{" "}
            <span className="text-primary">AI agents</span>, verified by experts.
          </h2>
        </div>

        <div className="space-y-10 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-start gap-6 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0 mt-1">
                <feature.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <p className="text-xl text-text-primary leading-relaxed">
                {feature.text}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button variant="hero" className="text-lg" asChild>
            <a href="https://cal.com/klaras/30min" target="_blank" rel="noopener noreferrer">
              Book a Demo
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;