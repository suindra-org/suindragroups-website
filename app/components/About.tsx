export default function About() {
    return (
      <section id="about" className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
  
          {/* Section Label - Adjusted tracking for mobile */}
          <div className="flex items-center gap-4 mb-12 md:mb-16">
            <span className="w-8 md:w-12 h-1 bg-brand-red rounded-full"></span>
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-brand-red">Who We Are</span>
          </div>
  
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
  
            {/* Left Side: Image with offset frame */}
            {/* Added 'px-4' and 'mb-10' to ensure offset elements stay on screen on mobile */}
            <div className="w-full lg:w-1/2 flex justify-center px-4 md:px-0">
              <div className="relative group">
                {/* Background decorative block - scaled down for mobile */}
                <div className="absolute -left-4 -bottom-4 md:-left-6 md:-bottom-6 w-32 h-32 md:w-48 md:h-48 bg-brand-red/10 -z-10"></div>
  
                {/* Crimson offset frame - smaller offset on mobile */}
                <div className="absolute -left-4 top-4 md:-left-8 md:top-8 w-full h-full border-[4px] md:border-[6px] border-brand-red -z-10 transition-all duration-500 group-hover:-left-2 group-hover:top-2 md:group-hover:-left-4 md:group-hover:top-4"></div>
  
                {/* Image Container */}
                <div className="relative z-10 border-[6px] md:border-[8px] border-white shadow-2xl">
                  <img
                    src="/indra_group_small1.png"
                    alt="About Su Indra"
                    className="w-full max-w-[320px] md:max-w-[400px] h-auto object-cover"
                  />
                </div>
  
                {/* Floating badge - Responsive font and padding */}
                <div className="absolute -right-4 -bottom-4 md:-right-6 md:-bottom-6 z-20 bg-brand-red text-white px-4 py-3 md:px-5 md:py-4 shadow-xl">
                  <p className="text-lg md:text-2xl font-black leading-none uppercase">Est.</p>
                  <p className="text-xl md:text-3xl font-black leading-none">2025</p>
                </div>
              </div>
            </div>
  
            {/* Right Side: Content */}
            <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
              <div>
                {/* Responsive Heading: text-4xl on mobile, 6xl on desktop */}
                <h2 className="text-4xl md:text-6xl font-light tracking-widest uppercase text-brand-dark leading-tight">
                  ABOUT <br/>
                  <span className="text-brand-red font-black">COMPANY</span>
                </h2>
              </div>
  
              <div className="w-16 h-1 bg-brand-red rounded-full"></div>
  
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-brand-dark">
                  Su Indra Groups Pvt. Ltd.
                </h3>
  
                <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                  Su Indra Groups Pvt. Ltd. is a registered venture company (Registration No. 381843)
                  headquartered in <span className="font-bold text-brand-dark">Dhanusha, Janakpur, Nepal.</span>
                </p>
  
                <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                  The company operates through strategic partnerships and project-based ventures across
                  web development, e-commerce, and cybersecurity sectors. Our mission is to create secure,
                  scalable, and sustainable digital ecosystems.
                </p>
              </div>
  
              {/* Stats Row: Grid for mobile (2 columns), flex for desktop */}
              <div className="grid grid-cols-2 sm:flex sm:gap-0 pt-4 gap-y-8">
                <div className="border-l-4 border-brand-red pl-5 pr-4 md:pr-10">
                  <p className="text-2xl md:text-3xl font-black text-brand-dark leading-none">381843</p>
                  <p className="text-[10px] font-bold text-brand-red uppercase tracking-widest mt-1">Regd. No.</p>
                </div>
                <div className="border-l-4 border-slate-200 pl-5 pr-4 md:pr-10">
                  <p className="text-2xl md:text-3xl font-black text-brand-dark leading-none">Janakpur</p>
                  <p className="text-[10px] font-bold text-brand-red uppercase tracking-widest mt-1">H.O. Location</p>
                </div>
                <div className="border-l-4 border-slate-200 pl-5 col-span-2 sm:col-auto">
                  <p className="text-2xl md:text-3xl font-black text-brand-dark leading-none">3+</p>
                  <p className="text-[10px] font-bold text-brand-red uppercase tracking-widest mt-1">Ventures</p>
                </div>
              </div>
  
              {/* CTA - Full width on mobile, inline on desktop */}
              <div className="pt-6">
                <a
                  href="#services"
                  className="flex sm:inline-flex items-center justify-center gap-3 bg-brand-dark text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-brand-red transition-all duration-300 shadow-xl"
                >
                  Our Services
                  <span className="text-brand-red text-xl leading-none">→</span>
                </a>
              </div>
            </div>
  
          </div>
        </div>
      </section>
    );
  }