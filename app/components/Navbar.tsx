"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Ventures", href: "#ventures" },
    { name: "About", href: "#about" },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 bg-white shadow-md ${
      isScrolled ? "py-2" : "py-4"
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="transition-transform hover:scale-105">
          {/* Size increased from h-12 to h-16 (mobile) and h-20 (desktop) */}
         {/* Increased height to h-24 on mobile and h-32 on desktop to show tiny text details */}
{/* Balanced height: h-12 on mobile, h-16 on desktop. Removed py-2 to stop stretching. */}
<img src="/logo.png" alt="Su Indra Logo" className="h-13 md:h-16 w-auto object-contain" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-bold uppercase tracking-widest transition-colors text-brand-dark hover:text-brand-red"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="#contact" 
            className="bg-brand-red text-white px-7 py-3 rounded-xl font-bold text-sm hover:bg-brand-dark transition-all shadow-xl shadow-brand-red/20"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="text-brand-dark" size={35} />
          ) : (
            <Menu className="text-brand-dark" size={35} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-brand-dark font-bold text-lg border-b border-slate-100 pb-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="#contact" 
            className="bg-brand-red text-white py-4 rounded-xl text-center font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  );
}