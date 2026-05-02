"use client";
import { motion } from "framer-motion";
import { Linkedin, Globe, Cpu, ShieldCheck, Code } from "lucide-react";
import { TEAM_MEMBERS } from "@/constants";

export default function Team() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-2xl">
            <h4 className="text-brand-red font-bold uppercase tracking-[0.3em] text-[10px] mb-4">The Talent Behind Su Indra</h4>
            <h2 className="text-4xl md:text-6xl font-black text-brand-dark tracking-tighter leading-none">
              Meet our <br />
              <span className="text-brand-red italic">Architects</span> of Innovation
            </h2>
          </div>
          <p className="text-brand-gray text-lg max-w-sm mt-6 md:mt-0 italic border-l-4 border-brand-red pl-6">
            "A group of dedicated engineers committed to securing and scaling the digital future of Nepal."
          </p>
        </div>

        {/* Updated Grid: 4 Columns for 4 Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div 
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(225,29,72,0.15)]">
                
                {/* Image Area */}
                <div className="h-72 overflow-hidden relative">
                  <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Floating Education Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-sm">
                      <Cpu size={12} className="text-brand-red" />
                      <span className="text-[9px] font-black uppercase tracking-widest text-brand-dark">{member.education}</span>
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 relative bg-white">
                  <div className="mb-6 min-h-[60px]">
                    <h4 className="text-xl font-black text-brand-dark group-hover:text-brand-red transition-colors leading-tight">{member.name}</h4>
                    <p className="text-brand-gray text-[10px] font-bold uppercase tracking-tighter mt-2">{member.role}</p>
                  </div>

                  {/* Social Reveal Area */}
                  <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                    <div className="flex gap-2">
                      <a href={member.linkedin} target="_blank" className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-brand-red hover:text-white transition-all transform hover:-translate-y-1">
                        <Linkedin size={16} />
                      </a>
                      <a href={member.portfolio} target="_blank" className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-brand-dark hover:text-white transition-all transform hover:-translate-y-1">
                        <Globe size={16} />
                      </a>
                    </div>
                    
                    {/* Role Icon Logic */}
                    <div className="opacity-10 group-hover:opacity-100 group-hover:text-brand-red transition-all duration-500">
                      {member.role.includes("Cyber") ? (
                         <ShieldCheck size={24} /> 
                      ) : member.role.includes("Junior") ? (
                         <Code size={24} />
                      ) : (
                         <Cpu size={24} />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Red glow shadow */}
              <div className="absolute -inset-2 bg-brand-red/5 rounded-[3rem] blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}