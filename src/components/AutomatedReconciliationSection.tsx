import { Download, RefreshCw, CheckCircle, AlertTriangle, FileText, Clock, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const RECONCILIATION_STEPS = [
  { icon: Download, text: "Fetches bank statements", time: "2min" },
  { icon: RefreshCw, text: "Imports transaction feeds", time: "1min" },
  { icon: CheckCircle, text: "Matches entries with 99%+ accuracy", time: "3min" },
  { icon: AlertTriangle, text: "Detects duplicates & anomalies", time: "1min" },
  { icon: Clock, text: "Highlights timing differences", time: "30s" },
  { icon: FileText, text: "Generates reconciliation reports", time: "30s" }
];

const AutomatedReconciliationSection = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < RECONCILIATION_STEPS.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        // Reset animation after completion
        setTimeout(() => setCurrentStep(0), 3000);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentStep]);

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-8 md:px-12 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-8 leading-tight">
            AUTOMATED RECONCILIATION
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Reconcile your books in <span className="text-primary font-semibold">minutes, not days</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Reconciliation Process */}
          <div className="bg-white rounded-2xl p-8 shadow-large border border-gray-100 overflow-hidden">
            <h3 className="text-xl font-display font-bold text-text-primary mb-6">
              Our AI:
            </h3>
            
            {/* Fixed height container to prevent layout shift during animation */}
            <div className="space-y-4 min-h-[380px]">
              {RECONCILIATION_STEPS.map((step, index) => {
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

            <div className="mt-6 p-4 bg-success/10 rounded-lg">
              <div className="text-center">
                <div className="text-lg font-bold text-success mb-1">Total Time: ~8 minutes</div>
                <div className="text-sm text-success">vs 3+ days manual process</div>
              </div>
            </div>
          </div>

          {/* Time Comparison & Benefits */}
          <div className="space-y-8">
            <div className="animate-fade-in-up">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-6">
                Month-end close goes from <span className="text-red-500">3 days</span> → <span className="text-primary">3 hours</span>.
              </h3>
              
              <div className="space-y-6">
                {/* Before */}
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <Clock className="w-4 h-4 text-red-600" />
                    </div>
                    <h4 className="font-semibold text-red-900">Manual Reconciliation</h4>
                  </div>
                  <div className="text-red-800 space-y-2 text-sm">
                    <p>• Download bank statements manually</p>
                    <p>• Export transaction data from systems</p>
                    <p>• Line-by-line matching in spreadsheets</p>
                    <p>• Hunt for discrepancies and errors</p>
                    <p>• Create reconciliation reports</p>
                    <p>• Review and approve manually</p>
                  </div>
                  <div className="mt-4 text-red-900 font-bold">⏱️ 3+ days per month</div>
                </div>

                {/* After */}
                <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <Zap className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="font-semibold text-primary">Automated Reconciliation</h4>
                  </div>
                  <div className="text-primary space-y-2 text-sm">
                    <p>• Automatic bank feed integration</p>
                    <p>• AI-powered transaction matching</p>
                    <p>• Instant discrepancy detection</p>
                    <p>• Automated report generation</p>
                    <p>• Expert accountant review</p>
                  </div>
                  <div className="mt-4 text-primary font-bold">⚡ 3 hours per month</div>
                </div>
              </div>
            </div>

            {/* Accuracy Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-medium">
                <div className="text-3xl font-bold text-success mb-2">99.2%</div>
                <div className="text-sm text-text-secondary">Match Accuracy</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-medium">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-text-secondary">Time Saved</div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-medium">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-text-primary font-medium">Eliminate manual errors</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-medium">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-text-primary font-medium">Close books faster</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-medium">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-text-primary font-medium">Real-time financial visibility</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomatedReconciliationSection;
