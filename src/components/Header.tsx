
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-2xl' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Left - Navigation Menu */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollTo('hero')} className="text-white hover:text-yellow-400 transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollTo('services')} className="text-white hover:text-yellow-400 transition-colors font-medium">
              Services
            </button>
            <button onClick={() => scrollTo('packages')} className="text-white hover:text-yellow-400 transition-colors font-medium">
              Packages
            </button>
            <button onClick={() => scrollTo('gallery')} className="text-white hover:text-yellow-400 transition-colors font-medium">
              Gallery
            </button>
            <button onClick={() => scrollTo('contact')} className="text-white hover:text-yellow-400 transition-colors font-medium">
              Contact
            </button>
          </nav>

          {/* Center - Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="text-3xl font-serif font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              Legacy Auto Detailing
            </div>
          </div>

          {/* Right - CTA Buttons */}
          <div className="hidden md:flex space-x-4">
            <Button 
              onClick={() => scrollTo('contact')} 
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold px-6 py-3 hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300"
            >
              Book Now
            </Button>
            <Button 
              onClick={() => scrollTo('contact')} 
              variant="outline"
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold px-6 py-3 transform hover:scale-105 transition-all duration-300"
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`h-0.5 bg-yellow-400 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`h-0.5 bg-yellow-400 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`h-0.5 bg-yellow-400 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-yellow-400/30">
            <nav className="flex flex-col space-y-4 pt-6">
              <button onClick={() => scrollTo('hero')} className="text-left text-white hover:text-yellow-400 transition-colors font-medium">
                Home
              </button>
              <button onClick={() => scrollTo('services')} className="text-left text-white hover:text-yellow-400 transition-colors font-medium">
                Services
              </button>
              <button onClick={() => scrollTo('packages')} className="text-left text-white hover:text-yellow-400 transition-colors font-medium">
                Packages
              </button>
              <button onClick={() => scrollTo('gallery')} className="text-left text-white hover:text-yellow-400 transition-colors font-medium">
                Gallery
              </button>
              <button onClick={() => scrollTo('contact')} className="text-left text-white hover:text-yellow-400 transition-colors font-medium">
                Contact
              </button>
              <div className="flex flex-col space-y-3 pt-4">
                <Button 
                  onClick={() => scrollTo('contact')} 
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold"
                >
                  Book Now
                </Button>
                <Button 
                  onClick={() => scrollTo('contact')} 
                  variant="outline"
                  className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold"
                >
                  Get a Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
