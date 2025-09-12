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
    <section className="py-20 md:py-32 bg-background border-t border-border/30">
      <div className="container mx-auto px-8 md:px-12 max-w-6xl">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-8 leading-tight">
            Meet <span className="text-primary">Klaras AI</span> — your bookkeeper powered by{" "}
            <span className="text-primary">AI agents</span>, verified by experts.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-6 mb-16 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                </div>
                <p className="text-lg text-text-primary leading-relaxed pt-2">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
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

export default SolutionSection;