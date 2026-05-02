"use client";
import Link from "next/link";
import { ArrowRight, Smartphone, Globe, Shield } from "lucide-react";

const ventures = [
  {
    title: "Digital Platforms",
    subtitle: "Web & Application Ventures",
    desc: "We build enterprise-grade digital platforms designed to support high-scale operational requirements.",
    image: "/Portfolio-Website.webp",
    icon: <Globe className="text-brand-red" size={24} />
  },
  {
    title: "E-Commerce Ecosystem",
    subtitle: "Online Business Enablement",
    desc: "Revolutionizing digital trade in Nepal through our flagship e-commerce platforms.",
    image: "/E-Commerece.jpg",
    isProductSection: true,
    products: [
      { name: "BuyNow", link: "https://buynow.suindragroups.com.np/", status: "Live", desc: "Premium Marketplace" },
      { name: "SellNow", link: "#", status: "Coming Soon", desc: "Vendor Ecosystem" }
    ]
  },
  {
    title: "Cybersecurity Initiatives",
    subtitle: "Digital Risk & Protection",
    desc: "Strengthening digital trust through robust architecture and advanced threat protection.",
    image: "/security.jpg",
    icon: <Shield className="text-brand-red" size={24} />
  }
];

export default function VentureProducts() {
  return (
    <section id="ventures" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-20">
          <h4 className="text-brand-red font-bold uppercase tracking-[0.3em] text-xs mb-3">Our Portfolios</h4>
          <h2 className="text-4xl md:text-6xl font-black text-brand-dark tracking-tighter">Business <span className="text-brand-red italic">Ventures</span></h2>
        </div>

        <div className="space-y-32">
          {ventures.map((item, index) => (
            <div 
              key={item.title} 
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Side with "Float" effect */}
              <div className="w-full lg:w-1/2 group relative">
                <div className="absolute -inset-4 bg-brand-red/5 rounded-[3rem] blur-2xl group-hover:bg-brand-red/10 transition-all duration-500"></div>
                <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl border border-white">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent"></div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-slate-100">
                     {item.icon || <Smartphone className="text-brand-red" size={24} />}
                   </div>
                   <p className="text-brand-red font-bold uppercase tracking-widest text-xs">{item.subtitle}</p>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-black text-brand-dark tracking-tight leading-tight">{item.title}</h3>
                <p className="text-brand-gray text-lg leading-relaxed max-w-lg">{item.desc}</p>

                {/* SPECIAL HIGHLIGHT: E-Commerce Product Cards */}
                {item.isProductSection ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                    {item.products?.map((p) => (
                      <div key={p.name} className={`p-6 rounded-3xl border-2 transition-all ${p.status === 'Live' ? 'border-brand-red bg-white shadow-xl shadow-brand-red/5' : 'border-slate-200 bg-slate-100 opacity-60'}`}>
                        <div className="flex justify-between items-center mb-4">
  <img 
    src={p.name === 'BuyNow' ? '/buynow.png' : '/sellnow.png'} 
    alt={p.name} 
    className="h-6 w-auto object-contain" 
  />
  <span className={`text-[9px] font-black uppercase px-2 py-1 rounded-md ${p.status === 'Live' ? 'bg-brand-red text-white' : 'bg-slate-300 text-slate-600'}`}>
    {p.status}
  </span>
</div>
                        <div className="flex justify-between items-start mb-4">
                           <span className={`text-[10px] font-black uppercase px-2 py-1 rounded-md ${p.status === 'Live' ? 'bg-brand-red text-white' : 'bg-slate-300 text-slate-600'}`}>{p.status}</span>
                        </div>
                        <h5 className="text-xl font-bold text-brand-dark">{p.name}</h5>
                        <p className="text-xs text-brand-gray mb-6">{p.desc}</p>
                        {p.status === 'Live' ? (
                          <Link href={p.link} className="inline-flex items-center gap-2 text-brand-red font-black text-sm group/btn">
                            Visit Site <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                          </Link>
                        ) : (
                          <span className="text-xs font-bold text-slate-400">Launching 2026</span>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <button className="flex items-center gap-2 font-bold text-brand-dark hover:text-brand-red transition-colors group">
                    View Project Case Study <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}