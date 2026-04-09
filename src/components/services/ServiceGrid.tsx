'use client';

import { motion } from 'framer-motion';

import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'STRATEGIC DESIGN',
    description: 'Bridging the gap between user needs and business objectives through meticulous UX/UI and product strategy.',
    stats: [
      { label: 'CONVERSION', value: '+40%' },
      { label: 'WEEKS AVG', value: '4-8' },
      { label: 'CORE FOCUS', value: 'UI/UX' }
    ],
    image: '/assets/serv-1.png'
  },
  {
    title: 'BRANDING',
    description: 'Crafting compelling brand narratives and visual identities that resonate with target audiences and stand out.',
    stats: [
      { label: 'UNIQUE', value: '100%' },
      { label: 'WEEKS AVG', value: '6-10' },
      { label: 'CORE FOCUS', value: 'Identity' }
    ],
    image: '/assets/serv-2.png'
  },
  {
    title: 'MARKETING',
    description: 'Data-driven performance marketing and growth strategies to scale your user base and maximize ROI.',
    stats: [
      { label: 'AVG ROAS', value: '3x' },
      { label: 'TIMELINE', value: 'Ongoing' },
      { label: 'CORE FOCUS', value: 'Growth' }
    ],
    image: '/assets/serv-3.png'
  }
];

export default function ServiceGrid() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-[40px] flex flex-col hover:border-[#E2FF3B]/30 transition-all group"
            >
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-8 glass">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 uppercase">{service.title}</h3>
              <p className="text-sm text-[#999999] leading-relaxed mb-12 flex-grow">
                {service.description}
              </p>
              
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                {service.stats.map((stat, sIdx) => (
                  <div key={sIdx}>
                    <p className="text-[#E2FF3B] font-bold text-lg">{stat.value}</p>
                    <p className="text-[8px] text-[#555555] uppercase tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Website Building & AI Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-[40px] flex items-center justify-between group cursor-pointer hover:border-[#E2FF3B]/30 transition-all"
          >
            <div>
              <h3 className="text-3xl font-bold mb-4">WEBSITE BUILDING</h3>
              <p className="text-sm text-[#999999] max-w-xs mb-8">
                High-performance, scalable web platforms built with modern tech stacks for optimal speed and SEO.
              </p>
              <div className="text-[#E2FF3B] text-xs font-bold uppercase tracking-widest flex items-center">
                VIEW DELIVERABLES <ArrowUpRight size={14} className="ml-1" />
              </div>
            </div>
            <div className="hidden md:block w-32 h-32 relative">
              <img src="/assets/abstract modern digital agency 3d shapes dark theme with neon yellow accents high quality.png" alt="Icon" className="absolute inset-0 w-full h-full object-contain opacity-40" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-[40px] flex items-center justify-between group cursor-pointer hover:border-[#E2FF3B]/30 transition-all"
          >
            <div>
              <h3 className="text-3xl font-bold mb-4 uppercase">AI & Innovation</h3>
              <p className="text-sm text-[#999999] max-w-xs mb-8">
                Integrating cutting-edge AI solutions to automate workflows, personalize experiences, and future-proof your business.
              </p>
              <div className="text-[#E2FF3B] text-xs font-bold uppercase tracking-widest flex items-center">
                VIEW DELIVERABLES <ArrowUpRight size={14} className="ml-1" />
              </div>
            </div>
            <div className="hidden md:block w-32 h-32 relative">
               <img src="/assets/abstract modern digital agency 3d shapes dark theme with neon yellow accents high quality.png" alt="Icon" className="absolute inset-0 w-full h-full object-contain opacity-40 rotate-180" />
            </div>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
}
