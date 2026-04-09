'use client';

import { motion } from 'framer-motion';
import { Palette, Code2, Bot, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const capabilities = [
  {
    title: 'Digital Product Design',
    description: 'Strategic UX/UI design that prioritizes user conversion while maintaining premium brand aesthetics.',
    icon: <Palette size={24} className="text-[#E2FF3B]" />,
    features: ['UX Research & Strategy', 'High-Fidelity UI Design', 'Design Systems'],
    link: '/services'
  },
  {
    title: 'Engineering & Web',
    description: 'High-performance web architecture built for speed, SEO, and seamless content management.',
    icon: <Code2 size={24} className="text-[#E2FF3B]" />,
    features: ['Full-Stack Development', 'CMS Integration', 'Performance Optimization'],
    link: '/services'
  },
  {
    title: 'AI & Automation',
    description: 'Integrating cutting-edge AI solutions to automate workflows and personalize user experiences.',
    icon: <Bot size={24} className="text-[#E2FF3B]" />,
    features: ['Workflow Automation', 'Custom AI Agents', 'Data Infrastructure'],
    link: '/services'
  }
];

export default function Capabilities() {
  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl mb-6">
              Capabilities designed for <br />
              <span className="text-[#555555]">scale.</span>
            </h2>
            <p className="text-[#999999] leading-relaxed">
              We combine strategic thinking with premium execution to deliver solutions that actually impact your bottom line.
            </p>
          </div>
          <Link 
            to="/services" 
            className="hidden md:flex bg-[#E2FF3B] text-black px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform"
          >
            See Full Services
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-3xl group hover:border-[#E2FF3B]/30 transition-all"
            >
              <div className="w-14 h-14 rounded-xl glass flex items-center justify-center mb-8 bg-white/5">
                {cap.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{cap.title}</h3>
              <p className="text-sm text-[#999999] mb-8 leading-relaxed">
                {cap.description}
              </p>
              
              <ul className="space-y-3 mb-12">
                {cap.features.map((feature) => (
                  <li key={feature} className="flex items-center text-xs text-[#555555]">
                    <span className="text-[#E2FF3B] mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link 
                to={cap.link}
                className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#E2FF3B] group-hover:translate-x-2 transition-transform"
              >
                Explore Service
                <ArrowUpRight size={14} className="ml-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
