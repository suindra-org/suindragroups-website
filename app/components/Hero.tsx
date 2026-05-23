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
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
      style={{
        background: "linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f172a 100%)"
      }}
    >
      {/* 1. BACKGROUND IMAGE - Enhanced with better overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/suindracover.png" 
          alt="Su Indra Cover" 
          className="w-full h-full object-cover opacity-35"
        />
        {/* Improved multi-layer overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e27]/80 via-[#0a0e27]/50 to-[#0a0e27]/80" />
        {/* Accent glow effect from top-right */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl opacity-30" />
      </div>

      {/* 2. MAIN CONTENT AREA */}
      <div className="container mx-auto relative z-30 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto"
        >
          {/* Main Headline - with improved contrast */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-6 tracking-tighter uppercase drop-shadow-lg">
            Democratizing <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff1744] via-[#ff5252] to-[#ff1744] animate-pulse">
              Possibilities
            </span>
          </h1>

          {/* Description - Improved text color and contrast */}
          <p className="text-slate-300 text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium px-4 drop-shadow-md">
            Building secure, scalable, and sustainable digital ecosystems 
            that empower the global economy through strategic innovation.
          </p>

          {/* CTA Buttons - Enhanced styling */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link 
              href="#ventures" 
              className="w-full sm:w-auto group relative bg-gradient-to-r from-[#ff1744] to-[#ff5252] text-white px-8 md:px-12 py-4 md:py-6 rounded-2xl font-black text-base md:text-lg shadow-[0_15px_40px_rgba(255,23,68,0.5)] transition-all hover:scale-110 hover:shadow-[0_20px_60px_rgba(255,23,68,0.7)] flex items-center justify-center gap-3 backdrop-blur-sm border border-white/10"
            >
              Explore Portfolio <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a 
              href="https://www.youtube.com/@buynow_by_SuIndraGroups" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-4 text-white font-bold text-base md:text-lg group hover:text-[#ff5252] transition-colors py-4 hover:scale-105"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:border-[#ff1744] group-hover:bg-[#ff1744]/20 transition-all backdrop-blur-sm shadow-lg">
                <Play fill="white" className="ml-1 group-hover:fill-[#ff1744] transition-colors" size={24} />
              </div>
              Watch Intro
            </a>
          </div>
        </motion.div>
      </div>

      {/* Animated Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-3 opacity-40">
        <p className="text-white text-xs font-semibold uppercase tracking-widest">Scroll to explore</p>
        <div className="w-[2px] h-10 bg-gradient-to-b from-[#ff1744] via-[#ff5252] to-transparent animate-bounce" />
      </div>
    </section>
  );
}