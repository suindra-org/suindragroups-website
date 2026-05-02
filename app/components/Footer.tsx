"use client";
import Link from "next/link";
import { Linkedin, Twitter, Mail, MapPin, Phone, ChevronRight, Send, ShieldCheck, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-900 text-white pt-24 pb-12 overflow-hidden border-t border-slate-800">
      
      {/* 1. Subtle Glows to "Lift" the darkness */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Large Background Watermark (Softer Opacity) */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-[0.03]">
        <h1 className="text-[12vw] font-black leading-none tracking-tighter">SU INDRA</h1>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Column 1: Brand (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="inline-block">
              <img src="/logo image.png" alt="Logo" className="h-10 w-auto brightness-200" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Architecting secure and sustainable digital ecosystems. We drive growth through engineering excellence and strategic venture management in Nepal.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-11 h-11 rounded-2xl bg-slate-800/50 flex items-center justify-center hover:bg-brand-red transition-all transform hover:-translate-y-1 border border-white/5">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-11 h-11 rounded-2xl bg-slate-800/50 flex items-center justify-center hover:bg-brand-red transition-all transform hover:-translate-y-1 border border-white/5">
                <Twitter size={20} />
              </a>
              <div className="ml-2 flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-white/10 rounded-2xl">
                 <ShieldCheck size={14} className="text-brand-red" />
                 <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Reg: 381843</span>
              </div>
            </div>
          </div>

          {/* Column 2: Solutions (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-brand-red mb-8">Solutions</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              <li><Link href="#services" className="hover:text-brand-red transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="group-hover:translate-x-1 transition-transform"/> Enterprise</Link></li>
              <li><Link href="#services" className="hover:text-brand-red transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="group-hover:translate-x-1 transition-transform"/> E-Commerce</Link></li>
              <li><Link href="#services" className="hover:text-brand-red transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="group-hover:translate-x-1 transition-transform"/> Security</Link></li>
              <li><Link href="#services" className="hover:text-brand-red transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="group-hover:translate-x-1 transition-transform"/> Ventures</Link></li>
            </ul>
          </div>

          {/* Column 3: Ventures (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-brand-red mb-8">Flagship Products</h4>
            <div className="space-y-4">
              <Link href="https://buynow.suindragroups.com.np/" target="_blank" className="block p-5 rounded-3xl bg-slate-800/40 border border-white/5 hover:border-brand-red/30 hover:bg-slate-800/80 transition-all group">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-white group-hover:text-brand-red transition-colors">BuyNow</span>
                  <span className="text-[9px] font-black bg-brand-red text-white px-2 py-0.5 rounded-md">LIVE</span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium">Marketplace Ecosystem</p>
              </Link>

              <div className="block p-5 rounded-3xl bg-slate-800/20 border border-white/5 opacity-50">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-white">SellNow</span>
                  <span className="text-[9px] font-black bg-slate-700 text-slate-400 px-2 py-0.5 rounded-md uppercase">Soon</span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium">Vendor Solutions</p>
              </div>
            </div>
          </div>

          {/* Column 4: Contact (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-brand-red mb-8">Reach Out</h4>
            <ul className="space-y-6 text-slate-400 text-sm">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-slate-800/50 rounded-xl flex items-center justify-center text-brand-red border border-white/5"><MapPin size={20} /></div>
                <span className="leading-relaxed font-medium">Janakpur, Dhanusha,<br/><span className="text-xs text-white">Nepal Office</span></span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-800/50 rounded-xl flex items-center justify-center text-brand-red border border-white/5"><Phone size={20} /></div>
                <span className="font-bold text-white">+977 9844129557</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-800/50 rounded-xl flex items-center justify-center text-brand-red border border-white/5"><Mail size={20} /></div>
                <span className="font-bold text-white">info@suindragroups.com.np</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 2. Newsletter Subscription Bar (Lighter & Gradient) */}
        <div className="relative group bg-gradient-to-r from-brand-red via-rose-600 to-brand-red p-8 md:p-14 rounded-[3.5rem] flex flex-col lg:flex-row items-center justify-between gap-10 mb-16 shadow-[0_30px_70px_-15px_rgba(225,29,72,0.4)] overflow-hidden">
          {/* Animated Background Pulse for the bar */}
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
          
          <div className="text-center lg:text-left relative z-10">
            <h3 className="text-3xl font-black mb-3 tracking-tight">Join the Su Indra Circle</h3>
            <p className="text-white/80 text-sm font-bold uppercase tracking-[0.15em]">Subscribe for tech & venture insights</p>
          </div>
          <div className="w-full lg:w-auto flex flex-col md:flex-row gap-3 relative z-10">
            <input 
              type="email" 
              placeholder="Your professional email" 
              className="bg-white/10 border border-white/20 px-8 py-5 rounded-[2rem] outline-none placeholder:text-white/40 text-white min-w-[320px] focus:bg-white focus:text-slate-900 transition-all shadow-inner" 
            />
            <button className="bg-slate-900 text-white px-10 py-5 rounded-[2rem] font-black text-xs uppercase flex items-center justify-center gap-3 hover:bg-white hover:text-brand-red transition-all shadow-xl">
              Subscribe <Send size={16} />
            </button>
          </div>
        </div>

        {/* 3. Bottom Bar */}
        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
            <span>© {currentYear} SU INDRA GROUPS</span>
            <span className="hidden md:block w-1 h-1 bg-slate-700 rounded-full"></span>
            <span className="hidden md:block">Technology • Security • Growth</span>
          </div>
          <div className="flex gap-10 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
            <Link href="#" className="hover:text-brand-red transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-brand-red transition-colors">Terms</Link>
            <Link href="#" className="hover:text-brand-red transition-colors flex items-center gap-2"><Globe size={12}/> Global Site</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}