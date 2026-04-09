'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';


export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for window load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#000000',
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 1, 
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{ position: 'relative', width: '200px', height: '60px' }}
          >
            <img
              src="/assets/Logo.png"
              alt="MadoLabs Logo"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </motion.div>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '150px' }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{
              height: '2px',
              backgroundColor: '#E2FF3B',
              marginTop: '20px',
              borderRadius: '2px'
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
