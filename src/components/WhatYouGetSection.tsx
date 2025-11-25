import { BookOpen, Users, CreditCard, FileText, Shield, Calculator, Zap, Calendar, TrendingUp, UserCheck, CheckCircle } from "lucide-react";

const WhatYouGetSection = () => {
  const services = [
    { icon: BookOpen, text: "Monthly bookkeeping" },
    { icon: Users, text: "Payroll processing" },
    { icon: CreditCard, text: "Vendor payments" },
    { icon: FileText, text: "Tax preparation & filing" },
    { icon: Shield, text: "Compliance reports" },
    { icon: Calculator, text: "Financial statements" }
  ];

  const benefits = [
    { icon: Zap, text: "Automated workflows", description: "AI handles repetitive tasks 24/7" },
    { icon: Calendar, text: "Reliable month-end closes", description: "Never miss a deadline again" },
    { icon: TrendingUp, text: "Real-time financials", description: "Always know where you stand" },
    { icon: UserCheck, text: "Dedicated accountant", description: "Expert support when you need it" }
  ];

  return (
    <section id="solutions" className="py-20 md:py-32 bg-gradient-to-br from-success/5 to-primary/10">
      <div className="container mx-auto px-8 md:px-12 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-8 leading-tight">
            We handle everything, so you can focus on your business growth.
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            A complete accounting team — <span className="text-primary font-semibold">powered by AI</span>, backed by <span className="text-success font-semibold">expert accountants</span>
          </p>
        </div>

        {/* Services Grid */}
        <div className="mb-20">
          <h3 className="text-xl font-display font-semibold text-text-primary mb-8 text-center">
            We handle:
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div className="p-2.5 bg-success/10 rounded-lg">
                    <ServiceIcon className="w-5 h-5 text-success" strokeWidth={1.5} />
                  </div>
                  <span className="text-base font-medium text-text-primary">
                    {service.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits with visual */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* AI + Human Visual */}
          <div className="animate-fade-in-up order-2 lg:order-1">
            <div className="bg-white rounded-2xl p-8 shadow-large border border-gray-100">
              <div className="flex justify-center gap-6 mb-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-hover rounded-2xl flex items-center justify-center mb-3 mx-auto">
                    <Calculator className="w-10 h-10 text-white" />
                  </div>
                  <span className="text-sm font-medium text-text-secondary">AI Processing</span>
                </div>
                <div className="flex items-center text-3xl text-gray-300">+</div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-success to-green-600 rounded-2xl flex items-center justify-center mb-3 mx-auto">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <span className="text-sm font-medium text-text-secondary">Expert Review</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                  <span className="text-sm font-medium text-text-primary">Automation</span>
                  <span className="text-xs bg-primary text-white px-2 py-1 rounded">24/7</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-success/5 rounded-lg">
                  <span className="text-sm font-medium text-text-primary">Human oversight</span>
                  <span className="text-xs bg-success text-white px-2 py-1 rounded">Every transaction</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-text-primary">Your books</span>
                  <div className="flex items-center gap-1 text-success">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-xs font-medium">Always accurate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits List */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-8">
              What makes us different
            </h3>
            <div className="space-y-5">
              {benefits.map((benefit, index) => {
                const BenefitIcon = benefit.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-start gap-4"
                  >
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <BenefitIcon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-text-primary mb-1">
                        {benefit.text}
                      </h4>
                      <p className="text-text-secondary">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-primary mb-1">Tax-ready</div>
            <div className="text-sm text-text-secondary">Books organized for tax season</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-success mb-1">Compliant</div>
            <div className="text-sm text-text-secondary">Expert-verified accuracy</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-primary mb-1">Investor-ready</div>
            <div className="text-sm text-text-secondary">Professional financial statements</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
