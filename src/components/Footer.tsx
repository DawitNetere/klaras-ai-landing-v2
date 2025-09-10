import Logo from "./Logo";
import ContactForm from "./ContactForm";
import PrivacyPolicy from "./PrivacyPolicy";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-sm text-gray-600">
            © 2024 Klaras AI. All rights reserved.
          </div>
          
          <div className="flex items-center gap-8 text-sm">
            <a 
              href="https://linkedin.com/company/klaras-ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              LinkedIn
            </a>
            <ContactForm>
              <button className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </button>
            </ContactForm>
            <PrivacyPolicy>
              <button className="text-gray-600 hover:text-gray-900 transition-colors">
                Privacy
              </button>
            </PrivacyPolicy>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;