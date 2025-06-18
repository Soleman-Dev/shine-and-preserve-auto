import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We\'ll contact you within 24 hours to schedule your appointment.');
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
            Book Your Service
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to transform your vehicle? Get in touch with us to schedule your appointment or get a custom quote.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="shadow-xl bg-black border-2 border-yellow-400/30">
            <CardHeader>
              <CardTitle className="text-2xl font-serif font-bold text-center text-yellow-400">Get Your Quote</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-2 border-yellow-400/50 bg-black text-white focus:border-yellow-400 placeholder-gray-400"
                  />
                  <Input
                    name="phone"
                    placeholder="Phone Number *"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="border-2 border-yellow-400/50 bg-black text-white focus:border-yellow-400 placeholder-gray-400"
                  />
                </div>
                
                <Input
                  name="email"
                  placeholder="Email Address *"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-2 border-yellow-400/50 bg-black text-white focus:border-yellow-400 placeholder-gray-400"
                />
                
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border-2 rounded-md border-yellow-400/50 bg-black text-white focus:border-yellow-400 focus:outline-none"
                >
                  <option value="" className="text-gray-400">Select Service Package *</option>
                  <option value="basic">Basic Package - $89</option>
                  <option value="deluxe">Deluxe Package - $149</option>
                  <option value="premium">Premium Package - $249</option>
                  <option value="custom">Custom Quote</option>
                </select>
                
                <Textarea
                  name="message"
                  placeholder="Additional details about your vehicle or special requests..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="border-2 border-yellow-400/50 bg-black text-white focus:border-yellow-400 placeholder-gray-400"
                />
                
                <Button 
                  type="submit" 
                  className="w-full py-3 text-lg bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300"
                >
                  Get My Quote
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="shadow-lg bg-black border-2 border-yellow-400/30">
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif font-bold mb-4 text-yellow-400">Contact Information</h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <strong className="text-yellow-400">Phone:</strong> (555) 123-SHINE
                  </div>
                  <div>
                    <strong className="text-yellow-400">Email:</strong> info@legacyautodetailing.com
                  </div>
                  <div>
                    <strong className="text-yellow-400">Address:</strong> 123 Auto Care Lane<br />
                    Premium District, City 12345
                  </div>
                  <div>
                    <strong className="text-yellow-400">Hours:</strong><br />
                    Mon-Fri: 8:00 AM - 6:00 PM<br />
                    Sat: 9:00 AM - 5:00 PM<br />
                    Sun: 10:00 AM - 4:00 PM
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-gradient-to-r from-yellow-400 to-yellow-500 text-black">
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif font-bold mb-4">Why Choose Legacy Auto Detailing?</h3>
                <ul className="space-y-2 font-medium">
                  <li>✓ Certified professionals with 10+ years experience</li>
                  <li>✓ Premium products and equipment only</li>
                  <li>✓ Satisfaction guarantee on all services</li>
                  <li>✓ Mobile service available (additional fee)</li>
                  <li>✓ Eco-friendly cleaning solutions</li>
                  <li>✓ Insurance and bonding coverage</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
