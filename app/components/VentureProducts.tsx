"use client";
import { ExternalLink, Smartphone, Globe } from "lucide-react";

const products = [
  {
    title: "BuyNow",
    description: "The premier digital marketplace in Nepal. Secure, fast, and reliable transactions for every user.",
    link: "https://buynow.suindragroups.com.np/",
    status: "Live Now",
    isLive: true,
    platform: "Web & Mobile App"
  },
  {
    title: "SellNow",
    description: "Empowering local vendors to reach a global audience. A seamless selling ecosystem coming your way.",
    link: "#",
    status: "Coming Soon",
    isLive: false,
    platform: "Mobile Exclusive"
  }
];

export default function VentureProducts() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-brand-red font-bold tracking-[0.2em] uppercase text-sm">Our Ecosystem</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">Digital Products</h2>
          </div>
          <p className="text-brand-gray max-w-md mt-4 md:mt-0 text-lg">
            Strategically developed platforms designed to revolutionize digital commerce in the region.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((item) => (
            <div key={item.title} className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-100 overflow-hidden group transition-all duration-500 hover:-translate-y-2">
              {/* Sponsored Badge */}
              <div className="absolute top-6 right-6 flex items-center gap-2">
                <span className={`text-[10px] font-black uppercase px-3 py-1 rounded-full ${item.isLive ? 'bg-green-100 text-green-600' : 'bg-brand-red/10 text-brand-red'}`}>
                  {item.status}
                </span>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="bg-brand-red/10 p-3 rounded-2xl">
                  {item.isLive ? <Globe className="text-brand-red" size={24}/> : <Smartphone className="text-brand-red" size={24}/>}
                </div>
                <span className="text-sm font-semibold text-brand-gray tracking-wider uppercase">{item.platform}</span>
              </div>

              <h3 className="text-4xl font-extrabold text-brand-dark mb-4">{item.title}</h3>
              <p className="text-brand-gray text-lg mb-10 leading-relaxed max-w-sm">
                {item.description}
              </p>

              <a 
                href={item.link}
                target="_blank"
                className={`inline-flex items-center gap-2 font-bold px-8 py-4 rounded-xl transition-all ${
                  item.isLive ? 'bg-brand-dark text-white hover:bg-brand-red' : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                {item.isLive ? "Visit Marketplace" : "Coming Soon"}
                {item.isLive && <ExternalLink size={18}/>}
              </a>

              {/* Decorative background element */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-red/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}