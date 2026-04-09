'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="py-40 bg-black relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E2FF3B]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] mb-12">
            Ready to <br />
            <span className="text-[#E2FF3B]">Transform?</span>
          </h2>
          
          <p className="text-xl text-[#999999] mb-16 max-w-2xl mx-auto leading-relaxed">
            Stop losing leads to poor design. Let's build a digital experience that converts your ideal customers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
            <Link 
              to="/booking" 
              className="bg-[#E2FF3B] text-black px-12 py-6 rounded-full text-lg font-bold hover:scale-105 transition-transform"
            >
              Book Your Strategy Call
            </Link>
            
            <Link 
              to="/contact" 
              className="glass text-white px-12 py-6 rounded-full text-lg font-bold hover:bg-white/10 transition-colors"
            >
              Send an Inquiry
            </Link>
          </div>
        </motion.div>
      </div>
      
    </section>
  );
}
