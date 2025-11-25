import { FileText, Search, Shield, CheckCircle, Clock, Zap, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const AUTOMATION_STEPS = [
  { icon: FileText, text: "Extracts data from PDFs", time: "5s" },
  { icon: Search, text: "Verifies against vendor and contract records", time: "3s" },
  { icon: Shield, text: "Checks budget limits", time: "2s" },
  { icon: ArrowRight, text: "Routes for approval", time: "1s" },
  { icon: CheckCircle, text: "Posts into your accounting system", time: "2s" },
  { icon: Clock, text: "Schedules payment when appropriate", time: "1s" }
];

const InvoiceAutomationSection = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < AUTOMATION_STEPS.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        // Reset animation after completion
        setTimeout(() => setCurrentStep(0), 2000);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [currentStep]);

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-8 md:px-12 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-8 leading-tight">
            INVOICE AUTOMATION
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Invoices processed automatically — <span className="text-primary font-semibold">from inbox to accounted</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Automation Process */}
          <div className="bg-white rounded-2xl p-8 shadow-large border border-gray-100 overflow-hidden">
            <h3 className="text-xl font-display font-bold text-text-primary mb-6">
              Our system:
            </h3>
            
            {/* Fixed height container to prevent layout shift during animation */}
            <div className="space-y-4 min-h-[380px]">
              {AUTOMATION_STEPS.map((step, index) => {
                const StepIcon = step.icon;
                const isActive = index <= currentStep;
                const isCurrent = index === currentStep;
                
                return (
                  <div 
                    key={index}
                    className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-500 ${
                      isActive 
                        ? isCurrent 
                          ? 'bg-primary/10 border-l-4 border-primary' 
                          : 'bg-success/5 border-l-4 border-success'
                        : 'opacity-30'
                    }`}
                  >
                    <div className={`p-2 rounded-full ${
                      isActive 
                        ? isCurrent 
                          ? 'bg-primary text-white' 
                          : 'bg-success text-white'
                        : 'bg-gray-200 text-gray-400'
                    }`}>
                      {isActive && !isCurrent ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        <StepIcon className="w-4 h-4" />
                      )}
                    </div>
                    <div className="flex-1">
                      <span className={`text-sm font-medium ${
                        isActive ? 'text-text-primary' : 'text-text-secondary'
                      }`}>
                        {step.text}
                      </span>
                    </div>
                    <div className={`text-xs px-2 py-1 rounded ${
                      isActive 
                        ? 'bg-primary/20 text-primary' 
                        : 'bg-gray-100 text-gray-400'
                    }`}>
                      {step.time}
                    </div>
                    {isCurrent && (
                      <div className="ml-2">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Time Comparison */}
          <div className="space-y-8">
            <div className="animate-fade-in-up">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-6">
                What used to take 15 minutes now takes <span className="text-primary">30 seconds</span>.
              </h3>
              
              <div className="space-y-6">
                {/* Before */}
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <Clock className="w-4 h-4 text-red-600" />
                    </div>
                    <h4 className="font-semibold text-red-900">Manual Process</h4>
                  </div>
                  <div className="text-red-800 space-y-2 text-sm">
                    <p>• Download and open PDF</p>
                    <p>• Manually extract data</p>
                    <p>• Look up vendor information</p>
                    <p>• Check approval requirements</p>
                    <p>• Enter into accounting system</p>
                    <p>• Set up payment scheduling</p>
                  </div>
                  <div className="mt-4 text-red-900 font-bold">⏱️ 15+ minutes per invoice</div>
                </div>

                {/* After */}
                <div className="bg-success/10 border border-success/30 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center">
                      <Zap className="w-4 h-4 text-success" />
                    </div>
                    <h4 className="font-semibold text-success">Automated Process</h4>
                  </div>
                  <div className="text-success space-y-2 text-sm">
                    <p>• AI extracts all data automatically</p>
                    <p>• Instant vendor verification</p>
                    <p>• Automatic approval routing</p>
                    <p>• Direct system integration</p>
                    <p>• Smart payment scheduling</p>
                  </div>
                  <div className="mt-4 text-success font-bold">⚡ 30 seconds per invoice</div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-medium">
                <div className="text-3xl font-bold text-primary mb-2">97%</div>
                <div className="text-sm text-text-secondary">Time Saved</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-medium">
                <div className="text-3xl font-bold text-success mb-2">99.9%</div>
                <div className="text-sm text-text-secondary">Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvoiceAutomationSection;
