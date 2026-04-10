'use client';

import { motion } from 'framer-motion';


const sections = [
  {
    title: 'Our Mission',
    description: 'To bridge the gap between visionary ideas and tangible business growth. We believe that exceptional design is not just aesthetic—it is a strategic tool that solves complex problems, streamlines operations, and elevates brand perception.',
    extra: 'Every great solution begins with a deep understanding of the core challenge. We partner with founders and marketing leaders to uncover inefficiencies and design digital ecosystems that perform.',
    image: '/assets/vision-mission-grid.png',
    reverse: false
  },
  {
    title: 'Our Vision',
    description: 'To be the definitive catalyst for digital transformation, setting new standards for how agencies and clients collaborate to build the future of the web.',
    points: [
      { title: 'Strategy First', text: 'We never design in a vacuum. Every pixel serves a business objective.' },
      { title: 'Uncompromising Craft', text: 'Attention to detail that borders on obsession. We build to last.' }
    ],
    image: '/assets/vision-mission-network.png',
    reverse: true
  }
];

export default function MissionVision() {
  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6 md:px-12 space-y-24 md:space-y-32">
        {sections.map((section, idx) => (
          <div key={idx} className={`flex flex-col ${section.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 md:gap-24`}>
            {/* Image Col */}
            <motion.div 
              initial={{ opacity: 0, x: section.reverse ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1 w-full"
            >
              <div className="relative aspect-square rounded-[40px] overflow-hidden glass">
                <img
                  src={section.image}
                  alt={section.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
              </div>
            </motion.div>

            {/* Content Col */}
            <motion.div 
              initial={{ opacity: 0, x: section.reverse ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1 space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold">{section.title}</h2>
              <p className="text-lg text-[#999999] leading-relaxed">
                {section.description}
              </p>
              
              {section.extra && (
                <p className="text-sm text-[#888888] leading-relaxed">
                  {section.extra}
                </p>
              )}

              {section.points && (
                <div className="space-y-6 pt-4">
                  {section.points.map((point, pIdx) => (
                    <div key={pIdx} className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <span className="w-5 h-5 rounded-full bg-[#E2FF3B]/20 flex items-center justify-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E2FF3B]" />
                        </span>
                        <h4 className="font-bold text-white">{point.title}</h4>
                      </div>
                      <p className="text-sm text-[#888888] ml-8">{point.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
      
    </section>
  );
}
