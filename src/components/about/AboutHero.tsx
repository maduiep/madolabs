'use client';

import { motion } from 'framer-motion';


export default function AboutHero() {
  return (
    <section className="pt-40 pb-20 bg-black relative">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-[#E2FF3B]" />
            <span className="text-xs uppercase tracking-widest text-[#E2FF3B] font-bold">Our Story</span>
          </div>
          
          <h1 className="font-title text-6xl md:text-8xl font-bold mb-8 uppercase tracking-tight">
            We engineer <br />
            <span className="text-[#555555]">strategic growth.</span>
          </h1>
          
          <p className="font-body text-lg md:text-xl text-[#999999] max-w-2xl mx-auto leading-relaxed mb-12 font-medium">
            MADOLABS is a digital transformation agency dedicated to building high-performance brand experiences that drive measurable business outcomes.
          </p>

          <button className="bg-[#E2FF3B] text-black px-8 py-4 rounded-full font-bold inline-flex items-center hover:scale-105 transition-transform">
            See Our Process
            <span className="ml-2">↓</span>
          </button>
        </motion.div>

        {/* Group Photo / Team Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-20 relative aspect-[21/9] rounded-[40px] overflow-hidden glass"
        >
          <img
            src="https://images.unsplash.com/photo-1522071823991-b99c223a7097?auto=format&fit=crop&w=1600&q=80"
            alt="The Team"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
        </motion.div>
      </div>
      
    </section>
  );
}
