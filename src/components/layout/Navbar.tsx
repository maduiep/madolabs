'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About MADOLABS', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Insights', href: '/insights' },
  { name: 'Contact', href: '/contact' },
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
    <>
      <nav className={`fixed top-0 left-0 w-full z-[110] transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-xl py-4 border-b border-white/10' : 'bg-black/20 backdrop-blur-sm py-6'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="relative flex items-center h-[40px]" onClick={() => setIsOpen(false)}>
            <img
              src="/assets/Logo.png"
              alt="MadoLabs"
              className="h-full w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href}
                className="text-[13px] font-medium hover:text-[#E2FF3B] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="tel:+18005550199" className="flex items-center text-[13px] font-medium hover:text-[#E2FF3B] transition-colors">
              <Phone size={14} className="mr-2" />
              Let's Talk
            </a>
            <Link 
              to="/booking" 
              className="bg-[#E2FF3B] text-black px-6 py-2.5 rounded-full text-[13px] font-bold hover:scale-105 transition-transform"
            >
              Book Strategy Call
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden w-10 h-10 relative focus:outline-none z-[110]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-4 flex flex-col justify-between">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="w-full h-[3px] bg-[#E2FF3B] rounded-full block transform-gpu origin-center"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-[3px] bg-[#E2FF3B] rounded-full block"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="w-full h-[3px] bg-[#E2FF3B] rounded-full block transform-gpu origin-center"
              />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[105] bg-black/95 backdrop-blur-2xl lg:hidden overflow-y-auto"
          >
            <div className="min-h-full flex flex-col justify-center items-start p-12 py-24">
              <div className="flex flex-col space-y-6 w-full max-w-sm text-left">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link 
                      to={link.href}
                      className="text-2xl font-title font-bold hover:text-[#E2FF3B] transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="pt-8 space-y-6"
                >
                  <a 
                    href="tel:+18005550199" 
                    className="flex items-center text-lg font-medium text-[#999999] hover:text-[#E2FF3B] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <Phone size={20} className="mr-3 text-[#E2FF3B]" />
                    Let's Talk
                  </a>
                  <Link 
                    to="/booking" 
                    className="bg-[#E2FF3B] text-black px-10 py-4 rounded-full text-lg font-bold inline-block"
                    onClick={() => setIsOpen(false)}
                  >
                    Book Strategy Call
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
