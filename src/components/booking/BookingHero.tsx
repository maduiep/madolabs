'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, Globe } from 'lucide-react';

export default function BookingHero() {
  return (
    <section className="pt-40 pb-20 bg-black relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-[#E2FF3B]" />
              <span className="text-xs uppercase tracking-widest text-[#E2FF3B] font-bold">Strategy Call</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 uppercase leading-tight">
              Book a free <br />
              <span className="text-[#555555]">discovery session.</span>
            </h1>
            
            <p className="text-lg text-[#999999] max-w-2xl mx-auto leading-relaxed">
              Let's discuss your goals, challenges, and how we can apply our strategic design framework to help you scale.
            </p>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto glass rounded-[60px] overflow-hidden flex flex-col lg:flex-row">
          {/* Info Side */}
          <div className="lg:w-1/3 bg-white/5 p-12 border-r border-white/5">
            <h2 className="text-2xl font-bold mb-8">30 Min Discovery</h2>
            <div className="space-y-6">
              <div className="flex items-center text-[#999999]">
                <Clock size={18} className="mr-3" />
                <span>30 min</span>
              </div>
              <div className="flex items-center text-[#999999]">
                <Globe size={18} className="mr-3" />
                <span>Web conferencing details provided upon confirmation.</span>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-white/5 space-y-6">
              <p className="text-xs text-[#555555] uppercase tracking-widest font-bold">What to expect:</p>
              <ul className="space-y-4">
                {['Brief audit of current challenges', 'Strategic recommendations', 'Overview of our process', 'Budget & Timeline discussion'].map((item) => (
                  <li key={item} className="flex items-start text-sm text-[#999999]">
                    <span className="text-[#E2FF3B] mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Calendar Side */}
          <div className="lg:w-2/3 p-12 flex items-center justify-center bg-black/40">
            <div className="text-center">
              <Calendar size={64} className="text-[#E2FF3B]/20 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Select a Date & Time</h3>
              <p className="text-[#555555] text-sm mb-8">Scheduling integration would appear here (Calendly, etc.)</p>
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 31 }).map((_, i) => (
                  <div key={i} className="w-10 h-10 rounded-lg glass flex items-center justify-center text-xs text-[#555555] hover:border-[#E2FF3B] cursor-pointer">
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}
