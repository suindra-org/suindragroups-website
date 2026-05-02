export default function About() {
    return (
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
  
          {/* Section Label */}
          <div className="flex items-center gap-4 mb-16">
            <span className="w-12 h-1 bg-brand-red rounded-full"></span>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-red">Who We Are</span>
          </div>
  
          <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
  
            {/* Left Side: Image with offset frame */}
            <div className="md:w-1/2 flex justify-center">
              <div className="relative group">
                {/* Background decorative block */}
                <div className="absolute -left-6 -bottom-6 w-48 h-48 bg-brand-red/10 -z-10"></div>
  
                {/* Crimson offset frame */}
                <div className="absolute -left-8 top-8 w-full h-full border-[6px] border-brand-red -z-10 transition-all duration-500 group-hover:-left-4 group-hover:top-4"></div>
  
                {/* Image */}
                <div className="relative z-10 border-[8px] border-white shadow-2xl">
                  <img
                    src="/indra_group_small1.png"
                    alt="About Su Indra"
                    className="w-full max-w-[400px] h-auto object-cover"
                  />
                </div>
  
                {/* Floating badge */}
                <div className="absolute -right-6 -bottom-6 z-20 bg-brand-red text-white px-5 py-4 shadow-xl">
                  <p className="text-2xl font-black leading-none">Est.</p>
                  <p className="text-3xl font-black leading-none">2024</p>
                </div>
              </div>
            </div>
  
            {/* Right Side: Content */}
            <div className="md:w-1/2 space-y-8">
              <div>
                <h2 className="text-5xl md:text-6xl font-light tracking-widest uppercase text-brand-dark leading-tight">
                  ABOUT <br/>
                  <span className="text-brand-red font-black">COMPANY</span>
                </h2>
              </div>
  
              <div className="w-16 h-1 bg-brand-red rounded-full"></div>
  
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-brand-dark">
                  Su Indra Groups Pvt. Ltd.
                </h3>
  
                <p className="text-slate-500 leading-relaxed text-sm">
                  Su Indra Groups Pvt. Ltd. is a registered venture company (Registration No. 381843)
                  headquartered in <span className="font-bold text-brand-dark">Dhanusha, Janakpur, Nepal.</span>
                </p>
  
                <p className="text-slate-500 leading-relaxed text-sm">
                  The company operates through strategic partnerships and project-based ventures across
                  web development, e-commerce, and cybersecurity sectors. Our mission is to create secure,
                  scalable, and sustainable digital ecosystems that enable business growth and long-term
                  resilience.
                </p>
              </div>
  
              {/* Stats Row */}
              <div className="flex gap-0 pt-2">
                <div className="border-l-4 border-brand-red pl-5 pr-10">
                  <p className="text-3xl font-black text-brand-dark leading-none">381843</p>
                  <p className="text-[10px] font-bold text-brand-red uppercase tracking-widest mt-1">Regd. No.</p>
                </div>
                <div className="border-l-4 border-slate-200 pl-5 pr-10">
                  <p className="text-3xl font-black text-brand-dark leading-none">Janakpur</p>
                  <p className="text-[10px] font-bold text-brand-red uppercase tracking-widest mt-1">H.O. Location</p>
                </div>
                <div className="border-l-4 border-slate-200 pl-5">
                  <p className="text-3xl font-black text-brand-dark leading-none">3+</p>
                  <p className="text-[10px] font-bold text-brand-red uppercase tracking-widest mt-1">Ventures</p>
                </div>
              </div>
  
              {/* CTA */}
              <div className="pt-2">
  <a
    href="#services"
    className="inline-flex items-center gap-3 bg-brand-dark text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-brand-red transition-colors duration-300"
  >
    Our Services
    <span className="text-brand-red">&#8594;</span>
  </a>
</div>
            </div>
  
          </div>
        </div>
      </section>
    );
  }