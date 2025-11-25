import { BarChart3, TrendingUp, DollarSign, Users, CreditCard, Clock, Target, Eye } from "lucide-react";

const RealTimeDashboardsSection = () => {
  const metrics = [
    { icon: BarChart3, label: "P&L performance", value: "$2.4M", change: "+12%" },
    { icon: TrendingUp, label: "Cash flow trends", value: "$847K", change: "+8%" },
    { icon: DollarSign, label: "Expense breakdowns", value: "$156K", change: "-3%" },
    { icon: Users, label: "Vendor insights", value: "47", change: "+2" },
    { icon: CreditCard, label: "Payroll overview", value: "$89K", change: "+5%" },
    { icon: Clock, label: "Accounts receivable aging", value: "12 days", change: "-2" },
    { icon: Target, label: "Burn & runway metrics", value: "18 mo", change: "+3" }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="container mx-auto px-8 md:px-12 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-8 leading-tight">
            REAL-TIME FINANCIAL DASHBOARDS
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Live metrics. Instant insights. <span className="text-primary font-semibold">Complete confidence.</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Dashboard Preview */}
          <div className="animate-fade-in-up">
            <div className="bg-white rounded-2xl p-8 shadow-large border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Eye className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-lg font-display font-bold text-text-primary">
                  Financial Health Dashboard
                </h3>
                <div className="ml-auto flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  <span className="text-xs text-success font-medium">Live</span>
                </div>
              </div>

              {/* Main metrics grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-primary/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary mb-1">$2.4M</div>
                  <div className="text-xs text-text-secondary mb-1">Revenue YTD</div>
                  <div className="text-xs text-success">+12% vs last year</div>
                </div>
                <div className="bg-success/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-success mb-1">18mo</div>
                  <div className="text-xs text-text-secondary mb-1">Runway</div>
                  <div className="text-xs text-success">+3mo vs last month</div>
                </div>
              </div>

              {/* Chart visualization */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="flex items-end justify-between h-24 mb-2">
                  {[65, 45, 80, 60, 90, 75, 85, 70, 95, 80, 88, 92].map((height, i) => (
                    <div 
                      key={i}
                      className={`rounded-t transition-all duration-1000 ${
                        i < 6 ? 'bg-primary/40' : 'bg-primary'
                      }`}
                      style={{ 
                        height: `${height}%`, 
                        width: '6px',
                        minHeight: '4px',
                        animationDelay: `${i * 100}ms`
                      }}
                    ></div>
                  ))}
                </div>
                <div className="text-xs text-text-secondary text-center">
                  Monthly Cash Flow - Last 12 Months
                </div>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-gray-50 rounded p-2">
                  <div className="text-sm font-bold text-text-primary">247</div>
                  <div className="text-xs text-text-secondary">Invoices</div>
                </div>
                <div className="bg-gray-50 rounded p-2">
                  <div className="text-sm font-bold text-text-primary">12d</div>
                  <div className="text-xs text-text-secondary">Avg Collection</div>
                </div>
                <div className="bg-gray-50 rounded p-2">
                  <div className="text-sm font-bold text-text-primary">99.8%</div>
                  <div className="text-xs text-text-secondary">Accuracy</div>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics List */}
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-8">
              View all your financial health in one place:
            </h3>
            
            <div className="space-y-4">
              {metrics.map((metric, index) => {
                const MetricIcon = metric.icon;
                const isPositive = metric.change.startsWith('+');
                
                return (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-medium hover:shadow-large transition-all duration-300 animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MetricIcon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <span className="text-lg font-medium text-text-primary">
                        {metric.label}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-text-primary">
                        {metric.value}
                      </div>
                      <div className={`text-xs font-medium ${
                        isPositive ? 'text-success' : 'text-red-500'
                      }`}>
                        {metric.change}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom emphasis */}
        <div className="text-center animate-fade-in-up">
          <div className="bg-gradient-to-r from-primary/10 to-success/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <p className="text-xl font-display font-bold text-text-primary mb-4">
              Always up to date — always ready for decisions.
            </p>
            <p className="text-lg text-text-secondary">
              Real-time data synchronization means your dashboard reflects your business reality, not yesterday's numbers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealTimeDashboardsSection;
