
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
    // Here you would typically send the data to your backend
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
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Book Your Service
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your vehicle? Get in touch with us to schedule your appointment or get a custom quote.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Get Your Quote</CardTitle>
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
                    className="border-2 focus:border-blue-500"
                  />
                  <Input
                    name="phone"
                    placeholder="Phone Number *"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="border-2 focus:border-blue-500"
                  />
                </div>
                
                <Input
                  name="email"
                  placeholder="Email Address *"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-2 focus:border-blue-500"
                />
                
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border-2 rounded-md border-gray-300 focus:border-blue-500 focus:outline-none"
                >
                  <option value="">Select Service Package *</option>
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
                  className="border-2 focus:border-blue-500"
                />
                
                <Button 
                  type="submit" 
                  className="w-full py-3 text-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300"
                >
                  Get My Quote
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Contact Information</h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <strong>Phone:</strong> (555) 123-SHINE
                  </div>
                  <div>
                    <strong>Email:</strong> info@autoshinepro.com
                  </div>
                  <div>
                    <strong>Address:</strong> 123 Auto Care Lane<br />
                    Premium District, City 12345
                  </div>
                  <div>
                    <strong>Hours:</strong><br />
                    Mon-Fri: 8:00 AM - 6:00 PM<br />
                    Sat: 9:00 AM - 5:00 PM<br />
                    Sun: 10:00 AM - 4:00 PM
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Why Choose AutoShine Pro?</h3>
                <ul className="space-y-2">
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
