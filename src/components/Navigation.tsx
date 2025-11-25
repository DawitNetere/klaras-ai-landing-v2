import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const Navigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getLinkClass = (path: string) => {
    const isActive = currentPath === path;
    return `transition-colors font-medium ${
      isActive 
        ? 'text-primary border-b-2 border-primary pb-1' 
        : 'text-text-secondary hover:text-text-primary'
    }`;
  };

  return (
    <nav className="w-full bg-background border-b border-border">
      <div className="container mx-auto px-8 md:px-12 py-4 md:py-5">
        <div className="flex items-center justify-between">
          <Logo />
          
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/product" 
              className={getLinkClass('/product')}
            >
              Product
            </Link>
            <Link 
              to="/pricing" 
              className={getLinkClass('/pricing')}
            >
              Pricing
            </Link>
            <Link 
              to="/contact" 
              className={getLinkClass('/contact')}
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              className="px-4 py-2 text-text-secondary hover:text-text-primary"
            >
              Sign In
            </Button>
            <Button 
              variant="outline"
              className="hidden md:inline-flex px-4 py-2"
              asChild
            >
              <Link to="/contact#book-call">
                Talk to an Accountant
              </Link>
            </Button>
            <Button 
              className="px-5 py-2.5 bg-primary hover:bg-primary-hover text-primary-foreground" 
              asChild
            >
              <a href="https://cal.com/claras-ai/30min" target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;