const Testimonials = () => {
  const testimonials = [
    {
      name: 'Michael Johnson',
      vehicle: '2023 BMW M3',
      rating: 5,
      text: 'Absolutely incredible work! My car looks better than when I first bought it. The ceramic coating has kept it spotless for months.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Sarah Chen',
      vehicle: '2022 Tesla Model S',
      rating: 5,
      text: 'Professional, punctual, and perfectionist. The Premium package was worth every penny. My Tesla has never looked so good!',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'David Rodriguez',
      vehicle: '2021 Porsche 911',
      rating: 5,
      text: 'These guys are artists. The paint correction removed years of wear, and the attention to detail is unmatched. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-2xl ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}>
        ★
      </span>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it - hear from satisfied customers who trust us with their prized vehicles
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-black border-2 border-yellow-400/30 hover:border-yellow-400 rounded-lg p-6 hover:shadow-xl hover:shadow-yellow-400/10 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-yellow-400"
                />
                <div>
                  <h3 className="font-bold text-lg text-yellow-400">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.vehicle}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-gray-300 italic leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-8 text-2xl font-bold">
            <div className="text-center">
              <div className="text-4xl text-yellow-400 font-serif">500+</div>
              <div className="text-gray-400">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-yellow-400 font-serif">98%</div>
              <div className="text-gray-400">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-yellow-400 font-serif">5★</div>
              <div className="text-gray-400">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
