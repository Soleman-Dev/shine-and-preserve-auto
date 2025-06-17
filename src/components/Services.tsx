
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
      popular: false,
      gradient: 'from-gray-500 to-gray-600'
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
      popular: true,
      gradient: 'from-blue-600 to-blue-700'
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
      popular: false,
      gradient: 'from-amber-500 to-orange-600'
    }
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Our Service Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect detailing package for your vehicle. Each service includes our satisfaction guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.name} 
              className={`relative transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                pkg.popular ? 'ring-2 ring-blue-500 shadow-xl scale-105' : 'hover:shadow-xl'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold mb-2">{pkg.name}</CardTitle>
                <div className={`text-4xl font-bold bg-gradient-to-r ${pkg.gradient} bg-clip-text text-transparent mb-2`}>
                  {pkg.price}
                </div>
                <p className="text-gray-500">{pkg.duration}</p>
                <p className="text-gray-600 mt-2">{pkg.description}</p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-3 text-lg font-semibold transition-all duration-300 ${
                    pkg.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transform hover:scale-105' 
                      : 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800'
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
