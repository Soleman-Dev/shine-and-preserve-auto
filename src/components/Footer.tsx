
const Footer = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-4">
              AutoShine Pro
            </div>
            <p className="text-gray-300 leading-relaxed">
              Premium auto detailing services that transform your vehicle and protect your investment.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><button onClick={() => scrollTo('services')} className="hover:text-blue-400 transition-colors">Basic Package</button></li>
              <li><button onClick={() => scrollTo('services')} className="hover:text-blue-400 transition-colors">Deluxe Package</button></li>
              <li><button onClick={() => scrollTo('services')} className="hover:text-blue-400 transition-colors">Premium Package</button></li>
              <li><button onClick={() => scrollTo('contact')} className="hover:text-blue-400 transition-colors">Custom Services</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li><button onClick={() => scrollTo('gallery')} className="hover:text-blue-400 transition-colors">Gallery</button></li>
              <li><button onClick={() => scrollTo('testimonials')} className="hover:text-blue-400 transition-colors">Reviews</button></li>
              <li><button onClick={() => scrollTo('contact')} className="hover:text-blue-400 transition-colors">Contact</button></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <p>(555) 123-SHINE</p>
              <p>info@autoshinepro.com</p>
              <p>123 Auto Care Lane<br />Premium District, City 12345</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 AutoShine Pro. All rights reserved. Professional auto detailing services.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
