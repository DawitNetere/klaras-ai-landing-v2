import { DollarSign, Clock, Zap } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: DollarSign,
      title: "Overpriced",
      description: "Legacy firms still charge like it's 1999. You're paying thousands for tasks that can be 60% automated."
    },
    {
      icon: Zap,
      title: "Behind the times",
      description: "AI is transforming every industry. Yet accounting is still done the old way: manual, slow, and expensive."
    },
    {
      icon: Clock,
      title: "Time-sucking",
      description: "Founders waste hours every month chasing receipts, sorting transactions, and emailing accountants."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-50/50">
      <div className="container mx-auto px-8 md:px-12 max-w-7xl">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-8 leading-tight">
            Why today's accounting <span className="text-red-500 underline">doesn't work</span> for founders:
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center animate-scale-in border border-gray-100"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <problem.icon className="w-8 h-8 text-red-500" strokeWidth={1.5} />
                </div>
              </div>
              
              <h3 className="text-2xl font-display font-bold text-text-primary mb-4">
                {problem.title}
              </h3>
              
              <p className="text-base text-text-secondary leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;