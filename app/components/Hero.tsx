"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center bg-white pt-28 pb-32 lg:pb-16">
      
      {/* Hand-drawn abstract background shapes (SVG) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Yellow Starburst behind image */}
        <svg className="absolute right-[-10%] top-[10%] w-[800px] h-[800px] text-yellow-300 opacity-60" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0L55 40L95 30L60 55L90 85L50 65L10 85L40 55L5 30L45 40Z" />
        </svg>

        <svg className="absolute left-[45%] top-[20%] hidden md:block w-16 h-16 text-blue-600 rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
        <svg className="absolute left-[10%] bottom-[15%] hidden md:block w-24 h-24 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L15 8L22 9L17 14L18 21L12 17L6 21L7 14L2 9L9 8Z" />
        </svg>
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Column - Copy & Buttons */}
        <div className="text-left space-y-6 pt-10">
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative inline-block"
          >
            <span className="text-sm md:text-base font-black italic tracking-widest text-black uppercase relative z-10">
              For Discerning Homeowners
            </span>
            {/* Hand-drawn underline */}
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-blue-600" viewBox="0 0 100 10" preserveAspectRatio="none" stroke="currentColor" strokeWidth="3" fill="none">
              <path d="M0,5 Q50,0 100,5" />
            </svg>
            
            {/* Crown Doodle */}
            <svg className="absolute -top-12 -right-16 w-12 h-12 text-blue-600 rotate-12 hidden md:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
            </svg>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-[3.5rem] md:text-[6rem] lg:text-[7rem] font-black leading-[0.95] md:leading-[0.85] tracking-tighter text-black uppercase"
          >
            NOT YOUR <br className="hidden md:block"/>
            <span className="text-blue-600 inline-block mt-2">AVERAGE MAIDS.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl md:text-2xl text-black font-medium max-w-lg leading-snug mt-6"
          >
            Get <span className="bg-yellow-400 px-2 font-bold inline-block -skew-x-3">real cleanliness</span>, <span className="bg-yellow-400 px-2 font-bold inline-block -skew-x-3">real free time</span>, and <span className="bg-yellow-400 px-2 font-bold inline-block -skew-x-3">real peace of mind</span> while everyone else is still scrubbing.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4 pt-6"
          >
            <a href="/book" className="px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-black text-lg uppercase tracking-tight transition-transform transform hover:-translate-y-1 rounded shadow-[4px_4px_0px_#000]">
              Book a Cleaning →
            </a>
            
            <div className="flex rounded shadow-[4px_4px_0px_#000] border-2 border-black overflow-hidden hover:-translate-y-1 transition-transform">
              <a href="#services" className="px-6 py-4 bg-white text-black font-black text-lg uppercase tracking-tight">
                Explore Services
              </a>
              <div className="px-4 bg-blue-600 flex items-center justify-center text-white border-l-2 border-black">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </motion.div>
          
          <div className="pt-12">
             <div className="inline-block bg-yellow-400 px-4 py-2 font-black uppercase text-sm border-2 border-black shadow-[2px_2px_0px_#000]">
               Why homeowners choose us
             </div>
          </div>
        </div>

        {/* Right Column - Dynamic Images / Stickers */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative lg:h-[600px] flex items-center justify-center mt-12 lg:-mt-16"
        >
          {/* Main Hero Image */}
          <div className="relative z-10 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src="/pic1.png" 
              alt="Cleaning Team" 
              className="w-full max-w-xl rounded-2xl border-[6px] border-white shadow-[8px_8px_0px_#000]"
            />
          </div>



          {/* Floating Sticker 2 */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-16 md:bottom-10 left-0 md:-left-6 z-20 bg-white border-[3px] border-black p-2 md:p-3 rounded-xl shadow-[4px_4px_0px_#000] -rotate-6 flex items-center gap-2 md:gap-3"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15 8L22 9L17 14L18 21L12 17L6 21L7 14L2 9L9 8Z" /></svg>
            </div>
            <div>
              <div className="font-black text-xs md:text-sm">5.0 ★ RATING</div>
              <div className="font-bold text-[10px] md:text-xs text-gray-500">10,000+ happy clients</div>
            </div>
          </motion.div>

          {/* Floating Sticker 3 */}
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-4 right-0 md:right-4 z-20 bg-black text-white p-3 md:p-4 rounded-xl shadow-[6px_6px_0px_#fbb932] rotate-3"
          >
            <div className="font-bold text-[10px] md:text-xs text-green-400 mb-1 flex items-center gap-1">
              <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              House Cleaned! 🧹
            </div>
            <div className="font-bold text-xs md:text-sm">Keep relaxing 🔥</div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
