import { Brain, Calculator, FileText, Shield, Users, AlertTriangle, Search, CheckCircle } from "lucide-react";

const AIBuiltForAccountingSection = () => {
  const aiCapabilities = [
    { icon: Calculator, text: "Accrual vs. cash basis" },
    { icon: FileText, text: "Chart of accounts" },
    { icon: Brain, text: "Journal entry logic" },
    { icon: Users, text: "Approval hierarchies" },
    { icon: Shield, text: "Vendor rules and expense codes" },
    { icon: Search, text: "Tax-relevant categorization" },
    { icon: AlertTriangle, text: "Duplicate & anomaly detection" }
  ];

  return (
    <section id="product" className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="container mx-auto px-8 md:px-12 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-8 leading-tight">
            AI BUILT SPECIFICALLY FOR ACCOUNTING
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Not generic AI — <span className="text-primary font-semibold">purpose-built for financial workflows</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* AI Capabilities */}
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-8">
              Our system understands:
            </h3>
            
            <div className="grid gap-4">
              {aiCapabilities.map((capability, index) => {
                const CapabilityIcon = capability.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-medium hover:shadow-large transition-all duration-300 animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <CapabilityIcon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <span className="text-lg font-medium text-text-primary">
                      {capability.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual representation */}
          <div className="animate-fade-in-up">
            <div className="bg-white rounded-2xl p-8 shadow-large border border-gray-100">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-hover rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-display font-bold text-text-primary mb-2">
                  Accounting-Specific AI
                </h4>
                <p className="text-text-secondary">
                  Trained on millions of financial transactions
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                  <span className="text-sm font-medium text-text-primary">Financial Logic</span>
                  <CheckCircle className="w-5 h-5 text-success" />
                </div>
                <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                  <span className="text-sm font-medium text-text-primary">Tax Compliance</span>
                  <CheckCircle className="w-5 h-5 text-success" />
                </div>
                <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                  <span className="text-sm font-medium text-text-primary">Industry Standards</span>
                  <CheckCircle className="w-5 h-5 text-success" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom emphasis */}
        <div className="text-center animate-fade-in-up">
          <div className="bg-gradient-to-r from-primary/10 to-success/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <p className="text-xl font-display font-bold text-text-primary mb-4">
              Every output is reviewed by our accounting team.
            </p>
            <p className="text-lg text-text-secondary">
              The precision of AI combined with the expertise of licensed accountants.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIBuiltForAccountingSection;
