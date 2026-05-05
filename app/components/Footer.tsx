"use client";
import Link from "next/link";
import { Linkedin, Facebook, Mail, MapPin, Phone, ChevronRight, Send, ShieldCheck, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-900 text-white pt-16 md:pt-24 pb-8 md:pb-12 overflow-hidden border-t border-slate-800">
      
      {/* 1. Subtle Glows - Scaled for Mobile */}
      <div className="absolute top-0 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-brand-red/10 rounded-full blur-[80px] md:blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-32 md:w-64 h-32 md:h-64 bg-blue-500/5 rounded-full blur-[60px] md:blur-[120px] pointer-events-none -z-10" />

      {/* Large Background Watermark - Hidden on small mobile to prevent horizontal scroll */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-[0.03] hidden sm:block">
        <h1 className="text-[12vw] font-black leading-none tracking-tighter">SU INDRA</h1>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16 md:mb-20">
          
          {/* Column 1: Brand */}
          <div className="lg:col-span-4 space-y-6 md:space-y-8">
            <Link href="/" className="inline-block">
              <img src="/logo.png" alt="Logo" className="h-8 md:h-10 w-auto brightness-200" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Architecting secure and sustainable digital ecosystems. We drive growth through engineering excellence and strategic venture management in Nepal.
            </p>
            <div className="flex flex-wrap gap-4">
              {/* Updated Social Links */}
              <a href="https://www.linkedin.com/company/111845936/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-slate-800/50 flex items-center justify-center hover:bg-brand-red transition-all transform hover:-translate-y-1 border border-white/5">
                <Linkedin size={20} />
              </a>
              <a href="https://www.facebook.com/share/1JVezysBrF/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-slate-800/50 flex items-center justify-center hover:bg-[#1877F2] transition-all transform hover:-translate-y-1 border border-white/5">
                <Facebook size={20} />
              </a>
              <div className="flex items-center gap-2 px-3 md:px-4 py-2 bg-slate-800/50 border border-white/10 rounded-2xl">
                 <ShieldCheck size={14} className="text-brand-red" />
                 <span className="text-[9px] md:text-[10px] font-bold text-slate-300 uppercase tracking-widest">Reg: 381843</span>
              </div>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-brand-red mb-6 md:mb-8">Solutions</h4>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-4 text-slate-400 text-sm font-medium">
              <li><Link href="#services" className="hover:text-brand-red transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="group-hover:translate-x-1 transition-transform"/> Enterprise</Link></li>
              <li><Link href="#services" className="hover:text-brand-red transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="group-hover:translate-x-1 transition-transform"/> E-Commerce</Link></li>
              <li><Link href="#services" className="hover:text-brand-red transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="group-hover:translate-x-1 transition-transform"/> Security</Link></li>
              <li><Link href="#services" className="hover:text-brand-red transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="group-hover:translate-x-1 transition-transform"/> Ventures</Link></li>
            </ul>
          </div>

          {/* Column 3: Ventures */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-brand-red mb-6 md:mb-8">Flagship Products</h4>
            <div className="space-y-4">
              <Link href="https://buynow.suindragroups.com.np/" target="_blank" className="block p-4 md:p-5 rounded-2xl md:rounded-3xl bg-slate-800/40 border border-white/5 hover:border-brand-red/30 hover:bg-slate-800/80 transition-all group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-1.5 md:p-2 bg-white rounded-lg md:rounded-xl shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <img src="/buynow.png" alt="BuyNow" className="h-4 md:h-5 w-auto object-contain" />
                  </div>
                  <span className="text-[8px] md:text-[9px] font-black bg-brand-red text-white px-2 py-0.5 rounded-md">LIVE</span>
                </div>
                <span className="font-bold text-sm md:text-base text-white group-hover:text-brand-red transition-colors block mb-1">BuyNow Official</span>
                <p className="text-[10px] md:text-[11px] text-slate-500 font-medium tracking-tight">Multi-vendor Marketplace Ecosystem</p>
              </Link>

              <div className="block p-4 md:p-5 rounded-2xl md:rounded-3xl bg-slate-800/20 border border-white/5 opacity-50 select-none grayscale">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-1.5 md:p-2 bg-white rounded-lg md:rounded-xl shadow-sm">
                    <img src="/sellnow.png" alt="SellNow" className="h-4 md:h-5 w-auto object-contain" />
                  </div>
                  <span className="text-[8px] md:text-[9px] font-black bg-slate-700 text-slate-400 px-2 py-0.5 rounded-md uppercase">Soon</span>
                </div>
                <span className="font-bold text-sm md:text-base text-white block mb-1">SellNow Vendor</span>
                <p className="text-[10px] md:text-[11px] text-slate-500 font-medium tracking-tight">B2B Vendor Management Platform</p>
              </div>
            </div>
          </div>

          {/* Column 4: Reach Out */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-brand-red mb-6 md:mb-8">Reach Out</h4>
            <ul className="space-y-4 md:space-y-6 text-slate-400 text-sm">
              <li className="flex items-start gap-4">
                <div className="w-9 h-9 md:w-10 md:h-10 bg-slate-800/50 rounded-xl flex items-center justify-center text-brand-red border border-white/5 shrink-0"><MapPin size={18} /></div>
                <span className="leading-relaxed font-medium text-xs md:text-sm pt-1">Janakpur, Dhanusha,<br/><span className="text-[10px] md:text-xs text-white uppercase tracking-widest font-bold">Nepal Office</span></span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-9 h-9 md:w-10 md:h-10 bg-slate-800/50 rounded-xl flex items-center justify-center text-brand-red border border-white/5 shrink-0"><Phone size={18} /></div>
                <span className="font-bold text-white text-xs md:text-sm">+977 9844129557</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-9 h-9 md:w-10 md:h-10 bg-slate-800/50 rounded-xl flex items-center justify-center text-brand-red border border-white/5 shrink-0"><Mail size={18} /></div>
                <span className="font-bold text-white text-xs md:text-sm break-all">support@suindragroups.com.np</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 2. Newsletter Subscription Bar - Fully Responsive */}
        <div className="relative group bg-gradient-to-r from-brand-red via-rose-600 to-brand-red p-6 md:p-14 rounded-3xl md:rounded-[3.5rem] flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10 mb-12 md:mb-16 shadow-[0_30px_70px_-15px_rgba(225,29,72,0.4)] overflow-hidden">
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
          
          <div className="text-center lg:text-left relative z-10">
            <h3 className="text-xl md:text-3xl font-black mb-2 md:mb-3 tracking-tight">Join the Su Indra Circle</h3>
            <p className="text-white/80 text-[9px] md:text-sm font-bold uppercase tracking-[0.15em]">Subscribe for tech & venture insights</p>
          </div>
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3 relative z-10">
            <input 
              type="email" 
              placeholder="Professional email" 
              className="w-full sm:min-w-[300px] bg-white/10 border border-white/20 px-6 md:px-8 py-4 md:py-5 rounded-2xl md:rounded-[2rem] outline-none placeholder:text-white/40 text-white text-sm focus:bg-white focus:text-slate-900 transition-all" 
            />
            <button className="w-full sm:w-auto bg-slate-900 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl md:rounded-[2rem] font-black text-[10px] md:text-xs uppercase flex items-center justify-center gap-3 hover:bg-white hover:text-brand-red transition-all shadow-xl">
              Subscribe <Send size={16} />
            </button>
          </div>
        </div>

        {/* 3. Bottom Bar */}
        <div className="pt-8 md:pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-[8px] md:text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] text-center">
            <span>© {currentYear} SU INDRA GROUPS</span>
            <span className="hidden md:block w-1 h-1 bg-slate-700 rounded-full"></span>
            <span>Technology • Security • Growth</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-[8px] md:text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
            <Link href="#" className="hover:text-brand-red transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-brand-red transition-colors">Terms</Link>
            <Link href="#" className="hover:text-brand-red transition-colors flex items-center gap-2"><Globe size={12}/> Global Site</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}