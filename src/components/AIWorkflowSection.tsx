import { useState, useEffect, useMemo } from "react";
import { CheckCircle, Clock, Search, FileText, AlertTriangle, UserCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AIWorkflowSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const workflowSteps = useMemo(() => [
    { icon: Clock, text: "Categorizing transaction…", delay: 0 },
    { icon: Search, text: "Searched historical transactions", delay: 1000 },
    { icon: FileText, text: "Checked vendor contract & payment history", delay: 2000 },
    { icon: FileText, text: "Reviewed department budgets and expense policies", delay: 3000 },
    { icon: CheckCircle, text: "Assigned category: Infrastructure → Cloud Services", delay: 4000 },
    { icon: AlertTriangle, text: "Flagged anomaly risk: none detected", delay: 5000 },
    { icon: UserCheck, text: "Human accountant reviews & approves final entry.", delay: 6000 }
  ], []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < workflowSteps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        // Reset animation after completion
        setTimeout(() => setCurrentStep(0), 2000);
      }
    }, workflowSteps[currentStep]?.delay || 1000);

    return () => clearTimeout(timer);
  }, [currentStep, workflowSteps]);

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-secondary/20">
      <div className="container mx-auto px-8 md:px-12 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-8 leading-tight">
            AI that works like a senior bookkeeper — <span className="text-primary">in seconds</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Interactive workflow demo - carousel style */}
          <div className="bg-white rounded-2xl p-8 shadow-large border border-gray-100">
            {/* Progress indicator */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm text-text-secondary">Processing transaction...</span>
              <span className="text-sm font-medium text-primary">{currentStep + 1}/{workflowSteps.length}</span>
            </div>
            
            {/* Carousel window - shows 3 steps */}
            <div className="relative overflow-hidden h-[240px]">
              <div 
                className="absolute w-full transition-transform duration-500 ease-out"
                style={{ transform: `translateY(${80 - currentStep * 80}px)` }}
              >
                {workflowSteps.map((step, index) => {
                  const StepIcon = step.icon;
                  const isActive = index <= currentStep;
                  const isCurrent = index === currentStep;
                  
                  return (
                    <div 
                      key={index}
                      className={`flex items-center gap-4 p-4 mb-2 rounded-lg transition-all duration-300 border-l-4 ${
                        isCurrent 
                          ? 'bg-primary/10 border-primary scale-[1.02]' 
                          : isActive
                            ? 'bg-success/5 border-success'
                            : 'bg-gray-50 border-transparent opacity-40'
                      }`}
                    >
                      <div className={`p-2 rounded-full transition-colors duration-300 flex-shrink-0 ${
                        isCurrent 
                          ? 'bg-primary text-white' 
                          : isActive
                            ? 'bg-success text-white'
                            : 'bg-gray-200 text-gray-400'
                      }`}>
                        {isActive && !isCurrent ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <StepIcon className="w-5 h-5" />
                        )}
                      </div>
                      <span className={`text-sm font-medium flex-1 transition-colors duration-300 ${
                        isCurrent ? 'text-text-primary' : isActive ? 'text-text-primary' : 'text-text-secondary'
                      }`}>
                        {step.text}
                      </span>
                      {isCurrent && (
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse flex-shrink-0"></div>
                      )}
                    </div>
                  );
                })}
              </div>
              
              {/* Fade overlays for smooth edges */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white to-transparent pointer-events-none z-10"></div>
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>
            </div>

            {/* Step dots indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {workflowSteps.map((_, index) => (
                <div 
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentStep 
                      ? 'bg-primary w-6' 
                      : index < currentStep 
                        ? 'bg-success' 
                        : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="space-y-8">
            <div className="animate-fade-in-up">
              <div className="space-y-4 text-lg text-text-secondary leading-relaxed">
                <p>
                  What traditionally takes days of manual work is completed in seconds, 
                  with higher accuracy than human-only processing.
                </p>
              </div>
            </div>

            {/* Mid-page CTA */}
            <Button 
              className="w-full py-6 text-base font-semibold bg-primary hover:bg-primary-hover"
              asChild
            >
              <Link to="/contact#book-call">
                See it in action
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIWorkflowSection;
