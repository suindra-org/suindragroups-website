"use client";
import { motion } from "framer-motion";
import { Server, ShieldCheck } from "lucide-react";

export default function Partners() {
  const partners = [
    { 
      name: "Datadog", 
      img: "/datadog.webp", 
      desc: "Cloud Monitoring & Security",
      icon: <ShieldCheck size={14} className="text-brand-red" />
    },
    { 
      name: "Digital Ocean", 
      img: "/digitalocean.webp", 
      desc: "Cloud Infrastructure & Scale",
      icon: <Server size={14} className="text-brand-red" />
    },
  ];

  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 mb-4 border border-brand-red/20 rounded-full bg-brand-red/5">
            <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-[10px]">Trusted Infrastructure</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-brand-dark tracking-tighter">
            Our Technology <span className="text-brand-red italic">Partners</span>
          </h2>
        </div>

        {/* High-End Two-Partner Layout */}
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0">
          
          {partners.map((partner, index) => (
            <div key={partner.name} className="flex flex-col md:flex-row items-center w-full group">
              
              {/* Partner Block */}
              <motion.div 
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center justify-center text-center px-12 py-8 rounded-[2rem] transition-all duration-500 hover:bg-slate-50 flex-1"
              >
                {/* Real Image - Full Color & Opacity */}
                <div className="h-20 flex items-center justify-center mb-6">
                  <img 
                    src={partner.img} 
                    alt={partner.name} 
                    className="h-12 md:h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-110" 
                    style={{ filter: 'none', opacity: 1 }} // Force original colors
                  />
                </div>
                
                <div className="flex items-center gap-2 mb-1">
                  {partner.icon}
                  <h4 className="text-lg font-black text-brand-dark tracking-tight">{partner.name}</h4>
                </div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{partner.desc}</p>
              </motion.div>

              {/* Vertical Divider (Only shows on desktop between items) */}
              {index === 0 && (
                <div className="hidden md:block w-[1px] h-32 bg-gradient-to-b from-transparent via-slate-200 to-transparent mx-4" />
              )}
            </div>
          ))}
        </div>

        {/* Footer Tagline */}
        <div className="mt-20 flex items-center justify-center gap-4">
           <div className="h-[1px] w-12 bg-slate-200" />
           <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
             Authorized Solution Provider
           </p>
           <div className="h-[1px] w-12 bg-slate-200" />
        </div>
      </div>
    </section>
  );
}