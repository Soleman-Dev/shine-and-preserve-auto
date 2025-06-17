
import { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const beforeAfter = [
    {
      before: 'https://images.unsplash.com/photo-1588018368404-9ac5f2d2e9a8?w=800&q=80',
      after: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
      description: 'Luxury Sedan - Full Premium Package'
    },
    {
      before: 'https://images.unsplash.com/photo-1606408954836-2ba86878d3ed?w=800&q=80',
      after: 'https://images.unsplash.com/photo-1618006366965-7b0fbd5baa6b?w=800&q=80',
      description: 'SUV Interior - Deluxe Clean & Protection'
    },
    {
      before: 'https://images.unsplash.com/photo-1602637829395-5e2c7a6b36e4?w=800&q=80',
      after: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800&q=80',
      description: 'Sports Car - Paint Correction & Ceramic Coating'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Before & After Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See the incredible transformations we achieve with our professional detailing services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {beforeAfter.map((item, index) => (
            <div key={index} className="group cursor-pointer" onClick={() => setSelectedImage(index)}>
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="grid grid-cols-2 h-64">
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.before} 
                      alt="Before detailing"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                      Before
                    </div>
                  </div>
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.after} 
                      alt="After detailing"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
                      After
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl w-full">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="relative">
                  <img 
                    src={beforeAfter[selectedImage].before} 
                    alt="Before detailing"
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-2 rounded font-semibold">
                    Before
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src={beforeAfter[selectedImage].after} 
                    alt="After detailing"
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-2 rounded font-semibold">
                    After
                  </div>
                </div>
              </div>
              <p className="text-white text-center text-lg font-semibold">
                {beforeAfter[selectedImage].description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
