import { CheckCircle, Award, Users, Badge } from "lucide-react";
import googleForStartupsLogo from "@/assets/Google_for_Startups_logo.svg";

const CredibilitySection = () => {
  const credentials = [
    {
      icon: Award,
      isGoogleBadge: true,
      text: null
    },
    {
      icon: CheckCircle,
      text: "Built alongside certified accountants with 15+ years of experience"
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
                {credential.isGoogleBadge ? (
                  <>
                    <div className="mb-6">
                      <credential.icon className="w-10 h-10 text-success mx-auto" strokeWidth={1.5} />
                    </div>
                    <div className="flex justify-center">
                      <div className="bg-success/10 text-text-primary border border-success/30 px-6 py-3 rounded-full text-sm font-medium flex items-center gap-4">
                        Backed by
                        <img src={googleForStartupsLogo} alt="Google for Startups logo - Klaras AI is backed by Google for Startups" className="h-4 scale-110" />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mb-6">
                      <credential.icon className="w-10 h-10 text-success mx-auto" strokeWidth={1.5} />
                    </div>
                    <p className="text-lg text-text-primary font-medium leading-relaxed">
                      {credential.text}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;