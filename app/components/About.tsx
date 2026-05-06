export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Section Label */}
        <div className="flex items-center gap-4 mb-12 md:mb-16">
          <span className="w-8 md:w-12 h-1 bg-brand-red rounded-full"></span>
          <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-brand-red">Who We Are</span>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Side: Image with offset frame */}
          <div className="w-full lg:w-1/2 flex justify-center px-4 md:px-0">
            <div className="relative group">
              <div className="absolute -left-4 -bottom-4 md:-left-6 md:-bottom-6 w-32 h-32 md:w-48 md:h-48 bg-brand-red/10 -z-10"></div>
              <div className="absolute -left-4 top-4 md:-left-8 md:top-8 w-full h-full border-[4px] md:border-[6px] border-brand-red -z-10 transition-all duration-500 group-hover:-left-2 group-hover:top-2 md:group-hover:-left-4 md:group-hover:top-4"></div>

              <div className="relative z-10 border-[6px] md:border-[8px] border-white shadow-2xl">
                <img
                  src="/indra_group_small1.png"
                  alt="Su Indra Groups Office"
                  className="w-full max-w-[320px] md:max-w-[400px] h-auto object-cover"
                />
              </div>

              <div className="absolute -right-4 -bottom-4 md:-right-6 md:-bottom-6 z-20 bg-brand-red text-white px-4 py-3 md:px-5 md:py-4 shadow-xl text-center">
                <p className="text-lg md:text-2xl font-black leading-none uppercase tracking-tighter">Est.</p>
                <p className="text-xl md:text-3xl font-black leading-none">2025</p>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
            <div className="space-y-2 text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl font-light tracking-widest uppercase text-brand-dark leading-tight">
                ABOUT <br/>
                <span className="text-brand-red font-black">COMPANY</span>
              </h2>
              <h3 className="text-xl md:text-2xl font-bold text-brand-dark">
                Su Indra Groups Pvt. Ltd.
              </h3>
            </div>

            <div className="w-16 h-1 bg-brand-red rounded-full mx-auto lg:mx-0"></div>

            <div className="space-y-5 text-slate-600 leading-relaxed text-sm md:text-base">
            <p>
                Su Indra Groups Pvt. Ltd. is a legally registered <span className="font-bold text-brand-dark tracking-tight">private limited company (Registration No. 381843) </span> headquartered in Janakpur, Dhanusha, Nepal.
              </p>

              <p>
                It is also registered under the <span className="font-semibold text-brand-dark">Department of Cottage & Small Industries</span>, Janakpur, Dhanusha 
                <span className="font-bold text-brand-dark"> (Industry Registration No. 19767/610/2082/083)</span>, with a focus on providing e-commerce platforms-
                <span className="text-brand-red font-bold italic"> “buynow.”</span> and 
                <span className="text-brand-red font-bold italic"> “sellnow.”</span> for online buying and selling of goods and services.
              </p>

              <p>
                The company operates through strategic partnerships and project-based ventures across 
                web development, e-commerce, and cybersecurity sectors, delivering innovative and secure 
                digital solutions. Our mission is to build scalable, reliable, and future-ready digital 
                ecosystems that empower businesses and individuals.
              </p>

              <p className="italic font-medium border-l-2 border-brand-red pl-4">
                With a growing portfolio of ventures, Su Indra Groups is committed to maintaining high 
                standards of technology, security, and customer trust.
              </p>
            </div>

            {/* Company Highlights Grid - 2 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 pt-4">
              <div className="border-l-4 border-brand-red pl-5">
                <p className="text-xl md:text-2xl font-black text-brand-dark leading-none">381843</p>
                <p className="text-[9px] font-bold text-brand-red uppercase tracking-widest mt-2">Company Registration Number</p>
              </div>
              
              <div className="border-l-4 border-brand-red pl-5">
                <p className="text-xl md:text-2xl font-black text-brand-dark leading-none">623511602</p>
                <p className="text-[9px] font-bold text-brand-red uppercase tracking-widest mt-2">VAT Registration Number</p>
              </div>

              <div className="border-l-4 border-slate-200 pl-5">
                <p className="text-sm md:text-base font-black text-brand-dark leading-tight uppercase">19767/610/2082/083</p>
                <p className="text-[9px] font-bold text-brand-red uppercase tracking-widest mt-2">Industry Registration Number</p>
              </div>

              <div className="border-l-4 border-slate-200 pl-5">
                <p className="text-sm md:text-base font-black text-brand-dark leading-tight uppercase">Janakpur, Dhanusha, Nepal</p>
                <p className="text-[9px] font-bold text-brand-red uppercase tracking-widest mt-2">Head Office Location</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6 text-center lg:text-left">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-3 bg-brand-dark text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-brand-red transition-all duration-300 shadow-xl group"
              >
                Our Services
                <span className="text-brand-red text-xl leading-none group-hover:translate-x-2 transition-transform">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}