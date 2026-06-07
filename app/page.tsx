"use client";
import React from "react";
import Hero from "./components/Hero";
import ServicesGrid from "./components/ServicesGrid";
import HowItWorks from "./components/HowItWorks";
import BeforeAfterGallery from "./components/BeforeAfterGallery";
import VideoTestimonials from "./components/VideoTestimonials";
import CanadianMapSection from "./components/CanadianMapSection";
import CTABanner from "./components/CTABanner";
import FooterNew from "./components/FooterNew";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-yellow-400 selection:text-black">
      <Hero />
      <HowItWorks />
      <ServicesGrid />
      <BeforeAfterGallery />
      <VideoTestimonials />
      <CanadianMapSection />

      {/* Experience the Difference - Neo Brutalism Style */}
      <section id="careers" className="py-32 relative overflow-hidden bg-white border-y-[6px] border-black">
        {/* Abstract Background patterns */}
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-[0.9] tracking-tighter text-black uppercase">
              Experience a standard of clean you can <span className="text-blue-600 block mt-2">depend on.</span>
            </h2>
            <p className="text-xl text-black font-bold mb-8 leading-relaxed max-w-lg">
              We're reshaping the entire cleaning experience for both homeowners and cleaners. 
              By combining intuitive technology with meticulously vetted professionals, we deliver a service that feels effortless.
            </p>
            <ul className="space-y-5 mb-10">
              {[
                "Delighting Homeowners with pristine results",
                "Supporting Communities through fair wages",
                "Empowering Cleaners with modern tools"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-lg text-black font-black border-2 border-black p-3 bg-white shadow-[4px_4px_0px_#000] rotate-1 hover:rotate-0 transition-transform">
                  <CheckCircle2 className="text-blue-600 w-6 h-6 flex-shrink-0" strokeWidth={3} />
                  {item}
                </li>
              ))}
            </ul>
            <a href="/book" className="inline-flex items-center justify-center px-8 py-4 font-black text-lg bg-yellow-400 text-black border-2 border-black shadow-[4px_4px_0px_#000] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] transition-all uppercase">
              Book your first cleaning
            </a>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-3 translate-x-2 translate-y-2 border-2 border-black"></div>
            <img 
              src="/pic1.png" 
              alt="SparkleNest cleaning team" 
              className="rounded-2xl border-4 border-black relative z-10 w-full object-cover" 
            />
            
            {/* Floating Element */}
            <div className="absolute -bottom-6 -left-6 bg-white border-4 border-black p-4 rounded-xl shadow-[6px_6px_0px_#000] z-20 flex items-center gap-4 rotate-[-4deg]">
              <div className="w-12 h-12 rounded-lg bg-yellow-400 flex items-center justify-center border-2 border-black">
                <CheckCircle2 className="text-black w-6 h-6" strokeWidth={3} />
              </div>
              <div>
                <p className="text-black font-black uppercase tracking-tight text-lg leading-tight">100% Guaranteed</p>
                <p className="text-black font-bold text-sm">Satisfaction or re-clean</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gift Cards */}
      <section className="py-32 bg-blue-600 border-b-[6px] border-black">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-yellow-400 rounded-[2rem] transform -rotate-3 translate-x-3 translate-y-3 border-4 border-black"></div>
            <img 
              src="https://hellamaid.ca/wp-content/uploads/2023/09/House-Cleaning-Gift-Card-4.png" 
              alt="Gift Cards" 
              className="w-full max-w-md mx-auto relative z-10 border-4 border-black rounded-[2rem] bg-white transform hover:scale-105 transition-transform duration-300 shadow-[8px_8px_0px_#000]" 
            />
          </motion.div>
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="order-1 lg:order-2"
          >
            <div className="inline-block px-4 py-2 bg-yellow-400 border-2 border-black font-black uppercase text-black text-sm mb-6 shadow-[2px_2px_0px_#000] -rotate-2">
              ✨ The Perfect Gift
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter leading-[0.9] text-white uppercase">Give the gift of <br/><span className="text-yellow-400 inline-block mt-2">time and peace.</span></h2>
            <p className="text-xl text-white font-bold mb-8 leading-snug">
              Consider the gift of a pristine home. Whether it's a birthday, a token of appreciation, or a thoughtful gesture for loved ones, our digital gift cards are delivered instantly and never expire.
            </p>
            <a href="#gift-cards" className="inline-flex items-center justify-center px-8 py-4 font-black text-lg bg-white text-black border-2 border-black shadow-[4px_4px_0px_#000] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] transition-all uppercase">
              Purchase Gift Card
            </a>
          </motion.div>
        </div>
      </section>

      <CTABanner />
      <FooterNew />
    </main>
  );
}
