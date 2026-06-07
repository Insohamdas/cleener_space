"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "unset";
    }, 2000);
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-yellow-400 flex flex-col items-center justify-center border-b-[12px] border-black overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 3px, transparent 3px)', backgroundSize: '30px 30px' }}></div>
          
          <motion.div
            animate={{ rotate: [0, 15, -15, 360] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-24 h-24 bg-blue-600 rounded-2xl border-[6px] border-black flex items-center justify-center shadow-[8px_8px_0px_#000] relative z-10 mb-8"
          >
            <Sparkles className="w-12 h-12 text-white" strokeWidth={3} />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", bounce: 0.6 }}
            className="relative z-10 text-center flex flex-col items-center"
          >
            <h1 className="text-5xl md:text-8xl font-black text-black uppercase tracking-tighter px-4" style={{ textShadow: "4px 4px 0px #fff" }}>
              SparkleNest
            </h1>
            
            <div className="mt-8 flex gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div 
                  key={i}
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                  className="w-4 h-4 bg-black rounded-full shadow-[2px_2px_0px_#fff]"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
