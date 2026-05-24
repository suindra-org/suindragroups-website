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
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Top padding spacer — accounts for fixed navbar across all breakpoints */}
      <div className="w-full py-16 sm:py-18 md:py-20 lg:py-12 xl:py-8 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-16 items-center justify-between">

            {/* LEFT — Image + Heading */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/2 flex flex-col items-start"
            >
              {/* Heading — visible above image */}
              <div className="mb-4 sm:mb-5">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
                  Democratizing
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">
                    Possibilities
                  </span>
                </h1>
              </div>

              {/* Image */}
              <div className="relative w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-red-100/40 to-red-50/30 rounded-2xl blur-2xl" />
                <img
                  src="/bannersuindra.png"
                  alt="Su Indra Cover"
                  className="relative z-10 w-full h-auto rounded-xl md:rounded-2xl drop-shadow-xl object-cover"
                  style={{ maxHeight: "420px", objectFit: "cover" }}
                />
                <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl opacity-10 blur-3xl pointer-events-none" />
              </div>
            </motion.div>

            {/* RIGHT — Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="w-full lg:w-1/2 flex flex-col justify-center"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 bg-red-100 rounded-full border border-red-200 self-start">
                <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-red-600 whitespace-nowrap">
                  Innovation & Vision
                </span>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base lg:text-sm xl:text-lg text-slate-700 mb-4 sm:mb-5 leading-relaxed font-medium max-w-xl">
                Su Indra Groups is pioneering a unified digital ecosystem that connects
                buyers and sellers globally. Rooted in heritage, built for the future.
              </p>

              {/* Features */}
              <div className="space-y-2 sm:space-y-3 mb-5 sm:mb-7">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, delay: 0.35 + index * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm xl:text-base text-slate-800 font-medium leading-snug">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col xs:flex-row gap-2 sm:gap-3">
                <Link
                  href="#ventures"
                  className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-black text-xs sm:text-sm rounded-lg sm:rounded-xl shadow-lg shadow-red-200 hover:shadow-red-300 transition-all hover:scale-[1.03] border border-red-400/30 whitespace-nowrap"
                >
                  Explore Portfolio
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 border-2 border-slate-300 text-slate-900 font-bold text-xs sm:text-sm rounded-lg sm:rounded-xl hover:border-red-500 hover:bg-red-50 transition-all whitespace-nowrap"
                >
                  Get in Touch
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-3 sm:gap-4 mt-5 sm:mt-7 pt-4 sm:pt-5 border-t border-slate-200">
                <div>
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">Trusted by</div>
                  <div className="text-slate-500 text-xs">Global enterprises</div>
                </div>
                <div className="w-px h-8 bg-slate-200" />
                <div>
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">Est.</div>
                  <div className="text-slate-500 text-xs">Heritage & Future</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-400 to-transparent" />
    </section>
  );
}