"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const containerRef = useRef(null);
  
  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-[#0f172a] overflow-hidden px-4"
    >
      {/* 1. BACKGROUND VIDEO */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-30" 
        >
          <source src="/buynowdemo.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay to ensure text is readable on mobile and desktop */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/95 via-[#0f172a]/40 to-[#0f172a]" />
      </div>

      {/* 2. MAIN CONTENT AREA */}
      <div className="container mx-auto relative z-30 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto"
        >
          {/* Main Headline - Reduced size and fully responsive */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-6 tracking-tighter uppercase">
            Democratizing <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-rose-400 to-brand-red">
              Possibilities
            </span>
          </h1>

          {/* Description - Responsive text size */}
          <p className="text-slate-400 text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium px-4">
            Building secure, scalable, and sustainable digital ecosystems 
            that empower the global economy through strategic innovation.
          </p>

          {/* CTA Buttons - Stacks on small mobile, row on tablet+ */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link 
              href="#ventures" 
              className="w-full sm:w-auto group relative bg-brand-red text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black text-base md:text-lg shadow-[0_20px_50px_rgba(225,29,72,0.4)] transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              Explore Portfolio <ArrowRight size={20} />
            </Link>
            
            <a 
              href="https://www.youtube.com/@buynow_by_SuIndraGroups" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-4 text-white font-bold text-base md:text-lg group hover:text-brand-red transition-colors py-4"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-brand-red transition-all group-hover:bg-brand-red/10 backdrop-blur-sm">
                <Play fill="white" className="ml-1 group-hover:fill-brand-red transition-colors" size={20} />
              </div>
              Watch Intro
            </a>
          </div>
        </motion.div>
      </div>

      {/* Animated Scroll indicator - Hidden on very small screens to save space */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-3 opacity-30">
        <div className="w-[2px] h-10 bg-gradient-to-b from-brand-red to-transparent animate-bounce" />
      </div>
    </section>
  );
}