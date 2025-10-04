import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import dawitHeadshot from "@/assets/Dawit N.png";
import pawelHeadshot from "@/assets/Pawel J.png";
import agnieszkHeadshot from "@/assets/Agnieszka J.jpg";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Dawit Netere",
      role: "CEO & Founder",
      image: dawitHeadshot,
      description: "Firsthand experience with the problem: faced a $4k fine for messy books. This is a personal mission.",
      expertise: "Entrepreneurship, Product Strategy, Founder Experience"
    },
    {
      name: "Pawel Janda",
      role: "CTO & Co-Founder",
      image: pawelHeadshot,
      description: "14 years of building software, built an open source AI architecture at a previous company.",
      expertise: "AI Architecture, Software Engineering, Technical Leadership"
    },
    {
      name: "Agnieszka T",
      role: "Accounting Partner",
      image: agnieszkHeadshot,
      description: "15+ years as a certified accountant. Our expert assurance and compliance partner.",
      expertise: "Certified Accounting, Compliance, Financial Reporting"
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-8 md:px-12 lg:px-16 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-text-primary mb-6 leading-tight animate-fade-in-up">
            Meet the team behind <span className="text-primary">Klaras AI</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            We're a passionate team of founders, engineers, and accounting experts on a mission to revolutionize bookkeeping with AI automation and human expertise.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-8 md:px-12 lg:px-16 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-6">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              We believe every founder deserves accurate, affordable accounting without the stress. 
              After experiencing the pain of messy books firsthand, we're building the future of 
              bookkeeping where <span className="text-primary font-semibold">AI automation meets expert oversight </span> 
              to deliver 60% efficiency gains and 40% cost savings.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-6">
              Our Team
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              A unique combination of entrepreneurial experience, technical expertise, and accounting mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name}
                className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.role} at Klaras AI`}
                      className="w-32 h-32 rounded-full mx-auto object-cover shadow-medium"
                    />
                  </div>
                  
                  <h3 className="text-xl font-display font-bold text-text-primary mb-2">
                    {member.name}
                  </h3>
                  
                  <p className="text-primary font-semibold mb-4">
                    {member.role}
                  </p>
                  
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {member.description}
                  </p>
                  
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-text-muted font-medium">
                      {member.expertise}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-8 md:px-12 lg:px-16 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-6">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-text-primary mb-4">
                Founder-First
              </h3>
              <p className="text-text-secondary">
                Built by founders, for founders. We understand the unique challenges of startup accounting.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-text-primary mb-4">
                Accuracy First
              </h3>
              <p className="text-text-secondary">
                AI automation paired with expert oversight ensures your books are always accurate and compliant.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-text-primary mb-4">
                Transparent Pricing
              </h3>
              <p className="text-text-secondary">
                No hidden fees, no surprises. Save up to 40% with our AI-powered efficiency gains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-primary">
        <div className="container mx-auto px-8 md:px-12 lg:px-16 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Ready to experience the future of accounting?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of founders who trust Klaras AI for accurate, affordable bookkeeping.
          </p>
          <Button 
            variant="secondary" 
            className="text-lg font-bold px-8 py-4 bg-white text-primary hover:bg-white/95" 
            asChild
          >
            <a href="https://cal.com/klaras/30min" target="_blank" rel="noopener noreferrer">
              Book a Demo
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutUs;
