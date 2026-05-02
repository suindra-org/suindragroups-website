const developers = [
    { name: "Su Indra", role: "CEO & Founder", img: "https://via.placeholder.com/150" },
    { name: "Team Member", role: "Full Stack Developer", img: "https://via.placeholder.com/150" },
    { name: "Team Member", role: "Cybersecurity Analyst", img: "https://via.placeholder.com/150" },
    { name: "Team Member", role: "UI/UX Architect", img: "https://via.placeholder.com/150" },
  ];
  
  export default function Team() {
    return (
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet our <span className="text-brand-red">Developers</span></h2>
            <div className="w-20 h-1.5 bg-brand-red mx-auto rounded-full"></div>
          </div>
  
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {developers.map((dev) => (
              <div key={dev.name} className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full p-1 border-2 border-slate-100 group-hover:border-brand-red transition-all duration-500 overflow-hidden shadow-lg">
                  <img src={dev.img} alt={dev.name} className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500 hover:scale-110" />
                </div>
                <h4 className="text-xl font-bold text-brand-dark">{dev.name}</h4>
                <p className="text-brand-gray font-medium text-sm mt-1 uppercase tracking-widest">{dev.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }