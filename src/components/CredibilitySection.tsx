import { CheckCircle, Award, Users } from "lucide-react";

const CredibilitySection = () => {
  const credentials = [
    {
      icon: Award,
      text: "Backed by Google for Startups"
    },
    {
      icon: CheckCircle,
      text: "Built by certified accountants with 15+ years of experience"
    },
    {
      icon: Users,
      text: "Already supporting 12+ founders and startups"
    }
  ];

  return (
    <section className="py-24 bg-background border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {credentials.map((credential, index) => (
              <div 
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-6">
                  <credential.icon className="w-10 h-10 text-success mx-auto" strokeWidth={1.5} />
                </div>
                <p className="text-lg text-text-primary font-medium leading-relaxed">
                  {credential.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;