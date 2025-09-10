import { Plug, Cog, UserCheck } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Plug,
      title: "Connect your accounts",
      description: "Klaras syncs transactions in real time."
    },
    {
      icon: Cog,
      title: "Automation kicks in",
      description: "60% of bookkeeping handled by AI agents."
    },
    {
      icon: UserCheck,
      title: "Expert sign-off",
      description: "A senior accountant reviews, approves, and closes your books."
    }
  ];

  return (
    <section id="how-it-works" className="py-32 bg-background border-t border-border/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-8 leading-tight">
            How It Works
          </h2>
          <p className="text-xl text-text-secondary font-sans">
            Three simple steps to automated bookkeeping
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-16 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-8">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-6">
                  {index + 1}
                </div>
                <step.icon className="w-12 h-12 text-primary mx-auto" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl font-display font-bold text-text-primary mb-6">
                {step.title}
              </h3>
              
              <p className="text-lg text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;