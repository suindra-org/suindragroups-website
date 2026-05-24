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
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-4 pt-24 md:pt-16 lg:pt-8"
      style={{
        background: "white"
      }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          
          {/* LEFT SIDE - IMAGE & HEADER */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-1 flex flex-col justify-center"
          >
            {/* Header Text - Above Image */}
            <div className="mb-4 md:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
                Democratizing
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">
                  Possibilities
                </span>
              </h2>
            </div>

            {/* Image Container */}
            <div className="relative w-full max-w-2xl">
              {/* Decorative background circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-100/40 to-red-50/30 rounded-xl md:rounded-2xl blur-2xl" />
              
              {/* Main Image */}
              <img
                src="/bannersuindra.png"
                alt="Su Indra Cover"
                className="relative z-10 w-full h-auto drop-shadow-lg md:drop-shadow-2xl rounded-xl md:rounded-2xl"
              />
              
              {/* Floating accent element */}
              <div className="absolute -bottom-6 md:-bottom-8 -right-6 md:-right-8 w-32 md:w-48 h-32 md:h-48 bg-gradient-to-br from-red-500 to-red-600 rounded-xl md:rounded-2xl opacity-15 blur-3xl" />
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
            <div className="inline-flex items-center gap-2 mb-3 md:mb-4 px-3 md:px-4 py-1.5 md:py-2 bg-red-100 rounded-full border border-red-200">
              <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-red-600 rounded-full animate-pulse" />
              <span className="text-xs md:text-sm font-semibold text-red-600">Innovation & Vision</span>
            </div>

            {/* Description */}
            <p className="text-sm md:text-base lg:text-lg text-slate-700 mb-4 md:mb-6 leading-relaxed max-w-xl font-medium">
              Su Indra Groups is pioneering a unified digital ecosystem that connects 
              buyers and sellers globally. Rooted in heritage, built for the future.
            </p>

            {/* Features List */}
            <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-2 md:gap-2.5"
                >
                  <CheckCircle2 className="w-4 md:w-5 h-4 md:h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs md:text-sm lg:text-base text-slate-800 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 md:gap-3 pt-2 md:pt-3">
              <Link
                href="#ventures"
                className="group relative inline-flex items-center justify-center gap-2 px-5 md:px-7 py-2.5 md:py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-black text-xs md:text-sm lg:text-base rounded-lg md:rounded-xl shadow-[0_10px_30px_rgba(220,38,38,0.3)] hover:shadow-[0_15px_40px_rgba(220,38,38,0.5)] transition-all hover:scale-105 backdrop-blur-sm border border-red-400/30"
              >
                Explore Portfolio
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-5 md:px-7 py-2.5 md:py-3 border-2 border-slate-400 text-slate-900 font-bold text-xs md:text-sm lg:text-base rounded-lg md:rounded-xl hover:border-red-600 hover:bg-red-50 transition-all"
              >
                Get in Touch
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-3 md:gap-4 mt-6 md:mt-8 pt-4 md:pt-6 border-t border-slate-300">
              <div className="text-xs md:text-sm">
                <div className="font-bold text-slate-900">Trusted by</div>
                <div className="text-slate-600 text-xs">Global enterprises</div>
              </div>
              <div className="w-px h-8 md:h-10 bg-slate-300" />
              <div className="text-xs md:text-sm">
                <div className="font-bold text-slate-900">Est.</div>
                <div className="text-slate-600 text-xs">Heritage & Future</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-transparent" />
    </section>
  );
}