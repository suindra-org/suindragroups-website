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

          {/* Left Side: Image with Offset Frame */}
          <div className="w-full lg:w-1/2 flex justify-center px-4 md:px-0">
            <div className="relative group">
              {/* Background Decorative Blocks */}
              <div className="absolute -left-4 -bottom-4 md:-left-6 md:-bottom-6 w-32 h-32 md:w-48 md:h-48 bg-brand-red/10 -z-10"></div>
              <div className="absolute -left-4 top-4 md:-left-8 md:top-8 w-full h-full border-[4px] md:border-[6px] border-brand-red -z-10 transition-all duration-500 group-hover:-left-2 group-hover:top-2 md:group-hover:-left-4 md:group-hover:top-4"></div>

              {/* Image Container */}
              <div className="relative z-10 border-[6px] md:border-[8px] border-white shadow-2xl">
                <img
                  src="/indra_group_small1.png"
                  alt="Su Indra Groups Office"
                  className="w-full max-w-[320px] md:max-w-[400px] h-auto object-cover"
                />
              </div>

              {/* Est. Badge */}
              <div className="absolute -right-4 -bottom-4 md:-right-6 md:-bottom-6 z-20 bg-brand-red text-white px-4 py-3 md:px-5 md:py-4 shadow-xl text-center">
                <p className="text-lg md:text-2xl font-black leading-none uppercase tracking-tighter">Est.</p>
                <p className="text-xl md:text-3xl font-black leading-none">2025</p>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 space-y-8">
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

            {/* Introductory Paragraphs - Exact Copy Paste */}
            <div className="space-y-5 text-slate-600 leading-relaxed text-sm md:text-base">
              <p>
                Su Indra Groups Pvt. Ltd. is a legally registered private limited company headquartered in Janakpur. The company is engaged in providing innovative digital services and operates e-commerce platforms such as 
                <span className="text-brand-red font-bold italic"> “buynow.”</span> and 
                <span className="text-brand-red font-bold italic"> “sellnow.”</span> for online buying and selling of goods and services.
              </p>

              <p>
                The company works through strategic partnerships and project-based ventures in the fields of web development, e-commerce, and cybersecurity, delivering secure, scalable, and future-ready digital solutions. Su Indra Groups Pvt. Ltd. is committed to maintaining high standards of technology, customer trust, and service excellence.
              </p>
            </div>

            {/* Company Details - Exact Copy Paste in Professional Layout */}
            <div className="bg-slate-50 p-6 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-brand-dark mb-8 flex items-center gap-3">
                <span className="w-2 h-2 bg-brand-red rounded-full"></span>
                Company Details
              </h4>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3 border-b border-slate-200 pb-3">
                  <span className="text-brand-red font-bold mt-1">•</span>
                  <p className="text-sm text-slate-600"><strong className="text-brand-dark">Company Name:</strong> Su Indra Groups Pvt. Ltd.</p>
                </li>
                <li className="flex items-start gap-3 border-b border-slate-200 pb-3">
                  <span className="text-brand-red font-bold mt-1">•</span>
                  <p className="text-sm text-slate-600"><strong className="text-brand-dark">Company Registration Number:</strong> 381843</p>
                </li>
                <li className="flex items-start gap-3 border-b border-slate-200 pb-3">
                  <span className="text-brand-red font-bold mt-1">•</span>
                  <p className="text-sm text-slate-600"><strong className="text-brand-dark">Company Registration Authority:</strong> Office of the Company Registrar, Nepal</p>
                </li>
                <li className="flex items-start gap-3 border-b border-slate-200 pb-3">
                  <span className="text-brand-red font-bold mt-1">•</span>
                  <p className="text-sm text-slate-600"><strong className="text-brand-dark">Industry Registration Authority:</strong> Department of Cottage & Small Industries, Janakpur, Dhanusha</p>
                </li>
                <li className="flex items-start gap-3 border-b border-slate-200 pb-3">
                  <span className="text-brand-red font-bold mt-1">•</span>
                  <p className="text-sm text-slate-600"><strong className="text-brand-dark">Industry Registration Number:</strong> 19767/610/2082/083</p>
                </li>
                <li className="flex items-start gap-3 border-b border-slate-200 pb-3">
                  <span className="text-brand-red font-bold mt-1">•</span>
                  <p className="text-sm text-slate-600"><strong className="text-brand-dark">PAN/VAT Number:</strong> 623511602</p>
                </li>
                <li className="flex items-start gap-3 border-b border-slate-200 pb-3">
                  <span className="text-brand-red font-bold mt-1">•</span>
                  <p className="text-sm text-slate-600"><strong className="text-brand-dark">Head Office Address:</strong> Janakpur-09, Dhanusha, Nepal</p>
                </li>
                <li className="flex items-start gap-3 border-b border-slate-200 pb-3">
                  <span className="text-brand-red font-bold mt-1">•</span>
                  <p className="text-sm text-slate-600"><strong className="text-brand-dark">Head Office Location:</strong> Janakpur, Dhanusha, Nepal</p>
                </li>
                <li className="flex items-start gap-3 border-b border-slate-200 pb-3">
                  <span className="text-brand-red font-bold mt-1">•</span>
                  <p className="text-sm text-slate-600"><strong className="text-brand-dark">Grievance Handling Contact Person:</strong> Gauri Shankar Sah</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-red font-bold mt-1">•</span>
                  <p className="text-sm text-slate-600"><strong className="text-brand-dark">Contact Number for Complaints & Support:</strong> +977 9844129557</p>
                </li>
              </ul>
            </div>

            {/* Our Mission - Exact Copy Paste */}
            <div className="bg-brand-dark p-8 md:p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red opacity-10 blur-3xl -mr-16 -mt-16 group-hover:opacity-20 transition-opacity"></div>
               <h4 className="text-brand-red font-bold uppercase tracking-[0.2em] text-[10px] mb-4 uppercase">Our Mission</h4>
               <p className="text-lg md:text-xl font-medium leading-relaxed italic">
                 "To build secure, reliable, and scalable digital ecosystems that empower businesses and individuals through technology-driven solutions."
               </p>
            </div>

            {/* CTA */}
            <div className="pt-6 text-center lg:text-left">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-3 bg-brand-dark text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-brand-red transition-all duration-300 shadow-xl group rounded-xl"
              >
                Explore Services
                <span className="text-brand-red text-xl leading-none group-hover:translate-x-2 transition-transform">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}