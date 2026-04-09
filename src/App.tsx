import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Preloader from '@/components/ui/Preloader';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import CaseStudies from '@/pages/CaseStudies';
import Insights from '@/pages/Insights';
import Contact from '@/pages/Contact';
import Booking from '@/pages/Booking';

function App() {
  return (
    <Router>
      <Preloader />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
