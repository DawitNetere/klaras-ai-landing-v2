import { Database, CreditCard, Users, Building, Banknote, Settings, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const IntegrationsSection = () => {
  const integrations = [
    { name: "QuickBooks", icon: Database },
    { name: "Xero", icon: Database },
    { name: "Odoo", icon: Settings },
    { name: "ERPs", icon: Building },
    { name: "Payroll", icon: Users },
    { name: "Banking", icon: Banknote }
  ];

  return (
    <section className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-8 md:px-12 max-w-6xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-8 leading-tight">
            Works with your existing systems
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto">
            Skip the migration. We plug directly into your stack.
          </p>
        </div>

        {/* Horizontal scrolling integrations */}
        <div className="relative mb-16">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide justify-center flex-wrap">
            {integrations.map((integration, index) => {
              const IntegrationIcon = integration.icon;
              return (
                <div 
                  key={index}
                  className="flex-shrink-0 flex items-center gap-3 px-6 py-4 bg-white rounded-full shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/30 transition-all duration-300"
                >
                  <IntegrationIcon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  <span className="font-medium text-text-primary whitespace-nowrap">{integration.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Simple flow diagram */}
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 md:gap-8">
            {/* Your Systems */}
            <div className="flex-1 text-center">
              <div className="bg-gray-100 rounded-2xl p-6 md:p-8">
                <Building className="w-10 h-10 text-gray-600 mx-auto mb-3" />
                <h4 className="font-semibold text-text-primary text-sm md:text-base">Your Systems</h4>
              </div>
            </div>

            <ArrowRight className="w-6 h-6 text-gray-400 flex-shrink-0" />

            {/* Claras AI */}
            <div className="flex-1 text-center">
              <div className="bg-gradient-to-br from-primary to-primary-hover rounded-2xl p-6 md:p-8 text-white">
                <Settings className="w-10 h-10 mx-auto mb-3" />
                <h4 className="font-semibold text-sm md:text-base">Claras AI</h4>
              </div>
            </div>

            <ArrowRight className="w-6 h-6 text-gray-400 flex-shrink-0" />

            {/* Results */}
            <div className="flex-1 text-center">
              <div className="bg-success/10 rounded-2xl p-6 md:p-8">
                <CreditCard className="w-10 h-10 text-success mx-auto mb-3" />
                <h4 className="font-semibold text-text-primary text-sm md:text-base">Clean Books</h4>
              </div>
            </div>
          </div>
          
          <p className="text-center text-text-secondary mt-8 mb-8">
            Your data stays where it lives. We automate around it.
          </p>
          
          {/* Mid-page CTA */}
          <div className="text-center">
            <Button 
              variant="outline"
              className="px-8 py-6 text-base font-semibold"
              asChild
            >
              <Link to="/contact">
                Check your integrations
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
