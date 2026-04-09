'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-height-[100vh] flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-40 z-0">
        <img
          src="/assets/abstract modern digital agency 3d shapes dark theme with neon yellow accents high quality.png"
          alt="Abstract Shapes"
          className="absolute right-0 w-full h-full object-contain scale-125"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-[#E2FF3B]" />
              <span className="text-xs uppercase tracking-widest text-[#E2FF3B] font-bold">Available for new projects</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8">
              Strategic Design <br />
              <span className="text-[#555555]">That Drives</span> <br />
              Measurable Growth.
            </h1>

            <p className="text-lg md:text-xl text-[#999999] mb-12 leading-relaxed max-w-xl">
              We partner with visionary founders and forward-thinking brands to deliver digital transformation through strategic creativity and AI innovation.
            </p>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                to="/booking" 
                className="w-full sm:w-auto bg-[#E2FF3B] text-black px-8 py-4 rounded-full font-bold flex items-center justify-center hover:scale-105 transition-transform group"
              >
                Book a Free Strategy Call
                <motion.span 
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowUpRight size={20} />
                </motion.span>
              </Link>
              
              <Link 
                to="/case-studies" 
                className="w-full sm:w-auto text-white border-b border-white/20 pb-1 hover:border-[#E2FF3B] transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>

          {/* Tags */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 flex flex-wrap gap-4"
          >
            {['Website Design & Dev', 'Branding Strategy', 'AI Integration', 'Growth Marketing'].map((tag) => (
              <span key={tag} className="text-[10px] uppercase tracking-widest glass px-4 py-2 rounded-full text-[#555555]">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}
