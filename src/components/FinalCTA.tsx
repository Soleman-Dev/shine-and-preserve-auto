
import { Button } from '@/components/ui/button';

const FinalCTA = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-yellow-400 mb-8">
            Your car deserves the legacy touch.
          </h2>
          
          <Button 
            size="lg"
            onClick={() => scrollTo('contact')}
            className="text-xl px-12 py-6 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            Schedule Your Detail Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
