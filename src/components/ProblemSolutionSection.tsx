import { AlertCircle, Clock, TrendingDown, Zap, Shield, CheckCircle } from "lucide-react";

const ProblemSolutionSection = () => {
  const problems = [
    {
      icon: Clock,
      title: "Manual bookkeeping",
      description: "Hours spent on repetitive data entry and categorization"
    },
    {
      icon: TrendingDown,
      title: "Delayed reporting",
      description: "Waiting weeks for financial insights when you need them now"
    },
    {
      icon: AlertCircle,
      title: "Slow invoice processing",
      description: "Bottlenecks in accounts payable slow down operations"
    },
    {
      icon: AlertCircle,
      title: "Messy tax preparation",
      description: "Scrambling to organize records during tax season"
    }
  ];

  const solutions = [
    {
      icon: Zap,
      title: "The speed of automation",
      description: "AI handles repetitive work in seconds, not hours"
    },
    {
      icon: Shield,
      title: "The confidence of human review",
      description: "Expert accountants ensure accuracy and compliance"
    },
    {
      icon: CheckCircle,
      title: "Complete integration",
      description: "Works with your existing tools and workflows"
    }
  ];

  return (
    <>
      {/* Problem Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-8 md:px-12 max-w-6xl">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-8 leading-tight">
              Traditional accounting firms are slow and expensive.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {problems.map((problem, index) => {
              const ProblemIcon = problem.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-medium hover:shadow-large transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4">
                    <ProblemIcon className="w-8 h-8 text-red-500" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-display font-bold text-text-primary mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center space-y-6 animate-fade-in-up">
            <div className="space-y-2">
              <p className="text-xl text-primary font-bold">You need an accounting service that's fast, accurate, and trustworthy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-gradient-to-br from-primary/5 to-success/10 py-20 md:py-32">
        <div className="container mx-auto px-8 md:px-12 max-w-6xl">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-8 leading-tight">
              Here is a better way to handle your accounting needs
            </h2>
            <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
              A complete, modern accounting department — <span className="text-primary font-semibold">AI-powered</span> and <span className="text-success font-semibold">expert-verified</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-8">
              <div className="animate-fade-in-up">
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  Our AI handles the repetitive, time-consuming work like categorization, reconciliation, 
                  invoice capture, and reporting.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  Our accountants ensure everything is accurate, compliant, and ready for tax season.
                </p>
              </div>
            </div>

            <div className="grid gap-6">
              {solutions.map((solution, index) => {
                const SolutionIcon = solution.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-medium hover:shadow-large transition-all duration-300 animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <SolutionIcon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-lg font-display font-bold text-text-primary mb-2">
                          {solution.title}
                        </h3>
                        <p className="text-text-secondary leading-relaxed">
                          {solution.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProblemSolutionSection;
