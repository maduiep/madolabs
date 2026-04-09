'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ProjectCta() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#E2FF3B] rounded-[60px] py-32 px-12 text-center"
        >
          <h2 className="text-6xl md:text-8xl font-black text-black mb-12 uppercase leading-none tracking-tighter">
            Start a project.
          </h2>
          <p className="text-black/60 text-lg md:text-xl max-w-xl mx-auto mb-16 font-medium">
            Get a partner who's all about results—no ifs, ands, or buts. Let's discuss your strategic needs today.
          </p>
          
          <Link 
            to="/booking" 
            className="inline-flex items-center space-x-4 bg-black text-[#E2FF3B] px-12 py-6 rounded-full text-lg font-bold hover:scale-105 transition-transform"
          >
            <span>BOOK STRATEGY CALL</span>
            <span className="text-2xl">→</span>
          </Link>
        </motion.div>
      </div>
      
    </section>
  );
}
