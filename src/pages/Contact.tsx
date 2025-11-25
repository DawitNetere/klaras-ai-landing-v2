import { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Mail, Calendar, Wrench, Loader2, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Email submitted:", email);
    setIsLoading(false);
    setIsSubmitted(true);
    setEmail("");
  };

  const contactBlocks = [
    {
      icon: Mail,
      title: "General Inquiries",
      email: "info@claras.ai",
      description: "For general questions, media, and partnership inquiries.",
    },
    {
      icon: Calendar,
      title: "Sales & Demos",
      email: "sales@claras.ai",
      description: "For pricing, demos, and integration questions.",
    },
    {
      icon: Wrench,
      title: "Customer Support",
      email: "support@claras.ai",
      description: "For existing customers needing technical assistance.",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Page Header */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-text-primary mb-6">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            We'd love to hear from you and help put your accounting on autopilot.
          </p>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Column 1: Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-3">
                Contact Information
              </h2>
              <p className="text-text-secondary mb-10">
                Choose the best way to reach us.
              </p>

              <div className="space-y-8">
                {contactBlocks.map((block, index) => (
                  <div
                    key={index}
                    className="flex gap-5 p-6 bg-white rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <block.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary mb-1">
                        {block.title}
                      </h3>
                      <a
                        href={`mailto:${block.email}`}
                        className="text-primary hover:underline font-medium"
                      >
                        {block.email}
                      </a>
                      <p className="text-text-secondary text-sm mt-2">
                        {block.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Schedule a Demo */}
            <div id="book-call">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-3">
                Talk to an Accountant
              </h2>
              <div className="mb-6">
                <h3 className="font-semibold text-text-primary">
                  30 Minute Discovery Call
                </h3>
                <p className="text-text-secondary text-sm mt-1">
                  Book a time with our accounting team to see how Claras AI can put your accounting on autopilot.
                </p>
              </div>

              {/* Cal.com Embed */}
              <div className="bg-white rounded-xl border border-border/50 shadow-sm overflow-hidden">
                <Cal
                  namespace="30min"
                  calLink="claras-ai/30min"
                  style={{ width: "100%", height: "500px", overflow: "scroll" }}
                  config={{ layout: "month_view" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Ready to automate your accounting?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join the businesses running their accounting on autopilot with AI + expert accountants.
          </p>
          <div className="max-w-md mx-auto">
            {isSubmitted ? (
              <div className="flex items-center justify-center gap-2 py-3 text-green-700 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Thanks! We'll be in touch soon.</span>
              </div>
            ) : (
              <form onSubmit={handleEmailSubmit} className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 text-base bg-white focus:ring-2 focus:ring-white/20 focus:border-white transition-all"
                  required
                  disabled={isLoading}
                />
                <Button 
                  type="submit" 
                  className="px-6 py-3 bg-white text-primary hover:bg-white/95 font-semibold min-w-[120px]"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    "Get Started"
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
