"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

// You can replace these with your actual before/after images
const TRANSFORMATIONS = [
  {
    id: 1,
    title: "Oven Restoration",
    before: "/pic2.png",
    after: "/pic3.png",
  },
  {
    id: 2,
    title: "Bathroom Deep Clean",
    before: "/pic4.png",
    after: "/pic5.png",
  },
  {
    id: 3,
    title: "Living Space Revival",
    before: "/pic6.png",
    after: "/pic7.png",
  }
];

export default function BeforeAfterGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % TRANSFORMATIONS.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + TRANSFORMATIONS.length) % TRANSFORMATIONS.length);
  };

  return (
    <section className="py-32 bg-white relative overflow-hidden border-b-[6px] border-black">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#0055FF 3px, transparent 3px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-white px-4 py-2 font-black uppercase text-blue-600 border-2 border-blue-600 shadow-[2px_2px_0px_#2563EB] mb-6 -rotate-2"
          >
            Real Results
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-black uppercase leading-none"
          >
            Witness the <br/><span className="bg-yellow-400 px-2 inline-block mt-2">TRANSFORMATION.</span>
          </motion.h3>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-[3px] border-black flex items-center justify-center text-black hover:bg-yellow-400 hover:-translate-x-1 hover:shadow-[6px_6px_0px_#000] transition-all shadow-[4px_4px_0px_#000] focus:outline-none"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 stroke-[3]" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-[3px] border-black flex items-center justify-center text-black hover:bg-yellow-400 hover:translate-x-1 hover:shadow-[6px_6px_0px_#000] transition-all shadow-[4px_4px_0px_#000] focus:outline-none"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8 stroke-[3]" />
          </button>

          {/* Slides */}
          <div className="overflow-hidden border-4 border-black shadow-[12px_12px_0px_#000] bg-white">
            <div 
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {TRANSFORMATIONS.map((t) => (
                <div key={t.id} className="min-w-full relative flex flex-col md:flex-row p-6 md:p-10 gap-6 md:gap-10 items-center justify-center">
                  
                  {/* Before Image */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden group border-4 border-black shadow-[6px_6px_0px_#000]">
                    <img src={t.before} alt={`Before ${t.title}`} className="w-full h-full object-cover grayscale-[50%] contrast-75 brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105" />
                    <div className="absolute bottom-4 left-4 px-6 py-2 bg-black border-2 border-white text-white text-lg font-black tracking-wide uppercase rotate-[-2deg]">
                      BEFORE
                    </div>
                  </div>

                  {/* Elegant Separator */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-yellow-400 border-4 border-black flex items-center justify-center -my-4 md:my-0 md:-mx-8 z-10 shadow-[4px_4px_0px_#000]">
                    <ArrowRight className="w-8 h-8 text-black rotate-90 md:rotate-0 stroke-[3]" />
                  </div>

                  {/* After Image */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden group border-4 border-black shadow-[6px_6px_0px_#2563EB]">
                    <img src={t.after} alt={`After ${t.title}`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    <div className="absolute bottom-4 right-4 px-6 py-2 bg-blue-600 border-2 border-white text-white text-lg font-black tracking-wide uppercase rotate-[2deg]">
                      AFTER
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-4 mt-12">
            {TRANSFORMATIONS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-4 rounded-none border-2 border-black transition-all duration-300 ${
                  i === activeIndex ? "bg-yellow-400 w-12 shadow-[2px_2px_0px_#000]" : "bg-white w-4 hover:bg-blue-600"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
