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
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-8 leading-tight">
            Why today's accounting <span className="text-red-500 underline">doesn't work</span> for founders:
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-8">
                <problem.icon className="w-12 h-12 text-red-500 mx-auto" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl font-display font-bold text-text-primary mb-6">
                {problem.title}
              </h3>
              
              <p className="text-lg text-text-secondary leading-relaxed">
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