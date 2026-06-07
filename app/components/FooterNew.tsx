"use client";
import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

export default function FooterNew() {
  return (
    <footer id="contact" className="bg-black text-white py-20 border-t-[8px] border-black relative overflow-hidden">
      
      {/* Background doodle */}
      <svg className="absolute left-[10%] top-[20%] w-64 h-64 text-blue-600 opacity-20 rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 2L15 8L22 9L17 14L18 21L12 17L6 21L7 14L2 9L9 8Z" /></svg>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center transform -rotate-6 border-2 border-white shadow-[4px_4px_0px_#fbb932]">
                <Sparkles className="w-6 h-6 text-yellow-400" />
              </div>
              <span className="text-3xl font-black tracking-tight uppercase">SparkleNest</span>
            </div>
            <p className="text-xl font-bold max-w-sm mb-8">
              NOT YOUR AVERAGE CLEANING CREW. WE BUILD REAL CLEANLINESS BEFORE EVERYONE ELSE CATCHES UP.
            </p>
            <a href="/book" className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-black font-black uppercase tracking-tight border-2 border-white shadow-[4px_4px_0px_#fff] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#fff] transition-all">
              BOOK A CLEANING <ArrowRight className="w-5 h-5 stroke-[3]" />
            </a>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-2xl font-black uppercase mb-6 bg-blue-600 inline-block px-2 transform rotate-1">Company</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="font-bold text-lg hover:text-yellow-400 hover:pl-2 transition-all flex items-center gap-2"><ArrowRight className="w-4 h-4" /> About Us</a></li>
              <li><a href="#careers" className="font-bold text-lg hover:text-yellow-400 hover:pl-2 transition-all flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Careers</a></li>
              <li><a href="#press" className="font-bold text-lg hover:text-yellow-400 hover:pl-2 transition-all flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Press</a></li>
              <li><a href="#contact" className="font-bold text-lg hover:text-yellow-400 hover:pl-2 transition-all flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Contact</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-2xl font-black uppercase mb-6 bg-yellow-400 text-black inline-block px-2 transform -rotate-1">Services</h4>
            <ul className="space-y-4">
              <li><a href="#condo" className="font-bold text-lg hover:text-blue-400 hover:pl-2 transition-all flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Condo Cleaning</a></li>
              <li><a href="#move" className="font-bold text-lg hover:text-blue-400 hover:pl-2 transition-all flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Move In/Out</a></li>
              <li><a href="#deep" className="font-bold text-lg hover:text-blue-400 hover:pl-2 transition-all flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Deep Cleaning</a></li>
              <li><a href="#office" className="font-bold text-lg hover:text-blue-400 hover:pl-2 transition-all flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Office Cleaning</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="border-t-4 border-white pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-4">
             {/* Social pills */}
             <a href="#" className="w-12 h-12 bg-white text-black border-2 border-white flex items-center justify-center font-black hover:bg-yellow-400 transition-colors shadow-[4px_4px_0px_#2563EB]">
               FB
             </a>
             <a href="#" className="w-12 h-12 bg-white text-black border-2 border-white flex items-center justify-center font-black hover:bg-yellow-400 transition-colors shadow-[4px_4px_0px_#2563EB]">
               IG
             </a>
             <a href="#" className="w-12 h-12 bg-white text-black border-2 border-white flex items-center justify-center font-black hover:bg-yellow-400 transition-colors shadow-[4px_4px_0px_#2563EB]">
               IN
             </a>
          </div>
          
          <div className="text-center md:text-right">
            <div className="font-bold uppercase tracking-widest text-sm mb-2">
              <span className="text-yellow-400">100% Guaranteed</span> • Fully Insured • Vetted Pros
            </div>
            <div className="font-black text-xs text-gray-500">
              © {new Date().getFullYear()} SPARKLENEST CLEANING CO. ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
