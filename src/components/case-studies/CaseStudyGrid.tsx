'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const categories = ['All', 'Design', 'Development', 'AI'];

const projects = [
  {
    id: 'finflow',
    title: 'FinFlow Next-Gen Banking',
    category: 'Design',
    tags: ['UX/UI Design', 'Branding'],
    stat: '+210%',
    statLabel: 'User Retention',
    image: '/assets/project-finflow.png'
  },
  {
    id: 'aura',
    title: 'Aura Premium Retail',
    category: 'Design',
    tags: ['E-Commerce Strategy', '3D Design'],
    stat: '$4.2M',
    statLabel: 'Q1 Revenue',
    image: '/assets/project-aura.png'
  },
  {
    id: 'nexus-ai',
    title: 'Nexus Data Intelligence',
    category: 'AI',
    tags: ['AI Integration', 'Data Viz'],
    stat: '85%',
    statLabel: 'Efficiency Gain',
    image: '/assets/project-ai.png'
  }
];

export default function CaseStudyGrid() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = projects.filter(p => filter === 'All' || p.category === filter);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6 md:px-12">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full text-sm font-bold border transition-all ${
                filter === cat 
                  ? 'bg-[#E2FF3B] border-[#E2FF3B] text-black' 
                  : 'bg-transparent border-white/10 text-white hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-32">
          <AnimatePresence mode='wait'>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="group lg:flex items-center gap-20"
              >
                {/* Image Section */}
                <div className="flex-1 mb-10 lg:mb-0 relative aspect-[16/10] rounded-[40px] overflow-hidden glass group-hover:border-[#E2FF3B]/30 transition-all">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Floating Stat Card */}
                  <div className="absolute bottom-8 left-8 glass p-6 rounded-2xl">
                    <h4 className="text-3xl font-bold text-[#E2FF3B]">{project.stat}</h4>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-[#555555]">{project.statLabel}</p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 space-y-8">
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest text-[#555555] font-bold glass px-4 py-2 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-bold group-hover:text-[#E2FF3B] transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-[#999999] leading-relaxed max-w-md">
                    We transformed the digital footprint of {project.title.split(' ')[0]} by implementing a modern architecture and strategic design system that focused on user growth and performance.
                  </p>

                  <Link 
                    to={`/case-studies/${project.id}`}
                    className="inline-flex items-center bg-white text-black px-10 py-5 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-[#E2FF3B] transition-colors"
                  >
                    View Project <ArrowUpRight size={18} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      
    </section>
  );
}
