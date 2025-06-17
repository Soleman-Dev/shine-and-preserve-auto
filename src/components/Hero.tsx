
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div>
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Premium Auto
          </span>
          <br />
          Detailing Services
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Transform your vehicle with our professional detailing packages. 
          <br className="hidden md:block" />
          Expert care, guaranteed results, convenient service.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg"
            onClick={() => scrollTo('services')}
            className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            View Packages
          </Button>
          <Button 
            size="lg"
            variant="outline"
            onClick={() => scrollTo('contact')}
            className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-900 transform hover:scale-105 transition-all duration-300"
          >
            Get Quote
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
