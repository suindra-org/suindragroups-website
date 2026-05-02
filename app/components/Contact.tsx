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
    <section id="contact" className="py-24 bg-brand-dark text-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-5xl font-bold mb-8">Let's build <br/><span className="text-brand-red">Together</span></h2>
          <p className="text-slate-400 text-lg mb-10">Our mission is to architect secure, scalable, and sustainable digital ecosystems.</p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">📍</div>
              <p>Dhanusha, Janakpur, Nepal</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">📧</div>
              <p>info@suindragroups.com.np</p>
            </div>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="bg-white p-8 md:p-12 rounded-3xl text-brand-dark">
          <div className="grid gap-6">
            <input name="user_name" type="text" placeholder="Full Name" className="w-full p-4 bg-slate-100 rounded-xl outline-brand-red" required />
            <input name="user_email" type="email" placeholder="Email Address" className="w-full p-4 bg-slate-100 rounded-xl outline-brand-red" required />
            <input name="subject" type="text" placeholder="Subject" className="w-full p-4 bg-slate-100 rounded-xl outline-brand-red" required />
            <textarea name="message" placeholder="How can we help?" rows={4} className="w-full p-4 bg-slate-100 rounded-xl outline-brand-red resize-none" required></textarea>
            <button type="submit" disabled={loading} className="bg-brand-red text-white py-4 rounded-xl font-bold hover:bg-red-700 transition">
              {loading ? "Sending..." : "Send Inquiry"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}