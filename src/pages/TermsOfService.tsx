import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-8 md:px-12 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-4">
            Terms of Service
          </h1>
          <p className="text-text-secondary mb-12">Last Updated: September 2025</p>
          
          <div className="prose prose-lg max-w-none text-text-secondary space-y-8">
            <p className="text-lg leading-relaxed">
              Welcome to Claras AI, a service operated by KlarasAI, Inc. These Terms of Service ("Terms") govern your access to our platform and services.
            </p>
            <p className="text-lg leading-relaxed font-semibold text-text-primary">
              By using Claras AI, you agree to these Terms.
            </p>

            <div>
              <h2 className="text-2xl font-display font-bold text-text-primary mb-4">1. Service Description</h2>
              <p className="mb-2">Claras AI provides:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>AI-powered accounting automation</li>
                <li>Document extraction & categorization</li>
                <li>Financial reporting</li>
                <li>Human accountant reviews</li>
                <li>Ongoing bookkeeping and support</li>
              </ul>
              <p>We continuously improve the platform and may add, modify, or remove features.</p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-text-primary mb-4">2. Eligibility</h2>
              <p className="mb-2">To use the service, you must:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Be at least 18</li>
                <li>Be acting on behalf of a business or organization</li>
                <li>Provide accurate and legal information</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-text-primary mb-4">3. User Responsibilities</h2>
              <p className="mb-2">You agree to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Maintain the confidentiality of your login credentials</li>
                <li>Provide accurate financial documents</li>
                <li>Use the platform for lawful business purposes</li>
                <li>Not upload harmful, illegal, or malicious content</li>
              </ul>
              <p>You are responsible for the accuracy of the financial information you provide.</p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-text-primary mb-4">4. Data Ownership</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>You own all business and financial data you upload.</li>
                <li>KlarasAI owns the platform, AI systems, and intellectual property.</li>
                <li>We have a license to process your data solely to provide the service.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-text-primary mb-4">5. Payments & Billing</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Plans may be subscription-based or usage-based</li>
                <li>Subscriptions renew automatically unless canceled</li>
                <li>Payment failures may result in account suspension</li>
                <li>Refunds are not guaranteed and are handled case-by-case</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-text-primary mb-4">6. AI Disclaimer</h2>
              <p className="mb-2">Claras AI uses advanced AI models. You acknowledge that:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>AI may occasionally produce errors</li>
                <li>Human review is advised for critical decisions</li>
                <li>You remain responsible for compliance and filings unless explicitly contracted otherwise</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-text-primary mb-4">7. Accountant Support</h2>
              <p>You may receive guidance from our in-house accountants. This is not formal tax or legal advice unless explicitly included in your plan.</p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-text-primary mb-4">8. Termination</h2>
              <p className="mb-2">You may cancel at any time. We may suspend/terminate accounts for:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Non-payment</li>
                <li>Violations of these Terms</li>
                <li>Harmful or illegal use</li>
              </ul>
              <p>Upon termination, we provide data export for 30 days.</p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-text-primary mb-4">9. Limitation of Liability</h2>
              <p className="mb-2">To the fullest extent permitted by law:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>KlarasAI is not liable for indirect, incidental, or consequential damages.</li>
                <li>Our total liability is limited to the amount paid to us in the previous 12 months.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-text-primary mb-4">10. No Warranties</h2>
              <p className="mb-2">The service is provided "as is" and "as available". We do not guarantee:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Error-free AI outputs</li>
                <li>Uninterrupted access</li>
                <li>Complete accuracy of calculations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-text-primary mb-4">11. Governing Law</h2>
              <p>These Terms are governed by the laws of the State of Delaware, USA.</p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-text-primary mb-4">12. Contact</h2>
              <p>For questions about these Terms: <a href="mailto:support@claras.ai" className="text-primary hover:underline">support@claras.ai</a></p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default TermsOfService;
