import { Shield, Lock, Database, Headphones, CheckCircle, UserCheck, Brain, DollarSign, Zap } from "lucide-react";

const TrustSecuritySection = () => {
  const trustFactors = [
    { 
      icon: UserCheck, 
      title: "Licensed accountants review every close",
      description: "CPAs and experienced accountants ensure accuracy"
    },
    { 
      icon: Brain, 
      title: "AI built for accounting workflows",
      description: "Purpose-built technology, not generic automation"
    },
    { 
      icon: DollarSign, 
      title: "Transparent, predictable pricing",
      description: "No hidden fees, clear pricing that scales"
    },
    { 
      icon: Zap, 
      title: "Fast onboarding & dedicated support",
      description: "Get running quickly with personalized help"
    }
  ];

  const securityFeatures = [
    { icon: Lock, text: "AES-256 encryption" },
    { icon: Database, text: "Daily backups" },
    { icon: Shield, text: "SOC 2 compliant" },
    { icon: Headphones, text: "24/7 support" }
  ];

  const stats = [
    { value: "15+", label: "Years avg. expert experience" },
    { value: "30 min", label: "Avg. onboarding" },
    { value: "100%", label: "Compliant" }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-8 md:px-12 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
            Why businesses trust us
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Modern automation without sacrificing <span className="text-primary font-semibold">accuracy</span> or <span className="text-success font-semibold">security</span>
          </p>
        </div>

        {/* Trust factors - 2x2 grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {trustFactors.map((factor, index) => {
            const FactorIcon = factor.icon;
            return (
              <div 
                key={index}
                className="flex items-start gap-5 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="p-3 bg-primary/20 rounded-xl">
                  <FactorIcon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-white mb-2">
                    {factor.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {factor.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white/5 rounded-xl border border-white/10 min-w-[160px] flex-1 max-w-[220px]">
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Security features - horizontal strip */}
        <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
          <h3 className="text-xl font-display font-bold text-white mb-6 text-center">
            Enterprise-grade security
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <div key={index} className="flex items-center gap-3">
                  <div className="p-2 bg-success/20 rounded-lg">
                    <FeatureIcon className="w-5 h-5 text-success" />
                  </div>
                  <span className="text-sm text-gray-300">{feature.text}</span>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-center gap-2 mt-6 pt-6 border-t border-white/10">
            <CheckCircle className="w-5 h-5 text-success" />
            <span className="text-gray-300">Bank-level security standards for your financial data</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSecuritySection;
