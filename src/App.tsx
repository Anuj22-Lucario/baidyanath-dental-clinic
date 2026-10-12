import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Highlights from '@/components/Highlights';
import Services from '@/components/Services';
import Doctor from '@/components/Doctor';
import Reviews from '@/components/Reviews';
import SmileTransformations from '@/components/SmileTransformations';
import FAQ from '@/components/FAQ';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import StickyFooter from '@/components/StickyFooter';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <Services />
        <Doctor />
        <SmileTransformations />
        <Reviews />
        <FAQ />
        <Location />
      </main>
      <Footer />
      <StickyFooter />
    </div>
  );
}

export default App;
