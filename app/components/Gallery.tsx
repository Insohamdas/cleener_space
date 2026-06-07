"use client";
import React from "react";

const IMAGES = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581574202330-5d6f4a8a9a4b?w=1200&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581574202331-3b9e0b4a9a4d?w=1200&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505691723518-36a3a3b5f9a4?w=1200&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556909210-6bdd8d6f9b2c?w=1200&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80&auto=format&fit=crop",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-semibold text-[#0A1F44]">Before & After</h3>
        <p className="mt-2 text-gray-600">See the transformation — real results from our teams.</p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {IMAGES.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-lg">
              <img
                src={src}
                alt={`Before and after ${i + 1}`}
                loading="lazy"
                tabIndex={0}
                className="w-full h-44 sm:h-56 object-cover transform transition-transform duration-400 hover:scale-110 focus:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
