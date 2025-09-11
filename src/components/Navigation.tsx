import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg' 
        : 'bg-background border-b border-border'
    }`}>
      <div className="container mx-auto px-8 md:px-12 py-5 md:py-6">
        <div className="flex items-center justify-between">
          <Logo />
          
          <div className="hidden md:flex items-center gap-8">
            {/* Navigation items removed */}
          </div>

          <Button 
            variant="outline" 
            className="hover:scale-105 transition-all duration-200 hover:shadow-md px-6 py-2.5" 
            asChild
          >
            <a href="https://cal.com/klaras/30min" target="_blank" rel="noopener noreferrer">
              Book a Demo
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;