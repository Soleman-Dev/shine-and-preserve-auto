
import { Award, Car, Check } from 'lucide-react';

const ExperienceSection = () => {
  const features = [
    {
      icon: Award,
      title: "Expert Care",
      description: "Trained professionals using top-tier products"
    },
    {
      icon: Check,
      title: "Immaculate Results",
      description: "Every detail, every inch"
    },
    {
      icon: Car,
      title: "Convenient Service",
      description: "Easy booking & mobile availability"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
            Why Choose Legacy?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-yellow-400 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
