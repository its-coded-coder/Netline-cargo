import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

interface HeaderProps {
  onGetQuote: () => void;
}

const Header = ({ onGetQuote }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top contact bar */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm text-muted-foreground border-b border-border/50">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+254799 999 964 / +254799 999 965</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>netlinedxb2014@gmail.com</span>
            </div>
          </div>
          <div className="text-[hsl(var(--brand-orange))] font-medium">
            Connecting Kenya to the World
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <div className="bg-[hsl(var(--brand-orange))] text-white px-4 py-2 rounded-lg font-bold text-xl">
              NCL
            </div>
            <div className="ml-3">
              <div className="text-[hsl(var(--brand-navy))] font-bold text-lg">
                NETLINE CARGO
              </div>
              <div className="text-[hsl(var(--brand-orange))] font-semibold text-sm">
                LIMITED
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-[hsl(var(--brand-orange))] transition-colors">
              Home
            </a>
            <a href="#services" className="text-foreground hover:text-[hsl(var(--brand-orange))] transition-colors">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-[hsl(var(--brand-orange))] transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-[hsl(var(--brand-orange))] transition-colors">
              Contact
            </a>
            <Button onClick={onGetQuote} variant="hero" size="lg">
              Get Quote
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-[hsl(var(--brand-orange))] transition-colors">
                Home
              </a>
              <a href="#services" className="text-foreground hover:text-[hsl(var(--brand-orange))] transition-colors">
                Services
              </a>
              <a href="#about" className="text-foreground hover:text-[hsl(var(--brand-orange))] transition-colors">
                About
              </a>
              <a href="#contact" className="text-foreground hover:text-[hsl(var(--brand-orange))] transition-colors">
                Contact
              </a>
              <Button onClick={onGetQuote} variant="hero" size="lg" className="self-start">
                Get Quote
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;