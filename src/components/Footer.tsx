const Footer = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-12 border-t-2 border-yellow-400/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-serif font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent mb-4">
              Legacy Auto Detailing
            </div>
            <p className="text-gray-400 leading-relaxed">
              Premium auto detailing services that transform your vehicle and protect your investment with the legacy touch.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-yellow-400">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => scrollTo('packages')} className="hover:text-yellow-400 transition-colors">Basic Package</button></li>
              <li><button onClick={() => scrollTo('packages')} className="hover:text-yellow-400 transition-colors">Deluxe Package</button></li>
              <li><button onClick={() => scrollTo('packages')} className="hover:text-yellow-400 transition-colors">Premium Package</button></li>
              <li><button onClick={() => scrollTo('contact')} className="hover:text-yellow-400 transition-colors">Custom Services</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-yellow-400">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => scrollTo('gallery')} className="hover:text-yellow-400 transition-colors">Gallery</button></li>
              <li><button onClick={() => scrollTo('testimonials')} className="hover:text-yellow-400 transition-colors">Reviews</button></li>
              <li><button onClick={() => scrollTo('contact')} className="hover:text-yellow-400 transition-colors">Contact</button></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-yellow-400">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p>(555) 123-SHINE</p>
              <p>info@legacyautodetailing.com</p>
              <p>123 Auto Care Lane<br />Premium District, City 12345</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-yellow-400/30 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; 2024 Legacy Auto Detailing. All rights reserved. Professional auto detailing services with the legacy touch.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
