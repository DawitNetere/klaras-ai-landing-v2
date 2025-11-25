import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Loader2, CheckCircle } from "lucide-react";

const testimonials = [
  { quote: "We cut bookkeeping time from hours to minutes. Claras AI is the only accounting service that actually feels modern.", author: "dr Maciej Chrzanowski", title: "Founder - maciejchrzanowski.com" },
  { quote: "We saved thousands switching from our old firm.", author: "Kanishk Jagwani", title: "CEO - AIZEN Automation" },
  { quote: "Everything is included. No surprise fees, no upsells. Just clean, automated accounting.", author: "Efe Berke", title: "Founder - Adgrow" },
  { quote: "We migrated in under 30 minutes. The team and the product are incredibly fast.", author: "Szymon Milas", title: "Founder - HAIP" }
];

const FinalCTASection = () => {
  const [email, setEmail] = useState("");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const formData = new FormData();
      formData.append("form-name", "cta-email-capture");
      formData.append("email", email);
      
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      
      setIsSubmitted(true);
      setEmail("");
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary to-primary-hover text-white">
      <div className="container mx-auto px-8 md:px-12 max-w-4xl text-center">
        <div className="animate-fade-in-up">
          {/* Testimonial carousel */}
          <div className="mb-12 max-w-2xl mx-auto">
            <div className="relative h-[100px] overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-500 ease-out ${
                    index === currentTestimonial 
                      ? 'opacity-100 translate-y-0' 
                      : index < currentTestimonial || (currentTestimonial === 0 && index === testimonials.length - 1)
                        ? 'opacity-0 -translate-y-full'
                        : 'opacity-0 translate-y-full'
                  }`}
                >
                  <p className="text-lg md:text-xl italic opacity-90 mb-4">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-sm opacity-70">— {testimonial.author}, {testimonial.title}</p>
                </div>
              ))}
            </div>
            
            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-white w-6' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 leading-tight">
            Ready to put your accounting on autopilot?
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto">
            Join the businesses saving time and money with AI + expert accountants.
          </p>

          {/* Email capture form */}
          <div className="mb-8 max-w-md mx-auto">
            {isSubmitted ? (
              <div className="flex items-center justify-center gap-2 py-3 text-white bg-white/20 rounded-lg border border-white/30">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Thanks! We'll be in touch soon.</span>
              </div>
            ) : (
              <form 
                name="cta-email-capture" 
                method="POST" 
                data-netlify="true"
                onSubmit={handleEmailSubmit} 
                className="flex gap-3"
              >
                <input type="hidden" name="form-name" value="cta-email-capture" />
                <Input
                  type="email"
                  name="email"
                  placeholder="Work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 text-base bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:bg-white/20"
                  required
                  disabled={isLoading}
                />
                <Button 
                  type="submit" 
                  className="px-6 py-3 bg-white text-primary hover:bg-white/90 font-semibold min-w-[120px]"
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

          {/* Secondary CTA */}
          <div>
            <Button 
              variant="outline" 
              className="text-base font-medium px-6 py-3"
              asChild
            >
              <Link to="/contact#book-call">
                Talk to an Accountant
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
