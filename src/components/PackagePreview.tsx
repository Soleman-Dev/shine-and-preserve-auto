
import { Button } from '@/components/ui/button';

const PackagePreview = () => {
  const packages = [
    {
      name: 'Basic',
      price: '$89',
      image: 'https://images.unsplash.com/photo-1588018368404-9ac5f2d2e9a8?w=400&h=300&fit=crop',
      description: 'Essential cleaning'
    },
    {
      name: 'Deluxe',
      price: '$149',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop',
      description: 'Comprehensive detailing'
    },
    {
      name: 'Premium',
      price: '$249',
      image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=400&h=300&fit=crop',
      description: 'Ultimate experience'
    }
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      {/* Animated gold divider */}
      <div className="w-full flex justify-center mb-16">
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg border-2 border-yellow-400/30 hover:border-yellow-400 transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={`${pkg.name} package`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                  
                  {/* Price overlay */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-lg font-bold text-lg">
                    Starting at {pkg.price}
                  </div>
                  
                  {/* Package info */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-serif font-bold text-yellow-400 mb-1">
                      {pkg.name}
                    </h3>
                    <p className="text-white text-sm mb-3">
                      {pkg.description}
                    </p>
                  </div>
                  
                  {/* Hover button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button 
                      onClick={() => scrollTo('packages')}
                      className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold px-6 py-3 transform scale-95 group-hover:scale-100 transition-all duration-300"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagePreview;
