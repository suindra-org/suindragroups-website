"use client";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

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
    <section id="contact" className="py-24 bg-slate-50 text-brand-dark"> {/* Light Gray Background */}
    <div className="container mx-auto px-6">
      {/* Inner Card - This creates a floating professional look */}
      <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
        
        {/* Left Side: Dark Info Panel */}
        <div className="lg:w-2/5 p-12 bg-brand-dark text-white">
          <h2 className="text-4xl font-bold mb-6">Let's talk <span className="text-brand-red">Together</span></h2>
          <p className="text-slate-400 mb-10 text-sm">Our mission is to architect secure, scalable, and sustainable digital ecosystems.</p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl">
              <div className="w-10 h-10 bg-brand-red rounded-xl flex items-center justify-center">📍</div>
              <p className="text-sm">Dhanusha, Janakpur, Nepal</p>
            </div>
            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl">
              <div className="w-10 h-10 bg-brand-red rounded-xl flex items-center justify-center">✉️</div>
              <p className="text-sm">info@suindragroups.com.np</p>
            </div>
          </div>
        </div>
  
        {/* Right Side: Clean White Form */}
        <div className="lg:w-3/5 p-12">
          <form ref={form} onSubmit={sendEmail} className="grid gap-5">
            <input name="user_name" placeholder="Full Name" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-brand-red shadow-sm" required />
            <input name="user_email" type="email" placeholder="Email Address" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-brand-red shadow-sm" required />
            <input name="subject" placeholder="Subject" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-brand-red shadow-sm" required />
            <textarea name="message" placeholder="How can we help?" rows={4} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-brand-red shadow-sm resize-none" required></textarea>
            <button type="submit" className="bg-brand-red text-white py-4 rounded-xl font-bold hover:bg-brand-dark transition-all shadow-lg shadow-brand-red/20">
              Send Inquiry
            </button>
          </form>
        </div>
  
      </div>
    </div>
  </section>
  );
}