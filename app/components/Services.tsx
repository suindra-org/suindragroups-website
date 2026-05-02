import { Monitor, ShieldCheck, ShoppingBag, Handshake, ArrowRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Enterprise Web",
    desc: "Design and development of enterprise-grade web platforms optimized for performance, reliability, and business growth.",
    icon: <Monitor className="text-brand-red group-hover:text-white transition-colors duration-500" size={32} />
  },
  {
    id: "02",
    title: "E-Commerce Infra",
    desc: "Secure and scalable e-commerce systems supporting digital transactions, integrations, and operational efficiency.",
    icon: <ShoppingBag className="text-brand-red group-hover:text-white transition-colors duration-500" size={32} />
  },
  {
    id: "03",
    title: "Cybersecurity",
    desc: "Strengthening digital trust through cybersecurity architecture, risk assessment, and data protection protocols.",
    icon: <ShieldCheck className="text-brand-red group-hover:text-white transition-colors duration-500" size={32} />
  },
  {
    id: "04",
    title: "Venture Partnerships",
    desc: "Strategic collaboration with startups and enterprises across technology-driven business initiatives and scale.",
    icon: <Handshake className="text-brand-red group-hover:text-white transition-colors duration-500" size={32} />
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-white overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-[0.03] select-none">
        <h1 className="text-[20vw] font-black text-brand-dark text-center leading-none">EXPERTISE</h1>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-1.5 mb-4 border border-brand-red/20 rounded-full bg-brand-red/5">
             <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-[10px]">What we deliver</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-brand-dark mb-6 tracking-tighter">
            Our <span className="text-brand-red">Core Services</span>
          </h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            Su Indra Groups Pvt. Ltd. operates as a venture-driven organization, delivering technology-focused business solutions with an emphasis on security and scalability.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div 
              key={s.title} 
              className="group relative p-10 bg-white border border-slate-100 rounded-[2.5rem] hover:shadow-[0_20px_50px_rgba(225,29,72,0.1)] transition-all duration-500 flex flex-col justify-between overflow-hidden"
            >
              {/* Numbering Background */}
              <span className="absolute top-6 right-8 text-5xl font-black text-slate-50 group-hover:text-brand-red/5 transition-colors duration-500">
                {s.id}
              </span>

              <div>
                <div className="mb-8 inline-flex p-5 bg-slate-50 rounded-2xl group-hover:bg-brand-red transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3 shadow-sm group-hover:shadow-brand-red/20">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-extrabold text-brand-dark mb-4 group-hover:text-brand-red transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-brand-gray text-sm leading-relaxed mb-8">
                  {s.desc}
                </p>
              </div>

              {/* <div className="flex items-center gap-2 text-brand-red font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                Learn More <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </div> */}

              {/* Bottom Decorative Bar */}
              <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-brand-red group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}