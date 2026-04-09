'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 'finflow',
    title: 'FinFlow Next-Gen Banking',
    category: 'UX/UI Design • Development • Branding',
    stat: '+210%',
    statLabel: 'User Retention',
    image: '/assets/project-finflow.png'
  },
  {
    id: 'aura',
    title: 'Aura Premium Retail',
    category: 'E-Commerce Strategy • 3D Design',
    stat: '$4.2M',
    statLabel: 'Q1 Revenue',
    image: '/assets/project-aura.png'
  }
];

export default function FeaturedWork() {
  return (
    <section className="py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl mb-4">
              Featured <span className="text-[#555555]">Work</span>
            </h2>
          </div>
          <div className="flex space-x-4">
            <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-[#E2FF3B] transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-[#E2FF3B] transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-8 bg-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay Card */}
                <div className="absolute top-6 right-6 glass p-6 rounded-2xl text-right">
                  <h4 className="text-2xl font-bold text-[#E2FF3B]">{project.stat}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-[#555555] font-bold">{project.statLabel}</p>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-[#E2FF3B] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#555555] uppercase tracking-widest">
                    {project.category}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-[#E2FF3B] group-hover:text-black transition-all">
                  <ArrowRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <Link 
            to="/case-studies" 
            className="inline-flex items-center text-sm font-bold uppercase tracking-widest border-b-2 border-[#E2FF3B] pb-2 hover:text-[#E2FF3B] transition-colors"
          >
            View all projects
          </Link>
        </div>
      </div>
      
    </section>
  );
}
