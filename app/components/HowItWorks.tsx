"use client";
import React from "react";
import { Calendar, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const STEPS = [
  { title: "Book Online", desc: "Customize your service and schedule in under 60 seconds.", icon: Calendar },
  { title: "We Clean", desc: "Our elite, fully equipped team arrives with precision.", icon: Sparkles },
  { title: "You Relax", desc: "Step into an immaculate space, guaranteed.", icon: CheckCircle2 },
];

export default function HowItWorks() {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden border-b-[6px] border-black">
      {/* Background Dots */}
      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-blue-600 px-4 py-2 font-black uppercase text-white border-2 border-black shadow-[2px_2px_0px_#000] mb-6 -rotate-2"
          >
            Process
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-black tracking-tighter uppercase leading-none"
          >
            Effortless from <br/><span className="text-yellow-400 inline-block mt-2" style={{textShadow: "3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"}}>START TO FINISH.</span>
          </motion.h3>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative">
          
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[48px] left-[15%] right-[15%] h-[4px] bg-black z-0 border-y-2 border-black"></div>

          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div 
                key={s.title} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="flex-1 relative flex flex-col items-center z-10 w-full group"
              >
                <div className="w-24 h-24 rounded-full bg-yellow-400 border-[4px] border-black flex items-center justify-center relative overflow-hidden transition-transform duration-300 shadow-[4px_4px_0px_#000] group-hover:-translate-y-2 group-hover:shadow-[6px_6px_0px_#000] group-hover:bg-blue-600 group-hover:text-white text-black">
                  <Icon className="w-10 h-10 stroke-[2.5]" />
                </div>
                
                <h4 className="mt-8 text-2xl font-black text-black tracking-tighter uppercase bg-white px-2 border-2 border-black shadow-[2px_2px_0px_#000]">
                  <span className="text-blue-600 mr-2">{i + 1}.</span>{s.title}
                </h4>
                <p className="mt-4 text-black font-bold max-w-xs text-center text-lg leading-tight bg-white p-3 border-2 border-black shadow-[4px_4px_0px_#000] rotate-1">
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
