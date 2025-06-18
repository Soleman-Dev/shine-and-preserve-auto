
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ExperienceSection from '@/components/ExperienceSection';
import PackagePreview from '@/components/PackagePreview';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <ExperienceSection />
      <PackagePreview />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
