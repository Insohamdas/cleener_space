"use client";
import React, { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function BookCleaningPage() {
  const [step, setStep] = useState(1);
  const [isConfirmed, setIsConfirmed] = useState(false);
  
  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-yellow-400 selection:text-black pt-28 pb-32">
      {/* Abstract Background pattern */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0055FF 3px, transparent 3px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-4xl mx-auto px-6 py-12 relative z-10">
        
        <div className="text-center mb-12">
           <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-yellow-400 px-4 py-2 font-black uppercase text-black border-2 border-black shadow-[2px_2px_0px_#000] mb-6 -rotate-2"
          >
            Almost done!
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-none"
          >
            Book your <span className="bg-blue-600 text-white px-2 inline-block transform rotate-1 mt-2">CLEANING.</span>
          </motion.h1>
        </div>

        {/* Form Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white border-[6px] border-black p-6 md:p-12 shadow-[12px_12px_0px_#000] rounded-2xl relative"
        >
          {/* Progress Bar */}
          <div className="flex justify-between mb-12 relative">
             <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-200 -translate-y-1/2 border-2 border-black z-0"></div>
             <div className="absolute top-1/2 left-0 h-2 bg-yellow-400 -translate-y-1/2 border-y-2 border-black z-0 transition-all duration-300" style={{ width: step === 1 ? '33%' : step === 2 ? '66%' : '100%' }}></div>
             
             {[1, 2, 3].map((num) => (
               <div key={num} className={`relative z-10 w-12 h-12 rounded-full border-4 border-black flex items-center justify-center font-black text-lg transition-colors duration-300 ${step >= num ? 'bg-yellow-400 text-black' : 'bg-white text-gray-400'}`}>
                 {step > num ? <Check className="w-6 h-6" strokeWidth={4} /> : num}
               </div>
             ))}
          </div>

          <form className="space-y-8" onSubmit={(e) => { 
            e.preventDefault(); 
            if (step < 3) {
              setStep(step + 1);
            } else {
              setIsConfirmed(true);
            }
          }}>
            
            {/* STEP 1: Home Details */}
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                <h2 className="text-3xl font-black uppercase mb-6">1. About your home</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold uppercase mb-2">Bedrooms</label>
                    <select className="w-full p-4 bg-[#f4f4f5] border-4 border-black font-bold appearance-none shadow-[4px_4px_0px_#000] focus:outline-none focus:translate-y-1 focus:shadow-[2px_2px_0px_#000] transition-all">
                      <option>1 Bedroom</option>
                      <option>2 Bedrooms</option>
                      <option>3 Bedrooms</option>
                      <option>4+ Bedrooms</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold uppercase mb-2">Bathrooms</label>
                    <select className="w-full p-4 bg-[#f4f4f5] border-4 border-black font-bold appearance-none shadow-[4px_4px_0px_#000] focus:outline-none focus:translate-y-1 focus:shadow-[2px_2px_0px_#000] transition-all">
                      <option>1 Bathroom</option>
                      <option>2 Bathrooms</option>
                      <option>3 Bathrooms</option>
                      <option>4+ Bathrooms</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold uppercase mb-2">Cleaning Type</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {['Standard', 'Deep Clean', 'Move In/Out'].map((type, i) => (
                      <label key={i} className="cursor-pointer">
                        <input type="radio" name="cleaningType" className="peer sr-only" defaultChecked={i === 0} />
                        <div className="p-4 border-4 border-black text-center font-bold uppercase bg-white peer-checked:bg-blue-600 peer-checked:text-white transition-colors hover:bg-gray-100 shadow-[4px_4px_0px_#000] peer-checked:translate-y-1 peer-checked:shadow-[2px_2px_0px_#000]">
                          {type}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 2: Date & Time */}
            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                <h2 className="text-3xl font-black uppercase mb-6">2. When should we come?</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold uppercase mb-2">Date</label>
                    <input type="date" className="w-full p-4 bg-[#f4f4f5] border-4 border-black font-bold shadow-[4px_4px_0px_#000] focus:outline-none focus:translate-y-1 focus:shadow-[2px_2px_0px_#000] transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold uppercase mb-2">Time</label>
                    <select className="w-full p-4 bg-[#f4f4f5] border-4 border-black font-bold appearance-none shadow-[4px_4px_0px_#000] focus:outline-none focus:translate-y-1 focus:shadow-[2px_2px_0px_#000] transition-all">
                      <option>Morning (8am - 12pm)</option>
                      <option>Afternoon (12pm - 4pm)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold uppercase mb-2">How often?</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['Once', 'Weekly', 'Bi-Weekly', 'Monthly'].map((freq, i) => (
                      <label key={i} className="cursor-pointer">
                        <input type="radio" name="frequency" className="peer sr-only" defaultChecked={i === 2} />
                        <div className="p-3 border-4 border-black text-center font-bold uppercase bg-white peer-checked:bg-yellow-400 transition-colors hover:bg-gray-100 shadow-[4px_4px_0px_#000] peer-checked:translate-y-1 peer-checked:shadow-[2px_2px_0px_#000] text-sm">
                          {freq}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 3: Contact Info */}
            {step === 3 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                <h2 className="text-3xl font-black uppercase mb-6">3. Your Details</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold uppercase mb-2">First Name</label>
                    <input type="text" placeholder="John" className="w-full p-4 bg-[#f4f4f5] border-4 border-black font-bold shadow-[4px_4px_0px_#000] focus:outline-none focus:translate-y-1 focus:shadow-[2px_2px_0px_#000] transition-all" required />
                  </div>
                  <div>
                    <label className="block text-sm font-bold uppercase mb-2">Last Name</label>
                    <input type="text" placeholder="Doe" className="w-full p-4 bg-[#f4f4f5] border-4 border-black font-bold shadow-[4px_4px_0px_#000] focus:outline-none focus:translate-y-1 focus:shadow-[2px_2px_0px_#000] transition-all" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold uppercase mb-2">Email</label>
                    <input type="email" placeholder="john@example.com" className="w-full p-4 bg-[#f4f4f5] border-4 border-black font-bold shadow-[4px_4px_0px_#000] focus:outline-none focus:translate-y-1 focus:shadow-[2px_2px_0px_#000] transition-all" required />
                  </div>
                  <div>
                    <label className="block text-sm font-bold uppercase mb-2">Phone</label>
                    <input type="tel" placeholder="(555) 555-5555" className="w-full p-4 bg-[#f4f4f5] border-4 border-black font-bold shadow-[4px_4px_0px_#000] focus:outline-none focus:translate-y-1 focus:shadow-[2px_2px_0px_#000] transition-all" required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold uppercase mb-2">Service Address</label>
                  <input type="text" placeholder="123 Main St, City, Prov, A1B 2C3" className="w-full p-4 bg-[#f4f4f5] border-4 border-black font-bold shadow-[4px_4px_0px_#000] focus:outline-none focus:translate-y-1 focus:shadow-[2px_2px_0px_#000] transition-all" required />
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex flex-col-reverse md:flex-row gap-4 pt-8 border-t-4 border-black mt-8">
              {step > 1 && (
                <button 
                  type="button" 
                  onClick={() => setStep(step - 1)}
                  className="w-full md:w-auto px-6 md:px-8 py-4 bg-white border-4 border-black font-black uppercase text-lg shadow-[4px_4px_0px_#000] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] transition-all"
                >
                  Back
                </button>
              )}
              
              <button 
                type="submit" 
                className="flex-1 w-full px-6 md:px-8 py-4 bg-yellow-400 border-4 border-black font-black uppercase text-lg shadow-[4px_4px_0px_#000] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] transition-all flex items-center justify-center gap-2"
              >
                {step < 3 ? (
                  <>Continue <ArrowRight strokeWidth={3} /></>
                ) : (
                  <>Complete Booking ✨</>
                )}
              </button>
            </div>
            
          </form>
        </motion.div>
      </div>

      {/* Full Screen Confirmation Animation */}
      {isConfirmed && (
        <motion.div 
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className="fixed inset-0 z-[100] bg-blue-600 flex flex-col items-center justify-center p-6 border-[12px] border-black"
        >
          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
            className="w-32 h-32 bg-yellow-400 rounded-full border-8 border-black flex items-center justify-center mb-8 shadow-[12px_12px_0px_#000]"
          >
            <Check className="w-16 h-16 text-black" strokeWidth={5} />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-5xl md:text-7xl font-black text-white uppercase text-center tracking-tighter mb-6"
            style={{ textShadow: "4px 4px 0px #000" }}
          >
            Booking<br />Confirmed!
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-xl md:text-2xl font-bold text-white text-center max-w-lg mb-12"
          >
            Our cleaning squad is ready to make your space sparkle. Check your email for details.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            onClick={() => window.location.href = '/'}
            className="px-8 py-4 bg-white text-black text-2xl font-black uppercase border-4 border-black shadow-[8px_8px_0px_#000] hover:-translate-y-1 hover:shadow-[12px_12px_0px_#000] transition-all"
          >
            Return Home
          </motion.button>
        </motion.div>
      )}
    </main>
  );
}
