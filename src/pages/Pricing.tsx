import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, X, ChevronDown, ChevronUp } from "lucide-react";

const Pricing = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stats = [
    { value: "50%", label: "Pay less while getting a top notch service" },
    { value: "30 min", label: "Setup time" },
    { value: "<5 min", label: "Average support response time" },
  ];

  const features = [
    "AI-powered bookkeeping & categorization",
    "Real-time financial dashboards",
    "Unlimited bank & wallet connections",
    "Dedicated in-house accountant",
    "Automated invoice processing",
    "Mobile access (iOS/Android)",
    "Enterprise-grade security (AES-256, GDPR compliant)",
    "Unlimited users & team seats",
    "Tax-ready monthly and annual reports",
  ];

  const comparisonData = [
    { feature: "Setup time", claras: "30 minutes", traditional: "2–4 weeks" },
    { feature: "Availability", claras: "24/7 access", traditional: "Business hours only" },
    { feature: "Real-time updates", claras: "Instant", traditional: "Delayed / manual" },
    { feature: "Contracts", claras: "Month-to-month", traditional: "Long-term commitments" },
    { feature: "AI automation", claras: true, traditional: false },
    { feature: "Support", claras: "Unlimited", traditional: "Extra fees" },
    { feature: "Mobile app", claras: true, traditional: false },
    { feature: "Pricing", claras: "Transparent", traditional: "Often unclear" },
  ];

  const testimonials = [
    {
      quote: "We cut bookkeeping time from hours to minutes. Claras AI is the only accounting service that actually feels modern.",
      name: "dr Maciej Chrzanowski",
      title: "Founder - maciejchrzanowski.com",
    },
    {
      quote: "We saved thousands switching from our old firm.",
      name: "Kanishk Jagwani",
      title: "CEO - AIZEN Automation",
    },
    {
      quote: "Everything is included. No surprise fees, no upsells. Just clean, automated accounting.",
      name: "Efe Berke",
      title: "Founder - Adgrow",
    },
    {
      quote: "We migrated in under 30 minutes. The team and the product are incredibly fast.",
      name: "Szymon Milas",
      title: "Founder - HAIP",
    },
  ];

  const faqs = [
    {
      question: "Is there really no setup fee?",
      answer: "Correct — setup is 100% free. You pay only for your monthly plan. We earn your business through quality, not onboarding fees.",
    },
    {
      question: "What happens if I exceed my transaction limit?",
      answer: "We'll notify you before reaching your limit. You can upgrade or pay a small per-transaction overage.",
    },
    {
      question: "Do you offer annual discounts?",
      answer: "Yes — 2 months free when paid yearly.",
    },
    {
      question: "Can I change plans anytime?",
      answer: "Absolutely. Upgrade or downgrade whenever you want.",
    },
    {
      question: "Does Claras AI include tax filing?",
      answer: "Yes. Tax prep is available as an add-on or included in higher plans.",
    },
    {
      question: "What if I need to cancel?",
      answer: "You can cancel instantly at any time. No penalties.",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 to-secondary/20">
        <div className="container mx-auto px-8 md:px-12 max-w-6xl text-center">
          <p className="text-primary font-semibold mb-4 tracking-wide uppercase">Transparent Pricing</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-text-primary mb-6 leading-tight">
            Accounting automation that scales with your business
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-4">
            Simple, predictable, and built for growing companies.
          </p>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            No long-term contracts. No hidden fees. No surprises.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-border/30">
        <div className="container mx-auto px-8 md:px-12 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-text-primary text-center mb-12">
            Why businesses choose Claras AI
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-5xl md:text-6xl font-display font-bold text-primary mb-3">
                  {stat.value}
                </div>
                <p className="text-text-secondary">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-8 md:px-12 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary text-center mb-4">
            Everything included. No upsells. No feature gating.
          </h2>
          <div className="mt-12 grid md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-white rounded-lg border border-border/50"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-text-primary">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8 md:px-12 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary text-center mb-4">
            Why pay 5× more for less?
          </h2>
          <p className="text-text-secondary text-center mb-12">
            A side-by-side comparison with traditional accounting firms
          </p>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-100 p-4 font-semibold text-text-primary">
              <div>Feature</div>
              <div className="text-center text-primary">Claras AI</div>
              <div className="text-center">Traditional Firms</div>
            </div>
            {comparisonData.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 p-4 items-center ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <div className="text-text-primary font-medium">{row.feature}</div>
                <div className="text-center">
                  {typeof row.claras === "boolean" ? (
                    row.claras ? (
                      <Check className="w-5 h-5 text-green-600 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                    )
                  ) : (
                    <span className="text-primary font-medium">{row.claras}</span>
                  )}
                </div>
                <div className="text-center">
                  {typeof row.traditional === "boolean" ? (
                    row.traditional ? (
                      <Check className="w-5 h-5 text-green-600 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                    )
                  ) : (
                    <span className="text-text-secondary">{row.traditional}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-8 md:px-12 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary text-center mb-12">
            Real savings from real businesses
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-border/50"
              >
                <p className="text-text-secondary italic mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary text-sm">— {testimonial.name}</p>
                    <p className="text-text-secondary text-xs">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8 md:px-12 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-text-secondary text-center mb-12">
            Everything you need to know about our pricing.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-border/50 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-semibold text-text-primary">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-text-secondary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-text-secondary flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 text-text-secondary">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-text-secondary mb-2">Still have questions?</p>
            <p className="text-text-primary">
              Contact our support team:{" "}
              <a href="mailto:support@claras.ai" className="text-primary hover:underline">
                support@claras.ai
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-8 md:px-12 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Ready to reduce your accounting costs by up to 50%?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join the businesses running their accounting on autopilot with AI + expert accountants.
          </p>
          <Button
            size="lg"
            className="text-lg font-bold px-8 py-6 bg-white text-primary hover:bg-white/95"
            asChild
          >
            <a href="https://cal.com/claras-ai/30min" target="_blank" rel="noopener noreferrer">
              Get Started →
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Pricing;
