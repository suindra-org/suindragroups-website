"use client";
import { Play, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-brand-dark overflow-hidden">
      {/* Background Graphic elements inspired by F1Soft UI */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-brand-red/5 rounded-full blur-[100px]"></div>
        
        {/* Overlay texture */}
        <div className="absolute inset-0 bg-[url('/bg.jpg')] opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Animated Subtitle */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-sm animate-fade-in">
          <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse"></span>
          <p className="text-white/70 text-xs font-bold uppercase tracking-[0.3em]">Ventures • Security • Growth</p>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tighter">
          For <span className="text-gradient">Progress</span>, <br />
          Prosperity & Innovation
        </h1>

        {/* Description */}
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          We democratize technology to create new possibilities for economic progress 
          and individual prosperity through secure and scalable digital solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button className="group bg-brand-red text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 hover:bg-white hover:text-brand-red transition-all duration-300 shadow-2xl shadow-brand-red/30">
            Explore Ventures
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
          
          <button className="flex items-center gap-4 text-white font-bold text-lg group hover:text-brand-red transition-colors">
            <div className="w-14 h-14 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-brand-red transition-colors">
              <Play fill="white" className="ml-1 group-hover:fill-brand-red" size={20} />
            </div>
            Corporate Video
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-brand-red rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}