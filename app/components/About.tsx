export default function About() {
    return (
      <section id="about" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-red/10 rounded-full"></div>
              <h4 className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4">Established Excellence</h4>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">About <span className="text-brand-red italic">Company</span></h2>
              <p className="text-brand-gray text-lg leading-relaxed mb-6 font-medium text-slate-900">
                 Su Indra Groups Pvt. Ltd. is a registered venture company (No. 381843) headquartered in Dhanusha, Janakpur, Nepal.
              </p>
              <p className="text-brand-gray leading-relaxed mb-10">
                By blending innovation with strategic foresight, we empower organizations to build long-term resilience and thrive as leaders within an increasingly complex and evolving global digital landscape.
              </p>
              <div className="flex gap-10">
                 <div>
                   <p className="text-3xl font-black text-brand-dark">381843</p>
                   <p className="text-xs font-bold text-brand-red uppercase tracking-widest">Reg. No</p>
                 </div>
                 <div>
                   <p className="text-3xl font-black text-brand-dark">Janakpur</p>
                   <p className="text-xs font-bold text-brand-red uppercase tracking-widest">H.O Location</p>
                 </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full aspect-square bg-white rounded-[3rem] shadow-2xl p-12 flex items-center justify-center border border-slate-100">
             {/* Replace with your high-res logo or illustration */}
             <span className="text-brand-dark font-black text-7xl opacity-10">SU INDRA</span>
          </div>
        </div>
      </section>
    );
  }