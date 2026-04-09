'use client';

import { motion } from 'framer-motion';

export default function InsightsHero() {
  return (
    <section className="pt-40 pb-20 bg-black relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-[#E2FF3B]" />
            <span className="text-xs uppercase tracking-widest text-[#E2FF3B] font-bold">Insights</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 uppercase leading-[1.1]">
            Perspectives <br />
            <span className="text-[#555555]">& Perspectives.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[#999999] max-w-2xl leading-relaxed">
            Thought leadership and strategic insights from the intersection of design, technology, and business growth.
          </p>
        </motion.div>
      </div>
      
    </section>
  );
}
