import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-8 md:px-12 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Logo className="mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed">
              AI-powered accounting backed by expert accountants for modern businesses.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <div className="space-y-3 text-sm">
              <Link to="/product" className="text-gray-400 hover:text-white transition-colors block">
                Features
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <div className="space-y-3 text-sm">
              <Link to="/pricing" className="text-gray-400 hover:text-white transition-colors block">
                Pricing
              </Link>
              <a href="#careers" className="text-gray-400 hover:text-white transition-colors block">
                Careers
              </a>
            </div>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <div className="space-y-3 text-sm">
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors block">
                Contact
              </Link>
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors block">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors block">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-400 text-center md:text-left">
            <div>© 2025 ClarasAI, Inc. All rights reserved.</div>
            <div className="mt-1">131 Continental Dr Suite 305 Newark, DE, 19713 US</div>
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <a 
              href="https://www.linkedin.com/company/clarasai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;