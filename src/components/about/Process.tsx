'use client';

import { motion } from 'framer-motion';
import { Search, Compass, Palette, Code2, LineChart } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Discover',
    description: 'Deep dive into your business, market, and audience. We audit existing assets and define core challenges.',
    icon: <Search size={20} />
  },
  {
    id: '02',
    title: 'Strategy',
    description: 'Developing the blueprint. Information architecture, user flows, and positioning that align with KPIs.',
    icon: <Compass size={20} />
  },
  {
    id: '03',
    title: 'Design',
    description: 'Crafting the visual language. High-fidelity UI/UX that communicates trust, premium quality, and clarity.',
    icon: <Palette size={20} />
  },
  {
    id: '04',
    title: 'Build',
    description: 'Robust, scalable development. Clean code, fast load times, and seamless CMS integration.',
    icon: <Code2 size={20} />
  },
  {
    id: '05',
    title: 'Optimize',
    description: 'Launch is just the beginning. We monitor analytics, run A/B tests, and refine for maximum conversion.',
    icon: <LineChart size={20} />
  }
];

export default function Process() {
  return (
    <section className="py-32 bg-black border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl mb-6">How we work</h2>
          <p className="text-[#999999] max-w-2xl mx-auto">
            A proven, systematic approach to digital transformation. We don't guess; we strategize, build, and optimize.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl group hover:border-[#E2FF3B]/30 transition-all relative overflow-hidden"
            >
              <div className="text-6xl font-black text-white/5 absolute -top-2 -right-2 leading-none">
                {step.id}
              </div>
              <div className="w-12 h-12 rounded-xl glass flex items-center justify-center mb-8 bg-white/5 text-[#E2FF3B]">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold mb-4">{step.title}</h3>
              <p className="text-xs text-[#555555] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
