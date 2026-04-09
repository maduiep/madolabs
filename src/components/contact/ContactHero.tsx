'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactHero() {
  return (
    <section className="pt-40 pb-20 bg-black relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-[#E2FF3B]" />
              <span className="text-xs uppercase tracking-widest text-[#E2FF3B] font-bold">Get In Touch</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 uppercase leading-[1.1]">
              Let's <span className="text-[#555555]">talk.</span>
            </h1>
            
            <p className="text-lg text-[#999999] max-w-md leading-relaxed mb-16">
              Have a visionary project in mind? We'd love to hear about it. Tell us about your goals and let's see how we can help you scale.
            </p>

            <div className="space-y-10">
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 rounded-full glass flex items-center justify-center text-[#E2FF3B] bg-white/5">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#555555] font-bold mb-1">Email us</p>
                  <p className="text-xl font-bold">hello@madolabs.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 rounded-full glass flex items-center justify-center text-[#E2FF3B] bg-white/5">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#555555] font-bold mb-1">Call us</p>
                  <p className="text-xl font-bold">+1 (234) 567-890</p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 rounded-full glass flex items-center justify-center text-[#E2FF3B] bg-white/5">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#555555] font-bold mb-1">Our Studio</p>
                  <p className="text-xl font-bold">Tech District, NY 10001</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass p-12 rounded-[40px]"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-[#555555] font-bold ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-[#E2FF3B] outline-none transition-colors text-white" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-[#555555] font-bold ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-[#E2FF3B] outline-none transition-colors text-white" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-[#555555] font-bold ml-1">Company Name</label>
                <input 
                  type="text" 
                  placeholder="Acme Corp" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-[#E2FF3B] outline-none transition-colors text-white" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-[#555555] font-bold ml-1">Your Message</label>
                <textarea 
                  rows={4} 
                  placeholder="How can we help you?" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-[#E2FF3B] outline-none transition-colors text-white resize-none"
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#E2FF3B] text-black py-6 rounded-2xl font-bold flex items-center justify-center space-x-3 hover:scale-105 transition-transform"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
}
