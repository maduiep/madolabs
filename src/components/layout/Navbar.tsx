'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { name: 'Welcome', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Insights', href: '/insights' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="relative flex items-center h-[40px]">
          <img
            src="/assets/Logo.png"
            alt="MadoLabs"
            className="h-full w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className="text-sm font-medium hover:text-[#E2FF3B] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="hidden lg:flex items-center space-x-6">
          <a href="tel:+1234567890" className="flex items-center text-sm font-medium hover:text-[#E2FF3B] transition-colors">
            <Phone size={16} className="mr-2" />
            Let's Talk
          </a>
          <Link 
            to="/booking" 
            className="bg-[#E2FF3B] text-black px-6 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-transform"
          >
            Book Strategy Call
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass p-6 lg:hidden flex flex-col space-y-6"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href}
                className="text-lg font-medium border-b border-white/10 pb-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/booking" 
              className="bg-[#E2FF3B] text-black px-6 py-4 rounded-xl text-center font-bold"
              onClick={() => setIsOpen(false)}
            >
              Book Strategy Call
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
      
    </nav>
  );
}
