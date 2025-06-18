
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const Services = () => {
  const packages = [
    {
      name: 'Basic',
      price: '$89',
      duration: '2-3 hours',
      description: 'Essential cleaning for everyday maintenance',
      features: [
        'Exterior wash & rinse',
        'Interior vacuum',
        'Dashboard cleaning',
        'Window cleaning (interior)',
        'Tire cleaning'
      ],
      popular: false
    },
    {
      name: 'Deluxe',
      price: '$149',
      duration: '3-4 hours',
      description: 'Comprehensive detailing for enhanced appearance',
      features: [
        'Everything in Basic',
        'Clay bar treatment',
        'Paint sealant application',
        'Leather conditioning',
        'All windows (inside & out)',
        'Wheel & tire shine',
        'Interior protection spray'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: '$249',
      duration: '5-6 hours',
      description: 'Ultimate detailing experience with premium protection',
      features: [
        'Everything in Deluxe',
        'Paint correction (minor scratches)',
        'Ceramic coating application',
        'Engine bay cleaning',
        'Headlight restoration',
        'Full interior deep clean',
        'Paint protection guarantee',
        '6-month protection warranty'
      ],
      popular: false
    }
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="packages" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
            Our Service Packages
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the perfect detailing package for your vehicle. Each service includes our satisfaction guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.name} 
              className={`relative bg-black border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                pkg.popular 
                  ? 'border-yellow-400 shadow-xl scale-105 shadow-yellow-400/20' 
                  : 'border-yellow-400/30 hover:border-yellow-400 hover:shadow-yellow-400/10'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-serif font-bold mb-2 text-yellow-400">{pkg.name}</CardTitle>
                <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent mb-2">
                  {pkg.price}
                </div>
                <p className="text-gray-400">{pkg.duration}</p>
                <p className="text-gray-300 mt-2">{pkg.description}</p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-3 text-lg font-bold transition-all duration-300 ${
                    pkg.popular 
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-105' 
                      : 'bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black'
                  }`}
                  onClick={() => scrollTo('contact')}
                >
                  Book {pkg.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
