
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            AutoShine Pro
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollTo('services')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </button>
            <button onClick={() => scrollTo('gallery')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollTo('testimonials')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Reviews
            </button>
            <button onClick={() => scrollTo('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </button>
          </nav>

          <Button 
            onClick={() => scrollTo('contact')} 
            className="hidden md:block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200"
          >
            Book Now
          </Button>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`h-0.5 bg-gray-700 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`h-0.5 bg-gray-700 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`h-0.5 bg-gray-700 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3 pt-4">
              <button onClick={() => scrollTo('services')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                Services
              </button>
              <button onClick={() => scrollTo('gallery')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                Gallery
              </button>
              <button onClick={() => scrollTo('testimonials')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                Reviews
              </button>
              <button onClick={() => scrollTo('contact')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </button>
              <Button 
                onClick={() => scrollTo('contact')} 
                className="w-full mt-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
              >
                Book Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
