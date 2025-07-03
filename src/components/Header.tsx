import { useState, useEffect } from 'react';
import { FlaskRound as Flask, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-warm-blue rounded-lg flex items-center justify-center">
              <Flask className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-poppins font-bold text-dark-navy">DansLab</span>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button 
              onClick={scrollToBooking}
              className="cta-button text-white px-6 py-2 rounded-lg font-medium"
            >
              Book Free Consult
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-dark-navy"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <Button 
              onClick={scrollToBooking}
              className="cta-button text-white w-full py-3 rounded-lg font-medium"
            >
              Book Free Consult
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;