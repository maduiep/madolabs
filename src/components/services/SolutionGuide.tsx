'use client';

import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Sparkles, Cpu } from 'lucide-react';

const solutions = [
  {
    title: 'INCREASE CONVERSION RATES',
    description: "My current site isn't turning visitors into customers.",
    icon: <TrendingUp size={24} className="text-[#E2FF3B]" />
  },
  {
    title: 'REFRESH BRAND IDENTITY',
    description: "We look outdated compared to our competitors.",
    icon: <Sparkles size={24} className="text-[#E2FF3B]" />
  },
  {
    title: 'AUTOMATE OPERATIONS',
    description: "Looking to integrate AI to scale efficiently.",
    icon: <Cpu size={24} className="text-[#E2FF3B]" />
  }
];

export default function SolutionGuide() {
  return (
    <section className="py-32 bg-black border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#E2FF3B]" />
              <h2 className="text-4xl md:text-5xl font-bold uppercase">
                What do <br />
                you need?
              </h2>
            </div>
            <p className="text-[#999999] text-base leading-relaxed max-w-sm">
              Not sure where to start? Let our interactive guide point you to the right strategic solution based on your current business challenges.
            </p>
          </div>

          <div className="space-y-4">
            {solutions.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-3xl flex items-center justify-between group cursor-pointer hover:border-[#E2FF3B]/30 transition-all"
              >
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-[#E2FF3B]/10 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 uppercase text-white group-hover:text-[#E2FF3B] transition-colors">{item.title}</h3>
                    <p className="text-sm text-[#555555]">{item.description}</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#E2FF3B] group-hover:text-black transition-all">
                  <ArrowRight size={18} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
