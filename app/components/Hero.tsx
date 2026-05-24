"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const containerRef = useRef(null);

  const features = [
    "Building secure, scalable digital ecosystems",
    "Empower the global economy with innovation",
    "Rooted in heritage, built for the future",
    "One stop solution for all ventures"
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-4 pt-32 md:pt-20 lg:pt-0"
      style={{
        background: "linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f172a 100%)"
      }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center min-h-screen">
          
          {/* LEFT SIDE - IMAGE & HEADER */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-1 flex flex-col justify-center"
          >
            {/* Header Text - Above Image */}
            <div className="mb-6 md:mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
                Democratizing
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-500">
                  Possibilities
                </span>
              </h2>
            </div>

            {/* Image Container */}
            <div className="relative w-full max-w-3xl">
              {/* Decorative background circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-500/10 rounded-2xl md:rounded-3xl blur-2xl" />
              
              {/* Main Image */}
              <img
                src="/suindrabanner.png"
                alt="Su Indra Cover"
                className="relative z-10 w-full h-auto drop-shadow-2xl rounded-2xl md:rounded-3xl"
              />
              
              {/* Floating accent element */}
              <div className="absolute -bottom-8 md:-bottom-10 -right-8 md:-right-10 w-40 md:w-56 h-40 md:h-56 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl md:rounded-3xl opacity-20 blur-3xl" />
            </div>
          </motion.div>

          {/* RIGHT SIDE - CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-2"
          >
            {/* Subheading Badge */}
            <div className="inline-flex items-center gap-2 mb-4 md:mb-6 px-3 md:px-4 py-2 bg-red-500/10 rounded-full border border-red-500/30">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-xs md:text-sm font-semibold text-red-400">Innovation & Vision</span>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-slate-300 mb-6 md:mb-8 leading-relaxed max-w-xl font-medium">
              Su Indra Groups is pioneering a unified digital ecosystem that connects 
              buyers and sellers globally. Rooted in heritage, built for the future.
            </p>

            {/* Features List */}
            <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-2 md:gap-3"
                >
                  <CheckCircle2 className="w-5 md:w-6 h-5 md:h-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-slate-200 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
              <Link
                href="#ventures"
                className="group relative inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-black text-sm md:text-base rounded-lg md:rounded-xl shadow-[0_15px_40px_rgba(220,38,38,0.4)] hover:shadow-[0_20px_50px_rgba(220,38,38,0.6)] transition-all hover:scale-105 backdrop-blur-sm border border-red-400/30"
              >
                Explore Portfolio
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 border-2 border-slate-500 text-white font-bold text-sm md:text-base rounded-lg md:rounded-xl hover:border-red-500 hover:bg-red-500/10 transition-all"
              >
                Get in Touch
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-4 md:gap-6 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-slate-700">
              <div className="text-xs md:text-sm">
                <div className="font-bold text-white">Trusted by</div>
                <div className="text-slate-400">Global enterprises</div>
              </div>
              <div className="w-px h-10 md:h-12 bg-slate-700" />
              <div className="text-xs md:text-sm">
                <div className="font-bold text-white">Est.</div>
                <div className="text-slate-400">Heritage & Future</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 md:h-2 bg-gradient-to-r from-red-600 via-red-500 to-transparent" />
    </section>
  );
}