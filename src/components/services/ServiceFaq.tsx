'use client';

import { motion } from 'framer-motion';
import { ChevronRight, TrendingUp, RefreshCw, Cpu } from 'lucide-react';

const needs = [
  {
    title: 'INCREASE CONVERSION RATES',
    description: "My current site isn't turning visitors into customers.",
    icon: <TrendingUp size={24} className="text-[#E2FF3B]" />
  },
  {
    title: 'REFRESH BRAND IDENTITY',
    description: "We look outdated compared to our competitors.",
    icon: <RefreshCw size={24} className="text-[#E2FF3B]" />
  },
  {
    title: 'AUTOMATE OPERATIONS',
    description: "Looking to integrate AI to scale efficiently.",
    icon: <Cpu size={24} className="text-[#E2FF3B]" />
  }
];

export default function ServiceFaq() {
  return (
    <section className="py-32 bg-black border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 glass p-12 md:p-24 rounded-[60px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="w-3 h-3 rounded-full bg-[#E2FF3B] mb-8" />
            <h2 className="text-5xl md:text-7xl font-bold mb-8 uppercase leading-tight">
              What do <br />
              you need?
            </h2>
            <p className="text-[#999999] max-w-sm leading-relaxed">
              Not sure where to start? Let our interactive guide point you to the right strategic solution based on your current business challenges.
            </p>
          </div>

          <div className="space-y-6">
            {needs.map((need, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-3xl flex items-center justify-between group cursor-pointer hover:bg-white/5 transition-all"
              >
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center bg-white/5">
                    {need.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{need.title}</h3>
                    <p className="text-xs text-[#555555]">{need.description}</p>
                  </div>
                </div>
                <ChevronRight size={20} className="text-[#555555] group-hover:text-[#E2FF3B] group-hover:translate-x-1 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
}
