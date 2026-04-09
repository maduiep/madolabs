'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '150%', label: 'Increase in Leads' },
  { value: '120%', label: 'Conversion Rate' },
  { value: '$8.5M', label: 'Client Revenue Generated' },
  { value: '50+', label: 'Successful Transformations' },
];

export default function Stats() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center md:text-left border-l border-white/10 pl-8"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-[#E2FF3B] mb-2">{stat.value}</h3>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#555555] font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
