"use client";
import React, { useState } from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

const REVIEWS = [
  {
    id: 1,
    name: "Al",
    videoId: "rYwtIZ51OFU", // Valid Short ID
    thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
    color: "bg-yellow-400"
  },
  {
    id: 2,
    name: "Rai",
    videoId: "Bxrt8Gb6_lM", // Valid Short ID
    thumbnail: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
    color: "bg-blue-600"
  },
  {
    id: 3,
    name: "Sara",
    videoId: "3_cj8qc2Z9o", // Valid Short ID
    thumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80",
    color: "bg-pink-500"
  },
  {
    id: 4,
    name: "Elena",
    videoId: "ZoYI1AFROos", // Valid Video ID
    thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80",
    color: "bg-emerald-400"
  }
];

export default function VideoTestimonials() {
  const [playingId, setPlayingId] = useState<number | null>(null);

  return (
    <section className="py-32 bg-white relative overflow-hidden border-b-[6px] border-black">
      {/* Background ZigZags */}
      <svg className="absolute left-[5%] top-[10%] w-32 h-32 text-black opacity-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
      <svg className="absolute right-[5%] bottom-[10%] w-32 h-32 text-black opacity-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-yellow-400 px-4 py-2 font-black uppercase text-black border-2 border-black shadow-[2px_2px_0px_#000] mb-6 rotate-2"
          >
            Word on the street
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-black tracking-tighter uppercase leading-none"
          >
            Don't just take <br/><span className="bg-blue-600 text-white px-2 inline-block mt-2 -rotate-1">OUR WORD FOR IT.</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-[9/16] group cursor-pointer"
              onClick={() => setPlayingId(review.id)}
            >
              {/* Offset shadow layer */}
              <div className={`absolute inset-0 ${review.color} border-4 border-black rounded-2xl transform translate-x-3 translate-y-3 transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4`} />
              
              {/* Video Card */}
              <div className="absolute inset-0 z-10 bg-white border-4 border-black rounded-2xl overflow-hidden flex flex-col items-center justify-center hover:-translate-y-1 transition-transform duration-300">
                
                {playingId === review.id ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${review.videoId}?autoplay=1&controls=1&modestbranding=1&playsinline=1&rel=0`}
                    title={`${review.name} Review`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-none"
                  ></iframe>
                ) : (
                  <>
                    <img 
                      src={review.thumbnail} 
                      alt={`${review.name} Review`} 
                      className="absolute inset-0 w-full h-full object-cover filter grayscale-[20%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                    />
                    
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
                    
                    {/* Play Button */}
                    <div className="relative z-20 w-16 h-16 bg-white border-[3px] border-black rounded-full flex items-center justify-center group-hover:bg-yellow-400 group-hover:scale-110 transition-all duration-300 shadow-[4px_4px_0px_#000]">
                      <Play className="w-8 h-8 text-black fill-current ml-1" />
                    </div>

                    {/* Neo-brutalist Label */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-max max-w-[90%] pointer-events-none">
                      <div className="bg-white border-2 border-black px-4 py-2 font-black uppercase text-black text-xl shadow-[4px_4px_0px_#000] transform -rotate-2">
                        CLIENT REVIEW
                      </div>
                      <div className={`mt-2 ${review.color} border-2 border-black px-3 py-1 font-bold uppercase text-black text-sm shadow-[2px_2px_0px_#000] inline-block transform rotate-3`}>
                        by {review.name}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a href="#reviews" className="inline-flex items-center justify-center px-10 py-5 font-black text-xl bg-yellow-400 text-black border-[3px] border-black shadow-[6px_6px_0px_#000] hover:-translate-y-1 hover:shadow-[8px_8px_0px_#000] transition-all uppercase">
            View more reviews!
          </a>
        </div>
      </div>
    </section>
  );
}
