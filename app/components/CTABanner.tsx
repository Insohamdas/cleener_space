"use client";
import React from "react";
import { motion } from "framer-motion";

export default function CTABanner() {
  const [bedrooms, setBedrooms] = React.useState(1);
  const [bathrooms, setBathrooms] = React.useState(1);
  const [price, setPrice] = React.useState<number | null>(null);

  const handleSeePrice = () => {
    // Base price $100, + $30 per bed, + $40 per bath
    const total = 100 + (bedrooms * 30) + (bathrooms * 40);
    setPrice(total);
  };

  return (
    <section id="booknow" className="py-24 bg-blue-600 border-b-[6px] border-black relative overflow-hidden">
      
      {/* Background doodles */}
      <svg className="absolute left-10 bottom-10 w-32 h-32 text-black opacity-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
      <svg className="absolute right-4 lg:right-[45%] top-4 lg:top-[-10px] w-16 h-16 lg:w-24 lg:h-24 text-yellow-400 rotate-[135deg] lg:rotate-45 z-20 pointer-events-none drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7" /></svg>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side: Form */}
        <div className="bg-white p-8 md:p-12 border-[4px] border-black shadow-[8px_8px_0px_#000] rounded-xl transform -rotate-1">
          <h2 className="text-4xl md:text-5xl font-black text-black tracking-tighter uppercase mb-8">
            Try Our Cleaning Services Today!
          </h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-[#f4f4f5] border-2 border-black p-4 text-black font-bold placeholder-gray-500 shadow-[4px_4px_0px_#000] focus:outline-none focus:translate-y-1 focus:shadow-[2px_2px_0px_#000] transition-all"
              />
              <input 
                type="tel" 
                placeholder="Phone" 
                className="w-full bg-[#f4f4f5] border-2 border-black p-4 text-black font-bold placeholder-gray-500 shadow-[4px_4px_0px_#000] focus:outline-none focus:translate-y-1 focus:shadow-[2px_2px_0px_#000] transition-all"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <select 
                  className="w-full bg-[#f4f4f5] border-2 border-black p-4 text-black font-bold appearance-none shadow-[4px_4px_0px_#000] focus:outline-none focus:translate-y-1 focus:shadow-[2px_2px_0px_#000] transition-all"
                  value={bedrooms}
                  onChange={(e) => setBedrooms(parseInt(e.target.value))}
                >
                  <option value="1">1 Bedroom</option>
                  <option value="2">2 Bedrooms</option>
                  <option value="3">3 Bedrooms</option>
                  <option value="4">4+ Bedrooms</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-black">
                  <svg className="w-5 h-5 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
              
              <div className="relative">
                <select 
                  className="w-full bg-[#f4f4f5] border-2 border-black p-4 text-black font-bold appearance-none shadow-[4px_4px_0px_#000] focus:outline-none focus:translate-y-1 focus:shadow-[2px_2px_0px_#000] transition-all"
                  value={bathrooms}
                  onChange={(e) => setBathrooms(parseInt(e.target.value))}
                >
                  <option value="1">1 Bathroom</option>
                  <option value="2">2 Bathrooms</option>
                  <option value="3">3 Bathrooms</option>
                  <option value="4">4+ Bathrooms</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-black">
                  <svg className="w-5 h-5 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>

            {price !== null ? (
              <motion.div 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }}
                className="w-full mt-4 p-6 bg-yellow-400 border-[3px] border-black shadow-[6px_6px_0px_#000] text-center"
              >
                <p className="text-black font-bold uppercase tracking-widest text-sm mb-1">Your Estimated Price</p>
                <p className="text-black text-5xl font-black uppercase tracking-tighter">${price}</p>
                <a href="/book" className="inline-block mt-4 px-6 py-2 bg-black text-white font-black uppercase text-sm border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-colors">
                  Continue to Booking →
                </a>
              </motion.div>
            ) : (
              <button 
                type="button" 
                onClick={handleSeePrice}
                className="w-full mt-4 py-5 bg-yellow-400 text-black text-2xl font-black uppercase tracking-tight border-[3px] border-black shadow-[6px_6px_0px_#000] hover:-translate-y-1 hover:shadow-[8px_8px_0px_#000] transition-all"
              >
                See My Price
              </button>
            )}
          </form>
        </div>

        {/* Right Side: Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative lg:h-full flex items-end justify-center lg:justify-end"
        >
          {/* We use a placeholder image representing a cutout team if the exact Hellamaid one isn't transparent */}
          {/* A neo-brutalist trick is to give the image a hard black drop shadow filter */}
          <img 
            src="/pic1.png" 
            alt="Cleaning Team" 
            className="w-full max-w-xl object-contain transform rotate-2 lg:-translate-y-8 filter drop-shadow-[8px_8px_0px_#000] rounded-2xl border-4 border-black bg-white/20 backdrop-blur-sm p-4"
          />
        </motion.div>
        
      </div>
    </section>
  );
}
