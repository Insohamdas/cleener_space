"use client";
import React from "react";
import { motion } from "framer-motion";

const SERVICES = [
  { title: "Condo Cleaning", desc: "Specialized condo cleaning, perfect for high-rise living.", img: "https://hellamaid.ca/wp-content/uploads/2024/04/3.png" },
  { title: "Move In Move Out", desc: "Move in/out cleaning for tenants, landlords, and sellers.", img: "https://hellamaid.ca/wp-content/uploads/2024/04/4.png" },
  { title: "Deep Cleaning", desc: "Deep cleaning that removes dust and hard-to-reach grime.", img: "https://hellamaid.ca/wp-content/uploads/2024/04/5.png" },
  { title: "Post Renovation", desc: "Fast and thorough post-construction cleaning to remove dust and debris.", img: "https://hellamaid.ca/wp-content/uploads/2024/04/6.png" },
  { title: "AirBnB Cleaning", desc: "Airbnb cleaning to refresh your rental and impress every guest.", img: "https://hellamaid.ca/wp-content/uploads/2024/04/7.png" },
  { title: "Office Cleaning", desc: "Reliable office and commercial cleaning to maintain a clean, professional workspace.", img: "https://hellamaid.ca/wp-content/uploads/2024/04/10.png" },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-32 bg-yellow-400 relative overflow-hidden border-b-[6px] border-black">
      {/* Doodle Accents */}
      <svg className="absolute left-10 top-10 w-24 h-24 text-black opacity-20 rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
      <svg className="absolute right-10 bottom-10 w-32 h-32 text-blue-600 opacity-20 -rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-white px-4 py-2 font-black uppercase text-black border-2 border-black shadow-[2px_2px_0px_#000] mb-6 rotate-2"
          >
            Capabilities
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black tracking-tighter text-black uppercase leading-none"
          >
            Meticulous care for <br/><span className="text-white inline-block mt-2" style={{textShadow: "3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"}}>EVERY SPACE.</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-black font-bold leading-tight mt-6 bg-white border-2 border-black p-3 shadow-[4px_4px_0px_#000] -rotate-1"
          >
            We deploy specialized teams equipped for specific environments, ensuring unparalleled precision and reliability.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s, i) => (
            <motion.div 
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white border-4 border-black p-8 flex flex-col items-center text-center shadow-[6px_6px_0px_#000] hover:shadow-[10px_10px_0px_#2563EB] hover:-translate-y-2 hover:-translate-x-1 transition-all duration-300"
            >
              <div className="w-32 h-32 mb-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <img src={s.img} alt={s.title} className="w-full h-full object-contain filter drop-shadow-[4px_4px_0px_rgba(0,0,0,0.1)]" />
              </div>
              <h4 className="text-2xl font-black text-black mb-4 tracking-tight uppercase bg-yellow-400 px-2 shadow-[2px_2px_0px_#000]">{s.title}</h4>
              <p className="text-black font-bold leading-tight">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
