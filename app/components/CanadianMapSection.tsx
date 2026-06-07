"use client";
import React from "react";
import { motion } from "framer-motion";

export default function CanadianMapSection() {
  return (
    <section id="locations" className="py-32 bg-white relative overflow-hidden border-b-[6px] border-black">
      {/* Background Dots */}
      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Column: Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 md:p-10 border-4 border-black shadow-[8px_8px_0px_#000] transform -rotate-1"
        >
          <div className="inline-block px-4 py-2 bg-yellow-400 border-2 border-black font-black uppercase text-black text-sm mb-6 shadow-[2px_2px_0px_#000] rotate-2">
            Made in Canada, For Canada
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-none tracking-tighter text-black uppercase">
            Transform Your Home with Canada's <span className="bg-blue-600 text-white px-2 inline-block mt-2 transform rotate-1">Leading Crew</span>
          </h2>
          
          <div className="space-y-4 text-lg font-bold text-black leading-snug">
            <p>
              SparkleNest is a people-based cleaning service that was first established in 2017 in the city of Guelph, ON. Since our inception, our easy cleaning model has attracted thousands of Canadians and has allowed us to expand rapidly across Canada.
            </p>
            <p>
              We're now proud to work with amazing cleaning partners across multiple provinces, serving areas including <span className="text-blue-600 underline decoration-4 underline-offset-2 decoration-yellow-400">Toronto, Vancouver, Calgary, Edmonton, Ottawa, London, Waterloo, Oakville, Burlington, Niagara region</span>, and more!
            </p>
            <p>
              Our cleaning professionals are carefully handpicked and screened to give you the quality cleaning service your home deserves. Our cleaning team is friendly, experienced, insured, and ready to make your life easier!
            </p>
            <p className="pt-4 text-xl bg-yellow-400 inline-block px-2 border-2 border-black -rotate-1">
              <a href="/book" className="hover:text-blue-600 transition-colors">Book a cleaning online</a> or call us at <strong>1-888-477-MAID</strong>
            </p>
          </div>
        </motion.div>

        {/* Right Column: Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-full max-w-xl group">
            {/* Background offset block */}
            <div className="absolute inset-0 bg-blue-600 border-4 border-black rounded-2xl transform translate-x-4 translate-y-4"></div>
            
            <div className="relative bg-white border-4 border-black rounded-2xl flex items-center justify-center p-8 overflow-hidden z-10 transition-transform duration-500 hover:-translate-y-2 hover:-translate-x-2">
              {/* Official Canada Map Image */}
              <img 
                src="https://hellamaid.ca/wp-content/uploads/2025/05/Untitled-design-2025-05-27T135223.595.png.webp" 
                alt="Hellamaid Service Areas Map" 
                className="w-full h-full object-contain filter drop-shadow-[2px_2px_0px_rgba(0,0,0,0.2)]"
              />
              
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-yellow-400 border-4 border-black px-4 md:px-6 py-2 font-black uppercase text-black text-lg md:text-xl shadow-[4px_4px_0px_#000] rotate-3 whitespace-nowrap">
                COAST TO COAST
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
