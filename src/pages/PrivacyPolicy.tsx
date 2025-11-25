import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-8 md:px-12 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-4">
            Privacy Policy
          </h1>
          <p className="text-text-secondary mb-12">Last Updated: September 2025</p>
          
          <div className="prose prose-lg max-w-none text-text-secondary space-y-8">
            <p className="text-lg leading-relaxed">
              KlarasAI, Inc. ("KlarasAI", "Claras AI", "we", "our", or "us") provides AI-powered accounting services supported by in-house expert accountants. This Privacy Policy explains how we collect, use, store, and protect information when users ("you", "your") access our website, platform, or services.
            </p>
            <p className="text-lg leading-relaxed">
              We are committed to protecting your data and complying with all relevant privacy regulations including GDPR, CCPA, and applicable U.S. state privacy laws.
            </p>

            <div>
              <h2 className="text-2xl font-display font-bold text-text-primary mb-4">1. Who We Are</h2>
              <div className="space-y-2">
                <p>KlarasAI, Inc.</p>
                <p>131 Continental Dr Suite 305</p>
                <p>Newark, DE, 19713, USA</p>
                <p>Email: support@claras.ai</p>
                <p className="mt-4">We operate the product and service known as Claras AI.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-text-primary mb-4">2. Information We Collect</h2>
              <p className="mb-4">We collect the following categories of data:</p>
              
              <h3 className="text-xl font-semibold text-text-primary mb-2">A. Personal Information</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number (if provided)</li>
                <li>Passwords (encrypted/hashed)</li>
                <li>Billing information</li>
              </ul>

              <h3 className="text-xl font-semibold text-text-primary mb-2">B. Business & Financial Data</h3>
              <p className="mb-2">Used to deliver accounting services:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Company name</li>
                <li>Tax information</li>
                <li>Financial documents</li>
                <li>Invoices & receipts</li>
                <li>Bank transaction data (if uploaded or connected)</li>
                <li>Accounting records, payroll data, or other business documents uploaded voluntarily</li>
              </ul>

              <h3 className="text-xl font-semibold text-text-primary mb-2">C. Usage & Technical Data</h3>
              <p className="mb-2">Collected automatically:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>IP address</li>
                <li>Browser/device details</li>
                <li>Cookies and analytics data</li>
                <li>Login timestamps</li>
                <li>Platform interactions</li>
              </ul>

              <h3 className="text-xl font-semibold text-text-primary mb-2">D. AI Processing Data</h3>
              <p className="mb-2">To provide AI-assisted accounting:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Text inputs provided by users</li>
                <li>Documents processed by AI systems</li>
                <li>System-generated outputs and reports</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-text-primary mb-4">3. How We Collect Data</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Information you provide directly</li>
                <li>Documents and data uploaded to the platform</li>
                <li>Data from integrations you authorize (banks, accounting tools, etc.)</li>
                <li>Automated analytics tracking via cookies</li>
                <li>Communication with support or sales</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-text-primary mb-4">4. How We Use Your Data</h2>
              <p className="mb-2">We use information to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Provide AI-powered accounting services</li>
                <li>Generate financial reports & insights</li>
                <li>Match your account with our expert accountants</li>
                <li>Communicate with you about your account</li>
                <li>Improve and optimize our AI models</li>
                <li>Process payments and billing</li>
                <li>Ensure platform security & fraud prevention</li>
                <li>Comply with legal and regulatory obligations</li>
              </ul>
              <p className="font-semibold text-text-primary">We do not sell your data.</p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-text-primary mb-4">5. How We Share Data</h2>
              <p className="mb-2">Your data may be shared with:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Cloud hosting providers (AWS, GCP, etc.)</li>
                <li>AI model processors (e.g., OpenAI, Anthropic - with strict safeguards, no training on your data)</li>
                <li>Payment processors (Stripe)</li>
                <li>Analytics tools (e.g., internal BI, Mixpanel, Amplitude)</li>
                <li>Customer support systems</li>
                <li>Our in-house accountants and accounting staff</li>
              </ul>
              <p>All partners are bound by confidentiality and data-processing agreements.</p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-text-primary mb-4">6. Legal Basis for Processing (GDPR)</h2>
              <p className="mb-2">We process your information based on:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Performance of a contract</li>
                <li>Legitimate business interests</li>
                <li>Legal obligations (financial compliance)</li>
                <li>Consent (for cookies/marketing where required)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-text-primary mb-4">7. Data Retention</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Account and business data: retained while your account is active</li>
                <li>Backups: retained securely for disaster recovery</li>
                <li>Deleted accounts: purged within 60 days unless legally required otherwise</li>
                <li>Financial records: retained for compliance (typically 5-7 years)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-text-primary mb-4">8. Security Measures</h2>
              <p className="mb-2">We use:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Encryption in transit (TLS)</li>
                <li>Encryption at rest</li>
                <li>Role-based access control</li>
                <li>Secure credentials and multi-factor authentication internally</li>
                <li>Regular security audits</li>
              </ul>
              <p>No system is 100% risk-free, but we follow industry best practices.</p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-text-primary mb-4">9. International Data Transfers</h2>
              <p className="mb-2">Your data may be stored or processed in the U.S. or other countries. We use:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Standard Contractual Clauses (SCCs)</li>
                <li>GDPR-compliant protections</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-text-primary mb-4">10. Your Rights</h2>
              <p className="mb-2">Depending on your region, you may:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Access your data</li>
                <li>Update or correct data</li>
                <li>Request deletion</li>
                <li>Export your data</li>
                <li>Object to or restrict processing</li>
                <li>Withdraw consent for marketing</li>
              </ul>
              <p>Email <a href="mailto:support@claras.ai" className="text-primary hover:underline">support@claras.ai</a> to make a request.</p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-text-primary mb-4">11. Children's Privacy</h2>
              <p>Claras AI is not for individuals under 18. We do not knowingly collect data from minors.</p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-text-primary mb-4">12. Changes to This Policy</h2>
              <p>We may update this policy periodically. Updates will be posted on this page.</p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-text-primary mb-4">13. Contact Us</h2>
              <p>For privacy questions: <a href="mailto:support@claras.ai" className="text-primary hover:underline">support@claras.ai</a></p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PrivacyPolicy;
