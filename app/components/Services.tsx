import { Monitor, ShieldCheck, ShoppingBag, Rocket } from "lucide-react";

const services = [
  {
    title: "Enterprise Web",
    desc: "Scalable web platforms optimized for performance and reliability.",
    icon: <Monitor className="text-brand-red" size={32} />
  },
  {
    title: "E-Commerce",
    desc: "Secure infrastructure for digital transactions and retail growth.",
    icon: <ShoppingBag className="text-brand-red" size={32} />
  },
  {
    title: "Cybersecurity",
    desc: "Advanced architecture and risk assessment to protect your data.",
    icon: <ShieldCheck className="text-brand-red" size={32} />
  },
  {
    title: "Venture Capital",
    desc: "Strategic partnership and funding for technology-driven startups.",
    icon: <Rocket className="text-brand-red" size={32} />
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h4 className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4">What We Do</h4>
        <h2 className="text-4xl md:text-5xl font-bold mb-16">Core Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s) => (
            <div key={s.title} className="p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="mb-6 inline-block p-4 bg-white rounded-2xl group-hover:bg-brand-red group-hover:text-white transition-colors">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{s.title}</h3>
              <p className="text-brand-gray text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}