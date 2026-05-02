"use client";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Mail, MapPin, MessageCircle, Send, Phone, ArrowRight } from 'lucide-react';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_ppl0wtl', 'template_97fblnr', form.current!, 'Eh_jI0toCt8tpgqMZ')
      .then(() => {
        alert("Message sent successfully!");
        form.current?.reset();
        setLoading(false);
      }, (error) => {
        alert("Failed to send: " + error.text);
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="relative py-24 bg-white overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-red/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h4 className="text-brand-red font-bold uppercase tracking-[0.3em] text-xs mb-3">Get in Touch</h4>
          <h2 className="text-4xl md:text-6xl font-black text-brand-dark tracking-tighter">
            Let's Start a <span className="text-brand-red italic text-gradient">Conversation</span>
          </h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(15,23,42,0.1)] overflow-hidden flex flex-col lg:flex-row border border-slate-100">
            
            {/* Left Side: Dark Info Panel */}
            <div className="lg:w-[40%] p-10 md:p-16 bg-brand-dark text-white relative overflow-hidden">
              {/* Abstract pattern overlay */}
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6">Corporate Information</h3>
                <p className="text-slate-400 mb-12 leading-relaxed">
                  Our mission is to architect secure, scalable, and sustainable digital ecosystems. 
                  Reach out for ventures, partnerships, or cybersecurity consultation.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-1">Headquarters</p>
                      <p className="text-sm font-medium text-slate-200">Dhanusha, Janakpur, Nepal</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-1">Official Email</p>
                      <p className="text-sm font-medium text-slate-200">info@suindragroups.com.np</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-1">Direct Line</p>
                      <p className="text-sm font-medium text-slate-200">+977 9844129557</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Call to Action */}
                <div className="mt-16 p-6 bg-white/5 rounded-[2rem] border border-white/10">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Fastest Response</p>
                  <a 
                    href="https://wa.me/9779844129557" 
                    target="_blank"
                    className="flex items-center justify-between bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-2xl font-bold transition-all transform hover:scale-105"
                  >
                    <span className="flex items-center gap-3"><MessageCircle size={20}/> Chat on WhatsApp</span>
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side: Clean White Form */}
            <div className="lg:w-[60%] p-10 md:p-16 bg-slate-50/50">
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-gray ml-2">Full Name</label>
                    <input name="user_name" type="text" placeholder="John Doe" className="w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all shadow-sm" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-gray ml-2">Email Address</label>
                    <input name="user_email" type="email" placeholder="john@company.com" className="w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all shadow-sm" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-gray ml-2">Subject</label>
                  <input name="subject" type="text" placeholder="Partnership Inquiry" className="w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all shadow-sm" required />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-gray ml-2">Message</label>
                  <textarea name="message" placeholder="How can we help you?" rows={5} className="w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all shadow-sm resize-none" required></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-brand-red text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-brand-dark transition-all transform hover:shadow-[0_20px_50px_rgba(225,29,72,0.3)] disabled:opacity-50"
                >
                  {loading ? "Processing..." : (
                    <>Send Inquiry <Send size={20} /></>
                  )}
                </button>
              </form>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}