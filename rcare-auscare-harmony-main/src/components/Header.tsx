import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import meraMatelogo from "@/assets/mera-mate-logo.jpg";

const Header = () => {
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/">
              <img src={meraMatelogo} alt="Mera Mate Logo" className="h-20 w-auto" />
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              About Us
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">
              Services
            </a>
            <a href="#professionals" className="text-foreground hover:text-primary transition-colors font-medium">
              Care Professionals
            </a>
            
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            <Link to="/get-care">
              <Button 
                variant="outline" 
                className="hidden md:inline-flex border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold rounded-full px-6"
              >
                Get Care
              </Button>
            </Link>
            <Link to="/apply">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold rounded-full px-6">
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;