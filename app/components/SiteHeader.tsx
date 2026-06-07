"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#locations", label: "Locations" },
  { href: "#careers", label: "Careers" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full fixed top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="w-full px-6 md:px-12 flex items-center justify-between mx-auto max-w-[1600px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
          <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-[4px_4px_0px_#000]">
            <Sparkles className="w-6 h-6 text-yellow-300" />
          </div>
          <span className="text-2xl font-black tracking-tight text-black uppercase">SparkleNest</span>
        </Link>
        
        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-base font-bold text-black hover:text-blue-600 transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right Section */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="#login" className="px-6 py-2.5 rounded-md font-bold text-sm bg-blue-600 hover:bg-blue-700 text-white transition-colors flex items-center gap-2">
            LOGIN →
          </a>
          <a href="/book" className="px-6 py-2.5 rounded-md font-bold text-sm bg-yellow-400 hover:bg-yellow-500 text-black transition-colors flex items-center gap-2">
            BOOK CLEANING →
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden p-2 rounded-md bg-white border-2 border-black" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b-4 border-black shadow-2xl">
          <div className="flex flex-col px-6 py-8 gap-6">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-black text-xl font-bold focus:outline-none">
                {l.label}
              </a>
            ))}
            <div className="flex flex-col gap-4 mt-4">
              <a href="#login" className="justify-center px-6 py-3 rounded-md font-bold text-center bg-blue-600 text-white">
                LOGIN →
              </a>
              <a href="/book" className="justify-center px-6 py-3 rounded-md font-bold text-center bg-yellow-400 text-black">
                BOOK CLEANING →
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
