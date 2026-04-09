'use client';

import { motion } from 'framer-motion';

import { Linkedin, Twitter } from '@/components/ui/SocialIcons';

const team = [
  {
    name: 'Michael Carter',
    role: 'Founder & Strategy Lead',
    image: '/assets/team-1.png'
  },
  {
    name: 'Ryan Davis',
    role: 'Head of Design',
    image: '/assets/team-2.png'
  },
  {
    name: 'Jessica Walker',
    role: 'Technical Director',
    image: '/assets/team-3.png'
  },
  {
    name: 'Sarah Chen',
    role: 'Growth Strategist',
    image: '/assets/team-4.png'
  }
];

export default function Team() {
  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl mb-6">Meets our experts</h2>
          <p className="text-[#999999] max-w-2xl mx-auto">
            Discover the passionate team of innovators, strategists, and designers working tirelessly to help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden mb-6 glass">
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Social Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-[#E2FF3B] text-black flex items-center justify-center hover:scale-110 transition-transform">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-[#E2FF3B] text-black flex items-center justify-center hover:scale-110 transition-transform">
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-[#555555] uppercase tracking-widest">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
