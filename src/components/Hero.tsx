
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Luxury background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 40%, rgba(255, 215, 0, 0.1) 41%, rgba(255, 215, 0, 0.1) 43%, transparent 44%),
            linear-gradient(-45deg, transparent 40%, rgba(255, 215, 0, 0.05) 41%, rgba(255, 215, 0, 0.05) 43%, transparent 44%)
          `,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        {/* Large Logo Display */}
        <div className="mb-8 animate-fade-in">
          <div className="text-6xl md:text-8xl font-serif font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-4">
            Legacy
          </div>
          <div className="text-3xl md:text-5xl font-serif font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
            Auto Detailing Services
          </div>
        </div>
        
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}></div>
        
        <p className="text-xl md:text-2xl mb-12 text-gray-200 leading-relaxed animate-fade-in font-serif" style={{ animationDelay: '0.4s' }}>
          Transform your vehicle with our professional detailing packages.
          <br className="hidden md:block" />
          Expert care, guaranteed results, convenient service.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg"
            onClick={() => scrollTo('packages')}
            className="text-lg px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            View Packages
          </Button>
          <Button 
            size="lg"
            variant="outline"
            onClick={() => scrollTo('contact')}
            className="text-lg px-8 py-4 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold transform hover:scale-105 transition-all duration-300"
          >
            Book Your Detail Today
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
