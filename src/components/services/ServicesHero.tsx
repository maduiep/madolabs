'use client';

import { motion } from 'framer-motion';


export default function ServicesHero() {
  return (
    <section className="pt-40 pb-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-[#E2FF3B]" />
            <span className="text-xs uppercase tracking-widest text-[#E2FF3B] font-bold">Services</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold leading-[1.1] mb-8 uppercase">
            Strategic <br />
            Design & <br />
            <span className="text-[#555555]">Innovation</span>
          </h1>
          
          <p className="text-lg text-[#999999] max-w-xl leading-relaxed mb-12">
            WE DELIVER MEASURABLE BUSINESS VALUE THROUGH COMPREHENSIVE DIGITAL TRANSFORMATION AND OUTCOME-FOCUSED EXECUTION.
          </p>

          <button className="bg-[#E2FF3B] text-black px-12 py-6 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center space-x-3">
            <span>View Full Capabilities</span>
            <span className="text-2xl">↓</span>
          </button>
        </motion.div>

        {/* 3D Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 relative aspect-square w-full max-w-[600px]"
        >
          <img
            src="/assets/services-hero.png"
            alt="Innovation"
            className="absolute inset-0 w-full h-full object-contain drop-shadow-[0_0_50px_rgba(226,255,59,0.2)]"
          />
        </motion.div>
      </div>
      
    </section>
  );
}
