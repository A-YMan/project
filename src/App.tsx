import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Catalogue from '@/pages/Catalogue';
import Reservations from '@/pages/Reservations';
import Ecommerce from '@/pages/Ecommerce';
import SpecialMerchants from '@/pages/SpecialMerchants';
import Coupons from '@/pages/Coupons';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import BlaneDetails from '@/pages/BlaneDetails';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/ecommerce" element={<Ecommerce />} />
            <Route path="/special-merchants" element={<SpecialMerchants />} />
            <Route path="/coupons" element={<Coupons />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blane/:id" element={<BlaneDetails />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;