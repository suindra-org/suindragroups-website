"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, ArrowRight, ShoppingBag, Rocket, Globe } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const containerRef = useRef(null);
  
  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-[#0f172a] overflow-hidden"
    >
      {/* 1. FIXED VIDEO BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline // Essential for iOS/Mobile autoplay
          className="w-full h-full object-cover opacity-30" 
        >
          {/* Ensure the filename is exactly as it is in your public folder */}
          <source src="/buynowdemo.mp4" type="video/mp4" />
        </video>
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/90 via-transparent to-[#0f172a]" />
      </div>

      {/* 2. HIGH-VISIBILITY PRODUCT BADGES (BuyNow & SellNow) */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        
        {/* BuyNow Badge - Live & Glowing */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[5%] md:left-[10%] pointer-events-auto"
        >
          <Link href="https://buynow.suindragroups.com.np/" target="_blank" className="block group">
            <div className="relative p-[2px] rounded-3xl bg-gradient-to-br from-brand-red to-transparent shadow-[0_0_40px_rgba(225,29,72,0.3)]">
              <div className="bg-brand-dark/90 backdrop-blur-xl p-6 rounded-[22px] flex items-center gap-5 border border-white/10 group-hover:bg-brand-red transition-all duration-500">
                <div className="relative">
                  <div className="bg-brand-red p-4 rounded-2xl group-hover:bg-white">
                    <ShoppingBag size={28} className="text-white group-hover:text-brand-red" />
                  </div>
                  {/* Live Pulse Dot */}
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-brand-dark animate-pulse" />
                </div>
                <div>
                  <h4 className="text-white font-black text-xl tracking-tight leading-none mb-1">BuyNow Official</h4>
                  <p className="text-brand-red group-hover:text-white/80 text-xs font-bold uppercase tracking-widest">Live Marketplace</p>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* SellNow Badge - Futuristic Coming Soon */}
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] right-[5%] md:right-[10%] pointer-events-auto"
        >
          <div className="relative p-[1px] rounded-3xl bg-white/20">
            <div className="bg-brand-dark/40 backdrop-blur-xl p-6 rounded-[23px] flex items-center gap-5 border border-white/5 group transition-all duration-500">
              <div className="bg-slate-800 p-4 rounded-2xl border border-white/10">
                <Rocket size={28} className="text-slate-400" />
              </div>
              <div>
                <h4 className="text-white font-black text-xl tracking-tight leading-none mb-1 opacity-60">SellNow</h4>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest italic">Launching 2025</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 3. MAIN CENTER CONTENT */}
      <div className="container mx-auto px-6 relative z-30 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/5 border border-white/10 rounded-full mb-10 backdrop-blur-md">
            <Globe size={14} className="text-brand-red animate-spin-slow" />
            <p className="text-white/80 text-[10px] font-black uppercase tracking-[0.4em]">Next-Gen Venture Group</p>
          </div>

          <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.9] mb-8 tracking-tighter uppercase">
            Democratizing <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-[#fb7185] to-brand-red">Possibilities</span>
          </h1>

          <p className="text-slate-400 text-lg md:text-2xl max-w-2xl mx-auto mb-14 leading-relaxed font-medium">
            Building secure, scalable, and sustainable digital ecosystems 
            that empower the global economy.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <Link 
              href="#ventures" 
              className="group relative bg-brand-red text-white px-12 py-6 rounded-2xl font-black text-lg overflow-hidden shadow-[0_20px_50px_rgba(225,29,72,0.4)] transition-all hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-3">
                Explore Our Portfolio <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            </Link>
            
            <button className="flex items-center gap-5 text-white font-bold text-lg group">
              <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-brand-red transition-all group-hover:bg-brand-red/10 backdrop-blur-sm">
                <Play fill="white" className="ml-1 transition-transform group-hover:scale-125" size={24} />
              </div>
              <span className="group-hover:text-brand-red transition-colors">Watch Intro</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Mouse-Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50">
        <div className="w-[2px] h-12 bg-gradient-to-b from-brand-red to-transparent animate-bounce" />
      </div>
    </section>
  );
}