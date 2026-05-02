"use client";
import Link from "next/link";
import {Linkedin, Twitter, ArrowRight, MapPin, Phone, Mail} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Mission */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black tracking-tighter">
            <img src="/logo image.png" alt="Logo" className="h-8 w-auto grayscale brightness-200" />
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Architecting secure, scalable, and sustainable digital ecosystems. We drive business growth through strategic innovation and cybersecurity excellence in Nepal.
            </p>
            <div className="flex gap-4">
              <Link href="https://linkedin.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors">
                <Linkedin size={18} />
              </Link>
              <Link href="https://twitter.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors">
                <Twitter size={18} />
              </Link>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 className="text-lg font-bold mb-8 relative inline-block">
              Solutions
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-brand-red rounded-full"></span>
            </h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link href="#services" className="hover:text-white transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/> Enterprise Web</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/> E-Commerce Infra</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/> Cybersecurity</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/> Venture Capital</Link></li>
            </ul>
          </div>

          {/* Column 3: Ventures (BuyNow & SellNow) */}
          <div>
            <h4 className="text-lg font-bold mb-8 relative inline-block">
              Key Ventures
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-brand-red rounded-full"></span>
            </h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>
                <Link href="https://buynow.suindragroups.com.np/" target="_blank" className="hover:text-white transition-colors flex flex-col">
                  <span className="font-bold text-white">BuyNow</span>
                  <span className="text-xs text-brand-red font-bold uppercase tracking-tighter">Live Marketplace</span>
                </Link>
              </li>
              <li>
                <div className="flex flex-col opacity-50 cursor-not-allowed">
                  <span className="font-bold text-white">SellNow</span>
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-tighter">Under Development</span>
                </div>
              </li>
              <li><Link href="#about" className="hover:text-white transition-colors">Corporate Overview</Link></li>
            </ul>
          </div>

          {/* Column 4: Reach Us */}
          <div>
            <h4 className="text-lg font-bold mb-8 relative inline-block">
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-brand-red rounded-full"></span>
            </h4>
            <ul className="space-y-6 text-slate-400 text-sm">
              <li className="flex items-start gap-4">
                <MapPin className="text-brand-red shrink-0" size={20} />
                <span>Dhanusha, Janakpur,<br/>Nepal (Reg: 381843)</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-brand-red shrink-0" size={20} />
                <span>+977 9844129557</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-brand-red shrink-0" size={20} />
                <span>info@suindragroups.com.np</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs text-center md:text-left">
            © {currentYear} SU INDRA GROUPS PVT. LTD. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-slate-500 uppercase tracking-widest font-bold">
            <Link href="#" className="hover:text-brand-red transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand-red transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}